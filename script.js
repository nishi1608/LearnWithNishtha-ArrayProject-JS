// script.js

// 1️⃣ Create an empty array to store shopping list items
let shoppingList = [];

// 2️⃣ Get references to input fields and output container
const valueInput = document.getElementById('valueInput'); // input for item value
const refInput = document.getElementById('refInput');     // input for reference index
const output = document.getElementById('output');        // div to display messages

// 3️⃣ Utility function to show the array or messages
function showMessage(message) {
    output.innerHTML = message;
}

// 4️⃣ Button operations
document.getElementById('pushButton').onclick = function() {
    const value = valueInput.value;
    if(value) {
        shoppingList.push(value); // Add item to end
        showMessage(`Added "${value}" to the end. Current List: ${shoppingList.join(', ')}`);
        valueInput.value = '';
    }
};

document.getElementById('unshiftButton').onclick = function() {
    const value = valueInput.value;
    if(value) {
        shoppingList.unshift(value); // Add item to beginning
        showMessage(`Added "${value}" to the beginning. Current List: ${shoppingList.join(', ')}`);
        valueInput.value = '';
    }
};

document.getElementById('spliceButton').onclick = function() {
    const value = valueInput.value;
    const index = parseInt(refInput.value);
    if(value && !isNaN(index) && index >= 0 && index <= shoppingList.length) {
        shoppingList.splice(index, 0, value); // Add item at reference index
        showMessage(`Added "${value}" at index ${index}. Current List: ${shoppingList.join(', ')}`);
        valueInput.value = '';
        refInput.value = '';
    } else {
        showMessage('Please enter a valid value and reference index.');
    }
};

document.getElementById('popButton').onclick = function() {
    const removed = shoppingList.pop(); // Remove last item
    showMessage(removed ? `Removed "${removed}" from the end. Current List: ${shoppingList.join(', ')}` : 'List is empty.');
};

document.getElementById('shiftButton').onclick = function() {
    const removed = shoppingList.shift(); // Remove first item
    showMessage(removed ? `Removed "${removed}" from the beginning. Current List: ${shoppingList.join(', ')}` : 'List is empty.');
};

document.getElementById('spliceRemoveButton').onclick = function() {
    const index = parseInt(refInput.value);
    if(!isNaN(index) && index >= 0 && index < shoppingList.length) {
        const removed = shoppingList.splice(index, 1); // Remove item at reference index
        showMessage(`Removed "${removed}" at index ${index}. Current List: ${shoppingList.join(', ')}`);
        refInput.value = '';
    } else {
        showMessage('Please enter a valid index to remove.');
    }
};

document.getElementById('displayButton').onclick = function() {
    showMessage(shoppingList.length ? `Current List: ${shoppingList.join(', ')}` : 'List is empty.');
};

document.getElementById('findItemButton').onclick = function() {
    const value = valueInput.value;
    const index = shoppingList.indexOf(value);
    showMessage(index !== -1 ? `"${value}" found at index ${index}.` : `"${value}" not found.`);
    valueInput.value = '';
};

document.getElementById('clearListButton').onclick = function() {
    shoppingList = []; // Clear entire list
    showMessage('List cleared.');
};

document.getElementById('sortListButton').onclick = function() {
    shoppingList.sort(); // Sort items alphabetically
    showMessage(`Sorted List: ${shoppingList.join(', ')}`);
};

document.getElementById('reverseListButton').onclick = function() {
    shoppingList.reverse(); // Reverse the array
    showMessage(`Reversed List: ${shoppingList.join(', ')}`);
};

document.getElementById('replaceItemButton').onclick = function() {
    const value = valueInput.value;
    const index = parseInt(refInput.value);
    if(value && !isNaN(index) && index >= 0 && index < shoppingList.length) {
        const old = shoppingList[index];
        shoppingList[index] = value; // Replace item at reference index
        showMessage(`Replaced "${old}" with "${value}" at index ${index}. Current List: ${shoppingList.join(', ')}`);
        valueInput.value = '';
        refInput.value = '';
    } else {
        showMessage('Please enter a valid value and index to replace.');
    }
};

document.getElementById('filterItemsButton').onclick = function() {
    const value = valueInput.value;
    if(value) {
        const filtered = shoppingList.filter(item => item.includes(value)); // Filter items containing input
        showMessage(filtered.length ? `Filtered Items: ${filtered.join(', ')}` : `No items match "${value}".`);
        valueInput.value = '';
    }
};
