# Dantech ERP

A learning and portfolio project built with the **Frappe Framework** and **ERPNext**.

Dantech ERP is an experimental Enterprise Resource Planning platform developed to explore Frappe application development, ERPNext customization, business workflows, custom DocTypes, server-side Python, client-side JavaScript, automated testing, and Git/GitHub development workflows.

> **Project status:** Active learning and development  
> **Project type:** Frappe Framework custom application  
> **Repository:** https://github.com/Dantez21/dantech_erp

---

## Features

### Intercompany Order Management

Custom functionality for managing orders between companies.

The project currently includes:

- Intercompany Order DocType
- Intercompany Order Item child table
- Order details
- Approval workflow fields
- Delivery information
- Financial summary
- Custom server-side Python logic
- Client-side JavaScript customization
- Automated test structure

---

### Livestock Management

The project also contains a custom Livestock module developed while learning how to extend ERPNext for livestock and agricultural operations.

Current functionality includes:

- Livestock application module
- Animal Record customizations
- Animal list view customization
- JavaScript-based list filtering
- Livestock event handling

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Frappe Framework | Application framework |
| ERPNext | ERP platform |
| Python | Backend development |
| JavaScript | Client-side customization |
| MariaDB | Database |
| Redis | Caching and background jobs |
| Git | Version control |
| GitHub | Source-code hosting |
| GitHub Actions | Continuous Integration |
| Ruff | Python linting |
| ESLint | JavaScript linting |
| Prettier | Code formatting |
| PyUpgrade | Python modernization |
| Pre-commit | Development hooks |

---

## Project Structure

```text
dantech_erp/
│
├── dantech_erp/
│   ├── config/
│   ├── dantech_erp/
│   │   └── doctype/
│   │       ├── intercompany_order/
│   │       └── intercompany_order_item/
│   │
│   ├── livestock/
│   │   └── events.py
│   │
│   ├── public/
│   │   └── js/
│   │       └── animal_record_list.js
│   │
│   ├── api.py
│   ├── hooks.py
│   └── modules.txt
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── linter.yml
│
├── README.md
├── license.txt
└── pyproject.toml
