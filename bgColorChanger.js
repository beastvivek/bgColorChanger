/* eslint-disable max-statements */
const fs = require('fs');

const randomInt = (limit) => Math.floor(Math.random() * limit);
const toHex = (number) => number.toString(16);

const generateStyle = (color) => {
  const style = new Style();
  style.addStyle('background-color', color.getRGB());
  style.addStyle('display', 'flex');
  style.addStyle('justify-content', 'center');
  style.addStyle('align-items', 'center');
  return style.getStyle();
};

class Tag {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
    this.attrs = [];
  }

  getTag() {
    return `<${this.tag} ${this.attrs.join(' ')}>${this.content}</${this.tag}>`;
  }

  addClass(className) {
    this.attrs.push(`class="${className}"`);
  }

  addStyle(style) {
    this.attrs.push(`style="${style}"`);
  }
}

class Html {
  constructor(limit) {
    this.limit = limit;
  }

  generateHtml() {
    const red = randomInt(this.limit);
    const green = randomInt(this.limit);
    const blue = randomInt(this.limit);
    const color = new Color(red, green, blue);
    const style = generateStyle(color);
    const divTag = new Tag('div', color.getRGB());
    divTag.addStyle('font-size:50px;color:white');
    const div = divTag.getTag();
    const bodyTag = new Tag('body', div);
    bodyTag.addStyle(style);
    const body = bodyTag.getTag();
    const headTag = new Tag('head', '');
    const head = headTag.getTag();
    const htmlTag = new Tag('html', head + body);
    return htmlTag.getTag();
  }
}

class Style {
  constructor() {
    this.styles = [];
  }

  addStyle(name, value) {
    this.styles.push(`${name}:${value}`);
  }

  getStyle() {
    return this.styles.join(';');
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
  const html = new Html(255).generateHtml();
  fs.writeFileSync('./index.html', html, 'utf8');
}, 1000);
