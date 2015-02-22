
Template.navigation.helpers({
	ifTemplateIs: function(template, txt, not){
		var currentRoute = Router.current();
		return currentRoute && template === currentRoute.lookupTemplate() ? txt : (not?not:"");
	},
	ifLoggedIn: function(txt, not){
		return Meteor.user() ? txt:(not?not:"");
	}
});
