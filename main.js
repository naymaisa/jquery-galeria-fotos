$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown() //o formulario vai surgir em deslize para baixo, ao clicar no butao
    })

    $('#button-cancelar').click(function () {
        $('form').slideUp()//o formulario vai subir em deslize para cima, ao clicar no butao cancelar
    })

    $('form').on('submit', function (e) {
        console.log("submit")
        e.preventDefault()
    })
})
