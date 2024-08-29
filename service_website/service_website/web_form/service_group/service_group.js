frappe.ready(function() {
	frappe.msgprint('Please fill all values carefully');
	let current_user = frappe.session.user;
	frappe.web_form.set_value('creator', current_user);
	frappe.realtime.on('document_saved', function(data) {
		frappe.msgprint(`Document ${data.name} of type ${data.doctype} was saved!`);
	});
})