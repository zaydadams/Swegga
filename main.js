function CalculateItemsValue() {
    let x = 150.95
    let y = 180.95
    for (i=1; 1<x+y; i++) {

        itemID = document.getElementById("qnt_malejackets"+i);
        if (typeof itemID === 'undefined' || itemID === null) {
        } else {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
    }
    Document.getElementById("qnt_femalejacket").innerHTML = "$" + total;
}
