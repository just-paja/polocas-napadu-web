const routes = require('next-routes')
const router = routes()

router.add('home', '/', 'index')
router.add('showList', '/predstaveni', 'show-list')
router.add('showDetail', '/predstaveni/:slug', 'show-detail')

module.exports = router
