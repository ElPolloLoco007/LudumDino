import AudioManager from "../gameEngine/components/AudioManager";
import ResourceManager from "../utils/ResourceManager";

describe("Audio Manager", () => {
  let audio;

  it("array out of bounds", () => {
    audio = new AudioManager([
      ResourceManager.getAudioPath("soundEffect1.mp3"),
      ResourceManager.getAudioPath("soundEffect2.mp3")
    ]);

    expect(audio.play(4)).toBe(-1);
  });
});
