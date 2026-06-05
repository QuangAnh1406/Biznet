# Biznet - B2B Platform Prototype

Một nền tảng B2B toàn diện cho 3 nhóm người dùng chính: Platform Owner, Association, và Open User.

## 🎯 Tính năng chính

### 1. Platform Owner (Chủ nền tảng)
- Dashboard quản trị toàn hệ thống
- Quản lý user & validation
- Quản lý help text
- Quản lý sản phẩm & dịch vụ
- Quản lý Marketplace & gói dịch vụ
- Tài chính & Doanh thu nền tảng
- Vận hành & Bảo cao hộ thông

### 2. Association (Hiệp hội)
- Quản lý hội viên (Org Admin, Reviewer, Group Leader, Member)
- Danh bạ & Tiếp kiếm hội viên
- Quản lý hội phí
- Cuộc họp & Thảo luận
- Thông báo nội bộ
- Sự kiện & Hội chợ
- Tài liệu nội bộ
- Kết nối & Community

### 3. Open User (Doanh nghiệp mở)
- Đăng ký & Hộ sơ doanh nghiệp
- B2B Marketplace (Hub)
- Gọi thầu công & Tự do
- Giao dịch & Tin nhắn
- Nâng cấp Premium
- Gia nhập Hiệp hội

## 🏗️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router

**Backend:**
- Node.js + Express
- PostgreSQL
- JWT Authentication
- RESTful API

**Infrastructure:**
- Docker & Docker Compose
- Environment configuration

## 📁 Cấu trúc thư mục

```
biznet/
├── frontend/          # React application
├── backend/           # Express server
├── database/          # PostgreSQL schemas
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🚀 Cách chạy

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose (optional)

### Setup

1. Clone repository
```bash
git clone https://github.com/QuangAnh1406/Biznet.git
cd Biznet
```

2. Setup backend
```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev
```

3. Setup frontend
```bash
cd frontend
npm install
npm start
```

4. Access application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📝 Demo Accounts

**Platform Owner:**
- Email: admin@biznet.com
- Password: Admin@123456

**Association Admin:**
- Email: assoc_admin@biznet.com
- Password: Admin@123456

**Open User:**
- Email: user@biznet.com
- Password: User@123456

## 🔐 Tính năng bảo mật

- SSO & 2FA
- JWT Token
- RBAC (Role-Based Access Control)
- KYC/Verification
- Audit Logs

## 📊 Tích hợp bên ngoài

- eGP (Công đấu thầu quốc gia)
- Payment Providers (VietQR, VNPay, Bank)
- Email/SMS Provider
- KYC Services
- Analytics

## 📞 Support

Liên hệ: support@biznet.com