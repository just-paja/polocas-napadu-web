const routes = require('next-routes')
const router = routes()

router.add('showDetail', '/predstaveni/:slug', 'show-detail')

module.exports = router
