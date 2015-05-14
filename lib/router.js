Router.route('/', {
    name: 'landingPage'
});

Router.route('/products', {
  name: 'productsList'
});

Router.route('/posts', {
  name: 'postsList'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/posts/:_id', {
  name: 'posts.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});