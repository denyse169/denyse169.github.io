/* PROJECTS: Add another object to this list to create a new card.
   Keep every text value in quotes. Leave url empty until a real link exists.
   Optional image: "assets/your-image.jpg"; provide a descriptive imageAlt.
   Do not add confidential project information. */
window.portfolioProjects = [
  {
    title: "ShipRight Logistics Business Analysis Project",
    category: "Business analysis / Logistics",
    summary: "Examining shipment delays and logistics process issues to identify opportunities for better delivery performance.",
    contributions: [
      "Analyzed shipment delays and logistics process issues.",
      "Conducted stakeholder analysis.",
      "Created AS-IS and TO-BE process maps.",
      "Performed root-cause analysis using 5 Whys.",
      "Created user stories and acceptance criteria in Jira.",
      "Developed UAT test cases.",
      "Analyzed shipment data using Excel and pivot tables.",
      "Developed recommendations for improving delivery performance."
    ],
    tags: ["Excel", "Jira", "Process Mapping", "UAT"],
    url: "",
    image: "",
    imageAlt: ""
  },
  {
    title: "Enceit Digital Product / Customer Experience Project",
    category: "Digital product / Customer experience",
    summary: "Supporting digital product readiness through customer needs analysis, onboarding, and healthcare market research.",
    contributions: [
      "Supported product adoption and onboarding.",
      "Conducted healthcare workflow and market research.",
      "Analyzed customer needs.",
      "Supported expansion research and digital product readiness."
    ],
    tags: ["Customer Experience", "Research", "Digital Transformation"],
    url: "",
    image: "",
    imageAlt: ""
  },
  {
    title: "IKEA: Digital Transformation Business Case Study",
    category: "Digital transformation / Strategic foresight",
    summary: "A team-developed strategy case exploring how IKEA could prepare for digital product passports and circular services while protecting affordability. My contribution focused on baseline analysis and horizon scanning.",
    contributions: [
      "Team analysis and proposed strategy; no IKEA engagement or implementation is claimed.",
      "Individual contribution: baseline analysis and horizon scanning."
    ],
    tags: ["Digital Transformation", "Business Analysis", "Horizon Scanning", "Strategy"],
    url: "",
    image: "",
    imageAlt: "",
    // CASE STUDY: Optional sections displayed inside an expandable card.
    // Edit headings and text here; no separate page or document is needed.
    caseStudy: [
      {
        heading: "Project Overview",
        text: "The team developed a strategic business case for IKEA toward 2036, examining digital product passports, product traceability, and circular ownership. The case proposes capabilities and decision rules for uncertain futures; it does not report a delivered solution."
      },
      {
        heading: "Business Context",
        text: "IKEA's global retail and supplier network makes consistent product information a significant operational consideration. The team's baseline examined its retail scale, digital sales, supplier ecosystem, and existing repair and buyback activity, with affordability as a central constraint."
      },
      {
        heading: "Business Problem / Opportunity",
        text: "Product traceability could support compliance, repair, resale, and ownership transfer. The business question was how to prepare the necessary data foundation without assuming that growing circular activity already demonstrates a scalable, profitable business model."
      },
      {
        heading: "Digital Transformation Challenge",
        text: "A product passport requires more than a QR code: it depends on persistent product identity, reliable supplier evidence, lifecycle data, and governed access. The proposed architecture needed to accommodate regional regulatory differences and evolving standards while keeping services affordable."
      },
      {
        heading: "Approach and Frameworks Used",
        text: "The team combined baseline analysis and STEEP horizon scanning with impact–uncertainty assessment, 2×2 scenario planning, wind-tunnelling of strategic options, and Three Horizons. Four scenarios tested two uncertainties: convergence of product-data standards and adoption of circular consumption. These were strategy stress tests, not forecasts."
      },
      {
        heading: "Key Findings",
        text: "The team's analysis identified three tensions: regulation was advancing while detailed requirements remained unsettled; product-data infrastructure was emerging while standards remained provisional; and customer interest in circularity did not establish repeat adoption or profitability. Scenario testing favored shared data capabilities over early commitments to costly circular business models."
      },
      {
        heading: "Strategic Recommendations",
        text: "The team recommended tiered product identity, a global data core with regional adapters, supplier data assurance, and repairable design. It proposed public, licensed-partner, and restricted data-access tiers, followed by a limited pilot of repair and resale services. Expansion would depend on both market adoption signals and demonstrated category-level contribution margin."
      },
      {
        heading: "Expected Business Impact",
        text: "If validated and implemented, the proposed approach could support compliance readiness, more trustworthy product information, and better-informed investment decisions. Pilots and stage gates were intended to limit premature scaling and test service economics. These are anticipated benefits; no implementation outcomes, savings, or performance improvements were measured."
      },
      {
        heading: "My Contribution",
        text: "I worked on baseline analysis and horizon scanning. My scope covered the current-state context—retail scale, digital activity, suppliers, and circular initiatives—and external signals across social, technological, economic, environmental, and political/legal factors. This work helped frame the tension between data readiness, affordability, and uncertain circular adoption. Scenario design, option assessment, and strategic recommendations are presented as team outputs, not my individual deliverables."
      },
      {
        heading: "Skills Demonstrated",
        text: "My contribution demonstrates current-state business analysis, research synthesis, STEEP horizon scanning, and interpretation of business risks and opportunities. The wider team case demonstrates scenario planning, digital transformation strategy, data-governance considerations, and evidence-based investment prioritization."
      }
    ]
  }
];
