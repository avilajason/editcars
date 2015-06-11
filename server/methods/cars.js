Meteor.methods({
  addCars: function(postAttributes) {

    // // pick out the whitelisted keys
    // // Those on the list will be accepted, approved or recognized
    var cars = _.extend(_.pick(postAttributes, 'brand', 'model', 'year'), {

      //     createdBy: user._id,
      //     author: user.username,
      submitted: new Date().getTime()
    });

    var carsId = Cars.insert(cars);

    return carsId;
  }
});