
    const image = document.getElementById('bnwimg');
  
    image.addEventListener('mouseenter', () => {
      image.src = 'colored.jpg';
    });
  
    image.addEventListener('mouseleave', () => {
      image.src = 'blacknwhite.jpg';
    });
  