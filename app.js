$(document).ready(function () {
    $('#sortingTable').DataTable()

    $('#add').on('click', function (e) {
        e.preventDefault()

        if ($("input[type='text']").val().length < 2) {
            $('#title').addClass("is-invalid")
            $('#titleWarning').text("The length of title must be 2 characters or more")
            return;
        }

        if ($("input[type='number']").val() < 0 || $("input[type='number']").val() > 10) {
            $('#rating').addClass("is-invalid")
            $('#ratingWarning').text("The rating should be between 0 and 10")
            return;
        }

        let title = $('#title').val()
        let rating = $('#rating').val()

        function makeTd(title, rating) {
            return $('tbody').append('<tr class="list">\n' +
                '        <td><span id="movieTitle">' + title + '</span></td>\n' +
                '        <td><span id="movieRating">' + rating + '</span></td>\n' +
                '        <td><span class="remove badge badge-warning p-2"><i class="remove fas fa-trash-alt fa-1x"></i></span></td>\n' +
                '        </tr>')
            // reset
            $("input[type='text']").val("")
            $("input[type='number']").val("")
            $('#title').removeClass("is-invalid")
            $('#rating').removeClass("is-invalid")
        }

        makeTd(title, rating)
    })

    $('tbody.tbody').on('click', 'span.remove', function (e) {
        $(this).parent().parent().remove()
    })

});
