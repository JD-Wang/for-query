
// https://github.com/ZijianHe/koa-router#readme
const router = require('koa-router')()

const query = require('../controllers/query')

router.use('/', query.routes(), query.allowedMethods())

module.exports = router