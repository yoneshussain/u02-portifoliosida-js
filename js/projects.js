const API_URL = "https://api.github.com/users/yoneshussain/repos";
const projectsList = document.querySelector(".projects");
const projectsSection = document.querySelector(".projects-section");

async function getProjects() {
  const response = await fetch(API_URL);
  const status = response.status;

  if (!response.ok) {
    throw new Error(`Failed to load projects from GitHub: ${status}`);
  }

  const projects = await response.json();

  if (!Array.isArray(projects)) {
    throw new Error("Invalid GitHub response");
  }

  return projects;
}

function createProjectCard(project, imageNumber) {
  const projectName = project.name;
  let projectDesc = project.description || "This project has no description.";
  const projectLanguage = project.language ?? "Not specified";
  let projectPreview = project.homepage;
  const projectCode = project.html_url;

  const projectCard = createElement("li", "project");
  const projectImg = createElement("img", "project-image");
  const projectTitle = createElement("h2", "project-title", projectName);
  const projectDescription = createElement("p", "project-desc", projectDesc);
  const languageInfo = createElement("p", "project-ts");
  const languageLabel = createElement("strong", "", "Main language:");
  const languages = document.createTextNode(` ${projectLanguage}`);
  const projectLinks = createElement("div", "project-links");
  const livePreview = createElement("a", "link-text");
  const previewText = document.createTextNode("Live Preview");
  const viewCode = createElement("a", "link-text");
  const viewText = document.createTextNode("View Code");
  const chainImg = createElement("img", "chain-img link-img");
  const githubLogo = createElement("img", "link-img");

  if (!projectPreview) {
    livePreview.remove();
  } else {
    livePreview.href = projectPreview;
    projectLinks.appendChild(livePreview);
  }

  projectImg.src = `../assets/project${imageNumber}.jpg`;
  projectImg.alt = "";
  chainImg.src = "../assets/chain.svg";
  chainImg.alt = "";
  githubLogo.src = "../assets/githubicon.png";
  githubLogo.alt = "github logotype";
  livePreview.target = "_blank";
  livePreview.rel = "noopener noreferrer";
  viewCode.target = "_blank";
  viewCode.rel = "noopener noreferrer";
  viewCode.href = projectCode;

  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(languageInfo);
  languageInfo.append(languageLabel, languages);
  projectCard.appendChild(projectLinks);
  projectLinks.appendChild(viewCode);
  livePreview.append(chainImg, previewText);
  viewCode.append(githubLogo, viewText);

  return projectCard;
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);

  element.className = className;
  element.textContent = text;

  return element;
}

async function initProjects() {
  const loading = createElement(
    "p",
    "no-projects title",
    "Loading projects...",
  );
  projectsSection.appendChild(loading);
  try {
    const projects = await getProjects();
    console.log(projects);

    if (projects.length === 0) {
      const noProjects = createElement(
        "p",
        "no-projects title",
        "No projects available",
      );
      projectsSection.appendChild(noProjects);
    }

    let imageNumber = 1;

    for (const project of projects) {
      const card = createProjectCard(project, imageNumber);

      projectsList.appendChild(card);

      imageNumber++;
      if (imageNumber > 6) {
        imageNumber = 1;
      }
    }
  } catch (err) {
    console.error("Project loading failed:", err);

    const errorMessage = createElement(
      "p",
      "no-projects title",
      "Could not load projects. Please try again later.",
    );

    errorMessage.setAttribute("role", "alert");

    projectsSection.appendChild(errorMessage);
  } finally {
    loading.remove();
  }
}
initProjects();
