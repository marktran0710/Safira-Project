const quantity = localStorage.getItem("selectedQuantity");
$(".amount-heart").text(quantity);
const cart = JSON.parse(localStorage.getItem("selectedCart"));

$(document).on("click", ".remove-product", function() {
    const id = $(this).data("id");
    const idx = cart.findIndex((val) => val.id === id);
    cart.splice(idx, 1);
    renderTableCart(cart);

});
renderTableCart(cart);


function renderTableCart(cart) {
    $(".wishlist .container table").empty();
    if (cart.length > 0) {
        $(".wishlist .container table").append(`<tr class="">
        <th></th>
        <th></th>
        <th class="p-10-20">PRODUCT</th>
        <th class="p-10-20">PRICE</th>
        <th class="p-10-20">QUANTITY</th>
        <th class="p-10-20">TOTAL</th>
    </tr>`);
    }
    cart.map((val) => {
        $(".wishlist .container table").append(`<tr>
        <td class="p-10-20 text-center remove-product" data-id=${val.id}>x</td>
        <td class="p-10-20 text-center" ><img src=${val.image} alt=""></td>
        <td class="p-10-20 text-center">${val.name}</td>
        <td class="p-10-20 text-center">${val.price}</td>
        <td class="p-10-20 text-center">${val.quantity}</td>
        <td class="p-10-20 text-center">$${val.price*val.quantity}</td>
        </tr>`);
    })
}

$(document).on("click", ".delete-item", function() {
    const id = $(this).parents("li").data("id");
    const idx = cart.findIndex((val) => val.id === id);
    cart.splice(idx, 1);
    renderCart(cart);

});