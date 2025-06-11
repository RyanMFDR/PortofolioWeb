import mbg from "../assets/mbg.jpg";
import binky from "../assets/binky.jpg";
import wicara from "../assets/wicara.jpg";
import rimera from "../assets/rimera.png";
import hr from "../assets/hr.jpg";
import topic from "../assets/topicModelling.jpg";

export const projectsData = [
  {
    name: "Topic Modelling with BERTopic",
    description: "Topic Trend Analysis in PTIIK Journals using BERTopic",
    technologies: ["BERTopic", "Python", "Docker"],
    githubUrl: "https://github.com/RyanMFDR/MLOPs",
    liveUrl: null,
    imageUrl: topic,
  },
  {
    name: "KNN Sentiment Analysis",
    description:
      "Analyzing sentiment toward one of the government's recently discussed policies, namely 'Makan Bergizi Gratis",
    technologies: ["KNN", "Python", "Text Mining"],
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: null,
    imageUrl: mbg,
  },
  {
    name: "BINKY (Chatbot🦙)",
    description:
      "AI-powered chatbot system designed specifically for library services",
    technologies: ["LLama 2", "Hugging Face", "Streamlit"],
    githubUrl: "https://github.com/dayangalyssa/Binky",
    liveUrl: null,
    imageUrl: binky,
  },
  {
    name: "Mobile HR Management App",
    description:
      "A simple mobile application built using React Native with Expo, designed for employee management, project tracking, and user profiling.",
    technologies: ["React Native", "TypeScript", "React Navigation"],
    githubUrl: "https://github.com/RyanMFDR/MobileTest",
    liveUrl: null,
    imageUrl: hr,
  },
  {
    name: "WICARA",
    description:
      "Real-time chat application with rooms, file sharing, and emoji support.",
    technologies: ["Figma", "UX/UI", "UX Research"],
    githubUrl: null,
    liveUrl:
      "https://www.figma.com/proto/hHcrFjW07XF0kCBckW0pbB/Wicara?node-id=91-255&starting-point-node-id=91%3A255",
    imageUrl: wicara,
  },
  {
    name: "RIMERA",
    description:
      "Personal finance management tool with budgeting and expense tracking features.",
    technologies: ["Figma", "Design Thinking", "UX Research"],
    liveUrl:
      "https://www.figma.com/proto/aFjIx3OEPk9Rgt8HmkCqP9/Anu-eee-ITCC-OneShot?node-id=37648-20&p=f&t=kj5RZv4UiRiuOB4b-1&scaling=contain&content-scaling=fixed&starting-point-node-id=37648%3A20&show-proto-sidebar=1",
    imageUrl: rimera,
  },
];
