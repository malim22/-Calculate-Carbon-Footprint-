const energyInput = document.getElementById('energy-input');
const transportationInput = document.getElementById('transportation-input');
const wasteInput = document.getElementById('waste-input');
const dietInput = document.getElementById('diet-input');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click',()=>{
    const energyValue = energyInput.value;
    const transportationValue = transportationInput.value;
    const wasteValue = wasteInput.value;
    const dietValue = dietInput.value;

    if(energyValue&&transportationValue&&wasteValue&&dietValue){
        const carbonFootprint=calculateCarbonFootprint(energyValue,transportationValue,wasteValue,dietValue);
        displayResult(carbonFootprint);
    }else{
        alert('please fill in all filds.');
    }
});
function calculateCarbonFootprint(energy,transportation,waste,diet){
    //Add your calculation logic here
    //For now,let`s just return a hardcode value
    return 100;
}

function displayResult(carbonFootprint){
    resultDiv.innerHTML= 'Your carbon footprint is ${carbonFootprint} kg CO2e.';
}

