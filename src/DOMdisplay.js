export function imageDisplay(currentImage) {
    const content = document.getElementById('content')
    const displayContainer = content.querySelector('.display-container')
    
    if (!displayContainer) {
        const navigationLine = document.querySelector('.navigation-line')
        const container = document.createElement('div')
        container.className = 'display-container'

        const image = document.createElement('img')
        image.src = `./images/${currentImage}.jpg`
        image.className = 'current-image'

        const leftButton = document.createElement('img')
        leftButton.src = './images/forward-button-svgrepo-com.svg'
        leftButton.className = 'left button'

        const rightButton = document.createElement('img')
        rightButton.src = './images/forward-button-svgrepo-com.svg'
        rightButton.className = 'right button'

        container.append(leftButton, image, rightButton)
        content.insertBefore(container, navigationLine)
    }
    else {
        const image = document.querySelector('.current-image')
        image.src = `./images/${currentImage}.jpg`
    }


    
}