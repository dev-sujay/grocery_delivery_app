import {Store} from '../models/store.model.js';

// Create a new store
export const createStore = async (req, res) => {
    try {
        const newStore = new Store(req.body);
        const savedStore = await newStore.save();
        res.status(201).json(savedStore);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all stores
export const getAllStores = async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a store
export const updateStore = async (req, res) => {
    try {
        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedStore);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a store
export const deleteStore = async (req, res) => {
    try {
        await Store.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
