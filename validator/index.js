
exports.userSignupValidator = (req, res, next) =>{
    //check name if empty msg: name is required
    req.check('name', 'name is required').notEmpty()
    //check email --
    req.check('email', "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min:4,max:32
        });
    //check password, should not be empty
    req.check('password', 'Password is required').notEmpty()
    //check password --
    req.check('password')
        .isLength({min:6})
        .withMessage("password must contain atleast 6 character")
        .matches(/\d/)
        .withMessage("password must contain a number");

        const errors = req.validationErrors()
        if(errors){
            const firstErrors = errors.map(error => error.msg)[0];
            return res.status(400).json({error: firstErrors});
        }
    next();

};