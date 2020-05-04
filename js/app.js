// takes in a class or id and appends the navBar array
const generateNavBar = (element) => {
    const fragment = document.createDocumentFragment()
    // set navbar array options
    const navBar = ['Home', 'Algorithm', 'Summary', 'Discover']

    // iterate over navBar options, adding them to a list
    for (title of navBar) {
        const listItem = document.createElement('li')

        const link = document.createElement('a')
        link.setAttribute('href',`#${title}`)
        link.innerText = title
        // add the list to the fragment
        listItem.appendChild(link)
        fragment.appendChild(listItem)
    }
    // add to UI
    document.querySelector(element).appendChild(fragment)
}
// invoke functions after website loads
setTimeout(generateNavBar, 0,'.nav-bar')
setTimeout(generateNavBar, 0,'.mobile-nav-bar')

// toggles thee navBar modal display on and off
const toggleModal = () => {
    // select the parent element for the toggle elements
    let toggle = document.querySelector('.nav-bar')
    // select toggle elements
    const open = document.querySelector('.open-nav')
    const close = document.querySelector('.close-nav')
    // select modal
    const modal = document.querySelector('.mobile-modal')

    toggle.addEventListener('click', () => {
        modal.classList.contains('hidden') ?
        // show the modal
        modal.classList.remove('hidden') &
        // hide the current toggle
        open.classList.add('hidden-toggle','rotate-animation') &
        // show the hidden toggle
        close.classList.remove('hidden-toggle') &
        close.classList.add('rotate-animation')
        :
        // hide the modal
        modal.classList.add('hidden') &
        // display the hidden toggle
        open.classList.remove('hidden-toggle') &
        //  hide the current toggle
        close.classList.add('hidden-toggle')
     })
    
}
setTimeout(toggleModal,0)


const createIntroText = () => {
    const introText = {
        header: 'Graph Theory',
        paragraph:'Graph Theory is a  popular subject that is taught in discrete mathematics. It helps discover relationships between objects. Both directed and undirected graphs consist of vertices that are connected by edges. Directed graphs  join two vertices asymmetrically. Undirected graphs join two edges symmetrically. There are lots of algorithm that make graph theory so efficient for processing information. Graph Theory is powerful for discovering relationships, aggregating and easing dynamic structures.'
        // paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

// create guide section 
const createGuide = () => {
    const fragment = document.createDocumentFragment()
    // steps in the guide section
    const steps = [
        {
            header: "Kruskal's Algorithm",
            text:'This algorithm is considered one of the greedy algorithms in graph theory. The goal is to find the minimal spanning tree within a graph. To begin, you first find a subset of all the lowest vertices. Each time a low subset is found without creating a cycle, it becomes a part of the minimal spanning tree.',
            image:'./images/first-graph.svg'
            // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            header: "Step One",
            text: 'The lowest weight for the edges in this graph is two. They do not create a cycle so they are both added to the tree.',
            image:'./images/second-graph.svg'
        },
        {
            header: "Step Two",
            text: 'The second lowest edge in the graph is three. There is no order for choosing which edges, but they do have to connect the tree without creating cycles. The tree below is the minmal spanning tree.',
            image:'./images/third-graph.svg'
        },
    ]
    // iterate over steps 
    for(step of steps){
        // create a section to hold header, paragraph and image.
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
        image.setAttribute('src', step.image)
        section.appendChild(image)
        // add the section to the fragment
        fragment.appendChild(section)
    }
    // add the fragment to the UI
    document.querySelector('.algorithm-section').appendChild(fragment)
}
setTimeout(createGuide,0)

// create summary page
const createSummary = () => {
    const fragment = document.createDocumentFragment()
    const summary = {
        header: 'Moving Forward',
        text: 'The use of Kruskal’s algorithm is a simple example of using graph theory to find the minimal spanning tree of a connected graph.There are other algorithms to be explored in graph theory, which provide their own benefits.  As shown the right(bottom for mobile devices), not all graphs are similar and they can be tricky. Graph theory is used in different areas, such as computer science and physics. There are sources at the end of this website for more information about other algorithms and the example one used to show Kruskal’s algorithm.',
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
    //image gets appended seperately from contentWrapper
    const image = document.createElement('img')
    image.setAttribute('src',summary.image)
    image.className = 'tree-image'
    fragment.appendChild(image)

    document.querySelector('.summary-section').appendChild(fragment) 
}
setTimeout(createSummary,0)

// creates article links towards the footer of the page
const createArticleLinks = () => {
    const fragment = document.createDocumentFragment()
    
    const articles = [
        {
            title:"Kruskal's Algorithm",
            link:'https://www.hackerearth.com/blog/developers/kruskals-minimum-spanning-tree-algorithm-example/',
            description:"This is a great article on how Kruskal's algorithm applies in real life."
        },
        {
            title:"Prim's Algorithm",
            link:'https://coderbyte.com/algorithm/find-minimum-spanning-tree-using-prims-algorithm',
            description:"This algorithm is similar to Kruskal's, but traverses the tree in a different manner."
        },
        {
            title:"Dijkstras Algorithm",
            link:'https://brilliant.org/wiki/dijkstras-short-path-finder/',
            description:"This algorithm is used to find the minimal spanning tree."
        },
    ]

    // iterate over articles array
    for(article of articles){
        // container to hold the title and paragraph
        const contentWrapper = document.createElement('div')
        contentWrapper.className = 'article-wrapper'

        // wrap titles in a tag for linking to article
        const link = document.createElement('a')
        const title = document.createElement('h2')
        title.innerText = article.title
        link.appendChild(title)
        link.setAttribute('href',article.link)
        // opens link in a new tab
        link.setAttribute('target','_blank')
        link.setAttribute('rel','noopener noreferrer')
        contentWrapper.appendChild(link)


        const paragraph = document.createElement('p')
        paragraph.innerText = article.description
        contentWrapper.appendChild(paragraph)


        fragment.appendChild(contentWrapper)
    }
    document.querySelector('.article-section').appendChild(fragment)
}
setTimeout(createArticleLinks,0)

// animation for main UI content. Makes content appear as it comes into view
const animateAppear = () => {
    // variables to keep track of elements and window size
    // initiated outside of functions to be reused
    let elements
    let windowHeight

    // selects all the elements in the main section and gets window height
    const init = ()=> {
        let main = document.querySelector('main')
        elements = main.querySelectorAll('div,section,img')
        windowHeight = window.innerHeight
    }
    // checks the position of elements
    const checkPosition = () => {
        const windowStart = 0
        // iterate over elements to alter class names
        for(let element of elements){
            let positionFromTop = element.getBoundingClientRect().top
            // if the section is in view then animate it
            if(positionFromTop - windowHeight < windowStart){
                element.classList.add('fade-in-element')
                element.classList.remove('hidden-animate')
            }
            // if the section is out of view then remove animation
            else{
                if(positionFromTop + windowHeight >= windowStart){
                    element.classList.add('hidden-animate')
                    element.classList.remove('fade-in-element')
                }
            }
        }
    }
    // when the window resizes, the positions change so the element position
    // has to be calculated again
    window.addEventListener('resize',init)
    // check when use scrolls to add and remove classes
    window.addEventListener('scroll', checkPosition)
    
    init()
    checkPosition();
}
setTimeout(animateAppear,0)