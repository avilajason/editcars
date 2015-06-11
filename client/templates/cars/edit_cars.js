// give the edit player access to the CarsId session variable
// Template.tEditCar.sCarsId = function() {
//   //return Session.get('sCarsId');
// };

// when someone edits or removes a car
Template.tEditCar.events({
  'click .remove': function(evt, tmpl) {
    evt.preventDefault();
    // make sure you want to delete something
    if (confirm("Delete this post?")) {
      Session.set('sCarsId', this._id);
      removeCars();
      Session.set('sCarsId', null);
    }
  },
  // when someone edits a car, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'submit form': function(evt, tmpl) {
    evt.preventDefault();

    var cars = {
        brand: $(evt.target).find('[name=brand]').val(),
        model: $(evt.target).find('[name=model]').val(),
        year: $(evt.target).find('[name=year]').val()
      };
      console.log(cars);
      Cars.update(this._id, {$set: cars}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      Router.go("tCars");
  }
});

// when the trashcan icon is clicked, the cars is deleted
var removeCars = function() {
  Cars.remove({
    _id: Session.get('sCarsId')
  });
};