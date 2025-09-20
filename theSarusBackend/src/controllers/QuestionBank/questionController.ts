import { Request, Response } from "express";
import mongoose from "mongoose";
import Question from "../../models/QuestionBank/questionModel";
import { AuthRequest } from "../../middleware/authMiddleware";
import { IQuestion } from "../../utils/types/questionBank";

const data = [
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following types of vehicles:</p>
<ol style="list-style-type: lower-roman;">
  <li>Full battery electric vehicles</li>
  <li>Hydrogen fuel cell vehicles</li>
  <li>Fuel cell electric hybrid vehicles</li>
</ol>
<p>How many of the above are considered as alternative powertrain vehicles?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) All the three</p>", isCorrect: true },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to Unmanned Aerial Vehicles (UAVs), consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>All types of UAVs can do vertical landing.</li>
  <li>All types of UAVs can do automated hovering.</li>
  <li>All types of UAVs can use battery only as a source of power supply.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: true },
      { label: "<p>(c) All the three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>In the context of electric vehicle batteries, consider the following elements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cobalt</li>
  <li>Graphite</li>
  <li>Lithium</li>
  <li>Nickel</li>
</ol>
<p>How many of the above usually make up battery cathodes?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) Only three</p>", isCorrect: true },
      { label: "<p>(d) All the four</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cigarette butts</li>
  <li>Eyeglass lenses</li>
  <li>Car tyres</li>
</ol>
<p>How many of them contain plastic?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) All the three</p>", isCorrect: true },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following substances:</p>
<ol style="list-style-type: upper-roman;">
  <li>Ethanol</li>
  <li>Nitroglycerine</li>
  <li>Urea</li>
</ol>
<p>Coal gasification technology can be used in the production of how many of them?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: true },
      { label: "<p>(c) All the three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>What is the common characteristic of the chemical substances generally known as CL-20, HMX and LLM-105, which are sometimes talked about in media?</p>`,
    options: [
      { label: "<p>(a) Alternatives to hydro-fluorocarbon refrigerants</p>", isCorrect: false },
      { label: "<p>(b) Explosives in military weapons</p>", isCorrect: true },
      { label: "<p>(c) High-energy fuels for cruise missiles</p>", isCorrect: false },
      { label: "<p>(d) Fuels for rocket propulsion</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is expected that Majorana 1 chip will enable quantum computing.</li>
  <li>Majorana 1 chip has been introduced by Amazon Web Services (AWS).</li>
  <li>Deep learning is a subset of machine learning.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: true },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to monoclonal antibodies, often mentioned in news, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>They are man-made proteins.</li>
  <li>They stimulate immunological function due to their ability to bind to specific antigens.</li>
  <li>They are used in treating viral infections like that of Nipah virus.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: true },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>No virus can survive in ocean waters.</li>
  <li>No virus can infect bacteria.</li>
  <li>No virus can change the cellular transcriptional activity in host cells.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: true },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) All the three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p><strong>Statement I:</strong> Activated carbon is a good and an attractive tool to remove pollutants from effluent streams and to remediate contaminants.</p>
