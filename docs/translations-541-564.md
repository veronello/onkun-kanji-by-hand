# Переводы карточек № 541–564

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `2dc8e4376b038fdde5999b513db8a06c25974bf2`.

Добавлены 126 пар RU/EN для 24 карточек от 繭 до 孤: EX-02381–EX-02506. Всего 2500 пар. Все примеры новой партии разрешены к публикации и переведены.

## Словарная сверка

Источники: 小学館 プログレッシブ和英中辞典(第4版), デジタル大辞泉 и 精選版 日本国語大辞典 через Kotobank. Переводы — редакторские эквиваленты основных значений, а не полное воспроизведение статей. Ссылки записаны у каждого примера и на обоих листах Excel.

- Девять повторяющихся слов сохраняют прежние переводы, пояснения и источники: 経験, 元気, 家元, 原因, 加減, 雨戸, 呼吸, 呼応, 堅固.
- 弦 с чтением tsuru переведено как «тетива»; значения чтения gen сюда не перенесены. 霊験 сохраняет чтение reigen. 懸想 / kesō обозначает любовное чувство.
- 繭玉 — праздничные ветки с украшениями в форме коконов. 幽玄 снабжено пояснением эстетического понятия югэн. 下戸 — человек, который не переносит или не любит алкоголь.
- 験がある и 厳かだ переведены по базовым словарным статьям; 厳しさ указано как производное существительное в 大辞泉. Формы и чтения сохранены.
- 54 записи новой партии имеют sense-selection (всего 956). Это пометки выбора значения по контексту, не сомнения в чтении.
- Прежние исключения, включая EX-02297 и EX-02303, сохранены без переводов.

## Проверки

- Все 7 тестов `python scripts/test_import.py` прошли: полнота партии, соответствие чтений, сохранность прежних переводов, детерминированная пересборка.
- `node --check cards.js` и `git diff --check` прошли.
- В Excel проверена 687081 ячейка вне области новых переводов: значения, типы, стили, комментарии и ссылки сохранены. Сохранены 10 листов, 9555 примеров и 20 отметок YES. Все 2500 пар совпадают с карточками. В пакете XLSX изменены только переводные ячейки и высоты новых строк двух листов примеров.
- Браузерный тест `node scripts/test_cards.cjs` не запустился: в окружении нет Chromium для Playwright. Проверка в браузере остаётся локальной.
- Изменены только переводные данные, экспорт карточек, итоговый счётчик, тесты и этот журнал. Интерфейс и тренировки ON/KUN не менялись. Сохранено обновление README из базового коммита.

## Примеры и источники

