import "./index.scss";



export const Shelf = () => {

let $carrosel = $(".section-shelf .lara-shelf").find("ul");


  $carrosel.slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
  });

};
