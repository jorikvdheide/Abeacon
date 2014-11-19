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

Router.route('/login', function () {
  this.render('loginform');
  this.layout('layout');
});