// Part Two - Movies App!
//     Build an application that uses jQuery to do the following:
//
//     Contains a form with two inputs for a title and rating along with a button to submit the form.
//     When the form is submitted, capture the values for each of the inputs and append them do the DOM along with a button to remove each title and rating from the DOM.
//     When the button to remove is clicked, remove each title and rating from the DOM.
//
//     Further Study
//      Ensure that the rating of a movie can only be between 0 and 10.
//      Ensure that a title has at least 2 characters in it.
//      Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

$(document).ready(function() {
    $('#sortingTable').DataTable();

    $('#add').on('click', function(e){
        e.preventDefault()

        if($("input[type='text']").val().length < 2){
            $('#title').addClass("is-invalid");
            $('#titleWarning').text("The length of title must be 2 characters or more");
            return;
        }

        if($("input[type='number']").val() < 0 || $("input[type='number']").val() >10){
            $('#rating').addClass("is-invalid");
            $('#ratingWarning').text("The rating should be between 0 and 10");
            return;
        }

        let title = $('#title').val()
        let rating = $('#rating').val()

        // function makeLi(title, rating){
        //     return $('ul').append('<li class="list">Movie Title: <span id="movieTitle">'+ title + '</span>,  ' +
        //         '               ' + 'Rating: <span id="movieRating">'+ rating + '</span><button class="remove ml-5 btn btn-warning">Delete</button></li>')
        //     // reset
        //     $("input[type='text']").val("")
        //     $("input[type='number']").val("")
        //     $('#title').removeClass("is-invalid")
        //     $('#rating').removeClass("is-invalid");
        // }
        //
        // makeLi(title, rating)

        function makeTd(title,rating){
            return $('tbody').append('<tr class="list">\n' +
                '        <td><span id="movieTitle">'+ title + '</span></td>\n' +
                '        <td><span id="movieRating">'+ rating + '</span></td>\n' +
                '        <td><span class="remove badge badge-warning p-2"><i class="remove fas fa-trash-alt fa-1x"></i></span></td>\n' +
                '        </tr>')

        }
        makeTd(title, rating)
    })

    // TODO even if I use on along with various options to try, either it only works first button or not works at all.
    //  why the only first button working? why does any of the other options just don't work?
    $('ul.list').on('click', 'button.remove', function(e){
        $(this).parent().remove();
    });

    $('tbody.tbody').on('click', 'span.remove', function(e){
        $(this).parent().parent().remove();
    });
    // TODO add sort. https://www.w3schools.com/howto/howto_js_sort_list.asp
});
