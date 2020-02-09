import "./ads.scss";

function Ads(mountPoint) {
  this.mountPoint = mountPoint;
}

Ads.prototype.init = function() {
  this.render();
  this.getAds();
};

Ads.prototype.render = function() {
  this.container = document.createElement("div");
  this.container.classList.add("ads__container");
  this.mountPoint.appendChild(this.container);
};

Ads.prototype.getAds = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/ads");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      const data = JSON.parse(xhr.response);
      this.renderAds(data);
      console.log(data);
    }
  };
};

Ads.prototype.renderAds = function(ads) {
  for (let ad of ads) {
    this.renderAd(ad);
  }
};

Ads.prototype.renderAd = function(ad) {
  const div = document.createElement("div");
  div.classList.add("ads");
  const img = document.createElement("img");
  img.classList.add("ads__img");
  const title = document.createElement("div");
  title.classList.add("ads__title");
  title.textContent = ad.title;
  img.src = ad.img;
  div.appendChild(img);
  this.container.appendChild(div);
};

export { Ads };
