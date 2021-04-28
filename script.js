const portfolioApp = {}

// display data
portfolioApp.projects = {
projectOne: {
        title: `airhead`,
        url: `./assets/airheadWide.png`,
        tools: `REACT | HTML | CSS`,
        github: `https://github.com/airheadapp/airhead`,
        live: `https://airhead-meditation.netlify.app/`
    },
    projectTwo: {
        title: `Wordfinder 2000`,
        url: `./assets/airheadWide.png`,
        tools: `JS | HTML | CSS | REST APIs`,
        github: `https://github.com/Anahita-and-Aaron/wordFinder`,
        live: `https://wordfinder2000.netlify.app`
    },
    projectThree: {
        title: `Anywhere But Here`,
        url: `./assets/airheadApp.png`,
        tools: `REACT | HTML | CSS | MapQuest API`,
        github: `https://github.com/MappleInc/anywhereButHere`,
        live: `https://quizzical-wescoff-cb58e4.netlify.app/`
    },
    projectFour: {
        title: `Sunset Time`,
        url: `./assets/airheadApp.png`,
        tools: `JQuery | HTML | CSS`,
        github: `https://github.com/ajamalirad/sunset`,
        live: `https://sunset-tonight.netlify.app`
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

}

// declare the variables
portfolioApp.projectThumb = document.querySelectorAll('.projectsList li');
portfolioApp.projectDiv = document.querySelector('.individualProject');


portfolioApp.projectThumb.forEach( (individualLi) => {
    individualLi.addEventListener('click', function() {
        const selectedLi = this.id;
        console.log(this.id);
        console.log(portfolioApp.projects);

        portfolioApp.projectDiv.innerHTML = `
        <img src=${portfolioApp.projects[selectedLi].url} alt="a screenshot of ${portfolioApp.projects[selectedLi].title}">
        <div class="description">
            <h2>${portfolioApp.projects[selectedLi].title}</h2>
            <p><span class="toolsClass">${portfolioApp.projects[selectedLi].tools}</span></p>
            <p>here is a description!<p>
            <a href="${portfolioApp.projects[selectedLi].github}">github</a> | <a href="${portfolioApp.projects[selectedLi].live}">live</a>
        </div>
        `;

})
})









portfolioApp.init();