const maximisar = document.querySelectorAll('.modal_container img')
const minimisar = document.querySelectorAll('.modal_container')
const activar = document.querySelectorAll('.nav-principal a')



maximisar.forEach(elemnto =>{

    elemnto.addEventListener('click',function(evento){
        evento.stopPropagation();
        this.parentNode.classList.add('active')
    })

})

minimisar.forEach(e =>{
    e.addEventListener('click',function(evento){
        this.classList.remove('active')
    })
})

