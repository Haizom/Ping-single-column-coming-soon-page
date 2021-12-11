const input = document.getElementById("email")
const btn = document.getElementById("btn")
const form = document.getElementById("form")


btn.addEventListener("click", (event)=>{
    event.preventDefault()
    if (!ValidateEmail()){
        input.parentElement.classList.remove("not-error")
        input.parentElement.classList.add("email-error")
    }else{
        input.parentElement.className = ""
        input.parentElement.classList.add("not-error")
        input.value = ""
    }
})

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
  {
    return (true)
  }
    return (false)
}


