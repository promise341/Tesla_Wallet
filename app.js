let currentBalance = 0.75; // Initial balance in BTC

function unlockWallet() {
    const unlockCode = document.getElementById("unlockCode").value;
    if (unlockCode === "1234") {  // Example unlock code
        alert("Wallet Unlocked! Access granted.");
    } else {
        alert("Invalid unlock code. Please try again.");
    }
}

function withdrawBtc() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    const withdrawAddress = document.getElementById("withdrawAddress").value;
    
    if (!withdrawAmount || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }
    
    if (withdrawAmount > currentBalance) {
        alert("Insufficient balance. You have " + currentBalance + " BTC available.");
        return;
    }

    if (!withdrawAddress) {
        alert("Please enter a recipient address.");
        return;
    }

    currentBalance -= withdrawAmount;
    alert(`Successfully withdrew ${withdrawAmount} BTC to ${withdrawAddress}.`);
    document.getElementById("withdrawAmount").value = ""; // Clear input
    document.getElementById("withdrawAddress").value = ""; // Clear input
    updateBalance();
    addTransaction("Sent", withdrawAmount);
}

function addTransaction(type, amount) {
    const transactionsList = document.getElementById("transactions");
    const date = new Date().toLocaleDateString();
    const newTransaction = document.createElement("li");
    newTransaction.textContent = `${date} - ${type}: ${amount} BTC`;
    transactionsList.appendChild(newTransaction);
}

function updateBalance() {
    document.getElementById("balance").textContent = `$${(currentBalance * 40000).toFixed(2)} (${currentBalance.toFixed(2)} BTC)`;  // Update balance display
}

function sendBtc() {
    const sendAmount = prompt("Enter the amount of BTC you want to send:");
    if (!sendAmount || isNaN(sendAmount) || parseFloat(sendAmount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const recipientAddress = prompt("Enter the recipient's address:");
    if (!recipientAddress) {
        alert("Please enter a recipient address.");
        return;
    }

    // Proceed with sending BTC
    alert(`You are about to send ${sendAmount} BTC to ${recipientAddress}.`);
    // Here, you would normally call a function to send the BTC
    addTransaction("Sent", parseFloat(sendAmount));
}

function receiveBtc() {
    alert("To receive Bitcoin, please share your wallet address with the sender.");
    // Display the wallet address or QR code if applicable
    const walletAddress = "1A2B3C4D5E6F7G8H9I"; // Example address
    alert(`Your wallet address: ${walletAddress}`);
}

function viewQrCode() {
    alert("Displaying QR Code... (This is a placeholder; an actual QR code would be displayed here.)");
    // You can integrate a library to generate a QR code from the wallet address
}

// You can also add any additional functions for further enhancements as needed