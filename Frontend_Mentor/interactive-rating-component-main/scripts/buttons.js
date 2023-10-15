var rating = 0;
var clickableElements = document.getElementsByClassName("clickable");

for (var i = 0; i < clickableElements.length; i++) {
    var element = clickableElements[i];
    element.addEventListener("click", function (e) {
        var clickedElement = this;
        if (clickedElement.classList.contains("active")) {
            rating = 0;
            clickedElement.classList.remove("active");
        } else {
            rating = Array.from(clickableElements).indexOf(clickedElement) + 1;
            for (var j = 0; j < clickableElements.length; j++) {
                var otherElement = clickableElements[j];
                if (otherElement !== clickedElement) {
                    otherElement.classList.remove("active");
                }
            }
            clickedElement.classList.add("active");
        }
    });
}

//Summary
    document.getElementsByClassName("submit")[0].addEventListener("click", function (e) {
        if (rating !== 0) {
        document.getElementsByClassName("wrapper1")[0].style.display = "none";
        document.getElementsByClassName("wrapper2")[0].style.display = "flex";
        document.getElementsByClassName("choice")[0].textContent = `You selected ${rating} out of 5`;
        }
    });