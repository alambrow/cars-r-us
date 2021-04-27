import { getInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)

export const interior = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const interiorsList = interiors.map(
        (interior) => {
            return `<li>
            <input type="radio" name="interiors" value="${interior.id}" /> ${interior.seatType}
            </li>`
        })


    // Join all of the strings in the array into a single string
    html += interiorsList.join("\n")

    html += "</ul>"
    return html
}