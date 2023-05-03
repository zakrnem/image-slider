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
                console.log('Right button')
                break
            case (e.target.className.includes('left')):
                console.log('Left button')
                break
            case (e.target.id.includes('navigation-dot')):
                const idNumber = e.target.id.match(/\d+/)[0]
                console.log(`Nav dot #${idNumber}`)
                break
        }
    })
}