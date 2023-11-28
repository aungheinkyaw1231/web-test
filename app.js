let images = ["camp1.jpg","camp2.jpg","camp3.jpg"]
let i = 0;


let slideimg=()=>
{
    
    i = i + 1;
    if (i == images.length)
    {
        i = 0;
    }
    backgroundslide.style.backgroundImage="url(image/"+images[i]+")";
}

let displayNav=()=>
{
    if (jnav.style.display=="none")
    {
        (jnav.style.display="flex")
    }
    else
    {
        (jnav.style.display="none")
    }


}
let addcart=(btnC)=>
{
    alert ('your item will add to basket')
    let parent = btnC.parentNode;
    let childArr = parent.children;

    let NM = childArr[1].innerHTML;
    let price = childArr[2].innerHTML;

let str = "<div class='carts'>";

str+="<p>"+NM+"</p>";
str+="<p>"+price+"</p>";
str+="</div>";

if (sessionStorage.getItem("carts")==null)
{
    sessionStorage.setItem("carts",str);

}
else{
     let strCombine = sessionStorage.getItem("carts");
     strCombine+=str;
     sessionStorage.setItem("carts",strCombine);

}
}
let showdata=()=>
{
    
    cartdata.innerHTML = sessionStorage.getItem("carts");
}


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
});



