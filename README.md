# koeb

- http://koeb.hu/
- https://elegant-dijkstra-098397.netlify.com/

## TODO

- [ ] Akkurat font
- [ ] illetve a mobilos megjelenítés erősen work in progress
- [ ] *csapat résznél nem találtam infót, hogy milyen neveket, képeket és leírásokat kéne belerakni, igazából divíziókhoz is 8 név van, de csak 6 logó*
- [x] A doksis szövegek második felét még nem raktam bele
- [x] Az SDE logo helyett az SDE19 logoját használjátok légyszi (erre háklisak a szervezők, az én hibám, elfelejtettem elküldeni, most melléklem)
- [x] Zsófi csinál egy színkiosztást a landing-hez, mert a barna-sárga pont a másik magyar csapat főszínei
- [x] Patreonos résznél más betűtípus van
- [x] melléklem a négy hiányzó szponzor logoját

## Megjegyzések a fejlesztéshez

### Webszerver futtatása

> Ez szükséges ahhoz, hogy a dinamikusan betöltött tartalmakat lásd.

- Telepíts fel egy [python3](https://www.python.org/downloads/") runtime-ot.
- Telepítésnél figyelj, hogy az `Add to PATH` legyen bepipálva.
- A website mappában add ki a következő parancsot: `python -m http.server`
- A böngésző címsorába navigálj erre a címre: [http://localhost:8000](http://localhost:8000)

### Dictionary

Minden szöveget (a többnyelvűség miatt) a [dictionary.json](website/content/json/dictionary.json) -höz adj hozzá, az ott látható minta alapján.

```JSON
"learnMore": {
    "hu": "Tudj meg többet!",
    "en": "Learn more!"
}
```

> Ennél a példánál a `learnMore` id-vel rendelkező html elem tartalma lesz kicserélve a megfelelő nyelvhez tartozó szöveghez.

Fontos, hogy azoknak az elemeknek, amik a dictionaryben szerepelnek, nem lehetnek gyerekeik.

> A JSON-ben új sort a `\n` leírásával tehetünk.

**Nem túl robusztus a jelenlegi megvalósítás, de kezdetnek szerintem ez elég lesz.**

### Sponsors

A [sponsors.json](website/content/json/sponsors.json) fájlba a meglévő mintát követve lehet új szponzorokat hozzáadni.
