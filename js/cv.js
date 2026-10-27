async function getCV() {
    try {
    const loadCv = await fetch("../data/cv.json")
    const cv = await loadCv.json()

    return cv
    } catch (err) {
        console.log("Could not load CV:", err)
    }
}

getCV().then((cv) => {
    
    console.log(cv)

    const skills = cv.skills
    const mappedSkills = skills.map((skill) => `<li>• ${skill}</li>`)
    const shownSkills = mappedSkills.join("")
    const aboutMe = document.querySelector(".aboutme")
    const skillsText = document.createElement("ul")
    skillsText.className = "aboutme-text"
    skillsText.textContent = mappedSkills
    
    aboutMe.appendChild(skillsText)
    skillsText.innerHTML = shownSkills

})