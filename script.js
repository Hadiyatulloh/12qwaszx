let bgColor = prompt("Please enter a background color (e.g., red, blue, green):");


const validColors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

if (validColors.includes(bgColor)) {
    document.body.style.backgroundColor = bgColor;
} else {
    alert("Unday rang yo'q! Iltimos, mavjud ranglardan birini kiriting.");
}


let textColor = prompt("Please enter a text color (e.g., red, blue, green):");

if (validColors.includes(textColor)) {
    document.getElementById('lorem').style.color = textColor;
} else {
    alert("Unday rang yo'q! Iltimos, mavjud ranglardan birini kiriting.");
}