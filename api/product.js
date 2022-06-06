const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.render("vista.ejs");
  } catch (error) {
    console.error(error);
    return res.status(500).render("vista.ejs");
  }
});

module.exports = router;
