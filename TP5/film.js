
const main=document.getElementById('main')
const search=document.getElementById('search')
const search_val=document.getElementById('search')


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let i=1;
recuperation(APIURL+i);

function recuperation(url){
    fetch(url).then(resp=>{
        resp.json().then(donnees=>{
            var data=donnees.results
            lister(data)
             
        })
    })
}

function lister(datas){
    
    datas.forEach(data=>{
        let contner=document.createElement('div');
        let images=document.createElement('img');
        images.classList.add('img');
        images.src=IMGPATH+data.poster_path;
        let infos=document.createElement('div');
        let h3=document.createElement('h3');
        let span=document.createElement('span');

        infos.className="infos";
        h3.className="h3";
        span.className=color(data.vote_average);
        contner.className="contenu";


        h3.textContent=data.title;
        span.textContent=data.vote_average;
        //ajout des elements au niveau de leur div parent
        infos.appendChild(h3);
        infos.appendChild(span);

        let para=document.createElement('div');
        para.className='para';
        para.textContent=data.overview;

        contner.appendChild(images);
        contner.appendChild(infos);
        contner.appendChild(para);
        main.appendChild(contner);
        
     })
               
}

window.onscroll=function(){
    if((document.body.scrollHeight)<=(window.innerHeight+window.scrollY)){
        i++;
        recuperation(APIURL+i);
    }
   
 }


 search_val.onkeyup=(e)=>{
    e.preventDefault();
    const search = search_val.value;
    if(search){
        main.innerHTML=''
        recuperation(SEARCHAPI+search)
        
    }else{
        recuperation(APIURL)
    } 
}


function color(colors){
    if(colors>=8){
        return 'green'
    }else if(colors>=5){
        return 'orange'
    }else{
        return 'red'
    }
} 
