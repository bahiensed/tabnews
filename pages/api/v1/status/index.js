import database from "../../../../db/database.js";

function status(request, response) {
  response.status(200).json({ status: "OK" });
}

export default status;
