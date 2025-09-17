import type { ExamData, Question, Section } from "../utils/types/exam";

// eas build:configure
// eas build -p android --profile preview

/* UPSC GS 1 */

const questionsUPSCGS1: Question[] = [
  {
    id: 1,
    question: `<p>Consider the following types of vehicles:</p>
<ol style="list-style-type: lower-roman;">
  <li>Full battery electric vehicles</li>
  <li>Hydrogen fuel cell vehicles</li>
  <li>Fuel cell electric hybrid vehicles</li>
</ol>
<p>How many of the above are considered as alternative powertrain vehicles?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All the three", isCorrect: true },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 2,
    question: `<p>With reference to Unmanned Aerial Vehicles (UAVs), consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>All types of UAVs can do vertical landing.</li>
  <li>All types of UAVs can do automated hovering.</li>
  <li>All types of UAVs can use battery only as a source of power supply.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: true },
      { label: "(c) All the three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 3,
    question: `<p>In the context of electric vehicle batteries, consider the following elements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cobalt</li>
  <li>Graphite</li>
  <li>Lithium</li>
  <li>Nickel</li>
</ol>
<p>How many of the above usually make up battery cathodes?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) Only three", isCorrect: true },
      { label: "(d) All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 4,
    question: `<p>Consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cigarette butts</li>
  <li>Eyeglass lenses</li>
  <li>Car tyres</li>
</ol>
<p>How many of them contain plastic?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All the three", isCorrect: true },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 5,
    question: `<p>Consider the following substances:</p>
<ol style="list-style-type: upper-roman;">
  <li>Ethanol</li>
  <li>Nitroglycerine</li>
  <li>Urea</li>
</ol>
<p>Coal gasification technology can be used in the production of how many of them?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: true },
      { label: "(c) All the three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 6,
    question: `<p>What is the common characteristic of the chemical substances generally known as CL-20, HMX and LLM-105, which are sometimes talked about in media?</p>`,
    options: [
      { label: "(a) These are alternatives to hydro-fluorocarbon refrigerants", isCorrect: false },
      { label: "(b) These are explosives in military weapons", isCorrect: true },
      { label: "(c) These are high-energy fuels for cruise missiles", isCorrect: false },
      { label: "(d) These are fuels for rocket propulsion", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 7,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is expected that Majorana 1 chip will enable quantum computing.</li>
  <li>Majorana 1 chip has been introduced by Amazon Web Services (AWS).</li>
  <li>Deep learning is a subset of machine learning.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: true },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 8,
    question: `<p>With reference to monoclonal antibodies, often mentioned in news, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>They are man-made proteins.</li>
  <li>They stimulate immunological function due to their ability to bind to specific antigens.</li>
  <li>They are used in treating viral infections like that of Nipah virus.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: true },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 9,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>No virus can survive in ocean waters.</li>
  <li>No virus can infect bacteria.</li>
  <li>No virus can change the cellular transcriptional activity in host cells.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: true },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All the three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 10,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Activated carbon is a good and an attractive tool to remove pollutants from effluent streams and to remediate contaminants from various industries.</p>
