# ACT Wildlife — Website Content Analysis

Source: https://www.actwildlife.org.au/ (live site, current content only — no
redesign proposed in this document). All facts below are drawn directly from
the pages listed in Section 5. Where a page's content could not be fully
retrieved, this is stated explicitly rather than assumed.

## 1. Organisation Summary

ACT Wildlife (ACT Wildlife Inc.) is a not-for-profit wildlife rescue,
rehabilitation and release organisation operating in the ACT. Its tagline is
"Rescue Rehabilitate Release."

**Vision:** "The welfare and biodiversity of wildlife in the ACT is
maintained."

**Mission** (three parts):
1. Rescue, rehabilitate and release native animals that are injured, sick, or
   orphaned.
2. Educate the public on coexisting with wildlife in urban areas.
3. Provide professional training for wildlife carers.

**History ("Our Story"):**
- Founded in 2013 by Marg Peachey and other wildlife carers who identified a
  need for a dedicated wildlife care group in the ACT.
- Incorporated as ACT Wildlife Inc. and obtained a "Licence to Take" from the
  ACT Government.
- Started with no funding; early grants came from IFAW and the Herpetological
  Association of the ACT; ongoing support from RSPCA and the ACT Government.
- November 2013: first training/orientation course held, 40 attendees, 10 of
  whom had aviaries and became the first carers; animals initially came from
  RSPCA and local vets.
- The 24/7 hotline launched around the same time. Hotline calls reportedly
  grow ~35% annually; roughly 1,500 animals come into care each year.
- 2018: two permanent facilities acquired (one via peppercorn rent from the
  ACT Government, another rented from ACT Property Group) for admin,
  training, and permanent aviaries — including one for flying-foxes that
  reportedly housed orphaned flying-foxes after the "2003 bushfires."
- The organisation states it "continues to grow in strength," now employing
  some paid staff alongside its volunteer base.

**Values:** CARE, COMMITTED, TRUSTED, KNOWLEDGE, COMPASSION, RESPECT, ENGAGE,
INNOVATIVE, IMPACT.

**Reporting:** A "2025 Annual Report" is linked from the About page; prior
reports are available by emailing administration.

**ABN:** 84 737 023 161.

## 2. Target Audience

Distinct audience segments are addressed directly by the site's own structure
and calls to action:

- **Members of the public who have found injured/sick/orphaned wildlife** —
  primary hero action is the 24/7 hotline.
- **People reporting sick/dead birds (possible bird flu)** — directed to a
  separate government hotline (1800 675 888), distinct from the rescue
  hotline.
- **Prospective members** — pay the $40 annual fee to support the org and
  become eligible to volunteer/care.
- **Prospective volunteers** (non-carer roles: phone/transport duty,
  pouch-knitting, sewing, aviary building).
- **Prospective wildlife carers** — take animals into their own home under
  licence, by species (bats, birds, possums/gliders, reptiles, wombats).
- **Donors / sponsors** — one-off donors, EOFY appeal donors, and recurring
  species sponsors.
- **Existing members/carers** — via Members Login / Wildman Login, AGM
  participation, quarterly newsletters.
- **Community groups wanting to help in other ways** — e.g. the monthly
  Sewing Group (possum pouches).

*(This segmentation is drawn directly from the site's own navigation, forms,
and CTAs, not inferred demographics.)*

## 3. Primary Goals of the Website

In apparent priority order, based on hero placement, repetition, and depth of
content sitewide:

1. Connect the public to the 24/7 rescue hotline when they find wildlife, and
   route bird-flu-specific reports to the correct government hotline.
2. Recruit and process new members, volunteers, and carers — each has its own
   page, eligibility criteria, and in most cases its own form.
3. Deliver the training pipeline that turns a new member into an active
   volunteer/carer (Orientation → species course → Training Calendar
   registration via Humanitix).
4. Raise donations: recurring "Donate" nav item, homepage CTA, a dedicated
   3-step donation flow, a separate EOFY appeal with tiered giving copy, and
   recurring species sponsorship.
