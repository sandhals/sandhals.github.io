$("button").click( function() {
    $.getJSON( "json_data.json", function(obj) { 
     $.each(obj, function(key, value) { 
            $("ul").after("<li>"+value.name+"</li>");
     });
    });
   });


   $("button").click( function() {
    $.getJSON( "json_data.json", function(obj) { 
     $.each(obj, function(key, value) { 
            $("ul").after("<li>"+value.name+"</li>");
     });
    });
   });


function handler1() {
    $.getJSON("test.json", function(obj) {
        var footNote = $(this).attr('data-fn');
        $.each(obj, function(key, value) {
            $('[data-fn="' + footNote + '"]').after(`
            <div class="footnote">
            <p>` + {{content}} + `</p>
            </div>
            `)
        })
    })
}


   function click1() {
    var footNote = $(this).attr('data-fn');
    $('[data-fn="' + footNote + '"]').after(`
    <div class="footnote">
    <p>` + json.image + `</p>
    </div>
    `);
    $(this).one("click", click2);
}