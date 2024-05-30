import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import state from "./state.js";

export function forest() {
  let activeTheme = false; // Track the currently active theme

  el.themes.addEventListener('click', (event) => {
    let clickedTheme = event.target.classList.contains('forest') ? 'forest' :
                          event.target.classList.contains('rain') ? 'rain' :
                          event.target.classList.contains('cafet') ? 'cafet' :
                          event.target.classList.contains('fireplace') ? 'fireplace' : null;

    if (clickedTheme === activeTheme){
        document.documentElement.classList.remove(clickedTheme);
        if (activeTheme) {
            sounds[activeTheme].pause(); // Pause the sound
            state[activeTheme + 'Sound'] = false; // Update sound state
        }
        activeTheme = null

    } else{
        if (clickedTheme) { // Handle only valid themes
            
        // Stop the sound of the previously active theme (if any)
        if (activeTheme) {
            sounds[activeTheme].pause(); // Pause the sound
            state[activeTheme + 'Sound'] = false; // Update sound state
        }

        // Update active theme, classes, and sound state/playback
        activeTheme = clickedTheme;

        // Remove all existing themes before applying the new one
        document.documentElement.classList.remove(...document.documentElement.classList);
        document.documentElement.classList.add(clickedTheme);
        
        

        sounds.click.play(); // Play click sound for selection

        state[clickedTheme + 'Sound'] = !state[clickedTheme + 'Sound'];
        sounds[clickedTheme].loop = true;
        if (state[clickedTheme + 'Sound']) {
            sounds[clickedTheme].play();
        } else {
            sounds[clickedTheme].pause();
        }
        }
    }
  });
}
