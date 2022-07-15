import { getSizes, setSize } from "./database.js"
// define a variable to store sizes in
const sizes = getSizes()
// event listener for size selection
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)
// html/button builder for sizes
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = sizes.map(
        (size) => {
            return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}

