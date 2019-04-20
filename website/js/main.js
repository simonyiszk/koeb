const init = async () => {
  loader = new Loader("/");
  dict = new Dictionary(await loader.getObject("content/json/dictionary.json"));
};

init();
