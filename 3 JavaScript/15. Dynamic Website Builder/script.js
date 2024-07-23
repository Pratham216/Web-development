function createCard(title, cName ,views, monthsOld, duration, thumbnail){
    let viewstr;
    if(views <1000000){
        viewstr = views/1000 +"K";
    }
    else if(views<1000){
        viewstr = views;
    }
    else if (views > 1000000){
        viewstr = views/1000000 +"M";
    }

        let html =`<div class="card">
        
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="duration">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
        </div>
    </div>`
//how to differentiate between
    document.querySelector(".container").innerHTML +=html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

document.querrySelector,(".container")