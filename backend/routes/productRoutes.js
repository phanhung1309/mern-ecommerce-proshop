import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController'
import { protect, admin } from '../middleware/authMiddleware'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
