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
					IndexToolbar, 
					m.component(DateSelect, {data:4})
				]}
	}
}

var IndexToolbar = {
	controller: function() {
		return
	},
	view: function(ctrl, args) {
		return {tag: "header", attrs: {className:"toolbar"}, children: [
					{tag: "div", attrs: {className:"grid-full mod-flex mod-space-between"}, children: [
							{tag: "div", attrs: {className:"toolbar-item is-selected"}, children: ["Today, Oct 13"]}, 
							{tag: "div", attrs: {className:"toolbar-item"}, children: ["Tomorrow, Oct 14"]}, 
							{tag: "div", attrs: {className:"toolbar-item"}, children: ["Sunday, Oct 16"]}, 
							{tag: "div", attrs: {className:"toolbar-item"}, children: ["Monday, Oct 17"]}, 
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
				console.log('list dates');
				var view = [];
				for (var i = 0; i < num.length; i++) {
					view+={tag: "div", attrs: {className:"dateselect-item"}, children: [
								{tag: "div", attrs: {className:"dateselect-item-day"}, children: ["Tue"]}, 
								{tag: "div", attrs: {className:"dateselect-item-date"}, children: ["18"]}
							]};
				}
				console.log(view);
				return view;
			
			}
		}
	},
	view: function(ctrl, args) {

 		return {tag: "div", attrs: {className:"dateselect"}, children: [
					{tag: "div", attrs: {className:"grid-full mod-flex-column"}, children: [
						{tag: "div", attrs: {className:"dateselect-header"}, children: ["Select a Date"]}, 
							{tag: "div", attrs: {className:"dateselect-items"}, children: [	
								 list 
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