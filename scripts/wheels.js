import { getWheels } from "./database.js"

const wheelArray = getWheels()

export const wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const wheelList = wheelArray.map(
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