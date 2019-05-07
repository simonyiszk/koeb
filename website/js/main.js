const init = async() => {
    loader = new Loader("/");
    dict = new Dictionary(
        await loader.getObject("content/json/dictionary.json"),
        "hu"
    );

    sponsors = new SponsorHandler({
        logos: await loader.getObject("content/json/sponsors.json"),
        srcRoot: "/content/logos/",
        mainHolderId: "main",
        otherHolderId: "other"
    });

    sponsors.load();
};

init();