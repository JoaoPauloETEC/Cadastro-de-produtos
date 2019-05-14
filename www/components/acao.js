//Menu
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
//Modal
function showModal() {
  var modal = document.querySelector('ons-modal');
  modal.show();
}
//Botão voltar
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});