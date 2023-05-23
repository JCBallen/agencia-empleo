/*const select1 = document.querySelector('.icon-filtro-1');
const opciones1 = document.querySelector('.buttons');

const select2 = document.querySelector('.icon-filtro-2');
const opciones2 = document.querySelector('.buttons1');

const select3 = document.querySelector('.icon-filtro-3');
const opciones3 = document.querySelector('.buttons2');

const select4 = document.querySelector('.icon-filtro-4');
const opciones4 = document.querySelector('.buttons3');


select1.addEventListener('click', function() {
    opciones1.style.display = 'flex';
});

select2.addEventListener('click', function() {
    opciones2.style.display = 'flex';
});

select3.addEventListener('click', function() {
    opciones3.style.display = 'flex';
});

select4.addEventListener('click', function() {
    opciones4.style.display = 'flex';
});*/

/*let candidatos = {
    data: [
        {
            nombre: "Marin Kitagawa",
            profesion: "Economia",
            puntuacion: "5",
            ubicacion: "Bogota, CO.",
            salario: "",
        },
        {
            nombre: "Izuku Midoriya",
            profesion: "Ingenieria",
            puntuacion: "5",
            ubicacion: "Bogota, CO.",
            salario: "",
        },
        {
            nombre: "keisuke Baji",
            profesion: "Derecho",
            puntuacion: "4",
            ubicacion: "Bogota, CO.",
            salario: "",
        },
        {
            nombre: "Ruka Sarashina",
            profesion: "Medicina",
            puntuacion: "3",
            ubicacion: "Bogota, CO.",
            salario: "",
        },
    ],
};

for(let i of candidatos.data){

}*/

$(document).ready(function(){
    $('.button-value').click(function(){
        var categoria = $(this).data('category');

        if (categoria === 'todos'){
            $('.candidatos').fadeIn();
        }else{
            $('.candidatos').fadeOut();
            $('.candidatos[data-category="' + categoria + '"]').fadeIn();
        }
    });
});