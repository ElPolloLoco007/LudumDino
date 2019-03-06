// export default ResourceManager;
class ResourceManager {
  // ===< Path >=================================================================
  static getImagePath = name => {
    return require(`../resources/images/${name}`);
  };

  static getAudioPath = name => {
    return require(`../resources/audio/${name}`);
  };

  static getSpritePath = name => {
    return require(`../resources/sprites/${name}`);
  };
}

export default ResourceManager;
