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
			"hi"
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