| ID | Японский | Ромадзи | RU | EN | Источник |
|---|---|---|---|---|---|
| EX-02381 | 繭糸 | kenshi | шёлковая нить из кокона | cocoon silk thread | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%B9%AD%E7%B3%B8-492002) |
| EX-02382 | 繭 | mayu | кокон | cocoon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B9%AD) |
| EX-02383 | 繭玉 | mayudama | новогодние ветки с украшениями в форме коконов | New Year branches decorated with cocoon-shaped ornaments | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%B9%AD%E7%8E%89-137241) |
| EX-02384 | 顕著 | kencho | заметный; явный; выдающийся | conspicuous; marked; remarkable | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A1%95%E8%91%97) |
| EX-02385 | 顕彰 | kenshō | публичное признание заслуг; чествование | public recognition of merit; honouring | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A1%95%E5%BD%B0) |
| EX-02386 | 顕微鏡 | kenbikyō | микроскоп | microscope | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A1%95%E5%BE%AE%E9%8F%A1) |
| EX-02387 | 試験 | shiken | экзамен; испытание; проверка | examination; test; trial | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A9%A6%E9%A8%93) |
| EX-02388 | 経験 | keiken | опыт; пережитое | experience; an experience | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C%E9%A8%93) |
| EX-02389 | 実験 | jikken | эксперимент; опыт | experiment; experimentation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%9F%E9%A8%93) |
| EX-02390 | 験がある | gen ga aru | иметь действие; давать результат | to have an effect; to be efficacious | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A8%93) |
| EX-02391 | 霊験 | reigen | чудотворная сила; действенность молитвы | miraculous efficacy; power to answer prayers | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%9C%8A%E9%A8%93-151254) |
| EX-02392 | 懸垂 | kensui | подвешивание; вис; подтягивание | suspension; hanging; chin-up | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E5%9E%82) |
| EX-02393 | 懸賞 | kenshō | конкурс с призами; приз; вознаграждение | prize competition; prize; reward | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E8%B3%9E) |
| EX-02394 | 懸命 | kenmei | изо всех сил; с полной отдачей | with all one's might; strenuous | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E5%91%BD) |
| EX-02395 | 懸念 | kenen | опасение; беспокойство | concern; apprehension | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E5%BF%B5) |
| EX-02396 | 懸想 | kesō | влюблённость; любовное влечение | romantic love; amorous longing | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%87%B8%E6%83%B3-490006) |
| EX-02397 | 懸ける | kakeru | назначать награду; ставить на кон; рисковать | to offer a reward; to stake; to risk | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E3%81%91%E3%82%8B) |
| EX-02398 | 命懸け | inochigake | с риском для жизни; не щадя жизни | at the risk of one's life | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%91%BD%E6%87%B8%E3%81%91-435471) |
| EX-02399 | 懸かる | kakaru | висеть; быть поставленным на кон; зависеть от | to hang; to be at stake; to depend on | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%87%B8%E3%81%8B%E3%82%8B) |
| EX-02400 | 元素 | genso | химический элемент | chemical element | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83%E7%B4%A0) |
| EX-02401 | 元気 | genki | бодрость; энергия; здоровый; бодрый | energy; vitality; healthy; cheerful | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%85%83%E6%B0%97-491619) |
| EX-02402 | 多元 | tagen | множественность начал; несколько неизвестных | plurality of principles; several unknowns | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%A4%9A%E5%85%83-560204) |
| EX-02403 | 元祖 | ganso | основатель; родоначальник | founder; originator | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83%E7%A5%96) |
| EX-02404 | 元日 | ganjitsu | первый день Нового года | New Year's Day | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83%E6%97%A5) |
| EX-02405 | 元来 | ganrai | изначально; по природе; по существу | originally; by nature; essentially | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83%E6%9D%A5) |
| EX-02406 | 元 | moto | начало; причина; прежнее состояние; капитал | origin; cause; former state; capital | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83) |
| EX-02407 | 元帳 | motochō | бухгалтерская книга; гроссбух | ledger | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%83%E5%B8%B3) |
| EX-02408 | 家元 | iemoto | наследственная школа традиционного искусства; её глава | the hereditary house of a traditional art; its head | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AE%B6%E5%85%83-29878) |
| EX-02409 | 幻滅 | genmetsu | разочарование; утрата иллюзий | disillusionment | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B9%BB%E6%BB%85) |
| EX-02410 | 幻覚 | genkaku | галлюцинация | hallucination | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B9%BB%E8%A6%9A) |
| EX-02411 | 夢幻 | mugen | грёзы; фантазия; иллюзия | dream; fantasy; illusion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A4%A2%E5%B9%BB) |
| EX-02412 | 幻 | maboroshi | призрак; видение; иллюзия | phantom; vision; illusion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B9%BB) |
| EX-02413 | 玄米 | genmai | нешлифованный рис; бурый рис | unpolished rice; brown rice | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8E%84%E7%B1%B3) |
| EX-02414 | 玄関 | genkan | вход; прихожая | entrance; entrance hall | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8E%84%E9%96%A2) |
| EX-02415 | 幽玄 | yūgen | таинственная глубина; сокровенная красота | mysterious depth; subtle, profound beauty | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%B9%BD%E7%8E%84-144698) |
| EX-02416 | 言行 | genkō | слова и поступки | words and deeds | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%80%E8%A1%8C) |
| EX-02417 | 言論 | genron | выражение мнений в речи и печати | expression of opinion in speech and writing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%80%E8%AB%96) |
| EX-02418 | 宣言 | sengen | заявление; декларация; провозглашение | declaration; announcement; proclamation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%A3%E8%A8%80) |
| EX-02419 | 言上 | gonjō | почтительное обращение или доклад старшему | respectful statement or report to a superior | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%A8%80%E4%B8%8A-506163) |
| EX-02420 | 伝言 | dengon | переданное сообщение | message passed on | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BC%9D%E8%A8%80) |
| EX-02421 | 無言 | mugon | молчание; безмолвный | silence; silent | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%84%A1%E8%A8%80) |
| EX-02422 | 言う | iu | говорить; сказать; сообщать | to say; to speak; to tell | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%80%E3%81%86) |
| EX-02423 | 物言い | monoii | манера говорить; возражение | manner of speaking; objection | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%89%A9%E8%A8%80%E3%81%84-176917) |
| EX-02424 | 言葉 | kotoba | слово; язык; речь; выражение | word; language; speech; expression | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%80%E8%91%89) |
| EX-02425 | 寝言 | negoto | разговор во сне; вздор | sleep talking; nonsense | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AF%9D%E8%A8%80) |
| EX-02426 | 上弦 | jōgen | первая четверть Луны | first quarter of the moon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8A%E5%BC%A6) |
| EX-02427 | 正弦 | seigen | синус | sine | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AD%A3%E5%BC%A6) |
| EX-02428 | 弦 | tsuru | тетива | bowstring | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%A6) |
| EX-02429 | 限度 | gendo | предел; допустимая граница | limit; bound | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%99%90%E5%BA%A6) |
| EX-02430 | 制限 | seigen | ограничение | restriction; limitation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%B6%E9%99%90) |
| EX-02431 | 期限 | kigen | срок; крайний срок | term; deadline; time limit | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%9F%E9%99%90) |
| EX-02432 | 限る | kagiru | ограничивать; ограничиваться | to limit; to restrict; to be limited to | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%99%90%E3%82%8B) |
| EX-02433 | 限り | kagiri | предел; границы; конец | limit; extent; end | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%99%90%E3%82%8A) |
| EX-02434 | 原因 | gen'in | причина | cause | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8E%9F%E5%9B%A0-491406) |
| EX-02435 | 原理 | genri | принцип; основополагающий закон | principle; fundamental law | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%9F%E7%90%86) |
| EX-02436 | 高原 | kōgen | плато; нагорье | plateau; highlands | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%AB%98%E5%8E%9F) |
| EX-02437 | 原 | hara | равнина; открытое поле | plain; open field | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%9F) |
| EX-02438 | 野原 | nohara | поле; луг | field; meadow | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%8E%E5%8E%9F) |
| EX-02439 | 松原 | matsubara | сосновая роща на равнине | pine grove on open ground | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%9D%BE%E5%8E%9F-635054) |
| EX-02440 | 現象 | genshō | явление | phenomenon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8F%BE%E8%B1%A1) |
| EX-02441 | 現在 | genzai | настоящее время; сейчас; текущий | the present; now; current | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8F%BE%E5%9C%A8) |
| EX-02442 | 表現 | hyōgen | выражение; изображение | expression; representation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A1%A8%E7%8F%BE) |
| EX-02443 | 現れる | arawareru | появляться; возникать; становиться видимым | to appear; to emerge; to come into view | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8F%BE%E3%82%8C%E3%82%8B) |
| EX-02444 | 現れ | araware | появление; проявление | appearance; manifestation | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%8F%BE%E3%82%8C-428141) |
| EX-02445 | 現す | arawasu | показывать; обнаруживать; проявлять | to reveal; to show; to manifest | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8F%BE%E3%81%99) |
| EX-02446 | 舷側 | gensoku | борт судна | side of a ship | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%88%B7%E5%81%B4) |
| EX-02447 | 右舷 | ugen | правый борт | starboard | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%B3%E8%88%B7) |
| EX-02448 | 減少 | genshō | уменьшение; сокращение | decrease; reduction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%9B%E5%B0%91) |
| EX-02449 | 増減 | zōgen | увеличение и уменьшение; колебания | increase and decrease; fluctuations | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%97%E6%B8%9B) |
| EX-02450 | 加減 | kagen | сложение и вычитание; регулировка; степень; самочувствие | addition and subtraction; adjustment; degree; state of health | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%8A%A0%E6%B8%9B-461308) |
| EX-02451 | 減る | heru | уменьшаться; убывать; изнашиваться | to decrease; to diminish; to wear down | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%9B%E3%82%8B) |
| EX-02452 | 目減り | meberi | убыль веса или объёма; снижение стоимости | loss of weight or volume; decline in value | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9B%AE%E6%B8%9B%E3%82%8A) |
| EX-02453 | 減らす | herasu | уменьшать; сокращать | to reduce; to cut down | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%9B%E3%82%89%E3%81%99) |
| EX-02454 | 人減らし | hitoberashi | сокращение персонала | staff reduction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%BA%E6%B8%9B%E3%82%89%E3%81%97) |
| EX-02455 | 源泉 | gensen | источник; первоисточник | source; wellspring | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BA%90%E6%B3%89) |
| EX-02456 | 水源 | suigen | исток реки; источник воды | source of a river; water source | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B0%B4%E6%BA%90) |
| EX-02457 | 資源 | shigen | ресурсы | resources | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%B3%87%E6%BA%90) |
| EX-02458 | 源 | minamoto | исток; источник; начало | headwaters; source; origin | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BA%90) |
| EX-02459 | 厳格 | genkaku | строгий; требовательный | strict; stern; rigorous | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%B3%E6%A0%BC) |
| EX-02460 | 厳重 | genjū | строгий; тщательный; надёжный | strict; thorough; secure | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%B3%E9%87%8D) |
| EX-02461 | 威厳 | igen | достоинство; величие | dignity; majesty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A8%81%E5%8E%B3) |
| EX-02462 | 荘厳 | sōgon | торжественность; величественный | solemnity; majestic | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8D%98%E5%8E%B3) |
| EX-02463 | 厳かだ | ogosoka da | торжественный; величавый | solemn; stately | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%B3%E3%81%8B) |
| EX-02464 | 厳しい | kibishii | строгий; суровый; тяжёлый | strict; severe; harsh | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%B3%E3%81%97%E3%81%84) |
| EX-02465 | 厳しさ | kibishisa | строгость; суровость; тяжесть | strictness; severity; harshness | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8E%B3%E3%81%97%E3%81%84-475410) |
| EX-02466 | 自己 | jiko | сам; себя; собственное «я» | oneself; self | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%87%AA%E5%B7%B1) |
| EX-02467 | 利己 | riko | своекорыстие; эгоизм | self-interest; selfishness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%A9%E5%B7%B1) |
| EX-02468 | 知己 | chiki | знакомый; близкий друг | acquaintance; close friend | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9F%A5%E5%B7%B1) |
| EX-02469 | 克己 | kokki | самообладание; самодисциплина | self-control; self-restraint | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%8B%E5%B7%B1) |
| EX-02470 | 己 | onore | сам; себя; ты (грубо) | oneself; you (derogatory) | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B7%B1) |
| EX-02471 | 戸外 | kogai | вне дома; на открытом воздухе | outdoors; in the open air | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%88%B8%E5%A4%96) |
| EX-02472 | 戸籍 | koseki | семейный реестр; регистрация семьи | family register; family registration | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%88%B8%E7%B1%8D) |
| EX-02473 | 下戸 | geko | человек, не переносящий или не любящий алкоголь | person unable or unwilling to drink alcohol | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%B8%8B%E6%88%B8-489811) |
| EX-02474 | 戸 | to | дверь | door | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%88%B8) |
| EX-02475 | 雨戸 | amado | наружные защитные ставни | exterior storm shutters | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%9B%A8%E6%88%B8-27180) |
| EX-02476 | 古代 | kodai | древность; древние времена | antiquity; ancient times | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A4%E4%BB%A3) |
| EX-02477 | 古典 | koten | классика; классическое произведение | the classics; a classic work | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A4%E5%85%B8) |
| EX-02478 | 太古 | taiko | глубокая древность; доисторические времена | remote antiquity; prehistoric times | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A4%AA%E5%8F%A4) |
| EX-02479 | 古い | furui | старый; давний; устаревший | old; long-standing; outdated | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A4%E3%81%84) |
| EX-02480 | 古株 | furukabu | старый пень; старожил; давний сотрудник | old stump; old-timer; long-serving member | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A4%E6%A0%AA) |
| EX-02481 | 古びる | furubiru | ветшать; стареть; устаревать | to grow old; to become worn; to become outdated | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A4%E3%81%B3%E3%82%8B) |
| EX-02482 | 使い古す | tsukaifurusu | изнашивать; затаскивать; делать избитым | to wear out through use; to overuse | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BD%BF%E3%81%84%E5%8F%A4%E3%81%99) |
| EX-02483 | 呼吸 | kokyū | дыхание; слаженность; тонкость приёма | breathing; coordination; knack | [デジタル大辞泉](https://kotobank.jp/word/%E5%91%BC%E5%90%B8-63654) |
| EX-02484 | 呼応 | koō | перекличка; согласованные действия; грамматическое соответствие | calling and responding; coordinated action; grammatical correspondence | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%91%BC%E5%BF%9C-63482) |
| EX-02485 | 点呼 | tenko | перекличка; поимённая проверка | roll call | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%82%B9%E5%91%BC) |
| EX-02486 | 呼ぶ | yobu | звать; вызывать; приглашать; называть | to call; to summon; to invite; to name | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%91%BC%E3%81%B6) |
| EX-02487 | 呼び声 | yobigoe | зов; призыв; репутация кандидата | call; cry; reputation as a likely candidate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%91%BC%E3%81%B3%E5%A3%B0) |
| EX-02488 | 固定 | kotei | закрепление; фиксация | fixing in place; securing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E5%AE%9A) |
| EX-02489 | 固有 | koyū | присущий; свойственный; особый | inherent; characteristic; peculiar to | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E6%9C%89) |
| EX-02490 | 堅固 | kengo | прочный; крепкий; непоколебимый | solid; strong; unwavering | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A0%85%E5%9B%BA) |
| EX-02491 | 固める | katameru | делать твёрдым; укреплять; закреплять | to harden; to strengthen; to consolidate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E3%82%81%E3%82%8B) |
| EX-02492 | 固め | katame | укрепление; охрана; твёрдое обещание | strengthening; defence; pledge | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E3%82%81) |
| EX-02493 | 固まる | katamaru | затвердевать; собираться вместе; определяться | to harden; to gather together; to become settled | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E3%81%BE%E3%82%8B) |
| EX-02494 | 固まり | katamari | комок; глыба; скопление | lump; mass; cluster | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%9B%BA%E3%81%BE%E3%82%8A-463693) |
| EX-02495 | 固い | katai | твёрдый; крепкий; тугой; непреклонный | hard; firm; tight; inflexible | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E3%81%84) |
| EX-02496 | 固さ | katasa | твёрдость; крепость; упрямство | hardness; firmness; stubbornness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%BA%E3%81%95) |
| EX-02497 | 股間 | kokan | промежность; пространство между бёдрами | crotch; space between the thighs | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%82%A1%E9%96%93) |
| EX-02498 | 股関節 | kokansetsu | тазобедренный сустав | hip joint | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%82%A1%E9%96%A2%E7%AF%80) |
| EX-02499 | 内股 | uchimata | внутренняя сторона бедра; походка носками внутрь; ути-мата | inner thigh; inward-pointing toes; uchimata throw | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%86%85%E8%82%A1) |
| EX-02500 | 大股 | ōmata | широкий шаг; широко расставленные ноги | long stride; legs spread wide | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A4%A7%E8%82%A1) |
| EX-02501 | 虎穴 | koketsu | тигриное логово; опасное место | tiger's den; dangerous place | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%99%8E%E7%A9%B4-500179) |
| EX-02502 | 猛虎 | mōko | свирепый тигр | fierce tiger | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8C%9B%E8%99%8E) |
| EX-02503 | 虎 | tora | тигр; пьяница (разг.) | tiger; drunk (colloquial) | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%99%8E) |
| EX-02504 | 孤児 | koji | сирота | orphan | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AD%A4%E5%85%90) |
| EX-02505 | 孤独 | kodoku | одиночество; уединение | loneliness; solitude | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AD%A4%E7%8B%AC) |
| EX-02506 | 孤立 | koritsu | изоляция; обособленность | isolation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AD%A4%E7%AB%8B) |

Excel: `OnKun_Translations_1-564_2026-10-25_hide_readings.xlsx`, SHA-256 `045c9af2f1063a79c024942089a8cd0ecf07638cdf75acccde8c9ce69325da15`.
