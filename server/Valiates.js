import Joi from "joi"

export const registrationValidation = data =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    return schema.validate(data)
};

export const loginValidate = data =>{
    const schema = Joi.object({
        username : Joi.string().required(),
        password:Joi.string().required()
    })
    return schema.validate(data)
}