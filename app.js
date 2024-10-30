const savedUserName = localStorage.getItem("userID");
const userName = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.querySelector(".container");

if (savedUserName !== null) {
    voidUserName();
    removeItem();
    newUsername(savedUserName);
} else {
    voidUserName();
}

btn.addEventListener("click", () => {
    localStorage.setItem("userID", userName.value);
    removeItem();
    newUsername(userName.value);
    userName.value = "";
});

function newUsername(item) {
    const p = document.createElement("p");
    p.innerHTML = `Ваше имя: ${item}!`;
    container.appendChild(p);
    userName.value = "";
}

function voidUserName() {
    const p = document.createElement("p");
    p.innerHTML = `Ваше имя: ...`;
    container.appendChild(p);
    userName.value = "";
}

function removeItem() {
    const deletedItem = document.querySelector("p");
    container.removeChild(deletedItem);
}
