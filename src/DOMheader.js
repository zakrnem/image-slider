export function header() {
    const content = document.querySelector('#content')
    const header = document.createElement('header')

    const logo = document.createElement('img')
    logo.src = './images/image-slider-svgrepo-com.svg'
    logo.className = 'header-logo'

    const title = document.createElement('p')
    title.className = 'header-title'
    title.textContent = 'Image Slider'

    header.append(logo, title)
    content.appendChild(header)
}