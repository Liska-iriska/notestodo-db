import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      default: 'Undone',
      enum: ['Done', 'Undone'],
    },
    rate: {
      type: Number,
      default: 1,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

noteSchema.index({ tag: 1 });

export const Note = model('Note', noteSchema);
