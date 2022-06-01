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

exports.Tag = Tag;
