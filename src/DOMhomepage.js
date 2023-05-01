import { header } from "./DOMheader";
import { footer } from "./DOMfooter"
import { imageDisplay } from "./DOMdisplay";
import { navigationDots } from "./DOMnavDots";

export function homepage() {
    header()
    imageDisplay('mountain')
    navigationDots()
    footer()
}