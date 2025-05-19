silahkan jalan kan dahulu npm run dev dan kemudian npm run dev

📦 BACKEND
📌 Fitur Backend
✅ CRUD Customer (GET, POST, PUT, DELETE)

🔗 Join dengan transactions untuk menampilkan data tambahan:

🧾 Total Orders (jumlah transaksi)

💰 Total Spent (total pengeluaran)

📅 Join Date (diambil dari created_at)

📍 Alamat lengkap (address, country)


| Method | Endpoint             | Deskripsi                              |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/api/customers`     | Ambil semua customer + total transaksi |
| POST   | `/api/customers`     | Tambah customer baru                   |
| PUT    | `/api/customers/:id` | Edit customer berdasarkan ID           |
| DELETE | `/api/customers/:id` | Hapus customer berdasarkan ID          |


[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@email.com",
    "phone": "+62 812-3456-7890",
    "address": "Jakarta, Indonesia",
    "level": "Premium",
    "joinDate": "2024-01-15",
    "totalOrders": 15,
    "totalSpent": 2500000
  }
]

