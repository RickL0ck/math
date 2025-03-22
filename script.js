//https://www.youtube.com/watch?v=S-VeYcOCFZw

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

// My code, with a little search.

let flextext = document.querySelectorAll('.empty');

function mobileflex(){
  flextext.forEach(element => {
    if (window.innerWidth < 900) {
      element.classList.remove('empty');
      element.classList.add('link');
    } else {
      element.classList.remove('link');
      element.classList.add('empty');
    }
  });
}

document.addEventListener('DOMContentLoaded', mobileflex);
window.addEventListener('resize', mobileflex);
