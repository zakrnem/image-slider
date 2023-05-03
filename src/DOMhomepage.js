import { header } from "./DOMheader";
import { footer } from "./DOMfooter"
import { navigationDots } from "./DOMnavDots";
import { navigationLogic } from "./navigationLogic";

export function homepage() {
    header()
    navigationDots()
    footer()
    navigationLogic('initial')

    setInterval(() =>navigationLogic('right'),5000)

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
    document.addEventListener('keydown', (e) => {
        switch (true) {
            case (e.key.includes('Right') ||
            e.code === 'Space'):
                navigationLogic('right')
                break
            case (e.key.includes('Left') ||
            e.key === 'Backspace'):
                navigationLogic('left')
                break
            case (!isNaN(e.key)):
                const idNumber = e.key.match(/\d+/)[0]
                navigationLogic(idNumber)
                break
        }
    })
}