5. Serve existing members/carers operationally (Members/Wildman login,
   coordinator reports, AGM info, roster/Wildman database mentions).
6. Publish public safety/education info (14 Fact Sheet PDFs, the bird-flu
   notice, the netting-safety campaign).

## 4. Full Navigation Hierarchy

```
Home (/)
Get Involved (/get-involved)
├─ Become A Member (/get-involved/become-a-member)
├─ Become A Volunteer (/become-a-volunteer)
├─ Become A Carer (/become-a-carer)
├─ Sponsor A Species (/sponsor-a-species)
└─ Sponsor A Species Members (/get-involved/sponsor-a-species/sponsor-a-species-members)
Training (/training)
├─ Orientation (/orientation)
├─ Bat Courses (/training/bat-courses)
├─ Bird Courses (/training/bird-courses)
├─ Phone and Transport (/training/phone-and-transport)
├─ Possum Courses (/training/possum-courses)
├─ Reptile Course (/training/reptile-course)
├─ Wombat Course (/training/wombat-course)
└─ Training Calendar (/training/training-calendar)
Members (/members)
├─ Members Login (/members-login)
└─ Wildman Login (/wildman-login)
About Us (/about)
├─ Fact Sheets (/fact-sheets)
└─ Contact Us (/contact-us)
Donate (/donate)
EOFY APPEAL (/eofy-appeal)
Login (separate header link; target not confirmed)
```

**Structural inconsistencies observed (facts, not design opinions):**
- "Sponsor A Species Members" is nested three levels deep
  (`/get-involved/sponsor-a-species/sponsor-a-species-members`) while its
  sibling "Sponsor A Species" lives at a flatter URL (`/sponsor-a-species`).
- "Become A Volunteer" and "Become A Carer" sit at root-level URLs
  (`/become-a-volunteer`, `/become-a-carer`) despite appearing nested under
  "Get Involved" in the menu.
- "Orientation" is filed under Training in the menu but its URL is
  root-level (`/orientation`), unlike its sibling course pages
  (`/training/...`).
- On the Training landing page, the "Possums" course link is mislabeled — it
  points to the Bird Courses URL instead of Possum Courses (a broken/wrong
  link, confirmed by direct inspection).
- "Wildman" appears as an item in the Training page's course list, even
  though it is a login/system link, not a course.

## 5. Main Pages

All pages below were retrieved and their content confirmed directly:

- Home
- About Us (`/about`)
- Get Involved (landing)
- Become a Member
- Become a Volunteer
- Become a Carer
- Sponsor a Species Members
- Training (landing)
- Orientation
- Bat Courses
- Bird Courses
- Possum Courses
- Reptile Course
- Wombat Course
- Phone and Transport
- Training Calendar
- Members (landing)
- Members Login
- Wildman Login
- Fact Sheets
- Contact Us
- Donate
- EOFY Appeal

**Partially confirmed:**
- **Sponsor a Species** (`/sponsor-a-species`) — the heading "Sponsor A
  Species" was confirmed on two separate retrieval attempts, but no body
  paragraph, species list, or pricing tier text was present in either
  attempt. The retrieved markup showed empty/placeholder content blocks where
  such content would normally sit, consistent with the section being
  rendered dynamically by client-side script rather than static markup. The
  one confirmed fact about this program comes from the **Get Involved**
  landing page, which describes it as letting supporters "make small,
  monthly donations that will go towards purchasing essential supplies for
  one of five species in our care." Full page-specific copy, the species
  list, and pricing are **not confirmed** and are not assumed here.

## 6. Key Content Per Page

**Home**
- Hero: "Rescue Rehabilitate Release," with a prompt to call the 24/7 hotline
  if you've found an animal.
- Featured post: bird flu (H5N1) safety notice, dated 3 July 2026, with
  guidance for sick/dead birds and the separate 1800 675 888 hotline.
- Featured campaign: "Wildlife Friendly Netting Swap" (protecting
  flying-foxes, possums, birds from unsafe netting).
- Cards linking to Become a Member / Volunteer / Carer / Sponsor a Species,
  each with a "Learn more" link.
