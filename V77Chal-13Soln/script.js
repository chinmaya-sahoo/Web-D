function creatCard(title , cName , views , monthsOld ,duration,thumbnail){
    let viewStr;
    if(views<1000000 && views>1000){
        viewStr = views/1000 + "K" ;
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M" ;
    }
    else {
        viewStr = views ;
    }
    let html = `<div class="card">
            <div class="image">
                <img src=" ${thumbnail} "
                    alt="">
            </div>
            <div class="text">
                <h1> ${title} </h1>
                <p> ${cName} . ${viewStr} views . ${monthsOld} months ago </p>
            </div>
        </div>`


}