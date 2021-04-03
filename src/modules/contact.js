function contact(){
    const contact=document.createElement('div');
    contact.setAttribute('id','contact');
    const call=document.createElement('h1');
    call.textContent="Phone:";
    const para1=document.createElement('p');
    para1.textContent="48934u493";
    const para2=document.createElement('p');
    para2.textContent="48583439irj";
    const address=document.createElement('h3');
    address.textContent="ADDRESS:NOT FIXED";
    contact.appendChild(call);
    contact.appendChild(para1);
    contact.appendChild(para2);
    contact.appendChild(address);
return contact;
}
function loadContact(){
    const mai=document.querySelector('.main');
    const cont=contact();
    mai.appendChild(cont);
}
export default loadContact;
