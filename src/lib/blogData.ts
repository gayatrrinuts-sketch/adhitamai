export interface BlogSection {
  heading: string;
  content: string;
  contentBlocks?: ContentBlock[];
}

// Rich content block types for long-form articles
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  imageAlt?: string;
  introduction?: string;
  sections: BlogSection[];
  faq?: { heading: string; items: FaqItem[] };
  relatedTopics?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-make-the-most-of-your-first-six-months",
    category: "Strategy",
    title: "How to Make the Most of Your First Six Months",
    description:
      "A practical roadmap to build strong foundations in your UPSC preparation.",
    date: "Sep 12, 2025",
    readTime: "8 min read",
    seoTitle:
      "How to Make the Most of Your First Six Months of UPSC Preparation",
    seoDescription:
      "Learn how to structure your first six months of UPSC preparation, build strong foundations, create a realistic study routine, and begin practicing effectively.",
    sections: [
      {
        heading: "Understand the exam before you start preparing",
        content: `The first mistake many aspirants make is beginning with books instead of beginning with the examination itself.

Before choosing study material, understand the structure of the UPSC examination, the relationship between Prelims and Mains, the broad syllabus, and the type of thinking expected in both stages.

Read the syllabus carefully. Then look at previous year questions. The purpose is not to memorise questions but to understand what the examination repeatedly asks you to think about.

This gives your preparation a direction from the beginning.`
      },
      {
        heading: "Build a strong foundation",
        content: `Your first few months should be about building conceptual clarity.

For subjects such as Polity, History, Geography and Economy, start with foundational material before moving into specialised sources. Do not try to collect every book recommended by every topper.

A smaller, well-understood set of resources is more useful than a large collection that you rarely revisit.

Your objective during this stage is to create a mental map of the syllabus.`
      },
      {
        heading: "Create a realistic study plan",
        content: `A useful study plan is one that you can follow repeatedly.

Divide your preparation into manageable blocks rather than designing an ideal timetable that assumes perfect concentration every day.

A good plan should include learning, revision, practice and time for current affairs. It should also leave enough flexibility for difficult topics and unexpected changes in your schedule.

Consistency matters more than having the perfect timetable.`
      },
      {
        heading: "Integrate current affairs early",
        content: `Current affairs should not become a separate mountain of information.

Begin connecting important developments with static subjects from the beginning. A constitutional issue can connect with Polity. A climate agreement can connect with Environment. A policy announcement can connect with Economy and Governance.

This habit makes revision easier because you begin to understand relationships rather than remembering isolated events.`
      },
      {
        heading: "Practice before you feel ready",
        content: `Many aspirants postpone questions because they believe they first need to finish the syllabus.

Practice is not only for testing knowledge. It is also a way to discover what you do not understand.

Start with manageable topic-wise questions. Review the explanation carefully, identify why an option was correct or incorrect, and return to the underlying concept when necessary.`
      },
      {
        heading: "Track what you actually learn",
        content: `Do not measure preparation only by hours spent at a desk.

Keep track of topics completed, topics revised, questions attempted, recurring mistakes and areas that need another pass.

The purpose of tracking is not to create pressure. It is to make your preparation visible enough that you can make better decisions.`
      }
    ]
  },

  {
    slug: "key-topics-in-indian-polity-for-prelims-2027",
    category: "Polity",
    title: "Key Topics in Indian Polity for Prelims 2027",
    description:
      "A focused breakdown of high-yield topics with smart preparation tips.",
    date: "Sep 10, 2025",
    readTime: "6 min read",
    seoTitle:
      "Key Topics in Indian Polity for UPSC Prelims 2027",
    seoDescription:
      "A concept-first guide to important Indian Polity areas for UPSC Prelims, including the Constitution, Parliament, Judiciary, federalism, constitutional bodies and governance.",
    sections: [
      {
        heading: "Start with the constitutional framework",
        content: `Before studying individual Articles, understand the architecture of the Constitution.

Know the broad structure, constitutional principles, distribution of powers, fundamental rights, directive principles, constitutional amendments and the relationship between institutions.

Once the framework is clear, individual provisions become easier to place in context.`
      },
      {
        heading: "Fundamental Rights and Directive Principles",
        content: `Fundamental Rights are frequently tested through concepts, exceptions and comparisons.

Do not prepare them as disconnected Article numbers. Understand the nature of each right, the conditions under which restrictions can operate, and how Fundamental Rights relate to Directive Principles and constitutional remedies.`
      },
      {
        heading: "Parliament and the legislative process",
        content: `Build a clear understanding of Lok Sabha and Rajya Sabha, their powers, the role of the Speaker and Chairman, parliamentary procedures, bills, money bills, joint sittings, committees and the broader legislative process.

Questions often become easier when you understand why a procedure exists rather than memorising the procedure alone.`
      },
      {
        heading: "President, Prime Minister and Council of Ministers",
        content: `Study the constitutional position of the President alongside the real functioning of the parliamentary executive.

Pay attention to appointment, powers, discretion, aid and advice, collective responsibility and the relationship between the Council of Ministers and Parliament.`
      },
      {
        heading: "Judiciary",
        content: `Understand the structure and constitutional role of the Supreme Court and High Courts.

Focus on judicial review, writ jurisdiction, judicial independence, important constitutional principles and the relationship between the judiciary and the legislature.`
      },
      {
        heading: "Federalism and constitutional bodies",
        content: `Federal relations deserve both static and analytical preparation.

Study the distribution of legislative, administrative and financial powers as well as institutions such as the Election Commission, CAG, UPSC, Finance Commission and other constitutional bodies.

Always ask: what is the institution responsible for, who appoints it, and how is its independence protected?`
      }
    ]
  },

  {
    slug: "geography-basics-a-concept-first-approach",
    category: "Geography",
    title: "Geography Basics: A Concept-First Approach",
    description:
      "Understand core concepts instead of just memorising facts.",
    date: "Sep 8, 2025",
    readTime: "7 min read",
    seoTitle:
      "Geography Basics for UPSC: A Concept-First Approach",
    seoDescription:
      "Build UPSC Geography fundamentals using concepts, maps, processes and spatial relationships instead of relying on rote memorisation.",
    sections: [
      {
        heading: "Think in systems, not isolated facts",
        content: `Geography becomes much easier when you stop treating it as a list of places.

A mountain range affects climate. Climate influences vegetation. Vegetation affects agriculture and settlement. Rivers interact with relief, rainfall and human activity.

The more relationships you understand, the fewer facts you need to memorise separately.`
      },
      {
        heading: "Build physical geography first",
        content: `Begin with Earth's structure, geomorphology, climatology, oceanography and basic atmospheric processes.

These concepts form the foundation for understanding monsoons, cyclones, river systems, soils, vegetation and many other topics.`
      },
      {
        heading: "Use maps actively",
        content: `Maps should not be reserved for the final stages of preparation.

Locate important rivers, mountain ranges, passes, coastlines, states, neighbouring countries, seas and regions while studying related topics.

Spatial memory becomes stronger when geographical information is attached to a visual location.`
      },
      {
        heading: "Connect physical and human geography",
        content: `Do not study physical geography and human geography as completely separate subjects.

Population distribution, agriculture, industries, transport and urbanisation are strongly influenced by physical geography.

These connections are useful both for Prelims and for analytical answers in Mains.`
      },
      {
        heading: "Revise through explanation",
        content: `After studying a concept, close the book and explain it in your own words.

If you can explain why a phenomenon occurs, what factors influence it, and what changes when one factor changes, you probably understand it better than someone who has simply memorised a definition.`
      }
    ]
  },

  {
    slug: "how-to-improve-your-answer-writing",
    category: "Answer Writing",
    title: "How to Improve Your Answer Writing",
    description:
      "Structure, presentation and content tips for higher scoring answers.",
    date: "Sep 5, 2025",
    readTime: "6 min read",
    seoTitle:
      "How to Improve UPSC Mains Answer Writing",
    seoDescription:
      "Improve UPSC Mains answer writing with better structure, introductions, arguments, examples, conclusions, presentation and self-review.",
    sections: [
      {
        heading: "Understand what the question is asking",
        content: `Before writing, identify the directive in the question.

Words such as discuss, analyse, evaluate, examine and critically examine require different approaches.

A strong answer begins with answering the actual question rather than everything you know about the topic.`
      },
      {
        heading: "Build a clean structure",
        content: `A simple structure often works best: introduction, body and conclusion.

The introduction should establish context. The body should answer the core demands of the question in organised points. The conclusion should bring the response together rather than simply repeating the introduction.`
      },
      {
        heading: "Use dimensions",
        content: `For analytical questions, avoid writing ten variations of the same argument.

Think in dimensions such as social, economic, political, constitutional, environmental, ethical, technological or international perspectives where relevant.

This helps demonstrate breadth without losing focus.`
      },
      {
        heading: "Use examples carefully",
        content: `Examples are useful when they strengthen an argument.

Use relevant constitutional provisions, government initiatives, committees, case studies, historical examples, contemporary developments or data where appropriate.

Do not add examples merely to make an answer look full.`
      },
      {
        heading: "Practice with self-review",
        content: `After writing, review the answer against a simple checklist:

Did I answer every part of the question?
Is the structure easy to follow?
Are the arguments sufficiently varied?
Have I used relevant examples?
Is the conclusion meaningful?

Consistent self-review gradually improves writing quality.`
      }
    ]
  },

  {
    slug: "how-to-read-current-affairs-the-right-way",
    category: "Current Affairs",
    title: "How to Read Current Affairs the Right Way",
    description:
      "A simple system to stay updated without feeling overwhelmed.",
    date: "Sep 2, 2025",
    readTime: "5 min read",
    seoTitle:
      "How to Read Current Affairs for UPSC the Right Way",
    seoDescription:
      "Learn a practical way to read UPSC current affairs, connect news with the syllabus, make useful notes and avoid information overload.",
    sections: [
      {
        heading: "Do not try to read everything",
        content: `The amount of information published every day is much larger than what an aspirant can meaningfully retain.

Your objective is not to consume the maximum number of articles. It is to identify developments that have relevance to the syllabus and understand them properly.`
      },
      {
        heading: "Read for context",
        content: `When you encounter a major development, ask a few simple questions:

What happened?
Why did it happen?
What background do I need to understand it?
Which part of the UPSC syllabus does it connect with?
What broader issue does it reveal?

This turns news consumption into learning.`
      },
      {
        heading: "Connect current and static topics",
        content: `A strong current-affairs habit is built around connections.

When a new policy is announced, revisit the relevant constitutional, economic or governance concepts. When an environmental issue appears, connect it to ecology, climate processes and institutions.

Static knowledge makes current affairs easier to understand.`
      },
      {
        heading: "Make notes only when they have a purpose",
        content: `Do not rewrite entire articles.

Capture the parts that are difficult to recall or likely to become useful during revision: important facts, arguments, examples, institutional details and connections with static topics.`
      },
      {
        heading: "Revise before collecting more",
        content: `Current affairs preparation often fails because new information continually replaces old information.

Reserve time for revision. The goal is to convert a small amount of useful material into knowledge that remains available when you need it.`
      }
    ]
  },

  {
    slug: "modern-history-themes-that-keep-repeating",
    category: "History",
    title: "Modern History: Themes That Keep Repeating",
    description:
      "Important themes and patterns from modern Indian history for Prelims.",
    date: "Aug 28, 2025",
    readTime: "9 min read",
    seoTitle:
      "Modern History Themes for UPSC Prelims",
    seoDescription:
      "Understand recurring themes in modern Indian history for UPSC preparation, including colonial expansion, reform movements, resistance, nationalism and the freedom struggle.",
    sections: [
      {
        heading: "Colonial expansion and its consequences",
        content: `Begin with the process through which colonial power expanded and consolidated itself.

Understand not only the sequence of events but also the political, economic and administrative consequences of expansion.`
      },
      {
        heading: "Economic impact of colonial rule",
        content: `Concepts such as land revenue systems, commercialisation of agriculture, deindustrialisation and the broader economic transformation of India provide an important framework for modern history.

Focus on causes, effects and differences between systems rather than memorising isolated descriptions.`
      },
      {
        heading: "Social and religious reform",
        content: `Reform movements are easier to remember when studied around the problems they attempted to address, their methods, major figures and the debates surrounding them.

Look for both common themes and important differences between movements.`
      },
      {
        heading: "Resistance before organised nationalism",
        content: `Study early resistance movements as part of the larger story of changing colonial relationships.

Rather than treating each uprising as a separate fact set, compare their causes, leadership, regional character, methods and limitations.`
      },
      {
        heading: "The evolution of nationalism",
        content: `Understand how political consciousness changed over time.

The growth of associations, the early nationalist phase, more assertive political methods, mass mobilisation and major movements should be understood as a developing process rather than isolated chapters.`
      },
      {
        heading: "Read history through themes",
        content: `For revision, organise history into recurring themes: state formation, economic change, social reform, resistance, nationalism, constitutional development and mass movements.

This makes a large syllabus easier to retrieve during examination conditions.`
      }
    ]
  },

  {
    slug: "environment-and-ecology-key-concepts-for-prelims",
    category: "Environment",
    title: "Environment & Ecology: Key Concepts for Prelims",
    description:
      "Essential concepts, recent focus areas and how to approach this subject.",
    date: "Aug 24, 2025",
    readTime: "7 min read",
    seoTitle:
      "Environment and Ecology for UPSC Prelims",
    seoDescription:
      "Build a strong Environment and Ecology foundation for UPSC Prelims with ecosystems, biodiversity, conservation, climate change, pollution and environmental institutions.",
    sections: [
      {
        heading: "Understand ecosystems first",
        content: `Start with the basic relationships within ecosystems: producers, consumers, decomposers, food chains, food webs, energy flow and ecological pyramids.

These concepts form the foundation for understanding biodiversity and environmental change.`
      },
      {
        heading: "Build your biodiversity framework",
        content: `Learn how biodiversity is measured and why species, habitats and genetic diversity matter.

Then connect these ideas with conservation approaches, protected areas, species recovery and threats to ecosystems.`
      },
      {
        heading: "Understand climate change conceptually",
        content: `Instead of memorising lists of greenhouse gases and agreements, understand the mechanisms first.

Know the basic greenhouse effect, climate forcing, adaptation, mitigation, carbon cycles and the relationship between climate change and ecosystems.`
      },
      {
        heading: "Pollution requires cause-effect thinking",
        content: `For air, water, soil and other forms of pollution, focus on sources, mechanisms, impacts, mitigation and the institutions responsible for regulation.

A cause-effect framework makes revision much more effective than memorising disconnected pollutants.`
      },
      {
        heading: "Track environmental institutions",
        content: `Know the broad roles of important environmental institutions, conventions and regulatory frameworks.

The goal is to understand who does what and why rather than memorising every organisation as a separate fact.`
      }
    ]
  },

  {
    slug: "ethics-case-studies-how-to-approach-them",
    category: "Ethics",
    title: "Ethics Case Studies: How to Approach Them",
    description:
      "A practical way to think, structure and write effective ethics answers.",
    date: "Aug 20, 2025",
    readTime: "8 min read",
    seoTitle:
      "How to Approach UPSC Ethics Case Studies",
    seoDescription:
      "Learn a practical framework for solving UPSC Ethics case studies using stakeholders, ethical issues, options, consequences and justified decisions.",
    sections: [
      {
        heading: "Read the situation carefully",
        content: `Do not rush into writing the solution.

First identify the central problem, the context, the role you have been given and the constraints within which the decision must be taken.`
      },
      {
        heading: "Identify the stakeholders",
        content: `List the individuals, institutions and groups affected by the decision.

Stakeholder identification helps reveal competing interests and prevents an answer from focusing on only one side of the problem.`
      },
      {
        heading: "Identify the ethical issues",
        content: `Ask what values or principles are in conflict.

Depending on the case, these may include integrity, compassion, accountability, impartiality, public interest, transparency, legality or professional responsibility.`
      },
      {
        heading: "Generate realistic options",
        content: `Do not create artificial choices where one option is obviously perfect.

Present a few realistic alternatives and consider the benefits, risks and ethical implications of each.`
      },
      {
        heading: "Justify the final course of action",
        content: `A strong case-study answer does not merely announce a decision.

Explain why the chosen course of action balances ethical principles, practical realities, legality and public interest better than the alternatives.`
      },
      {
        heading: "Think like a decision-maker",
        content: `Ethics case studies are easier when you stop treating them as abstract philosophical questions.

Think about what you would actually do, what information you would seek, what immediate steps you would take, how you would communicate the decision and how you would prevent the problem from recurring.`
      }
    ]
  },

  // =====================================================================
  // ARTICLE #1: UPSC 2027 Preparation Strategy
  // =====================================================================
  {
    slug: "upsc-2027-preparation-strategy",
    category: "Strategy",
    title: "UPSC 2027 Preparation Strategy: Complete Month-by-Month IAS Study Plan (Prelims + Mains)",
    description: "A month-by-month UPSC 2027 study plan covering Prelims on 23 May and Mains from 20 August — for beginners, working professionals and repeat aspirants.",
    date: "Sep 27, 2026",
    readTime: "14 min read",
    seoTitle: "UPSC 2027 Preparation Strategy: Month-by-Month Plan",
    seoDescription: "UPSC 2027 preparation strategy for Prelims and Mains: month-by-month plan, revision, answer writing, current affairs and mock tests.",
    image: "/assets/upsc-2027-strategy.jpg",
    imageAlt: "UPSC 2027 month-by-month preparation roadmap on Adhitam AI",
    introduction: "UPSC Prelims 2027 is on 23 May 2027 and Mains starts on 20 August 2027, so you have about eight months from today. This is a step-by-step UPSC 2027 preparation strategy for beginners, working professionals and repeat aspirants.",
    relatedTopics: ["Study Plan", "Prelims 2027", "Mains 2027", "Current Affairs", "Answer Writing", "PYQs", "Mock Tests", "CSAT"],
    sections: [
      {
        heading: "UPSC 2027 Exam Dates You Must Plan Around",
        content: "",
        contentBlocks: [
          {
            type: "table",
            caption: "Key UPSC 2027 dates — confirm at upsc.gov.in before planning.",
            headers: ["Event", "Date"],
            rows: [
              ["Prelims 2027", "23 May 2027"],
              ["Mains 2027", "20 August 2027"],
              ["Notification (tentative)", "13 January 2027"],
              ["Last date to apply (tentative)", "2 February 2027"],
              ["Gap between Prelims and Mains", "About 89 days"]
            ]
          },
          {
            type: "callout",
            text: "Dates are subject to change. Always confirm the current schedule on the official UPSC website at upsc.gov.in before making decisions."
          },
          {
            type: "paragraph",
            text: "The application window typically runs for about three weeks. Keep scanned copies of your photograph, signature, and supporting documents ready before the notification is published. Applying on the last day increases the risk of technical issues. Submit early."
          },
          {
            type: "paragraph",
            text: "The roughly 89-day gap between Prelims and Mains is shorter than it appears. If you wait for the Prelims result before beginning Mains preparation, you will lose six to eight of those weeks. The correct approach is to begin answer writing immediately after Prelims, regardless of how the exam went."
          }
        ]
      },
      {
        heading: "UPSC 2027 Study Plan: Month-by-Month Roadmap (Oct 2026 to Aug 2027)",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "The plan below assumes preparation begins around October 2026. If you are starting earlier or later, adjust the month labels while keeping the sequence of activities the same. Full-time aspirants should target 8 to 10 hours daily. Working professionals should aim for 4 to 5 hours on weekdays and more on weekends. These are planning targets, not guarantees — what matters is consistency."
          },
          {
            type: "table",
            caption: "Month-by-month preparation roadmap.",
            headers: ["Month", "Focus Areas", "Milestones"],
            rows: [
              ["October 2026", "NCERTs — History, Geography, Polity, Economy", "Build conceptual base. Establish daily newspaper habit."],
              ["November 2026", "Polity, Modern History, Geography — standard books", "First read of these subjects complete. Begin notes."],
              ["December 2026", "Economy, Environment, Science & Tech, Art & Culture", "First read complete. Prepare application documents."],
              ["January 2027", "Ethics, Governance, International Relations, Internal Security", "Full syllabus covered once. Apply after notification opens."],
              ["February 2027", "Gap-filling, weak topics, begin PYQs", "10 years of Prelims PYQs answered and reviewed."],
              ["March 2027", "Revision round 1, CSAT practice, topic tests", "One full-length mock per week."],
              ["April 2027", "Revision round 2, current affairs consolidation", "Two mocks per week. Review and analyse every mock."],
              ["May 2027", "Final revision — no new sources. Full-length mocks.", "Prelims on 23 May 2027."],
              ["June 2027", "Prelims result window — restart Mains answer writing immediately", "Do not wait for the result to begin Mains work."],
              ["July–August 2027", "Mains — daily answer writing, essay practice, optional revision", "1 to 2 answers written daily. Mains from 20 August 2027."]
            ]
          },
          {
            type: "callout",
            text: "Do not start a new source in April or May. Revise what you already know. Familiarity with your own notes is more useful than encountering a new book two weeks before the exam."
          }
        ]
      },
      {
        heading: "UPSC Prelims 2027 Strategy: GS Paper I and CSAT",
        content: "",
        contentBlocks: [
          {
            type: "table",
            headers: ["Paper", "Questions", "Marks", "Purpose"],
            rows: [
              ["GS Paper I", "100", "200", "Merit — determines Mains eligibility"],
              ["CSAT", "80", "200", "Qualifying — 33% required"]
            ]
          },
          {
            type: "paragraph",
            text: "Both papers carry a negative mark of one-third for incorrect answers. There is no negative marking for unattempted questions."
          },
          {
            type: "numbered-list",
            items: [
              "Solve previous year questions before using standard books. PYQs reveal the exact pattern and depth the exam expects.",
              "Read fewer sources. Revise them more. Three revisions of one good source is worth more than one reading of four sources.",
              "Begin taking weekly full-length mocks from March 2027. Timed practice matters as much as content knowledge.",
              "Learn to eliminate. You do not need to know the correct answer with certainty to narrow down options meaningfully.",
              "Do not ignore CSAT. The 33% qualifying threshold has caught many aspirants off-guard. Keep it in your weekly schedule throughout."
            ]
          }
        ]
      },
      {
        heading: "UPSC Mains 2027 Strategy: Answer Writing, Essay, GS and Optional",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "The Mains examination has nine papers. Of these, the two qualifying language papers do not count toward merit. The remaining seven papers — Essay, GS I through GS IV, and Optional Papers I and II — together carry 1,750 marks that determine your final ranking alongside the interview."
          },
          {
            type: "callout",
            text: "Begin answer writing before Prelims. Even 15 to 20 minutes of structured writing practice daily builds the habit you will rely on in August."
          },
          {
            type: "list",
            items: [
              "Use a fixed answer structure: context, dimensions of the issue, a grounded conclusion. Vary this only when the question demands it.",
              "Respect word limits. An answer that runs far over or well under the expected length signals poor planning to the examiner.",
              "For the Essay, practise at least two full essays per month from January onwards. Read what you write. Revise it.",
              "Choose your Optional subject carefully. Score potential, available study material, and your ability to write structured answers in that subject all matter.",
              "After writing any practice answer, review it against the question. Then rewrite it. The second draft is where real improvement happens."
            ]
          }
        ]
      },
      {
        heading: "UPSC Current Affairs, Revision and Interview Preparation",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "Current affairs preparation should run continuously alongside your static subjects. Spend 60 to 90 minutes each day with a newspaper or current-affairs digest. At the end of each month, review your compilations to reinforce what you have read. By Prelims, you want roughly 12 months of current affairs well consolidated."
          },
          {
            type: "paragraph",
            text: "For revision, use a spaced schedule: review a topic one day after first reading, again at seven days, again at thirty days, and finally at ninety days. This schedule is difficult to follow in your head — keep a simple tracker. One-page topic summaries make the 30-day and 90-day revisions much faster."
          },
          {
            type: "callout",
            text: "Revision is not the same as re-reading. Active recall — closing your notes and writing down what you remember — is far more effective."
          },
          {
            type: "paragraph",
            text: "Interview preparation can begin quietly during Mains. Keep a record of your graduation subject, hobbies, home state, and any current-affairs positions you have taken in your DAF. These will likely appear in your interview. You do not need a separate coaching module to begin this groundwork."
          },
          {
            type: "list",
            items: [
              "Protect sleep and exercise. Fatigue accumulates over months and affects retention more than it affects willpower.",
              "Take one day off each week. A full rest day does not reduce preparation — it makes the remaining six days more productive.",
              "Check in with your preparation every two weeks. If a subject has not been touched, something needs to shift."
            ]
          }
        ]
      }
    ],
    faq: {
      heading: "UPSC 2027 Preparation: Frequently Asked Questions",
      items: [
        {
          question: "When is UPSC Prelims 2027?",
          answer: "UPSC Prelims 2027 is scheduled for 23 May 2027, and Mains begins on 20 August 2027, as per the UPSC calendar released in May 2026."
        },
        {
          question: "Is 8 months enough to prepare for UPSC 2027?",
          answer: "Yes, if you start now and follow a fixed plan: one full syllabus read by February, then revision, PYQs and weekly mock tests. Most first-attempt candidates need 10 to 12 months, so cut low-value sources and prioritise PYQs."
        },
        {
          question: "Can I prepare for UPSC while working?",
          answer: "Yes. Study 4 to 5 hours on weekdays and 8 to 10 on weekends, use one standard source per subject, and skip extra test series until March."
        },
        {
          question: "Can I prepare for UPSC without coaching?",
          answer: "Yes. Standard books, PYQs, a free or paid test series and structured answer-writing feedback are enough. Coaching mainly adds discipline and peer accountability."
        },
        {
          question: "How should I start UPSC preparation from scratch?",
          answer: "Read the syllabus and 10 years of PYQs, finish NCERTs, then move to standard books subject by subject while reading a newspaper daily."
        },
        {
          question: "How many hours should I study for UPSC daily?",
          answer: "About 8 to 10 hours for full-time aspirants and 4 to 5 for working professionals. Consistency matters more than long single-day sessions."
        },
        {
          question: "Which is more important, Prelims or Mains?",
          answer: "Both. Prelims is a screening test, but Mains marks and the interview decide your final rank. Start answer writing before the Prelims result."
        }
      ]
    }
  },

  // =====================================================================
  // ARTICLE #2: Dr. Anuj Agnihotri UPSC AIR 1
  // =====================================================================
  {
    slug: "anuj-agnihotri-upsc-air-1-preparation-strategy",
    category: "Strategy",
    title: "How Dr. Anuj Agnihotri Secured UPSC AIR 1: His Preparation Strategy, Medical Science Optional and Self-Study Journey",
    description: "Preparation lessons from AIIMS Jodhpur graduate Dr. Anuj Agnihotri's UPSC Civil Services 2025 journey — self-study, Medical Science optional, and learning from earlier attempts.",
    date: "Sep 27, 2026",
    readTime: "11 min read",
    seoTitle: "Dr. Anuj Agnihotri UPSC AIR 1: Strategy, Optional Subject & Journey",
    seoDescription: "Learn how AIIMS Jodhpur graduate Dr. Anuj Agnihotri secured UPSC AIR 1 in 2025, with insights on Medical Science optional, self-study, answer writing and preparation.",
    image: "/assets/anuj-agnihotri-journey.jpg",
    imageAlt: "Dr. Anuj Agnihotri UPSC AIR 1 preparation strategy, Medical Science optional and self-study journey",
    introduction: "Dr. Anuj Agnihotri's path to All India Rank 1 in the UPSC Civil Services Examination 2025 began in medicine. An AIIMS Jodhpur graduate from Rawatbhata, Rajasthan, he completed his MBBS and internship before turning to the Civil Services Examination.\n\nHis journey stands out for the choices he made along the way: preparing from his hometown rather than moving to Delhi, choosing Medical Science as his UPSC optional subject, and using an unsuccessful attempt to identify what he needed to improve.\n\nThis article draws on his journey as an example of one candidate's experience. It should not be read as a formula.",
    relatedTopics: ["Self-Study", "Medical Science Optional", "Answer Writing", "UPSC Attempts", "Optional Subject", "Small-Town Preparation"],
    sections: [
      {
        heading: "From AIIMS Jodhpur to the UPSC Civil Services Examination",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "Dr. Agnihotri grew up in Rawatbhata, a small town in Rajasthan. He secured AIR 25 in the All India AIIMS Entrance examination and completed his MBBS at AIIMS Jodhpur. After finishing his internship in January 2023, he shifted his focus toward the Civil Services Examination."
          },
          {
            type: "paragraph",
            text: "His motivation, as described in his journey, was rooted in public service rather than a professional pivot. He chose Medical Science as his optional subject — a choice informed by his medical education rather than by topper trends or coaching recommendations."
          },
          {
            type: "paragraph",
            text: "Choosing a subject you understand deeply — because of your academic background — is a different calculation than choosing it because someone ranked well with it. Agnihotri's situation illustrates that distinction."
          }
        ]
      },
      {
        heading: "Preparing for UPSC from a small town",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "Agnihotri prepared from Rawatbhata rather than relocating to Delhi or another coaching hub. His approach combined independent study with online and recorded resources, used selectively alongside his internship schedule."
          },
          {
            type: "paragraph",
            text: "This is not an argument against coaching or against moving to a larger city. Both decisions depend on the candidate's specific circumstances, resources, and learning style. What his experience illustrates is that preparation outside traditional coaching centres is possible when the discipline and resources are in place."
          },
          {
            type: "list",
            items: [
              "He limited social media use and protected his study time from routine distractions.",
              "He used online resources and recorded lectures where they were useful, without making them a substitute for active study.",
              "He built a consistent routine that could work within the constraints of his internship and later his own schedule.",
              "He sought guidance selectively — using coaching or mentorship when it addressed a specific need, not as a default."
            ]
          },
          {
            type: "callout",
            text: "Preparation from a smaller town is one approach, not the only approach. What mattered in Agnihotri's case was the discipline and structure he maintained, not the geography."
          }
        ]
      },
      {
        heading: "What his UPSC attempts taught him",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "Agnihotri did not secure AIR 1 on his first attempt. His first attempt reached the Reserve List. His second attempt brought him to the interview stage, but his final score was lower than expected."
          },
          {
            type: "paragraph",
            text: "Rather than simply increasing study hours, he used the gap between attempts to diagnose specific weaknesses. The areas he identified were answer-writing consistency, planning before writing, and completing papers within the allotted time. In 2025, he secured AIR 1 with 1,071 marks."
          },
          {
            type: "paragraph",
            text: "Between his second and third attempts, he worked as a DANICS probationer. That field exposure gave him practical context that informed parts of his preparation, particularly in Governance and Ethics."
          },
          {
            type: "callout",
            text: "The useful lesson from his attempts is not the number of tries but the method of diagnosis. Identifying what specifically went wrong — not just that performance was lower than expected — is what created an actionable path forward."
          }
        ]
      },
      {
        heading: "Study habits and resources from Agnihotri's preparation",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "The following five practices are drawn from descriptions of his preparation. They are presented as examples of approaches worth considering, not as a checklist to copy."
          },
          {
            type: "numbered-list",
            items: [
              "Use maps to build geographical context. Placing events, policies, and geographic features in their spatial setting improves both retention and analytical ability.",
              "Read beyond coaching notes. Sources like Yojana, government reports and PIB reviews, Supreme Court Observer, and IGNOU study material provide depth that notes often compress or omit.",
              "Practise answer writing continuously. Write regularly and review what you write. A well-understood concept that cannot be written clearly under time pressure is not exam-ready.",
              "Make learning memorable through association and application rather than repetition alone.",
              "Prepare for the interview with varied questions — not just those expected from your DAF, but those arising from current affairs, your state, and your optional subject."
            ]
          },
          {
            type: "paragraph",
            text: "On resource selection: the value of a source depends on how well you understand it and can use it, not on how comprehensive it is. A candidate who reads Yojana regularly and connects it to the syllabus will often benefit more than one who skims twelve sources without depth."
          }
        ]
      },
      {
        heading: "Choosing Medical Science as an optional subject",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "Agnihotri chose Medical Science for his Mains optional. This choice was directly connected to his MBBS background at AIIMS Jodhpur. A subject you have studied formally for five or more years is genuinely different from a subject you are approaching for the first time."
          },
          {
            type: "callout",
            text: "His choice should not be read as a recommendation that every medical graduate should choose Medical Science. The optional decision requires careful individual consideration."
          },
          {
            type: "list",
            items: [
              "Your interest in the subject — not just familiarity, but genuine engagement with the content.",
              "The syllabus and how well it aligns with your existing knowledge.",
              "Time available to prepare the optional alongside GS papers.",
              "Availability of good study material and, if needed, guidance.",
              "Your ability to write structured, examiner-friendly answers in that subject within the word limit.",
              "Your academic background — which creates genuine depth, not just familiarity."
            ]
          },
          {
            type: "paragraph",
            text: "A familiar academic background is one important factor in this decision, but it does not automatically make a subject the best choice. Some medical graduates perform better with subjects that overlap more directly with the GS papers. The decision should be based on your complete situation."
          }
        ]
      },
      {
        heading: "A perspective on AIR 1 and UPSC preparation",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "A top rank is not the only measure of ability or worth. The UPSC Civil Services Examination is a high-stakes, competitive process where small mark differences can shift rank positions substantially. Candidates who do not secure top ranks — or who do not qualify in a particular attempt — are not thereby less capable than those who do."
          },
          {
            type: "paragraph",
            text: "Agnihotri's journey took more than one attempt. That trajectory — setback, diagnosis, adjustment, and eventual success — is common in this examination. Many candidates who ultimately secure a position in the civil services do not do so on their first attempt."
          },
          {
            type: "callout",
            text: "Having a Plan B is not the same as lacking commitment to the UPSC. Candidates should make decisions based on their own circumstances, values, and available time — not based on the assumption that every aspirant's path must look the same."
          }
        ]
      },
      {
        heading: "What UPSC aspirants can learn from his journey",
        content: "",
        contentBlocks: [
          {
            type: "paragraph",
            text: "The most important lesson from Agnihotri's preparation is not the timetable he followed or the exact resources he used. It is the underlying logic of his approach: build an individual strategy based on your circumstances, use resources selectively, diagnose specific weaknesses rather than simply adding more hours, and create a sustainable routine."
          },
          {
            type: "list",
            items: [
              "Build a preparation strategy around your own circumstances, not an assumed ideal.",
              "Use resources selectively. Depth of understanding matters more than breadth of sources.",
              "After each attempt or mock, identify what specifically needs to improve — not just that something does.",
              "Revise effectively. Coverage is not the same as retention.",
              "Practise under exam conditions. Timed writing and timed answering reveal problems that comfortable reading conceals.",
              "Create a sustainable routine. Preparation that cannot be maintained for 12 to 18 months is not a preparation strategy.",
              "Make decisions based on your personal goals, constraints, and circumstances."
            ]
          },
          {
            type: "callout",
            text: "Copying a topper's timetable is unlikely to produce a topper's result. A timetable is a tool built for a specific person's schedule, weaknesses, and strengths. What you can borrow is the principle — consistency, targeted practice, and honest self-assessment — not the specific daily schedule."
          }
        ]
      }
    ],
    faq: {
      heading: "Questions Aspirants May Have About Dr. Anuj Agnihotri's UPSC Strategy",
      items: [
        {
          question: "Did Dr. Anuj Agnihotri prepare for UPSC from Delhi?",
          answer: "According to the supplied article, he prepared from his hometown, Rawatbhata, rather than moving to Delhi. His preparation combined self-study with online resources and guidance where useful."
        },
        {
          question: "What was Dr. Anuj Agnihotri's UPSC optional subject?",
          answer: "He chose Medical Science for UPSC Mains, drawing on his medical education and MBBS background. His choice is presented as an example, not as a recommendation that every medical graduate should choose the same optional."
        },
        {
          question: "Did Dr. Anuj Agnihotri use coaching?",
          answer: "The article describes a mixed approach rather than a simple coaching-versus-self-study choice. He used online and recorded learning resources where useful and later focused on independent preparation."
        },
        {
          question: "What did Dr. Anuj Agnihotri change after his earlier attempts?",
          answer: "The article describes changes in answer-writing consistency, planning before writing, and completing papers within the allotted time. His experience is used to illustrate the value of diagnosing specific weaknesses rather than simply increasing study volume."
        },
        {
          question: "What can UPSC aspirants learn from his preparation?",
          answer: "The article emphasizes selective resource use, consistent practice, performance review, sustainable routines and building a preparation strategy around one's own circumstances rather than copying a topper's timetable."
        },
        {
          question: "Should every medical graduate choose Medical Science as an optional?",
          answer: "No such conclusion should be drawn from the article. It specifically notes that a familiar academic background does not automatically make a subject the best optional. Interest, syllabus, time, resources and ability to write answers should all be considered."
        },
        {
          question: "Can UPSC preparation be done without moving to Delhi?",
          answer: "The article presents Agnihotri's preparation from Rawatbhata as one example that preparation outside Delhi can be possible with suitable resources and a consistent routine. It should not be presented as proof that location never matters for any aspirant."
        },
        {
          question: "What role did failure or an unsuccessful attempt play in his preparation?",
          answer: "The article presents earlier results as opportunities to identify weaknesses in performance, particularly answer writing, planning and time management. The lesson is to diagnose what needs improvement rather than simply repeat the same preparation approach."
        }
      ]
    }
  }
];

