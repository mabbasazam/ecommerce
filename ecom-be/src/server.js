const app = require("./index");
const { connectToDatabase } = require("./config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on http://localhost:${PORT}`);
});
