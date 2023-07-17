const { Dog } = require('../models');

const dogData = [
  {
    "name": "Charlie",
    "breed": "Chihuahua",
    "weight": "7 lbs",
    "coat_color": "brown, black, and white",
    "arrival_date": "June 29, 2023",
    "filename": "charlie.jpg"
  },
  {
    "name": "Kuma",
    "breed": "Tibetan Mastiff",
    "weight": "130 lbs",
    "coat_color": "black and brown",
    "arrival_date": "July 1, 2023",
    "filename": "kuma.jpg"
  },
  {
    "name": "Buddy",
    "breed": "Border Collie",
    "weight": "45 lbs",
    "coat_color": "black and white",
    "arrival_date": "July 12, 2023",
    "filename": "buddy.jpg"
  },
  {
    "name": "Max",
    "breed": "Rottweiler",
    "weight": "115 lbs",
    "coat_color": "black and brown",
    "arrival_date": "July 17, 2023",
    "filename": "max.jpg"
  },
  {
    "name": "Daisy",
    "breed": "Pomeranian",
    "weight": "8 lbs",
    "coat_color": "light brown",
    "arrival_date": "July 3, 2023",
    "filename": "daisy.jpg"
  },
  {
    "name": "Romeo",
    "breed": "Jack Russell Terrier",
    "weight": "17 lbs",
    "coat_color": "brown and white",
    "arrival_date": "July 15, 2023",
    "filename": "romeo.jpg"
  },
   {
    "name": "Lucky",
    "breed": "Golden Retriever",
    "weight": "70 lbs",
    "coat_color": "golden",
    "arrival_date": "July 8, 2023",
    "filename": "lucky.jpg"
  },
  {
    "name": "Mochi",
    "breed": "Chow Chow",
    "weight": "60 lbs",
    "coat_color": "light brown",
    "arrival_date": "July 14, 2023",
    "filename": "mochi.jpg"
  },
  {
    "name": "Sugar",
    "breed": "American Eskimo Dog",
    "weight": "35 lbs",
    "coat_color": "white",
    "arrival_date": "July 3, 2023",
    "filename": "sugar.jpg"
  },
  {
    "name": "Blue",
    "breed": "Siberian Husky",
    "weight": "55 lbs",
    "coat_color": "black and white",
    "arrival_date": "June 30, 2023",
    "filename": "blue.jpg"
  },
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;