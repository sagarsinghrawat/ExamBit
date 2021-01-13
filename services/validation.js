//const Joi = require("joi");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

function validateSignup(user) {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(5).max(255).required(),
    category: Joi.string().required(),
  });
  return schema.validate(user);
}
function validateSignin(user) {
  const schema = Joi.object({
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
}

function validateStudent(student) {
  const schema = Joi.object({
    email: Joi.string().max(50).required().email(),
    name: Joi.string().max(50).required(),
    phoneNum: Joi.string().max(13).required(),
    testId: Joi.objectId().required(),
    link: Joi.any(),
  });
  return schema.validate(student);
}

function validateCreateTest(testPaper) {
  const schema = Joi.object({
    title: Joi.string().max(50).required(),
    subject: Joi.string().max(50).required(),
    duration: Joi.number().min(0).required(),
    selectedQuestions: Joi.array().required(),
    isSnapshots: Joi.boolean().required(),
  });
  return schema.validate(testPaper);
}

function validateQuestionCreate(question) {
  const schema = Joi.object({
    questionBody: Joi.string().max(200).required(),
    options: Joi.array().required(),
    subject: Joi.string().max(50).required(),
    weightage: Joi.number().min(0),
    explaination: Joi.string(),
  });
  return schema.validate(question);
}

function validateEditTest(testPaper) {
  const schema = Joi.object({
    _id: Joi.objectId().required(),
    title: Joi.string().max(50).required(),
    subject: Joi.string().max(50).required(),
    duration: Joi.number().min(0).required(),
    selectedQuestions: Joi.array().required(),
    isSnapshots: Joi.boolean().required(),
  });
  return schema.validate(testPaper);
}

module.exports = {
  validateSignin,
  validateSignup,
  validateQuestionCreate,
  validateStudent,
  validateEditTest,
  validateCreateTest,
};
