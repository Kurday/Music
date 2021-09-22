window.onload = function(e){

  const navItem = document.querySelectorAll('.nav-item'),
  featuredImage = document.querySelector('.featured__image img');




  const 
   //Кнопки якоря
   // getUp = document.getElementById('get-up'),
   getStarted = document.getElementById('js-get-started'),
   // about = document.getElementById('js-about'),
   // contact = document.getElementById('js-contact'),
   // portfolio = document.getElementById('js-portfolio'),
   // pricing = document.getElementById('js-pricing'),
   //MODAL
   modal = document.querySelector('.modal'),
   portfolioContainer = document.querySelectorAll('.portfolio__wrap'),
   playerBlock = document.querySelectorAll('.playerBlock'),
   //MODAL__CONTENT
   coll = document.querySelectorAll('.collaps'),
   collCont = document.querySelectorAll('.collaps__content'),
   bottomPlayer = document.querySelector('.dzsap-sticktobottom.audioplayer-loaded'),
   //Меню
   menuList = document.querySelector('.header__list'),
   menu = document.querySelector('.header__menu'),
   menuBurger = document.querySelector('.header__burger');

  



 
 



//***************   menuCLOSE  *************** 

menuList.addEventListener('click', event => {
  if (event.target.closest('.header__link') || 
    event.target.classList.contains('header__link')){
    menu.classList.remove('active');
    menuBurger.classList.remove('active');
    
  }
});






//ПО ЯКОРЯМ

function HeightFromTop(tab){

  var TopOffset = $(tab).offset().top;

  $("html, body").animate({
    scrollTop: TopOffset
  }, 500);

}



$("#header__list a").on("click", function(e){
  e.preventDefault();
   var currentBlock = $(this).attr("href"),
    currentBlockOffset = $(currentBlock).offset().top;

    $("html, body").animate({
      scrollTop: currentBlockOffset - 20
    }, 500);

});


//МЕНЮ БУРГЕР
function initMenuBurger(){
    //меню бургер
    $('.header__burger').click(function(e){
      $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock') // блокируем скрол мыши при активном меню
      })
  }


const scrollBtn = document.querySelector('.header--logo-logo')
scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
}






// ***************************************    ФИЛЬТР     **********************************************
const PRODUCTS = document.getElementById('portfolio__container');
let users = [
{
  cat: 'trailer',
  img: 'img/portfolio/punchcake studio trailer music Primaris Last Templar.jpg',
  title: 'Primaris Last Templar',
  description: 'Music Trailer',
  path: '1'
},
{
  cat: 'artists',
  img: 'img/portfolio/Punchcakestudio After The End.jpg',
  title: 'After The End',
  description: 'Rock music track',
  path: '2'
},

{
  cat: 'artists',
  img: 'img/portfolio/Punchcakestudio Pandemic.jpg',
  title: 'Pandemic',
  description: 'Rock music track',
  path: '3'
},
{
  cat: 'promotion',
  img: 'img/portfolio/Punchcakestudio Corporate Uplifting Inspiration.jpg',
  title: 'Corporate Uplifting Inspiration',
  description: 'Corporate Commercial Music',
  path: '4'
},
{
  cat: 'promotion',
  img: 'img/portfolio/Punchcakestudio Breaking News Action Cinematic.jpg',
  title: 'Breaking News Action Cinematic',
  description: 'Cinematic Music',
  path: '5'
},

{
  cat: 'promotion',
  img: 'img/portfolio/Punchcakestudio EDM Party Fashion.jpg',
  title: 'EDM Party Fashion',
  description: 'Dance Music',
  path: '6'
},

{
  cat: 'promotion',
  img: 'img/portfolio/Punchcakestudio Percussion Upbeat Stomp Sports.jpg',
  title: 'Percussion Upbeat Stomp Sports',
  description: 'Commercial Music',
  path: '7'
},
{
  cat: 'trailer',
  img: 'img/portfolio/Punchcakestudio Trailer Action Cinematic Rock.jpg',
  title: 'Trailer Action Cinematic Rock',
  description: 'Commercial Rock Music',
  path: '8'
},

{
  cat: 'promotion',
  img: 'img/portfolio/Punchcakestudio Rock That Crowd Beat.jpg',
  title: 'Rock That Crowd Beat',
  description: 'Commercial Rock Music',
  path: '9'
},
{
  cat: 'games',
  img: 'img/portfolio/Punchcakestudio Rock Synth Neon Trip.jpg',
  title: 'Rock Synth Neon Trip',
  description: 'Commercial Rock Music',
  path: '10'
},
{
  cat: 'trailer',
  img: 'img/portfolio/Punchcakestudio Epic Rock Trailer.jpg',
  title: 'Epic Rock Trailer',
  description: 'Commercial Rock Music',
  path: '11'
},
{
  cat: 'games',
  img: 'img/portfolio/Punchcakestudio Dark Horror Synthwave.jpg',
  title: 'Dark Horror Synthwave',
  description: 'Cinematic Music',
  path: '12'
},
{
  cat: 'artists',
  img: 'img/portfolio/Velociraptor.jpg',
  title: 'Velociraptor',
  description: 'Artist Music',
  path: '13'
},
{
  cat: 'games',
  img: 'img/portfolio/Masha and the Bear.jpg',
  title: 'Маша и медведь',
  description: 'Музыка к игре',
  path: '14'
},
{
  cat: 'artists',
  img: 'img/portfolio/The Nerve Machine - Burn.jpg',
  title: 'The Nerve Machine - BURN',
  description: 'Artist Music',
  path: '15'
},
{
  cat: 'artists',
  img: 'img/portfolio/The Nerve Machine - Faling.jpg',
  title: 'The Nerve Machine - Falling',
  description: 'Artist Music',
  path: '16'
},

];

