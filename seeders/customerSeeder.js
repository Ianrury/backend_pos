const db = require("../config/db");

const seedCustomers = () => {
  const customers = [
    {
      name: "Andi Waran",
      email: "andi@example.com",
      phone: "081234567890",
      address: "Jl. Merdeka No.1",
      provinsi: "Jawa Barat",
      country: "Indonesia",
      level: "waran",
    },
    {
      name: "Budi Juragan",
      email: "budi@example.com",
      phone: "081234567891",
      address: "Jl. Melati No.2",
      provinsi: "Jawa Tengah",
      country: "Indonesia",
      level: "juragan",
    },
    {
      name: "Citra Sultan",
      email: "citra@example.com",
      phone: "081234567892",
      address: "Jl. Mawar No.3",
      provinsi: "DKI Jakarta",
      country: "Indonesia",
      level: "sultan",
    },
    {
      name: "Dedi Konglomerat",
      email: "dedi@example.com",
      phone: "081234567893",
      address: "Jl. Anggrek No.4",
      provinsi: "Banten",
      country: "Indonesia",
      level: "konglomerat",
    },
  ];

  customers.forEach((customer) => {
    const query = `
      INSERT INTO customers (name, email, phone, address, provinsi, country, level)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [customer.name, customer.email, customer.phone, customer.address, customer.provinsi, customer.country, customer.level];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Gagal menambahkan customer:", err.message);
      } else {
        console.log("Customer berhasil ditambahkan:", customer.name);
      }
    });
  });
};

seedCustomers();
