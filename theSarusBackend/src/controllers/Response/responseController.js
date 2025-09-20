const User = require("../../models/User/userModel");
const Response = require("../../models/Response/responseModel");

// Add user response
const addResponseToUser = async (req, res) => {
  try {
    const { userId, examId, responses } = req.body;
    // responses = [{ questionId, selectedOption, timeTaken }]

    if (!userId || !examId || !responses || !responses.length) {
      return res.status(400).json({ status: "failed", message: "Invalid data" });
    }

    // Upsert response document for user+exam
    const responseData = await Response.findOneAndUpdate(
      { userId, examId },
      {
        $setOnInsert: { userId, examId, startedAt: new Date() },
        $push: { responses: { $each: responses } },
      },
      { upsert: true, new: true }
    ).lean();

    return res.status(201).json({ status: "success", data: responseData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Fetch user responses for an exam
const getUserResponse = async (req, res) => {
  try {
    const { userId, examId } = req.query;

    if (!userId || !examId) {
      return res.status(400).json({ status: "failed", message: "Missing parameters" });
    }

    const responseData = await ExamResponse.findOne({ userId, examId })
      .select("responses score submittedAt") // fetch only required fields
      .lean();

    return res.status(200).json({ status: "success", data: responseData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  addResponseToUser,
  getUserResponse,
};



/*

{
  "_id": "6501ff23c45d7890abcdef01",
  "examId": "6501aa23c45d7890abcdef12",       // reference to the Test
  "userId": "6501bb23c45d7890abcdef34",       // reference to the User
  "responses": [
    {
      "questionId": "6501cc23c45d7890abcdef56", // reference to the Question
      "selectedOption": "B",                   // user’s choice
      "timeTaken": 12                          // seconds spent on this question
    },
    {
      "questionId": "6501cc23c45d7890abcdef57",
      "selectedOption": "D",
      "timeTaken": 20
    }
  ],
  "startedAt": "2025-09-20T05:00:00.000Z",    // when the exam started
  "submittedAt": "2025-09-20T05:30:00.000Z",  // when the exam was submitted
  "score": 45,                                // precomputed score
  "createdAt": "2025-09-20T05:00:00.000Z",
  "updatedAt": "2025-09-20T05:30:00.000Z"
}

*/
