const init = async() => {
    const loader = new Loader("");
    const dict = new Dictionary(
        await loader.getObject("content/json/dictionary.json"),
        "hu"
    );

    const sponsors = new SponsorHandler({
        logos: await loader.getObject("content/json/sponsors.json"),
        srcRoot: "content/logos/",
        mainHolderId: "main",
        otherHolderId: "other"
    });

    const navBarHandler = new NavBarHandler("navbar");
    document.getElementById("hero_learnMore").onclick = () =>
        navBarHandler.scrollDown();

    document.getElementById("hu").onclick = () => dict.changeLanguage("hu");

    document.getElementById("en").onclick = () => dict.changeLanguage("en");

    sponsors.load();
};

init();