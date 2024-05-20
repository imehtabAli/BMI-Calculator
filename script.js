const height = document.getElementById('height');
const weight = document.getElementById('weight');
const bmiButton = document.getElementById('bmiButton');
const bmiResult = document.getElementById('bmiResult');

bmiButton.addEventListener('click', ()=>{
    const heightValue = height.value;    
    const weightValue = weight.value;
    const heightInMeters = heightValue/100;
    const bmi = weightValue / (heightInMeters * heightInMeters);
    bmiResult.textContent = `${bmi.toFixed(2)}`;
});