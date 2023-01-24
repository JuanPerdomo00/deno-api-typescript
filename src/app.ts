import express from "npm:express";
import routesTask from "./routes/task.routes.ts";

const app = express();

app.use(express.json());
app.use(routesTask);

export default app;
