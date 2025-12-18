

import { Service, Project, TeamMember, Testimonial, FAQ, Stat, Job } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: "Oil & Gas Operations",
    description: "Upstream extraction and downstream processing facilities engineered for safety and efficiency.",
    icon: "building"
  },
  {
    id: 2,
    title: "Offshore Construction",
    description: "Deep-water platforms and marine infrastructure built to withstand the harshest ocean environments.",
    icon: "hardhat"
  },
  {
    id: 3,
    title: "Renewable Energy",
    description: "Solar farms, wind turbines, and hydroelectric plants driving the future of sustainable power.",
    icon: "pickaxe"
  },
  {
    id: 4,
    title: "Petrochemical Plants",
    description: "Advanced chemical processing units and refineries designed for high-output industrial synthesis.",
    icon: "home"
  }
];

// Helper to generate projects
const categories = ["Oil & Gas", "Offshore", "Renewable Energy", "Petrochemicals", "Infrastructure"];
const locations = ["Texas, USA", "North Sea, UK", "Dubai, UAE", "Singapore", "Perth, Australia", "Rotterdam, NL", "Alberta, Canada", "Rio de Janeiro, Brazil"];

const projectImages = {
  "Oil & Gas": [
    "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=800&auto=format&fit=crop", // Refinery night
    "https://cdn.stocksnap.io/img-thumbs/960w/sea-ocean_85JUR5TYWM.jpg", // Pipes
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop", // Industrial
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop", // Silos
    "https://www.shutterstock.com/image-photo/st-johns-newfoundland-canadajanuary-2023-600nw-2269617229.jpg", // Construction
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop", // Valve
    "https://www.bluemountainmidstream.com/wp-content/uploads/2019/03/image-capabilities@2x.jpg", // Storage
    "https://www.investopedia.com/thmb/p08doiQCigm5e-NXvA-ziOjIDqw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-955491344-f978b8072db542cdbce83d48d9648d52.jpg", // Pipes 2
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNtDCJmRThyP_YCzhSbDlzvwVmwHu2npd1g&s"  // Industry
  ],
  "Offshore": [
    "https://res.cloudinary.com/osrl-production/image/upload/osrlprod/globalassets/knowledge-hub-169/crisis-management/offshore-wind-farm-turbines.png", // Rig Sea
    "https://shreepatigroup.co.in/wp-content/uploads/2025/07/How-Mumbai-High-South-Redevelopment-Is-Changing-Residential-Properties-in-South-Mumbai.jpg", // Platform
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMiQf8uiKadPMvSV6VRm3iOuOLGn30UhKKQ&s", // Ocean Rig
    "https://static.wixstatic.com/media/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png/v1/fill/w_720,h_432,al_c,q_85,enc_avif,quality_auto/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png", // Ship
    "https://www.fordham.edu/media/review/content-assets/migrated/images/fordham_042508_0004.jpg", // Sea
    "https://scpr.brightspotcdn.com/dims4/default/2219ff8/2147483647/strip/true/crop/888x665+0+0/resize/880x659!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2010%2F10%2F12%2F60401696_3973481-fbc4f2c50bef9762fc292ba58178a9dc88626dcb.jpg", // Ship cargo
    "https://www.oberonengineering.com/wp-content/uploads/2024/03/shutterstock_1606208581.webp", // Welding
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqMVkQ26T4572ta92PGl0eoZ_qBbTal2vRQ&s", // Waves rig
    "https://dvzpv6x5302g1.cloudfront.net/AcuCustom/Sitename/DAM/144/web_only_Anita_Garbaldi_source_Petrobras.png", // Engineer
    "https://media.assettype.com/deccanherald/2025-01-08/bt5r1doz/iStock-1452806002.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"  // Platform night
  ],
  "Renewable Energy": [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop", // Solar
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop", // Wind
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop", // Green Tech
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1c/39/3f/caption.jpg?w=900&h=500&s=1", // Solar Panels
    "https://www.thisiseco.co.uk/wp-content/uploads/2020/11/biomass-biogas.jpeg", // Wind Farm
    "https://media.istockphoto.com/id/1453859222/photo/view-of-modern-photovoltaic-solar-panels-to-charge-battery-rows-of-sustainable-energy-solar.jpg?s=612x612&w=0&k=20&c=Rmv3Ah3pibVN2KT4Vwyb60C1BcplmNrHT1OvyWxH_iU=", // Turbine
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3eV8PYkToXAT-Ffe-Vc_Iv78RrZs2TEQoXb1EKzwSJzmyW4YMUCgfY8PKtkWl92ZapRDaTJTX", // Hydro
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUs6phOqA3TG17_s3lP-FuPueCOtjDvsNDDYkzbmSYhnIxEx2KDgLDa1EQSopzwed4bcaajPC", // Dam
    "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop", // Wind close
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"  // Solar field
  ],
  "Petrochemicals": [
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop", // Lab/Factory
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", // Smoke stacks
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop", // Refinery
    "https://www.bollegraaf.com/content/uploads/2023/03/IMG_8599-1600x1067.jpg", // Chemical
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop", // Pipes industrial
    "https://media.istockphoto.com/id/608480162/photo/white-buildings-of-modern-factory.jpg?s=612x612&w=0&k=20&c=nL_PKKOjNinv-jkaMmfqfwlJohBCorlzqVdUgMC1H1M=", // Factory inside
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop", // Workers
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgnweWONSaYaBg1XyZOAhpkgIV0gqp2oKYb5zEPRJhgnmgVQSGilh61S6cHUNid-EDDtGEomzL", // Tanks
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Steel
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/TASNEE_001.jpg"  // Complexity
  ],
  "Infrastructure": [
    "https://www.nemetschek.com/sites/default/files/styles/1600_900/public/2020-11/Queensferry_Project_Category_Infrastructure_gross.jpg?itok=lFyCSkKF", // Bridge
    "https://www.arup.com/globalassets/images/projects/m/metro-tunnel-project/metro-tunnel-project.webp?width=1840&height=1035&quality=80", // Bridge 2
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop", // City
    "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop", // Lights
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWL-f4K7vgOsDTiQ6KqWiNZ2i07mwdAfzy4A7VBJGwPAkmdsftCQvbZrw-Z1A-I77w18IEKnw", // Bridge dusk
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsKFtNWt62MtL2h5tO6fob6Q7h7Bjyd99GQ&s", // Tunnel
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcz4LK3H6g4CmdCY23t1-KYdKsyzaeLkOe1OgtcHze2_kGNMAygExfc95IJj_JYJ0qFpEvbR-c", // Architecture
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBfnadjain7OoZOuIx2DPjSUjB2DpqpzdU1hCqLVdAeXETZyWKXLX-S-cWeXIixYt_oHGPtu-j", // Highway
    "https://www.ibef.org/assets/images/Road-Infrastructure-3.jpg", // Road
    "https://thumbs.dreamstime.com/b/tokyo-street-view-evening-japan-june-travel-photography-120032419.jpg"  // Concrete
  ]
};

