module.exports = function(app) {
  app.models.CoffeeShop.create([
    {name:'Coffee shop 1', city:'Vancouver', tags:["foo", "bar"]},
    {name:'Coffee shop 2', city:'Seattle',   tags:["foo"]},
    {name:'Coffee shop 3', city:'San Mateo', tags:["foo", "baz"]},
  ], function(err) {
    if (err) throw err;
    console.log('> models created');
  });
};
