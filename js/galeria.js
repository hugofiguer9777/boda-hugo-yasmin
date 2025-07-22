const imageSources = [
  'galeria/foto1.jpeg',
  'galeria/foto2.jpeg',
  'galeria/foto3.jpeg',
  'galeria/foto4.jpeg',
  'galeria/foto5.jpeg',
  'galeria/foto6.jpeg',
  'galeria/foto7.jpeg'
];

let currentImageIndex = 0;

function openModal(index) {
  currentImageIndex = index;
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImage").src = imageSources[currentImageIndex];
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = imageSources.length - 1;
  if (currentImageIndex >= imageSources.length) currentImageIndex = 0;
  document.getElementById("modalImage").src = imageSources[currentImageIndex];
}

// Cerrar con tecla ESC
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});