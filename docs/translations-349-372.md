# Переводы карточек № 349–372

Дата: 24.10.2026. Ветка: `feature/excel-12-card-preview`. База: `a582e07`.

Добавлены **118 пар переводов RU/EN** для 24 карточек от 議 до 急. Всего **1613 переведённых примеров** для карточек № 1–372. Диапазон ID — EX-01498–EX-01615. Все записи разрешены текущим источником: 117 словарных чтений и одна принятая составная форма, 机の脚. Шаблонов или отложенных чтений в новой партии нет.

Предыдущие 1495 записей сохранены целиком: переводы, заметки, источники, даты и отметки. SHA-256 нормализованного набора до добавления: `a0a6dbce583f3ad72c71916ec7540d5c6e17b4049ccce88f01c7c27781fd0deb`.

## Источник и сохранение данных

Рабочий Excel: `OnKun_Translations_1-348_2026-10-24_hide_readings.xlsx`, SHA-256 `e4fb355c4d0745fbfa83d31b93e9fe8a628b452ea325e820efd72b36ab1b5c54`. Сопоставление по стабильным ID, японскому написанию и ромадзи. Обновлены только переводы, словарные ссылки, статус выбора значения и пояснения 118 новых строк: I/J и V:X основного листа; J/K и W:Y листа `OnKun Examples hide readings `. Строки Excel 1499–1616. Все 20 пометок YES в столбце I сохранены; копии примеров совпадают после учёта этого столбца. Результат: `OnKun_Translations_1-372_2026-10-24_hide_readings.xlsx`.

Ячейки, их оформление и высоты новых строк подготовлены через Artifact Tool на небольшом рабочем листе. В исходный XLSX перенесены только эти ячейки, стили и высоты соответствующих строк. Остальные части пакета сохранены побайтово. Сохранены все 10 листов, включая завершающий пробел в имени листа скрытий. Полная пересборка исходного файла не используется.

Таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не меняется: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Импорт применяет общий слой `data/translations-12.json`; обновляются только блок карточек `007.json` и статистика манифеста. Новых копий переводов в коде нет.

## Проверка значений

RU/EN — редакторские переводы основных значений, а не полный перевод словарных статей. Ссылки для каждого ID приведены ниже: 小学館 デジタル大辞泉, プログレッシブ和英中辞典 или 日中辞典 第3版. Японские написания и ромадзи не исправлялись.

- 詰める — переходный глагол, 詰まる — непереходный. 詰む включает мат в сёги, тупик и плотное переплетение ткани; 詰み обозначает мат, без подмены шахом.
- В 客死 сохранено kakushi, в 旅客 — ryokaku, в 行き詰まる — ikizumaru. Словари подтверждают эти варианты. Составное 机の脚 сохранено полностью, включая частицу и пробелы в `tsukue no ashi`.
- 九百 / kyūhyaku переведено как числительное «девятьсот», по составу 9 × 100. Приложены статьи 九 и 百. Найденное отдельное словарное 九百 / kuhyaku имеет другое чтение и устаревшее значение; оно не переносилось в карточку.
- 久々 / hisabisa сверено со статьёй 久久 / hisabisa. Статья о растении 久々 / kugu не использовалась. 九重 включает слои и литературное обозначение императорского двора; 九日 различает длительность и дату.
- 追及 — настойчивое выяснение ответственности; 追求 — стремление к цели. Эти омонимы не объединены. 求める включает просьбу, поиск, покупку и получение ответа; 究める — глубокое изучение или овладение.
- 泣く переводится по написанию 泣, без значений крика животных из 鳴く. 号泣 подчёркивает громкий плач. 泣き沈む сверено с 日中辞典 第3版 и переведено как безутешный плач в глубоком горе.
- 喫煙, 客間, 永久 и 久遠 уже встречались в других карточках: сохранены их установленные RU/EN формулировки, новые ID остаются отдельными примерами.