const names = {
  "Oil & Gas": [
    "Desert Gold Refinery", "North Sea Platform Alpha", "Pipeline Expansion Project", "Terminal 4 Storage",
    "Deepwater Drill Site B", "Coastal LNG Facility", "Midstream Processing Plant", "West Field Extraction",
    "Eastern Pipeline Hub", "Global Gas Terminal"
  ],
  "Offshore": [
    "Atlantic Wind Farm Base", "Pacific Rig 7", "Deep Blue Subsea Unit", "Offshore Logistics Hub",
    "Marine Research Station", "Gulf Coast Platform", "Oceanic Drilling Ship", "Subsea Pipeline Network",
    "Floating Production Unit", "Anchor Point Facility"
  ],
  "Renewable Energy": [
    "Solar Horizon Park", "Wind Valley Turbines", "Geothermal Plant One", "Hydroelectric Dam Alpha",
    "Bioenergy Facility", "Solar Array Beta", "Coastal Wind Farm", "Green Grid Substation",
    "Thermal Energy Center", "Eco-Power Plant"
  ],
  "Petrochemicals": [
    "Polymer Processing Unit", "Chemical Synthesis Plant", "Refinery Cracking Unit", "Plastics Manufacturing Hub",
    "Ethylene Production Site", "Industrial Chemical Park", "Bio-fuel Refinery", "Synthetic Rubber Plant",
    "Ammonia Storage Facility", "Advanced Materials Lab"
  ],
  "Infrastructure": [
    "Titan Bridge", "Metro Tunnel System", "Harbor Port Expansion", "City Highway Network",
    "International Airport Terminal", "Railway Logistics Hub", "Urban Water Treatment", "National Power Grid",
    "Coastal Sea Wall", "Civic Center Road"
  ]
};

// Generate 50 projects with detailed data
export const projects: Project[] = [];
let idCounter = 1;

