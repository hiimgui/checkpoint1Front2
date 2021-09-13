//Criando campos de um form dinamicamente
let input1 = ""
let input2 = ""
let input3 = ""
const formwrapper = document.querySelector('.formwrapper')
const forms = document.createElement("FORM");
const cardSection = document.querySelector('.card');
forms.name = "recomendacao";
formwrapper.appendChild(forms)
document.body.appendChild(formwrapper);



forms.innerHTML += `<h1 class='titulo--recomendacao'>Sua Recomendação</h1>
<a onclick='closePopup()' class='fechar--popup'>X</a>
<label>Título</label> 
<input class='input1' id='title' type=text, placeholder='Insira o título'></input> 
<label>Link imagem ou vídeo</label>
<input class='input3' id='url1' type=text, placeholder='Insira uma imagem ou vídeo'></input>
<label>Breve descrição</label>
<input class='input2' id='description' type=textarea, placeholder='Insira uma descrição'></input><button class='button1'>SUBMIT</button>`;


//Fechar e abrir popup para popular o site
const log = document.querySelector('.log--popup');
function abrirPopup(){
    
    log.addEventListener("click", () => {
    
        formwrapper.style.display = "grid";
    })
    
}
function closePopup(){
    formwrapper.style.display = "none";
}



//funcionalidade do botão submit, salva os values dos inputs e coloca como html no body.

const btnSubmit = document.querySelector('.button1');
btnSubmit.addEventListener("click", e =>{
    e.preventDefault();
    e.stopPropagation();
    let input1 = document.querySelector(".input1").value
    let input2 = document.querySelector(".input2").value
    let input3 = document.querySelector(".input3").value

    //é preciso sanitizar quando for vídeo vindo do youtube
    if(input3.includes("youtube")){
        input3 = input3.replace("watch?v=", "embed/");
        
        cardSection.innerHTML += `<h1>${input1}</h1> <div 'id='iframe-container'> <iframe width="420" height="315" src="${input3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <p>${input2}</p>`
    } else{
        cardSection.innerHTML += `<h1>${input1}</h1> <img src=${input3} alt="img"</img> <p>${input2}</p>`
    }
    closePopup();
})
