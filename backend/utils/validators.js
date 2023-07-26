const MIN_CARD_NUMBER_LENGTH = 8;

/**
 * Used to remove extra white space only if string
 * @param   {string} text
 * @returns {string}
 */
const removeWhiteSpace = (text) => {
  if (typeof text === "string") {
    return text.toString().replace(/\D/g, "");
  }
  return text;
};

/**
 * Check whether the card number is valid
 * Returns true if the card number is valid
 * @param {string|number} cardNumber card number to perform validation
 * @returns {true|false}
 */
const validateCreditCardNumber = (cardNumber) => {
  const cleanedCardNumber = removeWhiteSpace(cardNumber).toString(),
    cardNumberLength = cleanedCardNumber.length;

  if (cardNumberLength < MIN_CARD_NUMBER_LENGTH) {
    return false;
  }

  const cardNumberParity = cardNumberLength % 2;
  let sumOfDigits = 0;

  for (let index = 0; index < cardNumberLength; index++) {
    const digit = parseInt(cardNumber[index], 10);

    if (index % 2 !== cardNumberParity) {
      sumOfDigits += digit;
    } else {
      const doubleOfDigit = digit * 2;

      sumOfDigits += doubleOfDigit > 9 ? doubleOfDigit - 9 : doubleOfDigit;
    }
  }

  return sumOfDigits % 10 === 0;
};

module.exports = validateCreditCardNumber;
