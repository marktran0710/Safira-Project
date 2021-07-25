var products = [];
let sProducts = [];
let subArrray = [];

const cart = [];
const arrayHeart = [];
$.get(
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
    (data) => {
        subArrray = data;
        sProducts = data;
        products = data;
        renderProduct(data);
    }
);
$("button.filter").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#header__scroll--menu").css("display", "block");
});


$(document).on("click", ".delete-item", function() {
    const id = $(this).parents("li").data("id");
    console.log(id);
    const idx = cart.findIndex((val) => val.id === id);
    cart.splice(idx, 1);
    renderCart(cart);
    localStorage.setItem("selectedCart", JSON.stringify(cart));

});

$("#header__scroll--menu").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

});

$("body").click(function(e) {
    e.preventDefault();
    $("#header__scroll--menu").css("display", "none");
});

$(".wrap-search-box .search").keyup(function(e) {

    const inputValue = $(this).val().toLowerCase();
    const searchProducts = sProducts.filter((val) =>
        val.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    // console.log($(this).val().toLowerCase().length);
    if (inputValue.length > 0) {
        $(".nav-and-slider .right").empty();
        $(`<div class="wrap-item d-flex f-wrap">
        </div>`).appendTo(".nav-and-slider .right");
        searchProducts.map((val) => {
            $(`<div class="item ml-20" data-id=${val.id} style="width:30%">
            <div class="wrap-product">
                <div class="wrap-img">
                    <img style="width: 100%;" src=${val.image} alt="">
                    <span class="sale-icon d-flex a-center j-center">Sale!</span>
                    <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="wrap-content">
                    <a href="">${val.name}</a>
                    <span class="info"><a href="">${val.category}</a></span>
                    <span class="cost">$70.00</span>
                    <span class="price"> $${val.price}.00</span>
                </div>
            </div>
        </div>`).appendTo(".nav-and-slider .right .wrap-item");
        });
    }
    if (inputValue.length === 0) {
        $(".nav-and-slider .right").empty();
        $(`<div class="horizen-nav">
        <ul class="d-flex">
            <li>
                <a href="" style="color: #fc8a35;"><span >Home</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown home">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo"> Demo Group 01</span>
                            <ul class="child">
                                <li><a href="">Organic 01</a></li>
                                <li><a href="">Organic 02</a></li>
                                <li><a href="">Organic 03</a></li>
                                <li><a href="">Organic 04</a></li>
                                <li><a href="">Cosmestic 01</a></li>
                                <li><a href="">Cosmestic 02</a></li>
                                <li><a href="">Cosmestic 03</a></li>
                                <li><a href="">Cosmestic 04</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Demo Group 02</span>
                            <ul class="child">
                                <li><a href="">Electronic 01</a></li>
                                <li><a href="">Electronic 02</a></li>
                                <li><a href="">Electronic 03</a></li>
                                <li><a href="">Electronic 04</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Shop</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown shop">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo">Shop Layouts</span>
                            <ul class="child">
                                <li><a href="">Sidebar Left</a></li>
                                <li><a href="">Sidebar Right</a></li>
                                <li><a href="">Full Width</a></li>
                                <li><a href="">List View</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Shop Pages</span>
                            <ul class="child">
                                <li><a href="">Category</a></li>
                                <li><a href="">My account</a></li>
                                <li><a href="">Wishlist</a></li>
                                <li><a href="">Cart</a></li>
                                <li><a href="">Checkout</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Product Types</span>
                            <ul class="child">
                                <li><a href="">Grouped Product</a></li>
                                <li><a href="">Variable Product</a></li>
                                <li><a href="">Simple Product</a></li>
                                <li><a href="">External Product</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Blog</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown blog">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo">Blog Layouts</span>
                            <ul class="child">
                                <li><a href="">Sidebar Left</a></li>
                                <li><a href="">Sidebar Right</a></li>
                                <li><a href="">Large Image</a></li>
                                <li><a href="">Blog Grid</a></li>
                                <li><a href="">No Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Blog Pages</span>
                            <ul class="child">
                                <li><a href="">Author</a></li>
                                <li><a href="">Archives</a></li>
                                <li><a href="">Category</a></li>
                                <li><a href="">Blog Tag</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Post Formats</span>
                            <ul class="child">
                                <li><a href="">Image Format</a></li>
                                <li><a href="">Gallery Format</a></li>
                                <li><a href="">Audio Format</a></li>
                                <li><a href="">Video Format</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Pages</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown pages">
                    <ul class="father">
                        <li>
                            <ul class="child">
                                <li><a href="">Frequently Questions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Error 404</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Contact</span></a></li>
        </ul>
    </div>
    <div class="slider">
        <div id="caro-slider">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <div class="wrap-img">
                        <img src="img/Homeslider3-1.jpg" alt="">
                    </div>
                    <div class="wrap-content-slider">
                        <h1 id="slider-title" class="title-animation">Organic & Fresh Lemon</h1>
                        <p>Healthy fruits tropical paradise</p>
                        <button><a href="test.html">SHOP NOW</a></button>
                    </div>
                </div>
                <div class="item">
                    <div class="wrap-img">
                        <img src="img/Homeslider3-2.jpg" alt="">
                    </div>
                    <div class="wrap-content-slider">
                        <h1 id="slider-title" class="title-animation">Organic & Fresh Lemon</h1>
                        <p>Healthy fruits tropical paradise</p>
                        <button><a href="">SHOP NOW</a></button>
                    </div>
                </div>
                <div class="item">
                    <div class="wrap-img">
                        <img src="img/Homeslider3-3.jpg" alt="">
                    </div>
                    <div class="wrap-content-slider">
                        <h1 id="slider-title" class="title-animation">Organic & Fresh Lemon</h1>
                        <p>Healthy fruits tropical paradise</p>
                        <button><a href="">SHOP NOW</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`).appendTo(".nav-and-slider .right");
        $('#caro-slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 10000,
            items: 1,
        });
    }
    // renderCart(cart);
});

