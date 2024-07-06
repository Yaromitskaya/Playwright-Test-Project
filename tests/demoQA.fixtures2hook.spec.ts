import { test as base, expect } from "@playwright/test";

let x;

type newFixture = {
  fixtureOne: any;
  fixtureTwo: any;
};

const test = base.extend<newFixture>({
  fixtureOne: async ({}, use) => {
    const fixtureOne = undefined;
    x = 1;
    await use(fixtureOne);
  },
  fixtureTwo: async ({}, use) => {
    const fixtureTwo = undefined;
    x = 2;
    await use(fixtureTwo);
  },
});

test.describe("Group 1", () => {
  //before each hook
  test.beforeEach(async ({ page }) => {
    x = 1;
  });

  test("Test 1", async ({ fixtureOne }) => {
    expect(x).toEqual(1);
  });
});
test.describe("Group 2", () => {
  //before each hook
  test.beforeEach(async ({ page }) => {
    x = 2;
  });

  test("Test 2", async ({ fixtureTwo }) => {
    expect(x).toEqual(2);
  });
});
