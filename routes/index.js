module.exports = (app) => {
  app.use('/', require('./init'));
  app.use('/api/users', require('./users'));
  app.use('/api/flight_packages', require('./flight_packages'));
};
