$(document).ready(function () {
  const contador = $('#js-contador');

  let productosCarrito = 0;
  let totalCarrito = 0.0;
  let mostrarCarrito = $('#js-mostrar-carrito');

  mostrarCarrito.on('click', function () {
    $('#js-carrito').toggleClass('muestrate');
  });

  // $.ajax({
  //   url: 'https://demo1719473.mockable.io/productos',
  //   success: function (data) {
  //     const modal = $('#js-modal');
  //     let producto;
  //     let i = 0;

  //     for (i; i < data.length; i++) {
  //       let html = '<article>\
  //           <figure>\
  //             <img src="images/' + data[i].imagen + '" alt="" />\
  //           </figure>\
  //           <h4>' + data[i].titulo + '</h4>\
  //           <p>' + data[i].descripcion + '</p>\
  //           <span class="precio-anterior">' + data[i].precioAnterior + '</span>\
  //           <span class="precio-venta">' + data[i].precioVenta + '</span>\
  //           <button>\
  //             <i class="fa fa-shopping-cart"></i>\
  //             Agregar\
  //           </button>\
  //         </article>';

  //       $('#js-productos').append(html);
  //     }

  //     // MODAL
  //     $('#js-productos').find('button').on('click', callback);

  //     $('#js-si').on('click', agregarCarrito);

  //     $('#js-no').on('click', function () { modal.hide(); })
  //   }
  // });
});

function callback() {
  console.log('Click en el botón agregar');
  modal.show();
  producto = $(this).parent();
}

function agregarCarrito() {
  const titulo = producto.find('h4').text();
  const precioVenta = producto.find('span.precio-venta').text();
  const carritoSection = $('#js-carrito').find('.carrito-section');
  const html = '<article>\
      <h4>' + titulo + '</h4>\
      <i class="fa fa-times"></i>\
      <span>' + precioVenta + '</span>\
  </article>';

  modal.hide();

  console.log('Agregando producto al carrito');
  if (productosCarrito === 0) carritoSection.find('#js-empty').hide();

  carritoSection.append(html);
  carritoSection
    .find('article:last-child')
    .find('i')
    .on('click', eliminarProducto);

  console.log('Aumentando el contador');
  productosCarrito++;
  contador.text(productosCarrito);
  carritoSection
    .siblings('.carrito-header')
    .text('Mi carrito (' + productosCarrito + ')');

  console.log('Aumentando el total');
  const precioNumerico = parseFloat(precioVenta.slice(3));
  totalCarrito += precioNumerico;
  carritoSection
    .siblings('.carrito-total')
    .text('S/ ' + totalCarrito.toFixed(2));
}

function eliminarProducto() {
  console.log('eliminado el producto');
  const producto = $(this).parent();
  const precioVenta = producto.find('span').text();
  const precioNumerico = parseFloat(precioVenta.slice(3));
  totalCarrito = totalCarrito - precioNumerico;

  const carritoSection = $('#js-carrito').find('.carrito-section');
  carritoSection
    .siblings('.carrito-total')
    .text('S/ ' + totalCarrito.toFixed(2));

  productosCarrito--;

  contador.text(productosCarrito);
  carritoSection
    .siblings('.carrito-header')
    .text('Mi carrito (' + productosCarrito + ')');

  producto.remove();

  if (productosCarrito === 0) carritoSection.find('#js-empty').show();
}







