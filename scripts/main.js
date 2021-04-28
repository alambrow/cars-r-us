import { carsRus } from "./carsRus.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus()
    return mainContainer.innerHTML
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    renderAllHTML()
})