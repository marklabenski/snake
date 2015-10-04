// first we need to create a stage
const stage = new Konva.Stage({
  container: "konva-container",   // id of container <div>
  width: 500,
  height: 500
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const circle = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4
});

circle.cache();
circle.filters([Konva.Filters.Pixelate]);
circle.pixelSize(1);



const anim = new Konva.Animation(function(frame) {
  circle.filters([Konva.Filters.Noise]);
  circle.noise(Math.random());
}, layer);

anim.start();

layer.add(circle);

layer.draw();

const tween = new Konva.Tween({
  node: circle,
  duration: 2.0,
  pixelSize: 30,
  easing: Konva.Easings.EaseInOut
});

circle.on('mouseover', function() {
  tween.play();
});

circle.on('mouseout', function() {
  tween.reverse();
});


// add the shape to the layer


// add the layer to the stage
stage.add(layer);
