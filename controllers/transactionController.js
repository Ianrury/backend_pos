const Transaction = require("../models/transactionModel");

const getAllTransactions = (req, res) => {
  Transaction.getAll((err, results) => {
    if (err) {
      console.error("Error fetching transactions:", err);
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Internal server error",
        data: null,
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Transactions fetched successfully",
      data: results,
    });
  });
};

module.exports = {
  getAllTransactions,
};
