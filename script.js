let button = document.getElementById('button')
let text = document.getElementById('text')
let titles = document.getElementsByClassName('titles')


button.addEventListener('click', function(){
    

    for (let index = 0; index < titles.length; index++) {
        titles[index].textContent = 'Titulo'
        
    }
})

