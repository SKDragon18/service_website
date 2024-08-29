import frappe


def get_context(context):
	Service = frappe.qb.DocType("Service")

	query = (
		frappe.qb.from_(Service)
		.select(
			Service.route,
			Service.service_name,
			Service.image,
			Service.owner,
   			Service.price
		)
		.orderby(Service.service_name)
	)

	context.services = query.run(as_dict=True)
	# services = frappe.db.get_list('Parent Doc')
	# context.services = services
	# frappe.db.sql(f"""
    #                      SELECT *
    #                      FROM `tabService`;
    #                      """, as_dict = True)
    