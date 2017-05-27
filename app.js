$(document).ready(function () {
  console.log('El documento ya está listo');
  let mostrarCarrito = $('#js-mostrar-carrito');
  mostrarCarrito.on('click', function () {
    $('#js-carrito').toggleClass('muestrate');
  });

  $.ajax({
    url: 'productos.json',
    success: function (data) {
      let i = 0;
      for (i; i < data.length; i++) {
        let html = '<article>\
            <figure>\
              <img src="images/' + data[i].imagen + '" alt="" />\
            </figure>\
            <h4>' + data[i].titulo + '</h4>\
            <p>' + data[i].descripcion + '</p>\
            <span class="precio-anterior">' + data[i].precioAnterior + '</span>\
            <span class="precio-venta">' + data[i].precioVenta + '</span>\
            <button>\
              <i class="fa fa-shopping-cart"></i>\
              Agregar\
            </button>\
          </article>';

        $('#js-productos').append(html);
      }
    }
  });

  console.log('Finalizó el archivo');
  console.log('Finalizó el archivo 2');
  console.log('Finalizó el archivo 3');
  console.log('Finalizó el archivo 4');
  console.log('Finalizó el archivo 5');
});