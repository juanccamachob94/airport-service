module.exports = (app) => {
  app.use('/', require('./init'));
  app.use('/users', require('./users'));
};
