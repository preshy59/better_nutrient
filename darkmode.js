
darkmode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if (darkmode.checked) {
      localStorage.setItem('darkmode', 'enabled');
    }

  });
  

  if (localStorage.getItem('darkmode') === 'enabled') {
    darkmode.checked = true;
    document.body.classList.add('dark');
  }




