const express = require("express");
const morgan = require("morgan");
const html = require("html-template-tag");
const { Client } = require("pg");
const client = new Client("postgres://localhost/dealers_choice");
client.connect();
const app = express();

app.get("/", async (req, res, next) => {
  try {
    const result = await client.query("SELECT * FROM companies");
    const companies = result.rows;

    const faang = html`
    <html>
      <head>
        <title>FAANG Companies</title>
      </head>
      <body>
        <h1>FAANG Companies</title>
        <div>${companies.map(
          (company) =>
            html`<div>
              <a href="/companies/${company.name}">${company.name}</a>
            </div>`
        )}
        </div>
      </body>
      </html>
    `;
    res.send(faang);
  } catch (err) {
    next(err);
  }
});

app.use("/companies/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    result = await client.query(`
SELECT ceo, name, revenue, number_of_employees FROM companies
WHERE companies.name = '${name}'
`);
    const chosenCompany = result.rows[0];
    const htmls = html`
    <html>
      <head>
        <title>FAANG Companies</title>
      </head>
      <body>
        <h1><a href='/'>MAIN</a></h1>
        <h1>COMPANY: ${chosenCompany.name}</title>
        <p></p>
        <div>
          CEO: ${chosenCompany.ceo}
        </div>
        <p>REVENUE: ${chosenCompany.revenue}</p>
        <p>NUMBER OF EMPLOYEES: ${chosenCompany.number_of_employees}</p>
      </body>
      </html>
    `;
    res.send(htmls);
  } catch (err) {
    next(err);
  }
});
const PORT = process.env.Port || 3000;
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
