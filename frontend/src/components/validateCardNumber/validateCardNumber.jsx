import React from 'react';
import "./validateCardNumber.scss"
import { validateCreditCardApi } from '../../api/creditCardvalidation';
import { Toaster, toast } from 'react-hot-toast';

function ValidateCardNumber({ setCardNumber, cardNumber }) {

    const handleConfirm = (e) => {
        e.preventDefault()
        const requestData = {
            "cardNo": cardNumber,
        }
        validateCreditCardApi(requestData).then((res) => {
            if (res.status) {
                toast.success('Your card number is correct!')
            }
            else {
                toast.error("Card Number Wrong")
            }
        }).catch((error) => {
            toast.error("Internal server error",error)
        })
    }

    return (
        <form name="cc-info-form">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="form-item">
                <label htmlFor="cc-number">Card Number</label>
                <div className="input-border">
                    <input
                        id="cc-number"
                        className="form-input"
                        type="number"
                        maxlength="19"
                        name="cc-number"
                        onChange={(event) => {
                            setCardNumber(event.target.value);
                        }}
                        value={cardNumber}

                    />
                </div>
            </div>
            <button
                className="submit-button"
                onClick={handleConfirm}
            >
                Check card
            </button>
        </form>
    );
}

export default ValidateCardNumber;