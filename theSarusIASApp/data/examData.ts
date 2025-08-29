import type { ExamData, Question, Section } from "../types/exam";

// eas build:configure
// eas build -p android --profile preview

const questionsUPSCGS1: Question[] = [
  {
    id: 1,
    question: `Consider the following types of vehicles:

I. Full battery electric vehicles
II. Hydrogen fuel cell vehicles
III. Fuel cell electric hybrid vehicles

How many of the above are considered as alternative powertrain vehicles?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 2,
    question: `With reference to Unmanned Aerial Vehicles (UAVs), consider the following statements:

I. All types of UAVs can do vertical landing.
II. All types of UAVs can do automated hovering.
III. All types of UAVs can use battery only as a source of power supply.

How many of the statements given above are correct?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 3,
    question: `In the context of electric vehicle batteries, consider the following elements:

I. Cobalt
II. Graphite
III. Lithium
IV. Nickel

How many of the above usually make up battery cathodes?`,
    options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) All the four"],
  },
  {
    id: 4,
    question: `Consider the following:

I. Cigarette butts
II. Eyeglass lenses
III. Car tyres

How many of them contain plastic?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 5,
    question: `Consider the following substances:

I. Ethanol
II. Nitroglycerine
III. Urea

Coal gasification technology can be used in the production of how many of them?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 6,
    question: `What is the common characteristic of the chemical substances generally known as CL-20, HMX and LLM-105, which are sometimes talked about in media?`,
    options: [
      "(a) These are alternatives to hydro-fluorocarbon refrigerants",
      "(b) These are explosives in military weapons",
      "(c) These are high-energy fuels for cruise missiles",
      "(d) These are fuels for rocket propulsion",
    ],
  },
  {
    id: 7,
    question: `Consider the following statements:

I. It is expected that Majorana 1 chip will enable quantum computing.
II. Majorana 1 chip has been introduced by Amazon Web Services (AWS).
III. Deep learning is a subset of machine learning.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 8,
    question: `With reference to monoclonal antibodies, often mentioned in news, consider the following statements:

I. They are man-made proteins.
II. They stimulate immunological function due to their ability to bind to specific antigens.
III. They are used in treating viral infections like that of Nipah virus.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 9,
    question: `Consider the following statements:

I. No virus can survive in ocean waters.
II. No virus can infect bacteria.
III. No virus can change the cellular transcriptional activity in host cells.

How many of the statements given above are correct?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 10,
    question: `Consider the following statements:

Statement I:

Activated carbon is a good and an attractive tool to remove pollutants from effluent streams and to remediate contaminants from various industries.

Statement II:

Activated carbon exhibits a large surface area and a strong potential for adsorbing heavy metals.

Statement III:

Activated carbon can be easily synthesized from environmental wastes with high carbon content.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 11,
    question: `Consider the following statements:

Statement I:

Studies indicate that carbon dioxide emissions from cement industry account for more than 5% of global carbon emissions.

Statement II:

Silica-bearing clay is mixed with limestone while manufacturing cement.

Statement III:

Limestone is converted into lime during clinker production for cement manufacturing.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 12,
    question: `Consider the following statements:

Statement I:

At the 28th United Nations Climate Change Conference (COP28), India refrained from signing the ‘Declaration on Climate and Health’.

Statement II:

The COP28 Declaration on Climate and Health is a binding declaration; and if signed, it becomes mandatory to decarbonize health sector.

Statement III:

If India’s health sector is decarbonized, the resilience of its health-care system may be compromised.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 13,
    question: `Consider the following statements:

Statement I:

Scientific studies suggest that a shift is taking place in the Earth’s rotation and axis.

Statement II:

Solar flares and associated coronal mass ejections bombarded the Earth’s outermost atmosphere with tremendous amount of energy.

Statement III:

As the Earth’s polar ice melts, the water tends to move towards the equator.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 14,
    question: `Consider the following statements:

Statement I:

Article 6 of the Paris Agreement on climate change is frequently discussed in global discussions on sustainable development and climate change.

Statement II:

Article 6 of the Paris Agreement on climate change sets out the principles of carbon markets.

Statement III:

Article 6 of the Paris Agreement on climate change intends to promote inter-country non-market strategies to reach their climate targets.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 15,
    question: `Which one of the following launched the ‘Nature Solutions Finance Hub for Asia and the Pacific’?`,
    options: [
      "(a) The Asian Development Bank (ADB)",
      "(b) The Asian Infrastructure Investment Bank (AIIB)",
      "(c) The New Development Bank (NDB)",
      "(d) The International Bank for Reconstruction and Development (IBRD)",
    ],
  },
  {
    id: 16,
    question: `With reference to ‘Direct Air Capture’, an emerging technology, which of the following statements is/are correct?

I. It can be used as a way of carbon sequestration.
II. It can be a valuable approach for plastic production and in food processing.
III. In aviation, it can be a source of carbon for combining with hydrogen to create synthetic low-carbon fuel.

Select the correct answer using the code given below:`,
    options: ["(a) I and II only", "(b) III only", "(c) I, II and III", "(d) None of the above statements is correct"],
  },
  {
    id: 17,
    question: `Regarding Peacock tarantula (Gooty tarantula), consider the following statements:

I. It is an omnivorous crustacean.
II. Its natural habitat in India is only limited to some forest areas.
III. In its natural habitat, it is an arboreal species.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) I and III", "(c) II only", "(d) II and III"],
  },
  {
    id: 18,
    question: `Consider the following statements:

I. Carbon dioxide (CO₂) emissions in India are less than 0.5 t CO₂ / capita.
II. In terms of CO₂ emissions from fuel combustion, India ranks second in Asia-Pacific region.
III. Electricity and heat producers are the largest sources of CO₂ emissions in India.

Which of the statements given above is/are correct?`,
    options: ["(a) I and III only", "(b) II only", "(c) II and III only", "(d) I, II and III"],
  },
  {
    id: 19,
    question: `Consider the following pairs :

Plant — Description

I. Cassava : Woody shrub
II. Ginger : Herb with pseudostem
III. Malabar spinach : Herbaceous climber
IV. Mint : Annual shrub
V. Papaya : Woody shrub

How many of the above pairs are correctly matched?`,
    options: ["(a) Only two", "(b) Only three", "(c) Only four", "(d) All the five"],
  },
  {
    id: 20,
    question: `With reference to the planet Earth, consider the following statements:

I. Rain forests produce more oxygen than that produced by oceans.
II. Marine phytoplankton and photosynthetic bacteria produce about 50% of world’s oxygen.
III. Well-oxygenated surface water contains several folds higher oxygen than that in atmospheric air.

Which of the statements given above is/are correct?`,
    options: ["(a) I and II", "(b) II only", "(c) I and III", "(d) None of the above statements is correct"],
  },
  {
    id: 21,
    question: `Consider the following statements about Raja Ram Mohan Roy:

I. He possessed great love and respect for the traditional philosophical systems of the East.
II. He desired his countrymen to accept the rational and scientific approach and the principle of human dignity and social equality of all men and women.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 22,
    question: `Consider the following subjects with regard to the Non-Cooperation Programme:

I. Boycott of law-courts and foreign cloth
II. Observance of strict non-violence
III. Retention of titles and honours without using them in public
IV. Establishment of Panchayats for settling disputes

How many of the above were parts of the Non-Cooperation Programme?`,
    options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) All the four"],
  },
  {
    id: 23,
    question: `The irrigation device called ‘Araghatta’ was:`,
    options: [
      "(a) a water bag made of leather pulled over a pulley",
      "(b) a large wheel with earthen pots tied to the outer ends of its spokes",
      "(c) a larger earthen pot driven by bullocks",
      "(d) a large water bucket pulled up by rope directly by hand",
    ],
  },
  {
    id: 24,
    question: `Who among the following rulers in ancient India had assumed the titles ‘Mattavilasa’, ‘Vichitrachitta’ and ‘Gunabhara’?`,
    options: ["(a) Mahendravarman I", "(b) Simhavishnu", "(c) Narasimhavarman I", "(d) Simhavarman"],
  },
  {
    id: 25,
    question: `Fa-hien (Faxian), the Chinese pilgrim, travelled to India during the reign of:`,
    options: ["(a) Samudragupta", "(b) Chandragupta II", "(c) Kumaragupta I", "(d) Skandagupta"],
  },
  {
    id: 26,
    question: `Who among the following led a successful military campaign against the kingdom of Srivijaya, the powerful maritime State, which ruled the Malay Peninsula, Sumatra, Java and the neighbouring islands?`,
    options: ["(a) Amoghavarsha (Rashtrakuta)", "(b) Prataparudra (Kakatiya)", "(c) Rajendra I (Chola)", "(d) Vishnuvardhana (Hoysala)"],
  },
  {
    id: 27,
    question: `With reference to ancient India (600–322 BC), consider the following pairs:

Territorial Region — River Flowing in the Region

I. Asmaka — Godavari
II. Kamboja — Vipas
III. Avanti — Mahanadi
IV. Kosala — Sarayu

How many of the pairs given above are correctly matched?`,
    options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) All the four"],
  },
  {
    id: 28,
    question: `The first Gandharva Mahavidyalaya, a music training school, was set up in 1901 by Vishnu Digambar Paluskar in:`,
    options: ["(a) Delhi", "(b) Gwalior", "(c) Ujjain", "(d) Lahore"],
  },
  {
    id: 29,
    question: `Ashokan inscriptions suggest that the ‘Pradeshika’, ‘Rajuka’, and ‘Yukta’ were important officers at the:`,
    options: ["(a) village-level administration", "(b) district-level administration", "(c) provincial administration", "(d) level of the central administration"],
  },
  {
    id: 30,
    question: `Consider the following statements in respect of the Non-Cooperation Movement:

I. The Congress declared the attainment of ‘Swaraj’ by all legitimate and peaceful means to be its objective.
II. It was to be implemented in stages with civil disobedience and non-payment of taxes for the next stage only if ‘Swaraj’ did not come within a year and the Government resorted to repression.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 31,
    question: `With reference to investments, consider the following:

I. Bonds
II. Hedge Funds
III. Stocks
IV. Venture Capital

How many of the above are treated as Alternative Investment Funds?`,
    options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) All the four"],
  },
  {
    id: 32,
    question: `Which of the following are the sources of income for the Reserve Bank of India?

I. Buying and selling Government bonds
II. Buying and selling foreign currency
III. Pension fund management
IV. Lending to private companies
V. Printing and distributing currency notes

Select the correct answer using the code given below:`,
    options: ["(a) I and II only", "(b) II, III and IV", "(c) I, III, IV and V", "(d) I, II and V"],
  },
  {
    id: 33,
    question: `With reference to the Government of India, consider the following information:

Organization — Some of its functions — It works under

I. Directorate of Enforcement — Enforcement of the Fugitive Economic Offenders Act, 2018 — Internal Security Division-I, Ministry of Home Affairs
II. Directorate of Revenue Intelligence — Enforces the Provisions of the Customs Act, 1962 — Department of Revenue, Ministry of Finance
III. Directorate General of Systems and Data Management — Carrying out big data analytics to assist tax officers for better policy and nabbing tax evaders — Department of Revenue, Ministry of Finance

In how many of the above rows is the information correctly matched?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 34,
    question: `Consider the following statements:

I. The Reserve Bank of India mandates all the listed companies in India to submit a Business Responsibility and Sustainability Report (BRSR).
II. In India, a company submitting a BRSR makes disclosure in the report that are largely non-financial in nature.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 35,
    question: `Consider the following statements:

Statement I:

In India, income from allied agricultural activities like poultry farming is exempted from income tax.

Statement II:

Income from rural agricultural land is exempt from tax under the provisions of the Income-tax Act, 1961.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I",
      "(c) Statement I is correct but Statement II is incorrect",
      "(d) Statement I is incorrect but Statement II is correct",
    ],
  },
  {
    id: 36,
    question: `Consider the following statements:

I. India has joined the Minerals Security Partnership as a member.
II. India is a resource-rich country in all the 30 critical minerals that (It) has identified.
III. The Parliament in 2023 has amended the Mines and Minerals (Development and Regulation) Act, 1957 empowering the Central Government to exclusively auction mining lease and composite license for certain critical minerals.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 37,
    question: `Consider the following statements:

Statement I:

As regards returns from an investment in a company, generally, bondholders are considered to be relatively at lower risk than stockholders.

Statement II:

Bondholders are lenders to a company whereas stockholders are its owners.

Statement III:

For repayment purpose, bondholders are prioritized over stockholders by a company.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement I and Statement II are correct and Statement I explains Statement II",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 38,
    question: `Consider the following statements:

I. India accounts for a very large portion of all equity option contracts traded globally thus exhibiting a great boom.
II. India’s stock market has grown rapidly in the recent past even overtaking Hong Kong’s at some point of time.
III. There is no regulatory body either to warn the small investors about the risks of options trading or to act on unregistered financial advisors in this regard.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 39,
    question: `Consider the following statements:

Statement I:

Circular economy reduces the emissions of greenhouse gases.

Statement II:

Circular economy reduces the use of raw materials as inputs.

Statement III:

Circular economy reduces wastage in the production process.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 40,
    question: `Consider the following statements:

I. Capital receipts create a liability or cause a reduction in the assets of the Government.
II. Borrowings and disinvestment are capital receipts.
III. Interest received on loans creates a liability of the Government.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 41,
    question: `Consider the following countries:

I. Austria
II. Bulgaria
III. Croatia
IV. Serbia
V. Sweden
VI. North Macedonia

How many of the above are members of the North Atlantic Treaty Organization?`,
    options: ["(a) Only three", "(b) Only four", "(c) Only five", "(d) All the six"],
  },
  {
    id: 42,
    question: `Consider the following countries:

I. Bolivia
II. Brazil
III. Colombia
IV. Ecuador
V. Paraguay
VI. Venezuela

Andes mountains pass through how many of the above countries?`,
    options: ["(a) Only two", "(b) Only three", "(c) Only four", "(d) Only five"],
  },
  {
    id: 43,
    question: `Consider the following water bodies

I. Lake Tanganyika
II. Lake Tonlé Sap
III. Patos Lagoon

Through how many of them does the equator pass?`,
    options: ["(a) Only one", "(b) Only two", "(c) All the three", "(d) None"],
  },
  {
    id: 44,
    question: `Consider the following statements about turmeric during the year 2022–23:

I. India is the largest producer and exporter of turmeric in the world.
II. More than 30 varieties of turmeric are grown in India.
III. Maharashtra, Telangana, Karnataka and Tamil Nadu are major turmeric producing States in India.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 45,
    question: `Which of the following are the evidences of the phenomenon of continental drift?

I. The belt of ancient rocks from Brazil coast matches with those from Western Africa.
II. The gold deposits of Ghana are derived from the Brazil plateau when the two continents lay side by side.
III. The Gondwana system of sediments from India is known to have its counterparts in six different landmasses of the Southern Hemisphere.

Select the correct answer using the code given below.`,
    options: ["(a) I and III only", "(b) I and II only", "(c) I, II and III", "(d) II and III only"],
  },
  {
    id: 46,
    question: `Consider the following statements:

Statement I:

The amount of dust particles in the atmosphere is more in subtropical and temperate areas than in equatorial and polar regions.

Statement II:

Subtropical and temperate areas have less dry winds.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II explains Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I",
      "(c) Statement I is correct but Statement II is not correct",
      "(d) Statement I is not correct but Statement II is correct",
    ],
  },
  {
    id: 47,
    question: `Consider the following statements:

Statement I:

In January, in the Northern Hemisphere, the isotherms bend equatorward while crossing the landmasses, and poleward while crossing the oceans.

Statement II:

In January, the air over the oceans is warmer than that over the landmasses in the Northern Hemisphere.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II explains Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I",
      "(c) Statement I is correct but Statement II is not correct",
      "(d) Statement I is not correct but Statement II is correct",
    ],
  },
  {
    id: 48,
    question: `Consider the following statements:

Statement I:

In the context of effect of water on rocks, chalk is known as a very permeable rock – whereas clay is known as quite an impermeable or least permeable rock.

Statement II:

Chalk is porous and hence can absorb water.

Statement III:

Clay is not at all porous.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement II and Statement III are correct and both of them explain Statement I",
      "(b) Both Statement II and Statement III are correct but only one of them explains Statement I",
      "(c) Only one of the Statements II and III is correct and that explains Statement I",
      "(d) Neither Statement II nor Statement III is correct",
    ],
  },
  {
    id: 49,
    question: `Consider the following statements:

I. Without the atmosphere, temperature would be well below freezing point everywhere on the Earth’s surface.
II. Heat absorbed and trapped by the atmosphere maintains our planet’s average temperature.
III. Atmosphere’s gases, like carbon dioxide, are particularly good at absorbing and trapping radiation.

Which of the statements given above are correct?`,
    options: ["(a) I and III only", "(b) I and II only", "(c) I, II and III", "(d) II and III only"],
  },
  {
    id: 50,
    question: `Consider the following statements about the Rashtriya Gokul Mission:

I. It is important for the upliftment of the rural poor as the majority of low-producing indigenous animals are with small and marginal farmers and landless labourers.
II. It was initiated to promote indigenous cattle and buffalo rearing and conservation in a scientific and holistic manner.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 51,
    question: `Consider the following statements:

I. Panchayats at the intermediate level exist in all States.
II. To be eligible to be a Member of a Panchayat at the intermediate level, a person should attain the age of thirty years.
III. The Chief Minister of a State constitutes a commission to review the financial position of Panchayats at the intermediate levels and to make recommendations regarding the distribution of net proceeds of taxes and duties, leviable by the State, between the State and Panchayats at the intermediate level.

Which of the statements given above are not correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 52,
    question: `Consider the following statements in respect of BIMSTEC:

I. It is a (regional) organization consisting of seven member States till January 2025.
II. It came into existence with the signing of the Dhaka Declaration, 1999.
III. Bangladesh, India, Sri Lanka, Thailand and Nepal are founding member States of BIMSTEC.
IV. In BIMSTEC, the subsector of ‘tourism’ is being led by India.

Which of the statements given above is/are correct?`,
    options: ["a) I and II", "(b) II and III", "(c) I and IV", "(d) I only"],
  },
  {
    id: 53,
    question: `Who amongst the following are members of the Jury to select the recipient of ‘Gandhi Peace Prize’?

I. The President of India
II. The Prime Minister of India
III. The Chief Justice of India
IV. The Leader of Opposition in the Lok Sabha

Select the correct answer using the code given below.`,
    options: ["(a) II and IV only", "(b) I, II and III", "(c) II, III and IV", "(d) I and III only"],
  },
  {
    id: 54,
    question: `GPS-Aided Geo Augmented Navigation (GAGAN) uses a system of ground stations to provide necessary augmentation. Which of the following statements is/are correct in respect of GAGAN?

I. It is designed to provide additional accuracy and integrity.
II. It will allow more uniform and high-quality air traffic management.
III. It will provide benefits only in aviation but not in other modes of transportation.

Select the correct answer using the code given below:`,
    options: ["(a) I, II and III", "(b) II and III only", "(c) I only", "(d) I and II only"],
  },
  {
    id: 55,
    question: `Consider the following statements regarding AI Action Summit held in Grand Palais, Paris in February 2025:

I. Co-chaired with India, the event builds on the advances made at the Bletchley Park Summit held in 2023 and the Seoul Summit held in 2024.
II. Along with other countries, US and UK also signed the declaration on inclusive and sustainable AI.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 56,
    question: `Consider the following pairs:

I. International Year of the Woman Farmer : 2026
II. International Year of Sustainable and Resilient Tourism : 2027
III. International Year of Peace and Trust : 2025
IV. International Year of Asian Awareness and Planetary Defence : 2029

How many of the pairs are correctly matched?`,
    options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) All the four"],
  },
  {
    id: 57,
    question: `Consider the following statements with regard to BRICS:

I. 16th BRICS Summit was held under the Chairship of Russia in Kazan.
II. Indonesia has become a full member of BRICS.
III. The theme of the 16th BRICS Summit was Strengthening Multiculturalism for Just Global Development and Security.

Which of the statements given above is/are correct?`,
    options: ["(a) I and II", "(b) II and III", "(c) I and III", "(d) I only"],
  },
  {
    id: 58,
    question: `Consider the following statements about Lokpal:

I. The power of Lokpal applies to public servants of India, but not to the Indian public servants posted outside India.
II. The Chairperson or a Member shall not be a Member of the Parliament or a Member of the Legislature of any State or Union Territory, and only the Chief Justice of India, whether incumbent or retired, has to be its Chairperson.
III. The Chairperson or a Member shall not be a person of less than forty-five years of age on the date of assuming office as the Chairperson or Member, as the case may be.
IV. Lokpal cannot inquire into the allegations of corruption against a sitting Prime Minister of India.

Which of the statements given above is/are correct?`,
    options: ["(a) III only", "(b) II and III", "(c) I and IV", "(d) None of the above statements is correct"],
  },
  {
    id: 59,
    question: `Consider the following statements in respect of the first Kho Kho World Cup:

I. The event was held in Delhi, India.
II. Indian men beat Nepal with a score of 78–40 in the final to become the World Champion in men’s category.
III. Indian women beat Nepal with a score of 54–36 in the final to become the World Champion in women’s category.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 60,
    question: `Consider the following statements:

I. In the finals of the 45th Chess Olympiad held in 2024, Gukesh Dommaraju became the world’s youngest winner after defeating the Russian player Nepomniachtchi.
II. Abhimanyu Mishra, an American chess player, holds the record of becoming the world’s youngest ever Grandmaster.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 61,
    question: `Consider the following statements:

Statement I:

Some rare earth elements are used in the manufacture of flat television screens and computer monitors.

Statement II:

Some rare earth elements have phosphorescent properties.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II explains Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I",
      "(c) Statement I is correct but Statement II is not correct",
      "(d) Statement I is not correct but Statement II is correct",
    ],
  },
  {
    id: 62,
    question: `Consider the following statements:

I. Indian Railways have prepared a National Rail Plan (NRP) to create a “future ready” railway system by 2028.
II. “Kavach” is an Automatic Train Protection system developed in collaboration with Germany.
III. The “Kavach” system consists of RFID tags fitted on the track in station sections.

Which of the statements given above are not correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 63,
    question: `Consider the following space missions:

I. Axiom-4
II. SpaDeX
III. Gaganyaan

How many of the space missions given above encourage and support micro-gravity research?`,
    options: ["(a) Only one", "(b) Only two", "(c) All three", "(d) None"],
  },
  {
    id: 64,
    question: `With reference to India’s defence, consider the following pairs:

Aircraft type — Description

I. Dornier-228 — Maritime patrol aircraft
II. IL-76 — Supersonic combat aircraft
III. C-17 Globemaster III — Military transport aircraft

How many of the pairs given above are correctly matched?`,
    options: ["(a) Only one", "(b) Only two", "(c) All three", "(d) None"],
  },
  {
    id: 65,
    question: `Artificial way of causing rainfall to reduce air pollution makes use of`,
    options: [
      "(a) Silver iodide and potassium iodide",
      "(b) Silver nitrate and potassium iodide",
      "(c) Silver iodide and potassium nitrate",
      "(d) Silver nitrate and potassium chloride",
    ],
  },
  {
    id: 66,
    question: `Consider the following statements with regard to pardoning power of the President of India:

I. The exercise of this power by the President can be subjected to limited judicial review.
II. The President can exercise this power without the advice of the Central Government.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 67,
    question: `Consider the following statements:

I. On the dissolution of the House of the People, the Speaker shall not vacate his/her office until immediately before the first meeting of the House of the People after the dissolution.
II. According to the provisions of the Constitution of India, a Member of the House of the People on being elected as Speaker shall resign from his/her political party immediately.
III. The Speaker of the House of the People may be removed from his/her office by a resolution of the House of the People passed by a majority of all the then Members of the House, provided that no resolution shall be moved unless at least fourteen days’ notice has been given of the intention to move the resolution.

Which of the statements given above are correct?`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 68,
    question: `Consider the following statements:

I. If any question arises as to whether a Member of the House of the People has become subject to disqualification under the 10th Schedule, the President’s decision in accordance with the opinion of the Council of Union Ministers shall be final.
II. There is no mention of the word ‘political party’ in the Constitution of India.

Which of the statements given above is/are correct?`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 69,
    question: `Consider the following statements:

Statement I:

In India, State Governments have no power for making rules for grant of concessions in respect of extraction of minor minerals even though such minerals are located in their territories.

Statement II:

In India, the Central Government has the power to notify minor minerals under the relevant law.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II explains Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I",
      "(c) Statement I is correct but Statement II is not correct",
      "(d) Statement I is not correct but Statement II is correct",
    ],
  },
  {
    id: 70,
    question: `Which organization has enacted the Nature Restoration Law (NRL) to tackle climate change and biodiversity loss?`,
    options: [
      "(a) The European Union",
      "(b) The World Bank",
      "(c) The Organization for Economic Cooperation and Development",
      "(d) The Food and Agriculture Organization",
    ],
  },
  {
    id: 71,
    question: `Suppose the revenue expenditure is ₹80,000 crores and the revenue receipts of the Government are ₹60,000 crores.

The Government budget also shows borrowings of ₹10,000 crores and interest payments of ₹6,000 crores.

Which of the following statements are correct?

I. Revenue deficit is ₹20,000 crores.
II. Fiscal deficit is ₹10,000 crores.
III. Primary deficit is ₹4,000 crores.

Select the correct answer using the code given below:`,
    options: ["(a) I and II only", "(b) II and III only", "(c) I and III only", "(d) I, II and III"],
  },
  {
    id: 72,
    question: `India is one of the founding members of the International North-South Transport Corridor (INSTC), a multimodal transportation corridor, which will connect`,
    options: [
      "(a) India to Central Asia to Europe via Iran",
      "(b) India to Central Asia via China",
      "(c) India to South-East Asia through Bangladesh and Myanmar",
      "(d) India to Europe through Azerbaijan",
    ],
  },
  {
    id: 73,
    question: `Consider the following statements:

Statement I:

Of the two major ethanol producers in the world, i.e., Brazil and the United States of America, the former produces more ethanol than the latter.

Statement II:

Unlike in the United States of America where corn is the principal feedstock for ethanol production, sugarcane is the principal feedstock for ethanol production in Brazil.

Which one of the following is correct in respect of the above statements?`,
    options: [
      "(a) Both Statement I and Statement II are correct and Statement II explains Statement I",
      "(b) Both Statement I and Statement II are correct but Statement II does not explain Statement I",
      "(c) Statement I is correct but Statement II is not correct",
      "(d) Statement I is not correct but Statement II is correct",
    ],
  },
  {
    id: 74,
    question: `The World Bank warned that India could become one of the first places where wet-bulb temperatures routinely exceed 35°C. Which of the following statements best reflect(s) the implication of the above-said report?

I. Peninsular India will most likely suffer from flooding, tropical cyclones and droughts.
II. The survival of animals including humans will be affected as shedding of their body heat through perspiration becomes difficult.

Select the correct answer using the code given below.`,
    options: ["(a) I only", "(b) II only", "(c) Both I and II", "(d) Neither I nor II"],
  },
  {
    id: 75,
    question: `A country’s fiscal deficit stands at ₹50,000 crores.

It is receiving ₹10,000 crores through non-debt creating capital receipts.

The country’s interest liabilities are ₹1,500 crores.

What is the gross primary deficit?`,
    options: ["(a) ₹48,500 crores", "(b) ₹51,500 crores", "(c) ₹58,500 crores", "(d) None of the above"],
  },
  {
    id: 76,
    question: `Which of the following statements with regard to recommendations of the 15th Finance Commission of India are correct?

I. It has recommended grants of ₹ 4,800 crores from the year 2022-23 to the year 2025-26 for incentivizing States to enhance educational outcomes.
II. 45% of the net proceeds of Union taxes are to be shared with States.
III. ₹ 45,000 crores are to be kept as performance-based incentive for all States for carrying out agricultural reforms.
IV. It reintroduced tax effort criteria to reward fiscal performance.

Select the correct answer using the code given below.`,
    options: ["(a) I, II and III", "(b) I, II and IV", "(c) I, III and IV", "(d) II, III and IV"],
  },
  {
    id: 77,
    question: "Consider the following statements in respect of the International Bank for Reconstruction and Development (IBRD): I. It provides loans and guarantees to middle income countries. II. It works single-handedly to help developing countries to reduce poverty. III. It was established to help Europe rebuild after the World War II. Which of the statements given above are correct?",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
  },
  {
    id: 78,
    question: "Consider the following statements in respect of RTGS and NEFT: I. In RTGS, the settlement time is instantaneous while in case of NEFT, it takes some time to settle payments. II. In RTGS, the customer is charged for inward transactions while that is not the case for NEFT. III. Operating hours for RTGS are restricted on certain days while this is not true for NEFT. Which of the statements given above is/are correct?",
    options: ["I only", "I and II", "I and III", "III only"],
  },
  {
    id: 79,
    question: "Consider the following countries: I. United Arab Emirates II. France III. Germany IV. Singapore V. Bangladesh How many countries amongst the above are there other than India where international merchant payments are accepted under UPI?",
    options: ["Only two", "Only three", "Only four", "All the five"],
  },
  {
    id: 80,
    question: "Consider the following statements about PM Surya Ghar Muft Bijli Yojana: I. It targets installation of one crore solar rooftop panels in the residential sector. II. The Ministry of New and Renewable Energy aims to impart training on installation, operation, maintenance, and repairs of solar rooftop systems at grassroots levels. III. It aims to create more than three lakhs skilled manpower through fresh skilling, and up-skilling, under scheme component of capacity building. Which of the statements given above are correct?",
    options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
  },
  {
    id: 81,
    question: "With reference to the Indian polity, consider the following statements: I. An Ordinance can amend any Central Act. II. An Ordinance can abridge a Fundamental Right. III. An Ordinance can come into effect from a back date. Which of the statements given above are correct?",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
  },
  {
    id: 82,
    question: "Consider the following pairs: State. Description I. Arunachal Pradesh – The capital is named after a fort, and the State has two National Parks II. Nagaland – The State came into existence on the basis of a Constitutional Amendment Act III. Tripura – Initially a Part ‘C’ State, it became a centrally administered territory with the reorganization of States in 1956 and later attained the status of a full-fledged State How many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 83,
    question: "With reference to India, consider the following: I. The Inter-State Council II. The National Security Council III. Zonal Councils How many of the above were established as per the provisions of the Constitution of India?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 84,
    question: "Consider the following statements: I. The Constitution of India explicitly mentions that in certain spheres the Governor of a State acts in his/her own discretion. II. The President of India can, of his/her own, reserve a bill passed by a State Legislature for his/her consideration without it being forwarded by the Governor of the State concerned. Which of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 85,
    question: "Consider the following pairs: I. Separation of Judiciary from the Executive in the public services of the State – The Directive Principles of the State Policy II. Valuing and preserving the rich heritage of our composite culture – The Fundamental Duties III. Prohibition of employment of children below the age of 14 years in factories – The Fundamental Rights How many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 86,
    question: "With reference to the Constitution of India, if an area in a State is declared as Scheduled Area under the Fifth Schedule: I. The State Government loses its executive power in such areas and a local body assumes total administration. II. The Union Government can take over the total administration of such areas under certain circumstances on the recommendations of the Governor. Which of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 87,
    question: "With reference to India, consider the following pairs: I. The National Automotive Board – Ministry of Commerce and Industry II. The Coir Board – Ministry of Heavy Industries III. The National Centre for Trade Information – Ministry of Micro, Small and Medium Enterprises How many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 88,
    question: "Consider the following subjects under the Constitution of India: I. List I – Union List, in the Seventh Schedule II. Extent of the executive power of a State III. Conditions of the Governor’s office For a constitutional amendment with respect to which of the above, ratification by the Legislatures of not less than one-half of the States is required before presenting the bill to the President of India for assent?",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
  },
  {
    id: 89,
    question: "With reference to the Indian polity, consider the following statements: I. The Governor of a State is not answerable to any court for the exercise and performance of the powers and duties of his/her office. II. No criminal proceedings shall be instituted or continued against the Governor during his/her term of office. III. Members of a State Legislature are not liable to any proceedings in any court in respect of anything said within the House. Which of the statements given above are correct?",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
  },
  {
    id: 90,
    question: "Consider the following activities: I. Production of crude oil II. Refining, storage and distribution of petroleum III. Marketing and sale of petroleum products IV. Production of natural gas How many of the above activities are regulated by the Petroleum and Natural Gas Regulatory Board in our country?",
    options: ["Only one", "Only two", "Only three", "All the four"],
  },
  {
    id: 91,
    question: "“Sedition has become my religion” was the famous statement given by Gandhiji at the time of:",
    options: ["the Champaran Satyagraha", "publicly violating Salt Law at Dandi", "attending the Second Round Table Conference in London", "the launch of the Quit India Movement"],
  },
  {
    id: 92,
    question: "The famous female figurine known as “Dancing Girl,” found at Mohenjo-daro, is made of:",
    options: ["carnelian", "clay", "bronze", "gold"],
  },
  {
    id: 93,
    question: "Who provided legal defence to the people arrested in the aftermath of Chauri Chaura incident?",
    options: ["C. R. Das", "Madan Mohan Malaviya and Krishna Kant", "Dr. Saifuddin Kitchlew and Khwaja Hasan Nizami", "M. A. Jinnah"],
  },
  {
    id: 94,
    question: "Subsequent to which one of the following events, Gandhiji, who consistently opposed untouchability and appealed for its eradication from all spheres, decided to include the upliftment of ‘Harijans’ in his political and social programme?",
    options: ["The Poona Pact", "The Gandhi-Irwin Agreement (Delhi Pact)", "Arrest of Congress leadership at the time of the Quit India Movement", "Promulgation of the Government of India Act, 1935"],
  },
  {
    id: 95,
    question: "Consider the following fruits: I. Papaya II. Pineapple III. Guava How many of the above were introduced in India by the Portuguese in the sixteenth and seventeenth centuries?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 96,
    question: "Consider the following countries: I. United Kingdom II. Denmark III. New Zealand IV. Australia V. Brazil How many of the above countries have more than four time zones?",
    options: ["All the five", "Only four", "Only three", "Only two"],
  },
  {
    id: 97,
    question: "Consider the following statements: I. Anadyr in Siberia and Nome in Alaska are a few kilometers from each other, but when people are waking up and getting set for breakfast in these cities, it would be different days. II. When it is Monday in Anadyr, it is Tuesday in Nome. Which of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 98,
    question: "Who among the following was the founder of the ‘Self-Respect Movement’?",
    options: ["‘Periyar’ E. V. Ramaswamy Naicker", "Dr. B. R. Ambedkar", "Bhaskarrao Jadhav", "Dinkarrao Javalkar"],
  },
  {
    id: 99,
    question: "Consider the following pairs: I. Botswana – Diamond II. Chile – Lithium III. Indonesia – Nickel In how many of the above rows is the given information correctly matched?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
  {
    id: 100,
    question: "Consider the following pairs: I. Mallorca – Italy II. Normandy – Spain III. Sardinia – France In how many of the above rows is the given information correctly matched?",
    options: ["Only one", "Only two", "All the three", "None"],
  },
]

