class Logger {
  static list = [];
  static show = false;

  static setShow() {
    this.show = !this.show;
  }

  static getShow() {
    return this.show;
  }

  static setText(from, message) {
    this.list.push({ from: from, message: message });
  }
  // hey
  static getList() {
    return this.list;
  }
}

export default Logger;
