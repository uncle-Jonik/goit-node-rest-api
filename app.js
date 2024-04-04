// import express from "express";
// import morgan from "morgan";
// import cors from "cors";

// import contactsRouter from "./routes/contactsRouter.js";

// const app = express();

// app.use(morgan("tiny"));
// app.use(cors());
// app.use(express.json());

// app.use("/api/contacts", contactsRouter);

// app.use((_, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// app.listen(3000, () => {
//   console.log("Server is running. Use our API on port: 3000");
// });

import express from "express";
import cors from "cors";

import { router as contactsRouter } from "./routes/contactsRouter.js";

const app = express();

/**
 * middleware
 */
app.use(express.json());

/**
 * routes
 */
const pathPrefix = "/api";
app.use(`${pathPrefix}/contacts`, contactsRouter);

/**
 * server-init
 */
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running. Use our API on port: ${port}`);
});
