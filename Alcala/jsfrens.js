window.addEventListener('DOMContentLoaded', () => {
      const images = document.querySelectorAll('img');
      const overlay = document.getElementById('image-overlay');
      let hoveredImage = null; // Track the currently hovered image

      images.forEach((image) => {
        image.addEventListener('click', (event) => {
          const name = image.getAttribute('name');
          const age = image.getAttribute('age');
		  const ign = image.getAttribute('ign');
          const location = image.getAttribute('location');

          alert(`Name: ${name}\nAge: ${age}\nIGN: ${ign}\nLocation: ${location}`);
        });

        image.addEventListener('mouseenter', (event) => {
          hoveredImage = image;
          overlay.innerHTML = '';
          const clonedImage = image.cloneNode(true);
          clonedImage.style.width = '100%';
          clonedImage.style.height = '100%';
          overlay.appendChild(clonedImage);
          overlay.style.display = 'block';
        });
        image.addEventListener('mouseleave', (event) => {
          if (hoveredImage === image) {
            overlay.style.display = 'block';
          } else {
            overlay.style.display = 'none';
          }
        });
      });
    });