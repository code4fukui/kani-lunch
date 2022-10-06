import { CSV } from "https://js.sabae.cc/CSV.js";
const data = await CSV.fetchJSON("kani-lunch-echizen.csv");
data.forEach(d => {
  d.緯度 = d.緯度.trim();
  d.経度 = d.経度.trim();
});
await Deno.writeTextFile("test.csv", CSV.stringify(data));
