# 📦 Order Management System

A full-stack order management application built with **JavaScript** for handling customer orders, inventory, and order processing workflows.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Project Architecture](#%EF%B8%8F-project-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Backend Setup](#-backend-setup)
- [Frontend Setup](#-frontend-setup)
- [CRUD Operations](#-crud-operations)
- [Testing](#-testing)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Project Overview

The Order Management System is designed to streamline order processing and inventory management with an intuitive interface and robust backend infrastructure.

### Key Features

- ✅ Create, Read, Update, and Delete (CRUD) orders
- ✅ Real-time order tracking
- ✅ Product inventory management
- ✅ Order status and history tracking
- ✅ Customer profile management
- ✅ Order status notifications
- ✅ RESTful API architecture
- ✅ Responsive and user-friendly UI
- ✅ Order reports and analytics

---

## 🏗️ Project Architecture

### System Overview

```
┌─────────────────────────────────────────┐
│         Frontend (React/HTML)            │
│     - User Interface                     │
│     - Order Forms                        │
│     - Dashboard & Analytics              │
└────────────────┬────────────────────────┘
                 │
                 │ HTTP/REST API
                 │
┌────────────────▼────────────────────────┐
│    Backend (Node.js/Express)             │
│  - API Routes & Controllers              │
│  - Business Logic                        │
│  - Authentication & Authorization        │
└────────────────┬────────────────���───────┘
                 │
                 │ Database Queries
                 │
┌──────────────��─▼────────────────────────┐
│      Database (MongoDB/SQL)              │
│  - Orders Collection                     │
│  - Products Collection                   │
│  - Customers Collection                  │
└─────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Client-side logic and interactivity

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JavaScript (ES6+)** - Server-side logic

### Database
- **MongoDB** or **SQL Database** - Data persistence
- **Mongoose** (if using MongoDB) - ODM/Schema validation

### Tools & Libraries
- **npm** - Package manager
- **Postman** - API testing
- **Git** - Version control

### Language Composition
- JavaScript: 98.1%
- HTML: 1.7%
- CSS: 0.2%

---

## 📁 Project Structure

```
order-management/
│
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   └── environment.js
│   ├── controllers/
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── customerController.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── Customer.js
│   ├── routes/
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── customers.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── api.js
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── customers.js
│   ├── pages/
│   │   ├── dashboard.html
│   │   ├── orders.html
│   │   ├── products.html
│   │   └── customers.html
│   └── assets/
│       └── images/
│
├── README.md
├── .gitignore
└── package.json
```

---

## ⚙️ Backend Setup

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn
- MongoDB/SQL Database

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prasannakalyani/order-management.git
   cd order-management/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure `.env` file**
   ```env
   PORT=5000
   NODE_ENV=development
   DATABASE_URL=mongodb://localhost:27017/order-management
   JWT_SECRET=your_secret_key_here
   ```

5. **Start the backend server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`

### Available Backend Scripts
```bash
npm start          # Start the server in production mode
npm run dev        # Start the server in development mode with nodemon
npm test           # Run backend tests
npm run lint       # Run ESLint for code quality
```

---

## 🖥️ Frontend Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Live Server or any HTTP server

### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd order-management/frontend
   ```

2. **Install dependencies (if using build tools)**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   Or use Live Server:
   - Right-click on `index.html` → Open with Live Server

4. **Access the application**
   ```
   http://localhost:3000
   ```

### Frontend Features
- Responsive design (mobile, tablet, desktop)
- Real-time data updates
- Form validation
- Error handling and notifications

---

## 📝 CRUD Operations

### Orders

#### Create Order
```javascript
// POST /api/orders
const order = {
  customerId: "123",
  products: [
    { productId: "1", quantity: 2, price: 100 },
    { productId: "2", quantity: 1, price: 250 }
  ],
  status: "pending",
  totalAmount: 450
};
```

#### Read Orders
```javascript
// GET /api/orders
// GET /api/orders/:id
```

#### Update Order
```javascript
// PUT /api/orders/:id
const updatedOrder = {
  status: "shipped",
  trackingNumber: "TRK123456"
};
```

#### Delete Order
```javascript
// DELETE /api/orders/:id
```

### Products

#### Create Product
```javascript
// POST /api/products
const product = {
  name: "Product Name",
  description: "Product description",
  price: 99.99,
  stock: 100,
  category: "Electronics"
};
```

#### Read Products
```javascript
// GET /api/products
// GET /api/products/:id
```

#### Update Product
```javascript
// PUT /api/products/:id
const updatedProduct = {
  price: 89.99,
  stock: 150
};
```

#### Delete Product
```javascript
// DELETE /api/products/:id
```

### Customers

#### Create Customer
```javascript
// POST /api/customers
const customer = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  address: "123 Main St"
};
```

#### Read Customers
```javascript
// GET /api/customers
// GET /api/customers/:id
```

#### Update Customer
```javascript
// PUT /api/customers/:id
const updatedCustomer = {
  phone: "+0987654321",
  address: "456 Oak Ave"
};
```

#### Delete Customer
```javascript
// DELETE /api/customers/:id
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- orderController.test.js

# Watch mode for development
npm run test:watch
```

### Test Files Location
```
backend/
├── __tests__/
│   ├── controllers/
│   │   ├── orderController.test.js
│   │   ├── productController.test.js
│   │   └── customerController.test.js
│   ├── models/
│   │   ├── Order.test.js
│   │   ├── Product.test.js
│   │   └── Customer.test.js
│   └── routes/
│       ├── orders.test.js
│       └── products.test.js
```

### Testing Stack
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library
- **Sinon** - Mocking and spying

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Orders Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/orders` | Get all orders | ✅ |
| GET | `/orders/:id` | Get order by ID | ✅ |
| POST | `/orders` | Create new order | ✅ |
| PUT | `/orders/:id` | Update order | ✅ |
| DELETE | `/orders/:id` | Delete order | ✅ |

### Products Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | Get all products | ❌ |
| GET | `/products/:id` | Get product by ID | ❌ |
| POST | `/products` | Create new product | ✅ |
| PUT | `/products/:id` | Update product | ✅ |
| DELETE | `/products/:id` | Delete product | ✅ |

### Customers Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/customers` | Get all customers | ✅ |
| GET | `/customers/:id` | Get customer by ID | ✅ |
| POST | `/customers` | Create new customer | ✅ |
| PUT | `/customers/:id` | Update customer | ✅ |
| DELETE | `/customers/:id` | Delete customer | ✅ |

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |
| POST | `/auth/logout` | User logout |
| POST | `/auth/refresh` | Refresh JWT token |

### Sample API Requests

#### Create Order
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "customerId": "123",
    "products": [{"productId": "1", "quantity": 2}],
    "totalAmount": 450
  }'
```

#### Get Orders
```bash
curl -X GET http://localhost:5000/api/orders \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### Update Order
```bash
curl -X PUT http://localhost:5000/api/orders/ORDER_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"status": "shipped"}'
```

---

## 🔒 Security Features

- JWT (JSON Web Token) authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS (Cross-Origin Resource Sharing) configured
- Environment variable protection
- SQL injection prevention
- XSS (Cross-Site Scripting) protection

---

## 📊 Database Schema

### Orders Collection
```javascript
{
  _id: ObjectId,
  customerId: ObjectId,
  products: [
    {
      productId: ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  status: String, // "pending", "processing", "shipped", "delivered"
  totalAmount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Customers Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  address: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚀 Deployment

### Deploy Backend (Heroku)
```bash
heroku login
heroku create order-management-api
git push heroku main
```

### Deploy Frontend (Vercel/Netlify)
```bash
# Using Vercel
npm install -g vercel
vercel

# Using Netlify
netlify deploy --prod --dir=frontend
```

---

## 📖 Documentation

For more detailed documentation, see:
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Troubleshooting Guide](./docs/TROUBLESHOOTING.md)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Support

For support or questions, please contact:
- **GitHub**: [@Prasannakalyani](https://github.com/Prasannakalyani)
- **Email**: your-email@example.com
- **Issues**: [GitHub Issues](https://github.com/Prasannakalyani/order-management/issues)

---

## 🙏 Acknowledgments

- Node.js and Express.js communities
- MongoDB documentation
- All contributors and supporters

---

**Last Updated**: February 15, 2026

Happy ordering! 🎉
