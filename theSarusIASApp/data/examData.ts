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
        {
          id: 6,
          question: "If CAT is coded as DBU, then DOG will be coded as:",
          options: ["EPH", "EPI", "FQH", "FPI"],
        },
        {
          id: 7,
          question: "Find the missing number: 7, 14, 28, 56, ?",
          options: ["84", "100", "112", "120"],
        },
        {
          id: 8,
          question: "Which word does not belong to the group?",
          options: ["Apple", "Banana", "Orange", "Potato"],
        },
        {
          id: 9,
          question: "If CLOCK is coded as DMPDL, how is WATCH coded?",
          options: ["XBUJI", "XBVJI", "XBUKI", "XAUJI"],
        },
        {
          id: 10,
          question: "What comes next in the series: A, C, F, J, O, ?",
          options: ["S", "T", "U", "V"],
        },
        {
          id: 11,
          question: "If 12 × 12 = 144 and 23 × 23 = 529, then 34 × 34 = ?",
          options: ["1124", "1156", "1189", "1196"],
        },
        {
          id: 12,
          question: "Pointing to a man, a woman says, 'His mother is the only daughter of my father'. How is the man related to the woman?",
          options: ["Son", "Brother", "Nephew", "Cousin"],
        },
        {
          id: 13,
          question: "If A = 1, B = 2, C = 3, …, Z = 26, then the code for 'DOG' is:",
          options: ["26", "22", "24", "23"],
        },
        {
          id: 14,
          question: "Find the missing number: 1, 4, 9, 16, 25, ?",
          options: ["36", "30", "40", "49"],
        },
        {
          id: 15,
          question: "Which is the odd one out?",
          options: ["Pen", "Pencil", "Eraser", "Book"],
        },
        {
          id: 16,
          question: "If 3 × 4 = 25, 5 × 2 = 29, then 6 × 1 = ?",
          options: ["30", "31", "32", "33"],
        },
        {
          id: 17,
          question: "What comes next in the series: 5, 11, 17, 23, ?",
          options: ["29", "30", "31", "33"],
        },
        {
          id: 18,
          question: "If Delhi is coded as EFKMJ, then Mumbai will be coded as:",
          options: ["NVOJCB", "NVOJBD", "MVOJCB", "NUPJCB"],
        },
        {
          id: 19,
          question: "Which of the following is different?",
          options: ["Car", "Bus", "Train", "Road"],
        },
        {
          id: 20,
          question: "Find the odd one: 2, 4, 8, 16, 34",
          options: ["2", "4", "16", "34"],
        },
        {
          id: 21,
          question: "If LION is coded as MJPO, then TIGER is coded as:",
          options: ["UJHFS", "UJHFR", "UJIGS", "UJHGS"],
        },
        {
          id: 22,
          question: "Complete the series: 3, 9, 27, 81, ?",
          options: ["121", "243", "225", "256"],
        },
        {
          id: 23,
          question: "Find the missing letter: A, C, F, J, O, ?",
          options: ["S", "T", "U", "V"],
        },
        {
          id: 24,
          question: "If 8 + 2 = 36, 6 + 4 = 40, then 7 + 3 = ?",
          options: ["45", "46", "47", "50"],
        },
        {
          id: 25,
          question: "Which of the following does not belong to the group?",
          options: ["Paris", "London", "Tokyo", "River"],
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
