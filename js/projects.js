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

// async function getProjects() {
//   const projects = localStorage.getItem("projects");

//   return JSON.parse(projects);
// }

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

    let i = 1;

    for (const project of projects) {
      const projectName = project.name;
      let projectDesc = project.description;
      const projectLangs = project.language ?? "Not specified";
      let projectPreview = project.homepage;
      let projectCode = project.html_url;

      if (projectDesc === null) {
        projectDesc = "This project has no description.";
      }

      const htmlContainer = createElement("li", "project");
      const projectImg = createElement("img", "project-image");
      const projectTitle = createElement("h2", "project-title", projectName);
      const projectDescription = createElement(
        "p",
        "project-desc",
        projectDesc,
      );
      const projectTs = createElement("p", "project-ts");
      const strongTs = createElement("strong", "", "Main language:");
      const languages = document.createTextNode(` ${projectLangs}`);
      const projectLinks = createElement("div", "project-links");
      const livePreview = createElement("a", "link-text");
      const previewText = document.createTextNode("Live Preview");
      const viewCode = createElement("a", "link-text");
      const viewText = document.createTextNode("View Code");
      const chainImg = createElement("img", "chain-img link-img");
      const githubLogo = createElement("img", "link-img");

      projectsList.appendChild(htmlContainer);
      htmlContainer.appendChild(projectImg);
      htmlContainer.appendChild(projectTitle);
      htmlContainer.appendChild(projectDescription);
      htmlContainer.appendChild(projectTs);
      projectTs.append(strongTs, languages);
      htmlContainer.appendChild(projectLinks);
      projectLinks.appendChild(livePreview);
      projectLinks.appendChild(viewCode);
      livePreview.append(chainImg, previewText);
      viewCode.append(githubLogo, viewText);


      if (!projectPreview) {
        livePreview.remove();
      } else {
        livePreview.href = projectPreview;
      }

      projectImg.src = `../assets/project${i}.jpg`;
      projectImg.alt = "";
      chainImg.src = "../assets/chain.svg";
      chainImg.alt = "";
      githubLogo.src = "../assets/githubicon.png";
      githubLogo.alt = "github logotype";
      livePreview.href = projectPreview;
      livePreview.target = "_blank";
      livePreview.rel = "noopener noreferrer";
      viewCode.target = "_blank";
      viewCode.rel = "noopener noreferrer";
      viewCode.href = projectCode;

      i++;
      if (i === 7) {
        i = 1;
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
