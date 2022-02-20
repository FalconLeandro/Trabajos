
  const btn=document.querySelector('.menu-btn');
  const links = document.querySelectorAll(".nav-link a");
  function doit() {
    
    btn.checked = false;
  }
  links.forEach(cbox =>{cbox.addEventListener("click", doit);})

  