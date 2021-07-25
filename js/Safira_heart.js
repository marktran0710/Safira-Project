const quantityHearts = JSON.parse(localStorage.getItem("selectedHeart"));
const cart = JSON.parse(localStorage.getItem("selectedCart"));
countProducts(cart);
renderCart(cart);
$(document).on("click", ".delete-item", function() {
    const id = $(this).parents("li").data("id");
    const idx = cart.findIndex((val) => val.id === id);
    cart.splice(idx, 1);
    renderCart(cart);

});

function countProducts(cart) {
    var quantityProducts = cart.reduce((acc, val, index) => {
        return acc += val.quantity;
    }, 0);
    $(".amount-products").text(quantityProducts);
}

$(document).on("click", ".remove-product", function() {
    const id = $(this).data("id");
    const idx = quantityHearts.findIndex((val) => val.id === id);
    quantityHearts.splice(idx, 1);
    renderTableHeart(quantityHearts);

});
renderTableHeart(quantityHearts);

function renderTableHeart(quantityHearts) {
    $(".wishlist .container table").empty();
    if (quantityHearts.length > 0) {
        $(".wishlist .container table").append(`<tr class="">
        <th></th>
        <th></th>
        <th class="p-15-30">PRODUCT NAME</th>
        <th class="p-15-30">UNIT PRICE</th>
        <th class="p-15-30">STOCK STATUS</th>
        <th class="p-15-30"></th>
    </tr>`);
    }
    if (quantityHearts.length == 0) {
        $(".wishlist .container h4").remove();
    }
    quantityHearts.map((val) => {
        $(".wishlist .container table").append(`<tr>
        <td class="p-10-20 text-center remove-product" data-id=${val.id}>x</td>
        <td class="p-10-20 text-center" ><img src=${val.image} alt=""></td>
        <td class="p-10-20 text-center font-1">${val.name}</td>
        <td class="p-10-20 text-center"><span class="black-color fw-600">$${val.price}.00</span></td>
        <td class="p-10-20 text-center font-1 green-color">In stock</td>
        <td class="p-10-20 text-center"><button class="p-10-20 bg-green white-color">ADD TO CART</button></td>
        </tr>`);
    })
    $(".amount-heart").text(quantityHearts.length);

}

function renderCart(cart) {
    let total = 0;
    $(".synethic-products ul").empty();
    cart.map((val) => {
        total = val.price * val.quantity + total;
        $(`<li class="mb-10" data-id=${val.id}>
        <i class="fas fa-times delete-item"></i>
        <div class="item d-flex">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content d-flex f-column">
                <a href="">${val.name}</a>
                <a href="">${val.category}</a>
                <span >${val.quantity} x $${val.price}.00</span>
            </div>
        </div>
        </li>`).appendTo(".synethic-products ul");
    });
    if (cart.length > 0) {
        $(`<li>
    <div class="subtotal d-flex j-between">
            <span>Subtotal:</span>
            <span class="fw-600 f-20">$${total}.00</span>
    </div>
    <div class="btn-view-check d-flex f-column mt-10">
            <button class="mb-10"><a class="white-color " href="../Safira_cart.html">VIEW CART</a></button>
            <button><a class="white-color" href="">CHECK OUT</a></button>
    </div>
    </li>`).appendTo(".synethic-products ul");
    } else {
        $(`<li>No products</li>`).appendTo(".synethic-products ul");
    }
    var amount_cart = cart.reduce((acc, val, index) => {
        return acc += val.quantity;
    }, 0);


}