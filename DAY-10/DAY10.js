var arr = new Array();
const box = document.getElementById("box");
const score = document.querySelector("#scoring");

let emojis = ["./a.jpg","./b.jpg","./c.jpg","./d.jpg","./f.jpg","./g.jpg"];

// var emojis = ['a', 'b','c','d','f','g'];
// var emojis = new Array();

// emojis[0] = new Image();
// emojis[0].src = 'th.jpg';

// emojis[1] = new Image();
// emojis[1].src = 'th.jpg';

let original_emojis = emojis.length;
const delay = 100;

emojis = [...emojis, ...emojis];
emojis.sort(() => 0.5 - Math.random());

score.innerHTML = 0;

let selection_Stack = [];


for (let i = 0; i < original_emojis * 2; i++) {
  let ele = document.createElement("img");
  ele.src="./a.jpg"

  ele.classList.add("content");
  box.appendChild(ele);

  
  let random_emoji_index = Math.floor((Math.random() * emojis.length) / 2);
  
  ele.custom_attr = emojis[random_emoji_index];
  
  emojis.splice(random_emoji_index, 1);

  ele.addEventListener("click", () => {
      
    
    if (selection_Stack.length < 2 && !ele.classList.contains('cleared')){
      ele.classList.toggle('onToggle1');
      ele.src = ele.custom_attr;
      
      selection_Stack.push(ele);
    }

    if (selection_Stack.length == 2){
      //mismatch condition
      if(ele.custom_attr != selection_Stack[0].custom_attr || ele == selection_Stack[0]){
        
        setTimeout( () => {
          selection_Stack[0].classList.toggle('onToggle1');
          selection_Stack[0].src = "./a.jpg";
          
          ele.src = "./a.jpg";
          ele.classList.toggle('onToggle1');
          
          
          selection_Stack = [];
        }, delay); 
      }

      //clear condition
      else{
        
        setTimeout( () => {
        selection_Stack[0].classList.toggle('onToggle1');
        selection_Stack[0].classList.toggle('cleared');
        
        
        ele.classList.toggle('cleared');
        score.innerHTML = Number(score.innerHTML) + 2;
        selection_Stack = [];
      
      }, delay); 
       
    }
   
  }

  });

  
  arr.push(ele);
}
