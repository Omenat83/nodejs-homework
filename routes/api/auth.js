const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/authContr");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/userModel");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
