// console.log('home js file content');
const validPin = 1234


// function to get input value
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    // console.log(inputFieldValueNumber);
    return inputFieldValueNumber

}

function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}


// function to get amount innerText
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    // console.log(elementValueNumber);
    return elementValueNumber

}

// function to set totalNewAvailableBalance innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}

// function to toggling feature
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'

    }
    document.getElementById(id).style.display = 'block'
}



// Add money js feature
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('add money clicked');
    const bank = getInputValue('bank')
    const accountNumber = document.getElementById('account-number').value
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    // console.log(bank, accountNumber, amount, pin);
    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance);
    if (accountNumber.length < 11) {
        alert('please provide valid account number')
        return;
    }
    if (pin !== validPin) {
        alert('Please provide valid pin number')
        return;
    }
    const totalNewAvailableBalance = amount + availableBalance
    setInnerText(totalNewAvailableBalance)
})

// cash out js feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')
    const totalNewAvailableBalance = availableBalance - amount
    setInnerText(totalNewAvailableBalance)
})

// toggling feature

// Add Money
document.getElementById('add-button').addEventListener('click', function () {
    handleToggle('add-money-parent')
})

// Cash Out
document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent')
})

// Transfer Money
document.getElementById('transfer-button').addEventListener('click', function () {
handleToggle('transfer-money-parent')
})

// Get Bonus
document.getElementById('bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent')
})
// Pay Bill
document.getElementById('pay-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent')
})

// Transactions
document.getElementById('transaction-button').addEventListener('click', function () {
    handleToggle('transaction-parent')
})
