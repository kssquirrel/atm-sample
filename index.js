const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Please choose an option:
1. Check Balance
2. Make Deposit
3. Withdraw Cash
4. Exit
Enter your choice (1-4): `;

function main() {
  rl.question(menu, (choice) => {
    switch (choice.trim()) {
      case '1':
        console.log('You selected Option 1');
        break;
      case '2':
        console.log('You selected Option 2');
        break;
      case '3':4
        console.log('You selected Option 3');
        break;
      case '4':
        console.log('Exiting...');
        rl.close();
        return;
        default:
          console.log('Invalid choice. Please select a valid option.');
        }
        main(); // Display the menu again
      });
    }
    
    var result = main();
    console.log("result: " + result);
