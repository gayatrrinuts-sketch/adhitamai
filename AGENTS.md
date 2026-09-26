<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agents
Adhitam AI — Website Agent Instructions

0. Mission

Build the Adhitam AI website as a polished, editorial, premium one-page presence site for an existing mobile UPSC preparation app.

The website is not the mobile application itself. It is the public-facing brand, product-explanation, and SEO layer for Adhitam AI.

The goal is to make the site feel intentional, credible, human-designed, and visually distinctive — never like a generic AI/EdTech landing-page template.

The supplied design.md is the primary visual and interaction specification. Follow it closely. Do not invent a different design language.

1. Product Reality — Non-Negotiable

Adhitam AI is currently a new product and the website must accurately represent the current launch state.

Current product language

The current app experience is English-only.

Do not present multilingual support as a current feature.

Future regional-language expansion may exist as a long-term direction, but it must not be represented as currently available.

Never fabricate traction

Do not invent, imply, or display:

user counts

active aspirant counts

study-hour counts

app ratings

review counts

testimonials

customer logos

download counts

success rates

exam-selection rates

percentage improvements

rankings

awards

press mentions

“trusted by thousands” style claims

“loved by aspirants” style claims

fake social proof of any kind

Use product capabilities, UI screenshots/mockups, explanations, and the product philosophy as evidence instead.

Never fabricate functionality

Only describe features that are actually part of the approved product/content brief. Do not create imaginary AI features simply because they are common in competitor products.

Do not imply that Adhitam:

guarantees UPSC success

predicts ranks

guarantees marks

replaces teachers or coaching

provides features that are not actually available

Copy must describe what the product does, not what would make the landing page sound more impressive.

2. Brand Premise

Adhitam AI should feel like:

a serious mentor trusted before a high-stakes exam

a premium tool for people who value depth over shortcuts

Indian-rooted without kitsch

disciplined, thoughtful, mature, and quietly confident

more like a serious study companion than a generic SaaS dashboard

The design language must avoid Western-startup blandness while also avoiding stereotypical “Indian education” decoration.

Core emotional qualities

depth

discipline

clarity

purpose

credibility

restraint

intellectual seriousness

The site should communicate that Adhitam is about preparation with structure and understanding, not hype.

3. Anti-AI-Slop Rules

These rules have higher priority than convenience or template defaults.

Never use

generic purple/blue AI gradients

neon glows

cyberpunk aesthetics

glassmorphism everywhere

excessive floating cards

generic dashboard KPI tiles

huge rounded “AI” blobs

stock-photo startup imagery

generic laptop mockups with fake graphs

excessive 3D objects with no purpose

random decorative icons

meaningless gradient text

excessive pills

“AI-powered” repeated in every section

fake chatbots that exist only as decoration

arbitrary stars, sparkles, particles, or rays

huge quote walls

fake testimonials

fake metrics

fake logos

buzzword-heavy copy

overuse of “revolutionize”, “transform”, “supercharge”, “unleash”, “next-generation”, etc.

Do use

strong typography

deliberate spacing

editorial hierarchy

restrained motion

carefully chosen imagery

app mockups that show believable product UI

warm, tactile surfaces

subtle borders and hairlines

quiet visual depth

intentional asymmetry where useful

real hierarchy rather than decoration

Design principle

Every visual element must have a reason to exist.

If removing an element makes the page clearer without losing meaning, remove it.

Do not add visual effects merely because an animation library makes them easy to implement.

4. Color System

Use the exact token system defined in design.md.

--ink: #1E1B16;
--ink-dark: #121016;
--ink-light: #332C24;
--brass: #C9A227;
--brass-dark: #A9821E;
--brass-muted: #D8BE6E;
--bg: #F5F1E8;
--surface: #FBF8F2;
--surface-alt: #EFE9DA;
--border: #E4DCC8;
--hairline: #DCD2B8;
--text: #211D17;
--text-secondary: #5C5548;
--text-muted: #8C8371;
--text-inverse: #FAF7F2;
--success: #5F7A5A;

Color rules

No generic purple or blue gradients.

No pure #000000 or #ffffff.

Do not turn the entire site brass/orange.

Brass is an accent, not the dominant page color.

Use brass for CTAs, active states, selected controls, emphasis, and moments that require attention.

Dark sections use --ink-dark with restrained atmospheric brass depth.

The overall palette should feel like ink, paper, brass, and warm architectural light.

5. Typography

Follow the typography specification in design.md.

--font-display: 'IBM Plex Sans', -apple-system, sans-serif;
--font-body: 'Inter', -apple-system, sans-serif;

Scale

Hero H1: clamp(42px, 5.4vw, 68px), weight 700

Section H2: clamp(32px, 3.6vw, 46px), weight 700

H3: clamp(26px, 3vw, 34px), weight 700

H4: 22px, weight 700

Body: 17px, line-height 1.6

Large body: 19px

Eyebrow: 13px, weight 700, uppercase, letter-spacing 0.14em