categories.forEach(cat => {
  const catImages = projectImages[cat as keyof typeof projectImages];

  for (let i = 0; i < 10; i++) {
    const gallery = [
      catImages[(i + 1) % catImages.length],
      catImages[(i + 2) % catImages.length],
      catImages[(i + 3) % catImages.length]
    ];

    projects.push({
      id: idCounter++,
      title: names[cat as keyof typeof names][i],
      location: locations[i % locations.length],
      category: cat,
      image: catImages[i % catImages.length],
      client: `Global ${cat} Corp`,
      completionDate: `${2020 + (i % 5)}`,
      budget: `$${(i + 1) * 15} Million`,
      description: "A state-of-the-art facility designed to maximize efficiency while minimizing environmental impact. This project represents a benchmark in modern engineering excellence, featuring automated systems and robust safety protocols.",
      challenge: "Executing construction within a tight timeframe while maintaining zero operational downtime for adjacent facilities. The project faced extreme weather conditions and required precise logistical coordination to transport heavy machinery to remote locations.",
      solution: "Implemented a modular construction strategy and utilized advanced predictive scheduling to ensure seamless integration. We deployed autonomous heavy-lifting drones for material transport and utilized 4D BIM modeling to resolve conflicts before construction began.",
      materials: ["Reinforced Concrete", "High-Grade Steel", "Composite Cladding", "Smart Glass"],
      architect: "Ironcrest Design Studio",
      size: `${Math.floor(Math.random() * 50 + 10) * 1000} sq ft`,
      features: [
        "LEED Platinum Certified",
        "Advanced Seismic Damping System",
        "Automated Climate Control",
        "Integrated Greywater Recycling",
        "Smart Building Management System"
      ],
      gallery: gallery,
      sustainability: "This project features a 40% reduction in carbon footprint through the use of recycled steel and concrete. An on-site rainwater harvesting system irrigates the surrounding landscape, while a rooftop solar array provides 25% of the building's operational energy.",
      awards: [
        "Global Infrastructure Excellence Award",
        "Safety Star Merit 2023",
        "Best Industrial Design - Regional"
      ],
      scope: "EPC (Engineering, Procurement, Construction), Project Management, Site Analysis, and Post-Construction Maintenance.",

      // New Detailed Fields
      objectives: [
        "Increase production capacity by 150% within 24 months.",
        "Achieve Net-Zero carbon emissions for operational phases.",
        "Integrate full AI-driven automation for monitoring and safety.",
        "Maintain strict adherence to ISO 45001 safety standards."
      ],
      techSpecs: [
        { label: "Foundation Depth", value: "45 Meters (Piled)" },
        { label: "Structural Steel", value: "12,000 Tons" },
        { label: "Peak Power Output", value: "450 MW" },
        { label: "Daily Capacity", value: "50,000 Barrels / Units" },
        { label: "Control System", value: "Siemens PCS 7" }
      ],
      projectTimeline: [
        { phase: "Q1 2020", date: "Jan 2020", desc: "Site Survey & Environmental Impact Assessment" },
        { phase: "Q3 2020", date: "Aug 2020", desc: "Foundation Laying & Core Structural Work" },
        { phase: "Q2 2021", date: "May 2021", desc: "Heavy Machinery Installation & System Integration" },
        { phase: "Q4 2021", date: "Nov 2021", desc: "Testing, Commissioning & Handover" }
      ],
      outcomes: [
        "Delivered 3 weeks ahead of schedule.",
        "Zero lost-time injury incidents over 1.5 million man-hours.",
        "Operational efficiency increased by 35% compared to legacy systems.",
        "Awarded 'Best Sustainable Industrial Project' by regional authority."
      ]
    });

  }
});

