# 🚀 Microservice `cards-priority-service`

## 📌 Description
This microservice allows **assigning priority levels to cards** in a task management system.
Users can update the priority of a card to `low`, `medium`, or `high` to manage task importance.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
cards-priority-service/
│── src/
│   ├── controllers/
│   │   ├── priorityController.js
│   ├── models/
│   │   ├── Card.js
│   ├── routes/
│   │   ├── priorityRoutes.js
│   ├── services/
│   │   ├── priorityService.js ✅ (Business logic for prioritization)
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Assign Priority to a Card**
```sh
curl -X PUT http://localhost:5012/priority -H "Content-Type: application/json" -d '{
  "card_id": 1,
  "priority": "high"
}'
```

### **2️⃣ Response Example**
```json
{
  "message": "Priority updated",
  "card": {
    "id": 1,
    "title": "Urgent Task",
    "priority": "high"
  }
}
```

