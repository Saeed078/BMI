let userWeight = document.getElementById("weight");
let userHeight = document.getElementById("height");
let weightSpan = document.querySelector(".weight");
let heightSpan = document.querySelector(".height");
let numberResultElem = document.querySelector(".numberResult");
let Conclusion = document.querySelector(".Conclusion");

function weight(event) {
    weightSpan.innerHTML = event.target.value + "kg"
    showResult();
}

function height(event) {
    heightSpan.innerHTML = event.target.value + "cm"
    showResult();
}



function showResult() {
  let heightValueMeter = userHeight.value / 100;
  let weightValue = userWeight.value;
  let bmiResult = weightValue / (heightValueMeter * heightValueMeter);
  numberResultElem.innerHTML = Math.floor(bmiResult);
  //Conclusion
        if(bmiResult < 18.5) {
          Conclusion.innerHTML = "لاغر"          //لاغر
          Conclusion.style.color = "blue";
          numberResultElem.setAttribute("class", "numberResult border-top border-primary ");

        } else if( 18.5 <= bmiResult && bmiResult <=24.9) {
          Conclusion.innerHTML = "نرمال";           //نرمال
          Conclusion.style.color = "green"
          numberResultElem.setAttribute("class","numberResult border-top border-success border-5 border-5 ");
        } else if(bmiResult >= 25 && bmiResult <= 29.9) {
          Conclusion.innerHTML = "اضافه وزن";             //اضافه وزن
          Conclusion.style.color = "darkgoldenrod";
          numberResultElem.setAttribute("class", "numberResult border-top border-warning ")
        } else {
          Conclusion.innerHTML = "چاق";          //چاق
          Conclusion.style.color = "red";
          numberResultElem.setAttribute("class", "numberResult border-top border-danger ");
        }
}

userWeight.addEventListener("input", weight);
userHeight.addEventListener("input", height);
