import Mustache from "mustache"; // Template engine untuk menggabungkan data ke dalam template HTML atau teks biasa.
import fs from "fs/promises"; // Versi promise-based dari fs (file system) bawaan Node.js, untuk membaca file secara asynchronous.

test("Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString()); // mengubah data buffer ke string

  const data = Mustache.render(helloTemplate, {
    title: "Programmer Zaman Old",
  });
  console.info(data);
  expect(data).toContain("Programmer Zaman Old");
});
