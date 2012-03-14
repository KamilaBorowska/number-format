(function() {

  (typeof exports !== "undefined" && exports !== null ? exports : this).numberFormat = function(number, decimals, dec_point, thousands_sep) {
    var decimal, decimalPoint, negative;
    if (decimals == null) decimals = 0;
    if (dec_point == null) dec_point = '.';
    if (thousands_sep == null) thousands_sep = ',';
    negative = number < 0 ? '-' : '';
    number = Math.abs(number);
    decimal = ((number - parseInt(number)).toFixed(decimals)).slice(2);
    number = ("" + (parseInt(number.toFixed(decimals)))).split('').reverse().join('').replace(/.../g, "$&" + (thousands_sep.replace('$', '$$'))).split('').reverse().join('');
    decimalPoint = decimals !== 0 ? dec_point : '';
    return "" + negative + number + decimalPoint + decimal;
  };

}).call(this);
