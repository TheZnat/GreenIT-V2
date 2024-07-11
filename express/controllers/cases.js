const DB = require("../data.json");
const path = require("path");
const fs = require("fs-extra");
const DATA_FILE = path.join(__dirname, "../data.json");

const filterFields = (data, fields) => {
  return data.map((item) => {
    let filteredItem = {};
    fields.forEach((field) => {
      if (item[field] !== undefined) {
        filteredItem[field] = item[field];
      }
    });
    return filteredItem;
  });
};

const reviews = async (req, res) => {
  const fields = ["author", "position", "textRev", "logoUrl"];
  const filteredData = filterFields(DB.infCompanies, fields);
  res.json(filteredData);
};

const postCase = async (req, res) => {
  const fields = [
    "active",
    "titlePost",
    "subtitlePost",
    "textPost",
    "photoText",
  ];
  const filteredData = filterFields(DB.infCompanies, fields);
  res.json(filteredData);
};

const active = async (req, res) => {
  for (let i = 0; i < DB.infCompanies.length; i++) {
    DB.infCompanies[i].active = false;
  }
  const id = parseInt(req.params.id, 10);
  try {
    const index = DB.infCompanies.findIndex((item) => item.id === id);
    if (index !== -1) {
      try {
        DB.infCompanies[index].active = true;
        fs.writeJson(DATA_FILE, DB, (err) => {
          if (err) return console.error(err);
        });
        res.status(500).json({ error: "Успешно изменени " });
      } catch (err) {
        console.error("Error writing to file:", err); // Исправлено здесь
        res.status(500).json({ error: "Ошибка при обновлении файла данных" });
      }
    } else {
      res.status(404).json({ error: "Запись не найдена" });
    }
  } catch (err) {
    console.error("Error processing request:", err); // Исправлено здесь
    res.status(500).json({ error: "Ошибка при обновлении файла данных" });
  }
};

module.exports = {
  reviews,
  postCase,
  active,
};
