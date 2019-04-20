class Loader {
  constructor(baseURI) {
    this._baseURI = baseURI;
  }

  async getObject(uri) {
    const response = await fetch(this._baseURI + uri, {
      method: "GET",
      mode: "cors"
    });

    if (!response.ok) throw new Error("Error while handling request.");

    return await response.json();
  }
}
