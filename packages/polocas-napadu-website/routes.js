const routes = require('next-routes')
const router = routes()

router.add('about', '/o-nas', 'about')
router.add('article', '/clanek/:slug', 'article')
router.add('contact', '/kontakt', 'contact')
router.add('home', '/', 'index')
router.add('profile', '/clen/:slug', 'profile')
router.add('repertoir', '/repertoar', 'repertoir')
router.add('showDetail', '/predstaveni/:slug', 'show-detail')
router.add('showFormatDetail', '/repertoar/:slug', 'show-format-detail')
router.add('showList', '/predstaveni', 'show-list')

module.exports = router
