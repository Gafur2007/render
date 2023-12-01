let elList = document.querySelector('.list')

function rendertime(datetime){
    let date = new Date(datetime)
    let day = String(date.getDate()).padStart(2, 0)
    let month = String(date.getMonth()+1).padStart(2, 0)
    let year = date.getFullYear()

    return day + '.'+ month + '.' + year
}

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
        newTime.textContent = rendertime(_films[i].release_date)

        //AppendChild
        newLi.appendChild(newImg)
        newLi.appendChild(newHeading)
        newLi.appendChild(newText)
        newLi.appendChild(newTime)
        elList.appendChild(newLi)
    }
}

render(films)