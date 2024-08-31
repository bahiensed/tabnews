test("GET /api/v1/status returns code 200", async () => {
  const res = await fetch(
    "https://cuddly-train-5pgrr6qrgr37vx4-3000.app.github.dev/api/v1/status",
  );
  expect(res.status).toBe(200);
});
