import re

file_path = r'C:\Users\ahmed\OneDrive\Desktop\portfolio\projects\unipath-portal\js\data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add institutionType to all existing universities
content = re.sub(r'(cricos: ".*",)', r'\1\n      institutionType: "University",', content)

new_items = """    },
    {
      id: "uoa",
      name: "The University of Auckland",
      shortName: "UoA",
      country: "New Zealand",
      state: "Auckland",
      city: "Auckland, NZ",
      cricos: "N/A",
      institutionType: "University",
      isGo8: false,
      worldRank: 68,
      acceptanceRate: 45.0,
      minGpa: 3.2,
      minSat: 1250,
      minIelts: 6.0,
      minPte: 50,
      atarEquivalent: 75,
      tuitionAud: 35000,
      tuitionUsd: 23000,
      image: "assets/images/campus_sydney.png",
      tags: ["Rank #1 in NZ", "Research Hub"],
      programs: ["Engineering", "Business", "Medicine"],
      sem1Deadline: "2026-12-08",
      sem2Deadline: "2026-07-04",
      requirements: ["High School Diploma", "IELTS 6.0"],
      description: "New Zealand's highest ranked university, located in the heart of Auckland."
    },
    {
      id: "otago",
      name: "University of Otago",
      shortName: "Otago",
      country: "New Zealand",
      state: "Otago",
      city: "Dunedin, NZ",
      cricos: "N/A",
      institutionType: "University",
      isGo8: false,
      worldRank: 206,
      acceptanceRate: 58.0,
      minGpa: 3.0,
      minSat: 1180,
      minIelts: 6.0,
      minPte: 50,
      atarEquivalent: 70,
      tuitionAud: 32000,
      tuitionUsd: 21000,
      image: "assets/images/hero_australia.png",
      tags: ["Oldest in NZ", "Student City"],
      programs: ["Health Sciences", "Humanities", "Dentistry"],
      sem1Deadline: "2026-12-10",
      sem2Deadline: "2026-06-25",
      requirements: ["High School Diploma", "IELTS 6.0"],
      description: "New Zealand's oldest university, known for its vibrant student lifestyle and health sciences."
    },
    {
      id: "ilsc",
      name: "ILSC Language Schools",
      shortName: "ILSC",
      country: "Australia",
      state: "New South Wales",
      city: "Sydney, NSW",
      cricos: "02137M",
      institutionType: "Language Institute",
      isGo8: false,
      worldRank: 999,
      acceptanceRate: 95.0,
      minGpa: 0,
      minSat: 0,
      minIelts: 0,
      minPte: 0,
      atarEquivalent: 0,
      tuitionAud: 15000,
      tuitionUsd: 10000,
      image: "assets/images/hero_australia.png",
      tags: ["ELICOS", "English Courses"],
      programs: ["General English", "IELTS Mastery", "Cambridge Preparation"],
      sem1Deadline: "Rolling",
      sem2Deadline: "Rolling",
      requirements: ["No minimum GPA", "Passport"],
      description: "Leading language institute offering dynamic English courses and IELTS mastery programs."
    },
    {
      id: "kaplan-nz",
      name: "Kaplan International Languages",
      shortName: "Kaplan NZ",
      country: "New Zealand",
      state: "Auckland",
      city: "Auckland, NZ",
      cricos: "N/A",
      institutionType: "Language Institute",
      isGo8: false,
      worldRank: 999,
      acceptanceRate: 98.0,
      minGpa: 0,
      minSat: 0,
      minIelts: 0,
      minPte: 0,
      atarEquivalent: 0,
      tuitionAud: 14000,
      tuitionUsd: 9000,
      image: "assets/images/campus_sydney.png",
      tags: ["English New Zealand", "Pathways"],
      programs: ["Intensive English", "Academic English", "Exam Prep"],
      sem1Deadline: "Rolling",
      sem2Deadline: "Rolling",
      requirements: ["No minimum GPA", "Passport"],
      description: "Kaplan provides immersive English language courses in beautiful Auckland, with university pathway options."
    }
  ],"""

content = content.replace("    }\n  ],\n\n  scholarships:", new_items + "\n\n  scholarships:")

# Update the main info
content = content.replace('title: "Study in Australia Portal",', 'title: "Study in Oceania Portal",')
content = content.replace('subtitle: "Group of Eight (Go8) & Premier Australian Universities",', 'subtitle: "Top Universities & Language Institutes in Australia and New Zealand",')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
