const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const modal=document.querySelector(".school-btn button")
modal.addEventListener("click",() =>{
    document.querySelector(".school-modal").style.display ="block"
})

const modalClose=document.querySelector(".school-modal-block-square div")
modalClose.addEventListener("click",() =>{
    document.querySelector(".school-modal").style.display ="none"
})