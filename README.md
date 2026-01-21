### Personal Finances Dashboard

#### Stack:
- **Frontend:** Angular 17+ (focusing on RxJS, Standalone Components and Interceptors).
- **Backend:** .NET 8 Web API (focusing on Entity Framework Core, LINQ, Dependency Injection).
- **Database:** PostgreSQL (focusing on Migrations, Indexes, Views).

#### Minimum Viable Product:
The main idea is create a dashboard for organizing personal finances. 
- **Input:** The user will input his monthly expenses, either manually or via CSV files.
- **Processing:** This data will be automatically categorized.
- **Output:** Different graphs and insights on the user's expenses.

#### Backend Architecture:
**Clean Architecture**
![Clean Architecture Diagram](clean_arch.png)
- Domain: Entities (classes representing the DB tables); Enums (fixed types); Interfaces: (what should be done)
- Application: Services; Data Transfer Objects; Validators
- Infrastructure:
- Presentation/API: Controllers (Endpoints); Middlewares; Configurations

Example: Storing a purchase:
- Frontend sends a POST to the API;
- Controller receives the JSON sent by the POST call, transforms it into a DTO, then calls a service in the Application layer. Transforming the JSON into a DTO provides the necessary security by filtering the JSON's content. It also allows the decoupling between the DB and the Frontend (if something changes in the DB, it won't break anything in the Frontend).
- Service validates the business rule (Business rules are logical rules inherent to the product, such as "Does this user has enough money for this purchase?")

A few examples of business rules pertinent to this project:
- Data Consistency: A transaction cannot be edited if it belongs to a monthly balance that's already closed.
- Data Propriety: A user cannot log an expense in a bank account belonging to a different user (that's also a technical/security issue).
- Categorization logics: User created logics.
- Budget Limitations: Checking for budget limitations when logging an expense.

#### Frontend Architecture:
As opposed to React, in Angular we divide the component's logic, template and styles into different files.

- Core: Global Services (Auth, API Wrapper)
- Features: Dashboard Module, Import Module, Config Module
- Shared: Repeating UI Components.