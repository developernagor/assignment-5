// Button Tab
document.getElementById('history-btn').addEventListener('click', function() {
    showButtonSectionById('history-section');
    const history = document.getElementById('history-section');
    history.classList.remove('hidden');
})



document.getElementById('donation-btn').addEventListener('click', function() {
    showButtonSectionById('cards-section');
    const history = document.getElementById('history-section');
    history.classList.add('hidden');
})



// Shared Function 

function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    console.log(inputNumber);
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    console.log(textNumber);
    return textNumber;
}

function showButtonSectionById(id){
    document.getElementById('cards-section').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}


// Noakhali Flood Function

document.getElementById('noakhali-donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const noakhaliInput = document.getElementById('noakhali-input').value;
    const noakhaliInputMoney = parseFloat(noakhaliInput);
    console.log(noakhaliInputMoney);

    if (typeof noakhaliInputMoney === 'number' && noakhaliInputMoney > 0 ) {
        // Noakhali Balance
        const noakhaliBalance = getTextValueById('noakhali-amount');
        const noakhaliNewBalance = noakhaliBalance + noakhaliInputMoney;
        document.getElementById('noakhali-amount').innerText = noakhaliNewBalance;

        // My Balance
        const myBalance = getTextValueById('my-balance');
        const remainingMyBalance = myBalance - noakhaliInputMoney;
        document.getElementById('my-balance').innerText = remainingMyBalance;

        // Alert Part
        const historyItem = document.getElementById('modal-box-congrates').innerText;
        alert(historyItem)

        // History Section
        const now = new Date();
const h2 = document.createElement('h2');
h2.innerText = `${noakhaliInputMoney} Taka is Donated for Flood Relief in Noakhali, Bangladesh 
${now}`
h2.classList.add('font-bold', 'text-xl', 'p-3','border', 'border-gray-300','border-2', 'rounded-xl', 'my-6')
document.getElementById('history-item').appendChild(h2);

    }
    else{
        alert("Invalid amount. Please input valid amount number.")
    }
})
// Feni Flood Function

document.getElementById('feni-donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const feniInput = document.getElementById('feni-input').value;
    const feniInputMoney = parseFloat(feniInput);
    console.log(feniInputMoney);

    if (typeof feniInputMoney === 'number' && feniInputMoney > 0 ) {
        // Noakhali Balance
        const feniBalance = getTextValueById('feni-amount');
        const feniNewBalance = feniBalance + feniInputMoney;
        document.getElementById('feni-amount').innerText = feniNewBalance;

        // My Balance
        const myBalance = getTextValueById('my-balance');
        const remainingMyBalance = myBalance - feniInputMoney;
        document.getElementById('my-balance').innerText = remainingMyBalance;

        // Alert Part
        const historyItem = document.getElementById('modal-box-congrates').innerText;
        alert(historyItem)

        // History Section
        const now = new Date();
const h2 = document.createElement('h2');
h2.innerText = `${feniInputMoney} Taka is Donated for Flood Relief in Feni,Bangladesh 
${now}`
h2.classList.add('font-bold', 'text-xl', 'p-3','border', 'border-gray-300','border-2', 'rounded-xl', 'my-6')
document.getElementById('history-item').appendChild(h2);

    }
    else{
        alert("Invalid amount. Please input valid amount number.")
    }
})
// Quota Movement  Function

document.getElementById('quota-movement-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const quotaInput = document.getElementById('quota-movement-input').value;
    const quotaInputMoney = parseFloat(quotaInput);
    console.log(quotaInputMoney);

    if (typeof quotaInputMoney === 'number' && quotaInputMoney > 0 ) {
        // Quota Balance
        const quotaBalance = getTextValueById('quota-amount');
        const quotaNewBalance = quotaBalance + quotaInputMoney;
        document.getElementById('quota-amount').innerText = quotaNewBalance;

        // My Balance
        const myBalance = getTextValueById('my-balance');
        const remainingMyBalance = myBalance - quotaInputMoney;
        document.getElementById('my-balance').innerText = remainingMyBalance;

        // Alert Part
        const historyItem = document.getElementById('modal-box-congrates').innerText;
        alert(historyItem)

        // History Section
        const now = new Date();
const h2 = document.createElement('h2');
h2.innerText = `${quotaInputMoney} Taka is Donated for  for Injured in the Quota Movement, Bangladesh 
${now}`
h2.classList.add('font-bold', 'text-xl', 'p-3','border', 'border-gray-300','border-2', 'rounded-xl', 'my-6')
document.getElementById('history-item').appendChild(h2);

    }
    else{
        alert("Invalid amount. Please input valid amount number.")
    }
})








