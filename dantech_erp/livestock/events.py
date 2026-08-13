import frappe


def update_animal_status(doc, method):
    """
    Runs after an Animal Slaughter Record is submitted.
    Updates the linked Animal Record status to Slaughtered.
    """

    if not doc.animal_id:
        return

    if frappe.db.exists("Animal Record", doc.animal_id):
        frappe.db.set_value(
            "Animal Record",
            doc.animal_id,
            "status",
            "Slaughtered"
        )

        frappe.msgprint(
            f"Animal {doc.animal_id} has been marked as Slaughtered."
        )