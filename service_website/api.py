import frappe

@frappe.whitelist(allow_guest=True)
def service(property_type=None):
    Service = frappe.qb.DocType("Service")
    query = (
        frappe.qb.from_(Service)
        .select(
            Service.service_name,
            Service.image,
            Service.owner,
            Service.price
        )
        .orderby(Service.service_name)
    )

    return query.run(as_dict=True)
    # return frappe.db.sql(f"""
    #                      SELECT *
    #                      FROM `tabService`;
    #                      """, as_dict = True)