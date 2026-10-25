# Переводы карточек № 517–540

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `973c89c8c6ac62c5a01297766ff18c90b01b67ef`.

Добавлены 97 пар RU/EN для 24 карточек от 券 до 鍵. Всего 2374 пары. Все подходящие примеры в диапазоне подготовлены.

## Словарная проверка и исключения

Источники: 小学館 プログレッシブ和英中辞典(第4版), デジタル大辞泉 и 精選版 日本国語大辞典 через Kotobank. Переводы — редакторские эквиваленты основных значений, не полное воспроизведение словарных статей. Ссылки находятся у каждой записи и в обоих листах Excel.

- EX-02297 一戸建ち / ikkodachi: сохранена прежняя пометка ПРЕДВАРИТЕЛЬНО · проверить. Полное чтение не получило независимого подтверждения в доступном авторитетном словаре. Вторичные выдержки и статья 一戸建て не заменяют такого подтверждения. Строка целиком сохранена, переводы не добавлены, eligible=false.
- EX-02303 ○○県: сохранён шаблон без чтения и переводов; eligible=false.
- 研究, 危険, 権化 сохраняют прежние переводы, источники и пояснения, но имеют отдельные ID.
- 封建的, 二階建て, 健やかだ, 嫌だ, 嫌気がさす, 献身的 сверены по статьям базовых слов и приведённым в них формам/примерам. 険しさ прямо указано как производное существительное в 大辞泉.
- 一軒 переводится по чтению ikken, а не hitonoki; 剣 — по tsurugi, а не ken. Японские строки и ромадзи не менялись.
- Различаются 建議/嫌疑, 拳法/憲法, 人絹/人権. 遣う сохраняет значения расходования ресурсов и управления, 遣わす — речь вышестоящего к нижестоящему.
- 29 новых записей имеют sense-selection (всего 902): многозначность требует контекста, а не исправления чтения.

## Проверки

- Все 7 тестов `python scripts/test_import.py` прошли. Добавлена проверка полноты партии и сохранения двух исключений, а также хеша всех прежних переводов.
- `node --check cards.js` и `git diff --check` прошли.
- В Excel сверены 687371 ячейка вне области новых переводов: значения, типы, стили, комментарии и ссылки сохранены. Все 10 листов, 2136 иероглифов, 9555 примеров и 20 пометок YES сохранены. Оба листа примеров согласованы, все 2374 пары совпадают с карточками.
- В XLSX изменены только новые переводные ячейки и высоты соответствующих строк на двух листах. Остальные части пакета побайтно совпадают. Ячейки подготовлены Artifact Tool и перенесены в исходный пакет с сохранением его структуры.
- Просмотрены образцы новых областей RU/EN. Ограничение: браузерный тест не запустился из-за отсутствия Chromium. One card/Grid и физические устройства здесь не проверены. Код интерфейса не менялся.
- Упражнения ON/KUN, main и исторические инструкции не изменены. Старая неточность 9530 в инструкции Excel остаётся вне задачи.

## Переводы

