// Bank Account
// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:
// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

function createAccount(pin, amount = 0) {
    let currentPin = pin;
    let balance = amount;
  
    return {
      checkBalance(inputPin) {
        if (inputPin !== currentPin) return "Invalid PIN.";
        return `$${balance}`;
      },
      deposit(inputPin, amount) {
        if (inputPin !== currentPin) return "Invalid PIN.";
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw(inputPin, amount) {
        if (inputPin !== currentPin) return "Invalid PIN.";
        if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        balance -= amount;
        return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
      },
      changePin(inputPin, newPin) {
        if (inputPin !== currentPin) return "Invalid PIN.";
        currentPin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  module.exports = { createAccount };
  