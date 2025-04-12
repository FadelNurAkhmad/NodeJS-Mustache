import Mustache from "mustache";
import fs from "fs/promises";

test("Mustache Sections Not Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);
  expect(data).not.toContain("Hello Person");
});

test("Mustache Sections Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Parjo",
    },
  });
  console.info(data);
  expect(data).toContain("Hello Person");
});

test("Sections Data", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Parjo",
    },
  });
  console.info(data);
  expect(data).toContain("Hello Person Parjo!");
});

test("Inverted Sections", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);
  expect(data).toContain("Hello Guest");
});
