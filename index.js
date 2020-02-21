let sections = document.querySelectorAll("section");

let links = document.querySelectorAll("nav a");

for (let index = 0; index < links.length; index++) {
    const element = links[index];

    element.addEventListener("click", function(event) {
        event.preventDefault();

        let blockId = element.getAttribute("href"); // #home
        let section = document.querySelector(blockId);
        sections.className = ""
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

for (let index = 0; index < sections.length; index++) {
    const element = sections[index];

    element.addEventListener("click", function() {
        let randomNumber = Math.floor(Math.random() * 8);



        element.style.backgroundColor = arrayColor[randomNumber];
    });
}