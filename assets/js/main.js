function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Corps
    ctx.beginPath();
    ctx.fillStyle = '#976f16';
    ctx.fillRect(160, 100, 80, 180); // x, y, largeur, hauteur
    // Bras
    ctx.fillStyle = '#976f16';
    ctx.fillRect(80, 100, 240, 30);
    // Tête
    ctx.fillStyle = '#976f16';
    ctx.arc(200, 70, 46, 0, Math.PI*2, false); // arc(x, y, rayon, angleInitial, angleFinal, antihoraire)
    ctx.fill();
    // Oeil n°1
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(184, 60, 8, 0, Math.PI*2, false);
    ctx.fill();
    // Oeil n°2
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(216, 60, 8, 0, Math.PI*2, false);
    ctx.fill();
    // Bouton violet n°1 (haut)
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.arc(200, 146, 8, 0, Math.PI*2, false);
    ctx.fill();
    // Bouton violet n°2 (bas)
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.arc(200, 180, 8, 0, Math.PI*2, false);
    ctx.fill();
    // Main gauche
    ctx.beginPath();
    ctx.fillStyle = '#976f16';
    ctx.moveTo(80, 100);
    ctx.quadraticCurveTo(50, 115, 80, 130) // quadraticCurveTo(cp1x, cp1y, x, y)
    ctx.fill();
    ctx.closePath();
    // Main droite
    ctx.beginPath();
    ctx.fillStyle = '#976f16';
    ctx.moveTo(320, 100);
    ctx.quadraticCurveTo(356, 115, 320, 130) // quadraticCurveTo(cp1x, cp1y, x, y)
    ctx.fill();
    //  Entre-jambe (courbe)
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.moveTo(210, 250);
    ctx.quadraticCurveTo(200, 225, 190, 250);
    ctx.fill();
    // entre-jambe (rectangle)
    ctx.fillStyle = 'white';
    ctx.fillRect(190, 250, 20, 30); // x, y, largeur, hauteur
    // Pied gauche
    ctx.beginPath();
    ctx.fillStyle = '#976f16';
    ctx.moveTo(190, 280);
    ctx.quadraticCurveTo(175, 300, 160, 280);
    ctx.fill();
    // Pied droit
    ctx.beginPath();
    ctx.fillStyle = '#976f16';
    ctx.moveTo(210,280);
    ctx.quadraticCurveTo(225, 300, 240, 280);
    ctx.fill();
    // Sourcil gauche
    ctx.beginPath();
    ctx.moveTo(174, 47);
    ctx.quadraticCurveTo(184, 37, 194, 47);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white'
    ctx.stroke();
    // Sourcil droit
    ctx.beginPath();
    ctx.moveTo(206, 47);
    ctx.quadraticCurveTo(216, 37, 226, 47);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white'
    ctx.stroke();
    // Bouche (haut)
    ctx.beginPath();
    ctx.moveTo(178, 80);
    ctx.quadraticCurveTo(200, 88, 222, 80);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
    // Bouche (bas)
    ctx.beginPath();
    ctx.moveTo(178, 80);
    ctx.quadraticCurveTo(200, 100, 222, 80);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
}
