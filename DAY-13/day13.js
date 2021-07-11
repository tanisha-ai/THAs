// const username=document.getElementById('user');
  const meme=document.getElementById('meme')

const btn =document.getElementById('btn')

btn.addEventListener('click',()=>{
    const names=user.value
    fetch(`https://meme-api.herokuapp.com/gimme`)
    .then(res=>res.json())
    .then(data=>meme.src=data.url)
})
