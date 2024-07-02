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



(async () => {
  const profileData = await getProfileData();
  updateProfileInformation(profileData);
})();