import * as arr from './array';

import * as base from './base';
import * as dateTime from './date-time';
import * as fn from './function';
import * as num from './number';
import * as str from './string';

export default {
  num,
  ...num,
  dateTime,
  ...dateTime,
  str,
  ...str,
  base,
  ...base,
  fn,
  ...fn,
  arr,
  ...arr,
};
