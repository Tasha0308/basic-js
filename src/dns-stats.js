const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach ( elem => {
    const domain = elem.split('.').reverse();
    let fragment = '';

    for (let j = 0; j < domain.length; j++) {
      fragment += `.${domain[j]}`;
      result[fragment] = result[fragment] + 1 || 1
    }
  })

  return result;

}

module.exports = {
  getDNSStats
};
