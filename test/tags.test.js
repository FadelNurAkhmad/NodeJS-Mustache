import Mustache from "mustache";

test("Tags", () => {
  // Ingin menggunakan HTML maka pakai {{{}}}
  //  HTML di dalam data tags akan di escape {{}}
  const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
    name: "Parjo",
    hobby: "<b>Programming</b>",
  });
  // Hello Parjo
  expect(data).toBe("Hello Parjo, my hobby is <b>Programming</b>");
});
