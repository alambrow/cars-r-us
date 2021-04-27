import { interior } from "./interior.js"
import { paintColor } from "./paintColor.js"
import { technology } from "./technology.js"
import { wheels } from "./wheels.js"

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
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
        </article>
    `
}