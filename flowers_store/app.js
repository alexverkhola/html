(function(){
	var app = angular.module("store", []);

	app.controller("storeController", function(){
		this.product = flowers; // flowers = array from goods
	});

	var flowers = [{
			name: "Violet",
			picture: "images/violet.jpg",
			description: "Violet - is a genus of flowering plants in the violet family Violaceae. It is the largest genus in the family, containing between 525 and 600 species.",
			price: "5 грн",
			count: 3,
		},
		{
			name: "Tulip",
			picture: "images/tulip.jpg",
			description: "The tulip is a Eurasian and North African genus of herbaceous, perennial, bulbous plants in the lily family, with showy flowers. About 75 wild species are currently accepted",
			price: "5 грн",
			count: 10,
		},
		{
			name: "Chrysanthemum",
			picture: "images/chrysanthemum.jpg",
			description: "Chrysanthemums, sometimes called mums or chrysanths, are flowering plants of the genus Chrysanthemum in the family Asteraceae. ",
			price: "$5",
			count: 8,
		},
		{
			name: "Rose",
			picture: "images/rose.jpg",
			description: "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over a hundred species and thousands of cultivars.",
			price: "10 грн",
			count: 1,
		},
		{
			name: "Chamomile",
			picture: "images/chamomile.jpg",
			description: "Chamomile is the common name for several daisy-like plants of the family Asteraceae that are commonly used to make herb infusions to serve various medicinal purposes. ",
			price: "5 грн",
			count: 2,
		},
		{
			name: "Calla",
			picture: "images/calla.jpg",
			description: "Calla is a genus of flowering plant in the family Araceae, containing the single species Calla palustris.",
			price: "5 грн",
			count: 22,
		},
		{
			name: "Alstroemeria",
			picture: "images/alstroemeria.jpg",
			description: "Alstroemeria, commonly called the Peruvian lily or lily of the Incas, is a genus of flowering plants in the family Alstroemeriaceae.",
			price: "5 грн",
			count: 16,
		},
		{
			name: "Peony",
			picture: "images/peony.jpg",
			description: "The peony is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. They are native to Asia, Europe and Western North America. ",
			price: "5 грн",
			count: 0,
		},
		{
			name: "Freesia",
			picture: "images/freesia.jpg",
			description: "Freesia is a genus of herbaceous perennial flowering plants in the family Iridaceae.",
			price: "5 грн",
			count: 4,
		},
	]
})();
