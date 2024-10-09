const form = document.querySelector("#bmi-form");

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector(`#height-input`).value);
  const weight = parseFloat(document.querySelector(`#weight-input`).value);

  const result = document.querySelector(`#result`);

  if (height < 0 || isNaN(height)) {
    result.style.color = `#d84040`;
    result.innerHTML = `Please enter a Valid Height`;
  } else if (weight < 0 || isNaN(weight)) {
    result.style.color = `#d84040`;
    result.innerHTML = `Please enter a Valid Weight`;
  } else {
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let preciseBmi = parseFloat(bmi.toFixed(2));
    result.style.color = `#25c025`;
    let firstChildOfResult = result.childNodes;
    result.innerHTML = `<div>Your BMI is ${preciseBmi}</div>`;
    firstChildOfResult[0].style.color = `#25c025`;

    if (preciseBmi < 18.6) {
      let msg = document.createTextNode(`You are under-weight..`);
      result.append(msg);
    } else if (preciseBmi >= 18.6 && preciseBmi <= 24.9) {
      let msg = document.createTextNode(`You are in the normal range..`);
      result.append(msg);
    } else {
      let msg = document.createTextNode(`You are over-weight..`);
      result.append(msg);
    }
  }
});
