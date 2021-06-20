const UserCreatorService = require('../services/user-creator-service');
const ErrorHandlerService = require('../services/error-handler-service');

module.exports = {
  create: async (req, res, next) => {
    try {
      let response = await UserCreatorService.perform(req.body);
      res.json({ response });
    } catch(err) {
      res.json(ErrorHandlerService.formatError(err.message));
    }
  }
};
