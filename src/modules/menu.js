function  foodcard(src,text){
    
const subfood=document.createElement('div');
subfood.classList.add('subfood');
const img=document.createElement('img');
img.setAttribute('src',src);
const para=document.createElement('p');
para.textContent=text;
subfood.appendChild(img);
subfood.appendChild(para);
return subfood;
}


function Menu(){
    const addcard=[
        foodcard('/src/images/dosa.jpg','DOSA'),
        foodcard('/src/images/app.jpg','idli'),
        foodcard('/src/images/idli.jpg','idli'),
        foodcard('/src/images/curry.jpg','CURRY')
    ];
    
    const food=document.createElement('div');
    food.setAttribute('id','food');
    const foodItem=document.createElement('div');
    foodItem.setAttribute('id','foodItem');
    for(var i=0;i<addcard.length;i++){
       
        foodItem.appendChild(addcard[i]);
       
    }
    food.appendChild(foodItem);
    return food;
}
function loadMenu(){
const main=document.querySelector(".main");
const total=Menu();
main.appendChild(total);

}
export default loadMenu;