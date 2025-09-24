document.addEventListener("DOMContentLoaded", () => {
  const semanasContainer = document.getElementById("semanasContainer");
  if (!semanasContainer) return; // Solo corre en tareas.html

  // Iconos diferentes para cada semana
  const iconosSemanas = [
    "📝", "🎨", "🔧", "📊", "🚀", "💡", "🎯", 
    "🌈", "⚡", "🌟", "🔍", "📈", "🎓", "🏆"
  ];
  
  // Títulos descriptivos para cada semana
  const titulosSemanas = [
    "Semana 1 - Planificación",
    "Semana 2 - Diseño",
    "Semana 3 - Desarrollo",
    "Semana 4 - Análisis",
    "Semana 5 - Implementación",
    "Semana 6 - Innovación",
    "Semana 7 - Optimización",
    "Semana 8 - Creatividad",
    "Semana 9 - Energía",
    "Semana 10 - Brillantez",
    "Semana 11 - Investigación",
    "Semana 12 - Crecimiento",
    "Semana 13 - Aprendizaje",
    "Semana 14 - Éxito"
  ];

  // Crear tarjetas para las 14 semanas
  for (let i = 1; i <= 14; i++) {
    const semanaCard = document.createElement("a");
    semanaCard.href = `semana${i}.html`;
    semanaCard.classList.add("semana-card");
    
    const icono = document.createElement("div");
    icono.classList.add("semana-icon");
    icono.textContent = iconosSemanas[i-1];
    
    const titulo = document.createElement("div");
    titulo.classList.add("semana-title");
    titulo.textContent = titulosSemanas[i-1];
    
    semanaCard.appendChild(icono);
    semanaCard.appendChild(titulo);
    semanasContainer.appendChild(semanaCard);

  }
});