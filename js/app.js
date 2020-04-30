const generateNavBar = () => {
    const fragment = document.createDocumentFragment()
    const navBar = ['Home', 'Algorithm', 'Summary', 'Discover']

    for (title of navBar) {
        const listItem = document.createElement('li')

        const link = document.createElement('a')
        link.setAttribute('href',`#${title}`)
        link.innerText = title

        listItem.appendChild(link)
        fragment.appendChild(listItem)
    }

    document.querySelector('.nav-bar').appendChild(fragment)
}
setTimeout(generateNavBar, 0)

const createIntroText = () => {
    const introText = {
        header: 'Graph Theory',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    const fragment = document.createDocumentFragment()
    const section = document.createElement('section')
    section.className = 'intro-section'
    //create title element
    const title = document.createElement('h2')
    title.className = 'intro-header'
    title.innerText = introText.header

    // create paragraph elementt
    const paragraph = document.createElement('p')
    paragraph.className = 'intro-paragraph'
    paragraph.innerText = introText.paragraph

    // add to fragment
    section.appendChild(title)
    section.appendChild(paragraph)
    fragment.appendChild(section)
    document.querySelector('.site-intro-text').appendChild(fragment)
}
setTimeout(createIntroText, 0)

const createGuide = () => {
    const fragment = document.createDocumentFragment()
    const steps = [
        {
            header: "Kruskal's Algorithm",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            header: "Step One",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            header: "Step Two",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    for(step of steps){
        const section = document.createElement('section')
        section.className = 'step-section'

        const header = document.createElement('h2')
        header.innerText = step.header
        section.appendChild(header)

        const paragraph = document.createElement('p')
        paragraph.innerHTML = step.text
        section.appendChild(paragraph)
        

        const image = document.createElement('img')
        image.className = 'step-image'
        image.setAttribute('src','./images/connected-graph.svg')
        section.appendChild(image)
        
        fragment.appendChild(section)
    }
    document.querySelector('.algorithm-section').appendChild(fragment)
}
setTimeout(createGuide,0)

const createSummary = () => {
    const fragment = document.createDocumentFragment()
    const summary = {
        header: 'Moving Forward',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: './images/tree.svg'
    }
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'summary-wrapper'

    const header = document.createElement('h2')
    header.innerText = summary.header
    contentWrapper.appendChild(header)

    const paragraph = document.createElement('p')
    paragraph.innerText = summary.text
    contentWrapper.appendChild(paragraph)

    fragment.appendChild(contentWrapper)

    const image = document.createElement('img')
    image.setAttribute('src',summary.image)
    image.className = 'tree-image'
    fragment.appendChild(image)

    document.querySelector('.summary-section').appendChild(fragment) 
}
setTimeout(createSummary,0)

const createArticleLinks = () => {
    const fragment = document.createDocumentFragment()
    
    const articles = [
        {
            title:"Kruskal's Algorithm",
            link:'https://www.programiz.com/dsa/kruskal-algorithm',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title:"Prim's Algorithm",
            link:'https://coderbyte.com/algorithm/find-minimum-spanning-tree-using-prims-algorithm',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]

    
    for(article of articles){
        const contentWrapper = document.createElement('div')
        contentWrapper.className = 'article-wrapper'

        const title = document.createElement('h2')
        title.innerText = article.title
        contentWrapper.appendChild(title)

        const paragraph = document.createElement('p')
        paragraph.innerText = article.description
        contentWrapper.appendChild(paragraph)

        fragment.appendChild(contentWrapper)
    }
    document.querySelector('.article-section').appendChild(fragment)
}
setTimeout(createArticleLinks,0)

const createVideos = () => {
    const fragment = document.createDocumentFragment()
    const videos = [
        {
            link:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwjG5viVpZDpAhUET98KHQmpA48QwqsBMAF6BAgMEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUj47dxYPow8&usg=AOvVaw3SBtWYqaFi51hGl6l3VH2J'
        },
        {
            link:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=11&cad=rja&uact=8&ved=2ahUKEwj438rVpZDpAhVGTt8KHSJ6CwkQwqsBMAp6BAgKEAk&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYo7sddEVONg&usg=AOvVaw2MudJLfneBtyyW2ws3mWBl'
        },
        {
            link:'https://www.youtube.com/watch?v=82zlRaRUsaY'
        }
    ]

    for(video of videos){
        const iframe = document.createElement('iframe')
        iframe.setAttribute('src',video.link)
        iframe.setAttribute('width',200)
        iframe.setAttribute('height',200)
        fragment.appendChild(iframe)

    }
    document.querySelector('.video-section').appendChild(fragment)
}

const animateAppear = () => {
    let elements
    let windowHeight

    const init = ()=> {
        let main = document.querySelector('main')
        elements = main.querySelectorAll('div,section,img')
        windowHeight = window.innerHeight
    }

    const checkPosition = () => {
        for(let element of elements){
            let positionFromTop = element.getBoundingClientRect().top
            if(positionFromTop - windowHeight < 0){
                element.classList.add('fade-in-element')
                element.classList.remove('hidden-animate')
            }
        }
    }
    window.addEventListener('resize',init)
    window.addEventListener('scroll', checkPosition)
    init()
    checkPosition();
}
setTimeout(animateAppear,0)