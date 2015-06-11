// use this if you want to start with some data
// at the runtime of your app
if (Cars.find().count() === 0) {
  Cars.insert({
    brand: 'BMW',
    model: 'M3',
    year: '2015',
  });

  Cars.insert({
    brand: 'MINI',
    model: 'Cooper S Countryman',
    year: '2015',
  });

  Cars.insert({
    brand: 'Audi',
    model: 'Q5',
    year: '2015',
  });

  Cars.insert({
    brand: 'Lexus',
    model: 'IS 250',
    year: '2015',
  });

  Cars.insert({
    brand: 'Mercedes Benz',
    model: 'GLK',
    year: '2015',
  });
}