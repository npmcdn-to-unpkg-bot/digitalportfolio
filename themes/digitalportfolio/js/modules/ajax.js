define(function() {

	var ajax = {};

	ajax.load_content = function(request){

		var data = {
			'action': 'get_content',
			'nonce': request
		};

		$.ajax({
			type: "POST",
			url: request,
			data: data,
			async: true,
			dataType: 'html',
			success: function(data){
				var content = $(data).filter('#main');
				$('#main').empty().fadeOut('fast', function(){
					$('#main').fadeIn('slow');
				});
			}
		});
	};

	ajax.push_state = function(url) {
		var state = { page: url };
		history.pushState(state,'', url);
	};

	return ajax;

});