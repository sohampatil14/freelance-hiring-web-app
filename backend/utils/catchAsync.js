//Used to reduce the repeative code try-catch
//This function will return a function and if any error occurs, the error will go to the gobal middleware

// module.exports = (fn) => (req, res, next) => {
//   fn(req, res, next).catch((err) => next(err));
// };

// eslint-disable-next-line arrow-body-style
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
