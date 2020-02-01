import "./feed.scss";

class Feed {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }
  init() {
    this.renderForm();
    this.render();
    this.getPosts();
  }

  renderForm() {
    this.form = document.createElement("form");
    this.inputTitle = document.createElement("input");
    this.inputImgUrl = document.createElement("input");
    this.btn = document.createElement("button");

    this.form.appendChild(this.inputTitle);
    this.form.appendChild(this.inputImgUrl);
    this.form.appendChild(this.btn);
    this.form.addEventListener("submit", e => {
      this.submitHandler(e);
    });
    this.mountPoint.appendChild(this.form);
  }

  submitHandler(e) {
    e.preventDefault();
    const data = {
      title: this.inputTitle.value,
      img: this.inputImgUrl.value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/posts");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      console.log(xhr);
      if (xhr.status >= 200 && xhr.status < 400) {
        this.renderPost(JSON.parse(xhr.response));
      }
    };
    console.log(data);
  }

  render() {
    this.container = document.createElement("div");
    this.container.classList.add("feed__container");
    this.mountPoint.appendChild(this.container);
  }
  getPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/posts");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.response);
        this.renderPosts(data);
      }
    };
  }
  renderPosts(posts) {
    for (let post of posts) {
      this.renderPost(post);
    }
  }
  renderPost(post) {
    const div = document.createElement("div");
    div.classList.add("post");
    const img = document.createElement("img");
    img.classList.add("post__img");
    img.src = post.img;
    const title = document.createElement("h2");
    title.textContent = post.title;
    title.classList.add("post__title");
    div.appendChild(img);
    div.appendChild(title);
    this.container.appendChild(div);
  }
}

export { Feed };
