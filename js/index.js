// Your code goes here
const navItem = Array.from(document.querySelector('nav').children);
const hide = document.querySelectorAll('.hide');
const imgList = Array.from(document.querySelectorAll('img'));
const submit = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const button = Array.from(document.querySelectorAll('.btn'));
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');
const heading = document.querySelector('h1');
const footer = document.querySelector('footer');
///1. click event listener
//Navigation 'active' functionality.
for (let i=0; i < navItem.length; i++) {

  let activeIcon = navItem[i].nextElementSibling; //selects active icon
  navItem[i].addEventListener('click',(e)=> { //adds click listener to nav links
        e.preventDefault();
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

button.forEach(btn => btn.addEventListener('click',()=> {overlay.style.display = 'flex';
// 5. timeout listener, form disappears after 15 seconds.
  let timer = setTimeout(function(){
    alert('You have taken too long. Please try again.')
    overlay.style.display = 'none';
  },15000)
}));

cancel.addEventListener('click', (e)=> {
  overlay.style.display = 'none';
});


//6. dbl click event listener

imgList.forEach(item => item.addEventListener('dblclick',()=>{
   item.style.display = "none";
   item.insertAdjacentHTML('afterend', '<button class="goback">Make Image Come Back</button>');

   const goback = Array.from(document.querySelectorAll('.goback'));
   goback.forEach(btn => btn.addEventListener('click', ()=>{
     item.style.display = 'block';
     btn.style.display = 'none';
   }))
}));

///


// 7. reset event listener
form.addEventListener('reset', ()=> {
  alert('Your form was reset');
})

// 8. scroll event listener



//9. resize event listener
window.addEventListener('resize', ()=> {
  if (window.innerWidth < 500) {
    alert('Warning, content may not fit')
  }
});

//10 scroll event listener
let counter = 0;
window.addEventListener('scroll',()=> console.log(`You have scrolled ${counter += 1} times`));
