export interface ExperienceType {
  title: string;
  company: string;
  time: string;
  companyLocation: string;
  lines: string[];
  companyLink: string;
  locationLink: string;
  imageUrl: string;
}

export const ExperienceData = [
  {
    title: "React Developer Summer Intern",
    company: "Celebal Technologies Pvt. Ltd.",
    time: "May 2024 - Present",
    companyLocation: "Jalpaiguri, West Bengal",
    lines: [
      `Develop an application based on AR textnology to show the Projection Of Swami Vivekananda in a Museum.`,
      `Implement Function For Changing Augmented Image Based On The Selected Option Using C#.`,
      `Explore ways to Augment a 3d object, image, or video in a real-world using Unity and Vuforia Engine.`,
      `Learn about Augment Reality and its concept based on real-life applications.`,
    ],
    companyLink: "https://celebaltech.com/",
    locationLink: "https://maps.app.goo.gl/Sye3zJXb77fvso326",
    imageUrl: "/Celebal.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Infomaticae Technology Pvt. Ltd.",
    time: "June 2023 - August 2023",
    companyLocation: "AK Mukherjee Road, Kolkata",
    lines: [
      `Develop an application based on AR textnology to show the Projection Of Swami Vivekananda in a Museum.`,
      `Implement Function For Changing Augmented Image Based On The Selected Option Using C#.`,
      `Explore ways to Augment a 3d object, image, or video in a real-world using Unity and Vuforia Engine.`,
      `Learn about Augment Reality and its concept based on real-life applications.`,
    ],
    companyLink: "https://infomaticae.com/",
    locationLink: "https://maps.app.goo.gl/bNqFqxKp4fn92Wuu9",
    imageUrl: "/Infomaticae.jpeg",
  },
];
