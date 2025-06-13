const port = process.env.PORT || 3000;
const route = process.env.API_ROUTE;
const environment = process.env.NODE_ENV;

export {
    port,
    route as apiRoute,
    environment
}