39 новых примеров имеют редакторскую отметку `sense-selection`. Она обозначает необходимость контекста для выбора значения при принятом чтении. Служебная надпись не отображается; языковые пояснения доступны на RU/EN. Перечень — в [отдельном отчёте](translations-349-372-review.md).

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01498 | 議論 | giron | обсуждение; дискуссия; спор | discussion; debate; argument | [デジタル大辞泉](https://kotobank.jp/word/%E8%AD%B0%E8%AB%96-480642) |
| EX-01499 | 会議 | kaigi | совещание; заседание; конференция | meeting; conference | [デジタル大辞泉](https://kotobank.jp/word/%E4%BC%9A%E8%AD%B0-42216) |
| EX-01500 | 異議 | igi | возражение; протест; несогласие | objection; protest; dissent | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%95%B0%E8%AD%B0) |
| EX-01501 | 菊 | kiku | хризантема | chrysanthemum | [デジタル大辞泉](https://kotobank.jp/word/%E8%8F%8A-472900) |
| EX-01502 | 菊花 | kikuka | цветок хризантемы | chrysanthemum flower | [デジタル大辞泉](https://kotobank.jp/word/%E8%8F%8A%E8%8A%B1-472941) |
| EX-01503 | 白菊 | shiragiku | белая хризантема | white chrysanthemum | [デジタル大辞泉](https://kotobank.jp/word/%E7%99%BD%E8%8F%8A-535405) |
| EX-01504 | 吉日 | kichijitsu | счастливый день; благоприятный день | lucky day; auspicious day | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%89%E6%97%A5) |
| EX-01505 | 吉例 | kichirei | праздничный обычай; традиционное торжество | festive custom; traditional celebration | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%89%E4%BE%8B) |
| EX-01506 | 大吉 | daikichi | большая удача; наилучшее предзнаменование | great good fortune; best omen | [デジタル大辞泉](https://kotobank.jp/word/%E5%A4%A7%E5%90%89-556685) |
| EX-01507 | 吉報 | kippō | добрая весть; хорошие новости | good news; glad tidings | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%89%E5%A0%B1) |
| EX-01508 | 不吉 | fukitsu | зловещий; сулящий несчастье | ominous; ill-omened; unlucky | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8D%E5%90%89) |
| EX-01509 | 喫煙 | kitsuen | курение табака | tobacco smoking | [デジタル大辞泉](https://kotobank.jp/word/%E5%96%AB%E7%85%99-474639) |
| EX-01510 | 満喫 | mankitsu | наслаждение в полной мере; еда или питьё вволю | full enjoyment; eating or drinking one's fill | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BA%80%E5%96%AB) |
| EX-01511 | 喫する | kissuru | есть; пить; курить; претерпевать | eat; drink; smoke; suffer | [デジタル大辞泉](https://kotobank.jp/word/%E5%96%AB%E3%81%99%E3%82%8B-474754) |
| EX-01512 | 詰問 | kitsumon | строгий допрос; требование объяснений | stern questioning; demanding an explanation | [デジタル大辞泉](https://kotobank.jp/word/%E8%A9%B0%E5%95%8F-474858) |
| EX-01513 | 難詰 | nankitsu | суровое порицание; требование объяснений | severe reprimand; censure | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9B%A3%E8%A9%B0) |
| EX-01514 | 面詰 | menkitsu | порицание в лицо; прямая отповедь | face-to-face rebuke; direct reprimand | [デジタル大辞泉](https://kotobank.jp/word/%E9%9D%A2%E8%A9%B0-644528) |
| EX-01515 | 詰める | tsumeru | наполнять; уплотнять; сокращать; доводить до решения | fill; pack tightly; shorten; settle | [デジタル大辞泉](https://kotobank.jp/word/%E8%A9%B0%E3%82%81%E3%82%8B-572623) |
| EX-01516 | 詰め物 | tsumemono | набивка; начинка; зубная пломба | stuffing; padding; dental filling | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A9%B0%E3%82%81%E7%89%A9) |
| EX-01517 | 詰まる | tsumaru | быть заполненным; засоряться; заходить в тупик | be packed; become blocked; reach an impasse | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A9%B0%E3%81%BE%E3%82%8B) |
| EX-01518 | 行き詰まる | ikizumaru | зайти в тупик; застопориться | reach a dead end; come to a standstill | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A1%8C%E3%81%8D%E8%A9%B0%E3%81%BE%E3%82%8B) |
| EX-01519 | 詰む | tsumu | оказаться в матовой позиции; зайти в тупик; быть плотным | be checkmated; be stuck; be tightly woven | [デジタル大辞泉](https://kotobank.jp/word/%E8%A9%B0%E3%82%80-572526) |
| EX-01520 | 詰み | tsumi | мат в сёги | checkmate in shogi | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A9%B0%E3%81%BF) |
| EX-01521 | 却下 | kyakka | отклонение заявления; отказ в принятии | rejection; refusal to accept an application | [デジタル大辞泉](https://kotobank.jp/word/%E5%8D%B4%E4%B8%8B-476202) |
| EX-01522 | 退却 | taikyaku | отступление; отход | retreat; withdrawal | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%80%E5%8D%B4-556703) |
| EX-01523 | 売却 | baikyaku | продажа; реализация имущества | sale; selling off | [デジタル大辞泉](https://kotobank.jp/word/%E5%A3%B2%E5%8D%B4-598636) |
| EX-01524 | 客間 | kyakuma | гостиная; комната для приёма гостей | reception room; drawing room | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%A2%E9%96%93-476140) |
| EX-01525 | 客車 | kyakusha | пассажирский вагон | passenger carriage; passenger car | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%A2%E8%BB%8A-460303) |
| EX-01526 | 乗客 | jōkyaku | пассажир | passenger | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B9%97%E5%AE%A2) |
| EX-01527 | 客死 | kakushi | смерть на чужбине; смерть вдали от родины | death in a foreign land; dying away from home | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%A2%E6%AD%BB) |
| EX-01528 | 主客 | shukaku | хозяин и гость; главное и второстепенное; субъект и объект | host and guest; principal and subordinate; subject and object | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%BB%E5%AE%A2-527987) |
| EX-01529 | 旅客 | ryokaku | путешественник; пассажир | traveller; passenger | [デジタル大辞泉](https://kotobank.jp/word/%E6%97%85%E5%AE%A2-659648) |
| EX-01530 | 脚部 | kyakubu | нижняя часть; ножки; ноги | lower part; legs; supporting legs | [デジタル大辞泉](https://kotobank.jp/word/%E8%84%9A%E9%83%A8-476133) |
| EX-01531 | 脚本 | kyakuhon | сценарий; пьеса; текст постановки | script; screenplay; play | [デジタル大辞泉](https://kotobank.jp/word/%E8%84%9A%E6%9C%AC-51741) |
| EX-01532 | 三脚 | sankyaku | штатив; треножник; три ножки | tripod; three legs | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%89%E8%84%9A-513126) |
| EX-01533 | 脚立 | kyatatsu | стремянка | stepladder | [デジタル大辞泉](https://kotobank.jp/word/%E8%84%9A%E7%AB%8B-51765) |
| EX-01534 | 行脚 | angya | странствие; паломничество; обход мест | pilgrimage; journey on foot; tour | [デジタル大辞泉](https://kotobank.jp/word/%E8%A1%8C%E8%84%9A-29064) |
| EX-01535 | 脚 | ashi | нога; ножка; опора | leg; supporting leg | [デジタル大辞泉](https://kotobank.jp/word/%E8%B6%B3-25145) |
| EX-01536 | 机の脚 | tsukue no ashi | ножка стола | table leg; desk leg | [デジタル大辞泉](https://kotobank.jp/word/%E8%B6%B3-25145) |
| EX-01537 | 逆上 | gyakujō | исступление; потеря самообладания | frenzy; losing one's composure | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%86%E4%B8%8A-476050) |
| EX-01538 | 逆転 | gyakuten | обратное вращение; перемена положения на противоположное | reverse rotation; reversal; turnaround | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%86%E8%BB%A2-476109) |
| EX-01539 | 順逆 | jungyaku | прямой и обратный порядок; повиновение и противодействие | normal and reverse order; obedience and opposition | [デジタル大辞泉](https://kotobank.jp/word/%E9%A0%86%E9%80%86-529756) |
| EX-01540 | 逆立つ | sakadatsu | вставать дыбом; стоять вверх ногами | stand on end; stand upside down | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%86%E7%AB%8B%E3%81%A4-509057) |
| EX-01541 | 逆さ | sakasa | перевёрнутый; обратный; вверх ногами | upside down; reversed; back to front | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%86%E3%81%95-508978) |
| EX-01542 | 逆さま | sakasama | перевёрнутый; задом наперёд; противоречащий порядку | upside down; back to front; contrary to the proper order | [デジタル大辞泉](https://kotobank.jp/word/%E9%80%86%E6%A7%98-508991) |
| EX-01543 | 逆らう | sakarau | противиться; не подчиняться; идти против | oppose; disobey; go against | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%80%86%E3%82%89%E3%81%86) |
| EX-01544 | 虐待 | gyakutai | жестокое обращение; истязание | abuse; maltreatment | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%99%90%E5%BE%85) |
| EX-01545 | 虐殺 | gyakusatsu | зверское убийство; жестокая расправа | brutal killing; massacre | [デジタル大辞泉](https://kotobank.jp/word/%E8%99%90%E6%AE%BA-476021) |
| EX-01546 | 残虐 | zangyaku | жестокость; зверство; жестокий | cruelty; brutality; cruel | [デジタル大辞泉](https://kotobank.jp/word/%E6%AE%8B%E8%99%90-513128) |
| EX-01547 | 虐げる | shiitageru | угнетать; притеснять; жестоко обращаться | oppress; persecute; mistreat | [デジタル大辞泉](https://kotobank.jp/word/%E8%99%90%E3%81%92%E3%82%8B-515929) |
| EX-01548 | 九百 | kyūhyaku | девятьсот | nine hundred | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D-476520); [デジタル大辞泉](https://kotobank.jp/word/%E7%99%BE-612631) |
| EX-01549 | 三拝九拝 | sanpaikyūhai | многократные поклоны; глубочайшее почтение | repeated deep bows; profound respect | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%89%E6%8B%9D%E4%B9%9D%E6%8B%9D-514575) |
| EX-01550 | 九分九厘 | kubukurin | почти полностью; почти наверняка | almost completely; almost certainly | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D%E5%88%86%E4%B9%9D%E5%8E%98-484827) |
| EX-01551 | 九月 | kugatsu | сентябрь | September | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D%E6%9C%88-482778) |
| EX-01552 | 九日 | kokonoka | девять дней; девятое число месяца | nine days; the ninth day of a month | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D%E6%97%A5-500396) |
| EX-01553 | 九重 | kokonoe | девять слоёв; множество слоёв; императорский двор | nine layers; many layers; imperial court | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D%E9%87%8D-477183) |
| EX-01554 | 九つ | kokonotsu | девять штук; девять лет | nine things; nine years old | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B9%9D%E3%81%A4) |
| EX-01555 | 永久 | eikyū | вечность; постоянный | permanence; everlasting | [デジタル大辞泉](https://kotobank.jp/word/%E6%B0%B8%E4%B9%85-443017) |
| EX-01556 | 持久 | jikyū | выносливость; длительное сопротивление | endurance; holding out | [デジタル大辞泉](https://kotobank.jp/word/%E6%8C%81%E4%B9%85-517954) |
| EX-01557 | 耐久 | taikyū | долговечность; прочность; выносливость | durability; endurance | [デジタル大辞泉](https://kotobank.jp/word/%E8%80%90%E4%B9%85-556710) |
| EX-01558 | 久遠 | kuon | вечность; далёкое прошлое или будущее | eternity; the remote past or future | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%85%E9%81%A0-476617) |
| EX-01559 | 久しい | hisashii | давний; долгий; давно продолжающийся | long; long-lasting; of long duration | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B9%85%E3%81%97%E3%81%84) |
| EX-01560 | 久々 | hisabisa | впервые за долгое время; после долгого перерыва | for the first time in a long while; after a long interval | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%85%E4%B9%85-609739) |
| EX-01561 | 及第 | kyūdai | сдача экзамена; соответствие требованиям | passing an examination; meeting the required standard | [デジタル大辞泉](https://kotobank.jp/word/%E5%8F%8A%E7%AC%AC-477143) |
| EX-01562 | 追及 | tsuikyū | выяснение ответственности; настойчивое привлечение к ответу | pressing for accountability; pursuing responsibility | [デジタル大辞泉](https://kotobank.jp/word/%E8%BF%BD%E5%8F%8A-570206) |
| EX-01563 | 普及 | fukyū | распространение; внедрение; популяризация | spread; widespread adoption; popularisation | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%99%AE%E5%8F%8A) |
| EX-01564 | 及ぶ | oyobu | достигать; распространяться; равняться | reach; extend to; match | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%8A%E3%81%B6) |
| EX-01565 | 及び腰 | oyobigoshi | неустойчивая поза с наклоном вперёд; нерешительность | an unbalanced forward-leaning posture; hesitancy | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%8A%E3%81%B3%E8%85%B0) |
| EX-01566 | 及び | oyobi | и; а также | and; as well as | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%8A%E3%81%B3) |
| EX-01567 | 及ぼす | oyobosu | оказывать воздействие; причинять; распространять на | exert an effect; cause; extend to | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%8A%E3%81%BC%E3%81%99) |
| EX-01568 | 弓道 | kyūdō | кюдо; японская стрельба из лука | kyudo; Japanese archery | [デジタル大辞泉](https://kotobank.jp/word/%E5%BC%93%E9%81%93-52153) |
| EX-01569 | 弓状 | kyūjō | дугообразный; в форме лука | arched; bow-shaped | [デジタル大辞泉](https://kotobank.jp/word/%E5%BC%93%E7%8A%B6-476975) |
| EX-01570 | 洋弓 | yōkyū | западный лук; спортивная стрельба из лука | Western-style bow; archery | [デジタル大辞泉](https://kotobank.jp/word/%E6%B4%8B%E5%BC%93-145609) |
| EX-01571 | 弓 | yumi | лук; смычок | bow; musical bow | [デジタル大辞泉](https://kotobank.jp/word/%E5%BC%93-145366) |
| EX-01572 | 弓矢 | yumiya | лук и стрелы | bow and arrows | [デジタル大辞泉](https://kotobank.jp/word/%E5%BC%93%E7%9F%A2-476861) |
| EX-01573 | 丘陵 | kyūryō | холмы; холмистая местность | hills; hilly terrain | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%98%E9%99%B5-52237) |
| EX-01574 | 砂丘 | sakyū | песчаная дюна; бархан | sand dune | [デジタル大辞泉](https://kotobank.jp/word/%E7%A0%82%E4%B8%98-68650) |
| EX-01575 | 丘 | oka | холм; возвышенность | hill; knoll | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%98-451173) |
| EX-01576 | 旧道 | kyūdō | старая дорога; прежняя трасса | old road; former route | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%97%A7%E9%81%93) |
| EX-01577 | 新旧 | shinkyū | новое и старое | new and old | [デジタル大辞泉](https://kotobank.jp/word/%E6%96%B0%E6%97%A7-536942) |
| EX-01578 | 復旧 | fukkyū | восстановление; возвращение в прежнее состояние | restoration; recovery | [デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A9%E6%97%A7-619103) |
| EX-01579 | 休止 | kyūshi | приостановка; прекращение на время | pause; suspension | [デジタル大辞泉](https://kotobank.jp/word/%E4%BC%91%E6%AD%A2-476866) |
| EX-01580 | 休憩 | kyūkei | перерыв; отдых | rest; break | [デジタル大辞泉](https://kotobank.jp/word/%E4%BC%91%E6%86%A9-476761) |
| EX-01581 | 定休 | teikyū | регулярный выходной; закрытие по установленным дням | regular closing day; scheduled closure | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%9A%E4%BC%91-574065) |
| EX-01582 | 休む | yasumu | отдыхать; спать; пропускать занятия или работу | rest; sleep; be absent from school or work | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BC%91%E3%82%80) |
| EX-01583 | 休み | yasumi | отдых; выходной; каникулы; отсутствие | rest; day off; holiday; absence | [デジタル大辞泉](https://kotobank.jp/word/%E4%BC%91%E3%81%BF-648363) |
| EX-01584 | 休まる | yasumaru | отдохнуть; успокоиться; почувствовать облегчение | feel rested; feel relaxed; be at ease | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BC%91%E3%81%BE%E3%82%8B) |
| EX-01585 | 休める | yasumeru | дать отдых; успокоить; прервать работу | give a rest; put at ease; pause work | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BC%91%E3%82%81%E3%82%8B) |
| EX-01586 | 気休め | kiyasume | временное успокоение; утешение | temporary reassurance; consolation | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B0%97%E4%BC%91%E3%82%81) |
| EX-01587 | 吸収 | kyūshū | впитывание; поглощение; усвоение | absorption; assimilation | [デジタル大辞泉](https://kotobank.jp/word/%E5%90%B8%E5%8F%8E-52041) |
| EX-01588 | 吸入 | kyūnyū | вдыхание; ингаляция | inhalation | [デジタル大辞泉](https://kotobank.jp/word/%E5%90%B8%E5%85%A5-477260) |
| EX-01589 | 呼吸 | kokyū | дыхание; слаженность; тонкость приёма | breathing; coordination; knack | [デジタル大辞泉](https://kotobank.jp/word/%E5%91%BC%E5%90%B8-63654) |
| EX-01590 | 吸う | sū | вдыхать; сосать; втягивать; впитывать | inhale; suck; draw in; absorb | [デジタル大辞泉](https://kotobank.jp/word/%E5%90%B8%E3%81%86-540373) |
| EX-01591 | 不朽 | fukyū | нетленность; непреходящий; бессмертный | imperishability; enduring; immortal | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%8D%E6%9C%BD-617001) |
| EX-01592 | 老朽 | rōkyū | ветхость; изношенность; обветшалый | deterioration with age; dilapidated; worn-out | [デジタル大辞泉](https://kotobank.jp/word/%E8%80%81%E6%9C%BD-662538) |
| EX-01593 | 腐朽 | fukyū | гниение; разложение | decay; rot | [デジタル大辞泉](https://kotobank.jp/word/%E8%85%90%E6%9C%BD-617005) |
| EX-01594 | 朽ちる | kuchiru | гнить; разрушаться; угасать | rot; decay; perish | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%BD%E3%81%A1%E3%82%8B) |
| EX-01595 | 臼歯 | kyūshi | коренной зуб; жевательный зуб | molar; back tooth | [デジタル大辞泉](https://kotobank.jp/word/%E8%87%BC%E6%AD%AF-52028) |
| EX-01596 | 脱臼 | dakkyū | вывих сустава | joint dislocation | [デジタル大辞泉](https://kotobank.jp/word/%E8%84%B1%E8%87%BC-93546) |
| EX-01597 | 石臼 | ishiusu | каменные жернова; каменная ступа | stone mill; stone mortar | [デジタル大辞泉](https://kotobank.jp/word/%E7%9F%B3%E8%87%BC-202673) |
| EX-01598 | 求職 | kyūshoku | поиск работы | job hunting; seeking employment | [デジタル大辞泉](https://kotobank.jp/word/%E6%B1%82%E8%81%B7-180535) |
| EX-01599 | 要求 | yōkyū | требование; запрос; потребность | demand; request; requirement | [デジタル大辞泉](https://kotobank.jp/word/%E8%A6%81%E6%B1%82-145610) |
| EX-01600 | 追求 | tsuikyū | стремление к цели; настойчивый поиск | pursuit; striving after a goal | [デジタル大辞泉](https://kotobank.jp/word/%E8%BF%BD%E6%B1%82-570207) |
| EX-01601 | 求める | motomeru | искать; требовать; желать; приобретать | seek; request; want; acquire | [デジタル大辞泉](https://kotobank.jp/word/%E6%B1%82%E3%82%81%E3%82%8B-646092) |
| EX-01602 | 求め | motome | просьба; требование; обращение | request; demand; appeal | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B1%82%E3%82%81) |
| EX-01603 | 究明 | kyūmei | тщательное выяснение; установление истины | thorough investigation; clarification of the truth | [デジタル大辞泉](https://kotobank.jp/word/%E7%A9%B6%E6%98%8E-477385) |
| EX-01604 | 研究 | kenkyū | исследование; изучение | research; study | [デジタル大辞泉](https://kotobank.jp/word/%E7%A0%94%E7%A9%B6-491636) |
| EX-01605 | 学究 | gakkyū | научные занятия; учёный-исследователь | scholarly study; scholar | [デジタル大辞泉](https://kotobank.jp/word/%E5%AD%A6%E7%A9%B6-464171) |
| EX-01606 | 究める | kiwameru | изучить до глубины; досконально овладеть | study thoroughly; master in depth | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%B6%E3%82%81%E3%82%8B) |
| EX-01607 | 号泣 | gōkyū | громкие рыдания; плач навзрыд | loud weeping; wailing | [デジタル大辞泉](https://kotobank.jp/word/%E5%8F%B7%E6%B3%A3-494642) |
| EX-01608 | 感泣 | kankyū | слёзы от сильного волнения; растроганность до слёз | being moved to tears; tears of emotion | [デジタル大辞泉](https://kotobank.jp/word/%E6%84%9F%E6%B3%A3-469465) |
| EX-01609 | 泣く | naku | плакать; страдать; уступать в ущерб себе | cry; suffer; make a reluctant concession | [デジタル大辞泉](https://kotobank.jp/word/%E6%B3%A3%E3%81%8F-588392) |
| EX-01610 | 泣き沈む | nakishizumu | погрузиться в горе и слёзы; безутешно рыдать | be overcome with grief and tears; weep inconsolably | [日中辞典 第3版](https://kotobank.jp/jazhword/%E6%B3%A3%E3%81%8D%E6%B2%88%E3%82%80) |
| EX-01611 | 急速 | kyūsoku | быстрый; стремительный; быстрыми темпами | rapid; swift; rapidly | [デジタル大辞泉](https://kotobank.jp/word/%E6%80%A5%E9%80%9F-477130) |
| EX-01612 | 急務 | kyūmu | неотложная задача; первоочередное дело | urgent task; pressing business | [デジタル大辞泉](https://kotobank.jp/word/%E6%80%A5%E5%8B%99-477382) |
| EX-01613 | 緊急 | kinkyū | срочность; неотложный; экстренный | urgency; urgent; emergency | [デジタル大辞泉](https://kotobank.jp/word/%E7%B7%8A%E6%80%A5-480916) |
| EX-01614 | 急ぐ | isogu | спешить; торопиться; ускорять | hurry; hasten; rush | [デジタル大辞泉](https://kotobank.jp/word/%E6%80%A5%E3%81%90-432742) |
| EX-01615 | 急ぎ | isogi | спешка; срочность; срочный | haste; urgency; urgent | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%80%A5%E3%81%8E) |

## Проверки

- `scripts/test_import.py`: 7 проверок, включая все ID, японские написания и ромадзи, прежние переводы, политику отложенных чтений и детерминированную пересборку.
- `scripts/test_translations.cjs`: все 24 карточки / 118 примеров на RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены порядок, раскрытие, перевод и пояснения каждого ID, отсутствие служебных надписей и горизонтального переполнения.
- `scripts/test_cards.cjs`: навигация, поиск, раскрытие и восстановление после ошибки.
- `scripts/test_on_drill.cjs`, `scripts/test_kun_drill.cjs`: оба языка и три ширины; видимые наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py`, `scripts/test_kun_source.py`: сверка 1299 исходных строк упражнений 1–300 и скрытий. Диапазон упражнений не расширялся.
- Excel: 1613 пар переводов точно соответствуют общим данным; сохранены 10 листов, все 20 скрытий, прежние значения и оформление. Будущие строки остаются без переводов.

Браузер: Google Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция; физический телефон не использовался. Визуально просмотрены карточки на широком и мобильном экране, а также изменённые диапазоны обоих листов Excel. Локальный Noto Serif CJK JP используется для проверки; файлы шрифтов сайта не меняются.

Main, README, HTML/CSS/JS карточек, код и наборы ON/KUN, данные видимости и опубликованный сайт не изменены.
