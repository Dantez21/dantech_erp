import frappe
import os


@frappe.whitelist()
def download_animal_template(file_type="Excel"):
    """
    Returns the public URL of the requested template.
    """

    if file_type.lower() == "csv":
        filename = "Animal_Template.csv"
    else:
        filename = "Animal_Template.xlsx"

    file_path = frappe.get_app_path(
        "dantech_erp",
        "public",
        "templates",
        filename
    )

    if not os.path.exists(file_path):
        frappe.throw(f"Template file '{filename}' was not found.")

    return f"/assets/dantech_erp/templates/{filename}"
