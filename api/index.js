const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Conexion de la base de datos con mi back-end
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
