const routes = require('next-routes')
const router = routes()

router.add('about', '/o-nas', 'about')
router.add('actors', '/herci', 'actors')
router.add('contact', '/kontakt', 'contact')
router.add('home', '/', 'index')
router.add('showDetail', '/predstaveni/:slug', 'show-detail')
router.add('showList', '/predstaveni', 'show-list')

module.exports = router