$(".close-modal").click(function(e) {
    e.preventDefault();
    $(".modal").css("display", "none");
});

$("body").click(function(e) {
    e.preventDefault();
    $(".modal").css("display", "none");
});
$(".modal-content").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
});

$(document).on("click", ".add--shopping", function() {
    $(".modal").css("display", "flex");
    const id = $(this).parents(".item").data("id");
    const idx = cart.findIndex((val) => val.id === id);
    if (idx !== -1) {
        cart[idx].quantity = cart[idx].quantity + 1;

    } else {
        $(".modal-body").empty();
        const item = products.find((val) => val.id == id);
        cart.push({...item, quantity: 1 });
        $(`<div class="item">
        <div class="wrap-product d-flex a-center">
            <div class="wrap-img img-logo">
                <img style="width: 100%;height: 100%;" src=${item.image} alt="">
            </div>
            <div class="wrap-content d-flex f-column">
                <a class="mb-10 text-category-color font-1" href="">Apple China Imported</a>
                <span class="info mb-10 "><a class="text-category-color font-1" href="">Green vegetables</a></span>
                <span class="price primary-color fw-600"> $${item.price}.00 <span class="cost text-lthrough fw-500 black-color">$70.00</span></span>
            </div>
        </div>
        </div>`).appendTo(".modal-body");
    }
    renderCart(cart);
    localStorage.setItem("selectedCart", JSON.stringify(cart));
});

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
    $(".amount-products").text(amount_cart);

}





