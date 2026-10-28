async function getCV() {
  try {
    const loadCv = await fetch("../data/cv.json");
    const cv = await loadCv.json();

    return cv;
  } catch (err) {
    console.log("Could not load CV:", err);
  }
}

getCV().then((cv) => {
  // skills section
  console.log(cv);

  const skills = cv.skills;
  const mappedSkills = skills.map((skill) => `<li>• ${skill}</li>`);
  const shownSkills = mappedSkills.join("");
  const aboutMe = document.querySelector(".aboutme");
  const skillsText = document.createElement("ul");

  skillsText.className = "skills-text aboutme-text";

  aboutMe.appendChild(skillsText);
  skillsText.innerHTML = shownSkills;

  // work experience

  const workExp = cv.workExperience;

  for (let i = 0; i < workExp.length; i++) {
    const workTitle = workExp[i].title;
    const workDesc = workExp[i].description;
    const workCompany = workExp[i].company;
    const workLoc = workExp[i].location;
    const workType = workExp[i].employmentType;
    const workStart = workExp[i].startDate;
    const workEnd = workExp[i].endDate;

    const workExpUl = document.querySelector(".workexp-list");
    const workExpLi = document.createElement("li");
    const workExpLeft = document.createElement("div");
    const workExpTitle = document.createElement("h2");
    const workExpDesc = document.createElement("p");
    const workExpInfo = document.createElement("div");
    const workExpIconText = document.createElement("p");
    const workExpIcon = document.createElement("img");
    const workExpText2 = document.createElement("p");
    const workExpIcon2 = document.createElement("img");

    const workExpRight = document.createElement("div");
    const workExpTag = document.createElement("p");
    const workExpTagDate = document.createElement("p");

    workExpLi.className = "workexp-container";
    workExpLeft.className = "workexp-left";
    workExpTitle.className = "workexp-title";
    workExpDesc.className = "workexp-desc";
    workExpInfo.className = "workexp-info";
    workExpIconText.className = "icon-text";
    workExpIcon.className = "workexp-icon workexp1-comp";
    workExpText2.className = "icon-text icon-loc";
    workExpIcon2.className = "workexp-icon workexp-loc";

    workExpRight.className = "workexp-right";
    workExpTag.className = "tag-workexp";
    workExpTagDate.className = "date-workexp";

    workExpUl.appendChild(workExpLi);
    workExpLi.appendChild(workExpLeft);
    workExpLeft.appendChild(workExpTitle);
    workExpLeft.appendChild(workExpDesc);
    workExpLeft.appendChild(workExpInfo);
    workExpInfo.appendChild(workExpIconText);
    workExpIconText.appendChild(workExpIcon);
    workExpInfo.appendChild(workExpText2);
    workExpText2.appendChild(workExpIcon2);

    workExpLi.appendChild(workExpRight);
    workExpRight.appendChild(workExpTag);
    workExpRight.appendChild(workExpTagDate);

    workExpTitle.textContent = workTitle;
    workExpDesc.textContent = workDesc;
    workExpIconText.append(workCompany);
    workExpIcon.src = "../assets/company-icon.svg";
    workExpText2.append(workLoc);
    workExpIcon2.src = "../assets/pin-icon.svg";

    workExpTag.textContent = workType;
    workExpTagDate.textContent = `${workStart} - ${workEnd}`;
  }

  // education section
  const edu = cv.education;
  console.log(edu);

  for (let i = 0; i < edu.length; i++) {
    const eduTitle = edu[i].title;
    const eduDesc = edu[i].description;
    const eduCompany = edu[i].school;
    const eduLoc = edu[i].location;
    const eduType = edu[i].educationType;
    const eduStart = edu[i].startDate;
    const eduEnd = edu[i].endDate;

    const eduUl = document.querySelector(".edu-list");
    const eduLi = document.createElement("li");
    const eduLeft = document.createElement("div");
    const eduHtmlTitle = document.createElement("h2");
    const eduHtmlDesc = document.createElement("p");
    const eduInfo = document.createElement("div");
    const eduIconText = document.createElement("p");
    const eduIcon = document.createElement("img");
    const eduIconText2 = document.createElement("p");
    const eduIcon2 = document.createElement("img");

    const eduRight = document.createElement("div");
    const eduTag = document.createElement("p");
    const eduTagDate = document.createElement("p");

    eduLi.className = "edu-container";
    eduLeft.className = "edu-left";
    eduHtmlTitle.className = "edu-title";
    eduHtmlDesc.className = "edu-desc";
    eduInfo.className = "edu-info";
    eduIconText.className = "icon-text";
    eduIcon.className = "edu-icon edu-comp";
    eduIconText2.className = "icon-text icon-loc";
    eduIcon2.className = "edu-icon edu-loc";

    eduRight.className = "edu-right";
    eduTag.className = "tag-edu";
    eduTagDate.className = "date-edu";

    eduUl.appendChild(eduLi);
    eduLi.appendChild(eduLeft);
    eduLeft.appendChild(eduHtmlTitle);
    eduLeft.appendChild(eduHtmlDesc);
    eduLeft.appendChild(eduInfo);
    eduInfo.appendChild(eduIconText);
    eduIconText.appendChild(eduIcon);
    eduInfo.appendChild(eduIconText2);
    eduIconText2.appendChild(eduIcon2);

    eduLi.appendChild(eduRight);
    eduRight.appendChild(eduTag);
    eduRight.appendChild(eduTagDate);

    eduHtmlTitle.textContent = eduTitle;
    eduHtmlDesc.textContent = eduDesc;
    eduIconText.append(eduCompany);
    eduIcon.src = "../assets/company-icon.svg";
    eduIconText2.append(eduLoc);
    eduIcon2.src = "../assets/pin-icon.svg";

    eduTag.textContent = eduType;
    eduTagDate.textContent = `${eduStart} - ${eduEnd}`;
  }
});
