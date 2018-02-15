$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            name: {
                required: true
            },
			email: {
				email: true
			},
			subject: {
				required: true
			},
			mesaj: {
				required: true
			}

        }
    });

});