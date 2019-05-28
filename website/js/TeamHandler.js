class TeamHandler {
  constructor({ data, containerID, logoRoot, photoRoot }) {
    this._data = data;
    this._containerID = containerID;
    this._logoRoot = logoRoot;
    this._photoRoot = photoRoot;
  }

  load() {
    let html = "";
    for (let division of data) {
      html += this.createDivisionCard(division);
      html += this.createTeamCard(division.team);
    }

    document.getElementById(containerID).innerHTML += html;
  }

  createDivisionCard({ name, logo, leader }) {
    return `
        <div class="division">
            <div class="top">
                <h2>${name}</h2>
                <img src="${this._logoRoot + "/" + logo}" />
            </div>
            ${this.createPerson(leader)}
        </div>
      `;
  }

  createTeamCard(members) {
    let html = "<div class='team'>";
    for (let member of members) html += this.createPerson(member);

    return html + "</div>";
  }

  createPerson({ photo, name }) {
    return `
        <div class="member">
            <img src="${this._photoRoot + "/" + photo}" />
            <h2>${name}</h2>
        </div>
      `;
  }
}
