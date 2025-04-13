import Mustache from "mustache";

test("Functions", async () => {
  const parameter = {
    name: "Parjo",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  // function bernama render(template, data) di package mustache, kita bisa gunakan untuk merender template dan data
  const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
  console.info(data);
  expect(data).toBe("Hello PARJO");
});
