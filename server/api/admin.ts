import express from "express";
import AdminUser from "../models/adminUser";

const router = express.Router();

router.get("/admin", (req, res) => {
  AdminUser.find()
    .then((buffer) => res.json(buffer))
    .catch((err) => {
      if (err) throw err;
    });
});

export default router;
