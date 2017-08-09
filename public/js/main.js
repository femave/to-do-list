$('.remove').on('click', function(e) {
  const $input = $(this).siblings('input')
  let taskID = $input.val()
  console.log("work")
  $.ajax({
    url: '/todo-list/' + taskID,
    method: 'PUT'
  })
  .then( data => {
    window.location.reload()
  } )

})

$('.delete').on('click', function(e) {
  const $input = $(this).siblings('input')
  const positionCountry = $input.val()

  $.ajax({
    url: '/todo-list-delete/' + positionCountry,
    method: 'DELETE'
  })
  .then( data => {
    window.location.reload()
  } )

})



$('.removeAll').on('click', function(e) {

  var id =  []
  $('.grey').find('input').each(function() {
    id.push( this.value )
  })
 

  var ids = id.join(',')
  console.log(ids)
  $.ajax({
    url: '/deleteAll/' + ids,
    method: 'PUT'
  })
  .then( data => {
    window.location.reload()
  } )

})

$('.list-group-item').on('click', function(e){
  e.preventDefault()
  $(this).toggleClass('grey')
  
})

$('.taskItem').on('click', function(e){
  e.preventDefault()
   $(this).toggleClass('hidden')
   $(this).siblings('input').toggleClass('hidden')
})


$('.inpTask').keypress(function (e) {
  if (e.which == 13) {
    $(this).siblings('.taskItem').text(this.value);
    $(this).toggleClass('hidden')
    $(this).siblings('.taskItem').toggleClass('hidden')

    const $input = e.target.parentElement.children[1].value
    const idPath = e.target.parentNode.childNodes[2].children[0].value
    console.log(e.target.parentNode.childNodes[2].children[0].value)
    console.log($input)
    $.ajax({
    url: '/todo-list/' + idPath,
    method: 'PUT',
    data: {task : $input}
  })

    return false;    //<---- Add this line
  }

});