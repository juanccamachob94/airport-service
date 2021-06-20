const express = require('express');
const logger = require('morgan');
const sequelize = require('./models/index.js').sequelize;
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index');

const app = express();

sequelize.authenticate()
  .then(() => console.log('Connection to DB established'))
  .catch((err) => console.log('unable to connect to DB', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

routes(app);

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

app.listen(PORT, function(req, res) {
  console.log(`Server is running with envirenment: ${process.env.NODE_ENV}`);
});
