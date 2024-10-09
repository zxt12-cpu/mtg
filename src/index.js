import * as d3 from "d3";
import {MtgService} from "./mtgService";
import {ManaCost} from "./widgets/manaCost";
import {ManaColor} from "./widgets/manaColor";


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
    cardListContainer.appendChild(list);
    const manaCost  = new ManaCost();
    const manaCostContainer = document.getElementById("manaCostWidgetContainer");

    // TODO Change it to real data in your app!
    const manaCostData = [
    { cost: 1, count: 8 },
    { cost: 2, count: 12 },
    { cost: 3, count: 15 },
    { cost: 4, count: 10 },
    { cost: 5, count: 6 },
    { cost: 6, count: 4 },
    { cost: '7+', count: 3 }];
    manaCost.build(manaCostData, manaCostContainer)


    const manaColor  = new ManaColor();
    const manaColorContainer = document.getElementById("manaColorWidgetContainer");
    // TODO Change it to real data in your app!
    const manaColorData =  [
        { color: 'White', count: 15 },
        { color: 'Blue', count: 12 },
        { color: 'Black', count: 8 },
        { color: 'Red', count: 10 },
        { color: 'Green', count: 22 },
        { color: 'Colorless', count: 7 }
    ];
    manaColor.build(manaColorData, manaColorContainer)

}

