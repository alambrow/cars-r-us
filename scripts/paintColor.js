import { getColor, setColor } from "./database.js"

const colors = getColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const paintColor = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const colorsList = colors.map(
        (color) => {
            return `<li>
            <input type="radio" name="colors" value="${color.id}" /> ${color.colorType}
            </li>`
        })


    // Join all of the strings in the array into a single string
    html += colorsList.join("\n")

    html += "</ul>"
    return html
}