function createCard(title, cName, views, monthOld, duration, thumbnail) {

    let viewStr;
    if (views < 1000000) {
        viewStr = (views / 1000) + "K";

    }
    else if (views > 1000000) {
        viewStr = (views / 1000000) + "M"

    }

    let dyna = ` <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h3 class="card-text">${title}</h3>
                <p class="mini-text">${cName} views . ${viewStr} . ${monthOld} months ago</p>
            </div>
        </div>;`
    document.querySelector(".container").innerHTML += dyna
}

//createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "CodeWithHarry", "5500000", "7", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
// createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodeWithHarry","5500000","7","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
function addCard() {
    let title=  prompt('enter the title')
    let cName=   prompt('enter the Channel name')
    let views =    parseInt(prompt('enter the views'))
    let monthOld= parseInt(prompt('enter the monthold' ))
    let duration= prompt('enter the duration')
    
    let thumbnail =  prompt('enter the thumbnail')
    createCard(title, cName, views, monthOld, duration, thumbnail);
    
}
addCard()