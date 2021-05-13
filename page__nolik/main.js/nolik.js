let count=0
let allblock=document.getElementsByClassName('button')
for(i=0;i<9;i++){
   const butto=document.querySelectorAll('button')[i]
   butto.addEventListener('click',()=>{
   if(butto.innerHTML===''){
   count++;
   if(count%2===0){
      butto.textContent="O" 
   }
   else {butto.textContent="X"}
   }
   if(allblock[0].innerHTML==='X'&& allblock[1].innerHTML==='X'&&allblock[2].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[3].innerHTML==='X'&& allblock[4].innerHTML==='X'&&allblock[5].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[6].innerHTML==='X'&& allblock[7].innerHTML==='X'&&allblock[8].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[0].innerHTML==='X'&& allblock[3].innerHTML==='X'&&allblock[6].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[1].innerHTML==='X'&& allblock[4].innerHTML==='X'&&allblock[7].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[2].innerHTML==='X'&& allblock[5].innerHTML==='X'&&allblock[8].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[0].innerHTML==='X'&& allblock[4].innerHTML==='X'&&allblock[8].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[2].innerHTML==='X'&& allblock[4].innerHTML==='X'&&allblock[6].innerHTML==='X'){
      alert('Первый игрок выйграл')
      location.reload()
   }
   if(allblock[0].innerHTML==='O'&& allblock[1].innerHTML==='O'&&allblock[2].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[3].innerHTML==='O'&& allblock[4].innerHTML==='O'&&allblock[5].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[6].innerHTML==='O'&& allblock[7].innerHTML==='O'&&allblock[8].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[0].innerHTML==='O'&& allblock[3].innerHTML==='O'&&allblock[6].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[1].innerHTML==='O'&& allblock[4].innerHTML==='O'&&allblock[7].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[2].innerHTML==='O'&& allblock[5].innerHTML==='O'&&allblock[8].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[0].innerHTML==='O'&& allblock[4].innerHTML==='O'&&allblock[8].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(allblock[2].innerHTML==='O'&& allblock[4].innerHTML==='O'&&allblock[6].innerHTML==='O'){
      alert('Второй игрок выйграл')
      location.reload()
   }
   if(count===9){
      alert('Ничья')
      location.reload()
   }
   }
   )
}


