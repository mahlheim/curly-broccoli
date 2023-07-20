// Function to fetch and display the user profile
const fetchUserProfile = async () => {
  try {
    const response = await fetch('/api/users/profile');
    if (response.ok) {
      const profile = await response.json();
      displayUserProfile(profile);
    } else {
      throw new Error('Failed to fetch user profile');
    }
  } catch (error) {
    console.error(error);
    // Handle error case, e.g., display an error message
  }
};

// Function to display the user profile data on the page
const displayUserProfile = (profile) => {
  const usernameElement = document.querySelector('.username');
  const emailElement = document.querySelector('.email');
  const passwordElement = document.querySelector('.password');

  usernameElement.textContent = profile.username;
  emailElement.textContent = profile.email;
  passwordElement.textContent = profile.password;
};

// Call fetchUserProfile when the page loads
window.addEventListener('DOMContentLoaded', fetchUserProfile);
  