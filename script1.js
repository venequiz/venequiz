document.addEventListener('DOMContentLoaded', function() {
  // Aquí comienza el código que ya tienes para inicializar el slider
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    onCycleTo: function() {
      var activeIndex = instances[0].center % 6; // Obtén el índice de la tarjeta activa, asegurándote de que esté en el rango de 0 a 5
      var bgImages = ['bg-bolivar.png', 'bg-salto.png', 'bg-diablos.jpg', 'bg-profesor.jpeg', 'bg-leyendas.jpeg', 'bg-cultura.jpeg']; // Array de nombres de imágenes de fondo correspondientes a cada categoría
      var titles = ['HISTORIA', 'GEOGRAFIA', 'ARTE', 'CIENCIA', 'LEYENDAS', 'CULTURA GENERAL']; // Array de títulos de categorías
      var bgImage = bgImages[activeIndex]; // Obtiene el nombre de la imagen de fondo correspondiente al índice activo

      changeBg(bgImage, titles[activeIndex]); // Llama a la función changeBg para cambiar el fondo
    }
  });
  // Aquí termina el código para inicializar el slider

  // Aquí comienza el código que te proporcioné para la pre-carga de imágenes
  function preloadImages(images) {
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = `../assets/Imagenes/Fondos/${images[i]}`;
    }
  }

  const bgImages = ['bg-bolivar.png', 'bg-salto.png', 'bg-diablos.jpg', 'bg-profesor.jpeg', 'bg-leyendas.jpeg', 'bg-cultura.jpeg'];

  preloadImages(bgImages);
  // Aquí termina el código para la pre-carga de imágenes
});

function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("../assets/Imagenes/Fondos/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}
