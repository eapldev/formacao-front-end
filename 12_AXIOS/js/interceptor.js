// requisição
postsFetch.interceptors.request.use(
  function (config) {
    console.log("Antes da requisição...");
    return config;
  },
  function (erro) {
    return Promise.reject(Error);
  }
);

// resposta
postsFetch.interceptors.response.use(
    function (response) {
      console.log("Antes da resposta...");
      return response;
    },
    function (erro) {
      return Promise.reject(Error);
    }
  );