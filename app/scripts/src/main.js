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

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);