// Indian Projects
const indianProjects: Project[] = [
  {
    id: idCounter++,
    title: "Jamnagar Refinery Complex",
    location: "Jamnagar, Gujarat, India",
    category: "Oil & Gas",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Jamnagar_Refinery.jpg",
    client: "Reliance Industries",
    completionDate: "2025",
    budget: "$6 Billion",
    description: "Expansion of the world's largest refining hub, incorporating advanced crude processing units and petrochemical integration.",
    challenge: "Integrating new units with existing infrastructure without disrupting continuous operations of the massive refinery complex.",
    solution: "Utilized modular construction for key units and implemented a digital twin for real-time monitoring of tie-in points.",
    materials: ["High-Strength Steel", "Cryogenic Concrete", "Refractory Bricks"],
    architect: "Ironcrest India Design",
    size: "500,000 sq ft",
    features: ["World's Largest Refinery", "Integrated Petrochemicals", "Desalination Plant", "Captive Power Plant"],
    gallery: [
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop"
    ],
    sustainability: "Implemented advanced waste heat recovery systems and zero liquid discharge technologies.",
    awards: ["Best Refinery Project 2024", "National Safety Award"],
    scope: "EPC, Commissioning, and Start-up support.",
    objectives: ["Increase refining capacity by 20%", "Enhance petrochemical feedstock production", "Reduce specific energy consumption"],
    techSpecs: [
      { label: "Capacity", value: "1.24 Million Barrels/Day" },
      { label: "Area", value: "7,500 Acres" },
      { label: "Power", value: "Captive Power Plants" },
      { label: "Water", value: "Desalination Units" },
      { label: "Control", value: "Distributed Control System" }
    ],
    projectTimeline: [
      { phase: "Phase 1", date: "Jan 2023", desc: "Engineering & Procurement" },
      { phase: "Phase 2", date: "Jun 2023", desc: "Civil Works & Structural Erection" },
      { phase: "Phase 3", date: "Dec 2024", desc: "Mechanical Completion" },
      { phase: "Phase 4", date: "Jun 2025", desc: "Commissioning" }
    ],
    outcomes: ["Capacity expansion targets met", "Safety record maintained", "Energy efficiency improved"]
  },
  {
    id: idCounter++,
    title: "Mumbai High South Redevelopment",
    location: "Mumbai Offshore, India",
    category: "Offshore",
    image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-899249,resizemode-75,msid-79240898/industry/services/property-/-cstruction/south-mumbais-bhendi-bazaar-redevelopment-project-completes-first-phase.jpg",
    client: "ONGC",
    completionDate: "2024",
    budget: "$2.5 Billion",
    description: "Redevelopment of the Mumbai High South field to enhance oil recovery and extend field life.",
    challenge: "Executing complex brownfield modifications on aging offshore platforms in rough sea conditions.",
    solution: "Deployed heavy-lift vessels for platform installation and used subsea robotics for pipeline tie-ins.",
    materials: ["Marine Grade Steel", "Corrosion Resistant Alloys"],
    architect: "Ironcrest Offshore",
    size: "N/A",
    features: ["Enhanced Oil Recovery", "New Well Platforms", "Subsea Pipelines", "Gas Lift Systems"],
    gallery: [
      "https://res.cloudinary.com/osrl-production/image/upload/osrlprod/globalassets/knowledge-hub-169/crisis-management/offshore-wind-farm-turbines.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMiQf8uiKadPMvSV6VRm3iOuOLGn30UhKKQ&s",
      "https://static.wixstatic.com/media/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png/v1/fill/w_720,h_432,al_c,q_85,enc_avif,quality_auto/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png"
    ],
    sustainability: "Reduced flaring and improved produced water treatment.",
    awards: ["Offshore Excellence Award", "Environmental Stewardship"],
    scope: "EPCI (Engineering, Procurement, Construction, Installation)",
    objectives: ["Arrest production decline", "Maximize recovery factor", "Upgrade safety systems"],
    techSpecs: [
      { label: "Water Depth", value: "80 Meters" },
      { label: "Wells", value: "New & Workover Wells" },
      { label: "Pipelines", value: "Subsea Inter-field" },
      { label: "Platforms", value: "Process & Wellhead" },
      { label: "Life Extension", value: "20 Years" }
    ],
    projectTimeline: [
      { phase: "Survey", date: "2021", desc: "Geophysical Survey" },
      { phase: "Fab", date: "2022", desc: "Jacket & Topside Fabrication" },
      { phase: "Install", date: "2023", desc: "Offshore Installation" },
      { phase: "Hookup", date: "2024", desc: "Hookup & Commissioning" }
    ],
    outcomes: ["Production stabilized", "Safety systems upgraded", "Field life extended"]
  },
  {
    id: idCounter++,
    title: "Khavda Renewable Energy Park",
    location: "Rann of Kutch, Gujarat, India",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    client: "Adani Green Energy",
    completionDate: "2026",
    budget: "$18 Billion",
    description: "Development of the world's largest renewable energy park, combining solar and wind power.",
    challenge: "Constructing in a remote, saline desert environment with extreme temperatures and logistical challenges.",
    solution: "Used robotic cleaning for solar panels and pre-cast foundations for wind turbines to speed up construction.",
    materials: ["Solar PV Modules", "Steel Towers", "Composite Blades"],
    architect: "Ironcrest Renewables",
    size: "72,600 Hectares",
    features: ["Hybrid Solar-Wind", "Grid Connectivity", "Robotic Cleaning", "Remote Monitoring"],
    gallery: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1c/39/3f/caption.jpg?w=900&h=500&s=1"
    ],
    sustainability: "Generates clean energy to power millions of homes, offsetting massive carbon emissions.",
    awards: ["Green Energy Project of the Year", "Innovation in Renewables"],
    scope: "Development, EPC, and O&M",
    objectives: ["Generate 30 GW of clean energy", "Create green jobs", "Support national renewable targets"],
    techSpecs: [
      { label: "Capacity", value: "30 GW" },
      { label: "Solar", value: "Bifacial Modules" },
      { label: "Wind", value: "5.2 MW Turbines" },
      { label: "Grid", value: "Ultra High Voltage" },
      { label: "Location", value: "Khavda, Kutch" }
    ],
    projectTimeline: [
      { phase: "Land", date: "2022", desc: "Land Acquisition & Permits" },
      { phase: "Infra", date: "2023", desc: "Roads & Transmission Lines" },
      { phase: "Install", date: "2024-2026", desc: "Phased Installation" },
      { phase: "Ops", date: "2026", desc: "Full Operations" }
    ],
    outcomes: ["World's largest RE park", "Significant carbon reduction", "Economic development of the region"]
  },
  {
    id: idCounter++,
    title: "Dahej Petrochemical Complex",
    location: "Dahej, Gujarat, India",
    category: "Petrochemicals",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop",
    client: "OPaL",
    completionDate: "2023",
    budget: "$4 Billion",
    description: "A dual-feed cracker unit and downstream polymer plants.",
    challenge: "Managing complex logistics for transporting oversized equipment and ensuring feedstock security.",
    solution: "Established a dedicated jetty for logistics and long-term contracts for feedstock supply.",
    materials: ["Specialized Alloys", "Concrete", "Steel Structures"],
    architect: "Ironcrest Process",
    size: "1000 Acres",
    features: ["Dual Feed Cracker", "Polymer Units", "Captive Power", "Effluent Treatment"],
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
      "https://www.bollegraaf.com/content/uploads/2023/03/IMG_8599-1600x1067.jpg"
    ],
    sustainability: "Zero liquid discharge and high energy efficiency standards.",
    awards: ["Petrochemical Project Award", "Operational Excellence"],
    scope: "EPC and Technology Licensing",
    objectives: ["Produce high-value polymers", "Import substitution", "Export promotion"],
    techSpecs: [
      { label: "Ethylene", value: "1.1 KTPA" },
      { label: "Propylene", value: "400 KTPA" },
      { label: "Polymer", value: "HDPE, LLDPE, PP" },
      { label: "Power", value: "CPP" },
      { label: "Water", value: "Desalination" }
    ],
    projectTimeline: [
      { phase: "FEED", date: "2019", desc: "Front End Engineering Design" },
      { phase: "EPC", date: "2020-2022", desc: "Construction" },
      { phase: "Comms", date: "2023", desc: "Commissioning" },
      { phase: "Ops", date: "2023", desc: "Commercial Production" }
    ],
    outcomes: ["Successful startup", "High capacity utilization", "Quality products"]
  },
  {
    id: idCounter++,
    title: "Chenab Rail Bridge",
    location: "Reasi, J&K, India",
    category: "Infrastructure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGDWHserutYjTECLPWB9NDqnervgnbRMhQ&s",
    client: "Indian Railways",
    completionDate: "2024",
    budget: "$180 Million",
    description: "Construction of the world's highest railway bridge, a steel arch bridge over the Chenab river.",
    challenge: "Building a massive steel arch in a highly seismic zone with high wind speeds and difficult terrain.",
    solution: "Used cable cranes for erection and extensive wind tunnel testing to ensure stability.",
    materials: ["Blast Proof Steel", "Reinforced Concrete"],
    architect: "Ironcrest Infra",
    size: "1.3 km Length",
    features: ["World's Highest Bridge", "Blast Proof", "Seismic Resistant", "100 Year Life"],
    gallery: [
      "https://www.arup.com/globalassets/images/projects/m/metro-tunnel-project/metro-tunnel-project.webp?width=1840&height=1035&quality=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWL-f4K7vgOsDTiQ6KqWiNZ2i07mwdAfzy4A7VBJGwPAkmdsftCQvbZrw-Z1A-I77w18IEKnw"
    ],
    sustainability: "Connecting remote regions by rail reduces reliance on road transport and associated emissions.",
    awards: ["Engineering Marvel", "Record Breaker"],
    scope: "Design and Construction",
    objectives: ["Connect Kashmir to rest of India", "All-weather connectivity", "Strategic importance"],
    techSpecs: [
      { label: "Height", value: "359 Meters" },
      { label: "Span", value: "467 Meters" },
      { label: "Steel", value: "28,660 MT" },
      { label: "Design Speed", value: "100 Kmph" },
      { label: "Lifespan", value: "120 Years" }
    ],
    projectTimeline: [
      { phase: "Design", date: "2015", desc: "Final Design Approval" },
      { phase: "Arch", date: "2021", desc: "Arch Closure" },
      { phase: "Deck", date: "2022", desc: "Deck Launching" },
      { phase: "Track", date: "2024", desc: "Track Linking" }
    ],
    outcomes: ["Engineering history made", "Vital connectivity established", "Boost to local economy"]
  }
];

