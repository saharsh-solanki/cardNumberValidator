const validationFunc = require("../controller/isValidCreditCard.js"),
  Routes = [
    {
      path: "/validate-credit-card",
      method: "post",
      handler: validationFunc.isValidCreditCard,
    },
  ];

module.exports = Routes;
