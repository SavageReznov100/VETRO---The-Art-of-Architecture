import ProjectImage1 from "../assets/Images/Portfolio/image-1.webp";
import ProjectImage2 from "../assets/Images/Portfolio/image-2.webp";
import ProjectImage3 from "../assets/Images/Portfolio/image-3.webp";
import design from "../assets/Images/design.png";
import home from "../assets/Images/home.png";
import interiorDesign from "../assets/Images/interior-design.png";
import clientImage1 from "../assets/Images/Clients/2.webp";
import clientImage2 from "../assets/Images/Clients/4.webp";
import clientImage3 from "../assets/Images/Clients/1.webp";
import clientImage4 from "../assets/Images/Clients/3.webp";
import Title1 from "../assets/Title/image-1.webp";
import Title2 from "../assets/Title/image-2.webp";
import Title3 from "../assets/Title/image-3.webp";
import Title4 from "../assets/Title/image-4.webp";

export interface Sidebar {
  id: number;
  content: string;
  link: string;
}
export interface Projects {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}
export interface ArchitecturalProjects {
  id: number;
  brand: string;
  service: string;
  description: string;
}
export interface Count {
  id: number;
  description: string;
  value: number;
  symbol: string;
  subtext: string;
}

export interface About {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}
export interface Title {
  id: number;
  title: string;
  subtitle: string;
  image?: string;
}
export const sidebar: Sidebar[] = [
  {
    id: 1,
    content: "About",
    link: "/",
  },
  {
    id: 2,
    content: "Services",
    link: "/services",
  },
  {
    id: 3,
    content: "Work",
    link: "/work",
  },
  {
    id: 4,
    content: "Clients",
    link: "/clients",
  },
  {
    id: 5,
    content: "Brands",
    link: "/brands",
  },
  {
    id: 6,
    content: "Contact",
    link: "/contact",
  },
];

export const clients: Client[] = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    description:
      "Working with this architecture company was a fantastic experience. Their innovative designs and attention to detail exceeded our expectations. The team was always available to answer our questions and provide updates throughout the project. We highly recommend them to anyone looking for top-notch architectural services.",
    image: clientImage1,
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London, UK",
    description:
      " They delivered a beautiful and functional design that perfectly matched our vision. Their expertise and creativity were evident in every aspect of the project.  The entire process was smooth and stress-free, and the final outcome was beyond our expectations.",
    image: clientImage2,
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    description:
      "From start to finish, the experience was exceptional. The architects took the time to understand our requirements and delivered a design that was both innovative and practical. We are thrilled with the results and would not hesitate to work with them again in the future.",
    image: clientImage3,
  },
  {
    id: 4,
    name: "Aiko Tanaka",
    location: "Tokyo, Japan",
    description:
      "The bespoke design service tailored to our unique style and needs was exceptional. We highly recommend this company , their attention to detail and dedication to creating a sustainable and aesthetically pleasing design was truly impressive.  ",
    image: clientImage4,
  },
];
export const count: Count[] = [
  {
    id: 1,
    description: "Projects",
    value: 300,
    symbol: "+",
    subtext:
      "We've successfully completed over 300 projects , delivering , outstanding results every time",
  },
  {
    id: 2,
    description: "Clients",
    value: 250,
    symbol: "+",
    subtext:
      "Over 200 satisfied clients trust out expertise and exceptional service ",
  },
  {
    id: 3,
    description: "Happy Client ",
    value: 100,
    symbol: "%",
    subtext:
      "Our focus on clients satisfaction ensures a 100% happiness rate with our services ",
  },
  {
    id: 4,
    description: "Commitment",
    value: 100,
    symbol: "%",
    subtext:
      "With our unwavering dedication,we give 110% commitment to every project we undertake",
  },
  {
    id: 5,
    description: "Followers",
    value: 1,
    symbol: "Million",
    subtext:
      "Join our community of 1 million loyal followers and be part of something extraordinary",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Our architectual design ethos integrates innovation , sustainability , and client satisfaction from inception to realization",
    image: design,
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Elevate your interior spaces with our bespoke design service tailore to your unique style and needs.",
    image: home,
  },
  {
    id: 3,
    title: "Exterior Design",
    description:
      "From landscaping to architrctural detailing , our exterior design service crafts outdoor spaces that captivate.",
    image: interiorDesign,
  },
];