projects.push(...indianProjects);

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Alexander Ironcrest",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "With 40 years of experience, Alexander established the company's vision for uncompromising quality."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Award-winning architect specializing in sustainable modernism and urban redevelopment."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Civil engineering expert ensuring every structure exceeds safety and durability standards."
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Master of logistics and timeline management, ensuring client projects are delivered on schedule."
  },
  {
    id: 5,
    name: "David L. Harrington",
    role: "Executive Director – Global Projects",
    image: "/assets/our-team/david-l-harrington.jpeg",
    bio: "Leading international project initiatives with expertise in global infrastructure development and strategic partnership management."
  },
  {
    id: 6,
    name: "Priya Malhotra",
    role: "Director – Strategic Development (Asia Pacific)",
    image: "/assets/our-team/priya-malhotra.jpeg",
    bio: "Driving growth across Asia-Pacific markets with deep understanding of regional construction standards and sustainable development practices."
  },
  {
    id: 7,
    name: "Carlos M. Alvarez",
    role: "Vice President – Infrastructure & Construction",
    image: "/assets/our-team/carlos-m-alvarez.jpeg",
    bio: "Overseeing large-scale infrastructure projects with focus on innovation, efficiency, and delivering complex construction on schedule and budget."
  },
  {
    id: 8,
    name: "Aisha Noor Al-Hassan",
    role: "Director – Offshore Energy & Power Projects",
    image: "/assets/our-team/aisha-noor-al-hassan.jpeg",
    bio: "Pioneering offshore energy solutions and power infrastructure projects with expertise in marine construction and renewable energy systems."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Vance",
    role: "CEO, Vance Energy",
    quote: "Ironcrest delivered our refinery expansion ahead of schedule and under budget. Their safety protocols are the best in the business."
  },
  {
    id: 2,
    name: "Amelia Croft",
    role: "Director, EcoPower",
    quote: "The offshore wind farm base is a masterpiece of engineering. Ironcrest understands the unique challenges of marine construction."
  },
  {
    id: 3,
    name: "Julian Eaves",
    role: "Minister of Infrastructure",
    quote: "A reliable partner for large-scale public works. They transformed the city's transport network with minimal disruption."
  }
];

