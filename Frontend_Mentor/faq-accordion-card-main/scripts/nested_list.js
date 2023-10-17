function toggleDisplay(pre, element, arrow) {
    if (element.style.display !== "flex") {
        element.style.display = "flex";
        pre.style.fontWeight = "700";
        arrow.style.transform = "rotate(180deg)";
    } else {
        element.style.display = "none";
        pre.style.fontWeight = "400";
        arrow.style.transform = "rotate(0deg)";
    }
}

for (var i = 1; i <= 5; i++) {
    (function (index) {
        var qElement = document.getElementsByClassName("q" + index)[0];
        var pElement = document.getElementsByClassName("p" + index)[0];
        var mElemet = document.getElementsByClassName("m" + index)[0];
        qElement.addEventListener("click", function () {
            toggleDisplay(qElement, pElement, mElemet);
        });
    })(i);
}
