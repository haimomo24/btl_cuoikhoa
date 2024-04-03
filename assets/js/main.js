$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop: true, //Vong lap
        margin: 30, //Khoang cach giua item
        nav: true, //Thanh dieu huong (Mui ten)
        dots: false, //Dieu huong (Dau cham tron)
        autoplay: true, //tu dong chuyen slider
        autoplayTimeout: 4000, //Thoi chuyen slider (ms)
      responsive:{ //quy dinh so luong san pham tren cac man hinh 
          0:{ // khoang man hinh tu 0-559px
              items:4
          },
          600:{ //tu 600px-999px;
              items:4
          },
          1000:{ //tren 1000px
              items:4
          }
      }
  })
  
    });