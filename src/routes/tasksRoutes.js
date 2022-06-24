import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router
  .get("/api/v1/tasks", TaskController.listarTasks)
  .get("/api/v1/tasks/busca", TaskController.listarTaskPorUser)
  .get("/api/v1/tasks/:id", TaskController.listarTaskPorId)
  .post("/api/v1/tasks", TaskController.cadastrarTask)
  .put("/api/v1/tasks/:id", TaskController.atualizarTask)
  .delete("/api/v1/tasks/:id", TaskController.excluirTask)

export default router;   