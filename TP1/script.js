const btn=document.querySelectorAll('button')
const droite=document.getElementById('gener')
// const contner=document.getElementById('container')

function notification(type,message="bonjour, je suis à la recherche d'un vieux sage"){
    const p=document.createElement('p');
    p.classList.add(type);
    p.innerHTML=message;
    droite.appendChild(p);
    setTimeout(() =>{
        droite.removeChild(p);
    },3000)
}

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let gn=this.getAttribute('data-color');
        notification(gn);
        
    })
}

