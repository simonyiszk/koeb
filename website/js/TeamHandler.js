class TeamHandler {
  constructor({ data, containerID, logoRoot, photoRoot }) {
    this._data = data;
    this._containerID = containerID;
    this._logoRoot = logoRoot;
    this._photoRoot = photoRoot;
  }

  load() {
    let html = "";
    for (let division of this._data) {
      html += "<div>";
      html += this.createDivisionCard(division);
      html += this.createTeamCard(division.members);
      html += "</div>";
    }

    document.getElementById(this._containerID).innerHTML += html;
  }

  createDivisionCard({ name, logo, leader }) {
    return `
        <div class="division card">
            <div class="top">
                <h2>${name}</h2>
                <img src="${this._logoRoot + logo}" onerror="this.src = '${this
      ._logoRoot + "default.png"}'"/>
            </div>
            ${this.createPerson(leader)}
        </div>
      `;
  }

  createTeamCard(members) {
    let html = "<div class='team card'>";
    for (let member of members) html += this.createPerson(member);

    return html + "</div>";
  }

  createPerson({ photo, name }) {
    return `
        <div class="member">
            <img src="${this._photoRoot + photo}" onerror="this.src = '${this
      ._photoRoot + "default.svg"}'"/>
            <h2>${name}</h2>
        </div>
      `;
  }
}