| ID | Пример | Romaji | RU | EN | Источники |
| --- | --- | --- | --- | --- | --- |
| EX-02282 | 乗車券 | jōshaken | проездной билет | travel ticket; passenger ticket | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%B9%97%E8%BB%8A%E5%88%B8-79301) |
| EX-02283 | 旅券 | ryoken | заграничный паспорт | passport | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%97%85%E5%88%B8) |
| EX-02284 | 債券 | saiken | облигация; долговая ценная бумага | bond; debt security | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%B5%E5%88%B8) |
| EX-02285 | 肩章 | kenshō | погон; эполет | epaulette; shoulder insignia | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%82%A9%E7%AB%A0) |
| EX-02286 | 双肩 | sōken | оба плеча; плечи, несущие ответственность | both shoulders; shoulders bearing responsibility | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%8C%E8%82%A9) |
| EX-02287 | 比肩 | hiken | равенство; сопоставимость | being on a par; matching someone | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AF%94%E8%82%A9) |
| EX-02288 | 肩 | kata | плечо | shoulder | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%82%A9) |
| EX-02289 | 建築 | kenchiku | строительство; архитектура; здание | construction; architecture; building | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E7%AF%89) |
| EX-02290 | 建議 | kengi | предложение; официальная рекомендация | proposal; formal recommendation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E8%AD%B0) |
| EX-02291 | 封建的 | hōkenteki | феодальный; патриархальный; старомодный | feudal; conservative; old-fashioned | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B0%81%E5%BB%BA) |
| EX-02292 | 建立 | konryū | возведение храма или памятника | erection of a temple or monument | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E7%AB%8B) |
| EX-02293 | 建てる | tateru | строить; возводить | to build; to erect | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E3%81%A6%E3%82%8B) |
| EX-02294 | 建物 | tatemono | здание; строение | building; structure | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E7%89%A9) |
| EX-02295 | 二階建て | nikaidate | двухэтажный; двухэтажное здание | two-storey; a two-storey building | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%8C%E9%9A%8E) |
| EX-02296 | 建つ | tatsu | строиться; быть построенным | to be built; to stand erected | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BB%BA%E3%81%A4) |
| EX-02298 | 研究 | kenkyū | исследование; изучение | research; study | [デジタル大辞泉](https://kotobank.jp/word/%E7%A0%94%E7%A9%B6-491636) |
| EX-02299 | 研修 | kenshū | профессиональное обучение; повышение квалификации | professional training; further training | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A0%94%E4%BF%AE) |
| EX-02300 | 研ぐ | togu | точить; полировать; промывать рис | to sharpen; to polish; to wash rice | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A0%94%E3%81%90) |
| EX-02301 | 県庁 | kenchō | управление префектуры; здание администрации | prefectural government; prefectural office | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9C%8C%E5%BA%81) |
| EX-02302 | 県立 | kenritsu | учреждённый или управляемый префектурой | established or run by a prefecture | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9C%8C%E7%AB%8B) |
| EX-02304 | 倹約 | ken'yaku | экономия; бережливость | thrift; economy | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%80%B9%E7%B4%84) |
| EX-02305 | 節倹 | sekken | бережливость; экономность | frugality; thrift | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%AF%80%E5%80%B9-548065) |
| EX-02306 | 勤倹 | kinken | трудолюбие и бережливость | diligence and thrift | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8B%A4%E5%80%B9-481046) |
| EX-02307 | 兼用 | ken'yō | использование для нескольких целей | use for more than one purpose | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%BC%E7%94%A8) |
| EX-02308 | 兼任 | kennin | совмещение должностей | concurrent holding of posts | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%85%BC%E4%BB%BB-492880) |
| EX-02309 | 兼職 | kenshoku | совмещение работы; дополнительная должность | holding multiple jobs; an additional post | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%BC%E8%81%B7) |
| EX-02310 | 兼ねる | kaneru | совмещать; служить одновременно двум целям | to combine; to serve two purposes | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%BC%E3%81%AD%E3%82%8B) |
| EX-02311 | 剣道 | kendō | кэндо; японское фехтование | kendo; Japanese fencing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%89%A3%E9%81%93) |
| EX-02312 | 剣舞 | kenbu | танец с мечом | sword dance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%89%A3%E8%88%9E) |
| EX-02313 | 刀剣 | tōken | мечи; клинковое оружие | swords; bladed weapons | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%80%E5%89%A3) |
| EX-02314 | 剣 | tsurugi | меч | sword | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%89%A3) |
| EX-02315 | 拳銃 | kenjū | пистолет; револьвер | handgun; pistol; revolver | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8B%B3%E9%8A%83) |
| EX-02316 | 拳法 | kenpō | кэмпо; кулачное боевое искусство | kenpō; fist-fighting martial art | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8B%B3%E6%B3%95) |
| EX-02317 | 握り拳 | nigirikobushi | сжатый кулак; безденежье | clenched fist; pennilessness | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%8F%A1%E3%82%8A%E6%8B%B3-591202) |
| EX-02318 | 軒数 | kensū | число домов; количество строений | number of houses or buildings | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%BB%92%E6%95%B0-492437) |
| EX-02319 | 一軒 | ikken | один дом | one house | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%B8%80%E8%BB%92-434068) |
| EX-02320 | 軒 | noki | свес крыши; карниз | eaves; projecting roof edge | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%92) |
| EX-02321 | 軒先 | nokisaki | край свеса крыши; место перед домом | edge of the eaves; space in front of a house | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%92%E5%85%88) |
| EX-02322 | 健康 | kenkō | здоровье; здоровый | health; healthy | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%A5%E5%BA%B7) |
| EX-02323 | 健闘 | kentō | упорная борьба; энергичные усилия | spirited struggle; vigorous effort | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%A5%E9%97%98) |
| EX-02324 | 強健 | kyōken | крепкий; здоровый; выносливый | robust; healthy; sturdy | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E5%81%A5) |
| EX-02325 | 健やかだ | sukoyaka da | здоров; полон сил | to be healthy; to be in good health | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%A5%E3%82%84%E3%81%8B) |
| EX-02326 | 険悪 | ken'aku | враждебный; угрожающий; напряжённый | hostile; threatening; tense | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%99%BA%E6%82%AA) |
| EX-02327 | 危険 | kiken | опасность; риск; опасный | danger; risk; dangerous | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%8D%B1%E9%99%BA-473132) |
| EX-02328 | 保険 | hoken | страхование; страховка | insurance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%9D%E9%99%BA) |
| EX-02329 | 険しい | kewashii | крутой; труднопроходимый; суровый; трудный | steep; rugged; stern; difficult | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%99%BA%E3%81%97%E3%81%84) |
| EX-02330 | 険しさ | kewashisa | крутизна; труднопроходимость; суровость; трудность | steepness; ruggedness; severity; difficulty | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%99%BA%E3%81%97%E3%81%84-491244) |
| EX-02331 | 圏内 | kennai | в пределах зоны; в радиусе действия | within an area; within range | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9C%8F%E5%86%85) |
| EX-02332 | 圏外 | kengai | вне зоны; вне радиуса действия | outside an area; out of range | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9C%8F%E5%A4%96) |
| EX-02333 | 成層圏 | seisōken | стратосфера | stratosphere | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%88%90%E5%B1%A4%E5%9C%8F) |
| EX-02334 | 堅固 | kengo | прочный; крепкий; непоколебимый | solid; strong; unwavering | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A0%85%E5%9B%BA) |
| EX-02335 | 堅実 | kenjitsu | надёжный; устойчивый; основательный | reliable; steady; sound | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A0%85%E5%AE%9F) |
| EX-02336 | 中堅 | chūken | основная опора; ядро; среднее звено; центр поля | mainstay; core; middle tier; centre field | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%AD%E5%A0%85) |
| EX-02337 | 堅い | katai | твёрдый; прочный; надёжный; строгий | hard; solid; reliable; formal | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A0%85%E3%81%84) |
| EX-02338 | 検査 | kensa | проверка; осмотр; обследование; анализ | inspection; examination; testing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A4%9C%E6%9F%BB) |
| EX-02339 | 検討 | kentō | рассмотрение; изучение; обсуждение | consideration; examination; study | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A4%9C%E8%A8%8E) |
| EX-02340 | 点検 | tenken | осмотр; проверка исправности | inspection; maintenance check | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%82%B9%E6%A4%9C) |
| EX-02341 | 嫌悪 | ken'o | отвращение; неприязнь | loathing; aversion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E6%82%AA) |
| EX-02342 | 嫌疑 | kengi | подозрение в правонарушении | suspicion of wrongdoing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E7%96%91) |
| EX-02343 | 機嫌 | kigen | настроение; расположение духа | mood; temper | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A9%9F%E5%AB%8C) |
| EX-02344 | 嫌う | kirau | не любить; ненавидеть; избегать | to dislike; to hate; to shun | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E3%81%86) |
| EX-02345 | 嫌い | kirai | неприязнь; нелюбимый; нежелательная склонность | dislike; disliked; an undesirable tendency | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E3%81%84) |
| EX-02346 | 嫌だ | iya da | неприятно; не нравится; не хочу | to be unpleasant; to dislike; to be unwilling | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C) |
| EX-02347 | 嫌がる | iyagaru | выказывать неприязнь; не хотеть | to show dislike; to be unwilling | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E3%81%8C%E3%82%8B) |
| EX-02348 | 嫌気がさす | iyake ga sasu | испытывать отвращение; пресытиться; устать от чего-либо | to become disgusted; to get fed up | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AB%8C%E6%B0%97) |
| EX-02349 | 献上 | kenjō | преподнесение дара вышестоящему лицу | presentation of a gift to a superior | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8C%AE%E4%B8%8A) |
| EX-02350 | 献身的 | kenshinteki | самоотверженный; преданный | selfless; devoted | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8C%AE%E8%BA%AB) |
| EX-02351 | 文献 | bunken | литература по теме; письменные источники | literature on a subject; documentary sources | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%96%87%E7%8C%AE) |
| EX-02352 | 献立 | kondate | меню; план блюд; план действий | menu; meal plan; plan of action | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8C%AE%E7%AB%8B) |
| EX-02353 | 一献 | ikkon | чарка саке; угощение саке | a cup of sake; an offering of sake | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%80%E7%8C%AE) |
| EX-02354 | 絹布 | kenpu | шёлковая ткань | silk fabric | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%B5%B9%E5%B8%83-493010) |
| EX-02355 | 人絹 | jinken | искусственный шёлк; вискозное волокно | artificial silk; rayon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%BA%E7%B5%B9) |
| EX-02356 | 絹 | kinu | шёлк | silk | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%B9) |
| EX-02357 | 薄絹 | usuginu | тонкая шёлковая ткань | thin silk fabric | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%96%84%E7%B5%B9) |
| EX-02358 | 遣外 | kengai | направление за границу; отправка за рубеж | dispatch abroad; an overseas posting | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%81%A3%E5%A4%96-491499) |
| EX-02359 | 派遣 | haken | направление; командирование; отправка | dispatch; sending personnel | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B4%BE%E9%81%A3) |
| EX-02360 | 分遣 | bunken | отправка отдельного отряда | dispatch of a detachment | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%86%E9%81%A3) |
| EX-02361 | 遣う | tsukau | тратить; расходовать; уделять внимание; управлять | to spend; to expend; to exercise care; to manipulate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%81%A3%E3%81%86) |
| EX-02362 | 金遣い | kanezukai | обращение с деньгами; манера тратить | way of spending money; spending habits | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E9%81%A3%E3%81%84) |
| EX-02363 | 遣わす | tsukawasu | посылать; жаловать; соизволить сделать | to send; to bestow; to deign to do | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%81%A3%E3%82%8F%E3%81%99-570925) |
| EX-02364 | 権利 | kenri | право; правомочие | right; entitlement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A8%A9%E5%88%A9) |
| EX-02365 | 権威 | ken'i | авторитет; власть; признанный специалист | authority; power; a recognised expert | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A8%A9%E5%A8%81) |
| EX-02366 | 人権 | jinken | права человека | human rights | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%BA%E6%A8%A9) |
| EX-02367 | 権化 | gonge | воплощение будды или бодхисаттвы; олицетворение | a Buddhist manifestation; a personification | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A8%A9%E5%8C%96-67153) |
| EX-02368 | 権現 | gongen | гонгэн; явление будды в образе синтоистского божества | gongen; a Buddha manifested as a Shinto deity | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A8%A9%E7%8F%BE-67160) |
| EX-02369 | 憲法 | kenpō | конституция | constitution | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%86%B2%E6%B3%95) |
| EX-02370 | 憲章 | kenshō | хартия; устав | charter | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%86%B2%E7%AB%A0) |
| EX-02371 | 官憲 | kanken | власти; правоохранительные органы | the authorities; police authorities | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%98%E6%86%B2) |
| EX-02372 | 賢人 | kenjin | мудрец | sage; wise person | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%B3%A2%E4%BA%BA) |
| EX-02373 | 賢明 | kenmei | мудрый; благоразумный | wise; judicious | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%B3%A2%E6%98%8E) |
| EX-02374 | 先賢 | senken | мудрецы прошлого | sages of the past | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%85%88%E8%B3%A2-549720) |
| EX-02375 | 賢い | kashikoi | умный; мудрый; сообразительный | intelligent; wise; clever | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%B3%A2%E3%81%84) |
| EX-02376 | 謙虚 | kenkyo | скромность; скромный | modesty; humble | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AC%99%E8%99%9A) |
| EX-02377 | 謙譲 | kenjō | скромность; почтительная уступчивость | humility; respectful modesty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AC%99%E8%AD%B2) |
| EX-02378 | 鍵盤 | kenban | клавиатура музыкального инструмента | musical keyboard | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8D%B5%E7%9B%A4) |
| EX-02379 | 鍵 | kagi | ключ; замок; ключ к разгадке | key; lock; clue | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8D%B5) |
| EX-02380 | 鍵穴 | kagiana | замочная скважина | keyhole | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8D%B5%E7%A9%B4) |

Excel: `OnKun_Translations_1-516_2026-10-25_hide_readings.xlsx`, SHA-256 `0b5c21995f84828369741e192df12d34d05fa4eaf1ed74afa2f000e90fe0c44a`.

Excel: `OnKun_Translations_1-540_2026-10-25_hide_readings.xlsx`, SHA-256 `509533c1e38345a9efeba3579e676d06c5091cfa8005d1c6ef7d2e68ff81872a`.
