document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.minHeight = "100vh";
document.body.style.background = "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "'Segoe UI', Arial, sans-serif";

// Container
const container = document.createElement('div');
container.style.background = "#fff8e1";
container.style.borderRadius = "24px";
container.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)";
container.style.padding = "48px 36px";
container.style.textAlign = "center";
container.style.minWidth = "320px";
container.style.maxWidth = "360px";
container.style.position = "relative";

// Cake image
const cake = document.createElement('img');
cake.src = "https://cdn.pixabay.com/photo/2017/01/06/19/15/birthday-1958681_1280.png";
cake.alt = "Birthday Cake";
cake.style.width = "120px";
cake.style.marginBottom = "24px";
cake.style.userSelect = "none";
cake.style.animation = "bounce 1s infinite alternate";
container.appendChild(cake);

// Add bounce keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce { to { transform: translateY(-16px); } }
.hbd-text {
  display: none;
  font-size: 2rem;
  color: #ff6f61;
  font-weight: bold;
  margin-top: 24px;
  opacity: 0;
  transform: scale(0.7);
  text-shadow: 0 2px 8px #fcb69f55;
  transition: opacity 0.8s, transform 0.8s;
}
.hbd-text.show {
  display: block;
  opacity: 1;
  transform: scale(1);
  animation: fadeInScale 1.2s;
}
@keyframes fadeInScale {
  0% { opacity: 0; transform: scale(0.7);}
  100% { opacity: 1; transform: scale(1);}
}
button {
  background: linear-gradient(90deg, #ff6f61 0%, #fcb69f 100%);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 14px 32px;
  cursor: pointer;
  box-shadow: 0 4px 16px #fcb69f55;
  margin-bottom: 24px;
  transition: background 0.2s, transform 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #ff8a65 0%, #ffd6c0 100%);
  transform: scale(1.05);
}
audio { display: none; }
`;
document.head.appendChild(style);

// Button
const btn = document.createElement('button');
btn.id = "surpriseBtn";
btn.textContent = "Pencet aku 🎉";
container.appendChild(btn);

// HBD Text
const hbdText = document.createElement('div');
hbdText.id = "hbdText";
hbdText.className = "hbd-text";
hbdText.textContent = "Happy Birthday To Me!";
container.appendChild(hbdText);

// Audio
const song = document.createElement('audio');
song.id = "hbdSong";
song.src = "https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa3b7b.mp3";
container.appendChild(song);

// Append container to body
document.body.appendChild(container);

// Button event
btn.addEventListener('click', function() {
  hbdText.classList.add('show');
  song.currentTime = 0;
  song.play();

  // Confetti sederhana
  for(let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.width = '12px';
    confetti.style.height = '12px';
    confetti.style.background = `hsl(${Math.random() * 360},80%,60%)`;
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = 9999;
    confetti.style.transition = 'top 2s linear';
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = '100vh';
    }, 10);

    setTimeout(() => {
      confetti.remove();
    }, 2100);
  }
});