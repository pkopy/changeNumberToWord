let _change = (arrayOfdigits) => {

  const unity = ["", "jeden ", "dwa ", "trzy ", "cztery ", "pięć ", "sześć ", "siedem ", "osiem ", "dziewięć "];
  const teen = ["", "jedenaście ", "dwanaście ", "trzynaście ", "czternascie ", "piętnaście ", "szesnaście ", "siedemnaście ", "osiemnaście ", "dziewiętnaście "];
  const dozens = ["", "dziesięć ", "dwadzieścia ", "trzydzieści ", "czterdzieści ", "pięćdziesiąt ", "sześćdziesiąt ", "siedemdziesiąt ", "osiemdziesiąt ", "dziewięćdziesiąt "];
  const hundreds = ["", "sto ", "dwieście ", "trzysta ", "czterysta ", "pięćset ", "sześćset ", "siedemset ", "osiemset ", "dziewięćset "];
  const lastDigits = arrayOfdigits[arrayOfdigits.length - 2] + arrayOfdigits[arrayOfdigits.length - 1];
  let words = [dozens, hundreds];
  let newArrOfDigits = [];

  if (lastDigits > 10 && lastDigits < 20) {
    newArrOfDigits = arrayOfdigits.slice(0, arrayOfdigits.length - 2);
    newArrOfDigits.push(0, arrayOfdigits[arrayOfdigits.length - 1]);
    words.unshift(teen);
  } else {
    newArrOfDigits = arrayOfdigits;
    words.unshift(unity);
  }
 
  let str = '';

  for (let i = 0; i < newArrOfDigits.length; i++) {
    str += words[newArrOfDigits.length - 1 - i][newArrOfDigits[i]];
  }

  return str;
}

let change = (number) => {
  if (isNaN(number)) throw new TypeError('This is not a number');
  if (!Number.isInteger(number)) throw new TypeError('This is not a integer number');
  if (number > 999999 || number < 0) throw new Error('This version works only in range 0 - 999999')
  let arrayOfdigits = number.toString().split('');
  const thousands = ["", "tysiąc ", "tysiące ", "tysięcy "];
  let str = '';
  let suffinewArrOfDigits = '';
  if (number > 999) {
    let t = Math.floor(number / 1000);
    if (t == 1) {
      suffinewArrOfDigits = thousands[1];
    } else if (t % 100 > 11 && t % 100 < 21) {
      suffinewArrOfDigits = thousands[3];
    } else if ((t % 100 > 1 && t % 100 < 5) || (t % 10 > 1 && t % 10 < 5)) {
      suffinewArrOfDigits = thousands[2];
    } else {
      suffinewArrOfDigits = thousands[3];
    }
    str += _change(arrayOfdigits.slice(0, arrayOfdigits.length - 3)) + suffinewArrOfDigits + _change(arrayOfdigits.slice(arrayOfdigits.length - 3));
  } else if (number == 0) {
    str = 'zero';
  } else {
    str += _change(arrayOfdigits);
  }
  return str;
}

module.exports = change;
