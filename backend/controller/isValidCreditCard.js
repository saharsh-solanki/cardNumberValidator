const validateCreditCardNumber = require("../utils/validators");

exports.isValidCreditCard = (req, res) => {
  try {
    const validateCard = validateCreditCardNumber(req.body.cardNo);

    res.status(200).send({ status: validateCard });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
};
