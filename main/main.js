let elList = document.querySelector('.list')

function render(_films){
    for (let i = 0; i<_films.length; i++){
        //Tegs
        newLi = document.createElement('li')
        newImg = document.createElement('img')
        newHeading = document.createElement('h3')
        newText = document.createElement('p')
        newTime = document.createElement('time')

        //Attribute
        newLi.setAttribute('class', 'item')
        newImg.setAttribute('class', 'img')
        newImg.setAttribute('src', _films[i].poster)
        newImg.setAttribute('alt', _films[i].title + 'poster')
        newImg.setAttribute('width', 200)
        newImg.setAttribute('height', 300)
        newHeading.setAttribute('class', 'heading')
        newText.setAttribute('class', 'text')
        newImg.setAttribute('class', 'time')

        //TextContent
        newHeading.textContent = _films[i].title;
        newText.textContent = _films[i].overview;
        newTime.textContent = _films[i].release_date;

        //AppendChild

        newLi.appendChild(newImg)
        newLi.appendChild(newHeading)
        newLi.appendChild(newText)
        newLi.appendChild(newTime)
        elList.appendChild(newLi)
    }
}

render(films)