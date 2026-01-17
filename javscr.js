let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    const icon = document.getElementById("themeSymbol");

    if (document.body.classList.contains("dark")) {
        icon.textContent = "◐";
    } else {
        icon.textContent = "◑";
    }
}