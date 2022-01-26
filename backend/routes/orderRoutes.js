import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController'
import { protect, admin } from '../middleware/authMiddleware'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
