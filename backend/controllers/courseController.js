const Course = require("../models/Course");

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
     const limit = parseInt(req.query.limit) || 0; // 0 means no limit
    const courses = await Course.find().limit(limit);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get a specific course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new course
exports.addCourse = async (req, res) => {
  const { title, description, instructor, rating, image } = req.body;
  try {
    const newCourse = new Course({ title, description, instructor, rating, image });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a course by ID
exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
