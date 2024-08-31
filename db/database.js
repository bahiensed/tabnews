import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();
  await client.connect();
  const res = await client.query(queryObject);
  await client.end();
  return result;
}
