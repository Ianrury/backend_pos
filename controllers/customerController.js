const Customer = require("../models/customerModel");

// GET all customers
exports.getAllCustomers = (req, res) => {
  Customer.getAll((err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Failed to fetch customers",
        error: err.message,
      });
    }
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Customers fetched successfully",
      data: result,
    });
  });
};

// GET single customer
exports.getCustomerById = (req, res) => {
  Customer.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Failed to fetch customer",
        error: err.message,
      });
    }

    if (!result.length) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Customer fetched successfully",
      data: result[0],
    });
  });
};

// CREATE customer
exports.createCustomer = (req, res) => {
  Customer.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Failed to create customer",
        error: err.message,
      });
    }

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Customer created successfully",
      data: { id: result.insertId, ...req.body },
    });
  });
};

// UPDATE customer
exports.updateCustomer = (req, res) => {
  Customer.update(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Failed to update customer",
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "Customer not found or already deleted",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Customer updated successfully",
      data: { id: req.params.id, ...req.body },
    });
  });
};

// DELETE customer (soft delete)
exports.deleteCustomer = (req, res) => {
  Customer.softDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Failed to delete customer",
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Customer soft deleted successfully",
    });
  });
};
