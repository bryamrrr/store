$('#js-productos').find('button').on('click', callback);

function callback() {
  console.log('Click en el botón agregar');
  $('#js-modal').show();
}