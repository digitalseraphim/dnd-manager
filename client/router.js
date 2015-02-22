Router.configure({
	layoutTemplate:'layout'
});

/*
Router.map(function(){
	this.route('root', {path:'/'});
	this.route('home', {path:'/home'});
	this.route('about',{path:'/about'});
	this.route('charDetail',{path:'/charDetail'});
});
*/
Router.route( '/', function() { this.render("root") });
Router.route('/home');
Router.route('/about');

Router.route('/charDetails/:_id', 
	function(){
		this.render("charDetails");
	},
       	{
	       	name:"charDetails",
       		data: function(){
		       console.log(this.params);
		       c = Characters.findOne({permalink: this.params._id});
		       console.log(c);
		       return c;
		}
	}
);
