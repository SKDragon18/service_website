const handle = (data)=>{
	frappe.call({
		method:"frappe.client.get",
		args:{
			doctype:"Service",
			name:data.value,
		},
		callback:(r)=>{
			message = r.message
			if(message){
				
				frappe.web_form.set_value('service_name',message.service_name)
				frappe.web_form.set_value('registration_fee',message.price)
				frappe.web_form.set_value('description',message.description)
				frappe.web_form.set_value('group',message.group)
			}
		}
	})
}
frappe.ready(function() {

	
	frappe.call({
		method:'frappe.client.get',
		args:{
			doctype:'User',
			name:frappe.session.user
		},
		callback:function(response){
			if(response.message){
				let current_user = response.message;
				console.log(current_user.name)
				frappe.web_form.set_value('user', current_user.name)
			}
		}
	})
	
	frappe.web_form.on('service', handle);
	
})