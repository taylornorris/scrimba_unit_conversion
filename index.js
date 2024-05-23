/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input_el")
const lengthEl = document.getElementById("length_el")
const volumeEl = document.getElementById("volume_el")
const massEl = document.getElementById("mass_el")
const convertBtn = document.getElementById("convert_btn")

// const inputNum = Number(inputEl.value)

convertBtn.addEventListener("click", function() {
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength() {
    const inputNum = Number(inputEl.value)
    const meters = inputNum * 3.281
    const feet = inputNum / 3.281
    lengthEl.textContent = `${inputNum} meters = ${meters.toFixed(3)} feet | ${inputNum} feet = ${feet.toFixed(3)} meters`
}

function convertVolume() {
    const inputNum = Number(inputEl.value)
    const liters = inputNum * 0.264
    const gallons = inputNum / 0.264
    volumeEl.textContent = `${inputNum} liters = ${liters.toFixed(3)} gallons | ${inputNum} gallons = ${gallons.toFixed(3)} liters`
}

function convertMass() {
    const inputNum = Number(inputEl.value)
    const kilos = inputNum * 2.204
    const pounds = inputNum / 2.204
    massEl.textContent = `${inputNum} kilos = ${kilos.toFixed(3)} pounds | ${inputNum} pounds = ${pounds.toFixed(3)} kilos`
}