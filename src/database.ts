import mongoose from "npm:mongoose";

try {
  const db = await mongoose.connect("mongodb://localhost/workdb");
  console.log(`base datos conectada ${db.connection.name}`);
} catch (err) {
  console.error(err);
}