export const relatedPosts: Record<string, string[]> = {
  "how-to-make-the-most-of-your-first-six-months": [
    "how-to-read-current-affairs-the-right-way",
    "how-to-improve-your-answer-writing",
    "upsc-2027-preparation-strategy",
    "modern-history-themes-that-keep-repeating"
  ],
  "key-topics-in-indian-polity-for-prelims-2027": [
    "modern-history-themes-that-keep-repeating",
    "environment-and-ecology-key-concepts-for-prelims",
    "upsc-2027-preparation-strategy",
    "how-to-make-the-most-of-your-first-six-months"
  ],
  "geography-basics-a-concept-first-approach": [
    "environment-and-ecology-key-concepts-for-prelims",
    "modern-history-themes-that-keep-repeating",
    "how-to-read-current-affairs-the-right-way",
    "how-to-make-the-most-of-your-first-six-months"
  ],
  "how-to-improve-your-answer-writing": [
    "ethics-case-studies-how-to-approach-them",
    "anuj-agnihotri-upsc-air-1-preparation-strategy",
    "upsc-2027-preparation-strategy",
    "key-topics-in-indian-polity-for-prelims-2027"
  ],
  "how-to-read-current-affairs-the-right-way": [
    "upsc-2027-preparation-strategy",
    "environment-and-ecology-key-concepts-for-prelims",
    "how-to-make-the-most-of-your-first-six-months",
    "modern-history-themes-that-keep-repeating"
  ],
  "modern-history-themes-that-keep-repeating": [
    "key-topics-in-indian-polity-for-prelims-2027",
    "how-to-make-the-most-of-your-first-six-months",
    "how-to-read-current-affairs-the-right-way",
    "geography-basics-a-concept-first-approach"
  ],
  "environment-and-ecology-key-concepts-for-prelims": [
    "geography-basics-a-concept-first-approach",
    "how-to-read-current-affairs-the-right-way",
    "key-topics-in-indian-polity-for-prelims-2027",
    "modern-history-themes-that-keep-repeating"
  ],
  "ethics-case-studies-how-to-approach-them": [
    "how-to-improve-your-answer-writing",
    "upsc-2027-preparation-strategy",
    "how-to-read-current-affairs-the-right-way",
    "anuj-agnihotri-upsc-air-1-preparation-strategy"
  ],
  "upsc-2027-preparation-strategy": [
    "how-to-make-the-most-of-your-first-six-months",
    "key-topics-in-indian-polity-for-prelims-2027",
    "how-to-improve-your-answer-writing",
    "how-to-read-current-affairs-the-right-way"
  ],
  "anuj-agnihotri-upsc-air-1-preparation-strategy": [
    "upsc-2027-preparation-strategy",
    "how-to-make-the-most-of-your-first-six-months",
    "how-to-improve-your-answer-writing",
    "key-topics-in-indian-polity-for-prelims-2027"
  ]
};

