# Copyright (c) 2024, trangialong and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import math

class Service(Document):
	pass
    # def get_document(self):
    #     doc = frappe.get_doc('Service',self)
    #     frappe.msgprint(("The Service Name is {0}").format(doc.service_name))
    # def validate(self):
        
    #     if not self.service_name:
    #         frappe.throw("Service_name is required")
    # def time_taking_process(self):
    #     valurl = math.factorial(2000000)
    #     frappe.publish_realtime("msgprint","Time taking process completed", user = frappe.session.user)
    # def before_save(self):
    #     frappe.throw("Before_save")
    #     frappe.enqueue(
	# 		self.time_taking_process,
	# 		queue = 'short',
	# 		timeout=200,
	# 		is_async=True
	# 	)
    #     frappe.msgprint("Time taking process assigned to a queue", alert=True)