
const employees = [
    {
        "id": 1,
        "first_name": "Rajesh",
        "email": "employee1@example.com",
        "password": "password123",
        "tasks": [
            {
                "task_title": "Prepare Monthly Report",
                "task_description": "Compile the monthly sales report for the management team.",
                "task_date": "2024-10-15",
                "category": "Reporting",
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true // Task marked as failed
            },
            {
                "task_title": "Client Meeting",
                "task_description": "Attend the quarterly meeting with Client A.",
                "task_date": "2024-10-20",
                "category": "Meetings",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Team Briefing",
                "task_description": "Give a project status update to the development team.",
                "task_date": "2024-10-22",
                "category": "Management",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ],
        "task_count": {
            "active": 2,
            "newtask": 1,
            "completed": 1,
            "failed": 1 // Update the failed count to 1
        }
    },
    {
        "id": 2,
        "first_name": "Suresh",
        "email": "employee2@example.com",
        "password": "password234",
        "tasks": [
            {
                "task_title": "Inventory Check",
                "task_description": "Verify stock levels in the warehouse.",
                "task_date": "2024-10-18",
                "category": "Inventory",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Update CRM System",
                "task_description": "Enter new client data into the CRM system.",
                "task_date": "2024-10-14",
                "category": "Data Entry",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Follow-up with Leads",
                "task_description": "Reach out to potential clients from last week's conference.",
                "task_date": "2024-10-19",
                "category": "Sales",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Team Meeting",
                "task_description": "Discuss upcoming targets with the sales team.",
                "task_date": "2024-10-25",
                "category": "Meetings",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            }
        ],
        "task_count": {
            "active": 2,
            "newtask": 3,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "first_name": "Ravi",
        "email": "employee3@example.com",
        "password": "password345",
        "tasks": [
            {
                "task_title": "System Maintenance",
                "task_description": "Run diagnostics on the server for performance check.",
                "task_date": "2024-10-13",
                "category": "IT",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Security Audit",
                "task_description": "Perform a security audit of the company's network.",
                "task_date": "2024-10-21",
                "category": "IT",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Backup Data",
                "task_description": "Schedule a backup of all critical company data.",
                "task_date": "2024-10-16",
                "category": "IT",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false // Add the failed attribute
            }
        ],
        "task_count": {
            "active": 2,
            "newtask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "first_name": "Vikram",
        "email": "employee4@example.com",
        "password": "password456",
        "tasks": [
            {
                "task_title": "Design Landing Page",
                "task_description": "Create a new landing page for the marketing campaign.",
                "task_date": "2024-10-18",
                "category": "Design",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Update Social Media",
                "task_description": "Post updates about the new product launch on social media channels.",
                "task_date": "2024-10-16",
                "category": "Marketing",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Prepare Design Proposals",
                "task_description": "Create 3 design proposals for the new client.",
                "task_date": "2024-10-20",
                "category": "Design",
                "active": false,
                "new_task": true,
                "completed": true,
                "failed": false // Add the failed attribute
            }
        ],
        "task_count": {
            "active": 2,
            "newtask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "first_name": "Priya",
        "email": "employee5@example.com",
        "password": "password567",
        "tasks": [
            {
                "task_title": "Market Research",
                "task_description": "Conduct research on competitors and market trends.",
                "task_date": "2024-10-19",
                "category": "Research",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Update Product Documentation",
                "task_description": "Revise product documentation to include the latest features.",
                "task_date": "2024-10-21",
                "category": "Documentation",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Plan Webinar",
                "task_description": "Organize a webinar to introduce the new software update to clients.",
                "task_date": "2024-10-24",
                "category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            },
            {
                "task_title": "Client Support",
                "task_description": "Assist Client B with their software implementation issues.",
                "task_date": "2024-10-23",
                "category": "Support",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false // Add the failed attribute
            }
        ],
        "task_count": {
            "active": 4,
            "newtask": 3,
            "completed": 0,
            "failed": 0
        }
    }
];



const admin = {
    "id": 1,
    "first_name":"Mohan Badiger",
    "email": "admin@example.com",
    "password": "adminpassword"
}

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}