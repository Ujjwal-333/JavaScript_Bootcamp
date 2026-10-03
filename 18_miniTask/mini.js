// // 1. Elements ko select karo
// const btn = document.getElementById("click-me");
// const colorText = document.getElementById("color-code");

// // Hex codes mein 0-9 aur A-F tak characters hote hain
// const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// // 2. Button par click event lagao
// btn.addEventListener("click", function() {
//     let hexColor = "#";
    
//     // Hex code 6 characters ka hota hai, isliye 6 baar loop chalayenge
//     for (let i = 0; i < 6; i++) {
//         hexColor += hexValues[getRandomNumber()];
//     }

//     // 3. DOM Manipulation
//     document.body.style.backgroundColor = hexColor; // Background change
//     colorText.textContent = hexColor;               // Text update
// });

// // Random index generate karne ke liye function
// function getRandomNumber() {
//     return Math.floor(Math.random() * hexValues.length);
// }

const numbers = [2, 3, 4, 56, 7, 8];

numbers.forEach((value, index) => {
    // Agar index 4 hai, toh hum output 5 dikhayenge
    let displayIndex = (index === 4) ? index + 1 : index;
    
    console.log("Index:", displayIndex, "Value:", value);
});