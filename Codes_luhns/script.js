function validateCreditCardNumber(ccNum) {
    let sanitizedNum = ccNum.replace(/[^0-9]/g, ''); // Corrected the regex and variable name
    let numArr = sanitizedNum.split('').reverse();
    let total = 0;

    for (let i = 0; i < numArr.length; i++) {
        let digit = parseInt(numArr[i], 10);

        if (i % 2 === 1) { // Corrected the condition
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        total += digit;
    }

    return total % 10 === 0;
}

const form = document.querySelector('form');
const ccNumInput = document.querySelector('#cc-number');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent the default form submission
    const ccNum = ccNumInput.value;

    if (validateCreditCardNumber(ccNum)) {
        resultDiv.textContent = 'Valid credit card number';
    } else {
        resultDiv.textContent = 'Invalid credit card number';
    }
});
