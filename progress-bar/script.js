
let button=document.getElementById('next');
let prevButton = document.getElementById('prev');
let progresStatus=document.getElementsByClassName('progress-status');
let progressNo=document.querySelectorAll('.progress-no');
let activeCircle = 1;
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
    progressNo[circle-1].classList.toggle('circle-active');
    activeCircle=circle;
    activeCircle==progressNo.length?button.disabled=true:button.disable=false;
    width=(activeCircle-1)*20;
    progresStatus[0].style.width=`${width}%`;  
    prevButton.disabled=false; 
}

const downgradeProgress=(circle)=>{
    button.disabled=false;
    progressNo[circle-1].classList.toggle('circle-active');
    activeCircle=circle-1;
    activeCircle<=1?prevButton.disabled=true:prevButton.disable=false;
    width=(activeCircle-1)*20;
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
   
    
