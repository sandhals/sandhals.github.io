console.log('Hello');

$(function () {
    $('#opennav').on('click', function (){
        $(this).toggleClass('active');
        $('nav').html('h')
    })
})


function handler1() {
    var footNote = $(this).attr('data-fn');
    $('[data-fn="' + footNote + '"]').after(`
    <div class="footnote">
    <p>hi, ` + footNote + `</p>
    </div>
    `);
    $(this).one("click", handler2);
}

function handler2() {
    $('.footnote').remove();
    $(this).one("click", handler1);
}
$("button").one("click", handler1);

$(function (){

$('button').on('click', function(){

var myFootnote = $(this).html();
})
})




