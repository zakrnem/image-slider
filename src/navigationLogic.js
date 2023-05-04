import { changeArrowColor } from "./DOMarrowColor";
import { storedImages } from "./storedImages";

export function navigationLogic(input) {
    switch (true) {
        case (input === 'initial'):
            storedImages(0)
            break
        case (input === 'right'):
            storedImages(1)
            changeArrowColor(input)
            break
        case (input === 'left'):
            storedImages(-1)
            changeArrowColor(input)
            break
        case (!isNaN(input)):
            storedImages(`#${input}`)
            break
    }
}