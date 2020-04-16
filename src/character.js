export const storeState = (nerd) => {
  let currentState = nerd;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);

    currentState = { ...newState };

    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const brainLeveler = changeState("brains")(50);
const sportLeveler = changeState("sporty")(50);
const coolLeveler = changeState("cool")(50);
const vitalityLeveler = changeState("vitality")(50);
const brainDecrease = changeState("brains")(-20);
const checkInitialState = changeState("vitality")(0);
const leveler = changeState("level")(1);
const beaten = changeState("vitality")(-50);
const life = changeState("life")(false);

export const battle = (character1) => {
  return (character2) => {
    return (property) => {
      if (character1[property] > character2[property]) {
        return [character1, character2];
      } else if (character1[property] < character2[property]) {
        return [character2, character1];
      } else return [{}, {}];
    };
  };
};

const LifeChecks = (object) => {
    if (object.vitality === 0) {
      return character.life === false;
  };
};

export const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop]: string,
    });
  };
};

const nerdInitialState = {
  name: "Neil Nerdy Nerd",
  gender: "Male",
  brains: 100,
  sporty: 50,
  cool: 50,
  vitality: 100,
  level: 0,
  life: true,
};

const nerd = storeState(nerdInitialState);

const jockInitialState = {
  name: "Jim Jock the Jockster",
  gender: "Male",
  brains: 50,
  sporty: 100,
  cool: 100,
  vitality: 100,
  level: 0,
  life: true,
};

const jock = storeState(jockInitialState);

const prepInitalState = {
  name: "Perky perby",
  gender: "Female",
  brains: 50,
  sporty: 50,
  cool: 100,
  vitality: 100,
  level: 0,
  life: true,
};

const prep = storeState(prepInitalState);
