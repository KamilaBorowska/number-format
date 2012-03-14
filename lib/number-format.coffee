(exports ? this).numberFormat = (number, decimals = 0, dec_point = '.', thousands_sep = ',') ->
  negative = if number < 0 then '-' else ''
  number = Math.abs number
  decimal = ((number - parseInt number).toFixed decimals)[2..]
  number = "#{parseInt number.toFixed decimals}".split('').reverse().
            join('').replace(/.../g, "$&#{thousands_sep.replace '$', '$$'}")
            .split('').reverse().join('')
  decimalPoint = if decimals isnt 0 then dec_point else ''
  "#{negative}#{number}#{decimalPoint}#{decimal}"