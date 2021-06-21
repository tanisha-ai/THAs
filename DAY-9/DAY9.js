var count=0

var total=40

let totalseats = 50
// var seatsdiv = document.getElementById('seats')
// for (let index = 0; index < totalseats; index++) {
//     const seatelement = document.createElement("div");
//     seatelement.setAttribute('id',index) //giving an id just to recall in js , diffrent id's for each !
//     seatelement.setAttribute('class',"seats")
//     document.body.insertBefore(seatelement, seatsdiv);
// }

const allseats=document.querySelectorAll('.allseats');

allseats.forEach((i)=>{
i.addEventListener('click',()=>{
    if(i.classList.contains('active'))
    {
        count-=1;
        i.classList.remove('active');
        document.getElementById("remain").innerHTML=total-count;
        document.getElementById("booked").innerHTML=count;
        

    }
    else{
        count+=1;
        i.classList.add('active');
        document.getElementById("remain").innerHTML=total-count;
        document.getElementById("booked").innerHTML=count;

       }
})
});
    
   
//     i.classList.toggle('active');
// })
// });
// for(i in seats){
//     if(seats.classList.contains('active')){
//         booked+=1;
//         remaining-=1;
//     }
    
// }


//  document.querySelector('.remain').innerHTML = remaining
