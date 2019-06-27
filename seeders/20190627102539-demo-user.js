let fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let imageData1 = fs.readFileSync(__dirname + '/assets/images/1.png');
    let imageData2 = fs.readFileSync(__dirname + '/assets/images/2.png');
    let imageData3 = fs.readFileSync(__dirname + '/assets/images/3.png');
    //console.log(imageData1);
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Louis',
      lastName: 'Karlos',
      image: imageData1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Peter',
      lastName: 'McClein',
      image: imageData2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Megan',
      lastName: 'Parker',
      image: imageData3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
