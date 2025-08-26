// console.log('home js file content');
const validPin = 1234
const transactionData = []


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


// handle to toggleButtons
function handleButtonToToggle(id){
     const formsBtns = document.getElementsByClassName('from-btn')
    for(const btn of formsBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
        
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
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
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData);
    
})

// cash out js feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')
    const totalNewAvailableBalance = availableBalance - amount
    setInnerText(totalNewAvailableBalance)
     const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData);
    
})

document.getElementById('transaction-button').addEventListener('click', function(e){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''
    for(data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 mt-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class="rounded-full bg-[#0808080d]">
                    <img src="./assets/wallet1.png" class="mx-auto p-3" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
        </div>
        `
        transactionContainer.appendChild(div)
    }
    
})

// toggling feature

// Add Money
document.getElementById('add-button').addEventListener('click', function () {
    handleToggle('add-money-parent')
    handleButtonToToggle('add-button')
    
})

// Cash Out
document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent')
   handleButtonToToggle('cash-out-button')
})

// Transfer Money
document.getElementById('transfer-button').addEventListener('click', function () {
handleToggle('transfer-money-parent')
handleButtonToToggle('transfer-button')
})

// Get Bonus
document.getElementById('bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent')
    handleButtonToToggle('bonus-button')
})
// Pay Bill
document.getElementById('bill-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent')
     handleButtonToToggle('bill-button')
})

// Transactions
document.getElementById('transaction-button').addEventListener('click', function () {
    handleToggle('transaction-parent')
     handleButtonToToggle('transaction-button')
})
