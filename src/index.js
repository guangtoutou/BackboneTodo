import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import './css/style.css'

var Todo = Backbone.Model.extend({
	defaults:{
		title:'',
		completed: false
	}
});


var TodoView = Backbone.View.extend({
	el: "#app",

	initialize:function(){
		this.render();
	},

	template: _.template($('#item-template').html()),

	render:function(){
		console.log(this.model.attributes);
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

$(function(){
	var todoModel = new Todo({title:'james', completed:false})
	var todoView = new TodoView({model:new Todo()});
})