// models/Customer.js
const db = require("../config/db");

const Customer = {
  getAll: (callback) => {
    const query = `
    SELECT 
      c.id AS id,
      c.name AS name,
      c.email AS email,
      c.phone AS phone,
      CONCAT(c.address, ', ', c.country) AS address,
      c.level AS level,
      DATE_FORMAT(c.created_at, '%Y-%m-%d') AS joinDate,
      COUNT(t.id) AS totalOrders,
      IFNULL(SUM(t.total_amount), 0) AS totalSpent
    FROM customers c
    LEFT JOIN transactions t ON t.customer_id = c.id
    WHERE c.deleted_at IS NULL
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `;
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = `SELECT * FROM customers WHERE id = ? AND deleted_at IS NULL`;
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = `INSERT INTO customers (name, email, phone, address, provinsi, country, level) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [data.name, data.email, data.phone, data.address, data.provinsi, data.country, data.level];
    db.query(query, values, callback);
  },

  update: (id, data, callback) => {
    const query = `
      UPDATE customers SET name = ?, email = ?, phone = ?, address = ?, provinsi = ?, country = ?, level = ?
      WHERE id = ? AND deleted_at IS NULL
    `;
    const values = [data.name, data.email, data.phone, data.address, data.provinsi, data.country, data.level, id];
    db.query(query, values, callback);
  },

  softDelete: (id, callback) => {
    const query = `UPDATE customers SET deleted_at = NOW() WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = Customer;
