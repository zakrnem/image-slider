export function navigationDots() {
    const content = document.getElementById('content')
    
    const container = document.createElement('div')
    container.className = 'navigation-container'

        const navLine = document.createElement('div')
        navLine.className = 'navigation-line'

        //10 dots
        for (let i = 1; i < 11; i++) {
            let navDot = document.createElement('div')
            navDot.id = `navigation-dot${i}`
            container.appendChild(navDot)
            console.log(i)
        }

        content.append(navLine)

    

    content.append(container)
}