import { imageDisplay } from "./DOMdisplay"

let index = 0

export function storedImages(operand) {
    //Add an index
    //On initial reading return 1st image
    //Then add or substract the index
    //How can I tell the program that 0 is next to 9?
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
        return imageDisplay(imageStorage[index])
    }
    else if(operand.includes('#')) {
        index = operand.match(/\d+/)[0]-1
        return imageDisplay(imageStorage[index])
    }
}