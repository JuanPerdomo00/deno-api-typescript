import { Router } from "npm:express";
import {
  actualizarTarea,
  borrarTarea,
  crearTarea,
  initApi,
  verTarea,
  verTareas,
} from "../controllers/tastController.ts";

const router = Router();

router.get("/api/tareas/:id", verTarea);
router.put("/api/tareas/:id", actualizarTarea);
router.delete("/api/tareas/:id", borrarTarea);
router.get("/api", initApi);
router.get("/api/tareas", verTareas);
router.post("/api/tareas", crearTarea);

export default router;
