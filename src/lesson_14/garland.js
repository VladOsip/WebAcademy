function garland(count, speed, mode) {
  const getRandomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  const getRandomColor = () => {
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
      255
    )}, ${getRandomNumber(255)})`;
  };

  for (let i = 0; i < count; i++) {
    let activeIndex = 0;
    const obj = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(obj);
    obj.style.border = "2px solid black";
    obj.style.margin = "5px";
    obj.style.borderRadius = "50%";
    obj.style.width = "50px";
    obj.style.height = "50px";
    obj.style.display = "inline-block";
    if (mode == 1) {
      setInterval(() => {
        obj.style.backgroundColor = getRandomColor();
      }, speed);
    } else {
      obj.style.backgroundColor = "";
    }
    if (mode == 2) {
      setInterval(() => {
        obj.style.backgroundColor = getRandomColor();
      }, speed);
    } else {
      obj.style.backgroundColor = "";
    }
  }
}

export { garland };
