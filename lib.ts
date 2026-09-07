export const site = {
  name: "SNaeem IT",
  legalName: "SNaeem IT",
  domain: "snaeemit.xyz",
  url: "https://snaeemit.xyz",
  email: "snaeem.wd@gmail.com",
  tagline: "Web · Cloud · AI",
  // Drop a photo at public/profile.jpg and set this to "/profile.jpg" to show it in the hero.
  profileImage: "",
  headline: "Programmatic SEO, MERN engineering and cloud-scale delivery.",
  description:
    "SNaeem IT builds and scales MERN web applications, programmatic SEO engines, cloud hosting and AI integrations — plus ongoing deployment and IT support.",
  social: {
    github: "https://github.com/mdshohidulislam1486",
  },
  // Trade licence number goes here once issued; it then renders in the concerns note.
  tradeLicense: "",
};

export const concerns = [
  {
    name: "The Tolet BD",
    domain: "thetoletbd.com",
    url: "https://thetoletbd.com",
    shot: "/concern-thetoletbd.png",
    category: "Property rental marketplace",
    since: "Owned & operated by SNaeem IT",
    description:
      "A nationwide to-let platform for house, flat, room, seat, office, shop and hostel rentals. Verified listings across all 8 divisions of Bangladesh, bilingual (Bangla / English), with free ad posting and a credit-based promotion system.",
    tags: ["12.8k+ live ads", "8 divisions", "Bangla + English", "Verified listings"],
  },
  {
    name: "GariRentBD",
    domain: "garirentbd.com",
    url: "https://garirentbd.com",
    shot: "/concern-garirentbd.png",
    category: "Vehicle rental marketplace",
    since: "Owned & operated by SNaeem IT",
    description:
      "A vehicle and driver rental platform covering car rental with driver, bike, CNG, microbus, Hiace, pickup and ambulance service, plus house shifting and office transfer. Admin-approved listings with direct owner contact and no booking fees.",
    tags: ["Admin-approved listings", "10 service types", "Nationwide coverage", "Driver network"],
  },
];

export const mailto = (subject = "Project enquiry — SNaeem IT") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
