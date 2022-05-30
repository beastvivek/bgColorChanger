const fs = require('fs');

const randomInt = (limit) => Math.floor(Math.random() * limit);
const toHex = (number) => number.toString(16);
const html = (content) => `<html>${content}</html>`;
const head = (content) => `<head>${content}</head>`;
const meta = () => '<meta http-equiv="refresh" content="1">';
const body = (styles, content) => `<body style="${styles}">${content}</body>`;
const div = (styles, content) => `<div style="${styles}">${content}</div>`;

const generateHtml = (limit) => {
  const color = new Color(randomInt(limit), randomInt(limit), randomInt(limit));
  const bgColor = new Style('background-color', color.getRGB()).getStyle();
  const display = new Style('display', 'flex').getStyle();
  const justification = new Style('justify-content', 'center').getStyle();
  const alignment = new Style('align-items', 'center').getStyle();
  const divTag = div('font-size:50px', color.getRGB());
  const bodyStyles = `${bgColor};${display};${justification};${alignment}`;
  const bodyTag = body(bodyStyles, divTag);
  return html(head(meta()) + bodyTag);
};

class Style {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  getStyle() {
    return `${this.name}:${this.value}`;
  }
}

class Color {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  getRGB() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  getHex() {
    return `#${toHex(this.red)}${toHex(this.green)}${toHex(this.blue)}`;
  }
}

setInterval(() => {
  const html = generateHtml(100);
  fs.writeFileSync('./index.html', html, 'utf8');
}, 1000);
