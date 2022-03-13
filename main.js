
let valuetest = document.getElementById('form')
let valuetext = document.getElementById('valueText')

let lengthData = document.getElementById('lengthData')
let volumeData = document.getElementById('volumeData')
let massData = document.getElementById('massData')



const valueLength = () => {
    let valueint = parseInt(valuetest.value)
    valuetext.innerText = valueint;
    let mToF = valueint * 3.2808399
    let str_a = mToF.toString();
    let valueMeter = Number(str_a.slice(0, 6));

    let FToM = valueint / 3.2808399
    let str_b = FToM.toString();
    let valueFeet = Number(str_b.slice(0, 6));

    lengthData.innerText = `${valueint} meters = ${valueMeter} feet | ${valueint} feet = ${valueFeet} meters`
}


const valueVolume = () => {
    let valueint = parseInt(valuetest.value)
    valuetext.innerText = valueint;
    let mToF = valueint * 0.264172
    let str_a = mToF.toString();
    let valueMeter = Number(str_a.slice(0, 6));

    let FToM = valueint / 0.264172
    let str_b = FToM.toString();
    let valueFeet = Number(str_b.slice(0, 6));

    volumeData.innerText = `${valueint} liters = ${valueMeter} gallons | ${valueint} gallons = ${valueFeet} liters`
}

const valueMass = () => {
    let valueint = parseInt(valuetest.value)
    valuetext.innerText = valueint;

    let mToF = valueint * 2.2
    let str_a = mToF.toString();
    let valueMeter = Number(str_a.slice(0, 6));

    let FToM = valueint / 2.2
    let str_b = FToM.toString();
    let valueFeet = Number(str_b.slice(0, 6));

    massData.innerText = `${valueint} kilos = ${valueMeter} pounds | ${valueint} pounds = ${valueFeet} kilos`
}

const calculate = () => {
    valueLength()
    valueMass()
    valueVolume()
}


// volumeData.innerText = `${value} liters = ${value * 0.264172} gallons | ${value} gallons = ${value / 0.264172} liters`

// massData.innerText = `${value} kilos = ${value * 2.2} pounds | ${value} pounds = ${value / 2.2} kilos`