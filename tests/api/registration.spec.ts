import { test, request, expect } from "@playwright/test";

test("New user registration via API", async ({ request }) => {
  const req = await request.post("https://demoqa.com/Account/v1/User", {
    data: {
      password: "5553750@Sh",
      userName: "Johnny5",
    },
  });
  const resp = await req.json();
  const status = req.status();
  await expect(status).toBe(201);
  await expect(resp.username).toBe("Johnny5");
  console.log(resp, status);
});
