import { FAQItem, PanelTypeOption, ProductItem, ProjectCityOption, TestimonialItem, ProjectItem } from "./types";

export const CITY_OPTIONS: ProjectCityOption[] = [
  { value: "Riyadh", label: "Riyadh" },
  { value: "Jeddah", label: "Jeddah" },
  { value: "NEOM", label: "NEOM" },
  { value: "Dammam", label: "Dammam" },
  { value: "Al Khobar", label: "Al Khobar" },
  { value: "Mecca", label: "Mecca" },
  { value: "Medina", label: "Medina" },
  { value: "Other", label: "Other" },
];

export const PANEL_OPTIONS: PanelTypeOption[] = [
  { value: "PUR Roof", label: "PUR Roof" },
  { value: "PUR Wall", label: "PUR Wall" },
  { value: "PIR Roof", label: "PIR Roof" },
  { value: "PIR Wall", label: "PIR Wall" },
  { value: "Rockwool Roof", label: "Rockwool Roof" },
  { value: "Rockwool Wall", label: "Rockwool Wall" },
  { value: "Mixed / Not sure", label: "Mixed / Not sure" },
];

/**
 * PROJECT GALLERY DATA
 * Updated with Ghosh Group specific project images for Saudi Arabia projects.
 */
export const PROJECTS: ProjectItem[] = [
  {
    title: "Sandwich Roof Panel - 10cm",
    description: "High-insulation 10cm roof panels delivered to Riyadh industrial site.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - 10cm Sandwich Roof Panel",
    imageSrc: "https://ghoshgroups.com/lp/saudi-arabia-sandwich-roof-panel-10cm.jpg" 
  },
  {
    title: "Roof Sandwich Panel KSA",
    description: "Commercial roof panel installation for logistics hub in Jeddah.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - Roof Sandwich Panel installation",
    imageSrc: "https://ghoshgroups.com/lp/roof-sandwich-panel-saudi-arabia.jpg"
  },
  {
    title: "Rockwool Panel - KSA",
    description: "Fire-rated Rockwool wall system for factory project in Dammam.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - Rockwool Sandwich Panel KSA",
    imageSrc: "https://ghoshgroups.com/lp/rockwool-sandwich-panel-ksa.jpg"
  },
  {
    title: "PVC Sandwich Panel",
    description: "Corrosion-resistant PVC coated panels for coastal facility projects.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - PVC Sandwich Panel Supplier",
    imageSrc: "https://ghoshgroups.com/lp/PVC-sandwich-panel-supplier-saudi-arabia.jpg"
  },
  {
    title: "Aluminum Sandwich Panel",
    description: "Lightweight aluminum-faced panels for modern commercial façades.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - Aluminum Sandwich Panel Supplier",
    imageSrc: "https://ghoshgroups.com/lp/aluminum-sandwich-panel-supplier-saudi-araba.jpg"
  },
  {
    title: "50mm Sandwich Panel",
    description: "Standard 50mm insulated wall panels for warehouse partitions.",
    alt: "Leading sandwich panel supplier in Saudi Arabia - 50mm Sandwich Panel KSA",
    imageSrc: "https://ghoshgroups.com/lp/50mm-sandwich-panel-saudi-arabia.jpg"
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    title: "PUR Roof Sandwich Panel",
    description: "Lightweight insulated roof panel for factories, warehouses and commercial buildings across Saudi Arabia.",
    features: [
      "Strong thermal performance with fast installation and competitive overall cost.",
      "Suitable where energy efficiency and quick roof closure are priorities and standard fire performance is acceptable."
    ]
  },
  {
    title: "PUR Wall Sandwich Panel",
    description: "Versatile wall panel for industrial sheds, boundary walls and service buildings in Saudi climates.",
    features: [
      "Smooth or profiled finishes for clean façades and easy maintenance.",
      "Good option for economical insulated walls with a neat, durable appearance."
    ]
  },
  {
    title: "PIR Roof Sandwich Panel",
    description: "High‑performance roof panel with improved fire resistance compared with standard PUR systems.",
    features: [
      "Preferred for logistics warehouses, retail developments and high‑occupancy buildings in Riyadh, Jeddah and other major cities.",
      "Helps satisfy stricter consultant specifications on fire and thermal performance."
    ]
  },
  {
    title: "PIR Wall Sandwich Panel",
    description: "Fire‑resistant wall panel for commercial buildings, food‑processing plants and cold stores in Saudi Arabia.",
    features: [
      "Excellent thermal insulation supports efficient HVAC design in high ambient temperatures.",
      "Often selected where authorities and insurers require both insulation and enhanced fire performance."
    ]
  },
  {
    title: "Rockwool Roof Sandwich Panel",
    description: "Roof panel with non‑combustible Rockwool core for projects demanding the highest level of fire safety.",
    features: [
      "Suitable for refineries, process plants, power facilities and other critical infrastructure across the Kingdom.",
      "Provides thermal and acoustic insulation while supporting stringent fire‑rating requirements."
    ]
  },
  {
    title: "Rockwool Wall Sandwich Panel",
    description: "Fire‑rated wall panel offering maximum protection for industrial, commercial and institutional buildings.",
    features: [
      "Ideal for fire walls, plant rooms and façades where regulations call for non‑combustible construction.",
      "Delivers good sound reduction and stable performance under high temperatures and harsh weather."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Ghosh Group delivered our sandwich panels on time and within specification. Technical queries were answered quickly, which helped us keep our site schedule.",
    author: "Project Manager – Leading Contractor, Saudi Arabia (PIR roof panels, Riyadh warehouse)"
  },
  {
    quote: "The team supported us with panel selection and provided all documents requested by consultants and authorities. Overall experience was professional.",
    author: "Consultant – Industrial Project, Dammam (Rockwool wall panels)"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I place an order for Saudi projects?",
    answer: "You can submit an enquiry via the form on this page or contact our KSA projects desk directly via WhatsApp. Once we receive your drawings or quantity requirements, we will issue a formal quotation."
  },
  {
    question: "What is the delivery time for NEOM or Riyadh?",
    answer: "Delivery times vary based on quantity and panel type, but we typically dispatch standard orders rapidly from our ISO-certified facility. Our logistics team handles the transport to site."
  },
  {
    question: "Do you provide technical documentation for approval?",
    answer: "Yes, we provide datasheets, test certificates (DCD/Civil Defence compliant), and quality documentation to support consultant and authority approvals in KSA."
  },
  {
    question: "What is the difference between PIR and Rockwool?",
    answer: "PIR offers excellent thermal insulation with good fire resistance. Rockwool is non-combustible and offers the highest fire safety and acoustic performance, often required for critical infrastructure."
  },
  {
    question: "What are your minimum order quantities?",
    answer: "We accommodate projects of all sizes, from small renovations to large industrial facilities. There are no minimum order quantities. Contact our KSA projects desk for volume pricing on large orders."
  },
  {
    question: "Do you provide warranties on your sandwich panels?",
    answer: "Yes, all our sandwich panels come with a 10-year manufacturing warranty covering defects in materials and workmanship. We also provide technical support throughout the panel lifecycle. Terms and conditions apply."
  },
  {
    question: "Can you supply panels to remote Saudi locations like NEOM and Al-Ula?",
    answer: "Absolutely. We have established logistics networks throughout Saudi Arabia, including remote development areas like NEOM, Al-Ula, and other Vision 2030 project sites. We ensure timely delivery with proper documentation and handling."
  }
];