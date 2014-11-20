Router.route('/', function () {
  this.render('dashboard');
  this.layout('layout');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
  this.layout('layout');
});

Router.route('/products', function () {
  this.render('products');
  this.layout('layout');
});

Router.route('/visitors', function () {
  this.render('visitors');
  this.layout('layout');
});

Router.route('/sales', function () {
  this.render('sales');
  this.layout('layout');
});

Router.route('/visitors/heatmap', function () {
  this.render('heatmap');
  this.layout('layout');
});

Router.route('/visitors/stats', function () {
  this.render('visitorstats');
  this.layout('layout');
});