<p><strong>Statement II:</strong> Activated carbon exhibits a large surface area and strong potential for adsorbing heavy metals.</p>
<p><strong>Statement III:</strong> Activated carbon can be synthesized from wastes with high carbon content.</p>
<p>Which one of the following is correct?</p>`,
    options: [
      { label: "<p>(a) II and III correct and both explain I</p>", isCorrect: true },
      { label: "<p>(b) II and III correct but only one explains I</p>", isCorrect: false },
      { label: "<p>(c) Only one of II or III is correct and explains I</p>", isCorrect: false },
      { label: "<p>(d) Neither II nor III correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Studies indicate that carbon dioxide emissions from cement industry account for more than 5% of global carbon emissions.</p>
<p><strong>Statement II:</strong> Silica-bearing clay is mixed with limestone while manufacturing cement.</p>
<p><strong>Statement III:</strong> Limestone is converted into lime during clinker production for cement manufacturing.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: true },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> At the 28th United Nations Climate Change Conference (COP28), India refrained from signing the 'Declaration on Climate and Health'.</p>
<p><strong>Statement II:</strong> The COP28 Declaration on Climate and Health is a binding declaration; and if signed, it becomes mandatory to decarbonize health sector.</p>
<p><strong>Statement III:</strong> If India's health sector is decarbonized, the resilience of its health-care system may be compromised.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: false },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Scientific studies suggest that a shift is taking place in the Earth's rotation and axis.</p>
<p><strong>Statement II:</strong> Solar flares and associated coronal mass ejections bombarded the Earth's outermost atmosphere with tremendous amount of energy.</p>
<p><strong>Statement III:</strong> As the Earth's polar ice melts, the water tends to move towards the equator.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: false },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: true },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Article 6 of the Paris Agreement on climate change is frequently discussed in global discussions on sustainable development and climate change.</p>
<p><strong>Statement II:</strong> Article 6 of the Paris Agreement on climate change sets out the principles of carbon markets.</p>
<p><strong>Statement III:</strong> Article 6 of the Paris Agreement on climate change intends to promote inter-country non-market strategies to reach their climate targets.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: false },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Which one of the following launched the 'Nature Solutions Finance Hub for Asia and the Pacific'?</p>`,
    options: [
      { label: "<p>(a) The Asian Development Bank (ADB)</p>", isCorrect: false },
      { label: "<p>(b) The Asian Infrastructure Investment Bank (AIIB)</p>", isCorrect: false },
      { label: "<p>(c) The New Development Bank (NDB)</p>", isCorrect: false },
      { label: "<p>(d) The International Bank for Reconstruction and Development (IBRD)</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to 'Direct Air Capture', an emerging technology, which of the following statements is/are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>It can be used as a way of carbon sequestration.</li>
  <li>It can be a valuable approach for plastic production and in food processing.</li>
  <li>In aviation, it can be a source of carbon for combining with hydrogen to create synthetic low-carbon fuel.</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) III only</p>", isCorrect: false },
      { label: "<p>(c) I, II and III</p>", isCorrect: false },
      { label: "<p>(d) None of the above statements is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Regarding Peacock tarantula (Gooty tarantula), consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is an omnivorous crustacean.</li>
  <li>Its natural habitat in India is only limited to some forest areas.</li>
  <li>In its natural habitat, it is an arboreal species.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) I and III</p>", isCorrect: false },
      { label: "<p>(c) II only</p>", isCorrect: true },
      { label: "<p>(d) II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Carbon dioxide (CO₂) emissions in India are less than 0.5 t CO₂ / capita.</li>
  <li>In terms of CO₂ emissions from fuel combustion, India ranks second in Asia-Pacific region.</li>
  <li>Electricity and heat producers are the largest sources of CO₂ emissions in India.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I and III only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) II and III only</p>", isCorrect: true },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<p><strong>Plant — Description</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>Cassava : Woody shrub</li>
  <li>Ginger : Herb with pseudostem</li>
  <li>Malabar spinach : Herbaceous climber</li>
  <li>Mint : Annual shrub</li>
  <li>Papaya : Woody shrub</li>
</ol>
<p>How many of the above pairs are correctly matched?</p>`,
    options: [
      { label: "<p>(a) Only two</p>", isCorrect: false },
      { label: "<p>(b) Only three</p>", isCorrect: true },
      { label: "<p>(c) Only four</p>", isCorrect: false },
      { label: "<p>(d) All the five</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to the planet Earth, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Rain forests produce more oxygen than that produced by oceans.</li>
  <li>Marine phytoplankton and photosynthetic bacteria produce about 50% of world's oxygen.</li>
  <li>Well-oxygenated surface water contains several folds higher oxygen than that in atmospheric air.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I and II</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) I and III</p>", isCorrect: true },
      { label: "<p>(d) None of the above statements is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements about Raja Ram Mohan Roy:</p>
<ol style="list-style-type: upper-roman;">
  <li>He possessed great love and respect for the traditional philosophical systems of the East.</li>
  <li>He desired his countrymen to accept the rational and scientific approach and the principle of human dignity and social equality of all men and women.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: true },
      { label: "<p>(c) Both I and II</p>", isCorrect: false },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following subjects with regard to the Non-Cooperation Programme:</p>
<ol style="list-style-type: upper-roman;">
  <li>Boycott of law-courts and foreign cloth</li>
  <li>Observance of strict non-violence</li>
  <li>Retention of titles and honours without using them in public</li>
  <li>Establishment of Panchayats for settling disputes</li>
</ol>
<p>How many of the above were parts of the Non-Cooperation Programme?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) Only three</p>", isCorrect: true },
      { label: "<p>(d) All the four</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>The irrigation device called 'Araghatta' was:</p>`,
    options: [
      { label: "<p>(a) a water bag made of leather pulled over a pulley</p>", isCorrect: true },
      { label: "<p>(b) a large wheel with earthen pots tied to the outer ends of its spokes</p>", isCorrect: false },
      { label: "<p>(c) a larger earthen pot driven by bullocks</p>", isCorrect: false },
      { label: "<p>(d) a large water bucket pulled up by rope directly by hand</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Who among the following rulers in ancient India had assumed the titles 'Mattavilasa', 'Vichitrachitta' and 'Gunabhara'?</p>`,
    options: [
      { label: "<p>(a) Mahendravarman I</p>", isCorrect: false },
      { label: "<p>(b) Simhavishnu</p>", isCorrect: false },
      { label: "<p>(c) Narasimhavarman I</p>", isCorrect: false },
      { label: "<p>(d) Simhavarman</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Fa-hien (Faxian), the Chinese pilgrim, travelled to India during the reign of:</p>`,
    options: [
      { label: "<p>(a) Samudragupta</p>", isCorrect: false },
      { label: "<p>(b) Chandragupta II</p>", isCorrect: false },
      { label: "<p>(c) Kumaragupta I</p>", isCorrect: false },
      { label: "<p>(d) Skandagupta</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Who among the following led a successful military campaign against the kingdom of Srivijaya, the powerful maritime State, which ruled the Malay Peninsula, Sumatra, Java and the neighbouring islands?</p>`,
    options: [
      { label: "<p>(a) Amoghavarsha (Rashtrakuta)</p>", isCorrect: false },
      { label: "<p>(b) Prataparudra (Kakatiya)</p>", isCorrect: false },
      { label: "<p>(c) Rajendra I (Chola)</p>", isCorrect: false },
      { label: "<p>(d) Vishnuvardhana (Hoysala)</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to ancient India (600-322 BC), consider the following pairs:</p>
<p><strong>Territorial Region — River Flowing in the Region</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>Asmaka — Godavari</li>
  <li>Kamboja — Vipas</li>
  <li>Avanti — Mahanadi</li>
  <li>Kosala — Sarayu</li>
</ol>
<p>How many of the pairs given above are correctly matched?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) Only three</p>", isCorrect: false },
      { label: "<p>(d) All the four</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>The first Gandharva Mahavidyalaya, a music training school, was set up in 1901 by Vishnu Digambar Paluskar in:</p>`,
    options: [
      { label: "<p>(a) Delhi</p>", isCorrect: true },
      { label: "<p>(b) Gwalior</p>", isCorrect: false },
      { label: "<p>(c) Ujjain</p>", isCorrect: false },
      { label: "<p>(d) Lahore</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Ashokan inscriptions suggest that the 'Pradeshika', 'Rajuka', and 'Yukta' were important officers at the:</p>`,
    options: [
      { label: "<p>(a) village-level administration</p>", isCorrect: true },
      { label: "<p>(b) district-level administration</p>", isCorrect: false },
      { label: "<p>(c) provincial administration</p>", isCorrect: false },
      { label: "<p>(d) level of the central administration</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements in respect of the Non-Cooperation Movement:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Congress declared the attainment of 'Swaraj' by all legitimate and peaceful means to be its objective.</li>
  <li>It was to be implemented in stages with civil disobedience and non-payment of taxes for the next stage only if 'Swaraj' did not come within a year and the Government resorted to repression.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: true },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: false },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to investments, consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>Bonds</li>
  <li>Hedge Funds</li>
  <li>Stocks</li>
  <li>Venture Capital</li>
</ol>
<p>How many of the above are treated as Alternative Investment Funds?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: true },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) Only three</p>", isCorrect: false },
      { label: "<p>(d) All the four</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Which of the following are the sources of income for the Reserve Bank of India?</p>
<ol style="list-style-type: upper-roman;">
  <li>Buying and selling Government bonds</li>
  <li>Buying and selling foreign currency</li>
  <li>Pension fund management</li>
  <li>Lending to private companies</li>
  <li>Printing and distributing currency notes</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II, III and IV</p>", isCorrect: false },
      { label: "<p>(c) I, III, IV and V</p>", isCorrect: true },
      { label: "<p>(d) I, II and V</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to the Government of India, consider the following information:</p>
<p><strong>Organization — Some of its functions — It works under</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>Directorate of Enforcement — Enforcement of the Fugitive Economic Offenders Act, 2018 — Internal Security Division-I, Ministry of Home Affairs</li>
  <li>Directorate of Revenue Intelligence — Enforces the Provisions of the Customs Act, 1962 — Department of Revenue, Ministry of Finance</li>
  <li>Directorate General of Systems and Data Management — Carrying out big data analytics to assist tax officers for better policy and nabbing tax evaders — Department of Revenue, Ministry of Finance</li>
</ol>
<p>In how many of the above rows is the information correctly matched?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: true },
      { label: "<p>(c) All the three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Reserve Bank of India mandates all the listed companies in India to submit a Business Responsibility and Sustainability Report (BRSR).</li>
  <li>In India, a company submitting a BRSR makes disclosure in the report that are largely non-financial in nature.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: true },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: false },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In India, income from allied agricultural activities like poultry farming is exempted from income tax.</p>
<p><strong>Statement II:</strong> Income from rural agricultural land is exempt from tax under the provisions of the Income-tax Act, 1961.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is incorrect</p>", isCorrect: true },
      { label: "<p>(d) Statement I is incorrect but Statement II is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>India has joined the Minerals Security Partnership as a member.</li>
  <li>India is a resource-rich country in all the 30 critical minerals that (It) has identified.</li>
  <li>The Parliament in 2023 has amended the Mines and Minerals (Development and Regulation) Act, 1957 empowering the Central Government to exclusively auction mining lease and composite license for certain critical minerals.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: true },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> As regards returns from an investment in a company, generally, bondholders are considered to be relatively at lower risk than stockholders.</p>
<p><strong>Statement II:</strong> Bondholders are lenders to a company whereas stockholders are its owners.</p>
<p><strong>Statement III:</strong> For repayment purpose, bondholders are prioritized over stockholders by a company.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct and Statement I explains Statement II</p>", isCorrect: false },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>India accounts for a very large portion of all equity option contracts traded globally thus exhibiting a great boom.</li>
  <li>India's stock market has grown rapidly in the recent past even overtaking Hong Kong's at some point of time.</li>
  <li>There is no regulatory body either to warn the small investors about the risks of options trading or to act on unregistered financial advisors in this regard.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: true },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Circular economy reduces the emissions of greenhouse gases.</p>
<p><strong>Statement II:</strong> Circular economy reduces the use of raw materials as inputs.</p>
<p><strong>Statement III:</strong> Circular economy reduces wastage in the production process.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: false },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Capital receipts create a liability or cause a reduction in the assets of the Government.</li>
  <li>Borrowings and disinvestment are capital receipts.</li>
  <li>Interest received on loans creates a liability of the Government.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: true },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following countries:</p>
<ol style="list-style-type: upper-roman;">
  <li>Austria</li>
  <li>Bulgaria</li>
  <li>Croatia</li>
  <li>Serbia</li>
  <li>Sweden</li>
  <li>North Macedonia</li>
</ol>
<p>How many of the above are members of the North Atlantic Treaty Organization?</p>`,
    options: [
      { label: "<p>(a) Only three</p>", isCorrect: true },
      { label: "<p>(b) Only four</p>", isCorrect: false },
      { label: "<p>(c) Only five</p>", isCorrect: false },
      { label: "<p>(d) All the six</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following countries:</p>
<ol style="list-style-type: upper-roman;">
  <li>Bolivia</li>
  <li>Brazil</li>
  <li>Colombia</li>
  <li>Ecuador</li>
  <li>Paraguay</li>
  <li>Venezuela</li>
</ol>
<p>Andes mountains pass through how many of the above countries?</p>`,
    options: [
      { label: "<p>(a) Only two</p>", isCorrect: false },
      { label: "<p>(b) Only three</p>", isCorrect: false },
      { label: "<p>(c) Only four</p>", isCorrect: true },
      { label: "<p>(d) Only five</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following water bodies:</p>
<ol style="list-style-type: upper-roman;">
  <li>Lake Tanganyika</li>
  <li>Lake Tonlé Sap</li>
  <li>Patos Lagoon</li>
</ol>
<p>Through how many of them does the equator pass?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: true },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) All the three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements about turmeric during the year 2022-23:</p>
<ol style="list-style-type: upper-roman;">
  <li>India is the largest producer and exporter of turmeric in the world.</li>
  <li>More than 30 varieties of turmeric are grown in India.</li>
  <li>Maharashtra, Telangana, Karnataka and Tamil Nadu are major turmeric producing States in India.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: true },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Which of the following are the evidences of the phenomenon of continental drift?</p>
<ol style="list-style-type: upper-roman;">
  <li>The belt of ancient rocks from Brazil coast matches with those from Western Africa.</li>
  <li>The gold deposits of Ghana are derived from the Brazil plateau when the two continents lay side by side.</li>
  <li>The Gondwana system of sediments from India is known to have its counterparts in six different landmasses of the Southern Hemisphere.</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "<p>(a) I and III only</p>", isCorrect: true },
      { label: "<p>(b) I and II only</p>", isCorrect: false },
      { label: "<p>(c) I, II and III</p>", isCorrect: false },
      { label: "<p>(d) II and III only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> The amount of dust particles in the atmosphere is more in subtropical and temperate areas than in equatorial and polar regions.</p>
<p><strong>Statement II:</strong> Subtropical and temperate areas have less dry winds.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II explains Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is not correct</p>", isCorrect: true },
      { label: "<p>(d) Statement I is not correct but Statement II is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In January, in the Northern Hemisphere, the isotherms bend equatorward while crossing the landmasses, and poleward while crossing the oceans.</p>
<p><strong>Statement II:</strong> In January, the air over the oceans is warmer than that over the landmasses in the Northern Hemisphere.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II explains Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is not correct</p>", isCorrect: true },
      { label: "<p>(d) Statement I is not correct but Statement II is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In the context of effect of water on rocks, chalk is known as a very permeable rock - whereas clay is known as quite an impermeable or least permeable rock.</p>
<p><strong>Statement II:</strong> Chalk is porous and hence can absorb water.</p>
<p><strong>Statement III:</strong> Clay is not at all porous.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement II and Statement III are correct and both of them explain Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement II and Statement III are correct but only one of them explains Statement I</p>", isCorrect: true },
      { label: "<p>(c) Only one of the Statements II and III is correct and that explains Statement I</p>", isCorrect: false },
      { label: "<p>(d) Neither Statement II nor Statement III is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Without the atmosphere, temperature would be well below freezing point everywhere on the Earth's surface.</li>
  <li>Heat absorbed and trapped by the atmosphere maintains our planet's average temperature.</li>
  <li>Atmosphere's gases, like carbon dioxide, are particularly good at absorbing and trapping radiation.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and III only</p>", isCorrect: false },
      { label: "<p>(b) I and II only</p>", isCorrect: true },
      { label: "<p>(c) I, II and III</p>", isCorrect: false },
      { label: "<p>(d) II and III only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements about the Rashtriya Gokul Mission:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is important for the upliftment of the rural poor as the majority of low-producing indigenous animals are with small and marginal farmers and landless labourers.</li>
  <li>It was initiated to promote indigenous cattle and buffalo rearing and conservation in a scientific and holistic manner.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: true },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Panchayats at the intermediate level exist in all States.</li>
  <li>To be eligible to be a Member of a Panchayat at the intermediate level, a person should attain the age of thirty years.</li>
  <li>The Chief Minister of a State constitutes a commission to review the financial position of Panchayats at the intermediate levels and to make recommendations regarding the distribution of net proceeds of taxes and duties, leviable by the State, between the State and Panchayats at the intermediate level.</li>
</ol>
<p>Which of the statements given above are not correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements in respect of BIMSTEC:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is a (regional) organization consisting of seven member States till January 2025.</li>
  <li>It came into existence with the signing of the Dhaka Declaration, 1999.</li>
  <li>Bangladesh, India, Sri Lanka, Thailand and Nepal are founding member States of BIMSTEC.</li>
  <li>In BIMSTEC, the subsector of 'tourism' is being led by India.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "a) I and II", isCorrect: false },
      { label: "<p>(b) II and III</p>", isCorrect: true },
      { label: "<p>(c) I and IV</p>", isCorrect: false },
      { label: "<p>(d) I only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Who amongst the following are members of the Jury to select the recipient of 'Gandhi Peace Prize'?</p>
<ol style="list-style-type: upper-roman;">
  <li>The President of India</li>
  <li>The Prime Minister of India</li>
  <li>The Chief Justice of India</li>
  <li>The Leader of Opposition in the Lok Sabha</li>
</ol>
<p>Select the correct answer using the code given below.</p>`,
    options: [
      { label: "<p>(a) II and IV only</p>", isCorrect: true },
      { label: "<p>(b) I, II and III</p>", isCorrect: false },
      { label: "<p>(c) II, III and IV</p>", isCorrect: false },
      { label: "<p>(d) I and III only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>GPS-Aided Geo Augmented Navigation (GAGAN) uses a system of ground stations to provide necessary augmentation. Which of the following statements is/are correct in respect of GAGAN?</p>
<ol style="list-style-type: upper-roman;">
  <li>It is designed to provide additional accuracy and integrity.</li>
  <li>It will allow more uniform and high-quality air traffic management.</li>
  <li>It will provide benefits only in aviation but not in other modes of transportation.</li>
</ol>`,
    options: [
      { label: "<p>(a) I, II and III</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: true },
      { label: "<p>(c) I only</p>", isCorrect: false },
      { label: "<p>(d) I and II only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements regarding AI Action Summit held in Grand Palais, Paris in February 2025:</p>
<ol style="list-style-type: upper-roman;">
  <li>Co-chaired with India, the event builds on the advances made at the Bletchley Park Summit held in 2023 and the Seoul Summit held in 2024.</li>
  <li>Along with other countries, US and UK also signed the declaration on inclusive and sustainable AI.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: true },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>International Year of the Woman Farmer : 2026</li>
  <li>International Year of Sustainable and Resilient Tourism : 2027</li>
  <li>International Year of Peace and Trust : 2025</li>
  <li>International Year of Asian Awareness and Planetary Defence : 2029</li>
</ol>
<p>How many of the pairs are correctly matched?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) Only three</p>", isCorrect: false },
      { label: "<p>(d) All the four</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements with regard to BRICS:</p>
<ol style="list-style-type: upper-roman;">
  <li>16th BRICS Summit was held under the Chairship of Russia in Kazan.</li>
  <li>Indonesia has become a full member of BRICS.</li>
  <li>The theme of the 16th BRICS Summit was Strengthening Multiculturalism for Just Global Development and Security.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II</p>", isCorrect: false },
      { label: "<p>(b) II and III</p>", isCorrect: false },
      { label: "<p>(c) I and III</p>", isCorrect: true },
      { label: "<p>(d) I only</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements about Lokpal:</p>
<ol style="list-style-type: upper-roman;">
  <li>The power of Lokpal applies to public servants of India, but not to the Indian public servants posted outside India.</li>
  <li>The Chairperson or a Member shall not be a Member of the Parliament or a Member of the Legislature of any State or Union Territory, and only the Chief Justice of India, whether incumbent or retired, has to be its Chairperson.</li>
  <li>The Chairperson or a Member shall not be a person of less than forty-five years of age on the date of assuming office as the Chairperson or Member, as the case may be.</li>
  <li>Lokpal cannot inquire into the allegations of corruption against a sitting Prime Minister of India.</li>
</ol>`,
    options: [
      { label: "<p>(a) III only</p>", isCorrect: false },
      { label: "<p>(b) II and III</p>", isCorrect: false },
      { label: "<p>(c) I and IV</p>", isCorrect: false },
      { label: "<p>(d) None of the above statements is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements in respect of the first Kho Kho World Cup:</p>
<ol style="list-style-type: upper-roman;">
  <li>The event was held in Delhi, India.</li>
  <li>Indian men beat Nepal with a score of 78-40 in the final to become the World Champion in men's category.</li>
  <li>Indian women beat Nepal with a score of 54-36 in the final to become the World Champion in women's category.</li>
</ol>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: true },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>In the finals of the 45th Chess Olympiad held in 2024, Gukesh Dommaraju became the world's youngest winner after defeating the Russian player Nepomniachtchi.</li>
  <li>Abhimanyu Mishra, an American chess player, holds the record of becoming the world's youngest ever Grandmaster.</li>
</ol>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: true },
      { label: "<p>(c) Both I and II</p>", isCorrect: false },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Some rare earth elements are used in the manufacture of flat television screens and computer monitors.</p>
<p><strong>Statement II:</strong> Some rare earth elements have phosphorescent properties.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II explains Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is not correct</p>", isCorrect: false },
      { label: "<p>(d) Statement I is not correct but Statement II is correct</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Indian Railways have prepared a National Rail Plan (NRP) to create a “future ready” railway system by 2028.</li>
  <li>“Kavach” is an Automatic Train Protection system developed in collaboration with Germany.</li>
  <li>The “Kavach” system consists of RFID tags fitted on the track in station sections.</li>
</ol>
<p>Which of the statements given above are not correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following space missions:</p>
<ol style="list-style-type: upper-roman;">
  <li>Axiom-4</li>
  <li>SpaDeX</li>
  <li>Gaganyaan</li>
</ol>
<p>How many of the space missions given above encourage and support micro-gravity research?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: false },
      { label: "<p>(b) Only two</p>", isCorrect: true },
      { label: "<p>(c) All three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to India's defence, consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Dornier-228 — Maritime patrol aircraft</li>
  <li>IL-76 — Supersonic combat aircraft</li>
  <li>C-17 Globemaster III — Military transport aircraft</li>
</ol>
<p>How many of the pairs given above are correctly matched?</p>`,
    options: [
      { label: "<p>(a) Only one</p>", isCorrect: true },
      { label: "<p>(b) Only two</p>", isCorrect: false },
      { label: "<p>(c) All three</p>", isCorrect: false },
      { label: "<p>(d) None</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Artificial way of causing rainfall to reduce air pollution makes use of:</p>`,
    options: [
      { label: "<p>(a) Silver iodide and potassium iodide</p>", isCorrect: false },
      { label: "<p>(b) Silver nitrate and potassium iodide</p>", isCorrect: true },
      { label: "<p>(c) Silver iodide and potassium nitrate</p>", isCorrect: false },
      { label: "<p>(d) Silver nitrate and potassium chloride</p>", isCorrect: false },
    ],
    solution: "",
  },

  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements with regard to pardoning power of the President of India:</p>
<ol style="list-style-type: upper-roman;">
  <li>The exercise of this power by the President can be subjected to limited judicial review.</li>
  <li>The President can exercise this power without the advice of the Central Government.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: true },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>On the dissolution of the House of the People, the Speaker shall not vacate his/her office until immediately before the first meeting of the House of the People after the dissolution.</li>
  <li>According to the provisions of the Constitution of India, a Member of the House of the People on being elected as Speaker shall resign from his/her political party immediately.</li>
  <li>The Speaker of the House of the People may be removed from his/her office by a resolution of the House of the People passed by a majority of all the then Members of the House, provided that no resolution shall be moved unless at least fourteen days' notice has been given of the intention to move the resolution.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: true },
      { label: "<p>(c) I and III only</p>", isCorrect: false },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>If any question arises as to whether a Member of the House of the People has become subject to disqualification under the 10th Schedule, the President's decision in accordance with the opinion of the Council of Union Ministers shall be final.</li>
  <li>There is no mention of the word 'political party' in the Constitution of India.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: true },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In India, State Governments have no power for making rules for grant of concessions in respect of extraction of minor minerals even though such minerals are located in their territories.</p>
<p><strong>Statement II:</strong> In India, the Central Government has the power to notify minor minerals under the relevant law.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II explains Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is not correct</p>", isCorrect: true },
      { label: "<p>(d) Statement I is not correct but Statement II is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Which organization has enacted the Nature Restoration Law (NRL) to tackle climate change and biodiversity loss?</p>`,
    options: [
      { label: "<p>(a) The European Union</p>", isCorrect: false },
      { label: "<p>(b) The World Bank</p>", isCorrect: false },
      { label: "<p>(c) The Organization for Economic Cooperation and Development</p>", isCorrect: false },
      { label: "<p>(d) The Food and Agriculture Organization</p>", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Suppose the revenue expenditure is ₹80,000 crores and the revenue receipts of the Government are ₹60,000 crores.</p>
<p>The Government budget also shows borrowings of ₹10,000 crores and interest payments of ₹6,000 crores.</p>
<p>Which of the following statements are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>Revenue deficit is ₹20,000 crores.</li>
  <li>Fiscal deficit is ₹10,000 crores.</li>
  <li>Primary deficit is ₹4,000 crores.</li>
</ol>`,
    options: [
      { label: "<p>(a) I and II only</p>", isCorrect: false },
      { label: "<p>(b) II and III only</p>", isCorrect: false },
      { label: "<p>(c) I and III only</p>", isCorrect: true },
      { label: "<p>(d) I, II and III</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>India is one of the founding members of the International North-South Transport Corridor (INSTC), a multimodal transportation corridor, which will connect:</p>`,
    options: [
      { label: "<p>(a) India to Central Asia to Europe via Iran</p>", isCorrect: true },
      { label: "<p>(b) India to Central Asia via China</p>", isCorrect: false },
      { label: "<p>(c) India to South-East Asia through Bangladesh and Myanmar</p>", isCorrect: false },
      { label: "<p>(d) India to Europe through Azerbaijan</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Of the two major ethanol producers in the world, i.e., Brazil and the United States of America, the former produces more ethanol than the latter.</p>
<p><strong>Statement II:</strong> Unlike in the United States of America where corn is the principal feedstock for ethanol production, sugarcane is the principal feedstock for ethanol production in Brazil.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "<p>(a) Both Statement I and Statement II are correct and Statement II explains Statement I</p>", isCorrect: false },
      { label: "<p>(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I</p>", isCorrect: false },
      { label: "<p>(c) Statement I is correct but Statement II is not correct</p>", isCorrect: true },
      { label: "<p>(d) Statement I is not correct but Statement II is correct</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>The World Bank warned that India could become one of the first places where wet-bulb temperatures routinely exceed 35°C. Which of the following statements best reflect(s) the implication of the above-said report?</p>
<ol style="list-style-type: upper-roman;">
  <li>Peninsular India will most likely suffer from flooding, tropical cyclones and droughts.</li>
  <li>The survival of animals including humans will be affected as shedding of their body heat through perspiration becomes difficult.</li>
</ol>`,
    options: [
      { label: "<p>(a) I only</p>", isCorrect: false },
      { label: "<p>(b) II only</p>", isCorrect: false },
      { label: "<p>(c) Both I and II</p>", isCorrect: true },
      { label: "<p>(d) Neither I nor II</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>A country's fiscal deficit stands at ₹50,000 crores. It is receiving ₹10,000 crores through non-debt creating capital receipts. The country's interest liabilities are ₹1,500 crores.</p>
<p>What is the gross primary deficit?</p>`,
    options: [
      { label: "<p>(a) ₹48,500 crores</p>", isCorrect: true },
      { label: "<p>(b) ₹51,500 crores</p>", isCorrect: false },
      { label: "<p>(c) ₹58,500 crores</p>", isCorrect: false },
      { label: "<p>(d) None of the above</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Which of the following statements with regard to recommendations of the 15th Finance Commission of India are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>It has recommended grants of ₹ 4,800 crores from the year 2022-23 to the year 2025-26 for incentivizing States to enhance educational outcomes.</li>
  <li>45% of the net proceeds of Union taxes are to be shared with States.</li>
  <li>₹ 45,000 crores are to be kept as performance-based incentive for all States for carrying out agricultural reforms.</li>
  <li>It reintroduced tax effort criteria to reward fiscal performance.</li>
</ol>`,
    options: [
      { label: "<p>(a) I, II and III</p>", isCorrect: true },
      { label: "<p>(b) I, II and IV</p>", isCorrect: false },
      { label: "<p>(c) I, III and IV</p>", isCorrect: false },
      { label: "<p>(d) II, III and IV</p>", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements in respect of the International Bank for Reconstruction and Development (IBRD):</p>
<ol style="list-style-type: upper-roman;">
  <li>It provides loans and guarantees to middle income countries.</li>
  <li>It works single-handedly to help developing countries to reduce poverty.</li>
  <li>It was established to help Europe rebuild after the World War II.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: true },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements in respect of RTGS and NEFT:</p>
<ol style="list-style-type: upper-roman;">
  <li>In RTGS, the settlement time is instantaneous while in case of NEFT, it takes some time to settle payments.</li>
  <li>In RTGS, the customer is charged for inward transactions while that is not the case for NEFT.</li>
  <li>Operating hours for RTGS are restricted on certain days while this is not true for NEFT.</li>
</ol>`,
    options: [
      { label: "I only", isCorrect: true },
      { label: "I and II", isCorrect: false },
      { label: "I and III", isCorrect: false },
      { label: "III only", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following countries:</p>
<ol style="list-style-type: upper-roman;">
  <li>United Arab Emirates</li>
  <li>France</li>
  <li>Germany</li>
  <li>Singapore</li>
  <li>Bangladesh</li>
</ol>
<p>How many countries amongst the above are there other than India where international merchant payments are accepted under UPI?</p>`,
    options: [
      { label: "Only two", isCorrect: false },
      { label: "Only three", isCorrect: true },
      { label: "Only four", isCorrect: false },
      { label: "All the five", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements about PM Surya Ghar Muft Bijli Yojana:</p>
<ol style="list-style-type: upper-roman;">
  <li>It targets installation of one crore solar rooftop panels in the residential sector.</li>
  <li>The Ministry of New and Renewable Energy aims to impart training on installation, operation, maintenance, and repairs of solar rooftop systems at grassroots levels.</li>
  <li>It aims to create more than three lakhs skilled manpower through fresh skilling, and up-skilling, under scheme component of capacity building.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "II and III only", isCorrect: true },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to the Indian polity, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>An Ordinance can amend any Central Act.</li>
  <li>An Ordinance can abridge a Fundamental Right.</li>
  <li>An Ordinance can come into effect from a back date.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Arunachal Pradesh - The capital is named after a fort, and the State has two National Parks</li>
  <li>Nagaland - The State came into existence on the basis of a Constitutional Amendment Act</li>
  <li>Tripura - Initially a Part 'C' State, it became a centrally administered territory with the reorganization of States in 1956 and later attained the status of a full-fledged State</li>
</ol>
<p>How many of the above pairs are correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: true },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to India, consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Inter-State Council</li>
  <li>The National Security Council</li>
  <li>Zonal Councils</li>
</ol>
<p>How many of the above were established as per the provisions of the Constitution of India?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: true },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Constitution of India explicitly mentions that in certain spheres the Governor of a State acts in his/her own discretion.</li>
  <li>The President of India can, of his/her own, reserve a bill passed by a State Legislature for his/her consideration without it being forwarded by the Governor of the State concerned.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Separation of Judiciary from the Executive in the public services of the State - The Directive Principles of the State Policy</li>
  <li>Valuing and preserving the rich heritage of our composite culture - The Fundamental Duties</li>
  <li>Prohibition of employment of children below the age of 14 years in factories - The Fundamental Rights</li>
</ol>
<p>How many of the above pairs are correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: true },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to the Constitution of India, if an area in a State is declared as Scheduled Area under the Fifth Schedule:</p>
<ol style="list-style-type: upper-roman;">
  <li>The State Government loses its executive power in such areas and a local body assumes total administration.</li>
  <li>The Union Government can take over the total administration of such areas under certain circumstances on the recommendations of the Governor.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: true },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to India, consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>The National Automotive Board - Ministry of Commerce and Industry</li>
  <li>The Coir Board - Ministry of Heavy Industries</li>
  <li>The National Centre for Trade Information - Ministry of Micro, Small and Medium Enterprises</li>
</ol>
<p>How many of the above pairs are correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: true },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following subjects under the Constitution of India:</p>
<ol style="list-style-type: upper-roman;">
  <li>List I - Union List, in the Seventh Schedule</li>
  <li>Extent of the executive power of a State</li>
  <li>Conditions of the Governor's office</li>
</ol>
<p>For a constitutional amendment with respect to which of the above, ratification by the Legislatures of not less than one-half of the States is required before presenting the bill to the President of India for assent?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: true },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>With reference to the Indian polity, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Governor of a State is not answerable to any court for the exercise and performance of the powers and duties of his/her office.</li>
  <li>No criminal proceedings shall be instituted or continued against the Governor during his/her term of office.</li>
  <li>Members of a State Legislature are not liable to any proceedings in any court in respect of anything said within the House.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: true },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following activities:</p>
<ol style="list-style-type: upper-roman;">
  <li>Production of crude oil</li>
  <li>Refining, storage and distribution of petroleum</li>
  <li>Marketing and sale of petroleum products</li>
  <li>Production of natural gas</li>
</ol>
<p>How many of the above activities are regulated by the Petroleum and Natural Gas Regulatory Board in our country?</p>`,
    options: [
      { label: "Only one", isCorrect: true },
      { label: "Only two", isCorrect: false },
      { label: "Only three", isCorrect: false },
      { label: "All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>“Sedition has become my religion” was the famous statement given by Gandhiji at the time of:</p>`,
    options: [
      { label: "the Champaran Satyagraha", isCorrect: false },
      { label: "publicly violating Salt Law at Dandi", isCorrect: false },
      { label: "attending the Second Round Table Conference in London", isCorrect: false },
      { label: "the launch of the Quit India Movement", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>The famous female figurine known as “Dancing Girl,” found at Mohenjo-daro, is made of:</p>`,
    options: [
      { label: "carnelian", isCorrect: true },
      { label: "clay", isCorrect: false },
      { label: "bronze", isCorrect: false },
      { label: "gold", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Who provided legal defence to the people arrested in the aftermath of Chauri Chaura incident?</p>`,
    options: [
      { label: "C. R. Das", isCorrect: false },
      { label: "Madan Mohan Malaviya and Krishna Kant", isCorrect: true },
      { label: "Dr. Saifuddin Kitchlew and Khwaja Hasan Nizami", isCorrect: false },
      { label: "M. A. Jinnah", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Subsequent to which one of the following events, Gandhiji, who consistently opposed untouchability and appealed for its eradication from all spheres, decided to include the upliftment of 'Harijans' in his political and social programme?</p>`,
    options: [
      { label: "The Poona Pact", isCorrect: true },
      { label: "The Gandhi-Irwin Agreement (Delhi Pact)", isCorrect: false },
      { label: "Arrest of Congress leadership at the time of the Quit India Movement", isCorrect: false },
      { label: "Promulgation of the Government of India Act, 1935", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following fruits:</p>
<ol style="list-style-type: upper-roman;">
  <li>Papaya</li>
  <li>Pineapple</li>
  <li>Guava</li>
</ol>
<p>How many of the above were introduced in India by the Portuguese in the sixteenth and seventeenth centuries?</p>`,
    options: [
      { label: "Only one", isCorrect: true },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following countries:</p>
<ol style="list-style-type: upper-roman;">
  <li>United Kingdom</li>
  <li>Denmark</li>
  <li>New Zealand</li>
  <li>Australia</li>
  <li>Brazil</li>
</ol>
<p>How many of the above countries have more than four time zones?</p>`,
    options: [
      { label: "All the five", isCorrect: false },
      { label: "Only four", isCorrect: true },
      { label: "Only three", isCorrect: false },
      { label: "Only two", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Anadyr in Siberia and Nome in Alaska are a few kilometers from each other, but when people are waking up and getting set for breakfast in these cities, it would be different days.</li>
  <li>When it is Monday in Anadyr, it is Tuesday in Nome.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: true },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Who among the following was the founder of the 'Self-Respect Movement'?</p>`,
    options: [
      { label: "'Periyar' E. V. Ramaswamy Naicker", isCorrect: false },
      { label: "Dr. B. R. Ambedkar", isCorrect: false },
      { label: "Bhaskarrao Jadhav", isCorrect: false },
      { label: "Dinkarrao Javalkar", isCorrect: true },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Botswana - Diamond</li>
  <li>Chile - Lithium</li>
  <li>Indonesia - Nickel</li>
</ol>
<p>In how many of the above rows is the given information correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: true },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    questionBank: "68ceaadf1fd521ecf27d45d0",
    difficulty: "easy",
    language: "english",
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Mallorca - Italy</li>
  <li>Normandy - Spain</li>
  <li>Sardinia - France</li>
</ol>
<p>In how many of the above rows is the given information correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: true },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
]

// ---------------- Add multiple questions ----------------
export const addQuestions = async (req: AuthRequest, res: Response) => {
  try {
    // const { questions } = req.body as { questions: IQuestion[] };

    const questions = data;

    if (!questions?.length) {
      return res.status(400).json({ status: "failed", message: "Please provide questions" });
    }

    const docs = questions.map((q) => ({
      questionBank: new mongoose.Types.ObjectId(q.questionBank),
      question: q.question,
      options: q.options,
      solution: q.solution,
      difficulty: q.difficulty,
      language: q.language,
    }));

    await Question.insertMany(docs, { ordered: false });

    return res.status(201).json({ status: "success", message: "Questions added successfully" });
  } catch (error: any) {
    console.error("Error adding questions:", error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get questions with optional filters ----------------
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { language, difficulty, questionBankId } = req.query as {
      language?: string;
      difficulty?: string;
      questionBankId?: string;
    };

    const query: Record<string, any> = {};
    if (language && language !== "all") query.language = language;
    if (difficulty && difficulty !== "all") query.difficulty = difficulty;
    if (questionBankId) query.questionBank = questionBankId;

    const questions = await Question.find(query).lean();
    return res.status(200).json({ status: "success", data: questions });
  } catch (error: any) {
    console.error("Error fetching questions:", error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get a single question by ID ----------------
export const getQuestionByID = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.params;

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const question = await Question.findById(question_id).lean();
    if (!question) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: question });
  } catch (error: any) {
    console.error("Error fetching question by ID:", error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update question by ID ----------------
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.params;
    const { question, options, difficulty, language } = req.body as Partial<IQuestion>;

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const updated = await Question.findByIdAndUpdate(
      question_id,
      { $set: { question, options, difficulty, language } },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: updated });
  } catch (error: any) {
    console.error("Error updating question:", error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};
