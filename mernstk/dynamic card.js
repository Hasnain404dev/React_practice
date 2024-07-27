function createCard(title, cName, views, monthOld, duration, thumbnail) {
     
    let viewStr
    if (views<1000000) {
      let viewStr=  views/1000 + "K";
        
    }
    else if(views>1000000){
      let viewStr=  views/1000000 + "M"
        
    }
    



    let dyna = ` <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h3 class="card-text">${title}</h3>
                <p class="mini-text">${cName}. ${viewStr}. ${monthOld}</p>
            </div>
        </div>`
}

createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodeWithHarry","5500000","7","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
// createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodeWithHarry","5500000","7","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")