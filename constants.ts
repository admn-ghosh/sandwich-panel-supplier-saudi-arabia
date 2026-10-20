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
 * Product and application images. Captions do not represent named project references.
 */
export const PROJECTS: ProjectItem[] = [
  {
    title: "Sandwich Roof Panel - 10cm",
    description: "Example of a 100mm insulated roof-panel configuration.",
    alt: "100mm insulated sandwich roof panel example",
    imageSrc: "https://ghoshgroups.com/lp/saudi-arabia-sandwich-roof-panel-10cm.jpg" 
  },
  {
    title: "Roof Sandwich Panel",
    description: "Roof-panel application example for industrial and logistics buildings.",
    alt: "Roof sandwich panel application example",
    imageSrc: "https://ghoshgroups.com/lp/roof-sandwich-panel-saudi-arabia.jpg"
  },
  {
    title: "Rockwool Panel",
    description: "Rockwool-core wall-panel example; ratings depend on the tested system.",
    alt: "Rockwool core sandwich panel example",
    imageSrc: "https://ghoshgroups.com/lp/rockwool-sandwich-panel-ksa.jpg"
  },
  {
    title: "PVC Sandwich Panel",
    description: "Corrosion-resistant PVC coated panels for coastal facility projects.",
    alt: "PVC coated sandwich panel example",
    imageSrc: "https://ghoshgroups.com/lp/PVC-sandwich-panel-supplier-saudi-arabia.jpg"
  },
  {
    title: "Aluminum Sandwich Panel",
    description: "Lightweight aluminum-faced panels for modern commercial façades.",
    alt: "Aluminium faced sandwich panel example",
    imageSrc: "https://ghoshgroups.com/lp/aluminum-sandwich-panel-supplier-saudi-araba.jpg"
  },
  {
    title: "50mm Sandwich Panel",
    description: "Standard 50mm insulated wall panels for warehouse partitions.",
    alt: "50mm insulated sandwich wall panel example",
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
    description: "Insulated roof-panel option; fire performance depends on the tested panel system and specification.",
    features: [
      "Can be considered for logistics, retail and other commercial applications.",
      "Confirm the required fire and thermal classifications against the offered technical documents."
    ]
  },
  {
    title: "PIR Wall Sandwich Panel",
    description: "Insulated wall-panel option for commercial buildings, food-processing plants and cold stores.",
    features: [
      "Excellent thermal insulation supports efficient HVAC design in high ambient temperatures.",
      "Confirm authority and insurer requirements against the offered system and test documents."
    ]
  },
  {
    title: "Rockwool Roof Sandwich Panel",
    description: "Roof panel with a Rockwool core for applications with specified fire and acoustic requirements.",
    features: [
      "May be considered for industrial and infrastructure applications, subject to the project specification.",
      "Confirm thermal, acoustic and fire classifications using the offered technical documents."
    ]
  },
  {
    title: "Rockwool Wall Sandwich Panel",
    description: "Rockwool-core wall-panel option for industrial, commercial and institutional buildings.",
    features: [
      "May suit fire-separation, plant-room and façade applications when supported by the specified tested system.",
      "Confirm acoustic, thermal and weather-exposure requirements before ordering."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [];

export const FAQS: FAQItem[] = [
  {
    question: "How do I place an order for Saudi projects?",
    answer: "You can submit an enquiry via the form on this page or contact our KSA projects desk directly via WhatsApp. Once we receive your drawings or quantity requirements, we will issue a formal quotation."
  },
  {
    question: "What is the delivery time for NEOM or Riyadh?",
    answer: "Delivery time depends on the panel specification, quantity, production availability, destination and transport arrangements. The quotation will state the current estimate."
  },
  {
    question: "Do you provide technical documentation for approval?",
    answer: "We can provide available datasheets, test documents and quality documentation for the offered panel system. The buyer and project consultant must confirm the documents required by the relevant Saudi authority."
  },
  {
    question: "What is the difference between PIR and Rockwool?",
    answer: "PIR and Rockwool systems have different thermal, acoustic and fire-performance characteristics. Selection must be based on the offered technical data and the project specification."
  },
  {
    question: "What are your minimum order quantities?",
    answer: "Minimum quantities depend on the panel type, specification, production run and delivery destination. Send the required quantity to our KSA projects desk for confirmation."
  },
  {
    question: "Do you provide warranties on your sandwich panels?",
    answer: "Warranty coverage, if offered, is stated in the written quotation or order documents and depends on the selected product and agreed terms."
  },
  {
    question: "Can you supply panels to remote Saudi locations like NEOM and Al-Ula?",
    answer: "We can assess delivery requests for Saudi destinations, including remote locations. Feasibility, transport method, cost and timing are confirmed in the quotation."
  }
];
