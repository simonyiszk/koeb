const init = async () => {
  loader = new Loader("/");
  dict = new Dictionary(
    await loader.getObject("content/json/dictionary.json"),
    "hu"
  );

  sponsors = new SponsorHandler(
    await loader.getObject("content/json/sponsors.json"),
    "/content/logos/",
    "main",
    "other"
  );

  sponsors.load();
};

init();
