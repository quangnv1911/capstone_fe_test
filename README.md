<h1 align="center" id="title">Front-end Capstone</h1>

<p align="center"><img src="https://socialify.git.ci/quangnv1911/capstone_fe_test/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="project-image"></p>

<p id="description">This is the frontend part of the Capstone project</p>

## Folder Structure
```js
├── .husky/                      # Custom Husky hooks for Git
├── build/                       # Build output directory
├── scripts/                    # Custom scripts
│   ├── buildServer/            # Scripts to build server
│   └── tests/                  # Scripts to run tests
├── server/                     # Server configuration
├── src/                        # Source files
│   ├── assets/                 # Assets (CSS, images)
│   │   ├── css/                # CSS files
│   │   └── img/                # Image files
│   ├── components/            # React components
│   │   ├── common/             # Common components
│   │   └── features/           # Feature-specific components
│   ├── hooks/                  # Custom hooks
│   ├── layouts/                # Layouts for the website
│   ├── locales/                # Localization (i18n) configuration
│   ├── pages/                  # Page configurations and routes
│   ├── plugins/                # Project plugins
│   ├── renderer/               # Renderer configuration
│   ├── stores/                 # State management configuration
│   ├── types/                  # TypeScript types
│   └── utils/                  # Utility functions and constants
│       ├── constants/          # Constants
│       ├── helper/             # Helper functions
│       └── providers/          # Providers
├── .gitignore                   # Git ignore file
├── README.md                    # Project documentation
└── package.json                 # Project metadata and dependencies

```
## Commands

The following commands are available:

| Command                     | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `npm install`               | Project setup                                    |
| `npm run build`             | Compiles and minifies for production             |
| `npm run server:prod`       | Runs productions server                          |
| **Develop**                 |                                                  |
| `npm run dev`               | Compiles and hot-reloads for development         |
| `npm run server:dev`        | Run development server                           |
| `npm run server:prod:ts`    | Run production server without build (ts-node)    |
| `npm run server:build`      | Build Server into an executable cjs file         |
| **Production**              |                                                  |
| `npm run prod`              | Build project and server and run them            |
| **Test**                    |                                                  |
| `npm run test:lint`         | Run all linters                                  |
| `npm run test:lint:eslint`  | Run linter eslint                                |
| `npm test`                  | Run all tests & linters                          |
| **Maintenance**             |                                                  |
| `npm run update`            | Check for updates                                |

### Config environment
Environment Variables

Development Environment
For development, copy the following environment variables into a .env file in the root directory of the project:
```js
PUBLIC_ENV__META__BASE_URL="http://localhost:3000"
PUBLIC_ENV__META__DEFAULT_AUTHOR="QuangNV"
PUBLIC_ENV__META__DEFAULT_DESCRIPTION="This is the front end"
PUBLIC_ENV__META__DEFAULT_TITLE="TBQD"
PUBLIC_ENV__META__BACKEND="http://localhost:8080"
PUBLIC_ENV__META__CHECKSUM_KEY="40612359b37772321b7"
```
Production Environment
For production builds, create a .env.production file in the root directory and add the production-specific values:
```js
PUBLIC_ENV__META__BASE_URL="https://yourproductionurl.com"
PUBLIC_ENV__META__DEFAULT_AUTHOR="QuangNV"
PUBLIC_ENV__META__DEFAULT_DESCRIPTION="This is the production front end"
PUBLIC_ENV__META__DEFAULT_TITLE="TBQD Production"
PUBLIC_ENV__META__BACKEND="https://backend.com"
PUBLIC_ENV__META__CHECKSUM_KEY="production_checksum_key"
```

Variable Descriptions
```js
PUBLIC_ENV__META__BASE_URL: The base URL for the front-end application.
PUBLIC_ENV__META__DEFAULT_AUTHOR: The default author name for the project.
PUBLIC_ENV__META__DEFAULT_DESCRIPTION: A brief description of the front-end application.
PUBLIC_ENV__META__DEFAULT_TITLE: The default title for the project.
PUBLIC_ENV__META__BACKEND: The URL for the backend server.
PUBLIC_ENV__META__CHECKSUM_KEY: A unique key used for checksum purposes.
```
Important Notes

Do not commit the .env or .env.production files to version control. Add them to your .gitignore file to prevent sensitive information from being exposed.
Make sure to update these variables according to your development, staging, or production environments.
When deploying to production, ensure your build process is set up to use the .env.production file instead of the default .env file.

Building for Production
To use the .env.production file when building for production, you may need to modify your build script. The exact method depends on your build tool and framework. Here's a general example:

Example using a Node.js script
```js
NODE_ENV=production npm run build
Make sure your build tool is configured to load the .env.production file when NODE_ENV is set to production.
```

### Docker

Docker can be run in development mode utilizing `docker-compose.overwrite.yml`:
```bash
docker compose up
```

Docker can be run in production mode:
```bash
docker compose -f docker-compose.yml up
```

### Update

You can get a list of packes to update by running `npm run update`.

Appending `-u ` will also update the packages in the `package.json`. You have to run `npm install` again after.

```bash
npm run update -- -u
npm install
```

## Endpoints

The following endpoints are provided given the right command is executed or all three if `docker compose` is used:

| Endpoint                                       | Description   |
| ---------------------------------------------- | ------------- |
| [http://localhost:3000](http://localhost:3000) | Web           |


