import Mustache from "mustache";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello {{name}}", { name: "Parjo" });
  // Hello Parjo
  expect(data).toBe("Hello Parjo");
});

// Mustache Cache
test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello {{name}}"); //  kompilasi semua template terlebih dahulu

  const data = Mustache.render("Hello {{name}}", { name: "Parjo" }); //  untuk merender template dan data
  // Hello Parjo
  expect(data).toBe("Hello Parjo");
});

test("Nested Object", () => {
  const data = Mustache.render("Hello {{person.name}}", {
    person: {
      name: "Parjo",
    },
  });
  // Hello Parjo
  expect(data).toBe("Hello Parjo");
});
