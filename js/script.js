let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("Reactjs");
        habilidades[2].classList.add("TypeScript");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("CS");
        habilidades[6].classList.add("C");
        habilidades[7].classList.add("PHP");
        habilidades[8].classList.add("CPP");
        habilidades[9].classList.add("MySQL");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Contacto funcion
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mikedelarosa0430@gmail.com?subjet= nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}

