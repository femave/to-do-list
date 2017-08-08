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
  // const $input = $(this).siblings('input')
  // const tasks = $input.val()
  console.log('asdasdasd')

  $.ajax({
    url: '/deleteAll',
    method: 'PUT'
  })
  .then( data => {
    window.location.reload()
  } )

})