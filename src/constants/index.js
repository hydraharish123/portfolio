import AI from "../assets/projects/AI.jpg";
import stickynotes from "../assets/projects/stickynotes.jpg";
import network from "../assets/projects/network.jpg";
import pizza from "../assets/projects/pizza.jpg";
import gene from "../assets/projects/gene.jpg";

export const HERO_CONTENT = `I am an enthusiastic second-year undergraduate student in the department of Biotechnology and Bioinformatics at Indian Institute of Technology, Hyderabad, with a strong passion for integrating AI, web development, and biology. Through my studies and projects, I aim to bridge the gap between computational science and biological discoveries, creating impactful solutions that address challenges in bioinformatics, and healthcare.`;

export const ABOUT_TEXT = `With a strong foundation in machine learning, React.js, JavaScript, Flask, Python, R, and various bioinformatics tools, I am committed to integrating cutting-edge technologies to solve real-world biological problems. Additionally, I have developed strong expertise in data structures and algorithms, having solved over 450 problems on LeetCode. This experience has honed my problem-solving skills and enhanced my ability to approach complex challenges with efficiency and precision. My work spans from developing interactive web applications to implementing AI-driven algorithms for analyzing biological datasets. I am particularly passionate about bioinformatics applications, such as proteins, genomic data analysis, and disease prediction models.`;

export const ABOUT_TEXT_2 = `Beyond academics and research, I am an avid football player and actively participate in various competitions, including Inter IIT 2024. Football has instilled in me the values of teamwork, discipline, and resilience—qualities that I bring into my technical and research endeavors.I thrive on collaboration and constantly seek opportunities to apply my technical expertise in innovative ways to advance research and create tools in the field of life sciences.`;
export const EXPERIENCES = [
  {
    year: "March 2025 - Present",
    role: "Undergraduate Research Assistant",
    company: "Indian Institute of Technology, Hyderabad",
    Lab: "Systems Biology and Network Lab",
    description: `Currently working on two separate projects under the supervision of Dr. Abhisek Subramanian. One project involves researching various lung infections in humans, while the other focuses on analyzing the metabolic pathways of organisms. Both projects are ongoing and aim to provide valuable insights into infection mechanisms and metabolic processes.`,
    technologies: ["Web Development", "Database Development", "Visualisations"],
  },
  {
    year: "September 2024 - March 2025",
    role: "Undergraduate Research Assistant",
    company: "Indian Institute of Technology, Hyderabad",
    Lab: "Systems Biology and Network Lab",
    description: `Worked in the Systems Biology and Network Lab under the supervision of Dr. Abhisek Subramanian, conducting in-depth research on horizontal gene transfer by analyzing approximately 200 computational tools. Investigated mechanisms of gene transfer, assessed tool accuracy and functionality, and provided insightful results that contribute to a deeper understanding of horizontal gene transfer in various organisms.`,
    technologies: ["Python", "Linux", "Perl"],
  },
];

export const PROJECTS = [
  {
    title: "Coming Soon on April 30, 2025....",
    image: AI,
    description:
      "Something extraordinary is on the horizon. The project is set to deliver a seamless and intelligent experience that will leave users amazed. Stay tuned as we prepare to unveil a creation that blends functionality, scalability, and brilliance into one remarkable solution",
    technologies: [
      "Javascript",
      "React",
      "Flask",
      "Python",
      "Supabase",
      "TailwindCSS",
      "ReactQuery",
      "Machnine Learning",
      "Deep Learning",
    ],
    link: "#",
  },
  {
    title: "Network Analyser",
    image: network,
    description:
      "A Bioinformatics tool designed for seamless metabolic network visualization and analysis. Users can upload a network file to explore it through an interactive interface, featuring functionalities like layout customization, zooming, panning, extracting sub-graphs and dynamic interactions.",
    technologies: [
      "Javascript",
      "React.js",
      "CytoscapeJS",
      "Flask",
      "StyledComponents",
    ],
    link: "https://github.com/hydraharish123/NetworkAnalyzer",
  },
  {
    title: "Gene-Interaction-Tool",
    image: gene,
    description:
      "A web-based tool to query gene interactions and dependencies from biological datasets. Built using PHP, SQL, and a responsive frontend for seamless user interaction.",
    technologies: ["HTML", "CSS", "php", "phpmyadmin", "MySQL"],
    link: "https://github.com/hydraharish123/BT2053",
  },
  {
    title: "QuickNotes",
    image: stickynotes,
    description:
      "Effortlessly organize your thoughts, tasks, and ideas with this intuitive notes app. It allows users to create, edit, and manage notes in real-time. Featuring a sleek interface and robust functionality. Whether you're brainstorming or planning your day, this application is your perfect companion for staying organized.",
    technologies: ["Javascript", "React.js", "Appwrite", "TailwindCSS"],
    link: "https://github.com/hydraharish123/QuickNotes",
  },
  {
    title: "Pizza Express",
    image: pizza,
    description:
      "Pizza Express makes ordering pizza quick and effortless. Browse the menu, place your order, and get fresh, hot pizza delivered to your doorstep. Enjoy a simple and hassle-free experience! ",
    technologies: ["Javascript", "React.js", "Redux", "TailwindCSS"],
    link: "https://github.com/hydraharish123/pizza-express",
  },
];

export const CONTACT = {
  address: "Indian Institute of Technology, Hyderabad, Sanagareddy ",
  email: "psharish2712@gmail.com",
};
