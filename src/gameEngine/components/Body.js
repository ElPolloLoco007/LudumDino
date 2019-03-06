class Body {
  constructor(entity, left, top, height, width) {
    this.left = left;
    this.top = top;
    this.height = height;
    this.width = width;
    this.entity = entity;
  }

  // setters
  setEntity(entity) {
    this.entity = entity;
  }
  setLeft(value) {
    this.left = value;
  }
  setTop(value) {
    this.top = value;
  }
  setHeight(value) {
    this.height = value;
  }
  setWidth(value) {
    this.width = value;
  }

  // getters
  getLeft() {
    return this.left;
  }
  getTop() {
    return this.top;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }
}

export default Body;
