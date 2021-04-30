const portfolioApp = {}

// display data
portfolioApp.projects = {
projectOne: {
        title: `airhead`,
        url: `./assets/airheadWide.png`,
        tools: `REACT | HTML | CSS`,
        github: `https://github.com/airheadapp/airhead`,
        live: `https://airhead-meditation.netlify.app/`,
        description: `A meditation app that generates a random inspirational quote retrieved from Firebase while providing the user with a glowing expanding and retracting animation as a point of focus for the duration of the user’s selection.`
    },
    projectTwo: {
        title: `Wordfinder 2000`,
        url: `./assets/wordfinderWide.png`,
        tools: `JS | HTML | CSS | REST APIs`,
        github: `https://github.com/Anahita-and-Aaron/wordFinder`,
        live: `https://wordfinder2000.netlify.app`,
        description: `An app that allows the user to search for words and their definitions for assistance in crosswords or writing. The user can search for words with similar meaning, similar sounds, and using the first and last letters.`
    },
    projectThree: {
        title: `Anywhere But Here`,
        url: `./assets/anywhereWide.png`,
        tools: `REACT | HTML | CSS | MapQuest API`,
        github: `https://github.com/MappleInc/anywhereButHere`,
        live: `https://quizzical-wescoff-cb58e4.netlify.app/`,
        description: `An app that allows the user to search for locations in their vicinity using any word. Using the MapQuest Api, the search results show mediocre businesses and directions from your starting point.`
    },
    projectFour: {
        title: `Sunset Time`,
        url: `./assets/sunsetWide.png`,
        tools: `JQuery | HTML | CSS`,
        github: `https://github.com/ajamalirad/sunset`,
        live: `https://sunset-tonight.netlify.app`,
        description: `An app using geolocation and JQuery that provides the user with sunset times for their location.`
    }
}
// select the project list item from the html
// on click on the project list item, a div appears with information on that project with
    // --> image
    // --> description
    // --> title, tools used
    // --> link to github and live deploy

// on scroll, a list of tools I can use appears

portfolioApp.init = () => {
    projectsOnPage();
    appearingBio();
}

// declare the variables
portfolioApp.projectThumb = document.querySelectorAll('.projectsList li');
portfolioApp.projectDiv = document.querySelector('.individualProject');
portfolioApp.infoDiv = document.querySelector('.infoClass');
portfolioApp.bio = document.querySelector('.bioClass');
portfolioApp.arrow = document.querySelector('.arrow');

const appearingBio = () => {
    portfolioApp.arrow.addEventListener('click', function(){
        portfolioApp.bio.classList.add('appearingBio');
    })
}

const projectsOnPage = () => {
portfolioApp.projectThumb.forEach( (individualLi) => {
    individualLi.addEventListener('click', function() {
        const selectedLi = this.id;
        portfolioApp.infoDiv.classList.add(`displayNone`);

        portfolioApp.projectDiv.classList.remove(`visibleProject`);
        portfolioApp.projectDiv.innerHTML = ``;
        
        setTimeout( () => {
            // make the innerHTML that will appear one page
            portfolioApp.projectDiv.innerHTML = `
            <img src=${portfolioApp.projects[selectedLi].url} alt="a screenshot of ${portfolioApp.projects[selectedLi].title}">
            <div class="description">
                <h2>${portfolioApp.projects[selectedLi].title}</h2>
                <p><span class="toolsClass">${portfolioApp.projects[selectedLi].tools}</span></p>
                <p>${portfolioApp.projects[selectedLi].description}<p>
                <a href="${portfolioApp.projects[selectedLi].github}" target="_blank" rel="noopener noreferrer">github</a> | <a href="${portfolioApp.projects[selectedLi].live}" target="_blank" rel="noopener noreferrer">live</a>
            </div>
            `;
            portfolioApp.projectDiv.classList.add(`visibleProject`);
        }, 200)
})
})
}



portfolioApp.init();