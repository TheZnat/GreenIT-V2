const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require('cors');
require("dotenv").config();

// const PORT = process.env.PORT

const app = express();
// url swagger: http://localhost:8000/api-docs
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GreenIt Express API with Swagger",
      version: "1.0.0",
      description: "Simple swagger documentation",
      servers: ["http://localhost:8000"],
    },
    schemes: ["http", "https"],
  },
  apis: ["./controllers/*.js"],
};

const swaggerDoc = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/api/cases", require("./routes/cases"));

// catch 404 and forward to error handler
// http://localhost:8000/api-docs/
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  // res.json({ error: err });
});



module.exports = app;
