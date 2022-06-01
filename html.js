const { Color } = require('./color.js');
const fs = require('fs');
const { Style } = require('./style.js');
const { Tag } = require('./tag.js');

class Html {
  constructor(limit) {
    this.limit = limit;
  }

  getHtml() {
    const red = randomInt(this.limit);
    const green = randomInt(this.limit);
    const blue = randomInt(this.limit);
    const color = new Color(red, green, blue);
    const style = generateStyle(color);
    const div = generateDiv(color);
    const body = generateBody(div, style);
    const head = generateHead();
    const html = generateHtml(head, body);
    return html;
  }
}

const randomInt = (limit) => Math.floor(Math.random() * limit);

const generateStyle = (color) => {
  const style = new Style();
  style.addStyle('background-color', color.getRGB());
  style.addStyle('display', 'flex');
  style.addStyle('justify-content', 'center');
  style.addStyle('align-items', 'center');
  return style.getStyle();
};

const generateHtml = (head, body) => {
  const htmlTag = new Tag('html', head + body);
  const html = htmlTag.getTag();
  return html;
};

const generateHead = () => {
  const headTag = new Tag('head', '');
  const head = headTag.getTag();
  return head;
};

const generateBody = (div, style) => {
  const bodyTag = new Tag('body', div);
  bodyTag.addStyle(style);
  const body = bodyTag.getTag();
  return body;
};

const generateDiv = (color) => {
  const divTag = new Tag('div', color.getRGB());
  divTag.addStyle('font-size:50px;color:white');
  const div = divTag.getTag();
  return div;
};

const main = () => {
  setInterval(() => {
    const html = new Html(255).getHtml();
    fs.writeFileSync('./index.html', html, 'utf8');
  }, 1000);
};

exports.Html = Html;
exports.main = main;
