// Copyright (c) 2024, trangialong and contributors
// For license information, please see license.txt


function create_registration_service(values){
    frappe.call({
        method: 'frappe.client.insert',
        args: {
            doc: {
                doctype: 'Service Registration',
                user: values.username,
                service: values.service
            }
        },
        callback: function(response) {
            if (response.message) {
                frappe.msgprint(response.message);
            }
        }
    });
}
frappe.ui.form.on("Service", {
	refresh:function(frm) {
        frm.add_custom_button('Registration',()=>{
            let d = new frappe.ui.Dialog({
                title: 'Fill registration form',
                fields:[{
                    label:'Username',
                    fieldname:'username',
                    fieldtype:'Data',
                    reqd:1
                },
                {
                    label:'Service',
                    fieldname:'service',
                    fieldtype:'Link',
                    default:frm.doc.service_name,
                    read_only:1
                },
                {
                    label:'Price',
                    fieldname:'price',
                    fieldtype:'Currency',
                    default:frm.doc.price,
                    read_only:1
                }
                ],
                primary_action_label:"submit",
                primary_action(values){
                    create_registration_service(values);
                    d.hide();
                }
            })
            d.show();
        },'Register')
	},
    onload:function(frm){
    },
    before_save:function(frm){
        if(!frm.confirmation_shown){
            frappe.validated = false;
            frappe.confirm(
                'Are you sure you want to save this document?',
                function(){
                    frm.confirmation_shown = true;
                    frappe.validated = true;
                    frm.save();
                },
                function(){
                    frappe.msgprint('Save cancelled!')
                }
            );
        }
        frm.confirmation_shown = false;
        
    }
});
