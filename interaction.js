
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.posInitX = 0;
  this.posInitY = 0;
  this.posFinalX = 0;
  this.posFinalY = 0;
  this.isOnClick = false;
	
	// Developper les 3 fonctions gérant les événements
  DnD.prototype.onClick = function(evt) {
    var res = getMousePosition(canvas, evt);
    this.posInitX = res.x;
    this.posInitY = res.y;
    this.isOnClick = true;
    console.log(evt.clientX, evt.clientY);
  }
  
  DnD.prototype.onDrag = function(evt) {
    if (this.isOnClick) {
      var res = getMousePosition(canvas, evt);
      this.posFinalX = res.x;
      this.posFinalY = res.y;
    }
    console.log(evt.clientX, evt.clientY);
  }
  
  DnD.prototype.onUnclick = function(evt) {
    if (this.isOnClick) {
      this.isOnClick = false;
    }
    console.log(evt.clientX, evt.clientY);
  }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.onClick, false);
  canvas.addEventListener('mousemove', this.onDrag, false);
  canvas.addEventListener('mouseup', this.onUnclick, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



