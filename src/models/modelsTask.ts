import { Schema, model } from "npm:mongoose";

const tareasSchema = new Schema(
  {
    titulo: String,
    descripcion: String,
    completada: Boolean,
  },
  {
    timestamps: true,
  }
);

export default model("Tareas", tareasSchema);
