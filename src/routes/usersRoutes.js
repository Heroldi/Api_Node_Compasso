import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/api/v1/users", UserController.listarUsers)
  .get("/api/v1/users/:id", UserController.listarUserPorId)
  .post("/api/v1/users", UserController.cadastrarUser)
  .put("/api/v1/users/:id", UserController.atualizarUser)
  .delete("/api/v1/users/:id", UserController.excluirUser)

export default router;   