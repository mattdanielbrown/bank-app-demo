import {JetView, plugins} from "webix-jet";
import PersonsView from "views/persons";

export default class CustomersView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			type:"wide",
			cols:[
				{
					rows:[
						{
							view:"tabbar", localId:"tabbar",
							borderless:false, height:43,
							options:[
								{ id:"information", value:_("Information"), width:150 },
								{ id:"paymenthistory", value:_("Payment History"), width:150 },
								{ id:"statistics", value:_("Statistics"), width:150 }
								
							]
						},
						{ $subview:true }
					]
				},
				PersonsView
			]
		};
	}
	init(){
		this.use(plugins.Menu,this.$$("tabbar"));
	}
}