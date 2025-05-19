const db = require("../config/db");

const Transaction = {
  getAll: (callback) => {
    const query = `
      SELECT 
        t.id, t.transaction_date, c.name AS customer_name
      FROM 
        transactions t
      LEFT JOIN 
        customers c ON t.customer_id = c.id
      ORDER BY t.transaction_date DESC
    `;
    db.query(query, callback);
  },
};

module.exports = Transaction;
