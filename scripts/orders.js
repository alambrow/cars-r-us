import { getColor, getInterior, getOrders, getTechnology, getWheels } from "./database.js"

const colors = getColor()
const interiors = getInterior()
const technologies = getTechnology()
const wheels = getWheels()

const buildOrderListItems = (order) => {
    // the functions up here generate the prices for the components of the order
    // goes through paint color, interior, tech, and wheel options respective,
    // then adds together the price values of the objects returned by selection event
    
    const selectedColor = colors.find(
        (color) => {
            return color.id === order.paintId
        }
    )
    const selectedInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const selectedTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const selectedWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const totalPrice = selectedColor.price + selectedInterior.price + selectedTech.price + selectedWheels.price

    return `<li>
    <strong>Order ${order.id}</strong> was placed at the ridiculous time of ${order.timestamp} and will cost the consumer $${ totalPrice }
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let ordersHTML = "<ul>"

    const listItems = orders.map(buildOrderListItems)

    ordersHTML += listItems.join("\n")
    ordersHTML += "</ul>"

    return ordersHTML
}