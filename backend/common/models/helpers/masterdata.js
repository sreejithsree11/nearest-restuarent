'use strict';
const app = require('../../../server/server');
const masterData = require('../../constants/deliveryArea.json');

async function insertData() {
   // Get all appointments of the user
  const count = await app.models.Outlet.count().catch((err) => {
    throw err;
  });
  if (count === 0) {
    const insertableData = masterData.features;
    app.models.Outlet.create(insertableData).catch((err) => {
      throw err;
    });
  }
}

module.exports = {
  insertData,
};