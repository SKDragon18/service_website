// Copyright (c) 2024, trangialong and contributors
// For license information, please see license.txt

frappe.ui.form.on("Service Registration", {

    onload:function(frm){
        if(frm.is_new()){
            //Load user
            frappe.call({
                method:'frappe.client.get',
                args:{
                    doctype:'User',
                    name:frappe.session.user
                },
                callback:function(response){
                    if(response.message){
                        let current_user = response.message;
                        frm.set_value('user',current_user.name)
                    }
                }
            })
        }
        
        frappe.call({
            method:'frappe.client.get',
            args:{
                doctype:'User',
                name:frappe.session.user
            },
            callback:function(response){
                if(response.message){
                    let roles = response.message.roles.map(role => role.role);
                    if(roles.includes('System Manager')){
                        frm.set_df_property('state','read_only',0);
                    }
                    else{
                        frm.set_df_property('state','read_only',1);
                    }
                }
            }
        })
    },
    service: function(frm){
        frappe.call({
            method:"frappe.client.get",
            args:{
                doctype:"Service",
                name:frm.doc.service,
            },
            callback:(r)=>{
                message = r.message
                if(message){
                    frm.set_value('service_name',message.service_name)
                    frm.set_value('registration_fee',message.price)
                    frm.set_value('description',message.description)
                    frm.set_value('group',message.group)
                }
            }
        })
    }
});
