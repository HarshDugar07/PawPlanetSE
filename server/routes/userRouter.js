import express from "express";
import {
  addNewAdmin,
  getUserDetails,
  login,
  // logoutAdmin,
  // logoutuser,
  userRegister,
} from "../controllers/userController.js";
import {
  isAdminAuthenticated,
  isUserAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// router.get("/doctors", getAllDoctors);
router.get("/user/me", isUserAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/user/logout", isuserAuthenticated, logoutuser);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;