# Copyright (c) 2024, trangialong and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ServiceRegistration(Document):
    def before_save(self):frappe.msgprint('Bắt đầu lưu dữ liệu')
