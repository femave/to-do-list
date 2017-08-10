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
  const posId = $input.val()
  console.log($input +' '+posId)
  $.ajax({
    url: '/todo-list-delete/' + posId,
    method: 'DELETE'
  })
  .then( data => {
    window.location.reload()
  } )

})



$('.removeAll').on('click', function(e) {

  var id =  []
  $('.selected').find('.taskId').each(function() {
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
  $(this).toggleClass('selected')
  
})

$('.taskItem').on('click', function(e){
  e.preventDefault()
   // $(".list-group-item").off("click");
   $(this).toggleClass('hidden')
   $(this).siblings('input').toggleClass('hidden').focus()
})


$('.inpTask').keypress(function (e) {
  if (e.which == 13) {
    // $(".list-group-item").on("click");
    $(this).siblings('.taskItem').text(this.value);
    $(this).toggleClass('hidden')
    $(this).siblings('.taskItem').toggleClass('hidden')

    const $input = e.target.parentElement.children[1].value
    const idPath = e.target.parentNode.childNodes[2].children[0].value
    console.log($input)
    console.log(idPath)
    $.ajax({
    url: '/todo-list/' + idPath,
    method: 'PUT',
    data: {task : $input}
  })

    return false;    //<---- Add this line
  }

});