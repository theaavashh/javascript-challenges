
let val = document.querySelectorAll('.panel')


const removeClass=()=>{
    val.forEach((element)=>{
        element.classList.remove('active')
    })
}



val.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(!element.classList.contains('active')){
            removeClass();
            element.classList.toggle('active');

        }
    })
})