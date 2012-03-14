(function() {
  var assert, i, numberFormat, sprint, test,
    __slice = Array.prototype.slice;

  assert = require('assert');

  sprint = require('sprint').sprint;

  numberFormat = require('../lib/number-format').numberFormat;

  i = 0;

  test = function() {
    var args, expect, message, result, _i;
    args = 3 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 2) : (_i = 0, []), expect = arguments[_i++], message = arguments[_i++];
    try {
      assert.equal(result = numberFormat.apply(null, args), expect, message);
    } catch (e) {
      console.log("Expected: " + expect);
      console.log("Got:      " + result);
      throw e;
    }
    return console.log(sprint('%03.2d: OK %s', ++i, message));
  };

  test(1234.56, '1,235', 'English notation');

  test(1234.56, 2, ',', ' ', '1 234,56', 'French notation');

  test(1234.5678, 2, '.', '', '1234.57', 'English notation without thousands separator');

  test(1234.5678, '1,235', 'Default (positive float)');

  test(-1234.5678, '-1,235', 'Default (negative float)');

  test(12345678, '12,345,678', 'Default (positive integer)');

  test(-12345678, '-12,345,678', 'Default (negative integer)');

  test(1234.5678, 2, '1,234.57', 'With two decimal points (positive float)');

  test(-1234.5678, 2, '-1,234.57', 'With two decimal points (negative float)');

  test(12345678, 2, '12,345,678.00', 'With two decimal points (positive integer)');

  test(-12345678, 2, '-12,345,678.00', 'With two decimal points (negative integer)');

  test(1234.5678, 2, '.', ' ', '1 234.57', 'English format (positive float)');

  test(-1234.5678, 2, '.', ' ', '-1 234.57', 'English format (negative float)');

  test(12345678, 2, '.', ' ', '12 345 678.00', 'English format (positive integer)');

  test(-12345678, 2, '.', ' ', '-12 345 678.00', 'English format (negative integer)');

  test(1234.5678, 2, ',', ' ', '1 234,57', 'French format (positive float)');

  test(-1234.5678, 2, ',', ' ', '-1 234,57', 'French format (negative float)');

  test(12345678, 2, ',', ' ', '12 345 678,00', 'French format (positive integer)');

  test(-12345678, 2, ',', ' ', '-12 345 678,00', 'French format (negative integer)');

}).call(this);
