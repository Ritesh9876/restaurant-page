// NARAYAN
import loadPage from "./modules/initial-page-load";
import  loadHome  from "./modules/home-page";
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu";


display();
function dis(a,b,c){
    const home=document.querySelector('#about');
    const contact=document.querySelector('#contact');
    const food=document.querySelector('#food');
    home.style.display=a;
    contact.style.display=b; 
    food.style.display=c;

    if(home.style.display==="block"){
        const foot=document.querySelector('#footer');
        foot.style.position="absolute";
       }
       if(contact.style.display==="block"){
        const foot=document.querySelector('#footer');
        foot.style.position="absolute";
       }
       if(food.style.display==="block"){
        const foot=document.querySelector('#footer');
        foot.style.position="relative";
       }
}

const homebtn=document.querySelector('.homebtn a');
const contactbtn=document.querySelector('.contactbtn a');
const menubtn=document.querySelector('.menubtn a');

homebtn.addEventListener("click",function(){
   dis("block","none","none");
});

contactbtn.addEventListener("click",function(){
    dis("none","block","none");
});
menubtn.addEventListener("click",function(){
    dis("none","none","block");
});

 function display(){
    loadPage();
    loadHome();
    loadContact();
    loadMenu();
}

