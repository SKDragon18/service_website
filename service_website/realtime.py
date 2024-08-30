import frappe
def service_saved(doc, method):
    frappe.msgprint('Service_update')
    data = {
        "name": doc.name
    }
    
    frappe.publish_realtime('service_update', message=data)
# import requests
# parent_path = 'http://mysite.localhost:8000/api/method/'
# def notify_on_save(doc, method):
#     # url = parent_path+"service_website.api.service"
#     # response = requests.get(url, headers={"Authorization": "token your-api-key"})
#     frappe.publish_realtime('event_name', message={'data': 'response'})
