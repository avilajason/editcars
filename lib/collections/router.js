Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() {
 this.route('tCars', {
    path: '/',
  });

this.route('tEditCar', {
    path: '/edit_car/:_id',
     data: function() {
      return Cars.findOne(this.params._id);
    }
  });

});