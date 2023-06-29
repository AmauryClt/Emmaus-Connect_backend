const database = require("./database.js");

const getPhones = (req, res) => {
  database
    .query("select * from smartphone")
    .then(([smartphone]) => {
      res.json(smartphone);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getPhoneById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from smartphone where id = ?", [id])
    .then(([smartphone]) => {
      if (smartphone[0] != null) {
        res.json(smartphone[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getPhones,
  getPhoneById,
};