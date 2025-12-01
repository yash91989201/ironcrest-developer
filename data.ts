

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
    "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop", // Platform
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMiQf8uiKadPMvSV6VRm3iOuOLGn30UhKKQ&s", // Ocean Rig
    "https://static.wixstatic.com/media/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png/v1/fill/w_720,h_432,al_c,q_85,enc_avif,quality_auto/9d72ca_ed45696868fc4a9eb44f2e33f7150692~mv2.png", // Ship
    "https://www.fordham.edu/media/review/content-assets/migrated/images/fordham_042508_0004.jpg", // Sea
    "https://scpr.brightspotcdn.com/dims4/default/2219ff8/2147483647/strip/true/crop/888x665+0+0/resize/880x659!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2010%2F10%2F12%2F60401696_3973481-fbc4f2c50bef9762fc292ba58178a9dc88626dcb.jpg", // Ship cargo
    "https://www.oberonengineering.com/wp-content/uploads/2024/03/shutterstock_1606208581.webp", // Welding
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqMVkQ26T4572ta92PGl0eoZ_qBbTal2vRQ&s", // Waves rig
    "https://dvzpv6x5302g1.cloudfront.net/AcuCustom/Sitename/DAM/144/web_only_Anita_Garbaldi_source_Petrobras.png", // Engineer
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=800&auto=format&fit=crop"  // Platform night
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
    "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=800&auto=format&fit=crop"  // Complexity
  ],
  "Infrastructure": [
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop", // Bridge
    "https://www.arup.com/globalassets/images/projects/m/metro-tunnel-project/metro-tunnel-project.webp?width=1840&height=1035&quality=80", // Bridge 2
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop", // City
    "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop", // Lights
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWL-f4K7vgOsDTiQ6KqWiNZ2i07mwdAfzy4A7VBJGwPAkmdsftCQvbZrw-Z1A-I77w18IEKnw", // Bridge dusk
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsKFtNWt62MtL2h5tO6fob6Q7h7Bjyd99GQ&s", // Tunnel
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcz4LK3H6g4CmdCY23t1-KYdKsyzaeLkOe1OgtcHze2_kGNMAygExfc95IJj_JYJ0qFpEvbR-c", // Architecture
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBfnadjain7OoZOuIx2DPjSUjB2DpqpzdU1hCqLVdAeXETZyWKXLX-S-cWeXIixYt_oHGPtu-j", // Highway
    "https://images.unsplash.com/photo-1425315283416-2acc50323ee6?q=80&w=800&auto=format&fit=crop", // Road
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
  }
];
