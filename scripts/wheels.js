import { getWheels } from "./database.js"

const wheels = getWheels()

export const wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const wheelList = wheels.map(
        (wheel) => {
            return `<li>
            <input type="radio" name="technologies" value="${wheel.id}" /> ${wheel.wheelType}
            </li>`
        })


    // Join all of the strings in the array into a single string
    html += wheelList.join("\n")

    html += "</ul>"
    return html
}