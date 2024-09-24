// Function to show modal
function showModal() {
  document.getElementById("myModal").classList.remove("hidden");
}

// Function to hide modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").classList.add("hidden");
});


// Button Tab

const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");

document.getElementById("history-btn").addEventListener("click", function () {
  historyButton.classList.add(
    "bg-button_bg",
    "border-button_bg",
    "text-primary"
  );
  historyButton.classList.remove(
    "bg-white",
    "border-gray-400",
    "text-secondary"
  );

  donationButton.classList.remove(
    "bg-button_bg",
    "border-button_bg",
    "text-primary"
  );
  donationButton.classList.add("bg-white", "border-gray-400", "text-secondary");

  showButtonSectionById("history-section");
  const history = document.getElementById("history-section");
  history.classList.remove("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  historyButton.classList.remove(
    "bg-button_bg",
    "border-button_bg",
    "text-primary"
  );
  historyButton.classList.add("bg-white", "border-gray-400", "text-secondary");

  donationButton.classList.add(
    "bg-button_bg",
    "border-button_bg",
    "text-primary"
  );
  donationButton.classList.remove(
    "bg-white",
    "border-gray-400",
    "text-secondary"
  );

  showButtonSectionById("cards-section");
  const history = document.getElementById("history-section");
  history.classList.add("hidden");
});

// Shared Function

function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = Number(inputValue);

  return inputNumber;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

  return textNumber;
}

function showButtonSectionById(id) {
  document.getElementById("cards-section").classList.add("hidden");
  document.getElementById("footer").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

// Noakhali Flood Function

document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliInput = document.getElementById("noakhali-input").value;
    const noakhaliInputMoney = parseFloat(noakhaliInput);

    const myBalance = getTextValueById("my-balance");

    if (
      typeof noakhaliInputMoney === "number" &&
      noakhaliInputMoney > 0 &&
      myBalance >= noakhaliInputMoney
    ) {
      // Noakhali Balance
      const noakhaliBalance = getTextValueById("noakhali-amount");
      const noakhaliNewBalance = noakhaliBalance + noakhaliInputMoney;
      document.getElementById("noakhali-amount").innerText = noakhaliNewBalance;

      // My Balance
      // const myBalance = getTextValueById('my-balance');
      const remainingMyBalance = myBalance - noakhaliInputMoney;
      document.getElementById("my-balance").innerText = remainingMyBalance;

      // Alert Part

      document.getElementById("myModal").classList.remove("hidden");

      showModal();

      // History Section
      const now = new Date();
      const h2 = document.createElement("h2");
      h2.innerText = `"${noakhaliInputMoney} Taka is Donated for Flood Relief in Noakhali, Bangladesh" 
"${now}"`;
      h2.classList.add(
        "font-bold",
        "text-xl",
        "p-3",
        "border",
        "border-gray-300",
        "border-2",
        "rounded-xl",
        "my-6"
      );
      document.getElementById("history-item").appendChild(h2);
    } else {
      alert("Invalid amount. Please input valid amount number.");
    }
  });
// Feni Flood Function

document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniInput = document.getElementById("feni-input").value;
    const feniInputMoney = parseFloat(feniInput);

    const myBalance = getTextValueById("my-balance");

    if (
      typeof feniInputMoney === "number" &&
      feniInputMoney > 0 &&
      myBalance >= feniInputMoney
    ) {
      // Noakhali Balance
      const feniBalance = getTextValueById("feni-amount");
      const feniNewBalance = feniBalance + feniInputMoney;
      document.getElementById("feni-amount").innerText = feniNewBalance;

      // My Balance

      const remainingMyBalance = myBalance - feniInputMoney;
      document.getElementById("my-balance").innerText = remainingMyBalance;

      // Alert Part
      document.getElementById("myModal").classList.remove("hidden");

      showModal();

      // History Section
      const now = new Date();
      const h2 = document.createElement("h2");
      h2.innerText = `"${feniInputMoney} Taka is Donated for Flood Relief in Feni,Bangladesh" 
"${now}"`;
      h2.classList.add(
        "font-bold",
        "text-xl",
        "p-3",
        "border",
        "border-gray-300",
        "border-2",
        "rounded-xl",
        "my-6"
      );
      document.getElementById("history-item").appendChild(h2);
    } else {
      alert("Invalid amount. Please input valid amount number.");
    }
  });
// Quota Movement  Function

document
  .getElementById("quota-movement-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaInput = document.getElementById("quota-movement-input").value;
    const quotaInputMoney = parseFloat(quotaInput);

    const myBalance = getTextValueById("my-balance");

    if (
      typeof quotaInputMoney === "number" &&
      quotaInputMoney > 0 &&
      myBalance >= quotaInputMoney
    ) {
      // Quota Balance
      const quotaBalance = getTextValueById("quota-amount");
      const quotaNewBalance = quotaBalance + quotaInputMoney;
      document.getElementById("quota-amount").innerText = quotaNewBalance;

      // My Balance

      const remainingMyBalance = myBalance - quotaInputMoney;
      document.getElementById("my-balance").innerText = remainingMyBalance;

      // Alert Part
      document.getElementById("myModal").classList.remove("hidden");

      showModal();

      // History Section
      const now = new Date();
      const h2 = document.createElement("h2");
      h2.innerText = `"${quotaInputMoney} Taka is Donated for  for Injured in the Quota Movement, Bangladesh" 
"${now}"`;
      h2.classList.add(
        "font-bold",
        "text-xl",
        "p-3",
        "border",
        "border-gray-300",
        "border-2",
        "rounded-xl",
        "my-6"
      );
      document.getElementById("history-item").appendChild(h2);
    } else {
      alert("Invalid amount. Please input valid amount number.");
    }
  });
