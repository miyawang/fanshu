import AV from 'leancloud-storage'

var APP_ID = '9HyPK7JHJkaXEdysQci5d4OO-gzGzoHsz';
var APP_KEY = '5oXtUzxSqToHf18a1TSNRLmk';
// var AV = require('leancloud-storage');

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default { SDK: AV};