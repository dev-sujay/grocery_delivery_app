import connectDB from './config/db.js'
import dotenv from 'dotenv'
import express from 'express'
import cartRoutes from './routes/cart.routes.js';
import categoryRoutes from './routes/category.routes.js';
import storeRoutes from './routes/store.routes.js';
import userRoutes from './routes/user.routes.js';
import orderRoutes from './routes/order.routes.js';
import deliveryRoutes from './routes/delivery.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import productRoutes from './routes/product.routes.js';

dotenv.config()

const app = express({
  logger: true
})


app.use(express.json())


// Routes
app.get('/', async (req, res) => {
  return res.send({ msg : 'server is running' })
})
// Use routes
app.use('/api/cart', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
} catch (error) {
    console.error('Server failed to start', error);
}
})