let m = Number(prompt('Enter your mass(kg): '));
let h = Number(prompt('Enter your height(cm)'));
let bmi = m/((h/100)**2);
alert(`Your BMI is ${bmi.toFixed(1)}`)
if(bmi<16) alert('You are severely underweight.');
else if(bmi<=18.5) alert('You are underweight.');
else if(bmi<=25) alert('You are normal.');
else if(bmi<=30) alert('You are overweight.');
else alert('You are obese.');
