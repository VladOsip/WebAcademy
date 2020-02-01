function commentForm() {
  const body = document.querySelector("body");
  const form = document.createElement("form");
  const inputQuest = document.createElement("input");
  const textArea = document.createElement("textarea");
  const btn = document.createElement("button");

  inputQuest.placeholder = "Enter name";
  textArea.placeholder = "Enter message";
  btn.innerHTML = "Send";

  form.onsubmit = event => {
    event.preventDefault();
    console.log(event);
    const p = document.createElement("p");
    // console.log(textArea.value);
    // console.log(inputQuest.value);
    body.appendChild(p);
    p.innerHTML = `${inputQuest.value} </br> <b>${textArea.value}</b>`;
  };

  body.appendChild(form);
  form.appendChild(inputQuest);
  form.appendChild(textArea);
  form.appendChild(btn);
}

export { commentForm };
