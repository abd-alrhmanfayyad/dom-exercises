const list = document.getElementById("fruits");
const fruits = ["apple", "banana", "orange", "strawberry", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    const item = document.createElement("li");

    const image = document.createElement("img");
    image.src = `assets/${fruits[i]}.jpg`;
    image.alt = fruits[i];

    const name = document.createElement("p");
    name.textContent = fruits[i];

    item.append(image, name);
    list.append(item);
}





function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }

    return -1;
}
const numbers = [10, 20, 30, 40, 50];
document.getElementById("numbers").textContent = numbers.join(", ");

function q2() {
    const num = Number(prompt("Enter a number to search for:"));
    const index = findIndex(numbers, num);
    const result = document.getElementById("search-result");

    if (index === -1) {
        result.textContent = `${num} is not in the array (-1)`;
    } else {
        result.textContent = `${num} is at index ${index}`;
    }
}