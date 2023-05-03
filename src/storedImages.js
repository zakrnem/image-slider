import { imageDisplay } from "./DOMdisplay"
import { changeDotColor } from "./DOMdotColor"

let index = 0

export function storedImages(operand) {
    const imageStorage = [
        'car',
        'keyboard',
        'lake',
        'mountain',
        'river',
        'tennis',
        'tractor',
        'traffic',
        'truck',
        'way'
    ]

    if (!isNaN(operand)) {
        index += operand
        if (index < 0) {
            index += 10
        }
        else if (index > 9) {
            index -= 10
        }
        imageDisplay(imageStorage[index])
        changeDotColor(index)
    }
    else if(operand.includes('#')) {
        index = operand.match(/\d+/)[0]-1
        changeDotColor(index)
        imageDisplay(imageStorage[index])
    }
}