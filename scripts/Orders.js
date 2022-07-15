import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

// order list builder
const buildOrderListItem = (order) => {
    // define variables to store imported functions
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

 // find and return aspects of metals, sizes, styles, and customOrders
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

 // totalCost is equal to the price of selected metal, style, and size
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    let costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

// string interpolation used to return order.id and costString as part of a list item
    return `<li>
    Order #${order.id} cost ${costString}
</li>`

}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

