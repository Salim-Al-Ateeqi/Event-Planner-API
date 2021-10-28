const Event = require("../../models/Event");
const EventSchema = require("../../models/Event");

exports.createEvent = async (req, res, next) => {
  try {
    const createdEvent = await EventSchema.create(req.body);
    return res.status(201).json(createdEvent);
  } catch (error) {
    next(error);
  }
};

exports.retrieveEvent = async (req, res, next) => {
  try {
    const events = await EventSchema.find();

    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.updateEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const event = await EventSchema.findByIdAndUpdate(
      { _id: eventId },
      req.body,
      { new: true, runValidators: true }
    );
    if (event) {
      return res.json(event);
    } else {
      next({
        status: 404,
        message: "Event not found.",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findByIdAndDelete({ _id: eventId });

    if (event) {
      return res.status(204).end();
    } else {
      next({
        status: 404,
        message: "Event not found.",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.eventDetail = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const events = await EventSchema.findById({ _id: eventId });

    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.fullEvent = async (req, res, next) => {
  try {
    let events = await EventSchema.find({
      $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
    });

    res.json(events);
  } catch (error) {
    next(error);
  }
};
