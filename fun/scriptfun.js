let input = document.querySelector('input');
input.addEventListener('keyup', function(event){
    let name = document.querySelector('p');
    if (input.value){
        name.innerHTML = `Hello, ${input.value}`;
    }
    else{
        name.innerHTML = "Hello, Whoever you are!";
    }
});

function blink(){
    let parag = document.querySelector('.divp');
    if (parag.style.visibility == 'hidden'){
        parag.style.visibility = 'visible';
    }
    else{
        parag.style.visibility = 'hidden';
    }
}

const iaa = document.querySelector('#name');
let isBlinkon = false;

if (iaa) {
    iaa.addEventListener('input', () => {
        if (isBlinkon == false) {
            isBlinkon = true;
            window.setInterval(blink, 400);
        }
    });
}

let divp = document.querySelector('.divp');

iaa.addEventListener('input', function(){
    if(iaa.value.trim()){
        divp.classList.add('act');
        
    }
});

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', e=> {
      const isDropdownButton = e.target.matches('[data-dropdown-button]');
      console.log('Dropdown button clicked:', isDropdownButton);
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  
      let currentButton;
      if (isDropdownButton) {
          currentButton = e.target.closest('[data-dropdown]');
          currentButton.classList.toggle('active');
          console.log('Current dropdown toggled:', currentButton);
      }
  
      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
          if (dropdown === currentButton) return
          dropdown.classList.remove('active');
          console.log('Other dropdown closed:', dropdown);
      });
    });
  });
  
