const portfolioBtnsDiv = document.getElementById("portfolio-buttons-div")

function makeSelected(button){
    button.classList.add("selected")
    portfolioBtnsDiv.querySelectorAll("a").forEach(element => {
        if(element != button){
            element.classList.remove("selected")
        }
    })
}