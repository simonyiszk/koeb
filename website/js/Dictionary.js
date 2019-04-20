class Dictionary {
  constructor(dictionary) {
    this._dictionary = dictionary;
    this._language = "en";
    this.update();
  }

  update() {
    for (let id in this._dictionary)
      document.getElementById(id).innerHTML = this._dictionary[id][
        this._language
      ];
  }

  changeLanguage(to) {
    this._language = to;
    this.update();
  }
}
