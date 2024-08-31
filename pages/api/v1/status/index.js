import database from "db/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;")
  console.log(result.rows);
  response.status(200).json({ status: "OK" });
}

export default status;
