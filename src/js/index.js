// 1 task

const fStr = "some text";
const sStr = "";

if (fStr && sStr) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2 task

const fNum = 10;
const sNum = 5;

let sum = fNum + sNum;

if (sum <= 10) {
  console.log("Сума менша або дорівнює 10");
} else {
  console.log("Сума більша за 10");
}

// 3 task

const str = "JavaScript";

if (str.toLowerCase() === "javascript") {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4 task

const num = 15;

if (num >= 10 && num <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5 task

const userName = "Async";
const userEmail = "useremail@mail.com";
const userPassword = "DXe78v7Ri5";

if (
  userName.length >= 3 &&
  userEmail.includes("@") &&
  userPassword.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