export const projects: Projects[] = [
  {
    id: 1,
    name: "Elysium Towers",
    location: "New York, USA",
    description:
      "Founded in 2007, Elysium Towers is renowned for cutting-edge designs and sustainable practices. We create iconic structures blending functionality with aesthetic appeal.",
    image: ProjectImage1,
  },
  {
    id: 2,
    name: "Aether Heights",
    location: "London, UK",
    description:
      "Since 2007, Aether Heights has led architectural innovation, delivering bespoke solutions that redefine urban landscapes with visionary design and craftsmanship.",
    image: ProjectImage2,
  },
  {
    id: 3,
    name: "Zenith Arc",
    location: "Tokyo, Japan",
    description:
      "Established in 2007, Zenith Arc creates architectural masterpieces that push design boundaries, blending modern aesthetics with practical functionality.",
    image: ProjectImage3,
  },
];

export const architectureProjects: ArchitecturalProjects[] = [
  {
    id: 1,
    brand: "Woolworths",
    service: "Research - Strategy",
    description:
      "Working closely with Woolworths within a SPRINT framework, we undertook extensive primary and secondary user research as well as user experience testing with the client's desired target audience. The result was a tested and validated savings and budgeting proposition.",
  },
  {
    id: 2,
    brand: "Amazon",
    service: "Design - Concept",
    description:
      "Collaborated with Amazon to create innovative and sustainable architectural concepts for their new fulfillment center, ensuring maximum efficiency and employee well-being.",
  },
  {
    id: 3,
    brand: "Tesla",
    service: "Sustainability - Consultation",
    description:
      "Consulted with Tesla on the development of eco-friendly office spaces, incorporating renewable energy systems and sustainable materials into the design.",
  },
  {
    id: 4,
    brand: "Apple",
    service: "Interior Design - Strategy",
    description:
      "Worked alongside Apple to design cutting-edge, user-centered office interiors that align with their brand ethos of innovation and simplicity.",
  },
  {
    id: 5,
    brand: "Microsoft",
    service: "Urban Design - Planning",
    description:
      "Led urban design and master planning initiatives for Microsoft’s new campus, focusing on creating an integrated work-life environment that fosters creativity.",
  },
  {
    id: 6,
    brand: "Nike",
    service: "Architecture - Visualization",
    description:
      "Created high-quality visualizations for Nike’s global headquarters expansion, focusing on dynamic, flexible spaces that enhance employee collaboration and creativity.",
  },
  {
    id: 7,
    brand: "Google",
    service: "User Experience - Testing",
    description:
      "Partnered with Google to conduct in-depth user experience testing on new office layouts, ensuring a functional and comfortable environment for their team.",
  },
  {
    id: 8,
    brand: "Coca-Cola",
    service: "Brand Strategy - Architecture",
    description:
      "Designed a state-of-the-art headquarters for Coca-Cola that embodies their brand’s commitment to sustainability, community engagement, and innovation.",
  },
  {
    id: 9,
    brand: "Netflix",
    service: "Workplace Design - Innovation",
    description:
      "Worked with Netflix to create a next-generation workplace design that promotes flexibility, creativity, and collaboration in a dynamic entertainment environment.",
  },
];

export const title: Title[] = [
  {
    id: 1,
    title: "Expert Architectural Insights",
    subtitle:
      "Gain expert guidance to craft visionary architectural designs. Learn from industry leaders who bring years of experience to every project.",
    image: Title2,
  },
  {
    id: 2,
    title: " Customized Designs",
    subtitle:
      "Explore personalized solutions that bring your architectural ideas to life. From concept to construction, we tailor every detail to fit your vision.",
    image: Title4,
  },
  {
    id: 3,
    title: "Thriving Design Community",
    subtitle:
      "Engage with a vibrant community of architects and designers. Share ideas, collaborate on projects, and stay inspired by the latest trends.",
    image: Title1,
  },
  {
    id: 4,
    title: "Leading the Industry",
    subtitle:
      "Stay at the forefront of architectural innovation and excellence. Keep up with cutting-edge techniques and groundbreaking designs shaping the future.",
    image: Title3,
  },
];
