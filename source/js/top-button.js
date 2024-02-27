$(document).ready(function() {
    // Ocultar o link de volta ao topo inicialmente
    $('#up').hide();

    // Verificar o evento de rolagem da página
    $(window).scroll(function() {
        // Calcular a altura da página
        var windowHeight = $(window).height();

        // Calcular a posição atual de rolagem
        var scrollPosition = $(window).scrollTop();

        // Calcular 40% da altura da página
        var scrollThreshold = 0.4 * windowHeight;

        // Verificar se a posição de rolagem é maior que 10% da altura da página
        if (scrollPosition > scrollThreshold) {
            // Se for, mostrar o link de volta ao topo
            $('#up').fadeIn();
        } else {
            // Caso contrário, ocultar o link de volta ao topo
            $('#up').fadeOut();
        }
    });

    // Adicionar ação de clique para rolar de volta ao topo
    $('#up').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });
});