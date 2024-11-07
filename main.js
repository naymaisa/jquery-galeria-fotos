$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown() //o formulario vai surgir em deslize para baixo, ao clicar no butao
    })

    $('#button-cancelar').click(function () {
        $('form').slideUp()//o formulario vai subir em deslize para cima, ao clicar no butao cancelar
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem) //criado no jquery o que vai puxar o imagem nova adicionada, o appendeTo pega o elemento da frente e insere no li de cima
        $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamnho real">  
                Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem) //target blank faz com que a imagem se abra em outra pagina
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000) //faz com que a imagem surja com efeito, pois no li a cima colocou display none, entao ao adicionar ele fica oculto a principio. O 1000 é 1 segundo
        $('#endereco-imagem-nova').val('')//limpar o campo(formulario) apos coloar a foto
    })
})
