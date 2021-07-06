function deleted(index){
    jsonstr=localStorage.getItem('itemJson')
    itemjsonarr=JSON.parse(jsonstr)
    itemjsonarr.splice(index,1)
    localStorage.setItem('itemJson',JSON.stringify(itemjsonarr))

}
function update(){
    if (localStorage.getItem('itemJson')==null){
        itemjsonarr=[];
        itemjsonarr.push([title.value,desc.value])
        localStorage.setItem('itemJson',JSON.stringify(itemjsonarr))
      }
      else{
          jsonstr=localStorage.getItem('itemJson')
          itemjsonarr=JSON.parse(jsonstr)
          itemjsonarr.push([title.value,desc.value])
          localStorage.setItem('itemJson',JSON.stringify(itemjsonarr))
      }
      tbody=document.getElementById('tbody')
      str=""
      itemjsonarr.forEach((element,index)=> {
         str+= ` <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button onclick="deleted(${index})">delete</button></td>
        </tr>`
      });
      tbody.innerHTML=str;
}

add=document.getElementById('add');
    // tit=document.getElementById('title').value;
    // desc=document.getElementById('desc').value;
      add.addEventListener('click',update)
      update()
