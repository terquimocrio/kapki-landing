const buttonsDivs = {
    "show-casino": "project-casino",
    "show-dugout": "project-dugout",
};

const portfolioBtnsDiv = document.getElementById("portfolio-buttons-div");

function makeSelected(button) {
    let id = button.id;
    let buttonsDivsCopy = {
        ...buttonsDivs,
    };
    button.classList.add("selected");
    portfolioBtnsDiv.querySelectorAll("a").forEach((element) => {
        if (element != button) {
            element.classList.remove("selected");
        }
    });

    document.getElementById(buttonsDivs[id]).classList.remove("d-none");
    delete buttonsDivsCopy[id];
    for (const key in buttonsDivsCopy) {
        document.getElementById(buttonsDivsCopy[key]).classList.add("d-none");
    }
}

