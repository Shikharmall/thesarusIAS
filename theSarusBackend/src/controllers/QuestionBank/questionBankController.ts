const Question = require("../../models/Question/questionModel");

// ---------------- Add multiple questions at once ----------------
const addQuestionBank = async (req, res) => {
  try {
    const { questions } = req.body;

    if (!questions || !questions.length) {
      return res.status(400).json({ status: "failed", message: "Please add some questions" });
    }

    // Prepare documents
    const docs = questions.map((q) => ({
      question: q.question,
      options: [
        { label: q.option1, isCorrect: true },
        { label: q.option2 },
        { label: q.option3 },
        { label: q.option4 },
      ],
      difficulty: q.level,
      language: q.language,
    }));

    // Insert all at once (faster than looping save)
    await Question.insertMany(docs, { ordered: false }); // ordered:false allows partial insert if some fail

    return res.status(201).json({ status: "success", message: "Questions added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get all questions with filtering ----------------
const getQuestionBanks = async (req, res) => {
  try {
    const { language, difficulty } = req.query;
    const query = {};

    if (language && language !== "all") query.language = language;
    if (difficulty && difficulty !== "all") query.difficulty = difficulty;

    // Use lean() for performance
    const questionsData = await Question.find(query).lean();

    return res.status(200).json({ status: "success", data: questionsData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get a question by ID ----------------
const getQuestionBankByID = async (req, res) => {
  try {
    const { question_id } = req.query;

    const questionData = await Question.findById(question_id).lean();
    if (!questionData) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: questionData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update question by ID ----------------
const updateQuestionBank = async (req, res) => {
  try {
    const { question_id } = req.query;
    const { question, option1, option2, option3, option4, level, language } = req.body;

    const updated = await Question.findByIdAndUpdate(
      question_id,
      {
        $set: {
          question,
          options: [
            { label: option1, isCorrect: true },
            { label: option2 },
            { label: option3 },
            { label: option4 },
          ],
          difficulty: level,
          language,
        },
      },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  addQuestionBank,
  getQuestionBanks,
  getQuestionBankByID,
  updateQuestionBank,
};
