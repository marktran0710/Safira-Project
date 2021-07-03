const our_blog = [
    { id: 1, name: "Brocolli - 1 Kg", price: 120, image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-3-1110x743.jpg", category: "vegetables" },
    { id: 4, name: "Beans - 1 Kg", price: 82, image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-5-1110x743.jpg", category: "vegetables" },
    { id: 2, name: "Cauliflower - 1 Kg", price: 60, image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-1-1110x743.jpg", category: "vegetables" },
    { id: 3, name: "Tomato - 1 Kg", price: 16, image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-4-1110x743.jpg", category: "vegetables" },

]

our_blog.map((val) => {
    $(`<div class="item">
    <div class="wrap-img">
        <img src=${val.image} alt="">
    </div>
    <div class="wrap-content text-center">
        <a class="font-1 primary-color d-inblock mt-20" href="">Citrus, </a>
        <a class="font-1 primary-color d-inblock mt-20" href="">Fresh, </a>
        <a class="font-1 primary-color d-inblock mt-20" href="">Stone Fruit</a>
        <h4 class="mt-10"><a class="font-1 text-color " href="">Creamy shrimp pasta with corn and tomatoes</a></h4>
        <button class="mt-20 white-color ">April 24, 2020</button>
    </div>
</div>`).appendTo("#our-blog .owl-carousel");
})

$(document).ready(function() {
    $('#our-blog .owl-carousel').owlCarousel({
        loop: true,
        items: 3,
        nav: true,
        dots: false,
    });
})