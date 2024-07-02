const url = 'https://raw.githubusercontent.com/rogerio22mr/js-developer-portfolio/main/data/profile.json';

async function getProfileData() {
  const rawData = await fetch(url);
  return await rawData.json();
}