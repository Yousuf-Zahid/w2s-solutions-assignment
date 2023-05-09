import express from 'express';
import mongoose from 'mongoose';
import { customerSchema } from '../schema';
import { authenticate } from '../authenticate';

const router = express.Router();
const Customer = mongoose.model('Customer', customerSchema);

router.get('/customers', authenticate, async (req, res) => {
    try {
        // Get all customers
        const customers = await Customer.find();

        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/customers/:id', authenticate, async (req, res) => {
    try {
        // Get customer by ID
        const customer = await Customer.findById(req.params.id);
        
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/customers', authenticate, async (req, res) => {
    try {
        // Create customer
        const newCustomer = new Customer(req.body);
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.put('/customers/:id', authenticate, async (req, res) => {
    try {
        // Update customer by ID
        const customer = await Customer.findById(req.params.id);
        
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        customer.name = req.body.name;
        customer.email = req.body.email;
        customer.phone = req.body.phone;
        customer.address = req.body.address;

        await customer.save();
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.delete('/customers/:id', authenticate, async (req, res) => {
    try {
        //Delete customer by ID
        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        await customer.deleteOne();
        res.status(200).json({ message: 'Customer deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;