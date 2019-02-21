"use strict";

class BankAccount {
    constructor(balance, interestRate){
    this.balance = balance;
    this.interestRate = interestRate;
    }
    addInterest(){
        this.balance = this.balance * this.interestRate
    }
}

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee){
        super(balance, interestRate)
        this.fee = fee;
    }
    applyFee(){
        this.balance-= this.fee;
    }
}

let DereksBankAccount = new BankAccount(30000, 1.03);
console.log(DereksBankAccount);
DereksBankAccount.addInterest();
console.log(DereksBankAccount);

let hiddenFeeAccount = new BankAccountWithFee (100, 1.015, 50); // these balance and interestRate arguments aren't passing into the extension class
console.log(hiddenFeeAccount)
hiddenFeeAccount.addInterest()
console.log(hiddenFeeAccount);
hiddenFeeAccount.applyFee();
console.log(hiddenFeeAccount);