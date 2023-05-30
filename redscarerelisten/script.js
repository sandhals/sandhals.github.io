$(function() {
    // Move episodes from unstreamed to streamed when checkbox is checked
    $('.episode-checkbox').change(function() {
        var $episodeItem = $(this).parent();

        if ($(this).is(':checked')) {
            $episodeItem.appendTo('#streamed-episodes');
            $('#streamed-episodes').children('.placeholder').hide();
        } else {
            $episodeItem.appendTo('#unstreamed-episodes');
            $('#unstreamed-episodes').children('.placeholder').hide();
        }

        updateScores();
        sortUnstreamedList();
    });

    // Make streamed episodes sortable with drag and drop
    $('#streamed-episodes').sortable({
        update: function(event, ui) {
            updateScores();
        }
    });

    // Update scores based on episode positions
    function updateScores() {
        // Calculate weight based on the number of streamed episodes
        var numStreamedEpisodes = $('#streamed-episodes').children('.episode-item').length;
        var weight = numStreamedEpisodes > 0 ? Math.round(Math.log2(numStreamedEpisodes) + 1) : 1;

        // Show/hide the placeholder message based on whether there are unstreamed episodes
        if ($('#unstreamed-episodes').children('.episode-item').length == 0) {
            $('#unstreamed-episodes').children('.placeholder').show();
        } else {
            $('#unstreamed-episodes').children('.placeholder').hide();
        }

        // Show/hide the placeholder message based on whether there are streamed episodes
        if (numStreamedEpisodes == 0) {
            $('#streamed-episodes').children('.placeholder').show();
        } else {
            $('#streamed-episodes').children('.placeholder').hide();
        }

        // Set the score of each streamed episode
        $('#streamed-episodes').children('.episode-item').each(function(index) {
            var score = Math.round((numStreamedEpisodes - index) / numStreamedEpisodes * 10 * weight);
            $(this).find('.score').text(score);
        });

        // Set the score of each unstreamed episode to 0
        $('#unstreamed-episodes').children('.episode-item').each(function() {
            $(this).find('.score').text('0');
        });
    }

    // Sort unstreamed list by id number
    function sortUnstreamedList() {
        $('#unstreamed-episodes').children('.episode-item').sort(function(a, b) {
            return $(a).data('id') - $(b).data('id');
        }).appendTo('#unstreamed-episodes');
    }
    
    // Sort unstreamed list alphabetically
    function sortUnstreamedListAlphabetically() {
        $('#unstreamed-episodes').children('.episode-item').sort(function(a, b) {
            return $(a).find('.episode-title').text().localeCompare($(b).find('.episode-title').text());
        }).appendTo('#unstreamed-episodes');
    }

    sortUnstreamedListAlphabetically();
});