<p><strong>Statement II:</strong> Activated carbon exhibits a large surface area and a strong potential for adsorbing heavy metals.</p>
<p><strong>Statement III:</strong> Activated carbon can be easily synthesized from environmental wastes with high carbon content.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: true },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 11,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Studies indicate that carbon dioxide emissions from cement industry account for more than 5% of global carbon emissions.</p>
<p><strong>Statement II:</strong> Silica-bearing clay is mixed with limestone while manufacturing cement.</p>
<p><strong>Statement III:</strong> Limestone is converted into lime during clinker production for cement manufacturing.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 12,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> At the 28th United Nations Climate Change Conference (COP28), India refrained from signing the ‘Declaration on Climate and Health’.</p>
<p><strong>Statement II:</strong> The COP28 Declaration on Climate and Health is a binding declaration; and if signed, it becomes mandatory to decarbonize health sector.</p>
<p><strong>Statement III:</strong> If India’s health sector is decarbonized, the resilience of its health-care system may be compromised.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 13,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Scientific studies suggest that a shift is taking place in the Earth’s rotation and axis.</p>
<p><strong>Statement II:</strong> Solar flares and associated coronal mass ejections bombarded the Earth’s outermost atmosphere with tremendous amount of energy.</p>
<p><strong>Statement III:</strong> As the Earth’s polar ice melts, the water tends to move towards the equator.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 14,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Article 6 of the Paris Agreement on climate change is frequently discussed in global discussions on sustainable development and climate change.</p>
<p><strong>Statement II:</strong> Article 6 of the Paris Agreement on climate change sets out the principles of carbon markets.</p>
<p><strong>Statement III:</strong> Article 6 of the Paris Agreement on climate change intends to promote inter-country non-market strategies to reach their climate targets.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 15,
    question: `<p>Which one of the following launched the ‘Nature Solutions Finance Hub for Asia and the Pacific’?</p>`,
    options: [
      { label: "(a) The Asian Development Bank (ADB)", isCorrect: false },
      { label: "(b) The Asian Infrastructure Investment Bank (AIIB)", isCorrect: false },
      { label: "(c) The New Development Bank (NDB)", isCorrect: false },
      { label: "(d) The International Bank for Reconstruction and Development (IBRD)", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 16,
    question: `<p>With reference to ‘Direct Air Capture’, an emerging technology, which of the following statements is/are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>It can be used as a way of carbon sequestration.</li>
  <li>It can be a valuable approach for plastic production and in food processing.</li>
  <li>In aviation, it can be a source of carbon for combining with hydrogen to create synthetic low-carbon fuel.</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) III only", isCorrect: false },
      { label: "(c) I, II and III", isCorrect: false },
      { label: "(d) None of the above statements is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 17,
    question: `<p>Regarding Peacock tarantula (Gooty tarantula), consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is an omnivorous crustacean.</li>
  <li>Its natural habitat in India is only limited to some forest areas.</li>
  <li>In its natural habitat, it is an arboreal species.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) I and III", isCorrect: false },
      { label: "(c) II only", isCorrect: false },
      { label: "(d) II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 18,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Carbon dioxide (CO₂) emissions in India are less than 0.5 t CO₂ / capita.</li>
  <li>In terms of CO₂ emissions from fuel combustion, India ranks second in Asia-Pacific region.</li>
  <li>Electricity and heat producers are the largest sources of CO₂ emissions in India.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I and III only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) II and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 19,
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
      { label: "(a) Only two", isCorrect: false },
      { label: "(b) Only three", isCorrect: false },
      { label: "(c) Only four", isCorrect: false },
      { label: "(d) All the five", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 20,
    question: `<p>With reference to the planet Earth, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Rain forests produce more oxygen than that produced by oceans.</li>
  <li>Marine phytoplankton and photosynthetic bacteria produce about 50% of world’s oxygen.</li>
  <li>Well-oxygenated surface water contains several folds higher oxygen than that in atmospheric air.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I and II", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) I and III", isCorrect: false },
      { label: "(d) None of the above statements is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 21,
    question: `<p>Consider the following statements about Raja Ram Mohan Roy:</p>
<ol style="list-style-type: upper-roman;">
  <li>He possessed great love and respect for the traditional philosophical systems of the East.</li>
  <li>He desired his countrymen to accept the rational and scientific approach and the principle of human dignity and social equality of all men and women.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 22,
    question: `<p>Consider the following subjects with regard to the Non-Cooperation Programme:</p>
<ol style="list-style-type: upper-roman;">
  <li>Boycott of law-courts and foreign cloth</li>
  <li>Observance of strict non-violence</li>
  <li>Retention of titles and honours without using them in public</li>
  <li>Establishment of Panchayats for settling disputes</li>
</ol>
<p>How many of the above were parts of the Non-Cooperation Programme?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) Only three", isCorrect: false },
      { label: "(d) All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 23,
    question: `<p>The irrigation device called ‘Araghatta’ was:</p>`,
    options: [
      { label: "(a) a water bag made of leather pulled over a pulley", isCorrect: false },
      { label: "(b) a large wheel with earthen pots tied to the outer ends of its spokes", isCorrect: false },
      { label: "(c) a larger earthen pot driven by bullocks", isCorrect: false },
      { label: "(d) a large water bucket pulled up by rope directly by hand", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 24,
    question: `<p>Who among the following rulers in ancient India had assumed the titles ‘Mattavilasa’, ‘Vichitrachitta’ and ‘Gunabhara’?</p>`,
    options: [
      { label: "(a) Mahendravarman I", isCorrect: false },
      { label: "(b) Simhavishnu", isCorrect: false },
      { label: "(c) Narasimhavarman I", isCorrect: false },
      { label: "(d) Simhavarman", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 25,
    question: `<p>Fa-hien (Faxian), the Chinese pilgrim, travelled to India during the reign of:</p>`,
    options: [
      { label: "(a) Samudragupta", isCorrect: false },
      { label: "(b) Chandragupta II", isCorrect: false },
      { label: "(c) Kumaragupta I", isCorrect: false },
      { label: "(d) Skandagupta", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 26,
    question: `<p>Who among the following led a successful military campaign against the kingdom of Srivijaya, the powerful maritime State, which ruled the Malay Peninsula, Sumatra, Java and the neighbouring islands?</p>`,
    options: [
      { label: "(a) Amoghavarsha (Rashtrakuta)", isCorrect: false },
      { label: "(b) Prataparudra (Kakatiya)", isCorrect: false },
      { label: "(c) Rajendra I (Chola)", isCorrect: false },
      { label: "(d) Vishnuvardhana (Hoysala)", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 27,
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
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) Only three", isCorrect: false },
      { label: "(d) All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 28,
    question: `<p>The first Gandharva Mahavidyalaya, a music training school, was set up in 1901 by Vishnu Digambar Paluskar in:</p>`,
    options: [
      { label: "(a) Delhi", isCorrect: false },
      { label: "(b) Gwalior", isCorrect: false },
      { label: "(c) Ujjain", isCorrect: false },
      { label: "(d) Lahore", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 29,
    question: `<p>Ashokan inscriptions suggest that the ‘Pradeshika’, ‘Rajuka’, and ‘Yukta’ were important officers at the:</p>`,
    options: [
      { label: "(a) village-level administration", isCorrect: false },
      { label: "(b) district-level administration", isCorrect: false },
      { label: "(c) provincial administration", isCorrect: false },
      { label: "(d) level of the central administration", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 30,
    question: `<p>Consider the following statements in respect of the Non-Cooperation Movement:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Congress declared the attainment of ‘Swaraj’ by all legitimate and peaceful means to be its objective.</li>
  <li>It was to be implemented in stages with civil disobedience and non-payment of taxes for the next stage only if ‘Swaraj’ did not come within a year and the Government resorted to repression.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 31,
    question: `<p>With reference to investments, consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>Bonds</li>
  <li>Hedge Funds</li>
  <li>Stocks</li>
  <li>Venture Capital</li>
</ol>
<p>How many of the above are treated as Alternative Investment Funds?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) Only three", isCorrect: false },
      { label: "(d) All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 32,
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
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II, III and IV", isCorrect: false },
      { label: "(c) I, III, IV and V", isCorrect: false },
      { label: "(d) I, II and V", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 33,
    question: `<p>With reference to the Government of India, consider the following information:</p>
<p><strong>Organization — Some of its functions — It works under</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>Directorate of Enforcement — Enforcement of the Fugitive Economic Offenders Act, 2018 — Internal Security Division-I, Ministry of Home Affairs</li>
  <li>Directorate of Revenue Intelligence — Enforces the Provisions of the Customs Act, 1962 — Department of Revenue, Ministry of Finance</li>
  <li>Directorate General of Systems and Data Management — Carrying out big data analytics to assist tax officers for better policy and nabbing tax evaders — Department of Revenue, Ministry of Finance</li>
</ol>
<p>In how many of the above rows is the information correctly matched?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All the three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 34,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>The Reserve Bank of India mandates all the listed companies in India to submit a Business Responsibility and Sustainability Report (BRSR).</li>
  <li>In India, a company submitting a BRSR makes disclosure in the report that are largely non-financial in nature.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 35,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In India, income from allied agricultural activities like poultry farming is exempted from income tax.</p>
<p><strong>Statement II:</strong> Income from rural agricultural land is exempt from tax under the provisions of the Income-tax Act, 1961.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is incorrect", isCorrect: false },
      { label: "(d) Statement I is incorrect but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 36,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>India has joined the Minerals Security Partnership as a member.</li>
  <li>India is a resource-rich country in all the 30 critical minerals that (It) has identified.</li>
  <li>The Parliament in 2023 has amended the Mines and Minerals (Development and Regulation) Act, 1957 empowering the Central Government to exclusively auction mining lease and composite license for certain critical minerals.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 37,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> As regards returns from an investment in a company, generally, bondholders are considered to be relatively at lower risk than stockholders.</p>
<p><strong>Statement II:</strong> Bondholders are lenders to a company whereas stockholders are its owners.</p>
<p><strong>Statement III:</strong> For repayment purpose, bondholders are prioritized over stockholders by a company.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct and Statement I explains Statement II", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 38,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>India accounts for a very large portion of all equity option contracts traded globally thus exhibiting a great boom.</li>
  <li>India's stock market has grown rapidly in the recent past even overtaking Hong Kong's at some point of time.</li>
  <li>There is no regulatory body either to warn the small investors about the risks of options trading or to act on unregistered financial advisors in this regard.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 39,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Circular economy reduces the emissions of greenhouse gases.</p>
<p><strong>Statement II:</strong> Circular economy reduces the use of raw materials as inputs.</p>
<p><strong>Statement III:</strong> Circular economy reduces wastage in the production process.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 40,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Capital receipts create a liability or cause a reduction in the assets of the Government.</li>
  <li>Borrowings and disinvestment are capital receipts.</li>
  <li>Interest received on loans creates a liability of the Government.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 41,
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
      { label: "(a) Only three", isCorrect: false },
      { label: "(b) Only four", isCorrect: false },
      { label: "(c) Only five", isCorrect: false },
      { label: "(d) All the six", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 42,
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
      { label: "(a) Only two", isCorrect: false },
      { label: "(b) Only three", isCorrect: false },
      { label: "(c) Only four", isCorrect: false },
      { label: "(d) Only five", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 43,
    question: `<p>Consider the following water bodies:</p>
<ol style="list-style-type: upper-roman;">
  <li>Lake Tanganyika</li>
  <li>Lake Tonlé Sap</li>
  <li>Patos Lagoon</li>
</ol>
<p>Through how many of them does the equator pass?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All the three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 44,
    question: `<p>Consider the following statements about turmeric during the year 2022-23:</p>
<ol style="list-style-type: upper-roman;">
  <li>India is the largest producer and exporter of turmeric in the world.</li>
  <li>More than 30 varieties of turmeric are grown in India.</li>
  <li>Maharashtra, Telangana, Karnataka and Tamil Nadu are major turmeric producing States in India.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 45,
    question: `<p>Which of the following are the evidences of the phenomenon of continental drift?</p>
<ol style="list-style-type: upper-roman;">
  <li>The belt of ancient rocks from Brazil coast matches with those from Western Africa.</li>
  <li>The gold deposits of Ghana are derived from the Brazil plateau when the two continents lay side by side.</li>
  <li>The Gondwana system of sediments from India is known to have its counterparts in six different landmasses of the Southern Hemisphere.</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "(a) I and III only", isCorrect: false },
      { label: "(b) I and II only", isCorrect: false },
      { label: "(c) I, II and III", isCorrect: false },
      { label: "(d) II and III only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 46,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> The amount of dust particles in the atmosphere is more in subtropical and temperate areas than in equatorial and polar regions.</p>
<p><strong>Statement II:</strong> Subtropical and temperate areas have less dry winds.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II explains Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is not correct", isCorrect: false },
      { label: "(d) Statement I is not correct but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 47,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In January, in the Northern Hemisphere, the isotherms bend equatorward while crossing the landmasses, and poleward while crossing the oceans.</p>
<p><strong>Statement II:</strong> In January, the air over the oceans is warmer than that over the landmasses in the Northern Hemisphere.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II explains Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is not correct", isCorrect: false },
      { label: "(d) Statement I is not correct but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 48,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In the context of effect of water on rocks, chalk is known as a very permeable rock - whereas clay is known as quite an impermeable or least permeable rock.</p>
<p><strong>Statement II:</strong> Chalk is porous and hence can absorb water.</p>
<p><strong>Statement III:</strong> Clay is not at all porous.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "(b) Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "(c) Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "(d) Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 49,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Without the atmosphere, temperature would be well below freezing point everywhere on the Earth's surface.</li>
  <li>Heat absorbed and trapped by the atmosphere maintains our planet’s average temperature.</li>
  <li>Atmosphere's gases, like carbon dioxide, are particularly good at absorbing and trapping radiation.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and III only", isCorrect: false },
      { label: "(b) I and II only", isCorrect: false },
      { label: "(c) I, II and III", isCorrect: false },
      { label: "(d) II and III only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 50,
    question: `<p>Consider the following statements about the Rashtriya Gokul Mission:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is important for the upliftment of the rural poor as the majority of low-producing indigenous animals are with small and marginal farmers and landless labourers.</li>
  <li>It was initiated to promote indigenous cattle and buffalo rearing and conservation in a scientific and holistic manner.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 51,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Panchayats at the intermediate level exist in all States.</li>
  <li>To be eligible to be a Member of a Panchayat at the intermediate level, a person should attain the age of thirty years.</li>
  <li>The Chief Minister of a State constitutes a commission to review the financial position of Panchayats at the intermediate levels and to make recommendations regarding the distribution of net proceeds of taxes and duties, leviable by the State, between the State and Panchayats at the intermediate level.</li>
</ol>
<p>Which of the statements given above are not correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 52,
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
      { label: "(b) II and III", isCorrect: false },
      { label: "(c) I and IV", isCorrect: false },
      { label: "(d) I only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 53,
    question: `<p>Who amongst the following are members of the Jury to select the recipient of 'Gandhi Peace Prize'?</p>
<ol style="list-style-type: upper-roman;">
  <li>The President of India</li>
  <li>The Prime Minister of India</li>
  <li>The Chief Justice of India</li>
  <li>The Leader of Opposition in the Lok Sabha</li>
</ol>
<p>Select the correct answer using the code given below.</p>`,
    options: [
      { label: "(a) II and IV only", isCorrect: false },
      { label: "(b) I, II and III", isCorrect: false },
      { label: "(c) II, III and IV", isCorrect: false },
      { label: "(d) I and III only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 54,
    question: `<p>GPS-Aided Geo Augmented Navigation (GAGAN) uses a system of ground stations to provide necessary augmentation. Which of the following statements is/are correct in respect of GAGAN?</p>
<ol style="list-style-type: upper-roman;">
  <li>It is designed to provide additional accuracy and integrity.</li>
  <li>It will allow more uniform and high-quality air traffic management.</li>
  <li>It will provide benefits only in aviation but not in other modes of transportation.</li>
</ol>`,
    options: [
      { label: "(a) I, II and III", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I only", isCorrect: false },
      { label: "(d) I and II only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 55,
    question: `<p>Consider the following statements regarding AI Action Summit held in Grand Palais, Paris in February 2025:</p>
<ol style="list-style-type: upper-roman;">
  <li>Co-chaired with India, the event builds on the advances made at the Bletchley Park Summit held in 2023 and the Seoul Summit held in 2024.</li>
  <li>Along with other countries, US and UK also signed the declaration on inclusive and sustainable AI.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 56,
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>International Year of the Woman Farmer : 2026</li>
  <li>International Year of Sustainable and Resilient Tourism : 2027</li>
  <li>International Year of Peace and Trust : 2025</li>
  <li>International Year of Asian Awareness and Planetary Defence : 2029</li>
</ol>
<p>How many of the pairs are correctly matched?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) Only three", isCorrect: false },
      { label: "(d) All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 57,
    question: `<p>Consider the following statements with regard to BRICS:</p>
<ol style="list-style-type: upper-roman;">
  <li>16th BRICS Summit was held under the Chairship of Russia in Kazan.</li>
  <li>Indonesia has become a full member of BRICS.</li>
  <li>The theme of the 16th BRICS Summit was Strengthening Multiculturalism for Just Global Development and Security.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II", isCorrect: false },
      { label: "(b) II and III", isCorrect: false },
      { label: "(c) I and III", isCorrect: false },
      { label: "(d) I only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 58,
    question: `<p>Consider the following statements about Lokpal:</p>
<ol style="list-style-type: upper-roman;">
  <li>The power of Lokpal applies to public servants of India, but not to the Indian public servants posted outside India.</li>
  <li>The Chairperson or a Member shall not be a Member of the Parliament or a Member of the Legislature of any State or Union Territory, and only the Chief Justice of India, whether incumbent or retired, has to be its Chairperson.</li>
  <li>The Chairperson or a Member shall not be a person of less than forty-five years of age on the date of assuming office as the Chairperson or Member, as the case may be.</li>
  <li>Lokpal cannot inquire into the allegations of corruption against a sitting Prime Minister of India.</li>
</ol>`,
    options: [
      { label: "(a) III only", isCorrect: false },
      { label: "(b) II and III", isCorrect: false },
      { label: "(c) I and IV", isCorrect: false },
      { label: "(d) None of the above statements is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 59,
    question: `<p>Consider the following statements in respect of the first Kho Kho World Cup:</p>
<ol style="list-style-type: upper-roman;">
  <li>The event was held in Delhi, India.</li>
  <li>Indian men beat Nepal with a score of 78-40 in the final to become the World Champion in men's category.</li>
  <li>Indian women beat Nepal with a score of 54-36 in the final to become the World Champion in women's category.</li>
</ol>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 60,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>In the finals of the 45th Chess Olympiad held in 2024, Gukesh Dommaraju became the world's youngest winner after defeating the Russian player Nepomniachtchi.</li>
  <li>Abhimanyu Mishra, an American chess player, holds the record of becoming the world's youngest ever Grandmaster.</li>
</ol>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 61,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Some rare earth elements are used in the manufacture of flat television screens and computer monitors.</p>
<p><strong>Statement II:</strong> Some rare earth elements have phosphorescent properties.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II explains Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is not correct", isCorrect: false },
      { label: "(d) Statement I is not correct but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 62,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Indian Railways have prepared a National Rail Plan (NRP) to create a “future ready” railway system by 2028.</li>
  <li>“Kavach” is an Automatic Train Protection system developed in collaboration with Germany.</li>
  <li>The “Kavach” system consists of RFID tags fitted on the track in station sections.</li>
</ol>
<p>Which of the statements given above are not correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 63,
    question: `<p>Consider the following space missions:</p>
<ol style="list-style-type: upper-roman;">
  <li>Axiom-4</li>
  <li>SpaDeX</li>
  <li>Gaganyaan</li>
</ol>
<p>How many of the space missions given above encourage and support micro-gravity research?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 64,
    question: `<p>With reference to India’s defence, consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Dornier-228 — Maritime patrol aircraft</li>
  <li>IL-76 — Supersonic combat aircraft</li>
  <li>C-17 Globemaster III — Military transport aircraft</li>
</ol>
<p>How many of the pairs given above are correctly matched?</p>`,
    options: [
      { label: "(a) Only one", isCorrect: false },
      { label: "(b) Only two", isCorrect: false },
      { label: "(c) All three", isCorrect: false },
      { label: "(d) None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 65,
    question: `<p>Artificial way of causing rainfall to reduce air pollution makes use of:</p>`,
    options: [
      { label: "(a) Silver iodide and potassium iodide", isCorrect: false },
      { label: "(b) Silver nitrate and potassium iodide", isCorrect: false },
      { label: "(c) Silver iodide and potassium nitrate", isCorrect: false },
      { label: "(d) Silver nitrate and potassium chloride", isCorrect: false },
    ],
    solution: "",
  },

  {
    id: 66,
    question: `<p>Consider the following statements with regard to pardoning power of the President of India:</p>
<ol style="list-style-type: upper-roman;">
  <li>The exercise of this power by the President can be subjected to limited judicial review.</li>
  <li>The President can exercise this power without the advice of the Central Government.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 67,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>On the dissolution of the House of the People, the Speaker shall not vacate his/her office until immediately before the first meeting of the House of the People after the dissolution.</li>
  <li>According to the provisions of the Constitution of India, a Member of the House of the People on being elected as Speaker shall resign from his/her political party immediately.</li>
  <li>The Speaker of the House of the People may be removed from his/her office by a resolution of the House of the People passed by a majority of all the then Members of the House, provided that no resolution shall be moved unless at least fourteen days’ notice has been given of the intention to move the resolution.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 68,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>If any question arises as to whether a Member of the House of the People has become subject to disqualification under the 10th Schedule, the President's decision in accordance with the opinion of the Council of Union Ministers shall be final.</li>
  <li>There is no mention of the word 'political party' in the Constitution of India.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 69,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> In India, State Governments have no power for making rules for grant of concessions in respect of extraction of minor minerals even though such minerals are located in their territories.</p>
<p><strong>Statement II:</strong> In India, the Central Government has the power to notify minor minerals under the relevant law.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II explains Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is not correct", isCorrect: false },
      { label: "(d) Statement I is not correct but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 70,
    question: `<p>Which organization has enacted the Nature Restoration Law (NRL) to tackle climate change and biodiversity loss?</p>`,
    options: [
      { label: "(a) The European Union", isCorrect: false },
      { label: "(b) The World Bank", isCorrect: false },
      { label: "(c) The Organization for Economic Cooperation and Development", isCorrect: false },
      { label: "(d) The Food and Agriculture Organization", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 71,
    question: `<p>Suppose the revenue expenditure is ₹80,000 crores and the revenue receipts of the Government are ₹60,000 crores.</p>
<p>The Government budget also shows borrowings of ₹10,000 crores and interest payments of ₹6,000 crores.</p>
<p>Which of the following statements are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>Revenue deficit is ₹20,000 crores.</li>
  <li>Fiscal deficit is ₹10,000 crores.</li>
  <li>Primary deficit is ₹4,000 crores.</li>
</ol>`,
    options: [
      { label: "(a) I and II only", isCorrect: false },
      { label: "(b) II and III only", isCorrect: false },
      { label: "(c) I and III only", isCorrect: false },
      { label: "(d) I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 72,
    question: `<p>India is one of the founding members of the International North-South Transport Corridor (INSTC), a multimodal transportation corridor, which will connect:</p>`,
    options: [
      { label: "(a) India to Central Asia to Europe via Iran", isCorrect: false },
      { label: "(b) India to Central Asia via China", isCorrect: false },
      { label: "(c) India to South-East Asia through Bangladesh and Myanmar", isCorrect: false },
      { label: "(d) India to Europe through Azerbaijan", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 73,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong> Of the two major ethanol producers in the world, i.e., Brazil and the United States of America, the former produces more ethanol than the latter.</p>
<p><strong>Statement II:</strong> Unlike in the United States of America where corn is the principal feedstock for ethanol production, sugarcane is the principal feedstock for ethanol production in Brazil.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "(a) Both Statement I and Statement II are correct and Statement II explains Statement I", isCorrect: false },
      { label: "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I", isCorrect: false },
      { label: "(c) Statement I is correct but Statement II is not correct", isCorrect: false },
      { label: "(d) Statement I is not correct but Statement II is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 74,
    question: `<p>The World Bank warned that India could become one of the first places where wet-bulb temperatures routinely exceed 35°C. Which of the following statements best reflect(s) the implication of the above-said report?</p>
<ol style="list-style-type: upper-roman;">
  <li>Peninsular India will most likely suffer from flooding, tropical cyclones and droughts.</li>
  <li>The survival of animals including humans will be affected as shedding of their body heat through perspiration becomes difficult.</li>
</ol>`,
    options: [
      { label: "(a) I only", isCorrect: false },
      { label: "(b) II only", isCorrect: false },
      { label: "(c) Both I and II", isCorrect: false },
      { label: "(d) Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 75,
    question: `<p>A country's fiscal deficit stands at ₹50,000 crores. It is receiving ₹10,000 crores through non-debt creating capital receipts. The country's interest liabilities are ₹1,500 crores.</p>
<p>What is the gross primary deficit?</p>`,
    options: [
      { label: "(a) ₹48,500 crores", isCorrect: false },
      { label: "(b) ₹51,500 crores", isCorrect: false },
      { label: "(c) ₹58,500 crores", isCorrect: false },
      { label: "(d) None of the above", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 76,
    question: `<p>Which of the following statements with regard to recommendations of the 15th Finance Commission of India are correct?</p>
<ol style="list-style-type: upper-roman;">
  <li>It has recommended grants of ₹ 4,800 crores from the year 2022-23 to the year 2025-26 for incentivizing States to enhance educational outcomes.</li>
  <li>45% of the net proceeds of Union taxes are to be shared with States.</li>
  <li>₹ 45,000 crores are to be kept as performance-based incentive for all States for carrying out agricultural reforms.</li>
  <li>It reintroduced tax effort criteria to reward fiscal performance.</li>
</ol>`,
    options: [
      { label: "(a) I, II and III", isCorrect: false },
      { label: "(b) I, II and IV", isCorrect: false },
      { label: "(c) I, III and IV", isCorrect: false },
      { label: "(d) II, III and IV", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 77,
    question: `<p>Consider the following statements in respect of the International Bank for Reconstruction and Development (IBRD):</p>
<ol style="list-style-type: upper-roman;">
  <li>It provides loans and guarantees to middle income countries.</li>
  <li>It works single-handedly to help developing countries to reduce poverty.</li>
  <li>It was established to help Europe rebuild after the World War II.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 78,
    question: `<p>Consider the following statements in respect of RTGS and NEFT:</p>
<ol style="list-style-type: upper-roman;">
  <li>In RTGS, the settlement time is instantaneous while in case of NEFT, it takes some time to settle payments.</li>
  <li>In RTGS, the customer is charged for inward transactions while that is not the case for NEFT.</li>
  <li>Operating hours for RTGS are restricted on certain days while this is not true for NEFT.</li>
</ol>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "I and II", isCorrect: false },
      { label: "I and III", isCorrect: false },
      { label: "III only", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 79,
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
      { label: "Only three", isCorrect: false },
      { label: "Only four", isCorrect: false },
      { label: "All the five", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 80,
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
      { label: "II and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 81,
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
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 82,
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
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 83,
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
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 84,
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
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 85,
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
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 86,
    question: `<p>With reference to the Constitution of India, if an area in a State is declared as Scheduled Area under the Fifth Schedule:</p>
<ol style="list-style-type: upper-roman;">
  <li>The State Government loses its executive power in such areas and a local body assumes total administration.</li>
  <li>The Union Government can take over the total administration of such areas under certain circumstances on the recommendations of the Governor.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 87,
    question: `<p>With reference to India, consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>The National Automotive Board - Ministry of Commerce and Industry</li>
  <li>The Coir Board - Ministry of Heavy Industries</li>
  <li>The National Centre for Trade Information - Ministry of Micro, Small and Medium Enterprises</li>
</ol>
<p>How many of the above pairs are correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 88,
    question: `<p>Consider the following subjects under the Constitution of India:</p>
<ol style="list-style-type: upper-roman;">
  <li>List I - Union List, in the Seventh Schedule</li>
  <li>Extent of the executive power of a State</li>
  <li>Conditions of the Governor's office</li>
</ol>
<p>For a constitutional amendment with respect to which of the above, ratification by the Legislatures of not less than one-half of the States is required before presenting the bill to the President of India for assent?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 89,
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
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 90,
    question: `<p>Consider the following activities:</p>
<ol style="list-style-type: upper-roman;">
  <li>Production of crude oil</li>
  <li>Refining, storage and distribution of petroleum</li>
  <li>Marketing and sale of petroleum products</li>
  <li>Production of natural gas</li>
</ol>
<p>How many of the above activities are regulated by the Petroleum and Natural Gas Regulatory Board in our country?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "Only three", isCorrect: false },
      { label: "All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 91,
    question: `<p>“Sedition has become my religion” was the famous statement given by Gandhiji at the time of:</p>`,
    options: [
      { label: "the Champaran Satyagraha", isCorrect: false },
      { label: "publicly violating Salt Law at Dandi", isCorrect: false },
      { label: "attending the Second Round Table Conference in London", isCorrect: false },
      { label: "the launch of the Quit India Movement", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 92,
    question: `<p>The famous female figurine known as “Dancing Girl,” found at Mohenjo-daro, is made of:</p>`,
    options: [
      { label: "carnelian", isCorrect: false },
      { label: "clay", isCorrect: false },
      { label: "bronze", isCorrect: false },
      { label: "gold", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 93,
    question: `<p>Who provided legal defence to the people arrested in the aftermath of Chauri Chaura incident?</p>`,
    options: [
      { label: "C. R. Das", isCorrect: false },
      { label: "Madan Mohan Malaviya and Krishna Kant", isCorrect: false },
      { label: "Dr. Saifuddin Kitchlew and Khwaja Hasan Nizami", isCorrect: false },
      { label: "M. A. Jinnah", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 94,
    question: `<p>Subsequent to which one of the following events, Gandhiji, who consistently opposed untouchability and appealed for its eradication from all spheres, decided to include the upliftment of ‘Harijans’ in his political and social programme?</p>`,
    options: [
      { label: "The Poona Pact", isCorrect: false },
      { label: "The Gandhi-Irwin Agreement (Delhi Pact)", isCorrect: false },
      { label: "Arrest of Congress leadership at the time of the Quit India Movement", isCorrect: false },
      { label: "Promulgation of the Government of India Act, 1935", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 95,
    question: `<p>Consider the following fruits:</p>
<ol style="list-style-type: upper-roman;">
  <li>Papaya</li>
  <li>Pineapple</li>
  <li>Guava</li>
</ol>
<p>How many of the above were introduced in India by the Portuguese in the sixteenth and seventeenth centuries?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 96,
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
      { label: "Only four", isCorrect: false },
      { label: "Only three", isCorrect: false },
      { label: "Only two", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 97,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Anadyr in Siberia and Nome in Alaska are a few kilometers from each other, but when people are waking up and getting set for breakfast in these cities, it would be different days.</li>
  <li>When it is Monday in Anadyr, it is Tuesday in Nome.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 98,
    question: `<p>Who among the following was the founder of the ‘Self-Respect Movement’?</p>`,
    options: [
      { label: "'Periyar' E. V. Ramaswamy Naicker", isCorrect: false },
      { label: "Dr. B. R. Ambedkar", isCorrect: false },
      { label: "Bhaskarrao Jadhav", isCorrect: false },
      { label: "Dinkarrao Javalkar", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 99,
    question: `<p>Consider the following pairs:</p>
<ol style="list-style-type: upper-roman;">
  <li>Botswana - Diamond</li>
  <li>Chile - Lithium</li>
  <li>Indonesia - Nickel</li>
</ol>
<p>In how many of the above rows is the given information correctly matched?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 100,
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
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
]

const sectionsUPSCGS1: Section[] = [
  {
    id: 1,
    name: "General Studies I",
    questions: questionsUPSCGS1
  }
]

export const examDataUPSCGS1: ExamData = {
  title: "UPSC Prelims PYQ Test Series 2025",
  duration: 30, // (in minutes)
  startTimestamp: "2025-09-17T13:30:00.0",
  sections: sectionsUPSCGS1
}

/* UPSC GS 2 */

const questionsUPSCGS2: Question[] = [
  {
    id: 1,
    question: `<p>Consider the following types of vehicles:</p>
<ol style="list-style-type: upper-roman;">
  <li>Full battery electric vehicles</li>
  <li>Hydrogen fuel cell vehicles</li>
  <li>Fuel cell electric hybrid vehicles</li>
</ol>
<p>How many of the above are considered as alternative powertrain vehicles?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 2,
    question: `<p>With reference to Unmanned Aerial Vehicles (UAVs), consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>All types of UAVs can do vertical landing.</li>
  <li>All types of UAVs can do automated hovering.</li>
  <li>All types of UAVs can use battery only as a source of power supply.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 3,
    question: `<p>In the context of electric vehicle batteries, consider the following elements:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cobalt</li>
  <li>Graphite</li>
  <li>Lithium</li>
  <li>Nickel</li>
</ol>
<p>How many of the above usually make up battery cathodes?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "Only three", isCorrect: false },
      { label: "All the four", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 4,
    question: `<p>Consider the following:</p>
<ol style="list-style-type: upper-roman;">
  <li>Cigarette butts</li>
  <li>Eyeglass lenses</li>
  <li>Car tyres</li>
</ol>
<p>How many of them contain plastic?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 5,
    question: `<p>Consider the following substances:</p>
<ol style="list-style-type: upper-roman;">
  <li>Ethanol</li>
  <li>Nitroglycerine</li>
  <li>Urea</li>
</ol>
<p>Coal gasification technology can be used in the production of how many of them?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 6,
    question: `<p>What is the common characteristic of the chemical substances generally known as CL-20, HMX and LLM-105, which are sometimes talked about in media?</p>`,
    options: [
      { label: "These are alternatives to hydro-fluorocarbon refrigerants", isCorrect: false },
      { label: "These are explosives in military weapons", isCorrect: false },
      { label: "These are high-energy fuels for cruise missiles", isCorrect: false },
      { label: "These are fuels for rocket propulsion", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 7,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>It is expected that Majorana 1 chip will enable quantum computing.</li>
  <li>Majorana 1 chip has been introduced by Amazon Web Services (AWS).</li>
  <li>Deep learning is a subset of machine learning.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 8,
    question: `<p>With reference to monoclonal antibodies, often mentioned in news, consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>They are man-made proteins.</li>
  <li>They stimulate immunological function due to their ability to bind to specific antigens.</li>
  <li>They are used in treating viral infections like that of Nipah virus.</li>
</ol>
<p>Which of the statements given above are correct?</p>`,
    options: [
      { label: "I and II only", isCorrect: false },
      { label: "II and III only", isCorrect: false },
      { label: "I and III only", isCorrect: false },
      { label: "I, II and III", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 9,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
  <li>No virus can survive in ocean waters.</li>
  <li>No virus can infect bacteria.</li>
  <li>No virus can change the cellular transcriptional activity in host cells.</li>
</ol>
<p>How many of the statements given above are correct?</p>`,
    options: [
      { label: "Only one", isCorrect: false },
      { label: "Only two", isCorrect: false },
      { label: "All the three", isCorrect: false },
      { label: "None", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 10,
    question: `<p>Consider the following statements:</p>
<p><strong>Statement I:</strong></p>
<p>Activated carbon is a good and an attractive tool to remove pollutants from effluent streams and to remediate contaminants from various industries.</p>
<p><strong>Statement II:</strong></p>
<p>Activated carbon exhibits a large surface area and a strong potential for adsorbing heavy metals.</p>
<p><strong>Statement III:</strong></p>
<p>Activated carbon can be easily synthesized from environmental wastes with high carbon content.</p>
<p>Which one of the following is correct in respect of the above statements?</p>`,
    options: [
      { label: "Both Statement II and Statement III are correct and both of them explain Statement I", isCorrect: false },
      { label: "Both Statement II and Statement III are correct but only one of them explains Statement I", isCorrect: false },
      { label: "Only one of the Statements II and III is correct and that explains Statement I", isCorrect: false },
      { label: "Neither Statement II nor Statement III is correct", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 11,
    question: `<p>In our country, regrettably, teaching and learning for the examination have been our forte but the new demands of society and the future of work require critical and independent thinking, learning through doing, asking questions from multiple disciplinary perspectives on the same issue, using evidence for building arguments, and reflecting and articulation. Higher education should not “either be a mere servant of the government policy or a passive respondent to public mood.” Higher learning is all about how to think rather than what to think. Teaching has to be re-invented.</p>
<p>Which one of the following statements best reflects the central idea conveyed by the passage?</p>`,
    options: [
      { label: "India does not have enough resources for promoting quality education in its universities.", isCorrect: false },
      { label: "The institutions of higher learning in the country should not be under the control of the Government.", isCorrect: false },
      { label: "Classroom approach to higher education should be done away with.", isCorrect: false },
      { label: "Classroom needs to be reimagined and teaching needs to be re-invented.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 12,
    question: `<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
  <li>Higher education is a constantly evolving subject that needs to align towards new developments in all spheres of society.</li>
  <li>In our country, sufficient funds are not allocated for promoting higher education.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 13,
    question: `<p>If there is inequality in the pattern of population growth, there is greater inequality in food production and utilization. As societies become wealthier, their consumption of animal products increases. This means that a greater proportion of such basic foodstuff as grains and legumes that could feed humans directly is instead being converted into feed for poultry and large farm animals. Yet this conversion of plant-based food into animal food for humans is far from efficient. Only 16% of the calories fed to chickens are recovered by us when we eat them. This conversion rate goes down to five to seven per cent in large animals that are fed grain to add fat and some protein before slaughter.</p>
<p>Which one of the following statements best reflects the crux of the passage?</p>`,
    options: [
      { label: "There is an urgent need for a public policy to promote the consumption of cereal-based foods in wealthier societies.", isCorrect: false },
      { label: "Animal-based food is far less efficient than grain/plant-based food in terms of production and utilization.", isCorrect: false },
      { label: "Plant-based protein should replace the animal-based protein in our daily diets.", isCorrect: false },
      { label: "Inequality in food production and consumption is inevitable in any fast changing society.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 14,
    question: `<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
  <li>The food manufacturing and processing industries in every country should align their objectives and processes in accordance with the changing needs of the societies.</li>
  <li>Wealthier societies tend to incur great loss of calories of food materials due to indirect utilization of their agricultural produce.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 15,
    question: `<p>What is the maximum value of n such that 7 × 343 × 385 × 1000 × 2401 × 77777 is divisible by 35ⁿ?</p>`,
    options: [
      { label: "3", isCorrect: false },
      { label: "4", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "7", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 16,
    question: `<p>What is X in the sequence 24, X, 12, 18, 36, 90?</p>`,
    options: [
      { label: "18", isCorrect: false },
      { label: "12", isCorrect: false },
      { label: "9", isCorrect: false },
      { label: "6", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 17,
    question: `<p>P and Q walk along a circular track. They start at 5:00 a.m. from the same point in opposite directions. P walks at an average speed of 5 rounds per hour and Q walks at an average speed of 3 rounds per hour. How many times will they cross each other between 5:20 a.m. and 7:00 a.m.?</p>`,
    options: [
      { label: "12", isCorrect: false },
      { label: "13", isCorrect: false },
      { label: "14", isCorrect: false },
      { label: "15", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 18,
    question: `<p>If P = +, Q = -, R = ×, S = ÷, then insert the proper notations between the successive numbers in the equation:</p>
<p>60 _ 15 _ 3 _ 20 _ 4 = 20</p>`,
    options: [
      { label: "SPRQ", isCorrect: false },
      { label: "QRPS", isCorrect: false },
      { label: "QRSP", isCorrect: false },
      { label: "SPQR", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 19,
    question: `<p>A tram overtakes 2 persons X and Y walking at an average speed of 3 km/hr and 4 km/hr in the same direction and completely passes them in 8 seconds and 9 seconds respectively. What is the length of the tram?</p>`,
    options: [
      { label: "15 m", isCorrect: false },
      { label: "18 m", isCorrect: false },
      { label: "20 m", isCorrect: false },
      { label: "24 m", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 20,
    question: `<p>If N² = 12345678987654321, then how many digits does the number N have?</p>`,
    options: [
      { label: "8", isCorrect: false },
      { label: "9", isCorrect: false },
      { label: "10", isCorrect: false },
      { label: "11", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 21,
    question: `<p>Maintaining an ecosystem just to conserve biodiversity will affect its commercial potential as well as the livelihoods dependent on the ecosystem. There is also a conflict between using an ecosystem only for livelihoods, for commercial exploitation, or strictly for conservation. Deforestation caused due to commercial exploitation will lead to indirect harm like floods, siltation problems and microclimatic instability, apart from adversely affecting livelihoods dependent on forests. These conflicts are particularly acute in developing countries where the dependence of people on the ecosystem is significant, and commercial exploitation has the potential to boost national income.</p>
<p><strong>Which one of the following statements best reflects the critical message conveyed by the author of the passage?</strong></p>`,
    options: [
      { label: "Conservation of biodiversity is not an issue to be worried about when some people depend on ecosystems for their livelihoods.", isCorrect: false },
      { label: "Commercial exploitation of forests goes against the fundamental rights of the people dependent on forests for food and shelter.", isCorrect: false },
      { label: "Sustenance of livelihood and degradation of ecosystem while being together exacerbate one another, leading to conflicts and imbalance.", isCorrect: false },
      { label: "Commercial exploitation of ecosystems should be completely stopped.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 22,
    question: `<p>Maintaining an ecosystem just to conserve biodiversity will affect its commercial potential as well as the livelihoods dependent on the ecosystem. There is also a conflict between using an ecosystem only for livelihoods, for commercial exploitation, or strictly for conservation. Deforestation caused due to commercial exploitation will lead to indirect harm like floods, siltation problems and microclimatic instability, apart from adversely affecting livelihoods dependent on forests. These conflicts are particularly acute in developing countries where the dependence of people on the ecosystem is significant, and commercial exploitation has the potential to boost national income.</p>
<p><strong>With reference to above passage, the following assumptions have been made:</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>No country needs to depend on ecosystems to boost national income.</li>
  <li>Resource-rich countries need to share their resources with those of scant resources so as to prevent the degradation of ecosystems.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 23,
    question: `<p>The history of renewable energy suggests there is a steep learning curve, meaning that, as more is produced, costs fall rapidly because of economies of scale and learning by doing. The firms’ green innovation is path-dependent; the more a firm does, the more it is likely to do in the future. The strongest evidence for this is the collapse in the price of solar energy, which became about 90% cheaper during the 2010s, repeatedly beating forecasts. Moving early and gradually gives economies more time to adjust, allowing them to reap the benefits of path-dependent green investment without much disruption. A late, more chaotic transition is costlier.</p>
<p><strong>Which one of the following statements best reflects the central idea of the passage?</strong></p>`,
    options: [
      { label: "Economies of scale is essential for transition to green growth.", isCorrect: false },
      { label: "Modern technological progress is intensely linked to path-dependent innovations.", isCorrect: false },
      { label: "Countries with large economies are in a better position to adopt green technologies.", isCorrect: false },
      { label: "Timing plays a crucial role in the case of green technology development.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 24,
    question: `<p>The history of renewable energy suggests there is a steep learning curve, meaning that, as more is produced, costs fall rapidly because of economies of scale and learning by doing. The firms’ green innovation is path-dependent; the more a firm does, the more it is likely to do in the future. The strongest evidence for this is the collapse in the price of solar energy, which became about 90% cheaper during the 2010s, repeatedly beating forecasts. Moving early and gradually gives economies more time to adjust, allowing them to reap the benefits of path-dependent green investment without much disruption. A late, more chaotic transition is costlier.</p>
<p><strong>With reference to the above passage, the following assumptions have been made:</strong></p>
<ol style="list-style-type: upper-roman;">
  <li>Path-dependent green investments will eventually most likely benefit growth as well as public finances in a country like India.</li>
  <li>If other green technologies follow the same pattern as that of solar energy, there will most likely be an easy green transition.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 25,
    question: `<p>A natural number N is such that it can be expressed as N = p + q + r, where p, q and r are distinct factors of N. How many numbers below 50 have this property?</p>`,
    options: [
      { label: "6", isCorrect: false },
      { label: "7", isCorrect: false },
      { label: "8", isCorrect: false },
      { label: "9", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 26,
    question: `<p>Three prime numbers p, q and r, each less than 20, are such that p - q = q - r. How many distinct possible values can we get for (p + q + r)?</p>`,
    options: [
      { label: "4", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "6", isCorrect: false },
      { label: "More than 6", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 27,
    question: `<p>How many possible values of (p + q + r) are there satisfying, 1/p + 1/q + 1/r = 1 where p, q and r are natural numbers (not necessarily distinct)?</p>`,
    options: [
      { label: "None", isCorrect: false },
      { label: "One", isCorrect: false },
      { label: "Three", isCorrect: false },
      { label: "More than three", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 28,
    question: `<p>What comes at X and Y respectively in the following sequence?</p>
<p>January, January, December, October, X, March, October, Y, September</p>`,
    options: [
      { label: "July, May", isCorrect: false },
      { label: "July, April", isCorrect: false },
      { label: "June, May", isCorrect: false },
      { label: "June, April", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 29,
    question: `<p>Team X scored a total of N runs in 20 overs. Team Y tied the score in 10% less overs. Had team Y’s average run rate (runs per over) been 50% higher, the scores would have been tied in 12 overs. How many runs were scored by team X?</p>`,
    options: [
      { label: "72", isCorrect: false },
      { label: "144", isCorrect: false },
      { label: "216", isCorrect: false },
      { label: "Cannot be determined", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 30,
    question: `<p>The price (p) of a commodity is first increased by k%; then decreased by k%; again increased by k%; and again decreased by k%. If the new price is q, then what is the relation between p and q?</p>`,
    options: [
      { label: "p(10000-k²)² = q × 108", isCorrect: false },
      { label: "p(10000-k²)² = q × 104", isCorrect: false },
      { label: "p(10000-k²)  = q × 104", isCorrect: false },
      { label: "p(10000-k²)  = q × 108", isCorrect: false },
    ],
    solution: "",
  },

  {
    id: 31,
    question: `<p>One of the dismal realities of the agricultural sector in independent India has been that it never experienced a high-growth phase, unlike the non-agricultural economy. The highest decadal growth (compound annual growth rate or CAGR) for agriculture has been just 3-5% in the 1980s. Also, after experiencing a spurt in decadal growth during the 1980s, agricultural growth suffered relative stagnation thereafter. This is in sharp contrast to non-agricultural growth, which consistently increased from the 1980s to 2000s.</p>
<p><strong>Which one of the following statements best reflects the corollary to the above passage?</strong></p>`,
    options: [
      { label: "The benefit of economic reforms percolates down more slowly to the agriculture sector than in other sectors of the economy.", isCorrect: false },
      { label: "For India, the green revolution was not as useful as it was expected to be.", isCorrect: false },
      { label: "India lagged behind other countries in adapting mechanized and modern farming.", isCorrect: false },
      { label: "Rural-to-urban migration resulted in the stagnant agriculture sector.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 32,
    question: `<p>With reference to the passage, the following assumptions have been made:</p>
<p>The growing divergence between the fortunes of the agricultural and non-agricultural economy in India could have been reduced/contained by:</p>
<ol style="list-style-type: upper-roman;">
  <li>Adapting large-scale cultivation of commercial crops and viable corporate farming.</li>
  <li>Providing free insurance for all crops and heavily subsidizing seeds, fertilizers, electricity and farm machinery at par with developed countries.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 33,
    question: `<p>In our country, handlooms are equated with a culture that ensures a continuity of tradition. This idea has become part of the public policy-framing and provides a legitimate basis for the State to support the sector. But the notion of tradition as a single, linear entity is being strongly contested today. The narratives dominant in defining culture/tradition in a particular way are seen to have emerged as the identities and histories of large sections. The discounted and, at times, forcibly stifled identities are fighting for their rightful place in history. Against this backdrop, when we promote handloom as a traditional industry, it is not surprising that large sections of our population choose to ignore it.</p>
<p><strong>Which one of the following statements best reflects the most logical and rational message conveyed by the author of the passage?</strong></p>`,
    options: [
      { label: "We need to free the handloom industry from the limited narrative linked to preserving cultural heritage.", isCorrect: false },
      { label: "Continued State support to the handloom industry ensures the preservation of some of our glorious art forms and old traditions.", isCorrect: false },
      { label: "Household units of the handloom sector should be modernized and made an economically viable organized industry.", isCorrect: false },
      { label: "Handloom products need to be converted to machine-made designer products so as to make them more popular.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 34,
    question: `<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
  <li>There is no need for the State to be involved in any manner in the handloom sector.</li>
  <li>Handloom products are no longer appealing and attractive in the rapidly changing modern world.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 35,
    question: `<p>Consider the first 100 natural numbers. How many of them are not divisible by any one of 2, 3, 5, 7 and 9?</p>`,
    options: [
      { label: "20", isCorrect: false },
      { label: "21", isCorrect: false },
      { label: "22", isCorrect: false },
      { label: "23", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 36,
    question: `<p>If 4 ≤ x ≤ 8 and 2 ≤ y ≤ 7, then what is the ratio of maximum value of (x + y) to minimum value of (x - y)?</p>`,
    options: [
      { label: "6", isCorrect: false },
      { label: "15/2", isCorrect: false },
      { label: "-15/2", isCorrect: false },
      { label: "None of the above", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 37,
    question: `<p>Let both p and k be prime numbers such that (p² + k) is also a prime number less than 30. What is the number of possible values of k?</p>`,
    options: [
      { label: "4", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "6", isCorrect: false },
      { label: "7", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 38,
    question: `<p>There are n sets of numbers each having only three positive integers with LCM equal to 1001 and HCF equal to 1. What is the value of n?</p>`,
    options: [
      { label: "6", isCorrect: false },
      { label: "7", isCorrect: false },
      { label: "8", isCorrect: false },
      { label: "More than 8", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 39,
    question: `<p>Let PQR be a 3-digit number, PPT be a 3-digit number and PS be a 2-digit number, where P, Q, R, S, T are distinct non-zero digits. Further, PQR - PS = PPT. If Q = 3 and T < 6, then what is the number of possible values of (R, S)?</p>`,
    options: [
      { label: "2", isCorrect: false },
      { label: "3", isCorrect: false },
      { label: "4", isCorrect: false },
      { label: "More than 4", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 40,
    question: `<p>Consider the sequence AB_CC_A_BCCC_BBC_C that follows a certain pattern. Which one of the following completes the sequence?</p>`,
    options: [
      { label: "B, C, B, C, A", isCorrect: false },
      { label: "A, C, B, C, A", isCorrect: false },
      { label: "B, C, B, A, C", isCorrect: false },
      { label: "C, B, B, A, C", isCorrect: false },
    ],
    solution: "",
  },

  {
    id: 41,
    question: `<p>It is hard to predict how changes in the climate and the atmosphere’s chemistry will affect the prevalence and virulence of agricultural diseases. But there is a risk that such changes will make some plant infections more common in all climatic zones, perhaps catastrophically so. Part of the problem is that centuries of selective breeding have refined the genomes of most high-value crops. They are spectacular at growing in today’s conditions but genetic variations that are not immediately useful to them have been bred out. This is good for yields but bad for coping with changes. A minor disease or even an unknown one could suddenly rampage through a genetically honed crop.</p>
<p><strong>Which one of the following statements best reflects the central idea conveyed by the passage?</strong></p>`,
    options: [
      { label: "Global climate change adversely affects the productivity of crops.", isCorrect: false },
      { label: "Our total dependence on genetically honed crops entails possible food insecurity.", isCorrect: false },
      { label: "Our food security should not depend on agricultural productivity alone.", isCorrect: false },
      { label: "Genetically honed crops should be replaced with their wild varieties in our present cultivation practices.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 42,
    question: `<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
<li>Global climate change can result in the migration of several plant diseases to new areas.</li>
<li>Scientific understanding of the wild relatives of our present crops would enable us to strengthen food security.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 43,
    question: `<p>“A good statesman, like any other sensible human being, learns more from his opponents than from his fervent supporters. For his supporters will push him to disaster unless his opponents show him where the dangers are. So if he is wise he will often pray to be delivered from his friends, because they will ruin him. But, though it hurts, he ought also to pray never to be left without opponents; for they keep him on the path of reason and good sense. The national unity of free people depends upon a sufficiently even balance of political power to make it impracticable for the administration to be arbitrary and for opposition to be revolutionary and irreconcilable.”</p>
<p><strong>Which one of the following statements best reflects the critical message conveyed by the author of the passage?</strong></p>`,
    options: [
      { label: "Without opposition parties, the administration in a democracy gets to become more responsible.", isCorrect: false },
      { label: "Democracy needs to have revolutionaries in opposition to keep the government alert.", isCorrect: false },
      { label: "Rulers in a democracy need the support of opposition for their political survival.", isCorrect: false },
      { label: "In a democracy, the opposition is indispensable for the balance of political power and good governance.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 44,
    question: `<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
<li>In a democracy, a strong opposition is required only if the Head of Government is indifferent.</li>
<li>The more aggressive the opposition, the better is the governance in a democracy.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 45,
    question: `<p>P is the brother of Q and R. S is R’s mother. T is P’s father. How many of the following statements are definitely true?</p>
<ol style="list-style-type: upper-roman;">
<li>S and T are a couple.</li>
<li>Q is T’s son.</li>
<li>T is Q’s father.</li>
<li>S is P’s mother.</li>
<li>R is T’s daughter.</li>
<li>P is S’s son.</li>
</ol>`,
    options: [
      { label: "Only two", isCorrect: false },
      { label: "Only three", isCorrect: false },
      { label: "Only four", isCorrect: false },
      { label: "Only five", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 46,
    question: `<p>If NO is coded as 210, NOT is coded as 4200 and NOTE is coded as 21000, then how is NOTES coded?</p>`,
    options: [
      { label: "399000", isCorrect: false },
      { label: "420000", isCorrect: false },
      { label: "440000", isCorrect: false },
      { label: "630000", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 47,
    question: `<p>If FRANCE is coded as 654321 and GERMANY is coded as 9158437, then how is YEMEN coded?</p>`,
    options: [
      { label: "54321", isCorrect: false },
      { label: "81913", isCorrect: false },
      { label: "71913", isCorrect: false },
      { label: "71813", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 48,
    question: `<p>The 5-digit number PQRST (all distinct digits) is such that T ≠ 0. P is thrice T. S is greater than Q by 4, while Q is greater than R by 3. How many such 5-digit numbers are possible?</p>`,
    options: [
      { label: "3", isCorrect: false },
      { label: "4", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "6", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 49,
    question: `<p>X can complete one-third of a certain work in 6 days, Y can complete one-third of the same work in 8 days and Z can complete three-fourth of the same work in 12 days. All of them work together for n days and then X and Z quit and Y alone finishes the remaining work in 26/3. What is n equal to?</p>`,
    options: [
      { label: "3", isCorrect: false },
      { label: "4", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "6", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 50,
    question: `<p>What is X in the sequence 1, 3, 6, 11, 18, X, 42?</p>`,
    options: [
      { label: "26", isCorrect: false },
      { label: "27", isCorrect: false },
      { label: "29", isCorrect: false },
      { label: "30", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 51,
    question: `<p>A single number for inflation is an aggregate across different commodities and services; the price rise differs for different items of consumption. So, the single number is arrived at by assigning weights to different commodities and services. For WPI, the weights in production are used; for CPI, the consumption basket is used. But people are not homogeneous. The consumption basket is vastly different for the poor, the middle classes, and the rich. Hence, the CPI is different for each of these classes and a composite index requires averaging the baskets.</p>
<p><strong>Which one of the following statements best reflects the most logical, rational and crucial message conveyed by the passage?</strong></p>`,
    options: [
      { label: "We must use WPI exclusively in measuring price rise and CPI should be done away with.", isCorrect: false },
      { label: "The present calculation of inflation rate does not correctly measure price rise of individual item/commodity.", isCorrect: false },
      { label: "Inflation data under-presents services in the consumption basket.", isCorrect: false },
      { label: "Knowledge of inflation rate is not really of any use to anybody in the country.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 52,
    question: `<p>Trust stands commonly defined as being vulnerable to others. As entrepreneurship implies trust in others and willingness to expose oneself to betrayal. Trust in expert systems is the essence of globalizing behaviour; trust itself emerges as a super-commodity in the social market and defines the characteristics of goods and services in a global market. Trusting conduct also means holding others in good esteem, and an optimism that they are, or will be, competent in certain respects.</p>
<p><strong>Which one of the following statements best reflects the crux of the passage?</strong></p>`,
    options: [
      { label: "Trustworthiness cannot be expected in entrepreneurship.", isCorrect: false },
      { label: "Trustworthy people are the most vulnerable people.", isCorrect: false },
      { label: "No economic activity is possible without being exposed to betrayal.", isCorrect: false },
      { label: "Trust is important though it entails risk.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 53,
    question: `<p>In a football match, team P playing against Q was behind by 3 goals with 10 minutes remaining. Does team P win the match?</p>
<p><strong>Statement I:</strong> Team P scored 4 goals in the last 10 minutes.<br>
<strong>Statement II:</strong> Team Q scored a total of 4 goals in the match.</p>
<p>Which one of the following is correct in respect of the above question and the Statements?</p>`,
    options: [
      { label: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.", isCorrect: false },
      { label: "The Question can be answered by using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.", isCorrect: false },
      { label: "The Question cannot be answered even using any of the Statements.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 54,
    question: `<p>A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.</p>
<p><strong>Question:</strong> Is (p + q)² - 4pq, where p, q are natural numbers, positive?</p>
<p><strong>Statement I:</strong> p < q.<br>
<strong>Statement II:</strong> p > q.</p>
<p>Which one of the following is correct in respect of the above question and the Statements?</p>`,
    options: [
      { label: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.", isCorrect: false },
      { label: "The Question can be answered by using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered even without using any of the Statements.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 55,
    question: `<p>In a T20 cricket match, three players X, Y and Z scored a total of 37 runs. The ratio of number of runs scored by X to the number of runs scored by Y is equal to the ratio of number of runs scored by Y to number of runs scored by Z.</p>
<p><strong>Value-I:</strong> Runs scored by X<br>
<strong>Value-II:</strong> Runs scored by Y<br>
<strong>Value-III:</strong> Runs scored by Z</p>
<p>Which one of the following is correct?</p>`,
    options: [
      { label: "Value-I < Value-II < Value-III", isCorrect: false },
      { label: "Value-III < Value-II < Value-I", isCorrect: false },
      { label: "Value-I < Value-III < Value-II", isCorrect: false },
      { label: "Cannot be determined due insufficient data", isCorrect: false },
    ],
    solution: "",
  },

  {
    id: 56,
    question: `<p>Let p + q = 10 where p, q are integers.</p>
<p><strong>Value-I:</strong> Maximum value of p × q when p, q are positive integers.<br>
<strong>Value-II:</strong> Maximum value of p × q when p ≥ -6, q ≥ -4.</p>
<p>Which one of the following is correct?</p>`,
    options: [
      { label: "Value-I < Value-II", isCorrect: false },
      { label: "Value-II < Value-I", isCorrect: false },
      { label: "Value-I = Value-II", isCorrect: false },
      { label: "Cannot be determined due to insufficient data", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 57,
    question: `<p>Consider a set of 11 numbers:</p>
<p><strong>Value-I:</strong> Minimum value of the average of the numbers of the set when they are consecutive integers ≥ -5.<br>
<strong>Value-II:</strong> Minimum value of the product of the numbers of the set when they are consecutive non-negative integers.</p>
<p>Which one of the following is correct?</p>`,
    options: [
      { label: "Value-I < Value-II", isCorrect: false },
      { label: "Value-II < Value-I", isCorrect: false },
      { label: "Value-I = Value-II", isCorrect: false },
      { label: "Cannot be determined due to insufficient data", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 58,
    question: `<p>The average of three numbers p, q and r is k. p is as much more than the average as q is less than the average. What is the value of r?</p>`,
    options: [
      { label: "k", isCorrect: false },
      { label: "k-1", isCorrect: false },
      { label: "k+1", isCorrect: false },
      { label: "k/2", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 59,
    question: `<p>Let x be a real number between 0 and 1. Which of the following statements is/are correct?</p>
<ol style="list-style-type: upper-roman;">
<li>x² > x³</li>
<li>x > √x</li>
</ol>
<p>Select the correct answer using the code given below:</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 60,
    question: `<p>The difference between any two natural numbers is 10. What can be said about the natural numbers which are divisible by 5 and lie between these two numbers?</p>`,
    options: [
      { label: "There is only one such number.", isCorrect: false },
      { label: "There are only two such numbers.", isCorrect: false },
      { label: "There can be more than one such number.", isCorrect: false },
      { label: "No such number exists.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 61,
    question: `<p>Over the next 30 years, many countries are promising to move to net-zero carbon, implying that household emissions will have to be cut to close to nothing. A leading climate scientist reckons that, at best, half the reduction might be achieved through demand-side measures, such as behavioural changes by individuals and households. And even that would require companies and governments to provide more incentives to change through supply-side investments to make low-carbon options cheaper and more widely available.</p>
<p><strong>Which one of the following statements best reflects the central idea conveyed by the passage?</strong></p>`,
    options: [
      { label: "Moving to net-zero carbon is possible only by the reduction in household emissions.", isCorrect: false },
      { label: "Low-carbon behaviour in people can be brought about by incentivising them.", isCorrect: false },
      { label: "Cheaper goods and services can be made available to people by using low-carbon technologies.", isCorrect: false },
      { label: "Manufacturing industries that use low-carbon technologies should be provided with subsidies.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 62,
    question: `<p>Over the next 30 years, many countries are promising to move to net-zero carbon, implying that household emissions will have to be cut to close to nothing. A leading climate scientist reckons that, at best, half the reduction might be achieved through demand-side measures, such as behavioural changes by individuals and households. And even that would require companies and governments to provide more incentives to change through supply-side investments to make low-carbon options cheaper and more widely available.</p>
<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
<li>Supply-side investments in companies can result in low-carbon behaviour in people.</li>
<li>People are not capable of adapting low-carbon behaviour without the involvement of Government and Companies.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 63,
    question: `<p>In only 50 years, the world’s consumption of raw materials has nearly quadrupled, to more than 100 billion tons. Less than 9% of this is reused. Batteries of old vehicles contain materials such as lithium, cobalt, manganese and nickel that are pricey and can be hard to obtain. Supply chains are long and complicated. Buyers’ risks are being aggravated by their suppliers’ poor environmental and labour standards. Reusing materials makes sense. Once batteries reach the ends of their lives, they should go back to a factory where their ingredients can be recovered and put into new batteries.</p>
<p><strong>Which one of the following statements best reflects the most logical, rational and pragmatic message conveyed by the passage?</strong></p>`,
    options: [
      { label: "Green economy is not possible without reusing critical minerals.", isCorrect: false },
      { label: "Every sector of economy should adapt the reuse of material immediately.", isCorrect: false },
      { label: "Circular economy can be beneficial for sustainable growth.", isCorrect: false },
      { label: "Circular use of material resources is the only option for some industries for their survival.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 64,
    question: `<p>In only 50 years, the world’s consumption of raw materials has nearly quadrupled, to more than 100 billion tons. Less than 9% of this is reused. Batteries of old vehicles contain materials such as lithium, cobalt, manganese and nickel that are pricey and can be hard to obtain. Supply chains are long and complicated. Buyers’ risks are being aggravated by their suppliers’ poor environmental and labour standards. Reusing materials makes sense. Once batteries reach the ends of their lives, they should go back to a factory where their ingredients can be recovered and put into new batteries.</p>
<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
<li>Automobile factories are examples of the circular economy.</li>
<li>Economic growth is compatible with circular use of mineral resources.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 65,
    question: `<p>A set (X) of 20 pipes can fill 70% of a tank in 14 minutes. Another set (Y) of 10 pipes fills 3/8th of the tank in 6 minutes. A third set (Z) of 16 pipes can empty half of the tank in 20 minutes. If half of the pipes of set X are closed and only half of the pipes of set Y are open, and all pipes of the set (Z) are open, then how long will it take to fill 50% of the tank?</p>`,
    options: [
      { label: "8 minutes", isCorrect: false },
      { label: "10 minutes", isCorrect: false },
      { label: "12 minutes", isCorrect: false },
      { label: "16 minutes", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 66,
    question: `<p>If n is a natural number, then what is the number of distinct remainders of (1ⁿ + 2ⁿ) when divided by 4?</p>`,
    options: [
      { label: "0", isCorrect: false },
      { label: "1", isCorrect: false },
      { label: "2", isCorrect: false },
      { label: "3", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 67,
    question: `<p>Let P = QQQ be a 3-digit number. What is the HCF of P and 481?</p>`,
    options: [
      { label: "1", isCorrect: false },
      { label: "13", isCorrect: false },
      { label: "37", isCorrect: false },
      { label: "481", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 68,
    question: `<p>What is the 489th digit in the number 123456789101112…?</p>`,
    options: [
      { label: "0", isCorrect: false },
      { label: "3", isCorrect: false },
      { label: "6", isCorrect: false },
      { label: "9", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 69,
    question: `<p>A mobile phone has been stolen. There are 3 suspects P, Q and R. They were questioned knowing that only one of them is guilty. Their responses are as follows:</p>
<ol style="list-style-type: upper-roman;">
<li>P : I did not steal. Q stole it.</li>
<li>Q : R did not steal. I did not steal.</li>
<li>R : I did not steal. I do not know who did it.</li>
</ol>
<p>Who stole the mobile phone?</p>`,
    options: [
      { label: "P", isCorrect: false },
      { label: "Q", isCorrect: false },
      { label: "R", isCorrect: false },
      { label: "Cannot be concluded", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 70,
    question: `<p>Three teams P, Q, R participated in a tournament in which the teams play with one another exactly once. A win fetches a team 2 points and a draw 1 point. A team gets no point for a loss. Each team scored exactly one goal in the tournament. The team P got 3 points, Q got 2 points and R got 1 point.</p>
<p><strong>I.</strong> The result of the match between P and Q is a draw with the score 0 - 0.<br>
<strong>II.</strong> The number of goals scored by R against Q is 1.</p>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },

  {
    id: 71,
    question: `<p>There has been no democracy that has grown economically without corporate capitalism. It helps in modernizing the economy and enabling the transition from rural to urban, and agriculture to industry and services, which are inevitable with growth. It generates jobs and there is no other way to fix a country’s unemployment challenge without a further impetus to private business. Big companies can operate on a large scale and become competitive both domestically and externally. A vibrant corporate capitalist base also leads to additional revenues for the State which in turn, can be used for greater welfare for the marginalized and creating a more level playing field in terms of opportunities.</p>
<p><strong>Which one of the following statements best reflects the critical message conveyed by the author of the passage?</strong></p>`,
    options: [
      { label: "Corporate capitalism is important for economic growth of a State and also for democracy.", isCorrect: false },
      { label: "Corporate capitalism is imperative for a modern State to achieve its political objectives.", isCorrect: false },
      { label: "No State can ensure its economic survival for long without the role of corporate capitalism.", isCorrect: false },
      { label: "Corporate capitalism and democracy have mutual dependence for their continued existence.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 72,
    question: `<p>There has been no democracy that has grown economically without corporate capitalism. It helps in modernizing the economy and enabling the transition from rural to urban, and agriculture to industry and services, which are inevitable with growth. It generates jobs - and there is no other way to fix a country’s unemployment challenge without a further impetus to private business. Big companies can operate on a large scale and become competitive both domestically and externally. A vibrant corporate capitalist base also leads to additional revenues for the State - which in turn, can be used for greater welfare for the marginalized and creating a more level playing field in terms of opportunities.</p>
<p>With reference to the above passage, the following assumptions have been made:</p>
<ol style="list-style-type: upper-roman;">
<li>Corporate capitalism promotes the growth of labour force and provides more employment opportunities.</li>
<li>Poor and marginalized sections of population are benefited by corporate capitalism due to trickle-down effect.</li>
</ol>
<p>Which of the above assumptions is/are valid?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 73,
    question: `<p>“A network of voluntary associations stands as a ‘buffer’ between the relatively powerless individual and the potentially powerful State.”</p>
<p><strong>Which one of the following statements reflects the best explanation of the above passage?</strong></p>`,
    options: [
      { label: "It emphasizes the inability of the State to enforce its will in practice against the opposition of certain groups within it.", isCorrect: false },
      { label: "It is a cooperative organization for the promotion of the well-being and development of the personality of its members.", isCorrect: false },
      { label: "It takes individuals out of a state of isolation and gives them a chance to participate in the common endeavour.", isCorrect: false },
      { label: "It permits citizens to have a variety of loyalties and allegiance.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 74,
    question: `<p>Consider the following statements:</p>
<ol style="list-style-type: upper-roman;">
<li>There exists a natural number which when increased by 50% can have its number of factors unchanged.</li>
<li>There exists a natural number which when increased by 150% can have its number of factors unchanged.</li>
</ol>
<p>Which of the statements given above is/are correct?</p>`,
    options: [
      { label: "I only", isCorrect: false },
      { label: "II only", isCorrect: false },
      { label: "Both I and II", isCorrect: false },
      { label: "Neither I nor II", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 75,
    question: `<p>There are 7 places A, B, C, D, E, F and G in a city connected by various roads AB, AC, CD, DE, BF, EG and FG. A is 6 km south of B. A is 10 km west of C. D is 5 km east of E. C is 6 km north of D. F is 9 km west of B. F is 12 km north of G. A person travels from D to F through these roads. What is the distance covered by the person?</p>`,
    options: [
      { label: "20 km", isCorrect: false },
      { label: "25 km", isCorrect: false },
      { label: "31 km", isCorrect: false },
      { label: "37 km", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 76,
    question: `<p>In a certain code if 64 is written as 343 and 216 is written as 729, then how is 512 written in that code?</p>`,
    options: [
      { label: "1000", isCorrect: false },
      { label: "1331", isCorrect: false },
      { label: "1728", isCorrect: false },
      { label: "2197", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 77,
    question: `<p>What is the remainder when 9³ + 9⁴ + 9⁵ + 9⁶ + … + 9¹⁰⁰ is divided by 6?</p>`,
    options: [
      { label: "0", isCorrect: false },
      { label: "1", isCorrect: false },
      { label: "2", isCorrect: false },
      { label: "3", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 78,
    question: `<p>A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.</p>
<p><strong>Question:</strong> What is the smallest 1-digit number having exactly 4 distinct factors?</p>
<p><strong>Statement I:</strong> 2 is one of the factors.<br>
<strong>Statement II:</strong> 3 is one of the factors.</p>
<p>Which one of the following is correct in respect of the above Question and the Statements?</p>`,
    options: [
      { label: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.", isCorrect: false },
      { label: "The Question can be answered by using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered even without using any of the Statements.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 79,
    question: `<p>A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.</p>
<p><strong>Question:</strong> Let P, Q, R, S be distinct non-zero digits. If PP × PQ = RRSS, where P ≤ 3 and Q ≤ 4, then what is Q equal to?</p>
<p><strong>Statement I:</strong> R = 1.<br>
<strong>Statement II:</strong> S = 2.</p>
<p>Which one of the following is correct in respect of the above Question and the Statements?</p>`,
    options: [
      { label: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.", isCorrect: false },
      { label: "The Question can be answered by using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered even without using any of the Statements.", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 80,
    question: `<p>A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.</p>
<p><strong>Question:</strong> How is Q related to P?</p>
<p><strong>Statement I:</strong> P has two sisters, R and S.<br>
<strong>Statement II:</strong> R’s father is the brother of Q.</p>
<p>Which one of the following is correct in respect of the above Question and the Statements?</p>`,
    options: [
      { label: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.", isCorrect: false },
      { label: "The Question can be answered by using either Statement alone.", isCorrect: false },
      { label: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.", isCorrect: false },
      { label: "The Question cannot be answered even using any of the Statements.", isCorrect: false },
    ],
    solution: "",
  },

]

const sectionsUPSCGS2: Section[] = [
  {
    id: 1,
    name: "General Studies II",
    questions: questionsUPSCGS2
  }
]

export const examDataUPSCGS2: ExamData = {
  title: "UPSC CSAT Test Series 2026",
  duration: 120, // 120 minutes
  startTimestamp: "2025-09-16T15:25:00.0",
  sections: sectionsUPSCGS2
}

/* SSC CGL */

const questionsSSCCGL1: Question[] = [
  {
    id: 1,
    question: `<p>In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How will 'MACHINE' be written in that code?</p>`,
    options: [
      { label: "ZNBJGMF", isCorrect: false },
      { label: "ZNBJFMG", isCorrect: false },
      { label: "ZNBGFMJ", isCorrect: false },
      { label: "ZNBFJMG", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 2,
    question: `<p>If '+' means '×', '×' means '−', '−' means '÷' and '÷' means '+', then what is the value of 15 + 3 − 5 × 2 ÷ 4?</p>`,
    options: [
      { label: "7", isCorrect: false },
      { label: "5", isCorrect: false },
      { label: "9", isCorrect: false },
      { label: "11", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 3,
    question: `<p>Find the missing number in the series: 2, 6, 12, 20, 30, ?</p>`,
    options: [
      { label: "40", isCorrect: false },
      { label: "42", isCorrect: false },
      { label: "44", isCorrect: false },
      { label: "46", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 4,
    question: `<p>Which of the following is the odd one out?</p>`,
    options: [
      { label: "Triangle", isCorrect: false },
      { label: "Square", isCorrect: false },
      { label: "Rectangle", isCorrect: false },
      { label: "Circle", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 5,
    question: `<p>If FRIEND is coded as HUMJTK, then CANDLE will be coded as:</p>`,
    options: [
      { label: "EDRIRL", isCorrect: false },
      { label: "ECQOKF", isCorrect: false },
      { label: "ECRPKF", isCorrect: false },
      { label: "ECOQKF", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 6,
    question: `<p>If CAT is coded as DBU, then DOG will be coded as:</p>`,
    options: [
      { label: "EPH", isCorrect: false },
      { label: "EPI", isCorrect: false },
      { label: "FQH", isCorrect: false },
      { label: "FPI", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 7,
    question: `<p>Find the missing number: 7, 14, 28, 56, ?</p>`,
    options: [
      { label: "84", isCorrect: false },
      { label: "100", isCorrect: false },
      { label: "112", isCorrect: false },
      { label: "120", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 8,
    question: `<p>Which word does not belong to the group?</p>`,
    options: [
      { label: "Apple", isCorrect: false },
      { label: "Banana", isCorrect: false },
      { label: "Orange", isCorrect: false },
      { label: "Potato", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 9,
    question: `<p>If CLOCK is coded as DMPDL, how is WATCH coded?</p>`,
    options: [
      { label: "XBUJI", isCorrect: false },
      { label: "XBVJI", isCorrect: false },
      { label: "XBUKI", isCorrect: false },
      { label: "XAUJI", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 10,
    question: `<p>What comes next in the series: A, C, F, J, O, ?</p>`,
    options: [
      { label: "S", isCorrect: false },
      { label: "T", isCorrect: false },
      { label: "U", isCorrect: false },
      { label: "V", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 11,
    question: `<p>If 12 × 12 = 144 and 23 × 23 = 529, then 34 × 34 = ?</p>`,
    options: [
      { label: "1124", isCorrect: false },
      { label: "1156", isCorrect: false },
      { label: "1189", isCorrect: false },
      { label: "1196", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 12,
    question: `<p>Pointing to a man, a woman says, 'His mother is the only daughter of my father'. How is the man related to the woman?</p>`,
    options: [
      { label: "Son", isCorrect: false },
      { label: "Brother", isCorrect: false },
      { label: "Nephew", isCorrect: false },
      { label: "Cousin", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 13,
    question: `<p>If A = 1, B = 2, C = 3, …, Z = 26, then the code for 'DOG' is:</p>`,
    options: [
      { label: "26", isCorrect: false },
      { label: "22", isCorrect: false },
      { label: "24", isCorrect: false },
      { label: "23", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 14,
    question: `<p>Find the missing number: 1, 4, 9, 16, 25, ?</p>`,
    options: [
      { label: "36", isCorrect: false },
      { label: "30", isCorrect: false },
      { label: "40", isCorrect: false },
      { label: "49", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 15,
    question: `<p>Which is the odd one out?</p>`,
    options: [
      { label: "Pen", isCorrect: false },
      { label: "Pencil", isCorrect: false },
      { label: "Eraser", isCorrect: false },
      { label: "Book", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 16,
    question: `<p>If 3 × 4 = 25, 5 × 2 = 29, then 6 × 1 = ?</p>`,
    options: [
      { label: "30", isCorrect: false },
      { label: "31", isCorrect: false },
      { label: "32", isCorrect: false },
      { label: "33", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 17,
    question: `<p>What comes next in the series: 5, 11, 17, 23, ?</p>`,
    options: [
      { label: "29", isCorrect: false },
      { label: "30", isCorrect: false },
      { label: "31", isCorrect: false },
      { label: "33", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 18,
    question: `<p>If Delhi is coded as EFKMJ, then Mumbai will be coded as:</p>`,
    options: [
      { label: "NVOJCB", isCorrect: false },
      { label: "NVOJBD", isCorrect: false },
      { label: "MVOJCB", isCorrect: false },
      { label: "NUPJCB", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 19,
    question: `<p>Which of the following is different?</p>`,
    options: [
      { label: "Car", isCorrect: false },
      { label: "Bus", isCorrect: false },
      { label: "Train", isCorrect: false },
      { label: "Road", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 20,
    question: `<p>Find the odd one: 2, 4, 8, 16, 34</p>`,
    options: [
      { label: "2", isCorrect: false },
      { label: "4", isCorrect: false },
      { label: "16", isCorrect: false },
      { label: "34", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 21,
    question: `<p>If LION is coded as MJPO, then TIGER is coded as:</p>`,
    options: [
      { label: "UJHFS", isCorrect: false },
      { label: "UJHFR", isCorrect: false },
      { label: "UJIGS", isCorrect: false },
      { label: "UJHGS", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 22,
    question: `<p>Complete the series: 3, 9, 27, 81, ?</p>`,
    options: [
      { label: "121", isCorrect: false },
      { label: "243", isCorrect: false },
      { label: "225", isCorrect: false },
      { label: "256", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 23,
    question: `<p>Find the missing letter: A, C, F, J, O, ?</p>`,
    options: [
      { label: "S", isCorrect: false },
      { label: "T", isCorrect: false },
      { label: "U", isCorrect: false },
      { label: "V", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 24,
    question: `<p>If 8 + 2 = 36, 6 + 4 = 40, then 7 + 3 = ?</p>`,
    options: [
      { label: "45", isCorrect: false },
      { label: "46", isCorrect: false },
      { label: "47", isCorrect: false },
      { label: "50", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 25,
    question: `<p>Which of the following does not belong to the group?</p>`,
    options: [
      { label: "Paris", isCorrect: false },
      { label: "London", isCorrect: false },
      { label: "Tokyo", isCorrect: false },
      { label: "River", isCorrect: false },
    ],
    solution: "",
  },
]

const questionsSSCCGL2: Question[] = [
  {
    id: 26,
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: [
      { label: "Mahatma Gandhi", isCorrect: false },
      { label: "Dr. B.R. Ambedkar", isCorrect: true },
      { label: "Jawaharlal Nehru", isCorrect: false },
      { label: "Sardar Patel", isCorrect: false },
    ],
    solution: ""
  },
  {
    id: 27,
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { label: "Venus", isCorrect: false },
      { label: "Jupiter", isCorrect: false },
      { label: "Mars", isCorrect: true },
      { label: "Saturn", isCorrect: false },
    ],
    solution: ""
  },
  {
    id: 28,
    question: "The currency of Japan is:",
    options: [
      { label: "Yuan", isCorrect: false },
      { label: "Won", isCorrect: false },
      { label: "Yen", isCorrect: true },
      { label: "Ringgit", isCorrect: false },
    ],
    solution: ""
  },
  {
    id: 29,
    question: "Which is the longest river in the world?",
    options: [
      { label: "Amazon", isCorrect: false },
      { label: "Nile", isCorrect: true },
      { label: "Ganges", isCorrect: false },
      { label: "Mississippi", isCorrect: false },
    ],
    solution: ""
  },
  {
    id: 30,
    question: "The headquarters of UNESCO is located in:",
    options: [
      { label: "New York", isCorrect: false },
      { label: "Geneva", isCorrect: false },
      { label: "Paris", isCorrect: true },
      { label: "London", isCorrect: false },
    ],
    solution: ""
  },
]

const questionsSSCCGL3: Question[] = [
  {
    id: 31,
    question: `<p>What is the value of (25% of 80) + (30% of 60)?</p>`,
    options: [
      { label: "35", isCorrect: false },
      { label: "38", isCorrect: false },
      { label: "40", isCorrect: true },
      { label: "42", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 32,
    question: `<p>If the area of a circle is 154 cm², what is its radius? (Take π = 22/7)</p>`,
    options: [
      { label: "7 cm", isCorrect: true },
      { label: "14 cm", isCorrect: false },
      { label: "21 cm", isCorrect: false },
      { label: "28 cm", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 33,
    question: `<p>A train travels 360 km in 4 hours. What is its speed in km/hr?</p>`,
    options: [
      { label: "80", isCorrect: true },
      { label: "85", isCorrect: false },
      { label: "90", isCorrect: false },
      { label: "95", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 34,
    question: `<p>The simple interest on ₹1000 for 2 years at 5% per annum is:</p>`,
    options: [
      { label: "₹50", isCorrect: false },
      { label: "₹100", isCorrect: true },
      { label: "₹150", isCorrect: false },
      { label: "₹200", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 35,
    question: `<p>What is the next number in the sequence: 1, 4, 9, 16, 25, ?</p>`,
    options: [
      { label: "30", isCorrect: false },
      { label: "35", isCorrect: false },
      { label: "36", isCorrect: true },
      { label: "49", isCorrect: false },
    ],
    solution: "",
  },

]

const questionsSSCCGL4: Question[] = [
  {
    id: 36,
    question: `<p>Choose the correct synonym for 'ABUNDANT':</p>`,
    options: [
      { label: "Scarce", isCorrect: false },
      { label: "Plentiful", isCorrect: true },
      { label: "Limited", isCorrect: false },
      { label: "Rare", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 37,
    question: `<p>Identify the grammatically correct sentence:</p>`,
    options: [
      { label: "He don't like coffee", isCorrect: false },
      { label: "He doesn't likes coffee", isCorrect: false },
      { label: "He doesn't like coffee", isCorrect: true },
      { label: "He not like coffee", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 38,
    question: `<p>Choose the correct antonym for 'OPTIMISTIC':</p>`,
    options: [
      { label: "Hopeful", isCorrect: false },
      { label: "Positive", isCorrect: false },
      { label: "Pessimistic", isCorrect: true },
      { label: "Confident", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 39,
    question: `<p>Fill in the blank: 'The meeting has been _____ to next week.'</p>`,
    options: [
      { label: "postponed", isCorrect: true },
      { label: "preponed", isCorrect: false },
      { label: "advanced", isCorrect: false },
      { label: "delayed", isCorrect: false },
    ],
    solution: "",
  },
  {
    id: 40,
    question: `<p>Choose the correctly spelled word:</p>`,
    options: [
      { label: "Occassion", isCorrect: false },
      { label: "Occasion", isCorrect: true },
      { label: "Ocasion", isCorrect: false },
      { label: "Occassion", isCorrect: false },
    ],
    solution: "",
  },

]

const sectionsSSC: Section[] = [
  {
    id: 1,
    name: "General Intelligence & Reasoning",
    questions: questionsSSCCGL1,
  },
  {
    id: 2,
    name: "General Awareness",
    questions: questionsSSCCGL2,
  },
  {
    id: 3,
    name: "Quantitative Aptitude",
    questions: questionsSSCCGL3,
  },
  {
    id: 4,
    name: "English Comprehension",
    questions: questionsSSCCGL4,
  },
]

export const examDataSSCCGL: ExamData = {
  title: "SSC Combined Graduate Level Test Series 2026",
  duration: 58, // (in minutes)
  startTimestamp: "2025-09-18T01:30:00.0",
  sections: sectionsSSC
}

export const examData: ExamData = examDataSSCCGL;