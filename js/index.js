// Your code goes here
const navItem = Array.from(document.querySelector('nav').children);
const hide = document.querySelectorAll('.hide');
const imgList = Array.from(document.querySelectorAll('img'));
const submit = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const button = Array.from(document.querySelectorAll('.btn'));
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');


///1. click event listener
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
//////

///2. mouseover event listener

imgList.forEach(item => item.addEventListener('mouseover',()=>{
   item.style.transform = "scale(1.01)";
   item.style.cursor = 'pointer';
}));
//////

////3. mouseleave event listenr
imgList.forEach(item => item.addEventListener('mouseleave',()=>{
   item.style.transform = "scale(1)";
}));

/////


//form submit event listener

//Form button functionilty
//4. submit event listener
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  alert('We Will Contact You Shortly!');
  overlay.style.display = 'none';
});

button.forEach(btn => addEventListener('click', (e)=> {
  overlay.style.display = 'flex';


}));

cancel.addEventListener('click', (e)=> {
  overlay.style.display = 'none';
});
