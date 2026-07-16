import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string().valid('Done', 'Undone').optional(),
    search: Joi.string().trim().allow(''),
  }),
};

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value)
    ? helpers.message('noteId should be valid MongoDB ObjectId')
    : value;
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().allow(''),
    tag: Joi.string().valid('Done', 'Undone').optional(),
    rate: Joi.number().min(1).max(10).optional(),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: noteIdSchema[Segments.PARAMS],
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string().allow(''),
    tag: Joi.string().valid('Done', 'Undone').optional(),
    rate: Joi.number().min(1).max(10).optional(),
  }).min(1),
};
