const { list, read, create, update, remove } = require('../controllers/category');
const router = require('express').Router();

router.get("/", list)
router.get("/:id", read)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", remove)

module.exports = router