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
exports.Style = Style;
