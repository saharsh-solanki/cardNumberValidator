const API_URL = process.env.REACT_APP_BACKEND_API_URL;

export const validateCreditCardApi = async data => {
    try {
        const response = await fetch(`${API_URL}/validate-credit-card`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("error :-", error);
    }
};
