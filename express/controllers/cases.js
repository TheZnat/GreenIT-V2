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

/**
 * @swagger
 * /api/cases/reviews:
 *  get:
 *    summary: Fetch data for review
 *    description: fetch data details of a review
 *    tags:
 *     - Review
 *    responses:
 *       "200":
 *          description: review fetched successfully
 *       "400":
 *          description: Unable to fetched review
 */
const reviews = async (req, res) => {
  const fields = ["author", "position", "textRev", "logoUrl"];
  const filteredData = filterFields(DB.infCompanies, fields);
  res.json(filteredData);
};

/**
 * @swagger
 * /api/cases/postCase:
 *  get:
 *    summary: Fetch data for posts
 *    description: fetch data details of a posts
 *    tags:
 *     - Review
 *    responses:
 *       "200":
 *          description: posts fetched successfully
 *       "400":
 *          description: Unable to fetched posts
 */

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

/**
 * @swagger
 * /api/cases/active/{id}:
 *  post:
 *    summary: Fetch for  active post
 *    description: fetch change status of an id active post
 *    tags:
 *     - Review
 *    parameters:
 *    - in: path
 *      name: id
 *      type: integer
 *      required: true
 *      description: id active post
 *    responses:
 *       "200":
 *          description: change status posts fetched successfully
 *       "400":
 *          description: change status posts to fetched active
 */
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
        res.status(200).json({ message: 'POST запрос выполнен успешно'});
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
