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
				GlobalHeader
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
		return 	{tag: "div", attrs: {class:"error-bar"}, children: [
				{tag: "div", attrs: {class:"grid-full"}, children: [
					{tag: "div", attrs: {class:"error-bar-content"}, children: [
						"This is an error."
					]}, 
					{tag: "button", attrs: {class:"global-button error-bar-close"}, children: ["[close]"]}
				]}
			]}
	}
}

var ViewProducts = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return {tag: "main", attrs: {class:"view-products is-visible"}, children: [
					IndexToolbar
				]}
	}
}

var IndexToolbar = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return {tag: "header", attrs: {class:"toolbar"}, children: [
					{tag: "div", attrs: {class:"grid-full mod-flex mod-space-between"}, children: [
							{tag: "div", attrs: {class:"toolbar-item is-selected"}, children: ["Today, Oct 13"]}, 
							{tag: "div", attrs: {class:"toolbar-item"}, children: ["Tomorrow, Oct 14"]}, 
							{tag: "div", attrs: {class:"toolbar-item"}, children: ["Sunday, Oct 16"]}, 
							{tag: "div", attrs: {class:"toolbar-item"}, children: ["Monday, Oct 17"]}, 
							{tag: "button", attrs: {class:"global-button toolbar-dateselect is-selected"}, children: ["More Dates"]}, 
							{tag: "button", attrs: {class:"global-button toolbar-filter"}, children: ["Filter Items"]}
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