- Donation prompt near the bottom.

**About Us** (`/about`)
- Vision, three-part mission, "Our Story" history (2013 founding through
  2018 facility acquisition), nine-item values list, and a link to the 2025
  Annual Report. See Section 1 for full detail.

**Get Involved (landing)**
- "How You Can Get Involved" — concise intro paragraphs and links for each of
  Become a Member, Become a Volunteer, Become a Carer, and Sponsor a Species,
  plus a closing not-for-profit/donation appeal.

**Become a Member**
- $40 annual fee, valid 1 Jan–31 Dec, payable by credit card or direct debit
  via a separate "New Membership form" on a registration portal.
- Late-joiner incentive: joining after 1 October gives the following year
  free.
- Perks: discounts on training courses and specialist wildlife food.
- Age note: volunteers must be 18+, or accompanied by an adult volunteer.

**Become a Volunteer**
- Frames volunteering broadly: phone duty, knitting possum pouches,
  assembling aviaries, providing transport — not just hands-on animal care.
- Requirements: financial member, must attend Orientation, 18+ (or
  accompanied by an adult volunteer).
- Sign-up form: Name, Email, Phone, checkboxes for training interest
  (Bats/Birds/Possums/Reptiles/Wombats/Phone and Transport), free-text
  interest field, Submit.

**Become a Carer**
- Structured around five topics: Knowledge and Training, Equipment,
  Licensing, Level of Commitment, Motivation.
- Training path: full-day orientation + first aid/infection control, then
  basic bird care (recommended first, since most incoming animals are
  birds), then optional species-specific courses.
- Licensing: ACT law prohibits keeping wildlife over 48 hours without being
  a financial member of a licensed organisation; carers must live in the
  ACT.
