import { getMetals, setMetal } from "./database.js"
// define a variable to store metals in
const metals = getMetals()
// event listener for metal selection
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)
//html/button builder for metals
export const Metals = () => {
    let html = "<ul>"

    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

