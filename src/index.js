import {MtgService} from "./mtgService";

document.addEventListener("DOMContentLoaded", setup)

function setup() {
    const mtg = new MtgService();
    mtg.loadCards().then(
        cards => populateCardList(cards)
    )
}

function populateCardList(cards) {
    const cardListContainer = document.getElementById("cardListContainer");
    cardListContainer.innerHTML = "";
    const list = document.createElement("ul")
    cards.forEach(card => {
        const listItem = document.createElement("li");
        listItem.innerHTML = card.name;
        // TODO Implement click on the card name and show the results in the card view
        list.appendChild(listItem);
    });
    cardListContainer.appendChild(list)
}
