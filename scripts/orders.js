import { getOrders } from "./database.js"

const buildOrderListItems = (order) => {
    return `<li>
    <strong>Order ${order.id}</strong> was placed on ${order.timestamp}
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