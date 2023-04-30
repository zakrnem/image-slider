export function imageDisplay(currentImage) {
    const content = document.getElementById('content')

    const container = document.createElement('div')
    container.className = 'display-container'

        const imageDisplay = document.createElement('img')
        imageDisplay.src = `./images/${currentImage}.jpg`
        imageDisplay.className = 'current-image'

        const leftButton = document.createElement('img')
        leftButton.src = './images/forward-button-svgrepo-com.svg'
        leftButton.className = 'left button'

        const rightButton = document.createElement('img')
        rightButton.src = './images/forward-button-svgrepo-com.svg'
        rightButton.className = 'right button'

        container.append(leftButton, imageDisplay, rightButton)

    content.append(container)
}