Captions/meta: 13–14px

Typography rules

Do not use weak 400-weight headings.

Do not use generic Arial/Helvetica as the visible brand typeface.

Do not justify text.

Use text-wrap: pretty for headings and long text.

Preserve the contrast between display typography and functional UI typography.

Keep line lengths controlled; do not allow hero/body copy to become giant text walls.

6. Spacing & Layout

Base spacing unit: 4px.

Preferred scale:

xs: 8px

sm: 16px

md: 24–28px

lg: 48–56px

xl: 96–108px

2xl: 160px for large cinematic/parallax panels

Default section rhythm:

padding: 108px 0;

The page should breathe. Avoid cramped layouts and avoid artificially stretching sections with empty space.

Use a strong, consistent container and grid. Maintain alignment from section to section so the long page feels like one coherent publication rather than a stack of templates.

7. Button & Card Language

Primary button

background: var(--ink);
color: var(--text-inverse);
border-radius: 999px;
padding: 15px 28px;
font-weight: 700;
font-size: 15.5px;

Use the prescribed smooth hover transform/shadow behavior.

Ghost button

background: transparent;
border: 1px solid var(--hairline);
color: var(--ink);
border-radius: 999px;

Rules

Buttons are pill-shaped or intentionally unrounded; never use arbitrary 8px button radii.

Cards use 16px radius by default.

Dark mission/story/demo containers may use the larger 28px radius specified by the design system.

Avoid using cards for every piece of content.

Do not create repeated identical cards just to fill a grid.

8. Navigation

Use the navigation model defined in design.md:

sticky navigation

76px height

warm translucent background on light areas

subtle backdrop blur

hairline/border on scroll

restrained shadow on scroll

Adhitam AI brand mark at the left

primary links:

Home

Features

For Aspirants

Approach

FAQ

primary CTA: Download App

Navigation should feel like a premium editorial site, not a SaaS admin header.

9. Single-Page Information Architecture

This is a single long-form landing page.

Do not create a separate dashboard, account interface, settings interface, or fake in-browser application experience as part of this website.

The website's role is to explain and present the mobile app.

Required page order

1. Hero — Dark Architectural Opening

Use the target design direction:

dark architecture / Indian heritage atmosphere

Adhitam AI brand mark

navigation

eyebrow: DISCIPLINE · DEPTH · DIRECTION

headline:
A deeper way to prepare for a higher purpose.

product explanation:
Adhitam AI is a personalised learning system for UPSC aspirants...

CTA: Download App

secondary CTA: Learn More

premium mobile phone mockup showing the real/current app visual language

optional philosophical quote from the approved design direction, but never present it as a user testimonial

Do not add fake metrics beneath the hero.

2. Built for Different Journeys

Headline direction:
Built for different journeys, with one purpose.

Persona areas:

College Students

Working Professionals

First-time Aspirants

Self Learners

These are positioning categories, not customer-count claims.

3. Personal UPSC Mentor / Study Plan

Headline direction:
A study plan that understands you.

Present:

personalised study planning

progress-aware structure

right content at the right time

believable phone mockups

Use actual product concepts rather than fictional analytics.

4. Complete UPSC Coverage

Headline direction:
From basics to advanced.

Use the approved subject set:

Polity

Modern History

Ancient History

Geography

Economy

Environment

Science & Tech

Ethics

Avoid making the section look like a generic LMS subject picker.

5. Adaptive Learning

Headline direction:
Focus on what matters, always.

Approved concepts:

Smart Sequencing

Adaptive Practice

Meaningful Insights

Explain these clearly and concretely. Do not invent performance claims or numerical outcomes.

6. AI Mentor

Headline direction:
Your doubt-solving companion.

Show a believable interaction example such as:
Explain the concept of Basic Structure Doctrine.

Supporting ideas:

context-aware answers

simple and structured explanations

examples/diagrams where relevant

UPSC-syllabus alignment

The chat should look like a real product interaction, not an “AI chatbot” stereotype.

7. Practice & Tests

Headline direction:
Learn, practice and improve.

Approved feature areas:

Topic-wise Practice

Previous Year Questions

Full-length Mocks

Detailed Analysis

Show a realistic test interface in the phone mockup.

8. Current Affairs

Headline direction:
Current affairs made simple.

Approved concepts:

Daily Updates

Exam-focused Analysis

Static Linkages

Do not imply volume, freshness guarantees, or editorial partnerships unless actually provided.

9. Adhitam Approach / Philosophy

Headline direction:
More than a preparation app.

This section communicates the philosophy behind the product.

Keep it thoughtful and specific. Avoid generic motivational copy.

10. Final Download CTA

Headline direction:
Start your journey today.

Use actual app-store availability only.

Do not show fabricated ratings or download counts.

11. Footer

Include:

Adhitam AI logo/mark

concise brand line

navigation

social links only when actual links exist

Privacy

Terms

Contact

Do not invent social profiles or legal URLs.

