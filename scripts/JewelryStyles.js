import { getStyles, setStyle } from "./database.js"
// define a variable to store styles in
const styles = getStyles()
// event listener for style selection
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)
// html/button builder for styles
export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
        
        
        <input type="radio" name="style" value="${style.id}"/> ${style.style} `
    })
    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

