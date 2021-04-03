function addContent(){
    const about=document.createElement('div');
    about.setAttribute('id','about');
    const h1=document.createElement('h1');
    h1.textContent='About';
    const para=document.createElement('p');
    para.textContent='Narayan Narayan Narayan Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.we are going to be using JavaScript alone to generate the entire contents of the website!';
    about.appendChild(h1);
    about.appendChild(para);
    return about;
}
function loadHome(){
    const mai=document.querySelector('.main');
    const add=addContent();
    mai.appendChild(add);
}
export default loadHome;