frappe.listview_settings["Animal Record"] = {

    onload(listview) {

        // ----------------------------
        // Animals in Stock Counter
        // ----------------------------

        frappe.call({
            method: "frappe.client.get_count",
            args: {
                doctype: "Animal Record",
                filters: {
                    status: "Active"
                }
            },
            callback: function(r) {

                listview.page.set_secondary_action(
                    `🐄 Animals in Stock: ${r.message}`,
                    function() {}
                );

            }
        });

        // ----------------------------
        // Bulk Upload
        // ----------------------------

        listview.page.add_menu_item(__('Bulk Upload'), function () {

            frappe.new_doc("Data Import", {
                reference_doctype: "Animal Record",
                import_type: "Insert New Records"
            });

        });

        // ----------------------------
        // Download Template
        // ----------------------------

        listview.page.add_menu_item(__('Download Template'), function () {

            let dialog = new frappe.ui.Dialog({
                title: __('Download Bulk Upload Template'),

                fields: [
                    {
                        fieldname: "file_type",
                        label: "File Type",
                        fieldtype: "Select",
                        options: "CSV\nExcel",
                        default: "Excel"
                    }
                ],

                primary_action_label: "Download",

                primary_action(values) {

                    frappe.call({
                        method: "dantech_erp.api.download_animal_template",
                        args: {
                            file_type: values.file_type
                        },
                        callback(r) {

                            if (r.message) {
                                window.open(r.message);
                            }

                        }
                    });

                    dialog.hide();

                }

            });

            dialog.show();

        });

        // ----------------------------
        // Export Animals
        // ----------------------------

        listview.page.add_menu_item(__('Export Animals'), function () {

            frappe.set_route("query-report", "Data Export");

        });

    }

};
