
function add() {
    //alert ("clicou");
    let titulo = document.querySelector('div#add');
    titulo.innerHTML = 'preencha aqui';
    titulo.style.margin = "2%";

    
    let form = document.createElement("form");//tipo, se é texto, imagem etc.;
    form.setAttribute("method", "post");
    

    let arti = document.createElement("input");//botao enviar, titulo do podcast;
    arti.setAttribute("type", "text");
    arti.setAttribute("placeholder", "Coloque o título do podcast");
    arti.style.padding= "3%";
    arti.style.margin="2%";
    arti.style.width="20%";


    let parag = document.createElement("input"); //paragrafo que ira inserir no resumo ;
    parag.setAttribute("type", "text");
    parag.setAttribute("placeholder", "Insira um resumo do podcast e a qual episódio pertence: ");
    parag.style.margin = "2%";
    parag.style.padding= "3%";
    parag.style.width="28.5%";

    let s = document.createElement("input");//confirmar
    s.setAttribute("type", "submit")
    s.setAttribute("value", "Submit");
    s.style.width="15%";
    s.style.margin="2%";

    form.append(arti);
    form.append(img);
    form.append(parag);              
    form.append(s); 


    document.getElementById("add").appendChild(form);

    s.blogmaisEventListener("click",function (event){                    
        event.preventDefault();
       // alert("clicou");
        
        let novaImagem = document.querySelector("#imgpodcastNew");
        let imagem = document.createElement("img");
        imagem.setAttribute("id", "img-podcast-New")
        imagem.src = img.value;

        let tit = document.querySelector("#titulo-podcast-New");
        let titu = document.createElement("h5");
        titu.innerHTML = arti.value;
        
        

        let nova = document.querySelector("#podcastNew");
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = parag.value;
    

        novaImagem.appendChild(imagem);
        tit.appendChild(titu);
        nova.appendChild(paragrafo);
        

        

    });
}