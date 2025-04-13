import Mustache from "mustache";
import fs from "fs/promises";

test("Comment", async () => {
  const helloTemplate = await fs
    .readFile("./templates/comment.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Parjo",
  });
  console.info(data);
  expect(data).toContain("Parjo");
  expect(data).not.toContain("Ini Komentar");
});