function renderProduct(subArrray) {
    $("#products .owl-carousel").empty();
    subArrray.map((val) => {
        if (val.price == 85 || val.price == 60) {
            $(`<div class="item"data-id=${val.id}>
                <div class="wrap-product">
                    <div class="wrap-img">
                        <img style="width: 100%;height: 100%;" src=${val.image} alt="">
                        <span class="sale-icon d-flex a-center j-center">Sale!</span>
                        <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="wrap-content">
                        <a href="">${val.name}</a>
                        <span class="info"><a href="">${val.category}</a></span>
                        <span class="price">$${val.price}.00</span>
                    </div>
                </div>
            </div>`).appendTo('#products .owl-carousel');
        } else {
            $(`<div class="item" data-id=${val.id}>
                <div class="wrap-product">
                    <div class="wrap-img">
                        <img style="width: 100%;height: 100%;" src=${val.image} alt="">                      
                        <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="wrap-content">
                        <a href="">${val.name}</a>
                        <span class="info"><a href="">${val.category}</a></span>
                        <span class="price">$${val.price}.00</span>
                    </div>
                </div>
            </div>`).appendTo('#products .owl-carousel');
        }

    });
    $(".our__blog--item1").empty();
    let count = 0;
    subArrray.filter((val, index) => {
        if (val.price < 80 && count < 2) {
            count++;
            $(`
            <div class="wrap-product d-flex a-center ">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content">
                <a href="">Apple China Imported</a>
                <span class="info"><a href="">Green vegetables</a></span>
                <span class="cost">90.00$</span>
                <span class="price"> ${val.price}.00$</span>
            </div>
        </div>
    `).appendTo('.our__blog--item1');
        }
    })
    $(".our__blog--item2").empty();
    count = 0;
    subArrray.filter((val, index) => {
        if (val.price > 150 && count < 2) {
            count++;
            $(`
            <div class="wrap-product d-flex a-center">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content">
                <a href="">Apple China Imported</a>
                <span class="info"><a href="">Green vegetables</a></span>
                <span class="cost">200.00$</span>
                <span class="price">${val.price}.00$</span>
            </div>
        </div>
    `).appendTo('.our__blog--item2');
        }
    })
    $(".our__blog--item3").empty();
    count = 0;
    subArrray.filter((val, index) => {
        if (val.price < 50 && count < 2) {
            count++;
            $(`
            <div class="wrap-product d-flex a-center">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content">
                <a href="">Apple China Imported</a>
                <span class="info"><a href="">Green vegetables</a></span>
                <span class="cost">60.00$</span>
                <span class="price"> ${val.price}.00$</span>
            </div>
        </div>
    `).appendTo('.our__blog--item3');
        }
    })
    $(".our__blog--item4").empty();
    count = 0;
    subArrray.filter((val, index) => {
        if (val.price > 80 && val.price < 150 && count < 2) {
            count++;
            $(`
            <div class="wrap-product d-flex a-center">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content">
                <a href="">Apple China Imported</a>
                <span class="info"><a href="">Green vegetables</a></span>
                <span class="cost">149.00$</span>
                <span class="price">${val.price}.00$</span>
            </div>
        </div>
    `).appendTo('.our__blog--item4');
        }
    });
    $("#our-products").empty();
    subArrray.map((val) => {
        if (val.price == 85 || val.price == 60) {
            $(`<div class="item"data-id=${val.id}>
                <div class="wrap-product">
                    <div class="wrap-img">
                        <img style="width: 100%;height: 100%;" src=${val.image} alt="">
                        <span class="sale-icon d-flex a-center j-center">Sale!</span>
                        <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="wrap-content">
                        <a href="">${val.name}</a>
                        <span class="info"><a href="">${val.category}</a></span>
                        <span class="price">$${val.price}.00</span>
                    </div>
                </div>
            </div>`).appendTo('#our-products');
        } else {
            $(`<div class="item" data-id=${val.id}>
                <div class="wrap-product">
                    <div class="wrap-img">
                        <img style="width: 100%;height: 100%;" src=${val.image} alt="">                      
                        <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="wrap-content">
                        <a href="">${val.name}</a>
                        <span class="info"><a href="">${val.category}</a></span>
                        <span class="price">$${val.price}.00</span>
                    </div>
                </div>
            </div>`).appendTo('#our-products');
        }

    });
    count = 0;
    subArrray.filter((val, index) => {

        if (val.price <= 200 && count < 9) {
            count++;
            return $(`<div class="wrap-product d-flex  mt-10">
            <div class="wrap-img">
                <img src=${val.image} alt="">
            </div>
            <div class="wrap-content">
                <a class="text-color font-1" href="">Apple China Imported</a>
                <span class="info "><a class="font-1 text-category-color" href="">Green vegetables</a></span>
                <span class="cost">$70.00</span>
                <span class="price"> $${val.price}.00</span>
            </div>
        </div>`).appendTo(".synthetic__content");
        }
    })

}


$("button .title").click(function(e) {
    e.preventDefault();
    $(".vertical-nav .list-content").toggle(200);

});



const deadline = "2021/06/01"

function getTime(deadline) {
    //const now =Date.now()
    const now = new Date();
    const deadlinDate = new Date(deadline);


    //khoang cahc giua 2 ngay

    const distant = (deadlinDate - now) / 1000;
    //Days
    const days = Math.floor(distant / 3600 / 24);


    //hours
    const hours = Math.floor(distant / 3600) % 24;

    //mins
    const mins = Math.floor(distant / 60) % 60;

    //secs
    const secs = Math.floor(distant - (days * 3600 * 24 + hours * 3600 + mins * 60));
    $(".time-days").text(formatTime(days));
    $(".time-hours").text(formatTime(hours));
    $(".time-mins").text(formatTime(mins));
    $(".time-secs").text(formatTime(secs));

    function formatTime(time) {
        return `0${time}`.slice(-2);
    }
}
getTime(deadline);
setInterval(() => {
    getTime(deadline);
}, 1000);