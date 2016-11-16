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
		return <main className="app-main">
					<GlobalHeader />
					<ErrorBar />
					<ViewProducts cols={args.cols} products={args.products} />
					<ViewCheckout />
				</main>
		
	}
}

var ViewProducts = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return <main className="view-products is-visible"> 
					<IndexToolbar days={4} />
					<DateSelect days={7} />
					<ProductList cols={args.cols} products={args.products} />
				</main>
	}
}

var GlobalHeader = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return <header className="global-header">
				<div className="grid-full mod-flex mod-space-between">
					<a href = "#" className="global-header-logo">
						PEASY
						<i className="global-header-logo-icon fa fa-leaf"></i>
					</a>
					<div className="global-header-cart">
						<button className="global-button global-header-cart-button">
							<i className="fa fa-shopping-cart"></i>
							&nbsp; Your Cart
							<span className="global-header-cart-summary">
								(2)
							</span>
						</button>
					</div>
				</div>
			</header>
	}
}

var ErrorBar = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return 	<div className="error-bar">
				<div className="grid-full">
					<div className="error-bar-content">
						This is an error.
					</div>
					<button className="global-button error-bar-close">[close]</button>
				</div>
			</div>
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
			return (index == 0 ? <div className="toolbar-item is-selected"> { day } </div> : <div className="toolbar-item"> { day } </div>)
		});

		return <header className="toolbar">
					<div className="grid-full mod-flex mod-space-between">
							{ days }
							<button className="global-button toolbar-dateselect is-selected">More Dates</button>
							<button className="global-button toolbar-filter">Filter Items</button>
					</div>
				</header>
	}
}

var DateSelect = {
	controller: function() {
		return {
			listDates: function(num) {
				var view = [];
				for (var i = 0; i < num; i++) {
					view.push(<div className="dateselect-item">
								<div className="dateselect-item-day"> Day { i }</div>
								<div className="dateselect-item-date"> { i }</div>
							</div>);
				} 
				return view;
			
			}
		}
	},
	view: function(ctrl, args) {

 		return <div className="dateselect">
					<div className="grid-full mod-flex-column">
						<div className="dateselect-header">Select a Date</div>
							<div className="dateselect-items">	
								{ ctrl.listDates(args.days) }
							</div>
					</div>
				</div>
	}
}

var ProductList = {
	controller: function() {
			return {
				renderProductList: function(cols, prods) {
					var fillers = [];
					if (prods.length % cols != 0) {
						//if we don't have enough blocks to fill a row, add invisible blocks for correct flexbox alignment
						for (i = 0; i < prods.length % cols; i++) {
							fillers.push(
								<div className="product-list-item mod-filler"></div>);
						}
					}
					var list = prods.map(function(item){
						return 	<div className="product-list-item">
									<div className="product-list-item-image"></div>
									<div className="product-list-item-title">{item.name}</div>
									<div className="product-list-item-options">
										<div className="product-list-item-price">${item.price}</div>
										<div className="product-list-item-options-buttons">
											<button className="global-button product-list-item-button mod-remove">-</button>
											<button className="global-button product-list-item-button mod-add">+</button>
										</div>
									</div>
							</div>
								
					});

					return list.concat(fillers);
							
				}
			}
				
		},
		view: function(ctrl, args) {
			 
	 		return <main className="product-list">
							<div className="grid-full mod-flex mod-flex-wrap mod-space-between">
	 						{ ctrl.renderProductList(args.cols, args.products) }
	 						</div>
	 			</main>	
		}
	}
				

var ViewCheckout = {
	controller: function() {
		return
	},
	view: function(ctrl, args){
		return 
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

/*move to real data struc*/
var products = [
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},
	{name: "Noodled Zucchini", price: 3.75},

]

m.render(document.getElementById('app-main'), [
	<AppMain cols={4} products={products}/>
]);