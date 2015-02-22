Template.home.helpers({
	/*characters: [
		{ name: 'Zaldron', level: 1, playerClass: 'Wizard', race: 'Human', campaign: 'home' },
		{ name: 'Utinu', level: 6, playerClass: 'Sorcerer', race: 'Spellscale', campaign: 'dc'}
	],*/
	characters: function () {
			return Characters.find({});
	},
	campaigns: [
		{ name: "Dora's Campaign", shortCode: "dc", numPlayers: 7 },
		{ name: "Home Campaign", shortCode: "home", numPlayers: 3 }
	]
});

Template.character_table_row.events({
		'click .charRow': function(evt, tmpl){
				console.log("id = " + tmpl.data._id);
			Router.go("charDetails", { _id:""+tmpl.data._id } );
		}
});
