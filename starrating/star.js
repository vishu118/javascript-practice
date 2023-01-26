const star = document.querySelectorAll('.fa-star')






star.forEach((ele, i)=>{
    ele.addEventListener("click", (e)=>{
        // console.log(i)
        star.forEach((ele, ind)=>{
            // console.log(ind)
            if(i >= ind){
                ele.classList.add("color");
            }else{
                ele.classList.remove("color");

            }
        })
    })
})
star.forEach((ele, i)=>{
    ele.addEventListener("mouseover", (e)=>{
        // console.log(i)
        star.forEach((ele, ind)=>{
            // console.log(ind)
            if(i >= ind){
                ele.classList.add("color");
            }else{
                ele.classList.remove("color");

            }
        })
    })
})
