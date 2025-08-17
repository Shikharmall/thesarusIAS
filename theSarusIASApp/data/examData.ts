import type { ExamData } from "../types/exam"

export const examData: ExamData = {
  title: "SSC Combined Graduate Level Examination 2024",
  duration: 3600, // 60 minutes
  sections: [
    {
      id: 1,
      name: "General Intelligence & Reasoning",
      questions: [
        {
          id: 1,
          question:
            "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How will 'MACHINE' be written in that code?",
          options: ["ZNBJGMF", "ZNBJFMG", "ZNBGFMJ", "ZNBFJMG"],
        },
        {
          id: 2,
          question:
            "If '+' means '×', '×' means '−', '−' means '÷' and '÷' means '+', then what is the value of 15 + 3 − 5 × 2 ÷ 4?",
          options: ["7", "5", "9", "11"],
        },
        {
          id: 3,
          question: "Find the missing number in the series: 2, 6, 12, 20, 30, ?",
          options: ["40", "42", "44", "46"],
        },
        {
          id: 4,
          question: "Which of the following is the odd one out?",
          options: ["Triangle", "Square", "Rectangle", "Circle"],
        },
        {
          id: 5,
          question: "If FRIEND is coded as HUMJTK, then CANDLE will be coded as:",
          options: ["EDRIRL", "ECQOKF", "ECRPKF", "ECOQKF"],
        },
      ],
    },
    {
      id: 2,
      name: "General Awareness",
      questions: [
        {
          id: 6,
          question: "Who is known as the 'Father of the Indian Constitution'?",
          options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        },
        {
          id: 7,
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Venus", "Jupiter", "Mars", "Saturn"],
        },
        {
          id: 8,
          question: "The currency of Japan is:",
          options: ["Yuan", "Won", "Yen", "Ringgit"],
        },
        {
          id: 9,
          question: "Which is the longest river in the world?",
          options: ["Amazon", "Nile", "Ganges", "Mississippi"],
        },
        {
          id: 10,
          question: "The headquarters of UNESCO is located in:",
          options: ["New York", "Geneva", "Paris", "London"],
        },
      ],
    },
    {
      id: 3,
      name: "Quantitative Aptitude",
      questions: [
        {
          id: 11,
          question: "What is the value of (25% of 80) + (30% of 60)?",
          options: ["35", "38", "40", "42"],
        },
        {
          id: 12,
          question: "If the area of a circle is 154 cm², what is its radius? (Take π = 22/7)",
          options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        },
        {
          id: 13,
          question: "A train travels 360 km in 4 hours. What is its speed in km/hr?",
          options: ["80", "85", "90", "95"],
        },
        {
          id: 14,
          question: "The simple interest on ₹1000 for 2 years at 5% per annum is:",
          options: ["₹50", "₹100", "₹150", "₹200"],
        },
        {
          id: 15,
          question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
          options: ["30", "35", "36", "49"],
        },
      ],
    },
    {
      id: 4,
      name: "English Comprehension",
      questions: [
        {
          id: 16,
          question: "Choose the correct synonym for 'ABUNDANT':",
          options: ["Scarce", "Plentiful", "Limited", "Rare"],
        },
        {
          id: 17,
          question: "Identify the grammatically correct sentence:",
          options: [
            "He don't like coffee",
            "He doesn't likes coffee",
            "He doesn't like coffee",
            "He not like coffee",
          ],
        },
        {
          id: 18,
          question: "Choose the correct antonym for 'OPTIMISTIC':",
          options: ["Hopeful", "Positive", "Pessimistic", "Confident"],
        },
        {
          id: 19,
          question: "Fill in the blank: 'The meeting has been _____ to next week.'",
          options: ["postponed", "preponed", "advanced", "delayed"],
        },
        {
          id: 20,
          question: "Choose the correctly spelled word:",
          options: ["Occassion", "Occasion", "Ocasion", "Occassion"],
        },
      ],
    },
  ],
}
