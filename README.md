# PNPM Monorepo

This is a PNPM monorepo, which contains a client and an API. In order to use this repo, you must have PNPM installed on your system. If you do not have PNPM installed, you can install it by following the instructions on their website: <https://pnpm.io/installation>.

## Installation

To get started, simply clone this repo and run the following command to install the dependencies for both the client and API:

```
pnpm install
```

## Usage

Once the dependencies have been installed, you can start the database by running the following command:

```
pnpm docker-up
```

This will start the database required for the application to run.


To drop the database and start again

```
pnpm docker-down
```




Next, to start both the client and API, run the following command:

```
pnpm start
```

The client will be available at <http://localhost:3000> and the API will be available at <http://localhost:3050>.



##### Note
The `pnpm clean` command can be used to remove the `node_modules` directories from the pnpm monorepo.
After running this command, you will need to run `pnpm install` again to reinstall the dependencies for each package in the monorepo.


## Problems

Unfortunately, the relation between product and images was not implemented due to a bug in the `nestjs-query` package used for this project. The package, `@ptc-org/nestjs-query-graphql`, is actually a fork of a fork, which may have contributed to the bug. The issue can be found here: <https://github.com/TriPSs/nestjs-query/issues/103>.
The issue was discovered towards the end of the project and the time invested so far will not allow for a new implementation of this feature.

Please note that the requirements of building a project in a day are unrealistic and a joke. As a professional, I value my time and expertise, and i have an hourly rate for demo projects like this. I do not work for free.



## What is implemented?
### Minimal Requirements

| Tasks | Status |
| :---: | :----: |
| Implement majority of the required queries and mutations | ✅ |
| Use GraphQL federation (Apollo federation v2) or schema stitching | ❌ |
| Minimal local working example | ✅ |
| At least some minimal filtering options on the queries | ✅ |

### Bonus Points

| Tasks | Status |
| :---: | :----: |
| Implement all the required queries and mutations | ✅ |
| Use TypeScript | ✅ |
| Use NestJS | ✅ |
| Use GraphQL federation (Apollo federation v2) | ❌ |
| Use TypeORM with MySQL | ✅ |
| (provide DB schemas, migrations and seeders) | ❌ |
| Advanced/multiple filtering options on the queries | ✅ |
| Create full Dockerfile and docker-compose.yml for running the APIs and DB locally | ✅ |
| Implement CI/CD pipeline for test, build and deployment of the APIs (Gitlab, Github Actions, etc.) | ❌ |
| Deploy the APIs to a cloud provider of your choice | ❌ |

### Above and Beyond

| Tasks | Status |
| :---: | :----: |
| Unit tests | ❌ |
| Extra items that you think are important for a production ready API | ✅ |
| Simple frontend showcasing the new API usage | ✅ |





