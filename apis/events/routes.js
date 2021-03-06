const express = require("express");

const {
  createEvent,
  retrieveEvent,
  updateEvent,
  deleteEvent,
  eventDetail,
  fullEvent,
} = require("./controllers");

const router = express.Router();

router.post("/", createEvent);

router.get("/", retrieveEvent);

router.put("/:eventId", updateEvent);

router.delete("/:eventId", deleteEvent);

router.get("/full", fullEvent);

router.get("/:eventId", eventDetail);

module.exports = router;
