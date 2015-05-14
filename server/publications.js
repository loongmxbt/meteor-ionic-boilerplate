Meteor.publish('products', function() {
  return Products.find();
});


Meteor.publishComposite('product', function(_id) {
  return {
    find: function() {
      return Products.find({_id: _id});
    },
    children: [
      {
        find: function(product) {
          return Meteor.users.find({_id: product.userId});
        }
      },
      {
        find: function(product) {
          return Posts.find({productId: product._id});
        }
      }
    ]
  };
});

Meteor.publish('posts', function() {
  return Posts.find();
});