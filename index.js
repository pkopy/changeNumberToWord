let _change = (arrayOfdigits) => {

  const unity = ["", "jeden ", "dwa ", "trzy ", "cztery ", "pięć ", "sześć ", "siedem ", "osiem ", "dziewięć "];
  const teen = ["", "jedenaście ", "dwanaście ", "trzynaście ", "czternascie ", "piętnaście ", "szesnaście ", "siedemnaście ", "osiemnaście ", "dziewiętnaście "];
  const dozens = ["", "dziesięć ", "dwadzieścia ", "trzydzieści ", "czterdzieści ", "pięćdziesiąt ", "sześćdziesiąt ", "siedemdziesiąt ", "osiemdziesiąt ", "dziewięćdziesiąt "];
  const hundreds = ["", "sto ", "dwieście ", "trzysta ", "czterysta ", "pięćset ", "sześćset ", "siedemset ", "osiemset ", "dziewięćset "];
  const lastDigits = arrayOfdigits[arrayOfdigits.length - 2] + arrayOfdigits[arrayOfdigits.length - 1];
  let words = [dozens, hundreds];
  let x = [];

  if (lastDigits > 10 && lastDigits < 20) {
    x = arrayOfdigits.slice(0, arrayOfdigits.length - 2);
    x.push(0, arrayOfdigits[arrayOfdigits.length - 1]);
    words.unshift(teen);
  } else {
    x = arrayOfdigits;
    words.unshift(unity);
  }
 
  let str = '';

  for (let i = 0; i < x.length; i++) {
    str += words[x.length - 1 - i][x[i]];
  }

  return str;
}

let change = (number) => {
  if (isNaN(number)) throw new TypeError('This is not a number');
  if (!Number.isInteger(number)) throw new TypeError('This is not a integer number');
  let arrayOfdigits = number.toString().split('');
  const thousands = ["", "tysiąc ", "tysiące ", "tysięcy "];
  let str = '';
  let suffix = '';
  if (number > 999) {
    let t = Math.floor(number / 1000);
    if (t == 1) {
      suffix = thousands[1];
    } else if (t % 100 > 11 && t % 100 < 21) {
      suffix = thousands[3];
    } else if ((t % 100 > 1 && t % 100 < 5) || (t % 10 > 1 && t % 10 < 5)) {
      suffix = thousands[2];
    } else {
      suffix = thousands[3];
    }
    str += _change(arrayOfdigits.slice(0, arrayOfdigits.length - 3)) + suffix + _change(arrayOfdigits.slice(arrayOfdigits.length - 3));
  } else if (number == 0) {
    str = 'zero';
  } else {
    str += _change(arrayOfdigits);
  }
  return str;
}

module.exports = change;
