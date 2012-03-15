assert = require 'assert'
{sprint} = require 'sprint'
{numberFormat} = require '../lib/number-format'
i = 0

test = (args..., expect, message) ->
  try
    assert.equal result = numberFormat(args...), expect, message
  catch e
    console.log "Expected: #{expect}"
    console.log "Got:      #{result}"
    throw e
  console.log sprint '%03.2d: OK %s', ++i, message

# Documentation examples
test 1234.56, '1,235',
     'English notation'
test 1234.56, 2, ',', ' ', '1 234,56',
     'French notation'
test 1234.5678, 2, '.', '', '1234.57',
     'English notation without thousands separator'

# number_format_basic.phpt
test 1234.5678, '1,235',
     'Default (positive float)'
test -1234.5678, '-1,235',
     'Default (negative float)'
test 12345678, '12,345,678',
     'Default (positive integer)'
test -12345678, '-12,345,678',
     'Default (negative integer)'

test 1234.5678, 2, '1,234.57',
     'With two decimal points (positive float)'
test -1234.5678, 2, '-1,234.57',
     'With two decimal points (negative float)'
test 12345678, 2, '12,345,678.00',
     'With two decimal points (positive integer)'
test -12345678, 2, '-12,345,678.00',
     'With two decimal points (negative integer)'

test 1234.5678, 2, '.', ' ', '1 234.57',
     'English format (positive float)'
test -1234.5678, 2, '.', ' ', '-1 234.57',
     'English format (negative float)'
test 12345678, 2, '.', ' ', '12 345 678.00',
     'English format (positive integer)'
test -12345678, 2, '.', ' ', '-12 345 678.00',
     'English format (negative integer)'

test 1234.5678, 2, ',', ' ', '1 234,57',
     'French format (positive float)'
test -1234.5678, 2, ',', ' ', '-1 234,57',
     'French format (negative float)'
test 12345678, 2, ',', ' ', '12 345 678,00',
     'French format (positive integer)'
test -12345678, 2, ',', ' ', '-12 345 678,00',
     'French format (negative integer)'

test '123456789', 0, '123,456,789',
     '9 numbers (fixed in 0.1.1)'
test '1234.5', 2, '$$', '$$$', '1$$$234$$50',
     'Dollar as separator'
