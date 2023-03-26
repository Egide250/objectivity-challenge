// Define a class for a bank account
class BankAccount {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Error: Deposit amount must be positive");
        return;
      }
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance is ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Error: Insufficient funds. ${this.name}'s account balance is ${this.balance}`);
        return;
      }
      if (amount <= 0) {
        console.log("Error: Withdrawal amount must be positive");
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount} from ${this.name}'s account. New balance is ${this.balance}`);
    }
  
    viewBalance() {
      console.log(`${this.name}'s account balance is ${this.balance}`);
    }
  }
  
  // Define an array to store bank accounts
  const accounts = [];
  
  // Define a function to create a new bank account
  function createAccount() {
    const name = prompt("Enter your name:");
    const balance = parseFloat(prompt("Enter your initial balance:"));
    const account = new BankAccount(name, balance);
    accounts.push(account);
    console.log(`Created a new account for ${name} with a balance of ${balance}`);
  }
  
  // Define a function to deposit money into a bank account
  function deposit() {
    const name = prompt("Enter your name:");
    const account = accounts.find(acc => acc.name === name);
    if (!account) {
      console.log(`Error: Account for ${name} not found`);
      return;
    }
    const amount = parseFloat(prompt("Enter the amount to deposit:"));
    account.deposit(amount);
  }
  
  // Define a function to withdraw money from a bank account
  function withdraw() {
    const name = prompt("Enter your name:");
    const account = accounts.find(acc => acc.name === name);
    if (!account) {
      console.log(`Error: Account for ${name} not found`);
      return;
    }
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));
    account.withdraw(amount);
  }
  
  // Define a function to view the balance of a bank account
  function viewBalance() {
    const name = prompt("Enter your name:");
    const account = accounts.find(acc => acc.name === name);
    if (!account) {
      console.log(`Error: Account for ${name} not found`);
      return;
    }
    account.viewBalance();
  }
  
  // Define the main function to run the bank account system
  function main() {
    while (true) {
      const choice = prompt(`Enter a number to select an option:
  1. Create account
  2. Deposit money
  3. Withdraw money
  4. View balance
  5. Exit`);
      switch (choice) {
        case "1":
          createAccount();
          break;
        case "2":
          deposit();
          break;
        case "3":
          withdraw();
          break;
        case "4":
          viewBalance();
          break;
        case "5":
          console.log("Exiting...");
          return;
        default:
          console.log("Error: Invalid choice");
      }
    }
  }
  
  // Run the main function
  main();
  