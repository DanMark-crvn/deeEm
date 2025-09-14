import { IconCloud } from "./components/magicui/icon-cloud";

const localIcons = {
  csharp: "/assets/logos/Visual Studio Code (VS Code).png",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  css3: "/assets/logos/CSS3.png"
};
const slugs = [
  // "typescript",
  "javascript",
  // "dart",
  // "java",
  "react",
  // "flutter",
  // "android",
  "html5",
  "css3",
  "nodedotjs",
  "laravel",
  "css",
  "tailwindcss",
  "csharp",
  "vscode",
  "blazor",
  "bootstrap",
  "mysql",
  "dotnet",
  "php",
  // "express",
  // "nextdotjs",
  // "prisma",
  // "amazonaws",
  // "postgresql",
  // "firebase",
  // "nginx",
  // "vercel",
  // "testinglibrary",
  // "jest",
  // "cypress",
  // "docker",
  "git",
  // "jira",
  "github",
  // "gitlab",
  // "androidstudio",
  // "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => localIcons[slug] ?? `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
