module.exports = function () {

};

module.exports.resolve = function (value) {
  return { 
    then: function (callback) {
      callback(value);
    }
  };
};
