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
		return {tag: "header", attrs: {class:"global-header"}, children: [
				{tag: "div", attrs: {class:"grid-full mod-flex mod-space-between"}, children: [
					{tag: "a", attrs: {href:"#", class:"global-header-logo"}, children: [
						"PEASY", 
						{tag: "i", attrs: {class:"global-header-logo-icon fa fa-leaf"}}
					]}, 
					{tag: "div", attrs: {class:"global-header-cart"}, children: [
						{tag: "button", attrs: {class:"global-button global-header-cart-button"}, children: [
							{tag: "i", attrs: {class:"fa fa-shopping-cart"}}, 
							"  Your Cart", 
							{tag: "span", attrs: {class:"global-header-cart-summary"}, children: [
								"(2)"
							]}
						]}
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