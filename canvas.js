window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  // Rectangle Drawing
  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 5;
  //   ctx.strokeRect(100, 100, 200, 500);
  //   ctx.strokeStyle = "blue";
  //   ctx.lineWidth = 2;
  //   ctx.strokeRect(200, 200, 200, 500);

  //variables
  let painting = false;
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "cyan";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  //Event Listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
