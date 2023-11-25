async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/davifv22/Portfolio-Dio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}