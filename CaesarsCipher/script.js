//ROT13 cipher, values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//takes a ROT13 encoded string as input and returns a decoded string.


function rot13(str) {

    return str.replace(/[A-Z]/g, (find) => {
      let asciiVal = find.charCodeAt(0) + 13;
  
      if(asciiVal > 90) {
        asciiVal = asciiVal % 90 + 64;
      }
      return String.fromCharCode(asciiVal);
    });
  }
  
  rot13("SERR CVMMN!");
  