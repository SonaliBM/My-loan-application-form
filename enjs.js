//value inport from indexjs.html using localstorage
    document.getElementById('name3').innerHTML = localStorage.getItem("NAME");
        let count=0;


// Mock user session data
    const userSession = {
      username: "username"
    };

    // Function to display username and logout button from indexjs.html
    function displayUser() {
      document.getElementById('username').innerText = `Welcome, ${userSession.username}`;
    }

    // Function to logout user
    function logout() {
      // Code to logout user (e.g., clear session data, redirect to login page)
      alert('Logged out successfully!');
    }

    // Function to calculate EMI
    function calculateEMI() {
      const tenure = document.getElementById('tenure').value;
      const interestRate = getInterestRate(tenure);
      const loanAmount = parseFloat(document.getElementById('loanAmount').value);
      const monthlyInterestRate = (interestRate / 12) / 100;
      const numberOfPayments = tenure;
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      document.getElementById('interestRate').innerText = `Interest Rate: ${interestRate}%`;
      document.getElementById('emiResult').innerText = `EMI: $${emi.toFixed(2)} per month`;
    }

    // Function to get interest rate based on tenure
    function getInterestRate(tenure) {
      // Mocked interest rates
      const interestRates = {
        12: 8,
        24: 9,
        36: 10,
        48: 10.5,
        60: 11
      };

      return interestRates[tenure];
    }

    // Display username on page load
    window.onload = function() {
      displayUser();
    };