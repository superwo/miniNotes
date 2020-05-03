const express = require('express');
const router = express.Router();
const { adminMiddleware, requireSignin } = require('../controllers/auth');
const { create, list, read, remove } = require('../controllers/category');

const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');

router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

router.get('/categories', requireSignin, list);
router.get('/category/:slug', requireSignin, read);
router.delete('/category/:slug', requireSignin, remove);

module.exports = router;