10. Imagery Direction

The approved visual direction uses:

Indian architectural heritage imagery

warm evening light

books / study objects where meaningful

premium mobile-device mockups

restrained atmospheric texture

Images should support the story rather than become decoration.

Avoid

random famous monuments unrelated to the section

generic classroom stock photography

smiling stock students

generic AI robot imagery

laptop-on-desk stock images

obvious “education startup” stock visuals

The architecture should feel Indian, sophisticated, and cinematic without turning the site into a tourism page.

11. App Mockups

App mockups are one of the primary forms of proof because the website has no public traction yet.

Mockups should show coherent product UI and consistent branding.

Use phone screens to demonstrate:

study plan

subjects

progress

test practice

AI mentor interaction

current-affairs content

Do not create contradictory UI, random metrics, fake reviews, or features that are not approved.

Do not let the phone mockups dominate every section. Alternate them with typographic and content-led sections.

12. Motion

Motion should improve comprehension and hierarchy, not advertise that a library is being used.

Approved motion language from design.md:

smooth scroll

scroll reveal

restrained parallax

subtle phone mockup movement

controlled hover lift

staggered grid reveals

Core easing:

cubic-bezier(0.16, 1, 0.3, 1)

Motion rules

use opacity + transform together for reveals

minimum ~0.5s for major entrance motion

never use transition: all

never make elements pop into place instantly

respect prefers-reduced-motion

do not animate every card independently with exaggerated movement

do not make the page feel like a game

The final impression should be calm, premium, and deliberate.

13. Responsive Design

The desktop design is not a permission to shrink the page into mobile.

On small screens:

preserve hierarchy

simplify layouts deliberately

stack story sections cleanly

keep important text readable

keep CTA placement obvious

crop/reposition architectural imagery carefully

keep phone mockups large enough to understand but small enough to prevent excessive scrolling

avoid horizontal overflow

The mobile site should feel intentionally designed, not merely compressed.

14. SEO & Content Requirements

This website exists partly as the public SEO layer for Adhitam AI.

The implementation should therefore use:

one clear H1

meaningful H2/H3 structure

crawlable text content

descriptive page metadata

descriptive image alt text

semantic sectioning elements

appropriate Open Graph metadata

canonical metadata where appropriate

FAQ markup only when real FAQ content is present

clean internal navigation anchors

Do not stuff keywords.

Write for humans first, search engines second.

Target the actual product context around:

Adhitam AI

UPSC preparation

personalised UPSC preparation

UPSC study planning

UPSC practice and PYQs

AI mentor for UPSC preparation

current affairs for UPSC

Do not repeat the same keyword unnaturally in every heading.

15. Accessibility & Quality

Maintain:

sufficient contrast

semantic HTML

keyboard accessibility

visible focus states

alt text for meaningful images

decorative images marked appropriately

readable font sizes

reduced-motion support

buttons that communicate actions clearly

Do not trade accessibility for visual effects.

16. Content Voice

The writing should sound:

intelligent

calm

precise

mature

confident without arrogance

aspirational without hype

Avoid startup clichés.

Prefer:

“A study plan that understands you.”

over:

“The revolutionary AI-powered preparation engine that transforms your UPSC journey.”

Prefer describing a capability concretely over making a grand promise.

17. Implementation Discipline

Before adding any component, ask:

What job does this component do?

Is it present in the approved design direction?

Does it communicate something real about Adhitam AI?

Does it improve hierarchy or comprehension?

Would the page be better without it?

Do not add components just because they are available in a component library.

Do not introduce a new visual language halfway through the page.

Do not replace intentional editorial layouts with generic cards because they are easier to code.

18. Source of Truth Hierarchy

When making implementation decisions, use this order:

Approved Adhitam AI visual direction / reference design

This AGENTS.md

design.md component/token specifications

Existing project conventions

Generic framework defaults

Never allow generic framework defaults to override the approved brand system.

Where the visual reference and a low-level implementation detail conflict, preserve the intended visual outcome while still staying within the documented design tokens and brand principles.

19. Final Anti-Slop Checklist

Before considering the page complete, verify:

The site feels like Adhitam AI, not a generic AI startup.

The page is one coherent long-form landing page.

The current product is represented honestly.

The app is described as English-only at launch.

No fake metrics exist.

No fake testimonials exist.

No fake ratings exist.

No fake social proof exists.

No unsupported multilingual claim exists.

No fabricated features exist.

No purple/blue AI-gradient aesthetic exists.

No neon/glassmorphism/cyberpunk treatment exists.

Brass remains restrained and purposeful.

Typography follows the documented system.

Sections have meaningful hierarchy and breathing room.

App mockups look coherent and believable.

Motion is subtle and purposeful.

Mobile layout is intentionally designed.

SEO structure is semantic and readable.

No component exists purely because a library made it easy.

The target is not “more effects.” The target is a website that feels designed, credible, premium, and unmistakably Adhitam AI.
