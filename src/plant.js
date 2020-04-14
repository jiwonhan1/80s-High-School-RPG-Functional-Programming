
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState };
    return newState;
  }
}

export const changeState = (prop) => {
  return (value) => {
    return (name) => {
      return (state) => ({
        name, ...state, 
        [prop] : (state[prop] || 0) + value
      })
    }
  }
}

export const stateChanger = storeState();
const lily = storeState();


//feed = changeState("feed");
export const blueFood = changeState("soil")(5);

//photosynthesis = changeState("sunlight");
export const sunnyDay = changeState("sunlight")(5);
export const cloudyDay = changeState("sunlight")(3);
export const rainyDay = changeState("sunlight")(0);

//water = changeState("sunlight");
export const enoughWater = changeState("water")(5);