import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './image-gallery.css';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const imageQuery = `
  query {
  images {
    edges {
      node {
        id
        url
        name
        alt
        priority
      }
    }
  }
  }
`;

const productsQuery = `
  query {
  products {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        name
        description
        sku
        price
        status
        images {
          id
          url
        }

      }
    }
    
  }
  }
`;

function App() {
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [hasChanged, setHasChanged] = useState(false);
  React.useEffect(() => {
    (async () => {
      const res = await axios
        .post('http://localhost:3050/graphql', {
          query: imageQuery,
        })
        .catch((err) => null);
      const imagesRes = res?.data?.data?.images?.edges.map((e) => e.node);
      setImages(imagesRes);
    })();

    (async () => {
      const res = await axios
        .post('http://localhost:3050/graphql', {
          query: productsQuery,
        })
        .catch((err) => null);
      console.log(res);
      const productsRes = res?.data?.data?.products?.edges.map((e) => e.node);
      setProducts(productsRes);
    })();
  }, [hasChanged]);

  const getRandomImage = async () => {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search');

    const newImage = res.data[0];
    const submitNewImage = await axios
      .post('http://localhost:3050/graphql', {
        query: `
        mutation {
        createOneImage(input: {
          image: {
          url: "${newImage.url}"
          name: "${newImage.id}"
          alt: "Some ALT"
          priority: 1000
          }
        }) {
          id
        }
        }

        `,
      })
      .catch((err) => null);
    setHasChanged(!hasChanged);
  };

  const addProduct = async () => {
    const submitNewProduct = await axios
      .post('http://localhost:3050/graphql', {
        query: `
mutation {
  createOneProduct(
    input: {
      product: {
        name: "${faker.commerce.productName()}"
        description: "${faker.commerce.productDescription()}"
        sku: "${faker.random.number}"
        status: "active"
        price: ${faker.commerce.price()}
      }
    }
  ) {
    id
  }
}


        `,
      })
      .catch((err) => null);
    setHasChanged(!hasChanged);
  };

  console.log(images);
  return (
    <div className="App">
      <button
        onClick={getRandomImage}
        style={{ marginRight: '5px' }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Images to API
      </button>
      <button
        onClick={addProduct}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Products to API
      </button>
      <div className="max-w-xs ">
        <div className="w-full rounded">
          {images.length ? (
            <ImageGallery items={images.map((e) => ({ original: e.url }))} />
          ) : (
            ''
          )}
          Number of images: {images.length}
        </div>
      </div>
      Number of products: {products.length}
      <div className=" flex flex-wrap">
        {products.reverse().map((e) => (
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {e.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {e.description}
            </p>
            {e.price}$
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
