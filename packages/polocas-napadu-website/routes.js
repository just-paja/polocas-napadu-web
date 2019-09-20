const routes = require('next-routes')
const router = routes()

router.add('about', '/o-nas', 'about')
router.add('profile', '/clen/:slug', 'profile')
router.add('contact', '/kontakt', 'contact')
router.add('home', '/', 'index')
router.add('repertoir', '/repertoar', 'repertoir')
router.add('showFormatDetail', '/repertoar/:slug', 'showFormatDetail')
router.add('showDetail', '/predstaveni/:slug', 'show-detail')
router.add('showList', '/predstaveni', 'show-list')

module.exports = router
