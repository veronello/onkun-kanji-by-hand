# KANJI ON — Kanji by Hand

**[Open the website / Открыть сайт](https://veronello.github.io/onkun-kanji-by-hand/)**

KANJI ON is a Russian–English website in development for reviewing kanji and writing them by hand on paper.

The exercises draw on the author's own study materials, compiled during her university years starting in 2013, alongside new original exercises.

## Current state

This experimental branch connects the KANJI cards to the unchanged reviewed workbook. Russian and English example translations are being added in reviewed batches, with sources and notes recorded separately. Cards support One card, a paginated Grid, search by kanji or number, and light/dark themes. In Grid, longer example lists can be expanded with Show more; One card always shows every example. Context-dependent translations have explanatory notes; editorial review flags remain in the data. Unconfirmed readings and reference templates are marked and their romanization is not published. Existing ON/KUN drills keep their separate sample data.

See [integration report and update instructions](docs/excel-integration.md), [first translation batch](docs/translations-12.md), [second translation batch](docs/translations-13-24.md), [third translation batch and manual review](docs/translations-25-48.md), [fourth translation batch](docs/translations-49-72.md), and [next translation batch](docs/translations-73-84.md).

The interface includes a Russian–English language switcher, a soft-white default theme with graphite text and muted green accents, and an optional dark theme. The theme choice is saved in the browser. The KANJI ON wordmark and green ON icon appear on the site and in browser or home-screen shortcuts.

## Practice modes

- **Kanji cards:** kanji, readings, meanings, and compounds.
- **ON readings:** a self-paced handwriting drill using selected examples, including kun and irregular readings. Read the romanization and meaning, write on paper, then reveal the answer and continue. Russian and English are supported.
- **KUN readings:** a self-paced handwriting drill using selected examples with kun readings of the target kanji, in Russian and English.
- **Final test:** a full-block recall test with answers shown at the end.

Practice is intended for handwriting on paper. ON and KUN drills are active; Final test is still planned.

## Source materials

- [Jōyō kanji 2010 — Excel reference](sources/joyo_kanji_2010_extracted.xlsx)
- [joyo_kanji_2010_vs_exercises_2013_candidates.xlsx](sources/joyo_kanji_2010_vs_exercises_2013_candidates.xlsx)
- [joyo_kanji_2010_vs_exercises_2013_with_hints.xlsx](sources/joyo_kanji_2010_vs_exercises_2013_with_hints.xlsx)
- [Source notes and references](SOURCES.md)

## Run locally

Serve the repository over HTTP because cards fetch JSON chunks:

```sh
python3 -m http.server 8765
```

Open `http://localhost:8765/cards.html`. No JavaScript build is required. `file://` cannot load the database. The complete database is always available. The old `?excel-preview` URL also opens the complete database.

## Copyright

Source code is licensed under the [MIT License](LICENSE). Exercise data, written content, branding, and visual identity are excluded from this license and are not licensed for reuse at this stage.



