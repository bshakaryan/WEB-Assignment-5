const numberInput = document.getElementById('numberInput');
const sortOrder = document.getElementById('sortOrder');
const sortBtn = document.getElementById('sortBtn');
const result = document.getElementById('result');

sortBtn.addEventListener('click', sortNumbers);

function sortNumbers() {
    const inputText = numberInput.value;
    const numberArray = inputText.split(',').map(num => num.trim());

    if (!validateInput(numberArray)) {
        alert('Please enter only valid numbers separated by commas.');
        return;
    }

    const numbers = numberArray.map(Number);

    if (sortOrder.value === 'ascending') {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }

    result.textContent = numbers.join(', ');
}

function validateInput(arr) {
    return arr.every(num => !isNaN(num) && num.trim() !== '');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.nav-item');
    let currentIndex = 0; 


    menuItems[currentIndex].focus();


    document.addEventListener('keydown', function(event) {
      const key = event.key;


      if (key === 'ArrowRight' || key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % menuItems.length; 
        menuItems[currentIndex].focus();
      }

      
      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[currentIndex].focus();
      }

      
      if (key === 'Enter') {
        menuItems[currentIndex].click();
      }
    });
  });
