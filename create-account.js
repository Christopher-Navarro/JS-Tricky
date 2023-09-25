function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
          if (inputPin !== pin) return "Wrong PIN.";
          return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
          if (inputPin !== pin) return "Wrong PIN.";
          amount += newAmount;
          return `Succesfully deposited $${newAmount} into account. Current balance: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
          if (inputPin !== pin) return "Wrong PIN.";
          if (withdrawalAmount > amount)
            return "Withdrawal amount exceeds balance. Transaction failed.";
          amount -= withdrawalAmount;
          return `Succesfully withdrew $${withdrawalAmount} from account. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
          if (oldPin !== pin) return "Wrong PIN.";
          pin = newPin;
          return "PIN successfully changed!";
        }
      };

}

module.exports = { createAccount };