const questionsUPSCGS2: Question[] = [
  {
    id: 1,
    question: "Read the following passage and answer the items that follow the passage. Your answers to these items should be based on the passages only. \n\nEach State in India faces a distinctive set of challenges regarding the impact of warming, but also offers its own set of opportunities for reducing emissions depending on its natural resources. For example, coastal States need to take action to protect their shores from sea level rise, districts that are drier need to prepare for variable monsoon precipitation. Himalayan regions have their own unique challenges, and selected parts of peninsular India and offshore areas offer great opportunities for harnessing wind power. These various aspects need to be considered for developing clear and sustainable goals for the future.\n\nWhich one of the following statements best reflects the most logical, rational and pragmatic message conveyed by the author of the passage?",
    options: ["The mitigation and adaptation strategies to address/tackle the climate change is essentially the responsibility of each State.", "India is too diverse to implement any effective strategy or programme to address/tackle the climate change.", "It is basically the responsibility of the Union Government to implement the climate action plans and ensure net zero emissions.", "India needs to formulate effective climate change mitigation and adaptation strategies at the State/region level."],
  },
  {
    id: 2,
    question: "Read the following passage and answer the items that follow the passage. Your answers to these items should be based on the passage only. \n\nEach State in India faces a distinctive set of challenges regarding the impact of warming, but also offers its own set of opportunities for reducing emissions depending on its natural resources. For example, coastal States need to take action to protect their shores from sea level rise, districts that are drier need to prepare for variable monsoon precipitation. Himalayan regions have their own unique challenges, and selected parts of peninsular India and offshore areas offer great opportunities for harnessing wind power. These various aspects need to be considered for developing clear and sustainable goals for the future.\n\nWith reference to the passage, the following assumptions have been made: \n I. Green energy production can be linked to/integrated with the climate change mitigation and adaptation strategies. \n II. Effects of climate change are much more severe in coastal and mountainous regions. \n Which of the above assumptions is/are valid ?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 3,
    question: "Read the following two passages and answer the items that follow the passages. Your answers to these items should be based on the passages only. \n\nIf the social inequality is the most acutely felt social problem in India, insecurity, more than poverty, is the most acutely felt economic problem. Besides those below the official poverty line, even those just over the poverty line are subject to multiple economic insecurities of various kinds (due to wealth and/or health risks, market fluctuations, job-related uncertainties). Many Government policies are actually intended towards mitigating these insecurities.\n\nWhich one of the following statements best reflects the critical message conveyed by the passage?",
    options: ["India's political executive should be aware that poverty and social inequality and the consequent sense of insecurity is the main social problem.", "In India, poverty is the primary reason for social inequality and insecurity.", "Poverty and social inequality are so intricately linked that they pose an unmanageable crisis for India.", "Insecurity, more than poverty, is the main economic issue that Government policies must address."],
  },
  {
    id: 4,
    question: "Read the following two passages and answer the items that follow the passages. Your answers to these items should be based on the passages only. \n\nIf the social inequality is the most acutely felt social problem in India, insecurity, more than poverty, is the most acutely felt economic problem. Besides those below the official poverty line, even those just over the poverty line are subject to multiple economic insecurities of various kinds (due to wealth and/or health risks, market fluctuations, job-related uncertainties). Many Government policies are actually intended towards mitigating these insecurities.\n\nWith reference to the passage, the following assumptions have been made: \n I. People above the poverty line also are prone to suffer from anxiety about economic insecurity. \n II. Eradication of poverty can result in peace and social equality in the country. \n Which of the above assumptions is/are valid ?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 5,
    question: "A solid cube is painted yellow on all its faces. The cube is then cut into 60 smaller but equal pieces by making the minimum number of cuts. Which of the following statements is/are correct?\n\nI. The minimum number of cuts is 9.\nII. The number of smaller pieces which are not painted on any face is 6.",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 6,
    question: "If 7 x 24 = 25 and 12 x 16 = 20, then what is 16 x 63 equal to?",
    options: ["70", "66", "65", "64"],
  },
  {
    id: 7,
    question: "The petrol price shot up by 10% as a result of the hike in crude oil prices. The price of petrol before the hike was 90 per litre. A person travels 2200 km every month and his car gives a mileage of 16 km per litre. By how many km should he reduce his travel if he wants to maintain his expenditure at the previous level?",
    options: ["180 km", "200 km", "220 km", "240 km"],
  },
  {
    id: 8,
    question: "A 4-digit number N is such that when divided by 3, 5, 6, 9 leaves a remainder 1, 3, 4, 7 respectively. What is the smallest value of N?",
    options: ["1068", "1072", "1078", "1082"],
  },
  {
    id: 9,
    question: "Consider the following statements:\n\nI. If A ≤ B > C < D > E > F ≥ G = H; then B is always greater than E.\nII. If P > Q = R ≥ S = T ≤ U = V > W; then S is always less than V.\n\nWhich of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 10,
    question: "What is the unit digit in the multiplication of 1 × 3 × 5 × 7 × 9 × … × 999?",
    options: ["1", "3", "5", "9"],
  },
  {
    id: 11,
    question: `In our country, regrettably, teaching and learning for the examination have been our forte but the new demands of society and the future of work require critical and independent thinking, learning through doing, asking questions from multiple disciplinary perspectives on the same issue, using evidence for building arguments, and reflecting and articulation. Higher education should not “either be a mere servant of the government policy or a passive respondent to public mood.” Higher learning is all about how to think rather than what to think. Teaching has to be re-invented.

Which one of the following statements best reflects the central idea conveyed by the passage?`,
    options: [
      "India does not have enough resources for promoting quality education in its universities.",
      "The institutions of higher learning in the country should not be under the control of the Government.",
      "Classroom approach to higher education should be done away with.",
      "Classroom needs to be reimagined and teaching needs to be re-invented."
    ],
  },
  {
    id: 12,
    question: `With reference to the above passage, the following assumptions have been made:

I. Higher education is a constantly evolving subject that needs to align towards new developments in all spheres of society.
II. In our country, sufficient funds are not allocated for promoting higher education.

Which of the above assumptions is/are valid?`,
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 13,
    question: `If there is inequality in the pattern of population growth, there is greater inequality in food production and utilization. As societies become wealthier, their consumption of animal products increases. This means that a greater proportion of such basic foodstuff as grains and legumes that could feed humans directly is instead being converted into feed for poultry and large farm animals. Yet this conversion of plant-based food into animal food for humans is far from efficient. Only 16% of the calories fed to chickens are recovered by us when we eat them. This conversion rate goes down to five to seven per cent in large animals that are fed grain to add fat and some protein before slaughter.

Which one of the following statements best reflects the crux of the passage?`,
    options: [
      "There is an urgent need for a public policy to promote the consumption of cereal-based foods in wealthier societies.",
      "Animal-based food is far less efficient than grain/plant-based food in terms of production and utilization.",
      "Plant-based protein should replace the animal-based protein in our daily diets.",
      "Inequality in food production and consumption is inevitable in any fast changing society."
    ],
  },
  {
    id: 14,
    question: `With reference to the above passage, the following assumptions have been made:

I. The food manufacturing and processing industries in every country should align their objectives and processes in accordance with the changing needs of the societies.
II. Wealthier societies tend to incur great loss of calories of food materials due to indirect utilization of their agricultural produce.

Which of the above assumptions is/are valid?`,
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 15,
    question: "What is the maximum value of n such that 7 × 343 × 385 × 1000 × 2401 × 77777 is divisible by 35ⁿ?",
    options: ["3", "4", "5", "7"],
  },
  {
    id: 16,
    question: "What is X in the sequence 24, X, 12, 18, 36, 90?",
    options: ["18", "12", "9", "6"],
  },
  {
    id: 17,
    question: "P and Q walk along a circular track. They start at 5:00 a.m. from the same point in opposite directions. P walks at an average speed of 5 rounds per hour and Q walks at an average speed of 3 rounds per hour. How many times will they cross each other between 5:20 a.m. and 7:00 a.m.?",
    options: ["12", "13", "14", "15"],
  },
  {
    id: 18,
    question: "If P = +, Q = –, R = ×, S = ÷, then insert the proper notations between the successive numbers in the equation 60 _ 15 _ 3 _ 20 _ 4 = 20:",
    options: ["SPRQ", "QRPS", "QRSP", "SPQR"],
  },
  {
    id: 19,
    question: "A tram overtakes 2 persons X and Y walking at an average speed of 3 km/hr and 4 km/hr in the same direction and completely passes them in 8 seconds and 9 seconds respectively. What is the length of the tram?",
    options: ["15 m", "18 m", "20 m", "24 m"],
  },
  {
    id: 20,
    question: "If N² = 12345678987654321, then how many digits does the number N have?",
    options: ["8", "9", "10", "11"],
  },
  {
    id: 21,
    question: `Maintaining an ecosystem just to conserve biodiversity will affect its commercial potential as well as the livelihoods dependent on the ecosystem. There is also a conflict between using an ecosystem only for livelihoods, for commercial exploitation, or strictly for conservation. Deforestation caused due to commercial exploitation will lead to indirect harm like floods, siltation problems and microclimatic instability, apart from adversely affecting livelihoods dependent on forests. These conflicts are particularly acute in developing countries where the dependence of people on the ecosystem is significant, and commercial exploitation has the potential to boost national income.

Which one of the following statements best reflects the critical message conveyed by the author of the passage?`,
    options: [
      "Conservation of biodiversity is not an issue to be worried about when some people depend on ecosystems for their livelihoods.",
      "Commercial exploitation of forests goes against the fundamental rights of the people dependent on forests for food and shelter.",
      "Sustenance of livelihood and degradation of ecosystem while being together exacerbate one another, leading to conflicts and imbalance.",
      "Commercial exploitation of ecosystems should be completely stopped."
    ],
    // answer: "Sustenance of livelihood and degradation of ecosystem while being together exacerbate one another, leading to conflicts and imbalance."
  },
  {
    id: 22,
    question: `Maintaining an ecosystem just to conserve biodiversity will affect its commercial potential as well as the livelihoods dependent on the ecosystem. There is also a conflict between using an ecosystem only for livelihoods, for commercial exploitation, or strictly for conservation. Deforestation caused due to commercial exploitation will lead to indirect harm like floods, siltation problems and microclimatic instability, apart from adversely affecting livelihoods dependent on forests. These conflicts are particularly acute in developing countries where the dependence of people on the ecosystem is significant, and commercial exploitation has the potential to boost national income.

With reference to above passage, the following assumptions have been made:
I. No country needs to depend on ecosystems to boost national income.
II. Resource-rich countries need to share their resources with those of scant resources so as to prevent the degradation of ecosystems.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "Neither I nor II"
  },
  {
    id: 23,
    question: `The history of renewable energy suggests there is a steep learning curve, meaning that, as more is produced, costs fall rapidly because of economies of scale and learning by doing. The firms’ green innovation is path-dependent the more a firm does, the more it is likely to do in the future. The strongest evidence for this is the collapse in the price of solar energy, which became about 90% cheaper during the 2010s, repeatedly beating forecasts. Moving early and gradually gives economies more time to adjust, allowing them to reap the benefits of path-dependent green investment without much disruption. A late, more chaotic transition is costlier.

Which one of the following statements best reflects the central idea of the passage?`,
    options: [
      "Economies of scale is essential for transition to green growth.",
      "Modern technological progress is intensely linked to path-dependent innovations.",
      "Countries with large economies are in a better position to adopt green technologies.",
      "Timing plays a crucial role in the case of green technology development."
    ],
    // answer: "Timing plays a crucial role in the case of green technology development."
  },
  {
    id: 24,
    question: `The history of renewable energy suggests there is a steep learning curve, meaning that, as more is produced, costs fall rapidly because of economies of scale and learning by doing. The firms’ green innovation is path-dependent the more a firm does, the more it is likely to do in the future. The strongest evidence for this is the collapse in the price of solar energy, which became about 90% cheaper during the 2010s, repeatedly beating forecasts. Moving early and gradually gives economies more time to adjust, allowing them to reap the benefits of path-dependent green investment without much disruption. A late, more chaotic transition is costlier.

With reference to the above passage, the following assumptions have been made:
I. Path-dependent green investments will eventually most likely benefit growth as well as public finances in a country like India.
II. If other green technologies follow the same pattern as that of solar energy, there will most likely be an easy green transition.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "I only"
  },
  {
    id: 25,
    question: "A natural number N is such that it can be expressed as N = p + q + r, where p, q and r are distinct factors of N. How many numbers below 50 have this property?",
    options: ["6", "7", "8", "9"],
  },
  {
    id: 26,
    question: "Three prime numbers p, q and r, each less than 20, are such that p – q = q – r. How many distinct possible values can we get for (p + q + r)?",
    options: ["4", "5", "6", "More than 6"],
  },
  {
    id: 27,
    question: "How many possible values of (p + q + r) are there satisfying, 1/p + 1/q + 1/r = 1 where p, q and r are natural numbers (not necessarily distinct)?",
    options: ["None", "One", "Three", "More than three"],
  },
  {
    id: 28,
    question: "What comes at X and Y respectively in the following sequence?\n\nJanuary, January, December, October, X, March, October, Y, September",
    options: ["July, May", "July, April", "June, May", "June, April"],
  },
  {
    id: 29,
    question: "Team X scored a total of N runs in 20 overs. Team Y tied the score in 10% less overs. Had team Y’s average run rate (runs per over) been 50% higher, the scores would have been tied in 12 overs. How many runs were scored by team X?",
    options: ["72", "144", "216", "Cannot be determined"],
  },
  {
    id: 30,
    question: "The price (p) of a commodity is first increased by k%; then decreased by k%; again increased by k%; and again decreased by k%. If the new price is q, then what is the relation between p and q?",
    options: [
      "p(10000-k²)² = q × 108",
      "p(10000-k²)² = q × 104",
      "p(10000-k²)  = q × 104",
      "p(10000-k²)  = q × 108",
    ],
  },
  {
    id: 31,
    question: `One of the dismal realities of the agricultural sector in independent India has been that it never experienced a high-growth phase, unlike the non-agricultural economy. The highest decadal growth (compound annual growth rate or CAGR) for agriculture has been just 3-5% in the 1980s. Also, after experiencing a spurt in decadal growth during the 1980s, agricultural growth suffered relative stagnation thereafter. This is in sharp contrast to non-agricultural growth, which consistently increased from the 1980s to 2000s.

Which one of the following statements best reflects the corollary to the above passage?`,
    options: [
      "The benefit of economic reforms percolates down more slowly to the agriculture sector than in other sectors of the economy.",
      "For India, the green revolution was not as useful as it was expected to be.",
      "India lagged behind other countries in adapting mechanized and modern farming.",
      "Rural-to-urban migration resulted in the stagnant agriculture sector."
    ],
    //answer: "The benefit of economic reforms percolates down more slowly to the agriculture sector than in other sectors of the economy."
  },
  {
    id: 32,
    question: `With reference to the passage, the following assumptions have been made:

The growing divergence between the fortunes of the agricultural and non-agricultural economy in India could have been reduced/contained by:

I. adapting large-scale cultivation of commercial crops and viable corporate farming.
II. providing free insurance for all crops and heavily subsidizing seeds, fertilizers, electricity and farm machinery at par with developed countries.

Which of the above assumptions is/are valid?`,
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
    //answer: "Neither I nor II"
  },
  {
    id: 33,
    question: `In our country, handlooms are equated with a culture that ensures a continuity of tradition. This idea has become part of the public policy-framing and provides a legitimate basis for the State to support the sector. But the notion of tradition as a single, linear entity is being strongly contested today. The narratives dominant in defining culture/tradition in a particular way are seen to have emerged as the identities and histories of large sections. The discounted and, at times, forcibly stifled identities are fighting for their rightful place in history, Against this backdrop, when we promote handloom as a traditional industry, it is not surprising that large sections of our population choose to ignore it.

Which one of the following statements best reflects the most logical and rational message conveyed by the author of the passage?`,
    options: [
      "We need to free the handloom industry from the limited narrative linked to preserving cultural heritage.",
      "Continued State support to the handloom industry ensures the preservation of some of our glorious art forms and old traditions.",
      "Household units of the handloom sector should be modernized and made an economically viable organized industry.",
      "Handloom products need to be converted to machine-made designer products so as to make them more popular."
    ],
    //answer: "We need to free the handloom industry from the limited narrative linked to preserving cultural heritage."
  },
  {
    id: 34,
    question: `With reference to the above passage, the following assumptions have been made:

I. There is no need for the State to be involved in any manner in the handloom sector.
II. Handloom products are no longer appealing and attractive in the rapidly changing modern world.

Which of the above assumptions is/are valid?`,
    options: ["I only", "II only", "Both I and II", "Neither I nor II"]
  },
  {
    id: 35,
    question: "Consider the first 100 natural numbers. How many of them are not divisible by any one of 2, 3, 5, 7 and 9?",
    options: ["20", "21", "22", "23"],
  },
  {
    id: 36,
    question: "If 4 ≤ x ≤ 8 and 2 ≤ y ≤ 7 then what is the ratio of maximum value of (x + y) to minimum value of (x – y)?",
    options: ["6", "15/2", "-15/2", "None of the above"],
  },
  {
    id: 37,
    question: "Let both p and k be prime numbers such that (p² + k) is also a prime number less than 30.\nWhat is the number of possible values of k?",
    options: ["4", "5", "6", "7"],
  },
  {
    id: 38,
    question: "There are n sets of numbers each having only three positive integers with LCM equal to 1001 and HCF equal to 1. What is the value of n?",
    options: ["6", "7", "8", "More than 8"],
  },
  {
    id: 39,
    question: "Let PQR be a 3-digit number, PPT be a 3-digit number and PS be a 2-digit number, where P, Q, R, S, T are distinct non-zero digits. Further, PQR – PS = PPT. If Q = 3 and T < 6, then what is the number of possible values of (R, S)?",
    options: ["2", "3", "4", "More than 4"],
  },
  {
    id: 40,
    question: "Consider the sequence AB_CC_A_BCCC_BBC_C that follows a certain pattern. Which one of the following completes the sequence?",
    options: ["B, C, B, C, A", "A, C, B, C, A", "B, C, B, A, C", "C, B, B, A, C"],
  },
  {
    id: 41,
    question: `It is hard to predict how changes in the climate and the atmosphere’s chemistry will affect the prevalence and virulence of agricultural diseases. But there is a risk that such changes will make some plant infections more common in all climatic zones, perhaps catastrophically so. Part of the problem is that centuries of selective breeding have refined the genomes of most high-value crops. They are spectacular at growing in today’s conditions but genetic variations that are not immediately useful to them have been bred out. This is good for yields but bad for coping with changes. A minor disease or even an unknown one could suddenly rampage through a genetically honed crop.

Which one of the following statements best reflects the central idea conveyed by the passage?`,
    options: [
      "Global climate change adversely affects the productivity of crops.",
      "Our total dependence on genetically honed crops entails possible food insecurity.",
      "Our food security should not depend on agricultural productivity alone.",
      "Genetically honed crops should be replaced with their wild varieties in our present cultivation practices."
    ],
    // answer: "Our total dependence on genetically honed crops entails possible food insecurity."
  },
  {
    id: 42,
    question: `With reference to the above passage, the following assumptions have been made:

I. Global climate change can result in the migration of several plant diseases to new areas.
II. Scientific understanding of the wild relatives of our present crops would enable us to strengthen food security.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "Both I and II"
  },
  {
    id: 43,
    question: `“A good statesman, like any other sensible human being, learns more from his opponents than from his fervent supporters. For his supporters will push him to disaster unless his opponents show him where the dangers are. So if he is wise he will often pray to be delivered from his friends, because they will ruin him. But, though it hurts, he ought also to pray never to be left without opponents; for they keep him on the path of reason and good sense. The national unity of free people depends upon a sufficiently even balance of political power to make it impracticable for the administration to be arbitrary and for opposition to be revolutionary and irreconcilable.”

Which one of the following statements best reflects the critical message conveyed by the author of the passage?`,
    options: [
      "Without opposition parties, the administration in a democracy gets to become more responsible.",
      "Democracy needs to have revolutionaries in opposition to keep the government alert.",
      "Rulers in a democracy need the support of opposition for their political survival.",
      "In a democracy, the opposition is indispensable for the balance of political power and good governance."
    ],
    // answer: "In a democracy, the opposition is indispensable for the balance of political power and good governance."
  },
  {
    id: 44,
    question: `With reference to the above passage, the following assumptions have been made:

I. In a democracy, a strong opposition is required only if the Head of Government is indifferent.
II. The more aggressive the opposition, the better is the governance in a democracy.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "Neither I nor II"
  },
  {
    id: 45,
    question: "P is the brother of Q and R. S is R’s mother. T is P’s father. How many of the following statements are definitely true?\n\nI. S and T are a couple.\nII. Q is T’s son.\nIII. T is Q’s father.\nIV. S is P’s mother.\nV. R is T’s daughter.\nVI. P is S’s son.",
    options: ["Only two", "Only three", "Only four", "Only five"],
  },
  {
    id: 46,
    question: "If NO is coded as 210, NOT is coded as 4200 and NOTE is coded as 21000, then how is NOTES coded?",
    options: ["399000", "420000", "440000", "630000"],
  },
  {
    id: 47,
    question: "If FRANCE is coded as 654321 and GERMANY is coded as 9158437, then how is YEMEN coded?",
    options: ["54321", "81913", "71913", "71813"],
  },
  {
    id: 48,
    question: "The 5-digit number PQRST (all distinct digits) is such that T ≠ 0. P is thrice T. S is greater than Q by 4, while Q is greater than R by 3. How many such 5-digit numbers are possible?",
    options: ["3", "4", "5", "6"],
  },
  {
    id: 49,
    question: "X can complete one-third of a certain work in 6 days, Y can complete one-third of the same work in 8 days and Z can complete three-fourth of the same work in 12 days. All of them work together for n days and then X and Z quit and Y alone finishes the remaining work in 26/3. What is n equal to?",
    options: ["3", "4", "5", "6"],
  },
  {
    id: 50,
    question: "What is X in the sequence 1, 3, 6, 11, 18, X, 42?",
    options: ["26", "27", "29", "30"],
  },
  {
    id: 51,
    question: `A single number for inflation is an aggregate across different commodities and services the price rise differs for different items of consumption. So, the single number is arrived at by assigning weights to different commodities and services. For WPI, the weights in production are used; for CPI, the consumption basket is used. But people are not homogeneous. The consumption basket is vastly different for the poor, the middle classes, and the rich. Hence, the CPI is different for each of these classes and a composite index requires averaging the baskets.

Which one of the following statements best reflects the most logical, rational and crucial message conveyed by the passage?`,
    options: [
      "We must use WPI exclusively in measuring price rise and CPI should be done away with.",
      "The present calculation of inflation rate does not correctly measure price rise of individual item/commodity.",
      "Inflation data under-presents services in the consumption basket.",
      "Knowledge of inflation rate is not really of any use to anybody in the country."
    ],
    // answer: "The present calculation of inflation rate does not correctly measure price rise of individual item/commodity."
  },
  {
    id: 52,
    question: `Trust stands commonly defined being vulnerable to others. As entrepreneurship implies trust in others and willingness to expose oneself to betrayal. Trust in expert systems is the essence of globalizing behaviour; trust itself emerges as a super-commodity in the social market and defines the characteristics of goods and services in a global market. Trusting conduct also means holding others in good esteem, and an optimism that they are, or will be, competent in certain respects.

Which one of the following statements best reflects the crux of the passage?`,
    options: [
      "Trustworthiness cannot be expected in entrepreneurship.",
      "Trustworthy people are the most vulnerable people.",
      "No economic activity is possible without being exposed to betrayal.",
      "Trust is important though it entails risk."
    ],
    // answer: "Trust is important though it entails risk."
  },
  {
    id: 53,
    question: `In a football match, team P playing against Q was behind by 3 goals with 10 minutes remaining. Does team P win the match?

Statement I: Team P scored 4 goals in the last 10 minutes.
Statement II: Team Q scored a total of 4 goals in the match.

Which one of the following is correct in respect of the above question and the Statements?`,
    options: [
      "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.",
      "The Question can be answered by using either Statement alone.",
      "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.",
      "The Question cannot be answered even using any of the Statements."
    ],
    // answer: "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone."
  },
  {
    id: 54,
    question: "A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.\n\nQuestion:\nIs (p + q)² – 4pq, where p, q are natural numbers, positive?\n\nStatement I: p < q.\nStatement II: p > q.\n\nWhich one of the following is correct in respect of the above question and the Statements?",
    options: [
      "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.",
      "The Question can be answered by using either Statement alone.",
      "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.",
      "The Question can be answered even without using any of the Statements."
    ],
  },
  {
    id: 55,
    question: "In a T20 cricket match, three players X, Y and Z scored a total of 37 runs. The ratio of number of runs scored by X to the number of runs scored by Y is equal to ratio of number of runs scored by Y to number of runs scored by Z.\n\nValue-I = Runs scored by X\nValue-II = Runs scored by Y\nValue-III = Runs scored by Z\n\nWhich one of the following is correct?",
    options: [
      "Value-I < Value-II < Value-III",
      "Value-III < Value-II < Value-I",
      "Value-I < Value-III < Value-II",
      "Cannot be determined due insufficient data"
    ],
  },
  {
    id: 56,
    question: "Let p + q = 10 where p, q are integers.\n\nValue-I = Maximum value of p × q when p, q are positive integers.\nValue-II = Maximum value of p × q when p ≥ –6, q ≥ –4.\n\nWhich one of the following is correct?",
    options: [
      "Value-I < Value-II",
      "Value-II < Value-I",
      "Value-I = Value-II",
      "Cannot be determined due to insufficient data"
    ],
  },
  {
    id: 57,
    question: "Consider a set of 11 numbers:\n\nValue-I = Minimum value of the average of the numbers of the set when they are consecutive integers ≥ –5.\nValue-II = Minimum value of the product of the numbers of the set when they are consecutive non-negative integers.\n\nWhich one of the following is correct?",
    options: [
      "Value-I < Value-II",
      "Value-II < Value-I",
      "Value-I = Value-II",
      "Cannot be determined due to insufficient data"
    ],
  },
  {
    id: 58,
    question: "The average of three numbers p, q and r is k. p is as much more than the average as q is less than the average. What is the value of r?",
    options: ["k", "k–1", "k+1", "k/2"],
  },
  {
    id: 59,
    question: "Let x be a real number between 0 and 1. Which of the following statements is/are correct?\n\nI. x² > x³\nII. x > √x.\n\nSelect the correct answer using the code given below:",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 60,
    question: "The difference between any two natural numbers is 10. What can be said about the natural numbers which are divisible by 5 and lie between these two numbers?",
    options: [
      "There is only one such number.",
      "There are only two such numbers.",
      "There can be more than one such number.",
      "No such number exists."
    ],
  },
  {
    id: 61,
    question: `Over the next 30 years, many countries are promising to move to net-zero carbon, implying that household emissions will have to be cut to close to nothing. A leading climate scientist reckons that, at best, half the reduction might be achieved through demand-side measures, such as behavioural changes by individuals and households. And even that would require companies and governments to provide more incentives to change through supply-side investments to make low-carbon options cheaper and more widely available.

Which one of the following statements best reflects the central idea conveyed by the passage?`,
    options: [
      "Moving to net-zero carbon is possible only by the reduction in household emissions.",
      "Low-carbon behaviour in people can be brought about by incentivising them.",
      "Cheaper goods and services can be made available to people by using low-carbon technologies.",
      "Manufacturing industries that use low-carbon technologies should be provided with subsidies."
    ],
    // answer: "Low-carbon behaviour in people can be brought about by incentivising them."
  },
  {
    id: 62,
    question: `Over the next 30 years, many countries are promising to move to net-zero carbon, implying that household emissions will have to be cut to close to nothing. A leading climate scientist reckons that, at best, half the reduction might be achieved through demand-side measures, such as behavioural changes by individuals and households. And even that would require companies and governments to provide more incentives to change through supply-side investments to make low-carbon options cheaper and more widely available.

With reference to the above passage, the following assumptions have been made:

I. Supply-side investments in companies can result in low-carbon behaviour in people.
II. People are not capable of adapting low-carbon behaviour without the involvement of Government and Companies.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "Both I and II"
  },
  {
    id: 63,
    question: `In only 50 years, the world’s consumption of raw materials has nearly quadrupled, to more than 100 billion tons. Less than 9% of this is reused. Batteries of old vehicles contain materials such as lithium, cobalt, manganese and nickel that are pricey and can be hard to obtain. Supply chains are long and complicated. Buyers’ risks are being aggravated by their suppliers’ poor environmental and labour standards. Reusing materials makes sense. Once batteries reach the ends of their lives, they should go back to a factory where their ingredients can be recovered and put into new batteries.

Which one of the following statements best reflects the most logical, rational and pragmatic message conveyed by the passage?`,
    options: [
      "Green economy is not possible without reusing critical minerals.",
      "Every sector of economy should adapt the reuse of material immediately. resources",
      "Circular economy can be beneficial for sustainable growth.",
      "Circular use of material resources is the only option for some industries for their survival."
    ],
    // answer: "Circular economy can be beneficial for sustainable growth."
  },
  {
    id: 64,
    question: `In only 50 years, the world’s consumption of raw materials has nearly quadrupled, to more than 100 billion tons. Less than 9% of this is reused. Batteries of old vehicles contain materials such as lithium, cobalt, manganese and nickel that are pricey and can be hard to obtain. Supply chains are long and complicated. Buyers’ risks are being aggravated by their suppliers’ poor environmental and labour standards. Reusing materials makes sense. Once batteries reach the ends of their lives, they should go back to a factory where their ingredients can be recovered and put into new batteries.

With reference to the above passage, the following assumptions have been made:

I. Automobile factories are examples of the circular economy.
II. Economic growth is compatible with circular use of mineral resources.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "II only"
  },
  {
    id: 65,
    question: "A set (X) of 20 pipes can fill 70% of a tank in 14 minutes. Another set (Y) of 10 pipes fills 3/8th of the tank in 6 minutes. A third set (Z) of 16 pipes can empty half of the tank in 20 minutes. If half of the pipes of set X are closed and only half of the pipes of set Y are open, and all pipes of the set (Z) are open, then how long will it take to fill 50% of the tank?",
    options: ["8 minutes", "10 minutes", "12 minutes", "16 minutes"],
  },
  {
    id: 66,
    question: "If n is a natural number, then what is the number of distinct remainders of (1ⁿ + 2ⁿ) when divided by 4?",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 67,
    question: "Let P = QQQ be a 3-digit number. What is the HCF of P and 481?",
    options: ["1", "13", "37", "481"],
  },
  {
    id: 68,
    question: "What is the 489th digit in the number 123456789101112…?",
    options: ["0", "3", "6", "9"],
  },
  {
    id: 69,
    question: "A mobile phone has been stolen. There are 3 suspects P, Q and R. They were questioned knowing that only one of them is guilty. Their responses are as follows:\n\nP : I did not steal. Q stole it.\nQ : R did not steal. I did not steal.\nR : I did not steal. I do not know who did it.\n\nWho stole the mobile phone?",
    options: ["P", "Q", "R", "Cannot be concluded"],
  },
  {
    id: 70,
    question: "Three teams P, Q, R participated in a tournament in which the teams play with one another exactly once. A win fetches a team 2 points and a draw 1 point. A team gets no point for a loss. Each team scored exactly one goal in the tournament. The team P got 3 points, Q got 2 points and R got 1 point. Which of the following statements is/are correct?\n\nI. The result of the match between P and Q is a draw with the score 0 – 0.\nII. The number of goals scored by R against Q is 1.\n\nWhich of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 71,
    question: `There has been no democracy that has grown economically without corporate capitalism. It helps in modernizing the economy and enabling the transition from rural to urban, and agriculture to industry and services, which are inevitable with growth. It generates jobs and there is no other way to fix a country’s unemployment challenge without a further impetus to private business, Big companies can operate on a large scale and become competitive both domestically and externally. A vibrant corporate capitalist base also leads to additional revenues for the State which in turn, can be used for greater welfare for the marginalized and creating a more level playing field in terms of opportunities.

Which one of the following statements best reflects the critical message conveyed by the author of the passage?`,
    options: [
      "Corporate capitalism is important for economic growth of a State and also for democracy.",
      "Corporate capitalism is imperative for a modern State to achieve its political objectives.",
      "No State can ensure its economic survival for long without the role of corporate capitalism.",
      "Corporate capitalism and democracy have mutual dependence for their continued existence."
    ],
    // answer: "Corporate capitalism is important for economic growth of a State and also for democracy."
  },
  {
    id: 72,
    question: `There has been no democracy that has grown economically without corporate capitalism. It helps in modernizing the economy and enabling the transition from rural to urban, and agriculture to industry and services, which are inevitable with growth. It generates jobs – and there is no other way to fix a country’s unemployment challenge without a further impetus to private business. Big companies can operate on a large scale and become competitive both domestically and externally. A vibrant corporate capitalist base also leads to additional revenues for the State – which in turn, can be used for greater welfare for the marginalized and creating a more level playing field in terms of opportunities.

With reference to the above passage, the following assumptions have been made:

I. Corporate capitalism promotes the growth of labour force and provides more employment opportunities.
II. Poor and marginalized sections of population are benefited by corporate capitalism due to trickle-down effect.

Which of the above assumptions is/are valid?`,
    options: [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    // answer: "I only"
  },
  {
    id: 73,
    question: `“A network of voluntary associations stands as a ‘buffer’ between the relatively powerless individual and the potentially powerful State.”

Which one of the following statements reflects the best explanation of the above passage?`,
    options: [
      "It emphasizes the inability of the State to enforce its will in practice against the opposition of certain groups within it.",
      "It is a cooperative organization for the promotion of the well-being and development of the personality of its members.",
      "It takes individuals out of a state of isolation and gives them a chance to participate in the common endeavour.",
      "It permits citizens to have a variety of loyalties and allegiance."
    ],
    // answer: "It takes individuals out of a state of isolation and gives them a chance to participate in the common endeavour."
  },
  {
    id: 74,
    question: "Consider the following statements:\n\nI. There exists a natural number which when increased by 50% can have its number of factors unchanged.\nII. There exists a natural number which when increased by 150% can have its number of factors unchanged.\n\nWhich of the statements given above is/are correct?",
    options: ["I only", "II only", "Both I and II", "Neither I nor II"],
  },
  {
    id: 75,
    question: "There are 7 places A, B, C, D, E, F and G in a city connected by various roads AB, AC, CD, DE, BF, EG and FG. A is 6 km south of B. A is 10 km west of C. D is 5 km east of E. C is 6 km north of D. F is 9 km west of B. F is 12 km north of G. A person travels from D to F through these roads. What is the distance covered by the person?",
    options: ["20 km", "25 km", "31 km", "37 km"],
  },
  {
    id: 76,
    question: "In a certain code if 64 is written as 343 and 216 is written as 729, then how is 512 written in that code?",
    options: ["1000", "1331", "1728", "2197"],
  },
  {
    id: 77,
    question: "What is the remainder when 9³ + 9⁴ + 9⁵ + 9⁶ + … + 9¹⁰⁰ is divided by 6?",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 78,
    question: "A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.\n\nQuestion:\nWhat is the smallest 1-digit number having exactly 4 distinct factors?\n\nStatement I: 2 is one of the factors.\nStatement II: 3 is one of the factors.\n\nWhich one of the following is correct in respect of the above Question and the Statements?",
    options: [
      "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.",
      "The Question can be answered by using either Statement alone.",
      "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.",
      "The Question can be answered even without using any of the Statements.",
    ],
  },
  {
    id: 79,
    question: "A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.\n\nQuestion:\nLet P, Q, R, S be distinct non-zero digits. If PP × PQ = RRSS, where P ≤ 3 and Q ≤ 4, then what is Q equal to?\n\nStatement I: R = 1.\nStatement II: S = 2.\n\nWhich one of the following is correct in respect of the above Question and the Statements?",
    options: [
      "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.",
      "The Question can be answered by using either Statement alone.",
      "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.",
      "The Question can be answered even without using any of the Statements.",
    ],
  },
  {
    id: 80,
    question: "A question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.\n\nQuestion:\nHow is Q related to P?\n\nStatement I: P has two sisters, R and S.\nStatement II: R’s father is the brother of Q.\n\nWhich one of the following is correct in respect of the above Question and the Statements?",
    options: [
      "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone.",
      "The Question can be answered by using either Statement alone.",
      "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone.",
      "The Question cannot be answered even using any of the Statements.",
    ],
  },
];

const sectionsUPSCGS1: Section[] = [
  {
    id: 1,
    name: "General Studies I",
    questions: questionsUPSCGS1
  }
]

const sectionsUPSCGS2: Section[] = [
  {
    id: 1,
    name: "General Studies II",
    questions: questionsUPSCGS2
  }
]

const sectionsSSC: Section[] = [
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
]

export const examData: ExamData = {
  title: "SSC Combined Graduate Level Examination 2024",
  duration: 120, // 120 minutes
  sections: sectionsUPSCGS1
}

export const examDataUPSCGS1: ExamData = {
  title: "UPSC Prelims Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsUPSCGS1
}

export const examDataUPSCGS2: ExamData = {
  title: "UPSC CSAT Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsUPSCGS2
}

export const examDataSSCCGL: ExamData = {
  title: "SSC CGL Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsSSC
}

export const examDataSSCCHSL: ExamData = {
  title: "SSC CHSL Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsSSC
}

export const examDataSSCMTS: ExamData = {
  title: "SSC MTS Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsSSC
}

export const examDataRailwayNTPC: ExamData = {
  title: "Railway NTPC Test Series 2026",
  duration: 120, // 120 minutes
  sections: sectionsSSC
}
