const previousDot = []

export function changeDotColor (number) {
    if (previousDot.length === 1) {
        const prevDot = document.querySelector(`#navigation-dot${previousDot[0]}`)
        prevDot.removeAttribute('style')
    }

    const dot = document.querySelector(`#navigation-dot${number+1}`)
    dot.style.border = '0.9rem solid var(--tertiary)'

    previousDot[0] = number+1
}