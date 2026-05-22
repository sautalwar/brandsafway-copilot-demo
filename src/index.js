const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Safety inspection tracker API listening on port ${port}`);
});
