document.body.style.backgroundColor = "#212121";
document.body.style.color = "white";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const message = document.querySelector("#message");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight";
  } else {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
    if (bmi < 18.6) {
      message.innerHTML = "You are underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.innerHTML = "You have a normal weight";
    } else {
      message.innerHTML = "You are overweight";
    }
  }
});
