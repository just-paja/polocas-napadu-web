const nextRoutes = require('next-routes-with-locale');
const routes = nextRoutes({
  locale: 'cs',
});

routes.add('showDetail', 'cs', '/predstaveni/:slug', 'showDetail');
routes.add('showDetail', 'en', '/show/:slug', 'showDetail');

module.exports = routes;
