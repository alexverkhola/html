(function(){
	var app = angular.module("store", []);

	app.controller("storeController", function(){
		this.product = flowers; // flowers = array from goods
	});

	var flowers = [{
			name: "Violet",
			picture: "images/violet.jpg",
			description: "Violet - is a genus of flowering plants in the violet family Violaceae. It is the largest genus in the family, containing between 525 and 600 species.",
			price: "$5",
		},
		{
			name: "Tulip",
			picture: "images/tulip.jpg",
			description: "The tulip is a Eurasian and North African genus of herbaceous, perennial, bulbous plants in the lily family,[1] with showy flowers. About 75 wild species are currently accepted",
			price: "$5",
		},
		{
			name: "Chrysanthemum",
			picture: "images/chrysanthemum.jpg",
			description: "Chrysanthemums, sometimes called mums or chrysanths, are flowering plants of the genus Chrysanthemum in the family Asteraceae. ",
			price: "$5",
		}

	]
})();
