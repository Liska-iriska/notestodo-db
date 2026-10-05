// src/controllers/userController.js

import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const getCurrentUser = async (req, res) => {
  res.status(200).json(req.user);
};

export const updateCurrentUser = async (req, res) => {
  const { username } = req.body;

  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    { username },
    { returnDocument: 'after' },
  );

  res.status(200).json(updatedUser);
};

export const updateUserAvatar = async (req, res) => {
  const { file, user } = req;
  if (!file) {
    throw createHttpError(400, 'No file');
  }

  const result = await saveFileToCloudinary(file.buffer, user._id);

  const updatedUser = await User.findOneAndUpdate(
    { _id: user._id },
    { avatar: result.secure_url },
    { returnDocument: 'after' },
  );

  res.status(200).json({ url: updatedUser.avatar });
};
