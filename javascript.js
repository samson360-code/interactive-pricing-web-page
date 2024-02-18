let range = document.querySelector("input[type='range']"),
    views = document.querySelector("#views"),
    price = document.querySelector(".price"),
    radio = document.querySelector("input[type='radio']")
const styleSheet = document.styleSheets[0];
let flag = true;
const changer=() => {
    let rangestr = range.value.toString();
    let rangeInput = Number(rangestr);
    if (rangestr.endsWith('000')) {
        let trimmedrange = rangestr.replace('000', 'M');
        views.innerHTML = trimmedrange;
        styleSheet.cssRules[2].style.width = 100 - 5 + "%";

    }
    else {
        views.innerHTML = rangestr + "k";
        let width = (rangeInput * 431) / 1000;
        styleSheet.cssRules[2].style.width = `calc(${width}px - 20px)`;
        priceCalculator(rangeInput);
    }
}
changer();
radio.addEventListener('click', () => {
    if (flag) {
        flag = false;
        radio.classList.add("radio");
    } else {
        flag = true
        radio.classList.remove("radio");
    }
    changer();
})

range.addEventListener("input",changer )
function priceCalculator(rangeInput) {
    if (!flag) {
        if (rangeInput < 10)
            price.innerHTML = (rangeInput * 6) / 10;
        else if ((rangeInput >= 10) && (rangeInput <= 100))
            price.innerHTML = (rangeInput * 12) / 100;
        else if ((rangeInput >= 100) && (rangeInput <= 500))
            price.innerHTML = (rangeInput * 18) / 500;
        else if ((rangeInput >= 500) && (rangeInput <= 1000))
            price.innerHTML = (rangeInput * 27) / 1000;
    }
    else {
        if (rangeInput < 10)
            price.innerHTML = (rangeInput * 8) / 10;
        else if ((rangeInput >= 10) && (rangeInput <= 100))
            price.innerHTML = (rangeInput * 16) / 100;
        else if ((rangeInput >= 100) && (rangeInput <= 500))
            price.innerHTML = (rangeInput * 24) / 500;
        else if ((rangeInput >= 500) && (rangeInput <= 1000))
            price.innerHTML = (rangeInput * 36) / 1000;
    }
}


