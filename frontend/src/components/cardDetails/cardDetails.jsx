import React from 'react'
import '../validateCardNumber/validateCardNumber.scss';
import ValidateCardNumber from '../validateCardNumber/validateCardNumber';



function CardDetails() {
    const [cardNumber, setCardNumber] = React.useState("0000 0000 0000 0000");
  
  return (
    <>
      <div className="global-container">
        <div className="cards">
          <div className="card-front">
            <img
              className="card-logo"
              src="https://i.ibb.co/wYPDjyL/card-logo.png"
              alt="card-logo"
              border="0"
            />
            <div className="details">
              <div className="higher-details">
                <p className="card-number">{cardNumber}</p>
              </div>
            </div>
          </div>
        </div>
        <ValidateCardNumber
          setCardNumber={setCardNumber}
          cardNumber={cardNumber}
         
        />
      </div>
     
    </>
  );
}


export default CardDetails;