const User = require('./User');
const Location = require('./Location');
const Cat = require('./Cat');
const Dog = require('./Dog');

Location.hasMany(Cat, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Location.hasMany(Dog, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Cat.belongsTo(Location, {
  foreignKey: 'location_id',
});

Dog.belongsTo(Location, {
  foreignKey: 'location_id',
});

module.exports = { User, Location, Cat, Dog };
