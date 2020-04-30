const generateNavBar = () => {
    const fragment = document.createDocumentFragment();
    const navBar = ['home', 'algorithm', 'summary', 'discover']

    for (title of navBar) {
        const newElement = document.createElement('li');
        newElement.innerText = title
        fragment.appendChild(newElement);
    }

    document.querySelector('.nav-bar').appendChild(fragment)
}
setTimeout(generateNavBar,0)

const createIntroText = () => {
    const introText = {
        header: 'Graph Theory',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    const fragment = document.createDocumentFragment();
    const section = document.createElement('section');
    section.className='intro-section'
    //create title element
    const title = document.createElement('h2');
    title.className = 'intro-header'
    title.innerText = introText.header

    // create paragraph elementt
    const paragraph = document.createElement('p');
    paragraph.className = 'intro-paragraph'
    paragraph.innerText = introText.paragraph

    // add to fragment
    section.appendChild(title)
    section.appendChild(paragraph)
    fragment.appendChild(section)
    document.querySelector('.site-intro-text').appendChild(fragment);
}
setTimeout(createIntroText,0)
