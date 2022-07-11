let input = document.querySelectorAll("input")
let span = document.querySelectorAll(".w1")
let label = document.querySelectorAll("label")

let button = document.querySelector("button")

let success = document.querySelector(".success")
let error = document.querySelector(".error")

input.forEach(item =>{
    item.onfocus = () =>{
        item.style.border = "3px solid blue"
        label[+item.getAttribute("data-number")].innerHTML = "Need to fill"
        span[+item.getAttribute("data-number")].style.color = "blue"
    }
    item.onblur = () =>{
        if(item.value.length > 0){
            item.style.border = ""
            label[+item.getAttribute("data-number")].innerHTML = ""
            span[+item.getAttribute("data-number")].style.color = ""
        }
    }
        // console.log(item.value.length);
})

let contener = document.querySelector(".contener")

button.onclick = ()=>{
    let er = 0
    let su = 0
    input.forEach(item=>{
        if (!item.value.length > 0) {
            item.style.border = "3px solid red"
            label[+item.getAttribute("data-number")].innerHTML = "Please enter your email adress"
            label[+item.getAttribute("data-number")].style.color = "red"
            span[+item.getAttribute("data-number")].style.color = "red"
            button.style.backgroundColor = "red"
            er++
            error.innerHTML = er
        }else{
            button.style.backgroundColor = "blue"
            label[+item.getAttribute("data-number")].style.color = ""
            su++
            success.innerHTML = su
        }
    })
}