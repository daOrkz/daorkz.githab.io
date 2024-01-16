

let nav = document.querySelector('.list-items');

const TABS = [...document.querySelectorAll('.tab')];
const CONTENT = [...document.querySelectorAll('.tab-content')];




nav.addEventListener('click', function(event){
  
  
  if(event.target.classList.contains('tab')){
    let idx = TABS.indexOf(event.target);
    
    for(let tab of TABS){
      tab.classList.remove('active')
    }
    
    TABS[idx].classList.add('active');

    for(let item of CONTENT){
      item.classList.remove('active')
    }

    CONTENT[idx].classList.add('active');
  }

})