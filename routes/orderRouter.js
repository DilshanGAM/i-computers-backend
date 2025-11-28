import express from "express";
import { createOrder, getOrders, updateOrderStatus, validateOrderPayment } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders)
orderRouter.put("/:orderId", updateOrderStatus);
orderRouter.post("/validate", validateOrderPayment);

export default orderRouter;