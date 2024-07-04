function updateProfileInformation(profileData) {
  const profilePhoto = document.getElementById('profile_photo');
  profilePhoto.src = profileData.photo;
  profilePhoto.alt = `Imagem do ${profileData.name}`

  const profileName = document.getElementById('profile_name');
  profileName.innerHTML = `Olá, <br>eu sou o <br>${profileData.name}`;

  const profileJob = document.getElementById('profile_job');
  profileJob.innerHTML = profileData.job;

  const profileCity = document.getElementById('profile_city');
  profileCity.innerHTML = `${profileData.location.city} - ${profileData.location.state}`;

  const profilePhone = document.getElementById('profile_phone');
  profilePhone.innerHTML = `<a href="tel:${profileData.phone}">${profileData.phone}</a>`;

  const profileEmail = document.getElementById('profile_email');
  profileEmail.innerHTML = `<a href="mailto:${profileData.email}">${profileData.email}</a>`;
}

function updateHardSkills(profileData) {
  const hard_skills = document.getElementById('hard_skills');

  const formatedList = profileData.skills.hardSkills.map((skill) => `<img src="${skill.imageLink}" alt="${skill.name}">`);

  hard_skills.innerHTML = formatedList.join('\n')
}

function updateSoftSkills(profileData) {
  const soft_skills = document.getElementById('soft_skills');

  const formatedList = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`);

  soft_skills.innerHTML = formatedList.join('\n')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('languages');

  const formatedList = profileData.languages.map((language) => `<li>${language}</li>`);

  languages.innerHTML = formatedList.join('\n')
}

function updateProjectsList(profileData) {
  const projects_list = document.getElementById('projects_list');

  const formatedList = profileData.portfolio.map((project) => {
            return `<li class="project__item">
                <a href="${project.gitHub}" target="_blank">
                ${project.name}
                  <span>${project.gitHub}</span>
                </a>
              </li>
            `});

  projects_list.innerHTML = formatedList.join('')
}

function updateProfissionalExperience(profileData) {
  const professional_experience = document.getElementById('professional_experience');

  const formatedList = profileData.experiencias.map((experiencia) => {
            return `<li class="experience">
              <h2 class="experience__title">${experiencia.name}</h2>
              <span class="experience__date">${experiencia.time.start} - ${experiencia.time.end}</span>
              <p class="experience__description">${experiencia.description}</p>
            </li>
            `});

  professional_experience.innerHTML = formatedList.join('')
}

(async () => {
  const profileData = await getProfileData();
  updateProfileInformation(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
  updateProjectsList(profileData);
  updateProfissionalExperience(profileData);
})();