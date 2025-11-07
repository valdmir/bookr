workspace "Book Management System" "A system to manage books, users, download for digital books, and track loans." {

    !identifiers hierarchical
    model {
        
       
        user = person "User" {
            description "A person using the system to manage books."
        }
        admin = person "Administrator" {
            description "Manages the system and users."
        }
        test = element "test" "Test Element" {
            description "Just a test element"
        }
        app = softwareSystem "Bookr Management Application" {
            description "User interface for managing books and users."
            frontendapp = container "ReactJS web applicaiton a" {
                description "Frontend interface for registration existing digital books, downloading digital books, and tracking loans"
            }
            service_app = container "API Backend Service" {
                description "Backend services exposing book and user operations."

            }
            auth_app = container "Keycloak" {
                description "Handles authentication and authorization."
                tags "Database"
            }
            db = container "Database Schema" {
                description "Persistent storage for books, users, and loans."
                tags "Database"
                book_schema = component "Book Schema" {
                    description "Manages book-related data and operations."
                    tags "DatabaseSchema"
                }
                user_schema = component "User Schema" {
                    description "Manages user-related data and operations."
                    tags "DatabaseSchema"
                }
                loan_schema = component "Loan Schema" {
                    description "Manages loan-related data and operations."
                    tags "DatabaseSchema"
                }
                book_condition_schema = component "Book Condition Schema" {
                    description "Manages book condition-related data and operations."
                    tags "DatabaseSchema"
                }
                tag_schema = component "Tag Schema" {
                    description "Manages tag-related data and operations."
                    tags "DatabaseSchema"
                }
                book_tag_schema = component "Book-Tag Schema" {
                    description "Manages the relationship between books and tags."
                    tags "DatabaseSchema"
                }
                reading_time_schema = component "Reading Time Schema" {
                    description "Manages reading time-related data and operations."
                    tags "DatabaseSchema"  
                }
            }
            
        }
        // -----SYSTEM CONTEXT DIAGRAM-----
        user -> app "Uses"
        user -> app.frontendapp "Uses, to digital books, download digital books, and track loans"
        user -> app.frontendapp "insert digital books"
        user -> app.frontendapp "Download digital books"
        user -> app.frontendapp "Track Loans"
        user -> app.frontendapp "Integrate reading time"
        // ---------CONTAINER DIAGRAM-----
        app.frontendapp -> app.service_app "Uses"
        app.frontendapp -> app.auth_app "Uses for authentication and authorization"
        app.service_app -> app.auth_app "Uses for authentication and authorization"
        admin -> app "Manages to create user and add digital books, add physical books"
        app.service_app -> app.db "Reads/Writes"
        // app.db.book_schema -> class_diagram
        // --------COMPONENT DIAGRAM (SERVICE APP)-----
        // book_component = component "Book Management Component" {
        //     description "Handles book-related operations." 
            
        // }
    
    }   

    views {
        systemContext app "SystemContext" {
            include *
            autolayout lr
            title "Bookr - System Context"
        }
        container app "BookrContainer" {
            include *
            autolayout lr
        }
        component app.service_app "ServiceAppComponent" {
            include *
            autolayout lr
        }
        component app.frontendapp "WebAppReactComponent" {
            include *
            autolayout lr
        }
        properties {
            "mermaid.url" "https://mermaid.ink"
            "mermaid.format" "svg"
            "plantuml.url" "http://plantuml.bivala.com"
        }

        component app.db "DatabaseComponent" {
            include *
            autolayout lr
        }
        image app.db.book_schema {
            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.user_schema {

            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.book_tag_schema {

            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.book_condition_schema {

            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.tag_schema {
            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.loan_schema {

            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }
        image app.db.reading_time_schema {
            plantuml diagrams/database_code/database.puml
            title "Class diagram for Component1"
        }

        theme default
        styles {
            element "Web Application" {
                shape webBrowser
                background "#1168bd"
                color "#ffffff"
            }
            element "Database" {
                shape cylinder
                // background "#ff0000"
                color "#ffffff"
            }
            element "DatabaseSchema" {
                shape folder
                background "#1168bd"
                color "#ffffff"
            }
            element "Component" {
                shape component
                background "#1168bd"
                color "#ffffff"
            }
        }
    }
    configuration {
        scope softwaresystem
    }
}
