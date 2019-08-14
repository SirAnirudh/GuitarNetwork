//Authentication Middleware (has next)
const Joi = require('joi');

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        };

        const {error, value} = Joi.validate(req.body, schema);

        if (error) {
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({error: 'you must provide a valid email address'});
                    break;
                case 'password':
                    res.status(400).send(
                        {error: `Error! The Password must match the followig rules: 
                         <br> 1) Atleast 8 characters but not more than 32 
                         <br> 2) Only letters`});
                    break;
                default:
                    res.status(400).send({error: 'invalid info'});
                    break;
            }
        }
        else{
                next()
            }
            }
};
