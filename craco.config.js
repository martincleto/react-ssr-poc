const { whenDev } = require('@craco/craco');

module.exports = {
  entry: [
    ...whenDev(() => ['./src/index.js'], ['./src/index.prod.js'])
  ]
};