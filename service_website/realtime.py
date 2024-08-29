import frappe

def notify_on_save(doc, method):
    # Ví dụ: Gửi một thông báo realtime khi document được lưu
    frappe.publish_realtime(
        event='document_saved',  # tên sự kiện
        message={'doctype': doc.doctype, 'name': doc.name},  # dữ liệu gửi kèm
        user=frappe.session.user  # chỉ gửi cho người dùng hiện tại
    )