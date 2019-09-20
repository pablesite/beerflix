const lStorage = {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: (key) => localStorage.getItem(key),
  };
  
  const cookieStorage = {
    setItem: (key, value) => Cookies.set(key, value),
    getItem: (key) => Cookies.get(key) || '',
  };
  
  const storage = (type = 'lStorage') => { //usa por defecto lStorage si no se le pasa nada.
    const types = {
      lStorage,
      cookieStorage,
    };
    if (typeof(Storage) !== "undefined") {
        // Se acepta localStorage (esto es de la propia documentación)
     return types[type];
    }
    return type['cookieStorage'];
  };
  
  export default storage;