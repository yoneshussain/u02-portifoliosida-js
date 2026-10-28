const CV_URL = "../data/cv.json";

const workList = document.querySelector(".workexp-list");
const educationList = document.querySelector(".edu-list");
const aboutMe = document.querySelector(".aboutme");

async function getCV() {
  const response = await fetch(CV_URL);

  if (!response.ok) {
    throw new Error(`Failed to load CV: ${response.status}`);
  }

  const cv = await response.json();

  if (
    !cv ||
    !Array.isArray(cv.skills) ||
    !Array.isArray(cv.workExperience) ||
    !Array.isArray(cv.education)
  ) {
    throw new Error("Invalid CV format");
  }

  return cv;
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);

  element.className = className;
  element.textContent = text;

  return element;
}

function createIconText(iconPath, text, className, iconClass) {
  const paragraph = createElement("p", className);
  const icon = createElement("img", iconClass);

  icon.src = iconPath;
  icon.alt = "";

  paragraph.append(icon, document.createTextNode(text ?? ""));

  return paragraph;
}

function renderSkills(skills) {
  const skillsList = createElement("ul", "skills-text aboutme-text");

  for (const skill of skills) {
    const listItem = createElement("li", "skill-list", skill);
    skillsList.appendChild(listItem);
  }

  aboutMe.appendChild(skillsList);
}

function createCVEntry(entry, type) {
  const isWork = type === "workexp";

  const title = entry.title ?? "Untitled";
  const description = entry.description ?? "";
  const org = isWork ? entry.company : entry.school;
  const category = isWork ? entry.employmentType : entry.educationType;

  const item = createElement("li", `${type}-container`);

  const left = createElement("div", `${type}-left`);
  const heading = createElement("h2", `${type}-title`, title);
  const descriptionElement = createElement("p", `${type}-desc`, description);
  const info = createElement("div", `${type}-info`);

  const orgElement = createIconText(
    "../assets/company-icon.svg",
    org,
    "icon-text",
    isWork ? "workexp-icon workexp1-comp" : "edu-icon edu-comp",
  );

  const locationElement = createIconText(
    "../assets/pin-icon.svg",
    entry.location,
    "icon-text icon-loc",
    isWork ? "workexp-icon workexp-loc" : "edu-icon edu-loc",
  );

  info.append(orgElement, locationElement);
  left.append(heading, descriptionElement, info);

  const right = createElement("div", `${type}-right`);

  const categoryElement = createElement("p", `tag-${type}`, category ?? "");

  const start = entry.startDate ?? "Unknown";
  const end = entry.endDate ?? "Present";

  const dateElement = createElement("p", `date-${type}`, `${start} - ${end}`);

  right.append(categoryElement, dateElement);
  item.append(left, right);

  return item;
}

function renderEntries(entries, container, type) {
  if (entries.length === 0) {
    const message = createElement(
      "li",
      "empty-message",
      "No entries available",
    );

    container.appendChild(message);
    return;
  }

  for (const entry of entries) {
    container.appendChild(createCVEntry(entry, type));
  }
}

function showError(message) {
  const error = createElement("p", "cv-error", message);
  error.setAttribute("role", "alert");

  aboutMe.appendChild(error);
}

async function initCV() {
  try {
    const cv = await getCV();

    renderSkills(cv.skills);

    renderEntries(cv.workExperience, workList, "workexp");
    renderEntries(cv.education, educationList, "edu");
  } catch (error) {
    console.log("CV failed", error);

    showError("CV could not be loaded");
  }
}

initCV();