- Commitment: daily cleaning, feeding, housing, vet visits, releases; phone
  duty flagged as critical ("if the phone is not answered, animals are not
  rescued").
- Motivation section poses reflective questions and warns against taming
  animals (imprinting prevents release); acknowledges emotional difficulty
  (death/euthanasia).

**Sponsor a Species** — see the "Partially confirmed" note in Section 5.

**Sponsor a Species Members**
- A recognition/acknowledgment page listing sponsor names in five
  categories: Bat Sponsors (~30), Bird Sponsors (~40), Possum Sponsors
  (~28), Reptile Sponsors (~19), and Wombat Sponsors (100+, including family
  groups, a school, and at least one business). Each category has an
  accompanying image. No program description, benefits, or pricing appear on
  this page.

**Training (landing)**
- Explains species-specific training qualifies you to care for that
  species; a Certificate of Attendance is emailed on completion; training is
  transferable to other Australian wildlife rehab organisations.
- Three steps to become an active volunteer: (1) Become a Member, (2)
  Complete Orientation, (3) Watch the Volunteer Introductory video
  (external Humanitix link) — other species courses can follow in any
  order.
- Course costs: Members $35, Non-members $45, Juniors (under 18) $15;
  half-day course Members $25, Non-members $35.
- Lists and links to all course sub-pages (see Section 4 for the mislabeled
  Possums link).

**Orientation**
- Introduces new members to the organisation's background and its
  rescue/rehab/release work.
- Covers member roles/responsibilities, volunteering, home care, food
  collecting, fundraising, phone monitoring, woodwork, sewing, public
  education.
- No dates/cost/duration listed on the page itself; refers to the Training
  Calendar.
- Clarifies species courses are open to members and non-members, while only
  members 18+ covered by the licence can become carers.

**Bat Courses**
- Heading "Bat courses"; all courses are half-day format ("prices charged
  accordingly," no figure given).
- Four courses: Basic Flying-fox Training (no prerequisite), Advanced
  Flying-fox Intensive Care Training (prerequisite: basic course or current
  bat carer; requires current rabies vaccination), Advanced Flying-fox Pup
  Training (vaccinated carers), and Microbat Training. All require 18+ or
  adult supervision.

**Bird Courses**
- Three courses: Basic Bird Course (all-day; birds are "80% of all wildlife
  coming into care in the ACT region"), Baby Bird Course (2.5 hours,
  beginner/refresher), Advanced Bird Course (all-day; prerequisite: Basic
  Bird course). No cost stated for any.

**Possum Courses**
- Two parts: Basic Possums (ACT possum/glider species, focus on brushtail;
  no stated prerequisite) and Advanced Joey Possum Care (prerequisite: Basic
  Possums or equivalent, plus registered membership; 18+ or adult
  supervision).

**Reptile Course**
- Covers ID, anatomy, handling, first aid, transport, enclosure/diet setup.
  Most common patients: Blue-tongue Lizards, Shinglebacks, Bearded Dragons
  (injured by pets), Eastern Long-necked Turtles (hit by vehicles).
  Explicitly states the organisation does **not** rescue snakes or provide
  long-term care for domestic reptiles. Prerequisite: 18+ or adult
  supervisor.

**Wombat Course**
- For newcomers: wombat biology, joey care from pouched size to release,
  housing/husbandry, equipment. Targeted at those wanting to raise a joey or
  help with the mange mitigation programme. Prerequisite: 18+ or adult
  wombat carer supervision.

**Phone and Transport**
- Trains volunteers for the 24/7 hotline (shift-based) and transport duties;
  covers the Wildman database and roster documents. Cost: Free. Duration: 2
  hours. Prerequisite: must be a registered member.

**Training Calendar**
- Heading "Training Calendar" / "2026 Training Calendar." Explains
  volunteering prerequisites (financial member, 18+, Orientation, Volunteer
  Introductory video); tickets sold via Humanitix. Includes a monthly Sewing
  Group callout (first Saturday of the month). Presented as an expandable
  list by month (Feb–Dec 2026), each event showing name, date/time, a
  short description, and "Find out more" / "Register here" links.

**Members (landing)**
- "Our members are our most valuable asset." Explains members can volunteer
  flexibly, become a carer of any of the five licensed species, vote at
  AGMs, and receive quarterly email newsletters. Describes the
  committee-approval process and the Members portal (meeting minutes,
  monthly coordinator reports). Renewal is annual from 1 January, with early
  renewal available from 1 October.

**Members Login**
- "Access to this page is restricted. If you have been given a password
  please enter it below." Single password field and Login button.

**Wildman Login**
- "WildMan is our Wildlife Management System, available to carers." Single
  "Login to Wildman" link to an external system.

**Contact Us**
- "Get in touch" form: First Name, Last Name, Email, Message.
- "Animal Rescue Hotline 24/7": 0432 300 033.
- "Visit Us": Jerrabomberra Wetlands, Dairy Rd, Fyshwick ACT 2609; postal
  address PO Box 7237, Duffy 2611, ACT; office hours Mon–Fri 9am–5pm, Sat
  9am–3pm, Sun closed. Embedded Google Map.

**Donate**
- Heading: "Your donation means everything to our wildlife."
- 3-step form: amount ($20/$50/$100 presets or custom) → donor details
  (individual or organisation, contact info, optional address, anonymity
  option) → payment (credit card, optional "cover platform costs" add-on at
  preset percentages). Built on the "Funraisin" fundraising platform.

**Fact Sheets**
- Intro: "Download any of our informative Fact Sheets to help you keep our
  wildlife safe. All Fact Sheets are pdfs." 14 PDF titles listed with no
  per-item description: Bats in Houses, Feeding Wildlife, Gardens for
  Wildlife, How to become a Wildlife Carer, Lizards and Turtles, Megabats
  and Microbats, Orphaned Birds, Pest Birds – Indian Mynas, Pets and
  Wildlife, Possums in Houses, Safe Netting for Wildlife, Snakes, Swooping
  Magpies, Wildlife Diseases.

**EOFY Appeal**
- Heading: "Make a difference for wildlife at EOFY." Same $20/$50/$100
  donation mechanism as the Donate page, but with tiered appeal copy: $20 →
  "Meal worms for birds" (birds are "90% of animals that come into care"),
  $50 → "Possum and bird boxes," $100 → "Medication expenses" (citing a
  $200 antibiotic dose). Features a profile of vet "Rachael" and a
  closing thank-you section. No overall fundraising target stated.

## 7. Calls to Action

- "Donate Now" / "Donate" (repeated across Home, footer, Donate page, EOFY
  Appeal)
- "Learn more" — Become a Member / Volunteer / Carer (Home page cards)
- "Learn More" — Sponsor a Species (Home page card)
- "Complete a Membership Form" / "New Membership form" — Become a
  Member/Get Involved
- "Register for Orientation" — Get Involved
- Sign-up form + "Submit" — Become a Volunteer
- "Click here for dates" — every course page, linking to the Training
  Calendar
- "Find out more" / "Register here" (Humanitix) — every event on the
  Training Calendar
- Sewing Group registration/contact link — Training Calendar
- "Get in touch" / Submit — Contact Us form
- Call the 24/7 hotline (0432 300 033) — repeated on Home, Contact Us,
  footer, Become a Carer
- Call 1800 675 888 — bird flu / sick or dead bird reporting (Home page
  notice)
- "Login to Wildman" — Wildman Login
- Password login — Members Login
- "Follow Us" — Facebook / Instagram links (footer, sitewide)
- EOFY Appeal link (sitewide nav)

## 8. Contact Information

- **24/7 Animal Rescue Hotline:** 0432 300 033
- **Emergency Animal Disease Hotline** (sick/dead birds, bird flu): 1800 675 888
- **Physical location:** Jerrabomberra Wetlands, Dairy Rd, Fyshwick ACT 2609
  (also written "2 Dairy Road Fyshwick")
- **Postal address:** PO Box 7237, Duffy 2611, ACT
- **Office hours:** Mon–Fri 9am–5pm, Sat 9am–3pm, Sun closed
- **ABN:** 84 737 023 161
- **Email address:** none published anywhere on the retrieved pages — every
  contact path is a form, a phone number, or a login
- **Social:** Facebook (facebook.com/ACT.Wildlife), Instagram
  (instagram.com/act_wildlife)
- **Contact form:** on the Contact Us page (First Name, Last Name, Email,
  Message)
- **Prior Annual Reports:** obtainable by emailing administration (no
  address given — see About Us)

## 9. Content Repeated Across Pages

Present on effectively every page retrieved:

- Full sitewide navigation menu (all top-level items and sub-items)
- 24/7 hotline number (0432 300 033), often phrased "Call us 24/7 on 0432 300
  033"
- Footer block: address (Dairy Rd, Fyshwick ACT 2609), ABN, Facebook/
  Instagram icons, Privacy Policy link, copyright line ("© Copyright 2026"),
  and a "Funraisin" software attribution
- "EOFY APPEAL" nav link
- Login link(s) (Members Login / Wildman Login access points)

Present across specific clusters of pages:

- **Age/eligibility requirement** ("18 years or over ... or have an adult
  [volunteer/carer] supervise you") — repeated near-verbatim on Become a
  Member, Become a Volunteer, Become a Carer, Get Involved, Training
  (landing), Orientation, and every individual course page (Bat, Bird,
  Possum, Reptile, Wombat).
- **Financial-membership-required-to-volunteer/care** — repeated on Become a
  Volunteer, Become a Carer, Training (landing), Phone and Transport, and
  Members (landing).
- **"Click here for dates" → Training Calendar** — repeated on every course
  page (Bat, Bird, Possum, Reptile, Wombat, Phone and Transport,
  Orientation).
- **Payment reassurance** ("All payments are secure & encrypted") and
  "Funraisin" platform attribution — repeated on Donate and EOFY Appeal (not
  confirmed on Sponsor a Species, since that page's body content could not
  be captured).
- **$20/$50/$100 preset donation amounts** with an optional "cover platform
  costs" percentage add-on — identical mechanism on Donate and EOFY Appeal.
- **Membership fee facts** ($40/year, 1 Jan–31 Dec, free year for joining
  after 1 Oct) — stated in full on both Become a Member and the Get
  Involved landing page.
