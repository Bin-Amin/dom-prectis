let bati = document.querySelector('.bati');
let btn = document.querySelector('button');

let off = 0;
btn.addEventListener("click",function(){
    if(off == 0){
       
         bati.style.backgroundColor = 'yellow' 
         console.log('click hoise')
         btn.innerHTML = 'off';
         off = 1
       
    }else{
         bati.style.backgroundColor = 'darkgrey'
         console.log('koibar hoise')
        btn.innerHTML = 'on'
         off = 0
       
    }
  
})
