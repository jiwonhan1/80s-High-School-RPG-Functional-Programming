import {
  storeState,
  changeState,
  battle,
  brainLeveler,
  sportLeveler,
  coolLeveler,
  vitalityLeveler,
  checkInitialState,
  leveler,
  life,
} from "../src/character-functional.js";
import { jock, nerd, prep, beaten, leveler } from "../src/constants.js";

describe("Game", () => {
  let jockCharacterUpdater;
  let prepCharacterUpdater;
  let nerdCharacterUpdater;

  beforeEach(() => {
    jockCharacterUpdater = storeState(jock);
    nerdCharacterUpdater = storeState(nerd);
    prepCharacterUpdater = storeState(prep);
  });

  // test("should create a jock character to be updated and then we update  ", () => {
  //   let newState;
  //   superAwesomeness.forEach((element) => {
  //     newState = jockCharacterUpdater(element);
  //   });
  //   expect(newState.brain).toEqual(100);
  //   expect(newState.sport).toEqual(150);
  //   expect(newState.cool).toEqual(100);
  // });

  test("should create a prep character to be updated and then we update ", () => {
    let newState = prepCharacterUpdater(brainLeveler);
    expect(newState.brain).toEqual(100);
    expect(newState.cool).toEqual(100);
    expect(newState.name).toEqual("Perky perby");
  });

  test("should create a nerd character to be updated and then we update ", () => {
    let newState = nerdCharacterUpdater(brainLeveler);
    expect(newState.brain).toEqual(150);
    expect(newState.cool).toEqual(50);
    expect(newState.name).toEqual("Neil Nerdy Nerd");
  });

  test("tests the battle mechanic, returning an array of empty objects if the two characters have the same property level 3", () => {
    let outcome = battle(jock)(jock2)("sport");
    expect(outcome).toEqual([{}, {}]);
  });

  test("tests the battle mechanic, seeing if winner is the first object in a returning array 4", () => {
    let outcome = battle(prep)(jock)("sport");
    expect(outcome[0]).toEqual(jock);
  });

  test("tests the battle mechanic 6", () => {
    let outcome = battle(jock)(prep)("sport");
    expect(outcome).toEqual([jock, prep]);
  });

  test(" tests the functionality of a leveling mechanic", () => {
    let outcome = battle(jock)(prep)("sport");
    const winner = leveler(outcome[0]);
    const loser = beaten(outcome[1]);
    expect(winner.level).toEqual(1);
    expect(loser.vitality).toEqual(50);
  });

  test("tests the battle mechanic, seeing if loser is the last object in a returning array 5", () => {
    let outcome = battle(nerd)(jock)("brain");
    expect(outcome[1]).toEqual(jock);
  });
});
