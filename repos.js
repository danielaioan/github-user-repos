$(document).ready(function(){
    $("#submit").click(function(){
        var username = $("#username").val();
        if (!username) {
            alert('Please write a username');
        } else {
            var url = "https://api.github.com/users/" + username + "/repos";

            $.ajax({
                url: url,
                dataType: 'json',

                success: function (data) {
                    if (data.length > 0) {
                        var responseData = '<h1>' + username + ' Repositories </h1><ul>';

                        $.each(data, function (key, value) {
                            responseData += '<li><a href="' + value.html_url + '" target="_blank">' + value.name + '</a></li>';
                        });

                        responseData += '</ul>';

                        $('#list-repos').html(responseData);
                    } else {
                        alert('The user has 0 repositories');
                        return data;
                    }
                },
                error: function (data) {
                    // not found - 404
                    if (data.status == 404) {
                        alert('The Github user does not exist');
                        $('#list-repos').html('');
                        return data;
                    }
                    // 503 Service Unavailable
                    if (data.status == 503) {
                        alert('Github API does not respond');
                        $('#list-repos').html('');
                        return data;
                    }
                }

            });

        }

        return false;
    });

});
