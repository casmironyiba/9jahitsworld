import Joi from "joi";

export const registerValidation = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    username: Joi.string().alphanum().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

export const loginValidation = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
