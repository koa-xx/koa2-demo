var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/1', function (ctx, next) {
  ctx.body = 'this a users response! 1';
});

module.exports = router;
