const resizeNavbar = () => {
  const navbar = document.getElementById("navbar");
  const placeholder = document.getElementById("navbar-placeholder");

  placeholder.style.width = navbar.clientWidth + "px";
  placeholder.style.height = navbar.clientHeight + "px";
};

const init = async () => {
  const loader = new Loader("");
  const dict = new Dictionary(
    await loader.getObject("content/json/dictionary.json"),
    "hu"
  );

  const team = new TeamHandler({
    data: await loader.getObject("content/json/team.json"),
    containerID: "team_cards",
    logoRoot: "content/team/",
    photoRoot: "content/team/"
  });

  const sponsors = new SponsorHandler({
    logos: await loader.getObject("content/json/sponsors.json"),
    srcRoot: "content/logos/",
    mainHolderId: "main",
    otherHolderId: "other"
  });

  new NavBarHandler("navbar");

  resizeNavbar();
  window.onresize = resizeNavbar;

  document.getElementById("hu").onclick = () => dict.changeLanguage("hu");

  document.getElementById("en").onclick = () => dict.changeLanguage("en");

  team.load();
  sponsors.load();
};

init();
