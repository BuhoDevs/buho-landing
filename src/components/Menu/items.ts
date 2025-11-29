export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

export const navItems = [
  { label: "Servicios", id: "services-section" },
  { label: "Proyectos", id: "projects-section" },
  { label: "Contacto", id: "contact-section" },
  { label: "Ubicación", id: "location-section" },
];
