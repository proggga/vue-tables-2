'use strict';

module.exports = function () {
  this.data.forEach(function (row, index) {
    this.opts.dateColumns.forEach(function (column) {
      row[column] = row[column] ? this.opts.moment(row[column], this.opts.toMomentFormat) : '';
    }.bind(this));
  }.bind(this));
};
