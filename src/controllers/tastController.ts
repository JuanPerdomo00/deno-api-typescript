import { Request, Response } from "npm:express";
import Tareas from "../models/modelsTask.ts";

export const initApi = (_: Request, res: Response) => {
  res.json({
    message: "API TAREAS",
  });
};

export const verTareas = (_: Request, res: Response) => {
  // const tareas = await Tareas.find();
  // console.log(tareas);
  // return res.json(tareas);

  res.json({
    message: "API TAREAS desde el navegador",
  });
};

export const verTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const unaTarea = await Tareas.findById(id);
  if (!unaTarea) {
    return res.status(404).json({ message: "No hay tareas" });
  } else {
    return res.json(unaTarea);
  }
};

export const crearTarea = async (req: Request, res: Response) => {
  const nuevaTarea = new Tareas(req.body);
  await nuevaTarea.save();
  return res.json({
    message: "Tarea creada",
    nuevaTarea,
  });
};

export const actualizarTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const actualizarTarea = await Tareas.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!actualizarTarea) {
    return res.status(404).json({ message: "No tareas a actualizar" });
  }
  return res.json({
    message: "Tarea actualizada",
    actualizarTarea,
  });
};
export const borrarTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const borrarTarea = await Tareas.findByIdAndDelete(id);

  if (!borrarTarea) {
    return res.status(404).json({ message: "se borraron las tareas" });
  } else {
    return res.json({
      message: "Tarea Eliminada",
      borrarTarea,
    });
  }
};
