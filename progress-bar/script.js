
let button=document.getElementById('next');
let prevButton = document.getElementById('prev');
let progresStatus=document.getElementsByClassName('progress-status');
let progressNo=document.querySelectorAll('.progress-no');
let activeCircle = 0;
let width=0;


button.addEventListener('click',()=>{
    if (activeCircle<progressNo.length){
        updateProgress(activeCircle+1);
    }
})

prevButton.addEventListener('click',()=>{
    if(activeCircle>=1){
        downgradeProgress(activeCircle)
    } 
});

const updateProgress=(circle)=>{ 
    progressNo[circle].classList.toggle('circle-active');
    activeCircle=circle;
    updateButton(); 
   
  updateBar();
}

const downgradeProgress=(circle)=>{
    progressNo[circle].classList.toggle('circle-active');
    activeCircle=circle-1;
    updateButton();
    updateBar();
   
    
  
}

const updateButton=()=>{
    button.disabled=(activeCircle==progressNo.length-1);
    prevButton.disabled=(activeCircle<=0); 
}

const updateBar=()=>{
    width=(activeCircle)*20;
    progresStatus[0].style.width=`${width}%`; 

}










/*

button.addEventListener('click',()=>{
        if (activeCircle<progressNo.length){
            activeCircle++;
            progressNo[activeCircle-1].classList.add('circle-active');
            width+=20;
            progresStatus[0].style.width=`${width}%`;
        }

        if(activeCircle==4){
            button.disabled=true;
        }

        if(activeCircle<3){
            prevButton.disabled=false;
        }
    });



prevButton.addEventListener('click',()=>{
    activeCircle--;
    button.disabled=false;
    progresStatus[0].style.width=`${width-20}%`;
    width-=20;
    progressNo[activeCircle+1].classList.remove('circle-active');

    if(activeCircle==1){
        prevButton.disabled=true;
    }

    
});
   

  
   
   */ 
   
    
