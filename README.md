### Dispensa Virtual (Virtual Pantry)

#### Stack:
- **Frontend:** React Native (Expo)
- **Backend:** NestJS (API), Nodejs (microservices)
- **Database:** SQLite (local), PostgreSQL (cloud).
- **Sync Engine:** PowerSync

#### Minimum Viable Product:
The main idea is create an app focused on pantry management. The user will input all his groceries, with their respective expirations dates, where the item was purchased and it's price. The system will:
- Keep a record of where the products were bought, their cost, and where they are stored;
- Warn the user when a product is about to expire;
- Give insights about prices.

With a possibility of a Cloud functionality for syncing a pantry withing a household (multiple users accessing the same pantry).

### Development
##### Running Postgres and pgAdmin:
```
docker compose up -d
```
pgAdmin's interface is at http://127.0.0.1:8080/

**Closing docker containers:**
```
docker compose down
```