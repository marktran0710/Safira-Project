$(document).on("click", ".add--heart", function() {
    const id = $(this).parents(".item").data("id");
    const idx = arrayHeart.findIndex((val) => val.id === id);
    if (idx !== -1) {

    } else {
        const item = products.find((val) => val.id == id);
        arrayHeart.push({...item });
        $(".amount-heart").text(arrayHeart.length);
    }
    $(".modal-heart").addClass("d-flex");
});

$("body").click(function(e) {
    e.preventDefault();
    $(".modal-heart").removeClass("d-flex");

});