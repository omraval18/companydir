export type Company = {
  id: number;
  name: string;
  location: string;
  industry: string;
  employees: number;
  founded: number;
  revenue: string;
  description: string;
};

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: "TechVision Inc.",
    location: "San Francisco, CA",
    industry: "Technology",
    employees: 1250,
    founded: 2010,
    revenue: "$125M",
    description: "Leading AI and machine learning solutions provider"
  },
  {
    id: 2,
    name: "GlobalTrade Solutions",
    location: "New York, NY",
    industry: "Finance",
    employees: 3400,
    founded: 2005,
    revenue: "$450M",
    description: "International trading platform and financial services"
  },
  {
    id: 3,
    name: "HealthFirst Medical",
    location: "Boston, MA",
    industry: "Healthcare",
    employees: 890,
    founded: 2015,
    revenue: "$78M",
    description: "Digital healthcare and telemedicine solutions"
  },
  {
    id: 4,
    name: "EcoEnergy Corp",
    location: "Austin, TX",
    industry: "Energy",
    employees: 2100,
    founded: 2012,
    revenue: "$340M",
    description: "Renewable energy and sustainable power solutions"
  },
  {
    id: 5,
    name: "DataStream Analytics",
    location: "Seattle, WA",
    industry: "Technology",
    employees: 670,
    founded: 2018,
    revenue: "$95M",
    description: "Big data analytics and business intelligence"
  },
  {
    id: 6,
    name: "RetailPro Networks",
    location: "Chicago, IL",
    industry: "Retail",
    employees: 5600,
    founded: 2008,
    revenue: "$890M",
    description: "E-commerce and retail management platform"
  },
  {
    id: 7,
    name: "AutoDrive Systems",
    location: "Detroit, MI",
    industry: "Automotive",
    employees: 1800,
    founded: 2016,
    revenue: "$210M",
    description: "Autonomous vehicle technology and systems"
  },
  {
    id: 8,
    name: "CloudNine Services",
    location: "San Jose, CA",
    industry: "Technology",
    employees: 920,
    founded: 2014,
    revenue: "$145M",
    description: "Cloud infrastructure and managed services"
  },
  {
    id: 9,
    name: "BioMed Innovations",
    location: "San Diego, CA",
    industry: "Healthcare",
    employees: 1450,
    founded: 2011,
    revenue: "$198M",
    description: "Biotechnology and pharmaceutical research"
  },
  {
    id: 10,
    name: "FinanceHub Group",
    location: "Charlotte, NC",
    industry: "Finance",
    employees: 2800,
    founded: 2009,
    revenue: "$425M",
    description: "Banking and financial technology solutions"
  },
  {
    id: 11,
    name: "AgriTech Solutions",
    location: "Des Moines, IA",
    industry: "Agriculture",
    employees: 540,
    founded: 2017,
    revenue: "$67M",
    description: "Smart farming and agricultural technology"
  },
  {
    id: 12,
    name: "MediaWorks Digital",
    location: "Los Angeles, CA",
    industry: "Media",
    employees: 1100,
    founded: 2013,
    revenue: "$156M",
    description: "Digital media production and streaming services"
  },
  {
    id: 13,
    name: "CyberSecure Pro",
    location: "Washington, DC",
    industry: "Technology",
    employees: 780,
    founded: 2015,
    revenue: "$112M",
    description: "Cybersecurity and threat intelligence solutions"
  },
  {
    id: 14,
    name: "BuildSmart Construction",
    location: "Houston, TX",
    industry: "Construction",
    employees: 3200,
    founded: 2006,
    revenue: "$520M",
    description: "Commercial construction and project management"
  },
  {
    id: 15,
    name: "FoodTech Ventures",
    location: "Portland, OR",
    industry: "Food & Beverage",
    employees: 890,
    founded: 2019,
    revenue: "$84M",
    description: "Food technology and sustainable packaging"
  },
  {
    id: 16,
    name: "TransLogistics Global",
    location: "Atlanta, GA",
    industry: "Logistics",
    employees: 4100,
    founded: 2007,
    revenue: "$675M",
    description: "Supply chain and logistics management"
  },
  {
    id: 17,
    name: "EduTech Academy",
    location: "Philadelphia, PA",
    industry: "Education",
    employees: 620,
    founded: 2016,
    revenue: "$72M",
    description: "Online learning platforms and educational technology"
  },
  {
    id: 18,
    name: "GameForge Studios",
    location: "San Francisco, CA",
    industry: "Entertainment",
    employees: 450,
    founded: 2018,
    revenue: "$58M",
    description: "Video game development and publishing"
  },
  {
    id: 19,
    name: "LegalTech Partners",
    location: "New York, NY",
    industry: "Legal",
    employees: 340,
    founded: 2020,
    revenue: "$45M",
    description: "Legal technology and case management software"
  },
  {
    id: 20,
    name: "AeroSpace Dynamics",
    location: "Denver, CO",
    industry: "Aerospace",
    employees: 2500,
    founded: 2010,
    revenue: "$389M",
    description: "Aerospace engineering and satellite systems"
  },
  {
    id: 21,
    name: "FashionForward Group",
    location: "Miami, FL",
    industry: "Retail",
    employees: 1900,
    founded: 2012,
    revenue: "$234M",
    description: "Fashion retail and e-commerce platform"
  },
  {
    id: 22,
    name: "InsureTech Solutions",
    location: "Hartford, CT",
    industry: "Finance",
    employees: 1560,
    founded: 2014,
    revenue: "$198M",
    description: "Insurance technology and risk management"
  },
  {
    id: 23,
    name: "SmartHome Systems",
    location: "Phoenix, AZ",
    industry: "Technology",
    employees: 820,
    founded: 2017,
    revenue: "$103M",
    description: "Home automation and IoT solutions"
  },
  {
    id: 24,
    name: "PharmaCare Corp",
    location: "Indianapolis, IN",
    industry: "Healthcare",
    employees: 2700,
    founded: 2008,
    revenue: "$412M",
    description: "Pharmaceutical distribution and healthcare services"
  },
  {
    id: 25,
    name: "SolarTech Innovations",
    location: "Las Vegas, NV",
    industry: "Energy",
    employees: 1340,
    founded: 2015,
    revenue: "$176M",
    description: "Solar energy systems and renewable technology"
  },
  {
    id: 26,
    name: "TravelHub Network",
    location: "Orlando, FL",
    industry: "Travel",
    employees: 980,
    founded: 2011,
    revenue: "$134M",
    description: "Travel booking and hospitality management"
  },
  {
    id: 27,
    name: "RoboTech Engineering",
    location: "Pittsburgh, PA",
    industry: "Technology",
    employees: 670,
    founded: 2019,
    revenue: "$87M",
    description: "Robotics and automation solutions"
  },
  {
    id: 28,
    name: "PetCare Plus",
    location: "Nashville, TN",
    industry: "Consumer Goods",
    employees: 540,
    founded: 2016,
    revenue: "$69M",
    description: "Pet care products and veterinary services"
  },
  {
    id: 29,
    name: "SportTech Innovations",
    location: "Dallas, TX",
    industry: "Sports",
    employees: 420,
    founded: 2018,
    revenue: "$54M",
    description: "Sports technology and performance analytics"
  },
  {
    id: 30,
    name: "ChemCore Industries",
    location: "Wilmington, DE",
    industry: "Manufacturing",
    employees: 3100,
    founded: 2005,
    revenue: "$498M",
    description: "Chemical manufacturing and industrial solutions"
  },
  {
    id: 31,
    name: "AquaPure Systems",
    location: "Milwaukee, WI",
    industry: "Environmental",
    employees: 760,
    founded: 2013,
    revenue: "$94M",
    description: "Water purification and environmental technology"
  },
  {
    id: 32,
    name: "MusicStream Pro",
    location: "Austin, TX",
    industry: "Entertainment",
    employees: 380,
    founded: 2020,
    revenue: "$42M",
    description: "Music streaming and artist management platform"
  },
  {
    id: 33,
    name: "PropTech Ventures",
    location: "San Francisco, CA",
    industry: "Real Estate",
    employees: 590,
    founded: 2017,
    revenue: "$76M",
    description: "Real estate technology and property management"
  },
  {
    id: 34,
    name: "BioFuel Energy",
    location: "Omaha, NE",
    industry: "Energy",
    employees: 910,
    founded: 2011,
    revenue: "$118M",
    description: "Biofuel production and renewable energy"
  },
  {
    id: 35,
    name: "TextileTech Corp",
    location: "Charlotte, NC",
    industry: "Manufacturing",
    employees: 1450,
    founded: 2009,
    revenue: "$187M",
    description: "Advanced textile manufacturing and materials"
  },
  {
    id: 36,
    name: "VirtualReality Labs",
    location: "Seattle, WA",
    industry: "Technology",
    employees: 520,
    founded: 2019,
    revenue: "$63M",
    description: "Virtual reality and augmented reality solutions"
  },
  {
    id: 37,
    name: "FarmFresh Organics",
    location: "Sacramento, CA",
    industry: "Agriculture",
    employees: 680,
    founded: 2014,
    revenue: "$89M",
    description: "Organic farming and sustainable food production"
  },
  {
    id: 38,
    name: "CryptoVault Securities",
    location: "New York, NY",
    industry: "Finance",
    employees: 290,
    founded: 2021,
    revenue: "$38M",
    description: "Cryptocurrency exchange and blockchain solutions"
  },
  {
    id: 39,
    name: "PrintMedia Solutions",
    location: "Minneapolis, MN",
    industry: "Media",
    employees: 840,
    founded: 2010,
    revenue: "$106M",
    description: "Digital printing and media production services"
  },
  {
    id: 40,
    name: "DroneDelivery Services",
    location: "San Diego, CA",
    industry: "Logistics",
    employees: 460,
    founded: 2018,
    revenue: "$57M",
    description: "Drone delivery and aerial logistics solutions"
  },
  {
    id: 41,
    name: "WellnessTech Group",
    location: "Boulder, CO",
    industry: "Healthcare",
    employees: 730,
    founded: 2016,
    revenue: "$92M",
    description: "Wellness apps and health monitoring technology"
  },
  {
    id: 42,
    name: "SteelWorks Manufacturing",
    location: "Cleveland, OH",
    industry: "Manufacturing",
    employees: 2300,
    founded: 2007,
    revenue: "$356M",
    description: "Steel production and metal fabrication"
  },
  {
    id: 43,
    name: "EventPro Management",
    location: "Las Vegas, NV",
    industry: "Entertainment",
    employees: 650,
    founded: 2015,
    revenue: "$81M",
    description: "Event management and conference planning"
  },
  {
    id: 44,
    name: "NanoTech Materials",
    location: "Cambridge, MA",
    industry: "Technology",
    employees: 380,
    founded: 2020,
    revenue: "$46M",
    description: "Nanotechnology and advanced materials research"
  },
  {
    id: 45,
    name: "OceanFreight Lines",
    location: "Seattle, WA",
    industry: "Logistics",
    employees: 1890,
    founded: 2009,
    revenue: "$289M",
    description: "International shipping and freight forwarding"
  },
  {
    id: 46,
    name: "BakeryTech Systems",
    location: "Portland, OR",
    industry: "Food & Beverage",
    employees: 420,
    founded: 2017,
    revenue: "$52M",
    description: "Commercial baking equipment and automation"
  },
  {
    id: 47,
    name: "QuantumCompute Inc.",
    location: "Palo Alto, CA",
    industry: "Technology",
    employees: 310,
    founded: 2021,
    revenue: "$39M",
    description: "Quantum computing research and development"
  },
  {
    id: 48,
    name: "GreenBuild Architects",
    location: "Portland, OR",
    industry: "Construction",
    employees: 560,
    founded: 2013,
    revenue: "$71M",
    description: "Sustainable architecture and green building design"
  },
  {
    id: 49,
    name: "PackagePro Logistics",
    location: "Memphis, TN",
    industry: "Logistics",
    employees: 2900,
    founded: 2006,
    revenue: "$445M",
    description: "Package delivery and warehouse management"
  },
  {
    id: 50,
    name: "AIAssist Technologies",
    location: "San Francisco, CA",
    industry: "Technology",
    employees: 890,
    founded: 2019,
    revenue: "$114M",
    description: "AI-powered business automation and assistants"
  },
  {
    id: 51,
    name: "CleanEnergy Solutions",
    location: "Denver, CO",
    industry: "Energy",
    employees: 1120,
    founded: 2014,
    revenue: "$147M",
    description: "Clean energy consulting and implementation"
  },
  {
    id: 52,
    name: "MobilePay Systems",
    location: "San Jose, CA",
    industry: "Finance",
    employees: 670,
    founded: 2016,
    revenue: "$86M",
    description: "Mobile payment solutions and digital wallets"
  },
  {
    id: 53,
    name: "LuxuryHotels Group",
    location: "Miami, FL",
    industry: "Travel",
    employees: 3500,
    founded: 2008,
    revenue: "$578M",
    description: "Luxury hotel chain and hospitality services"
  },
  {
    id: 54,
    name: "DataGuard Security",
    location: "Austin, TX",
    industry: "Technology",
    employees: 540,
    founded: 2018,
    revenue: "$68M",
    description: "Data security and privacy compliance solutions"
  },
  {
    id: 55,
    name: "VitaminPlus Health",
    location: "Los Angeles, CA",
    industry: "Healthcare",
    employees: 780,
    founded: 2012,
    revenue: "$99M",
    description: "Nutritional supplements and wellness products"
  },
  {
    id: 56,
    name: "AeroLogistics Express",
    location: "Louisville, KY",
    industry: "Logistics",
    employees: 2400,
    founded: 2010,
    revenue: "$367M",
    description: "Air freight and express delivery services"
  },
  {
    id: 57,
    name: "CraftBrew Distributors",
    location: "Portland, OR",
    industry: "Food & Beverage",
    employees: 320,
    founded: 2015,
    revenue: "$41M",
    description: "Craft beer distribution and brewery services"
  },
  {
    id: 58,
    name: "WearableTech Innovations",
    location: "San Francisco, CA",
    industry: "Technology",
    employees: 470,
    founded: 2019,
    revenue: "$59M",
    description: "Wearable technology and fitness devices"
  },
  {
    id: 59,
    name: "MarineShipping Corp",
    location: "Norfolk, VA",
    industry: "Logistics",
    employees: 1650,
    founded: 2009,
    revenue: "$254M",
    description: "Marine shipping and port logistics"
  },
  {
    id: 60,
    name: "3DPrint Solutions",
    location: "Detroit, MI",
    industry: "Manufacturing",
    employees: 590,
    founded: 2016,
    revenue: "$74M",
    description: "3D printing services and additive manufacturing"
  },
  {
    id: 61,
    name: "CloudStorage Plus",
    location: "Seattle, WA",
    industry: "Technology",
    employees: 720,
    founded: 2014,
    revenue: "$91M",
    description: "Cloud storage and data backup solutions"
  },
  {
    id: 62,
    name: "BioGenetics Research",
    location: "Boston, MA",
    industry: "Healthcare",
    employees: 950,
    founded: 2011,
    revenue: "$126M",
    description: "Genetic research and personalized medicine"
  },
  {
    id: 63,
    name: "ElectricVehicle Motors",
    location: "Fremont, CA",
    industry: "Automotive",
    employees: 2100,
    founded: 2013,
    revenue: "$321M",
    description: "Electric vehicle manufacturing and batteries"
  },
  {
    id: 64,
    name: "DigitalMarketing Hub",
    location: "New York, NY",
    industry: "Media",
    employees: 880,
    founded: 2015,
    revenue: "$109M",
    description: "Digital marketing and advertising services"
  },
  {
    id: 65,
    name: "SmartCity Systems",
    location: "Chicago, IL",
    industry: "Technology",
    employees: 1340,
    founded: 2017,
    revenue: "$172M",
    description: "Smart city infrastructure and IoT solutions"
  },
  {
    id: 66,
    name: "OrganicCosmetics Co",
    location: "Los Angeles, CA",
    industry: "Consumer Goods",
    employees: 620,
    founded: 2018,
    revenue: "$78M",
    description: "Organic beauty products and cosmetics"
  },
  {
    id: 67,
    name: "TelemedicineNow",
    location: "Phoenix, AZ",
    industry: "Healthcare",
    employees: 540,
    founded: 2020,
    revenue: "$66M",
    description: "Telemedicine platform and virtual consultations"
  },
  {
    id: 68,
    name: "InvestTech Partners",
    location: "New York, NY",
    industry: "Finance",
    employees: 980,
    founded: 2012,
    revenue: "$137M",
    description: "Investment management and robo-advisory"
  },
  {
    id: 69,
    name: "RecycleTech Solutions",
    location: "San Francisco, CA",
    industry: "Environmental",
    employees: 490,
    founded: 2016,
    revenue: "$62M",
    description: "Recycling technology and waste management"
  },
  {
    id: 70,
    name: "AviationTech Services",
    location: "Dallas, TX",
    industry: "Aerospace",
    employees: 1780,
    founded: 2010,
    revenue: "$273M",
    description: "Aviation maintenance and aerospace services"
  },
  {
    id: 71,
    name: "SmartRetail Systems",
    location: "Seattle, WA",
    industry: "Retail",
    employees: 1230,
    founded: 2014,
    revenue: "$159M",
    description: "Retail automation and point-of-sale systems"
  },
  {
    id: 72,
    name: "UrbanDevelopment Corp",
    location: "New York, NY",
    industry: "Real Estate",
    employees: 2500,
    founded: 2007,
    revenue: "$456M",
    description: "Urban real estate development and investment"
  },
  {
    id: 73,
    name: "TelecomNetwork Pro",
    location: "Atlanta, GA",
    industry: "Technology",
    employees: 3200,
    founded: 2009,
    revenue: "$512M",
    description: "Telecommunications infrastructure and services"
  },
  {
    id: 74,
    name: "CoffeeChain Ventures",
    location: "Seattle, WA",
    industry: "Food & Beverage",
    employees: 4800,
    founded: 2006,
    revenue: "$689M",
    description: "Coffee shop chain and beverage distribution"
  },
  {
    id: 75,
    name: "SoftwareDev Solutions",
    location: "Austin, TX",
    industry: "Technology",
    employees: 1560,
    founded: 2013,
    revenue: "$203M",
    description: "Custom software development and consulting"
  }
];

export const industries = [
  "All",
  "Technology",
  "Finance",
  "Healthcare",
  "Energy",
  "Retail",
  "Automotive",
  "Media",
  "Construction",
  "Food & Beverage",
  "Logistics",
  "Education",
  "Entertainment",
  "Legal",
  "Aerospace",
  "Travel",
  "Consumer Goods",
  "Sports",
  "Manufacturing",
  "Environmental",
  "Real Estate",
  "Agriculture"
];

export const locations = [
  "All",
  "San Francisco, CA",
  "New York, NY",
  "Boston, MA",
  "Austin, TX",
  "Seattle, WA",
  "Chicago, IL",
  "Detroit, MI",
  "San Jose, CA",
  "San Diego, CA",
  "Los Angeles, CA",
  "Denver, CO",
  "Miami, FL",
  "Portland, OR",
  "Phoenix, AZ",
  "Dallas, TX",
  "Atlanta, GA"
];
