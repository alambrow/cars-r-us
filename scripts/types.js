import { getTypes, setType } from "./database.js"

const types = getTypes()

// event listener to register button-click event

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "type") {
            // invoke setType function in order to register change in database.js
            setType(parseInt(event.target.value))
        }
    }
)


export const carTypes = () => {
    let html = ""

    const typesList = types.map(
        (type) => {
            return `<input type="radio" name="type" value="${type.id}"> ${type.type}`
        }
    )

    html += typesList.join(" ")

    return html
}