export const readingHooks = [
  {
    id: 0,
    title: "Build this into your study plan.",
    body: "Turn what you're reading into a structured preparation routine.",
    cta: "Try Adhitam AI"
  },
  {
    id: 1,
    title: "Not sure what to study next?",
    body: "Bring your preparation into a clearer daily routine.",
    cta: "Try Adhitam AI"
  },
  {
    id: 2,
    title: "Turn reading into revision.",
    body: "Keep important concepts connected to your preparation.",
    cta: "Try Adhitam AI"
  },
  {
    id: 3,
    title: "Practice while you learn.",
    body: "Move from understanding a topic to testing it.",
    cta: "Try Adhitam AI"
  },
  {
    id: 4,
    title: "Find the areas that need attention.",
    body: "Use practice and progress to guide your next revision.",
    cta: "Try Adhitam AI"
  },
  {
    id: 5,
    title: "Make your preparation more structured.",
    body: "Bring study, revision and practice into one system.",
    cta: "Try Adhitam AI"
  },
  {
    id: 6,
    title: "Keep current affairs connected.",
    body: "Connect developments with the subjects you're studying.",
    cta: "Try Adhitam AI"
  },
  {
    id: 7,
    title: "Still stuck on a concept?",
    body: "Use the AI Mentor when you need another explanation.",
    cta: "Try Adhitam AI"
  },
  {
    id: 8,
    title: "See what needs another pass.",
    body: "Track what you've studied and where more work is needed.",
    cta: "Try Adhitam AI"
  },
  {
    id: 9,
    title: "Prepare with more clarity.",
    body: "A structured system can make a large syllabus easier to navigate.",
    cta: "Try Adhitam AI"
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const relatedSlugs = relatedPosts[slug] || [];
  return relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined);
}
