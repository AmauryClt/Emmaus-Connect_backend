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

const postPhone = (req, res) => {
  const { Phonename, Systemeexploitation, Marque, Ram, Memoire, Reseau, Ecran, Etatglobal, Etatecran, Capacitebatterie, Chargeur} = req.body;

  database
    .query(
      "INSERT INTO smartphone(Phonename, Systemeexploitation, Marque, Ram, Memoire, Reseau, Ecran, Etatglobal, Etatecran, Capacitebatterie, Chargeur) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [Phonename, Systemeexploitation, Marque, Ram, Memoire, Reseau, Ecran, Etatglobal, Etatecran, Capacitebatterie, Chargeur]
    )
    .then(([result]) => {
      res.location(`/api/phone/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the phone");
    });
};

module.exports = {
  getPhones,
  getPhoneById,
  postPhone,
};