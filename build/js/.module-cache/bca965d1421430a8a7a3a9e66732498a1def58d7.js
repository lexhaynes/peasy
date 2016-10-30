/* SAMPLE
 *

var MyComponent = {
    controller: function() {
        return {
        	greeting: 'hello'
        }
    },
    view: function(ctrl, args) {
        return (
        	m("h1", ctrl.greeting + " " + args.data)
        )
    }
}

m.render(document.getElementById('app'), [
    m.component(MyComponent, {data: "world"}),
])

*
*/

var AppMain = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return {tag: "main", attrs: {className:"app-main"}, children: [
					GlobalHeader, 
					ViewProducts
				]}
		
	}
}

var GlobalHeader = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return {tag: "header", attrs: {className:"global-header"}, children: [
				{tag: "div", attrs: {className:"grid-full mod-flex mod-space-between"}, children: [
					{tag: "a", attrs: {href:"#", className:"global-header-logo"}, children: [
						"PEASY", 
						{tag: "i", attrs: {className:"global-header-logo-icon fa fa-leaf"}}
					]}, 
					{tag: "div", attrs: {className:"global-header-cart"}, children: [
						{tag: "button", attrs: {className:"global-button global-header-cart-button"}, children: [
							{tag: "i", attrs: {className:"fa fa-shopping-cart"}}, 
							"  Your Cart", 
							{tag: "span", attrs: {className:"global-header-cart-summary"}, children: [
								"(2)"
							]}
						]}
					]}
				]}
			]}
	}
}

var ErrorBar = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return 	{tag: "div", attrs: {className:"error-bar"}, children: [
				{tag: "div", attrs: {className:"grid-full"}, children: [
					{tag: "div", attrs: {className:"error-bar-content"}, children: [
						"This is an error."
					]}, 
					{tag: "button", attrs: {className:"global-button error-bar-close"}, children: ["[close]"]}
				]}
			]}
	}
}

var ViewProducts = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return {tag: "main", attrs: {className:"view-products is-visible"}, children: [
					m.component(IndexToolbar, {days:4}), 
					m.component(DateSelect, {days:7}), 
					m.component(ProductList, {products:args.products})
				]}
	}
}

var IndexToolbar = {
	controller: function() {
		return {
			days: ['Today, Oct 13', 'Tomorrow, Oct 14', 'Sunday, Oct 16', 'Monday, Oct 17']
		}
	},
	view: function(ctrl, args) {
		var days = ctrl.days.map(function(day, index) {
			return (index == 0 ? {tag: "div", attrs: {className:"toolbar-item is-selected"}, children: [" ",  day, " "]} : {tag: "div", attrs: {className:"toolbar-item"}, children: [" ",  day, " "]})
		});

		return {tag: "header", attrs: {className:"toolbar"}, children: [
					{tag: "div", attrs: {className:"grid-full mod-flex mod-space-between"}, children: [
							 days, 
							{tag: "button", attrs: {className:"global-button toolbar-dateselect is-selected"}, children: ["More Dates"]}, 
							{tag: "button", attrs: {className:"global-button toolbar-filter"}, children: ["Filter Items"]}
					]}
				]}
	}
}

var DateSelect = {
	controller: function() {
		return {
			listDates: function(num) {
				var view = [];
				for (var i = 0; i < num; i++) {
					view.push({tag: "div", attrs: {className:"dateselect-item"}, children: [
								{tag: "div", attrs: {className:"dateselect-item-day"}, children: [" Day ",  i ]}, 
								{tag: "div", attrs: {className:"dateselect-item-date"}, children: [" ",  i ]}
							]});
				} 
				return view;
			
			}
		}
	},
	view: function(ctrl, args) {

 		return {tag: "div", attrs: {className:"dateselect"}, children: [
					{tag: "div", attrs: {className:"grid-full mod-flex-column"}, children: [
						{tag: "div", attrs: {className:"dateselect-header"}, children: ["Select a Date"]}, 
							{tag: "div", attrs: {className:"dateselect-items"}, children: [	
								 ctrl.listDates(args.days) 
							]}
					]}
				]}
	}
}

var AppSidebar = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return 
	}
}



m.render(document.getElementById('app'), [
    m.component(AppMain, {}),
    //m.component(AppSidebar, {}),
])