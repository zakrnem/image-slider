import { header } from "./DOMheader";
import { footer } from "./DOMfooter"
import { navigationDots } from "./DOMnavDots";
import { navigationLogic } from "./navigationLogic";

export function homepage() {
    header()
    navigationLogic('initial')
    navigationDots()
    footer()

    document.addEventListener('click', (e) => {
        switch (true) {
            case (e.target.className.includes('right')):
                navigationLogic('right')
                break
            case (e.target.className.includes('left')):
                navigationLogic('left')
                break
            case (e.target.id.includes('navigation-dot')):
                const idNumber = e.target.id.match(/\d+/)[0]
                navigationLogic(idNumber)
                break
        }
    })
}