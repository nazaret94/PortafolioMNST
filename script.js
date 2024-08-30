const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', function(){
    menu.classList.toggle('show');
});
document.addEventListener('click', function(event){
    if(!hamburguesa.contains(event.target) && !menu.contains(event.target)){
        menu.classList.remove('show');
    }
});