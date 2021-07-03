// $.get(
//     "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
//     (data) => {
//         renderProduct(data);
//     }
// );


// function renderProduct(list1) {

//     $("#products-best-sellers .owl-carousel").empty();
//     list1.map((val) => {
//         $(`
//         <div class="item">
//         <div class="d-flex">
//             <div class="wrap-product d-flex a-center">
//                 <div class="wrap-img">
//                     <img src="http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17-400x400.jpg" alt="">
//                 </div>
//                 <div class="wrap-content">
//                     <a href="">Apple China Imported</a>
//                     <span class="info"><a href="">Green vegetables</a></span>
//                     <span class="cost">$70.00</span>
//                     <span class="price"> $120.00</span>
//                 </div>
//             </div>
//             <div class="wrap-product d-flex a-center">
//                 <div class="wrap-img">
//                     <img src="http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17-400x400.jpg" alt="">
//                 </div>
//                 <div class="wrap-content">
//                     <a href="">Apple China Imported</a>
//                     <span class="info"><a href="">Green vegetables</a></span>
//                     <span class="cost">$70.00</span>
//                     <span class="price"> $120.00</span>
//                 </div>
//             </div>
//         </div>
//         <div class="d-flex">
//             <div class="wrap-product d-flex a-center">
//                 <div class="wrap-img">
//                     <img src="http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17-400x400.jpg" alt="">
//                 </div>
//                 <div class="wrap-content">
//                     <a href="">Apple China Imported</a>
//                     <span class="info"><a href="">Green vegetables</a></span>
//                     <span class="cost">$70.00</span>
//                     <span class="price"> $120.00</span>
//                 </div>
//             </div>
//             <div class="wrap-product d-flex a-center">
//                 <div class="wrap-img">
//                     <img src="http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17-400x400.jpg" alt="">
//                 </div>
//                 <div class="wrap-content">
//                     <a href="">Apple China Imported</a>
//                     <span class="info"><a href="">Green vegetables</a></span>
//                     <span class="cost">$70.00</span>
//                     <span class="price"> $120.00</span>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `).appendTo('#products-best-sellers .owl-carousel');
//     })
// }