import { storedImages } from "./storedImages";

export function navigationLogic(typeOfInput) {
    switch (true) {
        case (typeOfInput === 'initial'):
            storedImages(0)
            break
    }
}