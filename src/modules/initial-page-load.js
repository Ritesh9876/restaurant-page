
    function createHeader(text,id){
        const header=document.createElement("header");
        header.setAttribute('id',id);
        const heading=document.createElement('h1');
         heading.textContent=text;
       header.appendChild(heading);
       return header;
    }
    function createBtn(text,id){
    const item=document.createElement('li');
    const link=document.createElement('a');
    link.setAttribute('href','#');
    link.textContent=text;
    item.appendChild(link);
   item.classList.add('tab');
   item.classList.add(id);
  
    return item;
    }
    function nav(){
const nav=document.createElement('nav');
const items=document.createElement('ul');
const home=createBtn('Home','homebtn');
const menu=createBtn('Menu','menubtn');
const contact=createBtn('Contact','contactbtn');
items.appendChild(home);
items.appendChild(menu);
items.appendChild(contact);
nav.appendChild(items);
return nav;
    }
    function main(){
        const main=document.createElement('main');
        main.classList.add('main');
        return main;
    }
    function footer(){
        const footer=document.createElement('footer');
        footer.setAttribute('id','footer')
        const h2=document.createElement('h2');
        h2.textContent="Narayan Foods";
        footer.appendChild(h2);
        return footer;
    }
    function loadPage(){
        const content=document.getElementById("content");
           //header
   const header=createHeader('Narayan Foods','header');
   content.appendChild(header);

   //navbar'
  
   const navbar=nav();
   content.appendChild(navbar);
   //main
   const mainsec=main();
   content.appendChild(mainsec);
   //footer
   const footersec=footer();
   content.appendChild(footersec);
    }

export default loadPage;