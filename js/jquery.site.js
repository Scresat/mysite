$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('[data-toggle="popover"]').popover({html:true})
})