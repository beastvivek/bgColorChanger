const toHex = (number) => number.toString(16);

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

exports.Color = Color;
