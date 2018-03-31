(function fnDecimalDigitify($) {
  $.fn.decimalDigitify = function doDecimalDigitify() {
    this.on('change keypress paste input', () => {
      const field = $(this);
      let num = field.val();
      const decimals = parseInt(field.attr('decimaldigits'), 10);
      num = num.replace(/[^0-9]/g, '');
      if (decimals > 0 && num.length > decimals) {
        const position = num.length - decimals;
        num = `${num.substr(0, position)}.${num.substr(position)}`;
      }
      field.val(num);
    });
    return this;
  };
}(jQuery));
$('input[decimaldigits]').decimalDigitify();
