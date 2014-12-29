$(function() {

	// Get templates:
	var blogListTemplate = $('#listOfShops').html();
	var blogDetailTemplate = $('#shopDetail').html();
	var aboutThisAppTemplate = $('#aboutThisAppTemplate').html();

	// Parse templates:
	var blogListTmpl8 = $.template(blogListTemplate);
	var blogDetailTmpl8 = $.template(blogDetailTemplate);


	// Render list of coffee shps:
	shops.forEach(function(ctx, idx) {
		$('#blog-list').append(blogListTmpl8(ctx));
	})

	// Event handler to get to list of shops:
	$('#exploreButton').on('singletap', function() {
		$.UIGoToArticle('#blogs');
	});


	// Get the id of tapped shop,
	// then render its detail view:
	function getBlog(id) {
		shops.forEach(function(ctx) {
			if ( ctx.id === id ) {
				$('#blogDetail').html(blogDetailTmpl8(ctx));
			}
		})
	}

	// Event handler to see detail of coffee shop:
	$('#blog-list').on('singletap', 'li', function() {
		var id = this.id;
		getBlog(id);
	});

	// About this app:
	$.UISheet({id:'aboutThisAppSheet', handle: false, background: 'rgba(0,0,0,0.8)'});
	$('#aboutThisAppSheet').find('section').html(aboutThisAppTemplate);
	$('#aboutThisApp').on('singletap', function() {
		$.UIShowSheet('#aboutThisAppSheet');
	});
	$('#aboutThisAppSheet').find('button').on('singletap', function() {
		$.UIHideSheet();
	});

});