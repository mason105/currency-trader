function switchPages(event) {
  event.preventDefault();
  var navigationBar = document.getElementById('navigation');
  var pages = document.getElementsByClassName('page');
  for (var i=0; i<pages.length; i++) {
    if (event.target.getAttribute('data-page') === pages[i].getAttribute('data-page')) {
      pages[i].classList.add('show');
      pages[i].classList.remove('hidden');
    } else {
      pages[i].classList.remove('show');
      pages[i].classList.add('hidden');
    }
  }
}

// document.getElementById('navigation').addEventListener('click', switchPages)

function historyToggle () {
  $(document).ready(function () {
    $('#history-table').slideToggle()
    $('#data-table').slideToggle() 
  })
}

$(document).ready(function () {
  $('#history-button').click(function () {
    $('#history-table').slideToggle()
     
  })
})

function filterByName (name) {
  var allCells = document.getElementsByClassName('cell');
  _.each(allCells, function (eachCell) {
    if (name === 'hideAll') {
      console.log(name);
    }
    else if (eachCell.getAttribute('data-filter') === name) {
      eachCell.classList.toggle('hidden');
    }    
  })  
}
