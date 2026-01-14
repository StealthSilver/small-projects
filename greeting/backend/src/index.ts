import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const app = express();

//middleware to remove cors error
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//middleware to parse the json
app.use(express.json());

app.get("/api/greet", (req: Request, res: Response) => {
  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) {
    greeting = "GOOD MORNING";
  } else if (hour >= 12 && hour < 18) {
    greeting = "GOOD AFTERNOON";
  } else {
    greeting = "GOOD EVENING";
  }

  res.json({ message: greeting });
});

app.listen(3000, () => {
  console.log("the app is listening on 3000");
});
