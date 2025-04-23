function generateTable() {
    const num = parseInt(document.getElementById('num').value);
    const tableOutput = document.getElementById('tableOutput');
    let output = "";
  
    if (isNaN(num)) {
      output = "Please enter a valid number.";
    } else {
      for (let i = 1; i <= 10; i++) {
        output += `${num} * ${i} = ${num * i}<br>`;
      }
    }
  
    tableOutput.innerHTML = output;
  }
  