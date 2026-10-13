# KANJI ON — Kanji by Hand

**[Open the website / Открыть сайт](https://veronello.github.io/onkun-kanji-by-hand/)**

KANJI ON is a Russian–English website in development for reviewing kanji and writing them by hand on paper.

The exercises draw on the author's own study materials, compiled during her university years starting in 2013, alongside new original exercises.

## Current state

This experimental branch connects the KANJI cards to the unchanged reviewed workbook from 13 October 2026. It contains all 2,136 kanji and 9,555 source records. The first 24 kanji have 96 individually prepared Russian and English example translations (46 from the first batch, 50 from the second). Other translations are pending. Cards support One card, a paginated Grid, database scope selection (all / first 12), search by kanji or number, and light/dark themes. In Grid, each card shows up to three examples until its Show more button is opened; One card always shows every example. Context-dependent translations carry a manual sense-selection flag. Unconfirmed readings and reference templates are marked and their romanization is not published. Existing ON/KUN drills keep their separate sample data.

See [integration report and update instructions](docs/excel-integration.md), [first translation batch](docs/translations-12.md), and [second translation batch](docs/translations-13-24.md).

The interface includes a Russian–English language switcher, a soft-white default theme with graphite text and muted green accents, and an optional dark theme. The theme choice is saved in the browser. The KANJI ON wordmark and green ON icon appear on the site and in browser or home-screen shortcuts.

## Practice modes

- **Kanji cards:** kanji, readings, meanings, and compounds.
- **ON readings:** a self-paced handwriting drill with all 44 examples from cards 1–12, including kun and irregular readings. Read the romanization and meaning, write on paper, then reveal the answer and continue. Russian and English are supported.
- **KUN readings:** the same self-paced handwriting drill with 10 examples using kun readings of the target kanji from cards 1–12, in Russian and English.
- **Final test:** a full-block recall test with answers shown at the end.

Practice is intended for handwriting on paper. The first ON and KUN drills are active; Final test is still planned.

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

Open `http://localhost:8765/cards.html`. No JavaScript build is required. `file://` cannot load the database. Use `cards.html?excel-preview` for the first-12 preview, or select First 12 in the toolbar.

## Copyright

Source code is licensed under the [MIT License](LICENSE). Exercise data, written content, branding, and visual identity are excluded from this license and are not licensed for reuse at this stage.



