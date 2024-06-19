export interface ExperienceType {
  title: string;
  company: string;
  time: string;
  companyLocation: string;
  lines: string[];
  companyLink: string;
  locationLink: string;
}

export const ExperienceData = [
  {
    title: "Software Engineer Intern",
    company: "Infomaticae Technology Pvt. Ltd.",
    time: "June 2023 - August 2023",
    companyLocation: "AK Mukherjee Road, Kolkata",
    lines: [
      `Develop an application based on AR textnology to show the <span>Projection Of Swami Vivekananda</span> in a Museum.`,
      `Implement Function For Changing Augmented Image Based On The Selected Option Using C#.`,
      `Learn about Augment Reality and its concept based on real-life applications.`,
      `Explore ways to Augment a 3d object, image, or video in a real-world using Unity and Vuforia Engine.`,
    ],
    companyLink: "https://infomaticae.com/",
    locationLink: "https://maps.app.goo.gl/bNqFqxKp4fn92Wuu9",
  },
];
