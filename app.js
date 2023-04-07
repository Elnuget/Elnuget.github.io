// Importar page.js
import page from 'page';

// Definir una ruta para la página de inicio
page('/', () => {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = '¡Hola, mundo!';
});

// Definir una ruta para la página "acerca de nosotros"
page('/acerca-de', () => {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = 'Somos una empresa dedicada a la venta de productos de alta calidad.';
});

// Iniciar page.js
page();
