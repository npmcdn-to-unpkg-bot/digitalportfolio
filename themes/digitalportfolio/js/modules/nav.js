define(function(require) {

	'use strict';

	var nav = {},
		div = document.getElementById('nav'),
		links = div.getElementsByTagName('a');

	nav.get_links = function(id){
		
		if ( links.length < id ){
			return 'Array out of bounds error';
		} else {
			return links[id];
		}
	};

	nav.links_length = function(){

		return links.length;
	};

	nav.get_href = function(element){

		var url = element.getAttribute('href');
		return url;
	};

	return nav;
});