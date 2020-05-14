export const LOADED = 'LOADED';
export const LOAD = 'LOAD';

export const appLoaded = () => {
  return {
    type: LOADED
  };
};

export const appLoad = () => {
  return {
    type: LOAD
  };
};
