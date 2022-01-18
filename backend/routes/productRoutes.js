import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  deleteProduct,
} from '../controllers/productController'
import { protect, admin } from '../middleware/authMiddleware'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
