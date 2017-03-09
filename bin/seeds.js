const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/birthdayGenie');

const Birthday = require('../models/Birthdays.js');

const birthdays = [
  { firstName: 'Marlon',
    lastName: 'Martinez',
    birthday: new Date('1990-11-13'),
    relationship: 'mySelft',
    age: '26'
  }
];

Birthday.create(birthdays, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.disconnect();
});
