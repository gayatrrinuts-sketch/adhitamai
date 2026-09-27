import { BlogPostDoc } from "./types/blog";

export const initialSeedArticles: BlogPostDoc[] = [
  // =====================================================================
  // ARTICLE #1: UPSC 2027 Preparation Strategy
  // =====================================================================
  {
    slug: "upsc-2027-preparation-strategy",
    category: "Strategy",
    title: "UPSC 2027 Preparation Strategy: Complete Month-by-Month IAS Study Plan (Prelims + Mains)",
    description: "A month-by-month UPSC 2027 study plan covering Prelims on 23 May and Mains from 20 August — for beginners, working professionals and repeat aspirants.",
    readTime: "14 min read",
    status: "published",
    tags: ["Adhitam AI", "UPSC", "IAS", "Civil Services", "Prelims", "Mains", "Study Plan", "UPSC 2027", "Current Affairs", "Answer Writing"],
    seoTitle: "UPSC 2027 Preparation Strategy: Month-by-Month Plan",
    seoDescription: "UPSC 2027 preparation strategy for Prelims and Mains: month-by-month plan, revision, answer writing, current affairs and mock tests.",
    image: "/assets/upsc-2027-strategy.jpg",
    imageAlt: "UPSC 2027 month-by-month preparation roadmap on Adhitam AI",
    introduction: "UPSC Prelims 2027 is on 23 May 2027 and Mains starts on 20 August 2027, so you have about eight months from today. This is a step-by-step UPSC 2027 preparation strategy for beginners, working professionals and repeat aspirants.",
    relatedTopics: ["Study Plan", "Prelims 2027", "Mains 2027", "Current Affairs", "Answer Writing", "PYQs", "Mock Tests", "CSAT"],
    blocks: [
      {
        type: "heading",
        level: 2,
        content: "UPSC 2027 Exam Dates You Must Plan Around",
        anchor: "upsc-2027-exam-dates-you-must-plan-around",
      },
      {
        type: "table",
        caption: "Key UPSC 2027 dates — confirm at upsc.gov.in before planning.",
        headers: ["Event", "Date"],
        rows: [
          ["Prelims 2027", "23 May 2027"],
          ["Mains 2027", "20 August 2027"],
          ["Notification (tentative)", "13 January 2027"],
          ["Last date to apply (tentative)", "2 February 2027"],
          ["Gap between Prelims and Mains", "About 89 days"],
        ],
      },
      {
        type: "quote",
        content: "Dates are subject to change. Always confirm the current schedule on the official UPSC website at upsc.gov.in before making decisions.",
      },
      {
        type: "paragraph",
        content: "The application window typically runs for about three weeks. Keep scanned copies of your photograph, signature, and supporting documents ready before the notification is published. Applying on the last day increases the risk of technical issues. Submit early.",
      },
      {
        type: "paragraph",
        content: "The roughly 89-day gap between Prelims and Mains is shorter than it appears. If you wait for the Prelims result before beginning Mains preparation, you will lose six to eight of those weeks. The correct approach is to begin answer writing immediately after Prelims, regardless of how the exam went.",
      },
      {
        type: "heading",
        level: 2,
        content: "UPSC 2027 Study Plan: Month-by-Month Roadmap (Oct 2026 to Aug 2027)",
        anchor: "upsc-2027-study-plan-month-by-month-roadmap-oct-2026-to-aug-2027",
      },
      {
        type: "paragraph",
        content: "The plan below assumes preparation begins around October 2026. If you are starting earlier or later, adjust the month labels while keeping the sequence of activities the same. Full-time aspirants should target 8 to 10 hours daily. Working professionals should aim for 4 to 5 hours on weekdays and more on weekends. These are planning targets, not guarantees — what matters is consistency.",
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
          ["July–August 2027", "Mains — daily answer writing, essay practice, optional revision", "1 to 2 answers written daily. Mains from 20 August 2027."],
        ],
      },
      {
        type: "quote",
        content: "Do not start a new source in April or May. Revise what you already know. Familiarity with your own notes is more useful than encountering a new book two weeks before the exam.",
      },
      {
        type: "adhitamPromo",
        variant: "study-plan",
        title: "Build this into your study plan.",
        description: "Turn what you're reading into a structured preparation routine.",
        cta: "Try Adhitam AI →",
      },
      {
        type: "heading",
        level: 2,
        content: "UPSC Prelims 2027 Strategy: GS Paper I and CSAT",
        anchor: "upsc-prelims-2027-strategy-gs-paper-i-and-csat",
      },
      {
        type: "table",
        headers: ["Paper", "Questions", "Marks", "Purpose"],
        rows: [
          ["GS Paper I", "100", "200", "Merit — determines Mains eligibility"],
          ["CSAT", "80", "200", "Qualifying — 33% required"],
        ],
      },
      {
        type: "paragraph",
        content: "Both papers carry a negative mark of one-third for incorrect answers. There is no negative marking for unattempted questions.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Solve previous year questions before using standard books. PYQs reveal the exact pattern and depth the exam expects.",
          "Read fewer sources. Revise them more. Three revisions of one good source is worth more than one reading of four sources.",
          "Begin taking weekly full-length mocks from March 2027. Timed practice matters as much as content knowledge.",
          "Learn to eliminate. You do not need to know the correct answer with certainty to narrow down options meaningfully.",
          "Do not ignore CSAT. The 33% qualifying threshold has caught many aspirants off-guard. Keep it in your weekly schedule throughout.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "UPSC Mains 2027 Strategy: Answer Writing, Essay, GS and Optional",
        anchor: "upsc-mains-2027-strategy-answer-writing-essay-gs-and-optional",
      },
      {
        type: "paragraph",
        content: "The Mains examination has nine papers. Of these, the two qualifying language papers do not count toward merit. The remaining seven papers — Essay, GS I through GS IV, and Optional Papers I and II — together carry 1,750 marks that determine your final ranking alongside the interview.",
      },
      {
        type: "quote",
        content: "Begin answer writing before Prelims. Even 15 to 20 minutes of structured writing practice daily builds the habit you will rely on in August.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use a fixed answer structure: context, dimensions of the issue, a grounded conclusion. Vary this only when the question demands it.",
          "Respect word limits. An answer that runs far over or well under the expected length signals poor planning to the examiner.",
          "For the Essay, practise at least two full essays per month from January onwards. Read what you write. Revise it.",
          "Choose your Optional subject carefully. Score potential, available study material, and your ability to write structured answers in that subject all matter.",
          "After writing any practice answer, review it against the question. Then rewrite it. The second draft is where real improvement happens.",
        ],
      },
      {
        type: "adhitamPromo",
        variant: "practice",
        title: "Practice while you learn.",
        description: "Move from understanding a topic to testing it.",
        cta: "Try Adhitam AI →",
      },
      {
        type: "heading",
        level: 2,
        content: "UPSC Current Affairs, Revision and Interview Preparation",
        anchor: "upsc-current-affairs-revision-and-interview-preparation",
      },
      {
        type: "paragraph",
        content: "Current affairs preparation should run continuously alongside your static subjects. Spend 60 to 90 minutes each day with a newspaper or current-affairs digest. At the end of each month, review your compilations to reinforce what you have read. By Prelims, you want roughly 12 months of current affairs well consolidated.",
      },
      {
        type: "paragraph",
        content: "For revision, use a spaced schedule: review a topic one day after first reading, again at seven days, again at thirty days, and finally at ninety days. This schedule is difficult to follow in your head — keep a simple tracker. One-page topic summaries make the 30-day and 90-day revisions much faster.",
      },
      {
        type: "quote",
        content: "Revision is not the same as re-reading. Active recall — closing your notes and writing down what you remember — is far more effective.",
      },
      {
        type: "paragraph",
        content: "Interview preparation can begin quietly during Mains. Keep a record of your graduation subject, hobbies, home state, and any current-affairs positions you have taken in your DAF. These will likely appear in your interview. You do not need a separate coaching module to begin this groundwork.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Protect sleep and exercise. Fatigue accumulates over months and affects retention more than it affects willpower.",
          "Take one day off each week. A full rest day does not reduce preparation — it makes the remaining six days more productive.",
          "Check in with your preparation every two weeks. If a subject has not been touched, something needs to shift.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is UPSC Prelims 2027?",
        answer: "UPSC Prelims 2027 is scheduled for 23 May 2027, and Mains begins on 20 August 2027, as per the UPSC calendar released in May 2026.",
      },
      {
        question: "Is 8 months enough to prepare for UPSC 2027?",
        answer: "Yes, if you start now and follow a fixed plan: one full syllabus read by February, then revision, PYQs and weekly mock tests. Most first-attempt candidates need 10 to 12 months, so cut low-value sources and prioritise PYQs.",
      },
      {
        question: "Can I prepare for UPSC while working?",
        answer: "Yes. Study 4 to 5 hours on weekdays and 8 to 10 on weekends, use one standard source per subject, and skip extra test series until March.",
      },
      {
        question: "Can I prepare for UPSC without coaching?",
        answer: "Yes. Standard books, PYQs, a free or paid test series and structured answer-writing feedback are enough. Coaching mainly adds discipline and peer accountability.",
      },
      {
        question: "How should I start UPSC preparation from scratch?",
        answer: "Read the syllabus and 10 years of PYQs, finish NCERTs, then move to standard books subject by subject while reading a newspaper daily.",
      },
      {
        question: "How many hours should I study for UPSC daily?",
        answer: "About 8 to 10 hours for full-time aspirants and 4 to 5 for working professionals. Consistency matters more than long single-day sessions.",
      },
      {
        question: "Which is more important, Prelims or Mains?",
        answer: "Both. Prelims is a screening test, but Mains marks and the interview decide your final rank. Start answer writing before the Prelims result.",
      },
    ],
    publishedAt: "2026-09-27T00:00:00.000Z",
    createdAt: "2026-09-27T00:00:00.000Z",
    updatedAt: "2026-09-27T00:00:00.000Z",
  },

  // =====================================================================
  // ARTICLE #2: Dr. Anuj Agnihotri UPSC AIR 1
  // =====================================================================
  {
    slug: "anuj-agnihotri-upsc-air-1-preparation-strategy",
    category: "Strategy",
    title: "How Dr. Anuj Agnihotri Secured UPSC AIR 1: His Preparation Strategy, Medical Science Optional and Self-Study Journey",
    description: "Preparation lessons from AIIMS Jodhpur graduate Dr. Anuj Agnihotri's UPSC Civil Services 2025 journey — self-study, Medical Science optional, and learning from earlier attempts.",
    readTime: "11 min read",
    status: "published",
    tags: ["Adhitam AI", "UPSC", "AIR 1", "Topper Strategy", "Self-Study", "Medical Science", "Answer Writing"],
    seoTitle: "Dr. Anuj Agnihotri UPSC AIR 1: Strategy, Optional Subject & Journey",
    seoDescription: "Learn how AIIMS Jodhpur graduate Dr. Anuj Agnihotri secured UPSC AIR 1 in 2025, with insights on Medical Science optional, self-study, answer writing and preparation.",
    image: "/assets/anuj-agnihotri-journey.jpg",
    imageAlt: "Dr. Anuj Agnihotri UPSC AIR 1 preparation strategy, Medical Science optional and self-study journey",
    introduction: "Dr. Anuj Agnihotri's path to All India Rank 1 in the UPSC Civil Services Examination 2025 began in medicine. An AIIMS Jodhpur graduate from Rawatbhata, Rajasthan, he completed his MBBS and internship before turning to the Civil Services Examination.\n\nHis journey stands out for the choices he made along the way: preparing from his hometown rather than moving to Delhi, choosing Medical Science as his UPSC optional subject, and using an unsuccessful attempt to identify what he needed to improve.\n\nThis article draws on his journey as an example of one candidate's experience. It should not be read as a formula.",
    relatedTopics: ["Self-Study", "Medical Science Optional", "Answer Writing", "UPSC Attempts", "Optional Subject", "Small-Town Preparation"],
    blocks: [
      {
        type: "heading",
        level: 2,
        content: "From AIIMS Jodhpur to the UPSC Civil Services Examination",
        anchor: "from-aiims-jodhpur-to-the-upsc-civil-services-examination",
      },
      {
        type: "paragraph",
        content: "Dr. Agnihotri grew up in Rawatbhata, a small town in Rajasthan. He secured AIR 25 in the All India AIIMS Entrance examination and completed his MBBS at AIIMS Jodhpur. After finishing his internship in January 2023, he shifted his focus toward the Civil Services Examination.",
      },
      {
        type: "paragraph",
        content: "His motivation, as described in his journey, was rooted in public service rather than a professional pivot. He chose Medical Science as his optional subject — a choice informed by his medical education rather than by topper trends or coaching recommendations.",
      },
      {
        type: "paragraph",
        content: "Choosing a subject you understand deeply — because of your academic background — is a different calculation than choosing it because someone ranked well with it. Agnihotri's situation illustrates that distinction.",
      },
      {
        type: "heading",
        level: 2,
        content: "Preparing for UPSC from a small town",
        anchor: "preparing-for-upsc-from-a-small-town",
      },
      {
        type: "paragraph",
        content: "Agnihotri prepared from Rawatbhata rather than relocating to Delhi or another coaching hub. His approach combined independent study with online and recorded resources, used selectively alongside his internship schedule.",
      },
      {
        type: "paragraph",
        content: "This is not an argument against coaching or against moving to a larger city. Both decisions depend on the candidate's specific circumstances, resources, and learning style. What his experience illustrates is that preparation outside traditional coaching centres is possible when the discipline and resources are in place.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "He limited social media use and protected his study time from routine distractions.",
          "He used online resources and recorded lectures where they were useful, without making them a substitute for active study.",
          "He built a consistent routine that could work within the constraints of his internship and later his own schedule.",
          "He sought guidance selectively — using coaching or mentorship when it addressed a specific need, not as a default.",
        ],
      },
      {
        type: "quote",
        content: "Preparation from a smaller town is one approach, not the only approach. What mattered in Agnihotri's case was the discipline and structure he maintained, not the geography.",
      },
      {
        type: "adhitamPromo",
        variant: "structured",
        title: "Build a preparation routine around your own schedule.",
        description: "Bring study, revision and practice into one system.",
        cta: "Try Adhitam AI →",
      },
      {
        type: "heading",
        level: 2,
        content: "What his UPSC attempts taught him",
        anchor: "what-his-upsc-attempts-taught-him",
      },
      {
        type: "paragraph",
        content: "Agnihotri did not secure AIR 1 on his first attempt. His first attempt reached the Reserve List. His second attempt brought him to the interview stage, but his final score was lower than expected.",
      },
      {
        type: "paragraph",
        content: "Rather than simply increasing study hours, he used the gap between attempts to diagnose specific weaknesses. The areas he identified were answer-writing consistency, planning before writing, and completing papers within the allotted time. In 2025, he secured AIR 1 with 1,071 marks.",
      },
      {
        type: "paragraph",
        content: "Between his second and third attempts, he worked as a DANICS probationer. That field exposure gave him practical context that informed parts of his preparation, particularly in Governance and Ethics.",
      },
      {
        type: "quote",
        content: "The useful lesson from his attempts is not the number of tries but the method of diagnosis. Identifying what specifically went wrong — not just that performance was lower than expected — is what created an actionable path forward.",
      },
      {
        type: "heading",
        level: 2,
        content: "Study habits and resources from Agnihotri's preparation",
        anchor: "study-habits-and-resources-from-agnihotris-preparation",
      },
      {
        type: "paragraph",
        content: "The following five practices are drawn from descriptions of his preparation. They are presented as examples of approaches worth considering, not as a checklist to copy.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Use maps to build geographical context. Placing events, policies, and geographic features in their spatial setting improves both retention and analytical ability.",
          "Read beyond coaching notes. Sources like Yojana, government reports and PIB reviews, Supreme Court Observer, and IGNOU study material provide depth that notes often compress or omit.",
          "Practise answer writing continuously. Write regularly and review what you write. A well-understood concept that cannot be written clearly under time pressure is not exam-ready.",
          "Make learning memorable through association and application rather than repetition alone.",
          "Prepare for the interview with varied questions — not just those expected from your DAF, but those arising from current affairs, your state, and your optional subject.",
        ],
      },
      {
        type: "paragraph",
        content: "On resource selection: the value of a source depends on how well you understand it and can use it, not on how comprehensive it is. A candidate who reads Yojana regularly and connects it to the syllabus will often benefit more than one who skims twelve sources without depth.",
      },
      {
        type: "adhitamPromo",
        variant: "practice",
        title: "Turn practice into a repeatable part of your routine.",
        description: "Move from understanding a topic to testing it.",
        cta: "Try Adhitam AI →",
      },
      {
        type: "heading",
        level: 2,
        content: "Choosing Medical Science as an optional subject",
        anchor: "choosing-medical-science-as-an-optional-subject",
      },
      {
        type: "paragraph",
        content: "Agnihotri chose Medical Science for his Mains optional. This choice was directly connected to his MBBS background at AIIMS Jodhpur. A subject you have studied formally for five or more years is genuinely different from a subject you are approaching for the first time.",
      },
      {
        type: "quote",
        content: "His choice should not be read as a recommendation that every medical graduate should choose Medical Science. The optional decision requires careful individual consideration.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Your interest in the subject — not just familiarity, but genuine engagement with the content.",
          "The syllabus and how well it aligns with your existing knowledge.",
          "Time available to prepare the optional alongside GS papers.",
          "Availability of good study material and, if needed, guidance.",
          "Your ability to write structured, examiner-friendly answers in that subject within the word limit.",
          "Your academic background — which creates genuine depth, not just familiarity.",
        ],
      },
      {
        type: "paragraph",
        content: "A familiar academic background is one important factor in this decision, but it does not automatically make a subject the best choice. Some medical graduates perform better with subjects that overlap more directly with the GS papers. The decision should be based on your complete situation.",
      },
      {
        type: "heading",
        level: 2,
        content: "A perspective on AIR 1 and UPSC preparation",
        anchor: "a-perspective-on-air-1-and-upsc-preparation",
      },
      {
        type: "paragraph",
        content: "A top rank is not the only measure of ability or worth. The UPSC Civil Services Examination is a high-stakes, competitive process where small mark differences can shift rank positions substantially. Candidates who do not secure top ranks — or who do not qualify in a particular attempt — are not thereby less capable than those who do.",
      },
      {
        type: "paragraph",
        content: "Agnihotri's journey took more than one attempt. That trajectory — setback, diagnosis, adjustment, and eventual success — is common in this examination. Many candidates who ultimately secure a position in the civil services do not do so on their first attempt.",
      },
      {
        type: "quote",
        content: "Having a Plan B is not the same as lacking commitment to the UPSC. Candidates should make decisions based on their own circumstances, values, and available time — not based on the assumption that every aspirant's path must look the same.",
      },
      {
        type: "heading",
        level: 2,
        content: "What UPSC aspirants can learn from his journey",
        anchor: "what-upsc-aspirants-can-learn-from-his-journey",
      },
      {
        type: "paragraph",
        content: "The most important lesson from Agnihotri's preparation is not the timetable he followed or the exact resources he used. It is the underlying logic of his approach: build an individual strategy based on your circumstances, use resources selectively, diagnose specific weaknesses rather than simply adding more hours, and create a sustainable routine.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Build a preparation strategy around your own circumstances, not an assumed ideal.",
          "Use resources selectively. Depth of understanding matters more than breadth of sources.",
          "After each attempt or mock, identify what specifically needs to improve — not just that something does.",
          "Revise effectively. Coverage is not the same as retention.",
          "Practise under exam conditions. Timed writing and timed answering reveal problems that comfortable reading conceals.",
          "Create a sustainable routine. Preparation that cannot be maintained for 12 to 18 months is not a preparation strategy.",
          "Make decisions based on your personal goals, constraints, and circumstances.",
        ],
      },
      {
        type: "quote",
        content: "Copying a topper's timetable is unlikely to produce a topper's result. A timetable is a tool built for a specific person's schedule, weaknesses, and strengths. What you can borrow is the principle — consistency, targeted practice, and honest self-assessment — not the specific daily schedule.",
      },
    ],
    faqs: [
      {
        question: "Did Dr. Anuj Agnihotri prepare for UPSC from Delhi?",
        answer: "According to the supplied article, he prepared from his hometown, Rawatbhata, rather than moving to Delhi. His preparation combined self-study with online resources and guidance where useful.",
      },
      {
        question: "What was Dr. Anuj Agnihotri's UPSC optional subject?",
        answer: "He chose Medical Science for UPSC Mains, drawing on his medical education and MBBS background. His choice is presented as an example, not as a recommendation that every medical graduate should choose the same optional.",
      },
      {
        question: "Did Dr. Anuj Agnihotri use coaching?",
        answer: "The article describes a mixed approach rather than a simple coaching-versus-self-study choice. He used online and recorded learning resources where useful and later focused on independent preparation.",
      },
      {
        question: "What did Dr. Anuj Agnihotri change after his earlier attempts?",
        answer: "The article describes changes in answer-writing consistency, planning before writing, and completing papers within the allotted time. His experience is used to illustrate the value of diagnosing specific weaknesses rather than simply increasing study volume.",
      },
      {
        question: "What can UPSC aspirants learn from his preparation?",
        answer: "The article emphasizes selective resource use, consistent practice, performance review, sustainable routines and building a preparation strategy around one's own circumstances rather than copying a topper's timetable.",
      },
      {
        question: "Should every medical graduate choose Medical Science as an optional?",
        answer: "No such conclusion should be drawn from the article. It specifically notes that a familiar academic background does not automatically make a subject the best optional. Interest, syllabus, time, resources and ability to write answers should all be considered.",
      },
      {
        question: "Can UPSC preparation be done without moving to Delhi?",
        answer: "The article presents Agnihotri's preparation from Rawatbhata as one example that preparation outside Delhi can be possible with suitable resources and a consistent routine. It should not be presented as proof that location never matters for any aspirant.",
      },
      {
        question: "What role did failure or an unsuccessful attempt play in his preparation?",
        answer: "The article presents earlier results as opportunities to identify weaknesses in performance, particularly answer writing, planning and time management. The lesson is to diagnose what needs improvement rather than simply repeat the same preparation approach.",
      },
    ],
    publishedAt: "2026-09-27T00:00:00.000Z",
    createdAt: "2026-09-27T00:00:00.000Z",
    updatedAt: "2026-09-27T00:00:00.000Z",
  },
];
