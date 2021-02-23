window.onload = () => { 
    let button = document.querySelector("#btn"); 
    button.addEventListener("click", calculateBMI); 
}; 
function calculateBMI() { 

    let height = parseInt(document.querySelector("#height").value); 
    let weight = parseInt(document.querySelector("#weight").value); 
    let result = document.querySelector("#result"); 
  
    if (height === '')  
        alert("Enter you weight"); 
  
    else if (weight === '')  
        alert("Enter your height"); 

    else {   
        let bmi = (weight / ((height * height)  
        / 10000)).toFixed(2); 
     
        if (bmi < 18.6) 
                result.innerHTML = "Your BMI is "+bmi+". You are underweight."
      
        else if (bmi >= 18.6 && bmi < 24.9)  
                result.innerHTML = "Your BMI is "+bmi+". You are healthy!"

        else 
            result.innerHTML = "Your BMI is "+bmi+". You are overweight."
        } 
} 