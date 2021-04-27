const database = {
    paintColor: [
        { id: 1, colorType: "Silver", price: 249.99 },
        { id: 2, colorType: "Midnight Blue", price: 299.99 },
        { id: 3, colorType: "Firebrick Red", price: 329.99 },
        { id: 4, colorType: "Spring Green", price: 369.99 }
    ], 
    interior: [
        { id: 1, seatType: "Beige Fabric", price: 499.99 },
        { id: 2, seatType: "Charcoal Fabric", price: 599.99 },
        { id: 3, seatType: "White Leather", price: 1099.99 },
        { id: 4, seatType: "Black Leather", price: 1299.99 }
    ], 
    technology: [
        { id: 1, packageType: "Basic Package", packageDescription: "basic sound system", price: 199.99 },
        { id: 2, packageType: "Navigation Package", packageDescription: "includes integrated navigation controls", price: 499.99 },
        { id: 3, packageType: "Visibility Package", packageDescription: "includes side and rear cameras", price: 999.99 },
        { id: 4, packageType: "Ultra Package", packageDescription: "includes navigation and visibility packages", price: 1349.99 }
    ], 
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 399.99 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 449.99 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 699.99 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 749.99 }
    ]
}

export const getColor = () => {
    return [...database.paintColor]
}

export const getInterior = () => {
    return [...database.interior]
}

export const getTechnology = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheels]
}