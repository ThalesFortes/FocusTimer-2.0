import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import state from "./state.js";

export function toggleMode() {
  let activeTheme = false; // Monitora o tema atualmente ativo
  

  el.themes.addEventListener('click', (event) => {
    let clickedTheme = event.target.classList.contains('forest') ? 'forest' :
                          event.target.classList.contains('rain') ? 'rain' :
                          event.target.classList.contains('cafet') ? 'cafet' :
                          event.target.classList.contains('fireplace') ? 'fireplace' : null;

    if (clickedTheme === activeTheme){
        document.documentElement.classList.remove(clickedTheme);
        if (activeTheme) {
            sounds[activeTheme].pause(); // Pausa o som
            state[activeTheme + 'Sound'] = false; // Atualiza o estado do som
        }
        activeTheme = null

    } else{
        if (clickedTheme) { // Manipula apenas temas válidos
            
        // Para o som do tema anteriormente ativo (se houver)
        if (activeTheme) {
            sounds[activeTheme].pause();// Pausa o som
            state[activeTheme + 'Sound'] = false; // Atualiza o estado do som
        }

        // Atualiza tema ativo, classes e estado/reprodução do som
        activeTheme = clickedTheme;

        // Remove todas as classes de tema existentes antes de aplicar a nova
        document.documentElement.classList.remove(...document.documentElement.classList);
        document.documentElement.classList.add(clickedTheme);

        sounds.click.play(); // Toca o som de clique para seleção

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
