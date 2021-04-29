import { carsRus } from "./carsRus.js"

document.addEventListener("stateChanged", event => {
    console.log("State of date has changed. Regenerating HTML...")
    renderAllHTML()
})

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus()
    return mainContainer.innerHTML
}

renderAllHTML()