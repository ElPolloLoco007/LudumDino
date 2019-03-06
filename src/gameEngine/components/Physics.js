class Physics {
  constructor(entity, left, top) {
    this.left = left;
    this.top = top;
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

  // getters
  getLeft() {
    return this.left;
  }
  getTop() {
    return this.top;
  }

  update = () => {
    let prevX = this.entity.getBody().getLeft();
    let prevY = this.entity.getBody().getTop();

    this.entity.getBody().setLeft(prevX + this.left);
    this.entity.getBody().setTop(prevY + this.top);
  };
}

export default Physics;
