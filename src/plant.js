
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

// const plant = (name) => {
//   const plantName = { name }
//   let cu
//   return (plantCurrentStoreStatus) => ({
//     plantName, ...state
//   })
// }

// const plant = (name) => {
//   let plantName = { name }
//   return (state) => ({
//     plantName, ...state
//   })
// }


export const stateChanger = storeState();


//feed = changeState("feed");
export const blueFood = changeState("soil")(5);

//photosynthesis = changeState("sunlight");
export const sunnyDay = changeState("sunlight")(5);
export const cloudyDay = changeState("sunlight")(3);
export const rainyDay = changeState("sunlight")(0);

//water = changeState("sunlight");
export const enoughWater = changeState("water")(5);