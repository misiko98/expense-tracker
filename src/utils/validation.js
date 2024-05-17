import { numbersPattern, stringsPattern } from './regex';

export const validate = (values) => {
  const errors = {};

  if (values.title.trim() === '') {
    errors.title = 'Title is required';
  } else if (!stringsPattern.test(values.title)) {
    errors.title = 'Invalid Title: No numbers and special characters allowed';
  }

  if (values.amount.trim() === '') {
    errors.amount = 'Amount is required';
  } else if (!numbersPattern.test(values.amount)) {
    errors.amount = 'wrong input. Input numbers only';
  }

  if (values.date === '') {
    errors.date = 'Please select a date';
  }

  return errors;
};
