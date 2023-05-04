export function changeArrowColor(input) {
    const leftButton = document.querySelector('.left')
    const rightButton = document.querySelector('.right')

    if (input === 'left') {
        leftButton.style.filter = 'var(--inverse-filter)'
        setTimeout(() => leftButton.style.filter = '',100)
    }
    else if (input === 'right') {
        rightButton.style.filter = 'var(--inverse-filter)'
        setTimeout(() => rightButton.style.filter = '',100)
    }
}