/* =====================================================================
   CONTENT.JS  —  SATU-SATUNYA FILE YANG PERLU DIEDIT UNTUK MENGUBAH ISI WEB
   =====================================================================
   Aturan singkat:
   1. Teks selalu di antara tanda kutip "..." dan tiap baris diakhiri koma.
   2. Jangan menghapus tanda kurung { } [ ] atau koma penutup.
   3. Gambar: taruh file di folder images/..., lalu tulis alamatnya di sini.
   4. Bagian yang masih perlu diisi ditandai dengan kata  ISI:
   Panduan lengkap ada di PANDUAN.md
   ===================================================================== */

window.SITE = {

  /* ---------- IDENTITAS ---------- */
  profile: {
    name: "Cindrika Dwi Pramudita",
    shortName: "Cindrika Pramudita",
    initials: "CDP",
    role: "Civil Structural Engineer",
    tagline: "Industrial Steel & Concrete Structures  /  Seismic Evaluation & Strengthening  /  Foundations",
    location: "Surabaya, Indonesia",
    photo: "images/profile.jpg",            // ISI: ganti dengan foto sendiri (rasio 4:5, min. 800 x 1000 px)
    heroImage: "images/projects/highrise-malang/01-3d-frame.jpg",
    email: "cindycindrika@gmail.com",
    phone: "",                              // ISI (opsional): kosongkan bila tidak ingin nomor tampil di internet
    linkedin: "https://linkedin.com/in/cindrika",
    github: "",                             // ISI (opsional)
    instagram: "",                          // ISI (opsional)
    cvFile: "",                             // ISI: mis. "files/CV_Cindrika_Dwi_Pramudita.pdf" setelah PDF ditaruh di folder files/
    supportingDocs: "https://drive.google.com/drive/folders/1p4bm-Hf4gqD3ieiyAsyF3UH4AA-3F-gf?usp=drive_link",

    intro: "I design and check steel and reinforced concrete structures for industrial clients at PT Citra Karsa Dinamika, an EPCC contractor in Cikarang. My work runs from the ETABS model to the calculation report: buildings, pipe and cable bridges, tanks, equipment structures, and their foundations.",

    about: [
      "I am a Cum Laude graduate of Applied Civil Engineering at Institut Teknologi Sepuluh Nopember (ITS) Surabaya, specializing in structural engineering. Since September 2026 I have worked as a Civil Structural Design Engineer at PT Citra Karsa Dinamika (CKD), where I design structures for active tenders and purchase orders, from modelling to reporting, for review by the engineering lead and the owner.",
      "My bachelor's thesis evaluated a five-story hospital building in Salatiga for a vertical expansion and designed its strengthening with inverted-V steel bracing and Carbon Fiber Reinforced Polymer (CFRP). Before that I interned at PT Wijaya Karya on a jetty project and at PT Studio Mineral Batubara on a mine disposal stability study.",
      "Outside structural design I have a research background in water resources and IoT devices, a Scopus-indexed publication, and one semester at the University of Missouri-Kansas City as an IISMA exchange awardee."
    ],

    // Angka ringkas di halaman depan
    stats: [
      { value: "10",   label: "structures delivered for 6 clients in the first 2 months at CKD" },
      { value: "14",   label: "engineering projects documented on this site" },
      { value: "3.63", label: "GPA, Cum Laude, top 5% of the department" },
      { value: "6",    label: "research projects, incl. 1 Scopus-indexed paper" }
    ],

    // id project yang ditampilkan di halaman depan (urut)
    featured: ["safran-batik", "hospital-strengthening", "highrise-malang", "lng-jetty", "arch-bridge", "wtp-sei-mangkei"]
  },

  /* ---------- PROJECT ----------
     Untuk MENAMBAH project: salin satu blok { ... }, tempel di atas blok pertama,
     lalu ganti isinya.  "id" harus unik, huruf kecil, tanpa spasi.
     category: "Professional" | "Internship" | "Thesis" | "Academic"
     images : daftar gambar. Gambar pertama (atau "cover") dipakai sebagai sampul.
  -------------------------------- */
  projects: [

    {
      id: "safran-batik",
      title: "Batik Project: Building 2 Strengthening, Hazardous Building and Utility Cable Bridge",
      category: "Professional",
      client: "Safran Electronics & Defense",
      location: "Purwakarta, Indonesia",
      period: "Sep 2026 – Present",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "Four steel structures for an IDR 131 billion design-and-build project: strengthening of an existing two-level warehouse for upgraded loads, a new hazardous-material building, a two-tier utility cable bridge, and a connecting roof canopy.",
      facts: [
        ["Contract", "IDR 131 billion, design and build"],
        ["Building 2", "~3,500 m², two-level steel warehouse"],
        ["Hazardous Building", "10 × 10 m, 4.4 m ridge"],
        ["Cable bridge", "3 spans: 12.0, 6.5, 6.2 m; 6.25 m high"],
        ["Cable load", "300 kg/m per tier"]
      ],
      highlights: [
        "Limited the Building 2 retrofit to 24 of 343 members (7%) by cover-plating the columns.",
        "Resolved the purlin strengthening with fly bracing that shortened the unbraced length, lowering the interaction ratio by 32% and the deflection by 76% (24.8 to 5.8 mm) while keeping the lighter 2.5 mm purlin.",
        "Kept total steel tonnage within the project budget by sizing members to their capacity ratios instead of upsizing across the board.",
        "Developed full design packages (ETABS, IDEA StatiCa, spColumn, calculation report) for 3 primary structures, checking member capacity to AISC 360 and deflections to SNI and AISC Design Guide 3.",
        "Caught a unit error in the consultant's CPT bearing capacity formula, raising the allowable bearing by 227% (48 to 157 kPa) and preventing oversized foundations."
      ],
      tools: ["ETABS", "IDEA StatiCa", "spColumn", "AISC 360", "AISC Design Guide 3"],
      images: [
        // ISI: contoh menambah gambar ->  { src: "images/projects/safran-batik/01-etabs-model.jpg", caption: "ETABS model of Building 2" },
      ]
    },

    {
      id: "wtp-sei-mangkei",
      title: "Underground Water Treatment Plant Tank",
      category: "Professional",
      client: "PT Unilever Oleochemical Indonesia",
      location: "Sei Mangkei, North Sumatra",
      period: "2026",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "A reinforced concrete water treatment tank, partly below ground, supported on bored piles with lateral soil springs.",
      facts: [
        ["Plan", "20.7 × 3.0 m"],
        ["Capacity", "180 m³ in 4 compartments"],
        ["Levels", "-3.15 m to +4.20 m"],
        ["Foundation", "Bored piles"]
      ],
      highlights: [
        "Calculated hydrodynamic water loads to ACI 350.3, including water mass modelling, combined with soil pressure.",
        "Assessed bored pile capacity from N-SPT and CPT data and compared alternative pile diameters and lengths.",
        "Designed the retaining walls, tank reinforcement, and pile caps, including the total service weight."
      ],
      tools: ["ETABS", "ACI 350.3", "N-SPT / CPT"],
      images: []
    },

    {
      id: "goodyear-boiler-house",
      title: "New Boiler House",
      category: "Professional",
      client: "PT Goodyear Indonesia",
      location: "Bogor, Indonesia",
      period: "2026",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "A new boiler house for a Thermax CPF 240 boiler with an electrostatic precipitator and stack, built against an existing building and sharing six of its columns.",
      facts: [
        ["Boiler", "Thermax CPF 240, 24 TPH, 25 kg/cm²"],
        ["Boiler structure", "up to +13.0 m"],
        ["ESP", "up to +19.4 m"],
        ["Stack", "25 m"],
        ["Shared columns", "6 × WF 400, ~12 m, built 2007"]
      ],
      highlights: [
        "Built one integrated ETABS model of the existing and new structures so the 6 shared columns could be checked under their double duty.",
        "Applied the boiler and ESP equipment loads and ran the structural analysis that supports the design."
      ],
      tools: ["ETABS"],
      images: []
    },

    {
      id: "kdf-building-47",
      title: "KDF Building 47 Machine Room Structure",
      category: "Professional",
      client: "PT BAT Indonesia",
      location: "Malang, Indonesia",
      period: "2026",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "Renovation of a steel machine room, with two roof framing alternatives compared before selection.",
      facts: [
        ["Plan", "14.9 × 14.6 m"],
        ["Clear span", "14.1 m"],
        ["Ridge", "+7.3 m"],
        ["Columns", "WF 300"]
      ],
      highlights: [
        "Evaluated two roof framing alternatives: a CNP Cremona truss and WF honeycomb beams.",
        "Compared steel weight and member ratios; the selected option was 15% lighter in roof steel."
      ],
      tools: ["ETABS"],
      images: []
    },

    {
      id: "beiersdorf-cargo-lift",
      title: "Cargo Lift Platform and Lift Pit",
      category: "Professional",
      client: "PT Beiersdorf Indonesia",
      location: "Malang, Indonesia",
      period: "2026",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "A three-level steel access platform for a cargo lift and its reinforced concrete pit, for a skin-care plant.",
      facts: [
        ["Platform", "3 levels at +4.0, +8.0, +14.0 m; 1.4 m wide"],
        ["Live load", "1 t/m²"],
        ["Deck", "4.5 mm checkered plate"],
        ["Lift pit", "K-300 concrete, 2.6 × 2.0 × 0.7 m"]
      ],
      highlights: [
        "Developed the ETABS model and analysis for the platform, including roof and uplift wind loads.",
        "Designed the lift pit retaining walls for soil pressure and stability."
      ],
      tools: ["ETABS"],
      images: []
    },

    {
      id: "bonecom-warehouse",
      title: "Warehouse Expansion with Overhead Cranes",
      category: "Professional",
      client: "PT Bonecom Tricom",
      location: "Cikarang Barat, Bekasi",
      period: "2026",
      role: "Civil Structural Design Engineer, PT Citra Karsa Dinamika",
      summary: "A steel factory extension with a canopy, served by two overhead cranes, next to an existing 8,082 m² factory.",
      facts: [
        ["New building", "5,035 m² (3,600 m² factory + 1,334 m² canopy)"],
        ["Height", "17.25 m"],
        ["Cranes", "40 t + 20 t, 19 m span"]
      ],
      highlights: [
        "Built the ETABS model for the expansion with vertical, lateral, and longitudinal crane loads.",
        "Authored the crane runway beam design chapter of the structural report."
      ],
      tools: ["ETABS"],
      images: []
    },

    {
      id: "hospital-strengthening",
      title: "Evaluation and Strengthening Design of a Hospital Building for Added Floors",
      category: "Thesis",
      client: "Bachelor's Thesis, ITS",
      location: "Salatiga, Central Java",
      period: "Feb 2026 – Jul 2026",
      role: "Author",
      summary: "Checked whether an existing five-story reinforced concrete hospital could take one or two more floors, showed that it could not, and designed a strengthening scheme with inverted-V steel bracing and CFRP.",
      facts: [
        ["Building", "5-story reinforced concrete hospital"],
        ["Expansion studied", "+1 and +2 floors"],
        ["Strengthening", "Inverted-V CHS steel bracing and CFRP"],
        ["Period", "1.342 s to 0.80 s (-40%)"]
      ],
      highlights: [
        "Showed the vertical expansion is not viable: story drift exceeds the SNI 1726:2019 limit by up to 41%, and P-Delta fails with two added floors.",
        "Found 65 K1 columns on Floors 1 to 3 failing in axial-flexure under seismic combinations even in the existing condition, with Floor 3 drift 16% over the limit.",
        "Designed concentric inverted-V bracing in CHS sections that cut the period by 40% and Floor 3 drift by 65%, bringing all 65 columns back to safe, with CFRP wraps for beam and column capacity.",
        "Produced the deliverables of an EPC package: structural drawings, work method statement, bill of quantities, unit price analysis, budget, and schedule."
      ],
      tools: ["ETABS", "SNI 1726:2019"],
      images: []
    },

    {
      id: "office-gresik",
      title: "4-Story Reinforced Concrete and Steel Office Building",
      category: "Academic",
      client: "Concrete and Steel Building Design, ITS",
      location: "Gresik, East Java",
      period: "Sep 2025 – Nov 2025",
      role: "Individual project",
      summary: "A four-story office building with reinforced concrete special moment frames on floors 1 to 3 and a steel-framed top story and roof, designed from loading to foundations and drawings.",
      facts: [
        ["Plan", "19.5 × 19.5 m"],
        ["Height", "19.8 m"],
        ["System", "RC special moment frame + steel top story"],
        ["Site class", "SD, seismic design category D"],
        ["Foundation", "30 × 30 cm driven piles, 1,422 kN allowable each"]
      ],
      highlights: [
        "Modelled the building in ETABS with response spectrum analysis to SNI 1726:2019.",
        "Detailed slabs, beams, and columns to SNI 2847:2019.",
        "Modelled the steel connections in IDEA StatiCa.",
        "Sized the driven pile groups from N-SPT data and delivered a 20-sheet drawing set."
      ],
      tools: ["ETABS", "IDEA StatiCa", "AutoCAD", "SNI 1726:2019", "SNI 2847:2019", "SNI 1729:2020"],
      images: [
        { src: "images/projects/office-gresik/01-section.jpg", caption: "Building section" },
        { src: "images/projects/office-gresik/02-floor-plan.jpg", caption: "Floor plan" },
        { src: "images/projects/office-gresik/03-connection-details.jpg", caption: "Connection and reinforcement details" },
        { src: "images/projects/office-gresik/04-roof-frame.jpg", caption: "Steel roof frame and details" }
      ]
    },

    {
      id: "highrise-malang",
      title: "20-Story Steel Apartment Building with Concentrically Braced Frames",
      category: "Academic",
      client: "High-Rise Building Engineering, ITS",
      location: "Malang, East Java",
      period: "Feb 2025 – Jun 2025",
      role: "Individual project",
      summary: "A 20-story steel apartment building on soft soil, braced with concentrically braced frames in a two-story configuration.",
      facts: [
        ["Height", "84 m, 20 stories"],
        ["Plan", "128 × 24 m"],
        ["Site class", "E (soft soil)"],
        ["Lateral system", "Concentrically braced frame, two-story bracing"],
        ["Columns", "WF 500×300 assigned, WF 1200×400 final"]
      ],
      highlights: [
        "Modelled the building in ETABS under gravity, wind, and seismic loads to SNI 1726:2019 and SNI 1727:2020.",
        "Iterated the column section from the assigned WF 500×300 up to WF 1200×400 until the steel check, structural period, and story drift limits were met.",
        "Designed the bolted and welded bracing connections and delivered a 13-sheet drawing set."
      ],
      tools: ["ETABS", "AutoCAD", "SNI 1726:2019", "SNI 1727:2020"],
      images: [
        { src: "images/projects/highrise-malang/01-3d-frame.jpg", caption: "3D structural frame" },
        { src: "images/projects/highrise-malang/02-elevation.jpg", caption: "Braced frame elevation" },
        { src: "images/projects/highrise-malang/03-bracing-connection.jpg", caption: "Bracing connection detail" }
      ]
    },

    {
      id: "lng-jetty",
      title: "LNG Carrier Jetty for a 20,000 DWT Vessel",
      category: "Academic",
      client: "Port and Wharf Engineering, ITS",
      location: "East Java",
      period: "Feb 2025 – Jun 2025",
      role: "Individual project",
      summary: "A jetty for a 20,000 DWT LNG carrier: loading platform, trestle, mooring and breasting dolphins, fenders, and bollards.",
      facts: [
        ["Design vessel", "20,000 DWT LNG carrier, 164 m LOA, 9.2 m draft"],
        ["Loading platform", "51 × 38 m"],
        ["Trestle", "74 × 7 m"],
        ["Piles", "Ø800 mm, driven to 45 m"],
        ["Fender", "SPC1100 cone, 80 t·m"]
      ],
      highlights: [
        "Modelled the structures in SAP2000 under berthing, mooring, current, wave, and seismic loads.",
        "Selected an SPC1100 cone fender with 80 t·m of capacity against 79 t·m of berthing energy, and 8 bollards.",
        "Reinforced the slabs, beams, and pile caps and delivered a 24-sheet drawing set."
      ],
      tools: ["SAP2000", "AutoCAD"],
      images: [
        { src: "images/projects/lng-jetty/01-layout.jpg", caption: "Jetty layout with dolphins and trestle" },
        { src: "images/projects/lng-jetty/02-platform-section.jpg", caption: "Loading platform section" },
        { src: "images/projects/lng-jetty/03-mooring-dolphin.jpg", caption: "Dolphin with fender and bollard" },
        { src: "images/projects/lng-jetty/04-pile-cap-detail.jpg", caption: "Pile cap detail" }
      ]
    },

    {
      id: "arch-bridge",
      title: "100 m Steel Arch Road Bridge",
      category: "Academic",
      client: "Long-Span Bridge Engineering, ITS",
      location: "Prabumulih, South Sumatra",
      period: "Feb 2025 – Jun 2025",
      role: "Team of 5",
      summary: "A 100 m span steel box arch road bridge with hanger rods, optimized over four member-sizing trials.",
      facts: [
        ["Span", "100 m"],
        ["Width", "10 m"],
        ["Arch rise", "20 m"],
        ["Steel weight", "5,632 kN to 3,984 kN (-29%)"],
        ["Deflection", "6.0 cm against a 12.5 cm (L/800) limit"]
      ],
      highlights: [
        "Modelled the bridge in SAP2000 with traffic, wind, temperature, and seismic loads to SNI 1725:2016 and SNI 2833:2016.",
        "Ran 4 member-sizing trials that cut structural steel weight by 29% while holding the maximum stress ratio at 0.86.",
        "Proposed a balanced cantilever erection method."
      ],
      tools: ["SAP2000", "SketchUp", "SNI 1725:2016", "SNI 2833:2016"],
      images: [
        { src: "images/projects/arch-bridge/01-sap2000-model.jpg", caption: "SAP2000 model" },
        { src: "images/projects/arch-bridge/02-extruded-model.jpg", caption: "Extruded member view" },
        { src: "images/projects/arch-bridge/03-elevation.jpg", caption: "Elevation" },
        { src: "images/projects/arch-bridge/04-3d-view.jpg", caption: "3D view" }
      ]
    },

    {
      id: "cfrp-office",
      title: "Evaluation and CFRP Strengthening of a 3-Story Office Building for Change of Use",
      category: "Academic",
      client: "Evaluation and Rehabilitation of Civil Structures, ITS",
      location: "Surabaya, East Java",
      period: "Feb 2025 – Jun 2025",
      role: "Individual project",
      summary: "An existing reinforced concrete office building evaluated for a change of use that adds archive and server rooms, a chiller and cooling tower, and a rooftop water tank, then strengthened where capacity fell short.",
      facts: [
        ["Building", "3-story RC office, 32 × 9 m, 12 m high"],
        ["New loads", "Archive and server rooms, chiller, cooling tower, roof tank"],
        ["Flexure", "Sika CarboDur CFRP plates, composite H 200×200 steel"],
        ["Shear", "SikaWrap"],
        ["Cost estimate", "IDR 410 million"]
      ],
      highlights: [
        "Modelled the existing and change-of-use conditions in ETABS and compared slab, beam, and column capacity against the new demand.",
        "Designed flexural strengthening with CFRP plates and composite steel sections, and shear strengthening with CFRP wraps.",
        "Wrote the work method and the cost estimate."
      ],
      tools: ["ETABS", "AutoCAD", "SNI 2847:2019"],
      images: [
        { src: "images/projects/cfrp-office/01-elevation.jpg", caption: "Building elevation" },
        { src: "images/projects/cfrp-office/02-floor-plan.jpg", caption: "Floor plan" },
        { src: "images/projects/cfrp-office/03-strengthening-plan.jpg", caption: "Strengthening layout" },
        { src: "images/projects/cfrp-office/04-cfrp-detail.jpg", caption: "CFRP strengthening details" }
      ]
    },

    {
      id: "wika-gospier-jetty",
      title: "Gospier Jetty Port Project",
      category: "Internship",
      client: "PT Wijaya Karya (WIKA), EPCC Division",
      location: "Surabaya, Indonesia",
      period: "Jan 2025 – Feb 2025",
      role: "Civil Structure Engineer Intern",
      summary: "An IDR 577 billion port project with five structures: trestle, catwalk, mooring dolphin, breasting dolphin, and shelter.",
      facts: [
        ["Project value", "IDR 577 billion"],
        ["Structures", "Trestle, catwalk, mooring dolphin, breasting dolphin, shelter"],
        ["Duration", "8 weeks"]
      ],
      highlights: [
        "Verified sub- and upper-structure calculations for the 5 port structures.",
        "Turned raw soil investigation data into daily geotechnical reports used by the engineering team.",
        "Authored the piling work method statement used to standardize execution on site."
      ],
      tools: [],
      images: []
    },

    {
      id: "studio-mineral-disposal",
      title: "Stability and Hazard Analysis of a Coal Mine Disposal Area",
      category: "Internship",
      client: "PT Studio Mineral Batubara",
      location: "Yogyakarta, Indonesia",
      period: "Jun 2025 – Aug 2025",
      role: "Geotechnical (Mining) Engineer Intern",
      summary: "An independent study of the Panel 1 disposal area of a coal mine using the empirical WSRHC method, carried from data collection through analysis and reporting.",
      facts: [
        ["Disposal volume", "335 million m³ LCM / 268 million m³ BCM"],
        ["Dumping methods", "3"],
        ["Rating", "20 factors in 6 categories, WSR 30.5"],
        ["Result", "Class 4 of 5, High Hazard"]
      ],
      highlights: [
        "Rated 20 factors across 6 categories and classified the dump as Class 4, High Hazard.",
        "Recommended staged stability design, instrumentation and monitoring, and loading-rate limits.",
        "Presented the findings to the supervising engineers for review and validation."
      ],
      tools: ["WSRHC method", "Slope stability analysis"],
      images: [
        { src: "images/research/disposal/01-stability-results.jpg", caption: "Stability performance results" },
        { src: "images/research/disposal/02-stability-results.jpg", caption: "Stability performance results" }
      ]
    }
  ],

  /* ---------- RESEARCH ---------- */
  research: [
    {
      id: "water-supply-el-nino",
      title: "Water Supply Fulfillment for Watering Plant Needs in a Potentially Upcoming El Niño Period",
      type: "Scopus-indexed proceeding, first author",
      period: "2023 – 2024",
      summary: "Surabaya's Environmental Service waters city parks every day from existing water channels. With a dry El Niño period forecast, this study compared the planned rainfall discharge (rainy season) with the reliable discharge (dry season) to find how much water the parks would lack and where it could come from.",
      findings: [
        "Dry-season watering demand rises by 130%, to 676,000 liters.",
        "Water level in the existing channels falls to 0 m in July.",
        "Treated water from the wastewater treatment plant, 846,700 liters, is enough to cover the demand."
      ],
      role: ["First author of the paper.", "Presented the findings at the ICWRDEP international conference."],
      outputs: ["IOP Conference Series: Earth and Environmental Science (2024)"],
      link: { label: "Read the paper", url: "https://iopscience.iop.org/article/10.1088/1755-1315/1311/1/012039" },
      images: []
    },
    {
      id: "anomalister",
      title: "Anomalister: Arduino-Based Uplifted Waste Filter Using an Infrared Sensor System",
      type: "Applied research and patent",
      period: "ISI: tahun",
      summary: "Started as a community service (KKN) project for a village with a badly polluted river. Anomalister lifts waste out of the water with an Arduino-controlled mechanism. I later developed it into Anomalister 2.0, an integrated IoT product designed for commercial use.",
      findings: [],
      role: [
        "Developed 90% of the device's working concept and selected the components.",
        "Collaborated on the wiring scheme.",
        "Wrote 100% of the initial code, later tested by teammates through trial and error.",
        "Formulated the Anomalister 2.0 development concept under a lecturer's supervision."
      ],
      outputs: ["Working device installed on site", "Intellectual property registration", "Patent on the electrical wiring design and operation, registered with my supervisor"],
      images: [
        { src: "images/research/anomalister/01-device-render.jpg", caption: "Anomalister 2.0 concept" },
        { src: "images/research/anomalister/02-device-on-site.jpg", caption: "Device installed on site" },
        { src: "images/research/anomalister/03-wiring-scheme.jpg", caption: "Wiring scheme" }
      ]
    },
    {
      id: "awlr",
      title: "AWLR: Automatic Water Level Recorder",
      type: "IoT device, department research",
      period: "ISI: tahun",
      summary: "An IoT device that measures groundwater levels and processes the data to detect floods and produce groundwater statistics. It was deployed at three locations, each unit slightly modified; one uses LoRa. The work was started by a senior student, handed to me, and is now continued by the department.",
      findings: [],
      role: [
        "Modified the wiring and code of 1 of the 3 devices to suit its site conditions.",
        "Maintained all three devices, analyzed the processed data, and monitored the IoT system."
      ],
      outputs: ["3 devices in operation", "Monitoring app with level alerts"],
      images: [
        { src: "images/research/awlr/01-device.jpg", caption: "AWLR unit" },
        { src: "images/research/awlr/02-system-diagram.jpg", caption: "System diagram" },
        { src: "images/research/awlr/03-monitoring-app.jpg", caption: "Monitoring app and alert" }
      ]
    },
    {
      id: "weir",
      title: "Physical Hydraulic Model of the Gandong Kerik Weir, Magetan, East Java",
      type: "Laboratory research",
      period: "2023 – 2024",
      summary: "A large-scale water engineering study that modelled the Gandong Kerik Weir at laboratory scale, with the aim of reaching flow criteria that fully represent the real structure.",
      findings: [],
      role: [
        "Assisted the 3D modelling plan for the weir.",
        "Processed data and produced publications from the findings.",
        "Supported experimental setup, data collection, and observation of hydraulic performance."
      ],
      outputs: ["Intellectual property registration", "Research recognition"],
      images: [
        { src: "images/research/weir/01-physical-model.jpg", caption: "Physical model and 3D plan" }
      ]
    },
    {
      id: "disposal",
      title: "Stability and Hazard Analysis of a Mine Disposal Using the Empirical WSRHC Method",
      type: "Independent study, internship final project",
      period: "Jun 2025 – Aug 2025",
      summary: "An independent study done as the final project of my internship, using company data, with two months to finish the analysis and present it. The WSRHC method is still uncommon in Indonesia. The results were verified and then used by the company.",
      findings: [
        "20 factors in 6 categories rated; WSR 30.5.",
        "Disposal classified as Class 4 of 5, High Hazard."
      ],
      role: ["Led the work independently from data collection to analysis, report, and presentation."],
      outputs: ["Technical report and presentation used by the company"],
      images: [
        { src: "images/research/disposal/01-stability-results.jpg", caption: "Stability performance results" }
      ]
    },
    {
      id: "robot",
      title: "Obstacle-Avoiding Robot with Self-Balancing",
      type: "Self-initiated, ITS Robotics",
      period: "ISI: tahun",
      summary: "A self-initiated project under ITS Robotics: an obstacle-avoiding, self-balancing robot programmed in C on an STM32 microcontroller.",
      findings: [],
      role: ["Programmed the robot in C on STM32."],
      outputs: ["Working prototype"],
      images: [
        { src: "images/research/robot/01-robot.jpg", caption: "Robot design and prototype" },
        { src: "images/research/robot/02-electrical-flow.jpg", caption: "Electrical flow" }
      ]
    }
  ],

  /* ---------- PENGALAMAN (halaman CV) ---------- */
  experience: [
    {
      title: "Civil Structural Design Engineer",
      org: "PT Citra Karsa Dinamika (CKD), EPCC Contractor",
      location: "Cikarang, Indonesia",
      period: "Sep 2026 – Present",
      points: [
        "Independently design structures for active tenders and POs, from modelling to reporting, for review by the engineering lead and the owner.",
        "Delivered 10 structures for 6 clients within the first 2 months."
      ],
      projectIds: ["safran-batik", "wtp-sei-mangkei", "goodyear-boiler-house", "kdf-building-47", "beiersdorf-cargo-lift", "bonecom-warehouse"]
    },
    {
      title: "Geotechnical (Mining) Engineer Intern",
      org: "PT Studio Mineral Batubara, Mining Consultancy",
      location: "Yogyakarta, Indonesia",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Analyzed the Panel 1 disposal area of a coal mine (335 million m³ LCM / 268 million m³ BCM, 3 dumping methods) for stability and hazard with the empirical WSRHC method.",
        "Rated 20 factors in 6 categories (WSR 30.5), classifying the dump as Class 4, High Hazard, and recommending staged stability design, monitoring, and loading-rate limits."
      ],
      projectIds: ["studio-mineral-disposal"]
    },
    {
      title: "Civil Structure Engineer Intern",
      org: "PT Wijaya Karya (WIKA), EPCC Division",
      location: "Surabaya, Indonesia",
      period: "Jan 2025 – Feb 2025",
      points: [
        "Verified sub- and upper-structure calculations for 5 port structures on the IDR 577 billion Gospier Jetty project.",
        "Turned raw soil investigation data into daily geotechnical reports over 8 weeks.",
        "Authored the piling work method statement."
      ],
      projectIds: ["wika-gospier-jetty"]
    },
    {
      title: "Lecturer and Research Assistant",
      org: "Department of Civil Infrastructure Engineering, ITS",
      location: "Surabaya, Indonesia",
      period: "Jun 2023 – Jan 2024",
      points: [
        "First-authored a Scopus-indexed publication on water supply reliability for plant watering during El Niño conditions.",
        "Took part in the physical model research of the Gandong Kerik Weir.",
        "Ran field surveys for PUPR-funded programs, including the 2023 Drainage Improvement Program and POKIR 2024.",
        "Presented research findings at the ICWRDEP international conference."
      ],
      projectIds: []
    },
    {
      title: "Teaching Assistant and Grader, Engineering Mechanics: Statics",
      org: "Department of Civil Infrastructure Engineering, ITS",
      location: "Surabaya, Indonesia",
      period: "ISI: periode",
      points: [
        "Led weekly problem-solving sessions and graded assignments with feedback (equilibrium, free-body diagrams, internal forces, truss analysis)."
      ],
      projectIds: []
    }
  ],

  /* ---------- PENDIDIKAN ---------- */
  education: [
    {
      school: "Institut Teknologi Sepuluh Nopember (ITS)",
      degree: "Applied Bachelor of Civil Engineering",
      location: "Surabaya, Indonesia",
      period: "Aug 2022 – Oct 2026",
      points: [
        "GPA 3.63 / 4.00, Cum Laude, top 5% of the department.",
        "3rd Place Most Outstanding Student ITS 2025 (university scale).",
        "Coursework: high-rise buildings, long-span bridges, port structures, structural evaluation and rehabilitation, construction management, cost control, geotechnics."
      ]
    },
    {
      school: "University of Missouri-Kansas City",
      degree: "Exchange Student, IISMA Scholarship Awardee",
      location: "Kansas City, United States",
      period: "Aug 2024 – Dec 2024",
      points: [
        "GPA 3.97 / 4.00; 12 US credits in Engineering Statics, Earth Climate & Geology, and cultural studies.",
        "ASCE Associate Member; took part in technical discussions at the ASCE International Conference."
      ]
    }
  ],

  /* ---------- KEAHLIAN ---------- */
  skills: [
    { group: "Structural engineering", items: ["Structural design and analysis", "Industrial and high-rise building structures", "Structural strengthening (steel bracing, CFRP)", "Steel connection design", "Foundation design", "Port and bridge structures"] },
    { group: "Software", items: ["ETABS", "SAP2000", "IDEA StatiCa", "spColumn", "AutoCAD", "Revit", "Microsoft Excel", "Microsoft Project"] },
    { group: "Design codes", items: ["SNI 1726:2019", "SNI 1727:2020", "SNI 2847:2019", "SNI 1729:2020", "SNI 1725:2016", "AISC 360", "ACI 318", "ACI 350.3"] },
    { group: "Construction management", items: ["Quantity estimation", "Cost control", "Project planning", "Construction scheduling", "Progress monitoring"] }
  ],

  /* ---------- PENGHARGAAN ---------- */
  awards: [
    { title: "3rd Place Most Outstanding Student ITS", detail: "University scale", year: "2025" },
    { title: "IISMA Awardee", detail: "Full exchange scholarship to the University of Missouri-Kansas City; 2,300 awardees from 15,000+ applicants", year: "2024" },
    { title: "Scopus-indexed publication", detail: "IOP Conference Series: Earth and Environmental Science", year: "2024" },
    { title: "2nd Place, KSN-K Informatics", detail: "National Science Competition, district level", year: "2022" },
    { title: "5th Place, KSM Informatics", detail: "", year: "2021" }
  ],

  /* ---------- SERTIFIKASI ---------- */
  certifications: [
    { title: "SKK BIM Coordinator, Level 6", detail: "Badan Nasional Sertifikasi Profesi (BNSP)" },
    { title: "TOEIC 785 (B2)", detail: "ETS" },
    { title: "Duolingo English Test 120 (B2)", detail: "Duolingo" }
  ],

  /* ---------- ORGANISASI ---------- */
  organizations: [
    { title: "Social Media Staff", org: "Vokasi ITS", period: "From Jan 2024", detail: "" },
    { title: "English Teacher", org: "TEFL ITS", period: "ISI: periode", detail: "Taught 9 classes of about 10 students each." },
    { title: "Member", org: "ITS Robotics", period: "ISI: periode", detail: "" },
    { title: "PIC Line Tracer, Robot in Action", org: "ITS Expo", period: "ISI: tahun", detail: "" },
    { title: "Event Staff", org: "Vondasi 2023", period: "2023", detail: "" }
  ],

  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional proficiency" }
  ]
};
