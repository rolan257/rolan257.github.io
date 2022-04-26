String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

Number.prototype.getPrecision = function() {
  let s = this + '';
  let d = s.indexOf('.') + 1;

  return !d ? 0 : s.length - d;
};

function sortObject(obj) {
  obj = Object.keys(obj).sort().reduce((elem, key) => {
      elem[key] = obj[key];
      return elem;
    },
    {}
  );

  return obj;
}

const numberFormat = function(number, decimals=0) {
  const options = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };

  number = (new Intl.NumberFormat('en-US', options)).format(number);

  return number;
}

const numberFormatPercent = function(number, decimals=0) {
  const options = {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };

  number = (new Intl.NumberFormat('en-US', options)).format(number);

  return number;
}
