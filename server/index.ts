import * as express from "express";
import * as path from "path";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
