let keys = document.querySelectorAll(".keys")
let display = document.querySelector(".display")
let value = ""

keys.forEach(key=>{
    key.addEventListener("click", ()=>{
        let inp = key.innerHTML
        calculation(inp)
    })
})

function calculation(e){
    if(e=="c"){
        value = ""
    }else if(e=="←"){
        value = value.slice(0, - 1)
    }else if(e=="=" && value!=""){
        let ans = eval(value)
        value += e
        value += ans
    }else{
        value += e
    }
    display.textContent = value
}
