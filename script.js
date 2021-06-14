// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY >20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     })
// });

const card = document.querySelector('.navbar');
card.addEventListener('scroll', sco);
function sco(e) {
    e.preventDefault();
    if (this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
};