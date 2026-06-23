const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = "#d31111"
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = "#28e04a"
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = "#4312ac"
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = "#dfc908"
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor ="#e31a93"
        }
        
    })

})