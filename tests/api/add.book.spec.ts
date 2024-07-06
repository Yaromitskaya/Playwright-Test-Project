import { test, expect } from "@playwright/test";

test("Adding book via API", async ({ request }) => {
  const login = await request.post("https://demoqa.com/Account/v1/Login", {
    data: {
      password: "5553750@Sh",
      userName: "Johnny8",
    },
  });

  const resp = await login.json();
  const token = resp.token;
  console.log(resp);

  // Add book

  const addBook = await request.post("https://demoqa.com/BookStore/v1/Books", {
    data: {
      userId: "50a7ffbe-3fa1-4208-8874-c50a1a770263",
      collectionOfIsbns: [
        {
          isbn: "9781593277574",
        },
      ],
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const resp1 = await addBook.json();
  const status1 = addBook.status();
  await expect(status1).toBe(201);
  await expect(resp1.books).toEqual([{ isbn: "9781593277574" }]);
  console.log(resp1, status1);

  // Get info about the book

  const getBook = await request.get("https://demoqa.com/BookStore/v1/Books", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const resp2 = await getBook.json();
  const status2 = getBook.status();

  await expect(status1).toBe(201);
  await expect(
    resp2.books.some((obj) => obj.isbn === "9781593277574")
  ).toBeTruthy();
  // await expect(resp2.books).toContain('9781593277574')
  console.log(status1);
});
