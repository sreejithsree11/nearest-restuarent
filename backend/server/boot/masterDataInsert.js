'use strict';
const masterData = require('../../common/models/helpers/masterdata');
module.exports = function masterDataInsert(app) {
  masterData.insertData();
};
