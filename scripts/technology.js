import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const techList = technologies.map(
        (technology) => {
            return `<li>
            <input type="radio" name="technologies" value="${technology.id}" /> ${technology.packageType}
            </li>`
        })


    // Join all of the strings in the array into a single string
    html += techList.join("\n")

    html += "</ul>"
    return html
}