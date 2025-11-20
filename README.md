# JavaScript Shopping List Project

## Overview

This is a **beginner-friendly JavaScript project** that demonstrates the use of **array methods** and DOM manipulation to manage a shopping list. Users can add, remove, modify, search, sort, and filter items in a dynamic shopping list using a simple web interface.

The project focuses on practical usage of JavaScript **array methods** like `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, and `filter`, while providing instant feedback in the browser.

---

## Features & Array Methods Used

| Feature                              | Button          | Array Method Used         | Description                                                       |
| ------------------------------------ | --------------- | ------------------------- | ----------------------------------------------------------------- |
| Add item to the **end**              | Push            | `push()`                  | Adds the entered item to the **end** of the array.                |
| Add item to the **beginning**        | Unshift         | `unshift()`               | Adds the entered item to the **start** of the array.              |
| Insert item at a **specific index**  | Splice (Add)    | `splice(index, 0, value)` | Inserts the item at the given index without removing any element. |
| Remove **last item**                 | Pop             | `pop()`                   | Removes the last element from the array.                          |
| Remove **first item**                | Shift           | `shift()`                 | Removes the first element from the array.                         |
| Remove item at a **specific index**  | Splice (Remove) | `splice(index, 1)`        | Removes 1 element at the given index.                             |
| Replace item at a **specific index** | Replace Item    | `array[index] = value`    | Replaces the item at the given index with a new value.            |
| Display **current list**             | Display         | N/A                       | Shows all items in the array.                                     |
| Search for an item                   | Find Item       | `indexOf(value)`          | Finds the index of a specific value in the array.                 |
| Filter items containing text         | Filter Items    | `filter()`                | Returns items containing the entered substring.                   |
| Sort list **alphabetically**         | Sort List       | `sort()`                  | Sorts the array in alphabetical order.                            |
| Reverse list order                   | Reverse List    | `reverse()`               | Reverses the array elements.                                      |
| Clear **entire list**                | Clear List      | `shoppingList = []`       | Empties the array completely.                                     |

---

## Technologies Used

* **HTML**: Form inputs, buttons, and container elements.
* **CSS**: Responsive layout, flexbox for buttons, hover effects, styling of inputs and output messages.
* **JavaScript**: Array operations, DOM manipulation, event listeners, and dynamic content updates.

---

## Project Structure

```
/LearnWithNishtha-ArrayProject-JS
│
├─ index.html       # Main HTML file with input fields and buttons
├─ style.css        # Styling for the form, buttons, and output section
├─ script.js        # JavaScript logic for array operations and DOM updates
└─ package.json     # Project configuration file
```

---

## How to Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nishi1608/LearnWithNishtha-ArrayProject-JS.git
   ```
2. **Open `index.html`** in your browser.
3. **Enter item names** in the input box and perform actions using the buttons.
4. **Reference index input** is required for actions like adding, removing, or replacing at a specific position.
5. **Output section** displays the current list, operation results, and filtered items.

---

## Learning Outcomes

By working with this project, you will learn:

* How to use JavaScript **array methods** in practical scenarios.
* How to interact with **HTML elements using DOM methods**.
* How to use **event listeners** to trigger functions on button clicks.
* How to implement **input validation** and display user-friendly messages.
* How to create a **responsive and interactive UI** with CSS.

---

## Contribution

Feel free to:

* Add more array operations.
* Improve UI/UX with better styling.
* Add persistent storage using `localStorage` so the list is saved across browser reloads.

---

## Repository & Issues

* Repository: [LearnWithNishtha-ArrayProject-JS](https://github.com/nishi1608/LearnWithNishtha-ArrayProject-JS)
* Issues: [Submit Issues](https://github.com/nishi1608/LearnWithNishtha-ArrayProject-JS/issues)

---

## License

This project is licensed under **ISC License**.

