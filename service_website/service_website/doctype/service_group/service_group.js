// Copyright (c) 2024, trangialong and contributors
// For license information, please see license.txt

frappe.ui.form.on("Service Group", {
	refresh(frm) {

	},
    onload:function(frm){
        //Load user
        if(frm.is_new()){
            let current_user = frappe.session.user
            frm.set_value('creator',current_user)
        }
        
    },
});
