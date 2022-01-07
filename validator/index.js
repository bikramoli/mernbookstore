
exports.userSignupValidator = (req, res, next) =>{
  req.check('name', 'name is required').notEmpty()
  req.check('email', "Email must be between 3 to 32 characters")
       .matches(/.+\@.+\..+/)
       .withMessage("Email must contain @")
       .isLength({
           min:4,max:32
       });
       req.check('password', 'Password is required').notEmpty()
       req.check('password')
          .isLength({min:6})
          .withMessage("password must contain atleast 6 character")
          .matches(/\d/)
          .withMessage("password must contain a number");

          const erros = req.validationErrors()
          if(errors){
              const firstErrors = errors.map(error => error.message)[0];
              return res.status(400).json({error: firstErrors});
          }
    next();

};