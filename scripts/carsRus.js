import { interior } from "./interior.js"
import { paintColor } from "./paintColor.js"
import { technology } from "./technology.js"
import { wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"
import { carTypes } from "./types.js"

document.addEventListener(
    "click",
    (stateChanged) => {
        const itemClicked = stateChanged.target

        // if the order button is clicked, the state change is registered permanently in database.js
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)

export const carsRus = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint Options</h2>
                ${ paintColor()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior Options</h2>
                ${ interior() }
            </section>
            <section class="choices__technologies options">
                <h2>Technology Packages</h2>
                ${ technology() }
            </section>
            <section class="choices__wheels options">
                <h2>Wheel Options</h2>
                ${ wheels() }
            </section>
            <section class="choices__type options">
                <h2>Vehicle Types</h2>
                ${ carTypes() }
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
            ${ Orders() }
        </article>
    `
}