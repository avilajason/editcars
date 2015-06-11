  Template.tAddCars.helpers({
    sAddCars: function() {
      return Session.get("sAddCars");
    },
    cCars: function() {
      return Cars.find();
    }
  });

  Template.tAddCars.events({
    'click .btn-add-cars': function() {
      Session.set('sAddCars', true);
    },
    'click .btn-close': function() {
      Session.set('sAddCars', false);
    },
    'submit form': function(evt) {
      evt.preventDefault();

      var cars = {
        brand: $(evt.target).find('[name=brand]').val(),
        model: $(evt.target).find('[name=model]').val(),
        year: $(evt.target).find('[name=year]').val()
      };

      Meteor.call('addCars', cars, function(error, id) {
        if (error) {
          return alert(error.reason);
        }
      });

      Session.set('sAddCars', false);
    }

  });