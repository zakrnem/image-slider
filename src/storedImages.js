import { imageDisplay } from "./DOMdisplay"

export function storedImages(operand) {
    //Add an index
    //On initial reading return 1st image
    //Then add or substract the index
    //How can I tell the program that 0 is next to 9?
    let index = 0

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
        return imageDisplay(imageStorage[index+operand])
    }
}