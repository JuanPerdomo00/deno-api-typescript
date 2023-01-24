import app from "./app.ts";
import "./database.ts";

const PORT = 9090;

app.listen(PORT, () => {
  console.log(`Servidor el el puerto: ${PORT}`);
});
