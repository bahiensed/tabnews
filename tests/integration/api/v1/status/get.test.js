test("GET /api/v1/status returns code 200", async () => {
  const res = await fetch("https://sotabrasil.com.br/api/v1/status");
  expect(res.status).toBe(200);
});
