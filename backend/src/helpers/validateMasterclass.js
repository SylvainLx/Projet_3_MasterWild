const Joi = require("joi");

exports.validateMasterclass = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    title: Joi.string().max(150).presence(presence),
    source: Joi.string().max(1000).presence(presence),
    description: Joi.string().max(3000).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateEntreprise = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    name: Joi.string().max(150).presence(presence),
    speciality: Joi.string().max(150).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateCategory = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    name: Joi.string().max(150).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateKeyword = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    name: Joi.string().max(150).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};
