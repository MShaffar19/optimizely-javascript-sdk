/**
 * Copyright 2017, 2019-2020, Optimizely
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uuid = require('uuid');
var _isFinite = require('lodash/isFinite');
var keyBy = require('@optimizely/js-sdk-utils').keyBy;
var MAX_NUMBER_LIMIT = Math.pow(2, 53);

module.exports = {
  assign: require('lodash/assign'),
  assignIn: require('lodash/assignIn'),
  cloneDeep: require('lodash/cloneDeep'),
  currentTimestamp: function() {
    return Math.round(new Date().getTime());
  },
  isFinite: function(number) {
    return _isFinite(number) && Math.abs(number) <= MAX_NUMBER_LIMIT;
  },
  keyBy: function(arr, key) {
    if (!arr) return {};
    return keyBy(arr, function(item) {
      return item[key];
    });
  },
  forEach: require('lodash/forEach'),
  forOwn: require('lodash/forOwn'),
  uuid: function() {
    return uuid.v4();
  },
  isNumber: function(value) {
    return typeof value === 'number';
  },
};
