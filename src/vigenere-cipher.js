const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
/*class VigenereCipheringMachine {
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
} */

class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(type=true) {
    this.type = type;
  }
  
  encrypt(message, key) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }
    let encryptMessage = message.toUpperCase();
    let counter = -1;

    key = key.toUpperCase();

    encryptMessage = encryptMessage.split('').map(e => {
      if (this.alphabet.includes(e)) {
        counter++;
        return this.alphabet[(this.alphabet.indexOf(e) + this.alphabet.indexOf(key[counter % key.length]))
        % this.alphabet.length];
      } else {
        return e;
      }
    }).join('')

    if(!this.type) {
      return encryptMessage.split('').reverse().join('')
    } else {
      return encryptMessage;
    }
  } 
  
  decrypt(encryptMessage, key) {
    if (!encryptMessage || !key) {
      throw Error('Incorrect arguments!');
    }

    let decryptMessage = encryptMessage;
    let counter = -1;

    key = key.toUpperCase();

    decryptMessage = decryptMessage.split('').map(e => {
      if (this.alphabet.includes(e)) {
        counter++;
        return this.alphabet[(this.alphabet.indexOf(e) - this.alphabet.indexOf(key[counter % key.length]) + this.alphabet.length) % this.alphabet.length];
      }
       else {
        return e;
      }
    }).join('');

    if(!this.type) {
      return decryptMessage.split('').reverse().join('')
    } else {
      return decryptMessage;
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
