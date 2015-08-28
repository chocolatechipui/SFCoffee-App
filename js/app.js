$(function() {
	// Get templates:
	var blogDetailTemplate = $('#shopDetail').html();
	var aboutThisAppTemplate = $('#aboutThisAppTemplate').html();

	// Parse templates:
	var blogDetailTmpl8 = $.template(blogDetailTemplate);

  // Initialize repeater to output coffeeshops:
  $.template.data['listOfShops'] = shops;
  $.template.repeater();

	// Event handler to get to list of shops:
	$('#exploreButton').on('singletap', function() {
		$.UIGoToArticle('#blogs');
	});

	// Method to get the id of tapped shop,
	// then render its detail view:
	function getChoffeeshop(id) {
		var chosenShop = shops.filter(function(item) {
      return item.id === id;
    });
		$('#blogDetail').html(blogDetailTmpl8(chosenShop[0]));
		$('#chosenCoffeeShopName').text(chosenShop[0].name)
	}

	// Event handler to get detail of coffee shop:
	$('#blog-list').on('singletap', 'li', function() {
		var id = this.id;
		getChoffeeshop(id);
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