class SponsorHandler {
  constructor(logos, srcRoot, mainHolderId, otherHolderId) {
    this._logos = logos;
    this._srcRoot = srcRoot;
    this._mainHolder = document.getElementById(mainHolderId);
    this._otherHolder = document.getElementById(otherHolderId);
  }

  load() {
    this._logos.main.forEach(
      sponsor =>
        (this._mainHolder.innerHTML += this._createLogoString(sponsor, "main"))
    );

    this._logos.others.forEach(
      sponsor =>
        (this._otherHolder.innerHTML += this._createLogoString(
          sponsor,
          "other"
        ))
    );
  }

  _createLogoString({ logo, name }, classText) {
    return `<img src="${this._srcRoot +
      logo}" alt="${name}" class="logo ${classText}" />`;
  }
}
