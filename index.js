    let message = document.querySelector('#message')

function addMovie(event){

    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let uL = document.querySelector('ul')



   
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
   
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    uL.appendChild(movie)
 
    inputField.value = ''

}

function deleteMovie(event){
   
    event.target.parentNode.remove()

    message.textContent = 'Movie Deleted!'
}

let form = document.querySelector('form')

form.addEventListener('submit', addMovie)


function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}