export const faqs: FAQ[] = [
  {
    question: "Do you operate internationally?",
    answer: "Yes, we manage large-scale industrial projects globally, with a focus on the Middle East, North America, and Europe."
  },
  {
    question: "What safety certifications do you hold?",
    answer: "We are ISO 45001 certified and strictly adhere to OSHA and international maritime safety standards for all offshore operations."
  },
  {
    question: "Can you handle brownfield projects?",
    answer: "Absolutely. We specialize in upgrading and expanding existing facilities (brownfield) with minimal operational downtime."
  },
  {
    question: "What is your approach to environmental sustainability?",
    answer: "We integrate carbon-capture ready designs and renewable energy power sources into our industrial projects wherever possible."
  }
];

export const stats: Stat[] = [
  { label: "Years of Excellence", value: "38" },
  { label: "Projects Completed", value: "450+" },
  { label: "Safety Awards", value: "24" },
  { label: "Countries Served", value: "15" }
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Civil Engineer",
    department: "Engineering",
    location: "Houston, TX",
    type: "Full-Time",
    description: "Lead complex structural projects from conception to completion. Requires 10+ years experience in heavy industrial construction."
  },
  {
    id: 2,
    title: "Project Manager - Offshore",
    department: "Operations",
    location: "Aberdeen, UK",
    type: "Full-Time",
    description: "Oversee marine construction projects, managing teams, budgets, and safety compliance in challenging offshore environments."
  },
  {
    id: 3,
    title: "Sustainability Consultant",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Contract",
    description: "Advise on LEED certification and implement green building technologies across our new commercial developments."
  },
  {
    id: 4,
    title: "Site Safety Supervisor",
    department: "Safety",
    location: "Dubai, UAE",
    type: "Full-Time",
    description: "Ensure strict adherence to safety protocols on high-rise construction sites. Certification in occupational health and safety required."
  },
  {
    id: 15,
    title: "Construction Manager - India",
    department: "Operations",
    location: "Mumbai, India",
    type: "Full-Time",
    description: "Lead large-scale infrastructure projects across India. Manage local teams, contractors, and ensure adherence to Ironcrest standards and safety protocols."
  },
  {
    id: 16,
    title: "Offshore Engineer - Mumbai High",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-Time",
    description: "Specialized role for offshore oil & gas projects. Experience with subsea operations and platform modifications required."
  },
  {
    id: 17,
    title: "Refinery Process Engineer",
    department: "Engineering",
    location: "Jamnagar, India",
    type: "Full-Time",
    description: "Work on world's largest refinery complex. Process optimization, safety systems, and efficiency improvements for petrochemical operations."
  },
  {
    id: 18,
    title: "Renewable Energy Project Manager",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-Time",
    description: "Manage solar and wind energy projects across India. Coordinate with government agencies and ensure project milestones are met."
  },
  {
    id: 19,
    title: "Structural Design Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-Time",
    description: "Design and review structural components for industrial facilities. Experience with Indian codes (IS) and international standards required."
  },
  {
    id: 20,
    title: "Quality Assurance Inspector",
    department: "Quality",
    location: "Kochi, India",
    type: "Full-Time",
    description: "Conduct quality inspections for petrochemical and offshore projects. Ensure compliance with international safety and quality standards."
  },
  {
    id: 5,
    title: "Full Stack Developer - Construction Software",
    department: "Technology",
    location: "Houston, TX / Remote",
    type: "Full-Time",
    description: "Build and maintain internal construction management platforms. Work with React, Node.js, and cloud infrastructure to create tools for project tracking, resource allocation, and real-time collaboration."
  },
  {
    id: 6,
    title: "BIM Software Engineer",
    department: "Technology",
    location: "Singapore / Hybrid",
    type: "Full-Time",
    description: "Develop custom plugins and integrations for Autodesk Revit, Navisworks, and other BIM platforms. Experience with C#, .NET, and 3D modeling APIs required."
  },
  {
    id: 7,
    title: "DevOps Engineer - Construction Tech",
    department: "Technology",
    location: "Remote",
    type: "Full-Time",
    description: "Manage CI/CD pipelines, cloud infrastructure (AWS/Azure), and containerized deployments for construction software applications. Ensure high availability and security for mission-critical systems."
  },
  {
    id: 8,
    title: "Data Engineer - Project Analytics",
    department: "Technology",
    location: "Dubai, UAE",
    type: "Full-Time",
    description: "Design and implement data pipelines to analyze construction project metrics, costs, and timelines. Build dashboards and predictive models using Python, SQL, and modern BI tools."
  },
  {
    id: 21,
    title: "Site Engineer - Infrastructure",
    department: "Engineering",
    location: "Delhi, India",
    type: "Full-Time",
    description: "On-site engineering support for major infrastructure projects including bridges, highways, and urban development. Field supervision and technical guidance."
  },
  {
    id: 22,
    title: "HSE Officer - Industrial Projects",
    department: "Safety",
    location: "Hyderabad, India",
    type: "Full-Time",
    description: "Health, Safety, and Environment officer for industrial construction projects. Ensure compliance with local and international safety standards."
  },
  {
    id: 9,
    title: "Mobile App Developer - Field Operations",
    department: "Technology",
    location: "Remote / Hybrid",
    type: "Contract",
    description: "Create mobile applications for on-site workers to report progress, safety incidents, and equipment status. Experience with React Native or Flutter and offline-first architecture required."
  },
  {
    id: 10,
    title: "IoT Engineer - Smart Construction",
    department: "Technology",
    location: "Singapore",
    type: "Full-Time",
    description: "Deploy and manage IoT sensors for real-time monitoring of equipment, materials, and site conditions. Work with edge computing, MQTT protocols, and industrial IoT platforms."
  },
  {
    id: 11,
    title: "UI/UX Designer - Construction Software",
    department: "Technology",
    location: "Houston, TX / Remote",
    type: "Full-Time",
    description: "Design intuitive interfaces for construction management tools used by field workers and project managers. Experience with Figma, user research, and designing for industrial environments required."
  },
  {
    id: 12,
    title: "QA Automation Engineer",
    department: "Technology",
    location: "Remote",
    type: "Full-Time",
    description: "Build automated testing frameworks for construction software applications. Expertise in Selenium, Cypress, or Playwright, along with CI/CD integration and performance testing."
  },
  {
    id: 13,
    title: "Cloud Solutions Architect",
    department: "Technology",
    location: "Dubai, UAE / Hybrid",
    type: "Full-Time",
    description: "Design scalable cloud architectures for global construction operations. Lead migration of legacy systems to AWS/Azure and implement microservices for enterprise applications."
  },
  {
    id: 14,
    title: "Cybersecurity Engineer - Industrial Systems",
    department: "Technology",
    location: "Aberdeen, UK",
    type: "Full-Time",
    description: "Protect construction software and industrial control systems from cyber threats. Implement security protocols, conduct penetration testing, and ensure compliance with industry standards."
  },
  {
    id: 23,
    title: "Construction Project Manager",
    department: "Construction",
    location: "Mumbai, India",
    type: "Full-Time",
    description: "Lead large-scale construction projects from initiation to completion. Manage budgets, timelines, teams, and stakeholder communications for complex infrastructure projects."
  },
  {
    id: 24,
    title: "Construction Manager",
    department: "Construction",
    location: "Houston, TX",
    type: "Full-Time",
    description: "Oversee daily construction operations, coordinate subcontractors, and ensure quality standards are met. Experience in industrial and commercial construction required."
  },
  {
    id: 25,
    title: "Construction Site Manager",
    department: "Construction",
    location: "Dubai, UAE",
    type: "Full-Time",
    description: "Manage on-site construction activities, worker safety, and equipment deployment. Ensure compliance with local building codes and safety regulations."
  },
  {
    id: 26,
    title: "Construction Superintendent",
    department: "Construction",
    location: "Singapore",
    type: "Full-Time",
    description: "Supervise construction crews, coordinate trade activities, and maintain project schedules. Strong leadership skills and construction experience essential."
  },
  {
    id: 27,
    title: "Civil Foreman",
    department: "Construction",
    location: "Delhi, India",
    type: "Full-Time",
    description: "Lead skilled tradespeople and laborers on construction sites. Coordinate daily work activities, ensure safety compliance, and maintain quality standards."
  },
  {
    id: 28,
    title: "Site Supervisor",
    department: "Construction",
    location: "Bangalore, India",
    type: "Full-Time",
    description: "Monitor construction progress, supervise workers, and ensure project milestones are achieved. Strong organizational and communication skills required."
  },
  {
    id: 29,
    title: "Quantity Surveyor",
    department: "Construction",
    location: "Aberdeen, UK",
    type: "Full-Time",
    description: "Analyze project costs, prepare estimates, and manage contracts. Experience with construction materials, labor costs, and project budgeting required."
  },
  {
    id: 30,
    title: "Construction Engineer",
    department: "Construction",
    location: "Chennai, India",
    type: "Full-Time",
    description: "Provide technical engineering support for construction projects. Review plans, solve technical problems, and ensure structural integrity of builds."
  },
  {
    id: 31,
    title: "Building Inspector",
    department: "Construction",
    location: "Rotterdam, NL",
    type: "Full-Time",
    description: "Conduct inspections of construction work to ensure compliance with building codes, safety standards, and quality specifications."
  },
  {
    id: 32,
    title: "Heavy Equipment Operator",
    department: "Construction",
    location: "Perth, Australia",
    type: "Full-Time",
    description: "Operate heavy construction equipment including excavators, bulldozers, and cranes. Maintain equipment and ensure safe operation on construction sites."
  },
  {
    id: 33,
    title: "Crane Operator",
    department: "Construction",
    location: "Alberta, Canada",
    type: "Full-Time",
    description: "Operate tower and mobile cranes for lifting and positioning construction materials. Certification and extensive experience with crane operations required."
  },
  {
    id: 34,
    title: "Electrician",
    department: "Construction",
    location: "Hyderabad, India",
    type: "Full-Time",
    description: "Install and maintain electrical systems on construction sites. Knowledge of industrial electrical systems and safety protocols required."
  },
  {
    id: 35,
    title: "Plumber",
    department: "Construction",
    location: "Rio de Janeiro, Brazil",
    type: "Full-Time",
    description: "Install and repair plumbing systems in commercial and industrial buildings. Experience with large-scale plumbing systems and equipment."
  },
  {
    id: 36,
    title: "Welder",
    department: "Construction",
    location: "Kochi, India",
    type: "Full-Time",
    description: "Perform welding operations for structural steel and metal fabrication. Experience with various welding techniques and industrial welding required."
  },
  {
    id: 37,
    title: "HVAC Technician",
    department: "Construction",
    location: "Dubai, UAE",
    type: "Full-Time",
    description: "Install, maintain, and repair heating, ventilation, and air conditioning systems in commercial and industrial facilities."
  }
];
