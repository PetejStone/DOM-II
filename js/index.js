// Your code goes here
const navItem = Array.from(document.querySelector('nav').children);
const hide = document.querySelectorAll('.hide');


// navItem.forEach(item => item.addEventListener('click',()=>{
//   item.insertAdjacentHTML('beforeend','<div class="selected "></div>');
//   const selected = document.querySelector('.selected');
//   console.log(selected);
//     if (selected.style.opacity = 1) {
//       selected.style.opacity = 0;
//       console.log('test');
//     } else if (selected.style.opacity = 1){
//       selected.style.opacity = 0;
//       console.log('hello');
//     }
// }));

//Navigation 'active' functionality.
for (let i=0; i < navItem.length; i++) {
  let activeIcon = navItem[i].nextElementSibling; //selects active icon
  navItem[i].addEventListener('click',()=> { //adds click listener to nav links
    for (let i=0; i < hide.length; i ++) { //loops through all icons and turns their active stylings 'off'
      hide[i].className = 'hide';
      navItem[i].className = 'navItem';
    }
    //turns the current selected icon stylings 'on' with bold text and a dot
    hide[i].className = 'active';
    event.target.className = 'active-link';

  });
}
