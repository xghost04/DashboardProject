// Function to toggle the user profile dropdown menu
function toggleUserProfile() {
    const userProfileDropdown = document.querySelector('.user-profile .dropdown-menu');
    userProfileDropdown.classList.toggle('show');
}

// Add an event listener to the user profile avatar to toggle the dropdown menu
const userProfileAvatar = document.querySelector('.user-profile img');
userProfileAvatar.addEventListener('click', toggleUserProfile);

// Function to close the user profile dropdown when clicking outside
function closeUserProfileDropdown(event) {
    const userProfileDropdown = document.querySelector('.user-profile .dropdown-menu');
    if (!event.target.matches('.user-profile img')) {
        userProfileDropdown.classList.remove('show');
    }
}

// Add an event listener to the document to close the user profile dropdown when clicking outside
document.addEventListener('click', closeUserProfileDropdown);

// Function to load dynamic data into a widget
function loadWidgetData() {
    const widget = document.querySelector('.widget');
    // Simulate loading data from an API or server
    setTimeout(() => {
        widget.innerHTML = '<h2>Updated Widget</h2><p>Data loaded dynamically.</p>';
    }, 2000);
}

// Add an event listener to the widget to trigger loading data
const widget = document.querySelector('.widget');
widget.addEventListener('click', loadWidgetData);
