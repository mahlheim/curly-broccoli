const sequelize = require('../config/connection');
const { Location, Cat, Dog } = require('../models');

const locationSeedData = require('./locationSeedData.json');
const catSeedData = require('./catSeedData.json');
const dogSeedData = require('./dogSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const locations = await Location.bulkCreate(locationSeedData);

  for (const cat of catSeedData) {
    const newCat = await Cat.create({
      ...cat,
      location_id: locations[Math.floor(Math.random() * locations.length)].id,
    });
  }

  for (const dog of dogSeedData) {
    const newDog = await Dog.create({
      ...dog,
      location_id: locations[Math.floor(Math.random() * locations.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();