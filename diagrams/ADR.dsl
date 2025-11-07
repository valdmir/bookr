workspace "Book Management System" "A system to manage books, users, download for digital books, and track loans." {

    !identifiers hierarchical
    model {
        
       
        user = person "User" {
            description "A person use for manage his collection of books, and share to his/her friends, and track loans or reading time for himself"
        }
        app = softwareSystem "Bookr Management Application" {
            description "User interface for managing books and users."
            frontendapp = container "ReactJS web application" {
                description "Frontend interface for registration existing digital books, downloading digital books, and tracking loans"
            }
            mobileapp = container "Kotlin&Apple Android Application" {
                description "Mobile interface for registration offline books via ISBN scanning and tracking reading time, tracking loans, download"
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
        user -> app "create an account, create a list of book, track loans (loan to others) or reading time, and download digital books"
        user -> app.frontendapp "to register digital books manual insert or manual upload"
        user -> app.frontendapp "insert books without book format or condition"
        user -> app.frontendapp "Download digital books"
        user -> app.frontendapp "Track Loans"
        user -> app.frontendapp "Integrate reading time"
        user -> app.frontendapp "Create collection of books with tags"
        user -> app.frontendapp "Create Want to read collection"

        user -> app.mobileapp "to register physical books via ISBN scanning"
        user -> app.mobileapp "insert books downloaded digital books"
        user -> app.mobileapp "Download digital books"
        user -> app.mobileapp "Track Loans"
        user -> app.mobileapp "Integrate reading time"
        user -> app.mobileapp "Track reading time"
        user -> app.mobileapp "Can scan QR code of friends to loan books"


        // ---------CONTAINER DIAGRAM-----
        app.frontendapp -> app.service_app "Uses for API calls"
        app.mobileapp -> app.service_app "Uses for API calls"
        app.frontendapp -> app.auth_app "Uses for authentication and authorization"
        app.service_app -> app.auth_app "Uses for authentication and authorization"
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
            "plantuml.url" "http://localhost:7777"
        }          

        component app.db "DatabaseComponent" {
            include *
            autolayout lr
        }
        image app.db.book_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"
        }
        image app.db.user_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"    
        }
        image app.db.book_tag_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"  
        }
        image app.db.book_condition_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"  
        }
        image app.db.tag_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"  
        }
        image app.db.loan_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"  
        }
        image app.db.reading_time_schema {
            plantuml database_code/database.puml
            title "Class diagram for Schema"
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
