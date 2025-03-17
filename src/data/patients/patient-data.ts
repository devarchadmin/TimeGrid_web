import { IPatient } from "@/interface/patient.interface";

const patientData: IPatient[] = [
  {
    id: 1,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.2be06eb4.png&w=750&q=75", // Girl 1
    name: "Emma Thompson",
    firstName: "Emma",
    lastName: "Thompson",
    email: "emma.thompson@example.com",
    patientID: "PT-001",
    routeNumber: "SSN-123-45-6789",
    dateOfBirth: "1985-06-15",
    gender: "Female",
    bloodGroup: "O+",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    phone: "+1 (555) 123-4567",
    emergencyContact: "+1 (555) 987-6543",
    emergencyContactName: "Michael Thompson",
    emergencyRelationship: "Husband",
    emergencyAddress: "123 Main Street, Apt 4B, New York, NY 10001, USA",
    medicalConditions: ["Asthma", "Allergic Rhinitis"],
    allergies: ["Penicillin", "Peanuts"],
    medications: ["Albuterol", "Flonase"],
    insuranceProvider: "Blue Cross Blue Shield",
    insuranceNumber: "BCBS12345678",
    registrationDate: "2022-03-10",
    lastVisit: "2023-11-15",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "Emma is a 38-year-old female with a history of asthma and allergic rhinitis. She has been a patient at our clinic since March 2022 and has been compliant with her medication regimen. She works as a marketing executive and leads an active lifestyle despite her respiratory conditions.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Albuterol",
        dosage: "2 puffs",
        frequency: "As needed",
        instructions: "Use for acute asthma symptoms",
        timeOfDay: ["Morning", "Evening"]
      },
      {
        id: 2,
        medicineName: "Flonase",
        dosage: "1 spray per nostril",
        frequency: "Daily",
        instructions: "Use for allergic rhinitis symptoms",
        timeOfDay: ["Morning"]
      },
      {
        id: 3,
        medicineName: "Zyrtec",
        dosage: "10mg",
        frequency: "Daily",
        instructions: "Take during allergy season",
        timeOfDay: ["Morning"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2022-03-10",
        note: "Initial consultation. Patient presents with asthma and allergic rhinitis. Prescribed Albuterol and Flonase.",
        addedBy: "Dr. Sarah Johnson"
      },
      {
        id: 2,
        date: "2022-06-15",
        note: "Follow-up visit. Patient reports improvement in symptoms with current medication regimen.",
        addedBy: "Dr. Sarah Johnson"
      },
      {
        id: 3,
        date: "2023-01-20",
        note: "Annual check-up. Patient's asthma is well-controlled. Continuing current medications.",
        addedBy: "Dr. Michael Wilson"
      },
      {
        id: 4,
        date: "2023-05-10",
        note: "Patient experiencing increased allergy symptoms. Added Zyrtec to medication regimen for the allergy season.",
        addedBy: "Dr. Sarah Johnson"
      },
      {
        id: 5,
        date: "2023-11-15",
        note: "Follow-up visit. Patient's symptoms are well-controlled with current medications.",
        addedBy: "Dr. Sarah Johnson"
      }
    ]
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg", // Boy 1
    name: "James Wilson",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@example.com",
    patientID: "PT-002",
    routeNumber: "SSN-987-65-4321",
    dateOfBirth: "1978-09-22",
    gender: "Male",
    bloodGroup: "A-",
    address: "456 Oak Avenue",
    city: "Boston",
    state: "MA",
    zipCode: "02108",
    country: "USA",
    phone: "+1 (555) 234-5678",
    emergencyContact: "+1 (555) 876-5432",
    emergencyContactName: "Sarah Wilson",
    emergencyRelationship: "Wife",
    emergencyAddress: "456 Oak Avenue, Boston, MA 02108, USA",
    medicalConditions: ["Hypertension", "Type 2 Diabetes"],
    allergies: ["Sulfa drugs"],
    medications: ["Lisinopril", "Metformin"],
    insuranceProvider: "Aetna",
    insuranceNumber: "AET87654321",
    registrationDate: "2021-11-05",
    lastVisit: "2023-10-20",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "James is a 45-year-old male with hypertension and type 2 diabetes. He has been managing his conditions well with medication and lifestyle modifications. He works as a software engineer and has been making efforts to incorporate more physical activity into his daily routine.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Lisinopril",
        dosage: "10mg",
        frequency: "Daily",
        instructions: "Take for hypertension",
        timeOfDay: ["Morning"]
      },
      {
        id: 2,
        medicineName: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        instructions: "Take with meals for diabetes management",
        timeOfDay: ["Morning", "Evening"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2021-11-05",
        note: "Initial consultation. Patient diagnosed with hypertension and type 2 diabetes. Prescribed Lisinopril and Metformin.",
        addedBy: "Dr. Emily Williams"
      },
      {
        id: 2,
        date: "2022-02-15",
        note: "Follow-up visit. Blood pressure and blood glucose levels improving with medication and lifestyle changes.",
        addedBy: "Dr. Emily Williams"
      },
      {
        id: 3,
        date: "2022-08-10",
        note: "Routine check-up. Patient's conditions are stable. Continuing current medications.",
        addedBy: "Dr. David Clark"
      },
      {
        id: 4,
        date: "2023-03-25",
        note: "Annual check-up. Patient's hypertension and diabetes are well-controlled. Encouraged continued physical activity.",
        addedBy: "Dr. Emily Williams"
      },
      {
        id: 5,
        date: "2023-10-20",
        note: "Follow-up visit. Patient reports increased stress at work affecting blood pressure. Discussed stress management techniques.",
        addedBy: "Dr. Emily Williams"
      }
    ]
  },
  {
    id: 3,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next/static/media/avatar10.9634d33d.png&w=750&q=75", // Girl 2
    name: "Sophia Martinez",
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    patientID: "PT-003",
    routeNumber: "SSN-456-78-9012",
    dateOfBirth: "1992-11-30",
    gender: "Female",
    bloodGroup: "B+",
    address: "789 Pine Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    country: "USA",
    phone: "+1 (555) 345-6789",
    emergencyContact: "+1 (555) 765-4321",
    medicalConditions: ["Migraine", "Anxiety"],
    allergies: ["Latex"],
    medications: ["Sumatriptan", "Sertraline"],
    insuranceProvider: "UnitedHealthcare",
    insuranceNumber: "UHC23456789",
    registrationDate: "2022-01-25",
    lastVisit: "2023-10-20",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "Sophia is a 31-year-old female with a history of migraines and anxiety. She works as a graphic designer and has been experiencing increased migraine frequency during high-stress project deadlines. She practices yoga and meditation to help manage her anxiety symptoms.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Sumatriptan",
        dosage: "50mg",
        frequency: "As needed",
        instructions: "Take at first sign of migraine. May repeat after 2 hours if needed. Do not exceed 200mg in 24 hours.",
        timeOfDay: ["Morning", "Afternoon", "Evening", "Night"]
      },
      {
        id: 2,
        medicineName: "Sertraline",
        dosage: "50mg",
        frequency: "Daily",
        instructions: "Take with food to reduce stomach upset",
        timeOfDay: ["Morning"]
      },
      {
        id: 3,
        medicineName: "Magnesium",
        dosage: "400mg",
        frequency: "Daily",
        instructions: "Supplement for migraine prevention",
        timeOfDay: ["Evening"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2022-01-25",
        note: "Initial consultation. Patient presents with chronic migraines and anxiety. Prescribed Sumatriptan for acute migraine treatment and Sertraline for anxiety management.",
        addedBy: "Dr. Robert Chen"
      },
      {
        id: 2,
        date: "2022-03-20",
        note: "Follow-up visit. Patient reports improvement in anxiety symptoms but still experiencing 2-3 migraines per month. Recommended magnesium supplementation.",
        addedBy: "Dr. Robert Chen"
      },
      {
        id: 3,
        date: "2022-05-15",
        note: "Follow-up visit. Started patient on magnesium supplementation for migraine prevention. Discussed stress management techniques.",
        addedBy: "Dr. Robert Chen"
      },
      {
        id: 4,
        date: "2022-11-10",
        note: "Follow-up visit. Patient reports reduction in migraine frequency (1-2 per month) with current regimen. Continuing current medications.",
        addedBy: "Dr. Lisa Wong"
      },
      {
        id: 5,
        date: "2023-10-20",
        note: "Annual check-up. Patient's anxiety well-controlled. Migraine frequency stable. Encouraged continued stress management practices.",
        addedBy: "Dr. Robert Chen"
      }
    ]
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1742160620~exp=1742164220~hmac=e0a464f7d541a383d4aa7396e190ca8f64bcf217401fd06a958f454d5672f214&w=740", // Boy 2
    name: "Michael Johnson",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    patientID: "PT-004",
    routeNumber: "SSN-789-01-2345",
    dateOfBirth: "1965-04-12",
    gender: "Male",
    bloodGroup: "AB+",
    address: "321 Elm Street",
    city: "Houston",
    state: "TX",
    zipCode: "77001",
    country: "USA",
    phone: "+1 (555) 456-7890",
    emergencyContact: "+1 (555) 654-3210",
    medicalConditions: ["Coronary Artery Disease", "Hyperlipidemia"],
    allergies: ["Aspirin"],
    medications: ["Atorvastatin", "Clopidogrel"],
    insuranceProvider: "Cigna",
    insuranceNumber: "CIG34567890",
    registrationDate: "2020-09-05",
    lastVisit: "2023-11-28",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "Michael is a 58-year-old male with a history of coronary artery disease and hyperlipidemia. He underwent coronary stent placement in 2020 and has been on medication therapy since. He is a retired construction manager who has recently started a regular walking program to improve his cardiovascular health.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Atorvastatin",
        dosage: "40mg",
        frequency: "Daily",
        instructions: "Take in the evening to maximize effectiveness",
        timeOfDay: ["Evening"]
      },
      {
        id: 2,
        medicineName: "Clopidogrel",
        dosage: "75mg",
        frequency: "Daily",
        instructions: "Take with food to reduce stomach upset",
        timeOfDay: ["Morning"]
      },
      {
        id: 3,
        medicineName: "Aspirin (Low-dose)",
        dosage: "81mg",
        frequency: "Daily",
        instructions: "Discontinued due to allergy development",
        timeOfDay: ["Morning"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2020-09-05",
        note: "Initial consultation following hospital discharge after coronary stent placement. Started on dual antiplatelet therapy and statin. Provided education on cardiac rehabilitation.",
        addedBy: "Dr. James Wilson"
      },
      {
        id: 2,
        date: "2020-12-10",
        note: "Follow-up visit. Patient recovering well. Lipid panel shows improvement. Continuing current medications.",
        addedBy: "Dr. James Wilson"
      },
      {
        id: 3,
        date: "2021-03-15",
        note: "Follow-up visit. Patient developed rash after taking aspirin. Discontinued aspirin therapy. Will monitor closely.",
        addedBy: "Dr. James Wilson"
      },
      {
        id: 4,
        date: "2021-09-15",
        note: "Six-month follow-up. Patient doing well without aspirin. Continuing clopidogrel and atorvastatin. Encouraged to continue regular exercise.",
        addedBy: "Dr. Sarah Johnson"
      },
      {
        id: 5,
        date: "2022-09-20",
        note: "Annual cardiac check-up. Stress test shows good cardiac function. Continuing current medication regimen.",
        addedBy: "Dr. James Wilson"
      },
      {
        id: 6,
        date: "2023-11-28",
        note: "Annual check-up. Patient has been consistent with walking program. Lipid levels well-controlled. No cardiac symptoms reported.",
        addedBy: "Dr. James Wilson"
      }
    ]
  },
  {
    id: 5,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next/static/media/avatar13.915247b2.png&w=750&q=75", // Girl 3
    name: "Olivia Brown",
    firstName: "Olivia",
    lastName: "Brown",
    email: "olivia.brown@example.com",
    patientID: "PT-005",
    dateOfBirth: "1988-12-03",
    gender: "Female",
    bloodGroup: "A+",
    address: "567 Maple Avenue",
    city: "Miami",
    state: "FL",
    zipCode: "33101",
    country: "USA",
    phone: "+1 (555) 567-8901",
    emergencyContact: "+1 (555) 543-2109",
    medicalConditions: ["Hypothyroidism"],
    allergies: ["Shellfish"],
    medications: ["Levothyroxine"],
    insuranceProvider: "Humana",
    insuranceNumber: "HUM45678901",
    registrationDate: "2021-11-12",
    lastVisit: "2023-12-10",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "Olivia is a 35-year-old female with hypothyroidism diagnosed in 2021. She works as an elementary school teacher and enjoys swimming and hiking on weekends. She has been consistent with her medication regimen and reports improved energy levels since starting treatment.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Levothyroxine",
        dosage: "75mcg",
        frequency: "Daily",
        instructions: "Take on empty stomach, 30-60 minutes before breakfast. Avoid calcium and iron supplements within 4 hours.",
        timeOfDay: ["Morning"]
      },
      {
        id: 2,
        medicineName: "Vitamin D",
        dosage: "2000 IU",
        frequency: "Daily",
        instructions: "Take with food to improve absorption",
        timeOfDay: ["Evening"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2021-11-12",
        note: "Initial consultation. Patient presents with fatigue, weight gain, and cold intolerance. TSH elevated at 8.5 mIU/L. Diagnosed with hypothyroidism and started on levothyroxine 50mcg daily.",
        addedBy: "Dr. Maria Rodriguez"
      },
      {
        id: 2,
        date: "2022-01-15",
        note: "Follow-up visit. Patient reports some improvement in symptoms. TSH still elevated at 5.2 mIU/L. Increased levothyroxine to 75mcg daily.",
        addedBy: "Dr. Maria Rodriguez"
      },
      {
        id: 3,
        date: "2022-02-20",
        note: "Lab results show vitamin D deficiency. Started on vitamin D supplementation. Thyroid function improving with TSH now 3.1 mIU/L.",
        addedBy: "Dr. Maria Rodriguez"
      },
      {
        id: 4,
        date: "2022-05-10",
        note: "Three-month follow-up. Patient reports significant improvement in energy levels. TSH now within normal range at 2.3 mIU/L. Continuing current medication regimen.",
        addedBy: "Dr. Maria Rodriguez"
      },
      {
        id: 5,
        date: "2022-11-15",
        note: "Six-month follow-up. Thyroid function stable. Patient has returned to regular exercise routine and reports feeling well.",
        addedBy: "Dr. Thomas Lee"
      },
      {
        id: 6,
        date: "2023-12-10",
        note: "Annual check-up. Thyroid function remains well-controlled. Vitamin D levels now normal. Patient reports good energy levels and overall well-being.",
        addedBy: "Dr. Maria Rodriguez"
      }
    ]
  },
  {
    id: 6,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next/static/media/avatar16.4f0b001c.png&w=750&q=75", // Boy 3
    name: "William Davis",
    firstName: "William",
    lastName: "Davis",
    email: "william.davis@example.com",
    patientID: "PT-006",
    dateOfBirth: "1972-08-18",
    gender: "Male",
    bloodGroup: "O-",
    address: "890 Cedar Road",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    country: "USA",
    phone: "+1 (555) 678-9012",
    emergencyContact: "+1 (555) 432-1098",
    medicalConditions: ["GERD", "Insomnia"],
    allergies: ["Ibuprofen"],
    medications: ["Omeprazole", "Zolpidem"],
    insuranceProvider: "Kaiser Permanente",
    insuranceNumber: "KP56789012",
    registrationDate: "2022-05-30",
    lastVisit: "2023-11-05",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
    description: "William is a 51-year-old male with gastroesophageal reflux disease (GERD) and chronic insomnia. He works as a software engineer and often experiences increased GERD symptoms during periods of high stress. He has made dietary modifications and is working on improving his sleep hygiene to manage his conditions.",
    medicineTimings: [
      {
        id: 1,
        medicineName: "Omeprazole",
        dosage: "20mg",
        frequency: "Daily",
        instructions: "Take 30 minutes before breakfast",
        timeOfDay: ["Morning"]
      },
      {
        id: 2,
        medicineName: "Zolpidem",
        dosage: "5mg",
        frequency: "As needed",
        instructions: "Take 30 minutes before bedtime. Use only when necessary for insomnia. Do not use more than 3 times per week.",
        timeOfDay: ["Night"]
      },
      {
        id: 3,
        medicineName: "Melatonin",
        dosage: "3mg",
        frequency: "Daily",
        instructions: "Take 1 hour before bedtime to help regulate sleep cycle",
        timeOfDay: ["Night"]
      }
    ],
    progressiveNotes: [
      {
        id: 1,
        date: "2022-05-30",
        note: "Initial consultation. Patient presents with heartburn, regurgitation, and difficulty sleeping. Diagnosed with GERD and insomnia. Prescribed omeprazole for GERD and zolpidem for occasional use with insomnia. Provided education on dietary modifications and sleep hygiene.",
        addedBy: "Dr. Jennifer Adams"
      },
      {
        id: 2,
        date: "2022-08-15",
        note: "Follow-up visit. GERD symptoms improved with medication and dietary changes. Still experiencing insomnia 3-4 nights per week. Added melatonin to regimen and reinforced sleep hygiene practices.",
        addedBy: "Dr. Jennifer Adams"
      },
      {
        id: 3,
        date: "2022-11-20",
        note: "Three-month follow-up. Patient reports significant improvement in sleep with melatonin and reduced zolpidem use (1-2 times per week). GERD symptoms well-controlled.",
        addedBy: "Dr. Jennifer Adams"
      },
      {
        id: 4,
        date: "2023-05-15",
        note: "Six-month follow-up. Patient maintaining good control of GERD symptoms. Sleep has improved further with consistent sleep schedule. Using zolpidem only occasionally (2-3 times per month).",
        addedBy: "Dr. Michael Chang"
      },
      {
        id: 5,
        date: "2023-11-05",
        note: "Annual check-up. Patient reports good management of both GERD and insomnia. Has implemented regular exercise which has further improved sleep quality. Continuing current medication regimen.",
        addedBy: "Dr. Jennifer Adams"
      }
    ]
  },
  {
    id: 7,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next/static/media/avatar15.2e529f78.png&w=750&q=75", // Girl 4
    name: "Ava Garcia",
    firstName: "Ava",
    lastName: "Garcia",
    email: "ava.garcia@example.com",
    patientID: "PT-007",
    dateOfBirth: "1995-02-25",
    gender: "Female",
    bloodGroup: "B-",
    address: "123 Birch Lane",
    city: "Denver",
    state: "CO",
    zipCode: "80201",
    country: "USA",
    phone: "+1 (555) 789-0123",
    emergencyContact: "+1 (555) 321-0987",
    medicalConditions: ["Asthma", "Eczema"],
    allergies: ["Dust Mites", "Pollen"],
    medications: ["Fluticasone", "Cetirizine"],
    insuranceProvider: "Medicare",
    insuranceNumber: "MED67890123",
    registrationDate: "2022-08-15",
    lastVisit: "2023-12-18",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
  },
  {
    id: 8,
    image:
      "https://manez-dashboard.vercel.app/_next/image?url=%2F_next/static/media/avatar4.b09a6ce6.png&w=750&q=75", // Boy 4
    name: "Ethan Miller",
    firstName: "Ethan",
    lastName: "Miller",
    email: "ethan.miller@example.com",
    patientID: "PT-008",
    dateOfBirth: "1982-07-09",
    gender: "Male",
    bloodGroup: "AB-",
    address: "456 Walnut Street",
    city: "Boston",
    state: "MA",
    zipCode: "02101",
    country: "USA",
    phone: "+1 (555) 890-1234",
    emergencyContact: "+1 (555) 210-9876",
    medicalConditions: ["Depression", "IBS"],
    allergies: ["Codeine"],
    medications: ["Escitalopram", "Dicyclomine"],
    insuranceProvider: "Medicaid",
    insuranceNumber: "MCD78901234",
    registrationDate: "2021-04-20",
    lastVisit: "2023-10-30",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      website: "#",
    },
  },
];

export default patientData;