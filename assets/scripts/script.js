// Selection of branches
document.addEventListener("DOMContentLoaded", () => {
    const branchItems = document.querySelectorAll(".branch-locator-items p");
    const mapIframe = document.getElementById("map");

    if(branchItems && mapIframe){
        const mapUrls = {
          "4051 Gordon Baker Rd. Scarborough, ON M1W 2P3": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.1807504322505!2d-79.34041072322796!3d43.81061007109505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d373b2a1e6c9%3A0x8e5854394a5bce26!2sSearchKings!5e0!3m2!1sen!2sca!4v1726233530989!5m2!1sen!2sca",
          "52 Corlett Drive, Ground Floor, Illovo, Sandton, 2196, South Africa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.1587485394026!2d28.0547698!3d-26.133287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d0f273bb31d%3A0x7027f6ab66136ea2!2sSearchKings%20Africa!5e0!3m2!1sen!2sca!4v1726233531234!5m2!1sen!2sca"
        };
      
        branchItems.forEach(item => {
          item.addEventListener("click", () => {
            branchItems.forEach(branch => branch.classList.remove("active"));
            item.classList.add("active");
      
            const selectedAddress = item.innerText.trim();
            if (mapUrls[selectedAddress]) {
              mapIframe.src = mapUrls[selectedAddress];
            } else {
              console.warn("Map URL not found for the selected branch");
            }
          });
          });
    }else{
        console.error("DOM elements not found. Make sure the branch-locator-items and map elements exist in the DOM.");
    }
  
    });


// I made this to showcase the customization of the styles 
const floatingIcon = document.querySelector('.floating-icon');
const themeMenu = document.getElementById('themeMenu');
const themeOptions = document.querySelectorAll('.theme-option');

// Define themes
const themes = {
  default: {
    '--primary': '#0A6579',
    '--secondary': '#F99E15',
    '--accent': '#484848',
    '--neutral': '#ffffff',
    '--neutral-2': '#F5F5F5',
    '--neutral-dark': '#000000',
    '--hero-overlay-color': '#00000093',
  },
  coral: {
   '--primary':' #E76F51',     
   '--secondary':' #2A9D8F',   
   '--accent':' #264653',      
   '--neutral':' #FAFAFA',     
   '--neutral-2':' #EDEDED',   
   '--neutral-3':' #1E1E1E',  
   '--hero-overlay-color':' #00000080', 
  },
  green: {
    '--primary': '#388E3C',
    '--secondary': '#66BB6A',
    '--accent': '#A5D6A7',
    '--neutral': '#ffffff',
    '--neutral-2': '#F1F1F1',
    '--neutral-dark': '#212121',
    '--hero-overlay-color': '#021d0380',
  },
  red: {
    '--primary': '#D32F2F',
    '--secondary': '#FF7043',
    '--accent': '#616161',
    '--neutral': '#ffffff',
    '--neutral-2': '#F1F1F1',
    '--neutral-dark': '#212121',
    '--hero-overlay-color': '#4b1c1c80',
  },
  brown: {
    '--primary': '#6D4C41',
    '--secondary': '#8D6E63',
    '--accent': '#3E2723',
    '--neutral': '#F5F5F5',
    '--neutral-2': '#EFEBE9',
    '--neutral-dark': '#3E2723',
    '--hero-overlay-color': '#3e2723ba',
  },
};

function toggleThemeMenu() {
  themeMenu.style.display = themeMenu.style.display === 'block' ? 'none' : 'block';
}

function applyTheme(theme) {
  const selectedTheme = themes[theme];
  for (const [key, value] of Object.entries(selectedTheme)) {
    document.documentElement.style.setProperty(key, value);
  }
  themeMenu.style.display = 'none'; // Close the menu after applying theme
}

floatingIcon.addEventListener('click', toggleThemeMenu);

themeOptions.forEach(option => {
  option.addEventListener('click', () => {
    applyTheme(option.id.replace('theme-', ''));
  });
});