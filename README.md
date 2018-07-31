# Configuration
- `cat config.ts.default > config.ts`
- `npm install`

# Scripts
- `npm run dev`: Starts the app in development mode (localhost:8080)
- `npm run test`
- `npm run build`: Builds both the app and the server
- `npm run build:docker`: Builds both the app and the server inside a docker image
- `npm run start`: Starts the app (localhost:3000)
- `npm run start:docker`: Starts the app inside a docker container (localhost:3000)
    - The container is removed after stopping it
    - To stop it: `docker stop phones-example`