//ПЕРЕДАЕМ категорию и массив по клику 
function app(item){
  const buttons = document.querySelectorAll('.button'),
          cards = document.querySelectorAll('.card'); //div с животными
        

    //по кнопкам фильтрации выполняем
    buttons.forEach((button)=> {

      button.addEventListener('click' , ()=>{
        const currentCategory = button.dataset.filter // текущий all,cat,dog,bird\
        if(!button.classList.contains('buttonActive')){
          buttons.forEach((button)=> {button.classList.remove('buttonActive')})
        }

        button.classList.add('buttonActive');
        
        filter(currentCategory, users) // передаем текущий фильтр и все divы-карточки

      })
    });
} // func app


// ПРИНИМАЕМ категорию и массив 
function filter(category, users){

  PRODUCTS.innerHTML ='';

  if(!(category == 'all')){
    users = users.filter(user => user.cat === category);
  }

      let showPage = (function(){
            let active;

            return function(item){
              //Стилизация li пагинации
              if (active){
                active.classList.remove('active');
              }
              active = item;
              item.classList.add('active');
              let pageNum =+item.innerHTML;

              //Высчитываем по формуле notes который равен срезу массива в 5 элементов 
              let start = (pageNum - 1) * notesOnPage;
              let end = start + notesOnPage;
              let notes = users.slice(start, end);
              
              PRODUCTS.innerHTML = '';

              for(let note of notes){
              createCell(note.img, note.cat, note.title, note.description, note.path);
              }
         };

        }()); // ./showPage 
        
        let notesOnPage = 4;
        let countOfItems = Math.ceil(users.length/notesOnPage);
        let items = [];

        for(let i=1; i<=5; i++){
          let li = document.querySelector('#pagination li');
          if(pagination.contains(li)){
             pagination.removeChild(li);
          }
        }
    
        for(let i=1; i<=countOfItems; i++){
          let li=document.createElement('li');
          li.innerHTML = i;
          pagination.appendChild(li);
          items.push(li);  
        }

        if(items.length == 1){
          pagination.classList.add('hide');
        } else {
          pagination.classList.remove('hide');
        }




        for(let item of items){
         item.addEventListener('click', function(){
         showPage(this);
         });
        }

        showPage(items[0]);

}



    filter('all', users);



    function createCell(img,cat, title, description, path){
      let htmlCatalog = '';

  //написать проверку есть ли дата фильтр {cat}  

  htmlCatalog += `
  <div class="portfolio__wrap card ${cat} ">
  <img  class="portfolio__wrap-img" src="${img}" alt="">
  <div class="portfolio__wrap-info btn"  data-path="${path}">
  <a href="#"><img src="img/portfolio/play-button.png" alt="" calss="portfolio__hover-play"></i></a>
  </div>
  <div class="billet">
  <span class="billet__title">${title}</span>
  <span class="billet__description">${description}</span>
  </div>
  </div>
  `;

  const html = `
  ${htmlCatalog}
  `;

  PRODUCTS.innerHTML += html;

  const card = document.querySelectorAll('.card');
  card.forEach( function(element) {


    element.classList.add('open');
    
  });

  
  modalapp();

}

app();





// МОДАЛЬНОЕ ОКНО

function modalapp(){
  const btns = document.querySelectorAll('.btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modals = document.querySelectorAll('.modal');
  const PopupOut = document.getElementById('popup--out');
  const body = document.querySelector('body');

  btns.forEach((el)=>{
    el.addEventListener('click', (e)=>{
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el)=>{
        el.classList.remove('modal--visible');
      })

      modalOverlay.classList.add('modal-overlay--visible');
      body.classList.add('no-scroll');
      // document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      let htmlCatalog = '';
      
      PopupCatalog.forEach(({id, frame}) => { 
        if(id == path) {
          htmlCatalog += `
          <div class="popup--frame">${frame}</div> `;

          const html = `
          ${htmlCatalog}`;



          PopupOut.innerHTML = html;
        }

        
      });
      
    });
  });

  //закрытие модального окна
  modalOverlay.addEventListener('click', (e)=>{
    if (e.target == modalOverlay){
      let htmlCatalog = '';
      PopupOut.innerHTML = htmlCatalog;
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el)=> {
        el.classList.remove('modal-overlay--visible');
        body.classList.remove('no-scroll');
      });
    }
  });
}


const PopupCatalog = [
{
  id: '1',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RQh5IGZGrmI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '2',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cMJhWOLtDp0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '3',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bSospZNFOag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '4',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Bzr_eaOyqMs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '5',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6fFlZj7EvZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '6',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kVFEn2XKVeA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '7',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IuUjXGwRxJw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '8',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E2iQ2dmWlgY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '9',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4isTFh69i_Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},

{
  id: '10',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GqOE7quxYsU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '11',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ge8x78mpA0o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '12',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QFmspa7CTL8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '13',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DvsWyL3BoG0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '14',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iyE4nqLs3EM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '15',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k6h30XDm4BY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
  id: '16',
  frame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6B73EjSkgWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
];

//ИНИЦИАЛИЗИРУЕМ


initMenuBurger()


AOS.init({
  duration: 600
});


//Скрипт ОБРАТНАЯ СВЯЗЬ
$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

}


