const item=document.querySelectorAll('.item');
for(let a=0;a<400;a++){
    if(a==126||a==127||a==128||a==132||a==130||a==131||a==145||a==149||a==153||a==165||a==173||a==185||a==193||a==206||a==212|a==227||a==231||a==248||a==250||a==269){
         item[a].classList.add('red');
        //  item[a].classList.toggle('item');
    }
    
    if(a==146 || a==147|| a==148||a==150||a==151||a==152||a==166||a==167||a==168||a==169||a==170||a==171||a==172||a==186||a==187||a==188||a==189||a==190||a==191||a==192||a==207||a==208||a==209||a==210||a==211||a==228||a==229||a==230||a==249){
        
        
        item[a].classList.add('clicked');

    }
    
}
item.forEach((i)=>{
       i.addEventListener('click',()=>{
            i.classList.toggle('clicked');
        })
    });
