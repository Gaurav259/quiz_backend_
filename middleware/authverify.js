const jwt = require("jsonwebtoken")

const authVerify = (req,res,next) => {
    const token = req.headers.authorization;
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = {userId: decodedToken.id}
      return next();
    } catch (error) {
      console.error(`error from server ${JSON.stringify(error)}`);
    }
  }

  module.exports = authVerify