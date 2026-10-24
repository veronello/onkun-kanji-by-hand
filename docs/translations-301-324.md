# Переводы карточек № 301–324

Дата: 24.10.2026. Ветка: `feature/excel-12-card-preview`. База: `d8c3103`.

Добавлены **102 пары переводов RU/EN** для 24 карточек от 企 до 亀. Всего **1399 переведённых примеров** для карточек № 1–324. Все 102 новых чтения имеют принятый статус; диапазон ID — EX-01300–EX-01401. Шаблонов или неподтверждённых чтений в этой партии нет.

Предыдущие 1297 записей сохранены целиком, включая формулировки, заметки, источники и даты. Контрольная сумма нормализованного набора до добавления: `12d7d1ae0f37609144e4fc886e12393929abc8b913b9a00019f12628c121402e`.

## Источник и сохранение данных

Рабочий Excel: `OnKun_Translations_1-300_2026-10-23 upd hide readings(2).xlsx`, SHA-256 `0bb4620b96fd898b4c1e5ccebe729f3f12689cadb95aa7562909d3dacda59972`. Сопоставление по ID, японскому написанию и ромадзи. Обновляются только переводы, словарные источники, статус значения и пояснения новых 102 строк: I/J и V:X основного листа; J/K и W:Y листа `OnKun Examples hide readings `. Строки 1301–1402. Сохранены все 20 пометок YES в отдельном столбце I; обе копии примеров содержат одинаковые данные после учёта этого столбца. Исходный файл не перезаписывается, результат — `OnKun_Translations_1-324_2026-10-24_hide_readings.xlsx`.

Новые значения, оформление и высоты строк подготовлены через Artifact Tool. Из-за ошибки предпросмотра имени листа с завершающим пробелом применено точечное объединение OOXML: в исходный пакет перенесены только созданные ячейки, их стили и высоты новых строк. Все остальные части XLSX сохранены побайтово; завершающий пробел в имени листа также сохранён. Полная пересборка исходного файла не используется.

Неизменяемая таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` остаётся прежней (SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`). Импорт читает её и применяет переводы из `data/translations-12.json`; новые примеры попадают только в блок `data/excel/cards/006.json` и статистику манифеста. Тексты отдельных упражнений не дублируются.

## Словарная проверка

RU/EN — редакторские эквиваленты основных значений, а не полный перевод словарных статей. Источники для каждого ID — 小学館 デジタル大辞泉, 精選版 日本国語大辞典 или 小学館 プログレッシブ和英中辞典.

- 基 / moto и 基 / motoi — две разные записи с сохранёнными чтениями; обе обозначают основу или фундамент. Они не объединены.
- 危ながる — считать что-либо опасным и выражать опасение; 危ぶむ также может означать сомнение в благополучном исходе. 危うく требует продолжения фразы: «чуть не» или «едва».
- 気色ばむ — выражать раздражение. В 火の気 сохранены пробелы ромадзи `hi no ke`, частица и полное японское написание.
- 起きる／起こる и 起こす различаются по переходности. 帰す / kaesu — отпустить человека домой или отправить обратно; чтение не заменяется на kisu.
- 鬼神 сохраняет kishin. 餓鬼 разделено на буддийского «голодного духа» и пренебрежительное обращение к ребёнку; 鬼 включает водящего в игре.
- 既往症 — ранее перенесённое заболевание; словарное определение описывает уже излеченную болезнь. Перевод не подменён понятием любого текущего хронического заболевания.
- 広軌 — широкая колея; пояснение различает обычный стандарт 1435 мм и японское употребление относительно 1067 мм. 帰納 — логическая индукция, 紀元 — точка отсчёта летосчисления.

41 примеров имеют внутреннюю отметку `sense-selection`: значение выбирается по контексту. Это не отметка сомнительного чтения. Служебная надпись не выводится в карточках.

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01300 | 企画 | kikaku | планирование; план; проект | planning; plan; project | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BC%81%E7%94%BB-472453) |
| EX-01301 | 企図 | kito | замысел; намерение; план | intention; design; plan | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BC%81%E5%9B%B3-474919) |
| EX-01302 | 企業 | kigyō | предприятие; компания | enterprise; company | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BC%81%E6%A5%AD-50116) |
| EX-01303 | 企てる | kuwadateru | замышлять; планировать; предпринимать | plan; scheme; attempt | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BC%81%E3%81%A6%E3%82%8B-487522) |
| EX-01304 | 企て | kuwadate | замысел; план; попытка | plan; scheme; attempt | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E4%BC%81%E3%81%A6) |
| EX-01305 | 歌舞伎 | kabuki | кабуки; традиционный японский театр | kabuki; traditional Japanese theatre | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%AD%8C%E8%88%9E%E4%BC%8E-46217) |
| EX-01306 | 危険 | kiken | опасность; риск; опасный | danger; risk; dangerous | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%8D%B1%E9%99%BA-473132) |
| EX-01307 | 危害 | kigai | вред; ущерб жизни, здоровью или имуществу | harm; injury; damage to life or property | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%8D%B1%E5%AE%B3-472385) |
| EX-01308 | 安危 | anki | безопасность или опасность; благополучие | safety or danger; well-being | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AE%89%E5%8D%B1-429089) |
| EX-01309 | 危ない | abunai | опасный; ненадёжный; неустойчивый | dangerous; unreliable; precarious | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%8D%B1%E3%81%AA%E3%81%84) |
| EX-01310 | 危ながる | abunagaru | опасаться; проявлять тревогу из-за опасности | show concern about danger; be apprehensive | [精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8D%B1%E3%81%AA%E3%81%8C%E3%82%8B-3136226) |
| EX-01311 | 危うい | ayaui | опасный; непрочный; находящийся под угрозой | dangerous; precarious; in jeopardy | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%8D%B1%E3%81%86%E3%81%84) |
| EX-01312 | 危うく | ayauku | чуть не; едва; с трудом избежав | almost; nearly; narrowly | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%8D%B1%E3%81%86%E3%81%8F) |
| EX-01313 | 危ぶむ | ayabumu | опасаться за; сомневаться в благополучном исходе | fear for; doubt the outcome | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%8D%B1%E3%81%B6%E3%82%80) |
| EX-01314 | 机上 | kijō | на письменном столе; поверхность стола | on the desk; desk top | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9C%BA%E4%B8%8A-473748) |
| EX-01315 | 机辺 | kihen | у письменного стола; возле стола | by the desk; vicinity of the desk | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9C%BA%E8%BE%BA-475572) |
| EX-01316 | 机 | tsukue | письменный стол | desk | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9C%BA-99156) |
| EX-01317 | 気体 | kitai | газ; газообразное состояние | gas; gaseous state | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B0%97%E4%BD%93-50804) |
| EX-01318 | 気候 | kikō | климат | climate | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B0%97%E5%80%99-50259) |
| EX-01319 | 元気 | genki | бодрость; энергия; здоровый; бодрый | energy; vitality; healthy; cheerful | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%85%83%E6%B0%97-491619) |
| EX-01320 | 気配 | kehai | признак; ощущение присутствия; конъюнктура рынка | sign; sensed presence; market indications | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B0%97%E9%85%8D-475319) |
| EX-01321 | 気色ばむ | keshikibamu | выказывать раздражение; вспыхивать от недовольства | show irritation; bristle with displeasure | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%B0%97%E8%89%B2%E3%81%B0%E3%82%80) |
| EX-01322 | 火の気 | hi no ke | огонь; тепло от огня | fire; heat from a fire | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%81%AB%E3%81%AE%E6%B0%97) |
| EX-01323 | 岐路 | kiro | развилка; решающий поворот | fork in the road; crossroads; turning point | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B2%90%E8%B7%AF) |
| EX-01324 | 分岐 | bunki | разветвление; ответвление | branching; divergence | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%88%86%E5%B2%90-128382) |
| EX-01325 | 多岐 | taki | многообразие; разветвлённость; множество направлений | diversity; many branches; a wide range | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%A4%9A%E5%B2%90-559584) |
| EX-01326 | 希望 | kibō | надежда; желание; пожелание | hope; wish; desire | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%8C%E6%9C%9B-51533) |
| EX-01327 | 希少 | kishō | редкость; редкий | rarity; rare; scarce | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%8C%E5%B0%91-473746) |
| EX-01328 | 希薄 | kihaku | разреженный; слабый; недостаточный | dilute; thin; weak | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%8C%E8%96%84-475329) |
| EX-01329 | 忌避 | kihi | избегание; уклонение; отвод судьи | avoidance; evasion; recusal | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%BF%8C%E9%81%BF) |
| EX-01330 | 忌中 | kichū | период строгого траура | initial mourning period | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%BF%8C%E4%B8%AD-51016) |
| EX-01331 | 禁忌 | kinki | табу; запрет; противопоказание | taboo; prohibition; contraindication | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%A6%81%E5%BF%8C-54038) |
| EX-01332 | 忌む | imu | избегать как дурного; испытывать отвращение; считать запретным | shun; abhor; regard as taboo | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%BF%8C%E3%82%80-435980) |
| EX-01333 | 忌まわしい | imawashii | отвратительный; тягостный; зловещий | detestable; distressing; ominous | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%BF%8C%E3%81%BE%E3%82%8F%E3%81%97%E3%81%84) |
| EX-01334 | 汽車 | kisha | поезд; поезд на паровой тяге | train; steam train | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B1%BD%E8%BB%8A-50419) |
| EX-01335 | 汽船 | kisen | пароход; судно с механическим двигателем | steamship; powered vessel | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B1%BD%E8%88%B9-50667) |
| EX-01336 | 汽笛 | kiteki | паровозный или судовой гудок | steam whistle; train or ship whistle | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%B1%BD%E7%AC%9B-474894) |
| EX-01337 | 奇襲 | kishū | внезапное нападение | surprise attack | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%A5%87%E8%A5%B2-473638) |
| EX-01338 | 奇数 | kisū | нечётное число | odd number | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%A5%87%E6%95%B0-50572) |
| EX-01339 | 珍奇 | chinki | диковинный; редкий; необычный | rare; curious; unusual | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%8F%8D%E5%A5%87) |
| EX-01340 | 祈願 | kigan | молитва о желаемом; моление | prayer for a wish to be fulfilled; supplication | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%A5%88%E9%A1%98-50049) |
| EX-01341 | 祈念 | kinen | молитва; горячее пожелание | prayer; earnest wish | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%A5%88%E5%BF%B5-475177) |
| EX-01342 | 祈る | inoru | молиться; желать всем сердцем | pray; earnestly hope | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%A5%88%E3%82%8B) |
| EX-01343 | 祈り | inori | молитва; горячее пожелание | prayer; earnest wish | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%A5%88%E3%82%8A) |
| EX-01344 | 季節 | kisetsu | время года; сезон | season | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AD%A3%E7%AF%80-50636) |
| EX-01345 | 四季 | shiki | четыре времени года | the four seasons | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9B%9B%E5%AD%A3-72528) |
| EX-01346 | 雨季 | uki | сезон дождей | rainy season; wet season | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%9B%A8%E5%AD%A3-34341) |
| EX-01347 | 紀行 | kikō | путевые заметки; описание путешествия | travelogue; travel account | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%B4%80%E8%A1%8C-473193) |
| EX-01348 | 紀元 | kigen | начало летосчисления; эра | starting point of a calendar; era | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%B4%80%E5%85%83-50242) |
| EX-01349 | 風紀 | fūki | общественные нравы; нравственная дисциплина | public morals; moral discipline | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A2%A8%E7%B4%80-615761) |
| EX-01350 | 軌道 | kidō | рельсовый путь; орбита; траектория | track; orbit; trajectory | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%BB%8C%E9%81%93-51162) |
| EX-01351 | 広軌 | kōki | широкая железнодорожная колея | broad railway gauge | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%BA%83%E8%BB%8C-494526) |
| EX-01352 | 常軌 | jōki | обычный порядок; общепринятые рамки | normal course; accepted bounds | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%B8%E8%BB%8C-531017) |
| EX-01353 | 既成 | kisei | уже сложившийся; существующий; готовый | already formed; established; existing | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%A2%E6%88%90-473957) |
| EX-01354 | 既婚 | kikon | состояние в браке; состоящий в браке | being married; married | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%A2%E5%A9%9A-473315) |
| EX-01355 | 既往症 | kiōshō | ранее перенесённое заболевание | past illness; previous medical condition | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%A2%E5%BE%80%E7%97%87-472306) |
| EX-01356 | 既に | sudeni | уже | already | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%97%A2%E3%81%AB) |
| EX-01357 | 記入 | kinyū | заполнение; внесение записи | filling in; making an entry | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A8%98%E5%85%A5-475068) |
| EX-01358 | 記号 | kigō | знак; символ; условное обозначение | sign; symbol; notation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A8%98%E5%8F%B7-2627) |
| EX-01359 | 伝記 | denki | биография | biography | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BC%9D%E8%A8%98-102135) |
| EX-01360 | 記す | shirusu | записывать; фиксировать; запечатлевать в памяти | write down; record; keep in memory | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A8%98%E3%81%99-535997) |
| EX-01361 | 起立 | kiritsu | вставание; подъём на ноги | standing up; rising to one's feet | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%B5%B7%E7%AB%8B) |
| EX-01362 | 起源 | kigen | происхождение; истоки | origin; source | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%B5%B7%E6%BA%90-473137) |
| EX-01363 | 奮起 | funki | решительный подъём духа; мобилизация сил | rousing oneself; mustering determination | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%A5%AE%E8%B5%B7-623050) |
| EX-01364 | 起きる | okiru | вставать; просыпаться; происходить | get up; wake up; happen | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%B5%B7%E3%81%8D%E3%82%8B-451650) |
| EX-01365 | 早起き | hayaoki | ранний подъём | getting up early | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%A9%E8%B5%B7%E3%81%8D-604585) |
| EX-01366 | 起こる | okoru | происходить; возникать | happen; occur; arise | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%B5%B7%E3%81%93%E3%82%8B) |
| EX-01367 | 起こす | okosu | поднимать; будить; вызывать | raise; wake someone up; cause | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%B5%B7%E3%81%93%E3%81%99) |
| EX-01368 | 飢餓 | kiga | голод; голодание | starvation; hunger | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A3%A2%E9%A4%93-156075) |
| EX-01369 | 飢える | ueru | голодать; испытывать острую нехватку | starve; go hungry; crave | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A3%A2%E3%81%88%E3%82%8B-438803) |
| EX-01370 | 飢え | ue | голод; голодание | hunger; starvation | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E9%A3%A2%E3%81%88) |
| EX-01371 | 鬼神 | kishin | духи и божества; грозное божество | spirits and deities; fierce deity | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%AC%BC%E7%A5%9E-50543) |
| EX-01372 | 鬼才 | kisai | выдающийся талант; гений | extraordinary talent; genius | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%AC%BC%E6%89%8D-473340) |
| EX-01373 | 餓鬼 | gaki | голодный дух; сопляк; несносный ребёнок | hungry ghost; brat | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A4%93%E9%AC%BC-43451) |
| EX-01374 | 鬼 | oni | они; демон; водящий в игре | oni; ogre; tagger | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%AC%BC-40829) |
| EX-01375 | 鬼ごっこ | onigokko | салки; игра в догонялки | tag; game of chase | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E9%AC%BC%E3%81%94%E3%81%A3%E3%81%93) |
| EX-01376 | 赤鬼 | akaoni | красный они; красный демон | red oni; red ogre | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%B5%A4%E9%AC%BC-422536) |
| EX-01377 | 帰還 | kikan | возвращение; обратная связь | return; feedback | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%B0%E9%82%84-50045) |
| EX-01378 | 帰納 | kinō | индукция; вывод от частного к общему | induction; reasoning from particulars to a general rule | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B8%B0%E7%B4%8D) |
| EX-01379 | 復帰 | fukki | возвращение к прежнему состоянию; возобновление деятельности | return; restoration; resumption | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A9%E5%B8%B0-8231) |
| EX-01380 | 帰る | kaeru | возвращаться; уходить домой | return; go home | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B8%B0%E3%82%8B-459005) |
| EX-01381 | 帰り | kaeri | возвращение; обратный путь | return; way back | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B8%B0%E3%82%8A) |
| EX-01382 | 帰す | kaesu | отпускать домой; отправлять обратно | let someone go home; send back | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B8%B0%E3%81%99) |
| EX-01383 | 基礎 | kiso | основа; основы; фундамент | basis; fundamentals; foundation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9F%BA%E7%A4%8E-474117) |
| EX-01384 | 基準 | kijun | критерий; стандарт; норма | criterion; standard; norm | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9F%BA%E6%BA%96-50467) |
| EX-01385 | 基地 | kichi | база; опорный пункт | base; operating base | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9F%BA%E5%9C%B0-474535) |
| EX-01386 | 基 | moto | основа; основание | basis; foundation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9F%BA-49801) |
| EX-01387 | 基づく | motozuku | основываться на; опираться на | be based on; be founded on | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%9F%BA%E3%81%A5%E3%81%8F) |
| EX-01388 | 基 | motoi | фундамент; основа; опора | foundation; basis; groundwork | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9F%BA-49801) |
| EX-01389 | 寄宿 | kishuku | проживание у кого-либо; проживание в общежитии | lodging with someone; boarding; living in a dormitory | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AF%84%E5%AE%BF-473671) |
| EX-01390 | 寄贈 | kizō | дарение; передача в дар | donation; presentation as a gift | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AF%84%E8%B4%88-474148) |
| EX-01391 | 寄港 | kikō | заход в промежуточный порт | calling at a port; port call | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AF%84%E6%B8%AF-473204) |
| EX-01392 | 寄る | yoru | приближаться; собираться; заходить по пути | approach; gather; stop by | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AF%84%E3%82%8B-654466) |
| EX-01393 | 近寄る | chikayoru | приближаться; подходить ближе | approach; come near | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%BF%91%E5%AF%84%E3%82%8B) |
| EX-01394 | 身寄り | miyori | родственники; близкие, на которых можно опереться | relatives; family to depend on | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%BA%AB%E5%AF%84%E3%82%8A) |
| EX-01395 | 寄せる | yoseru | приближать; собирать; направлять | bring closer; gather; send | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AF%84%E3%81%9B%E3%82%8B-654418) |
| EX-01396 | 人寄せ | hitoyose | привлечение публики; приманка для посетителей | attraction; crowd-puller | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E4%BA%BA%E5%AF%84%E3%81%9B) |
| EX-01397 | 規則 | kisoku | правило; правила; установленный порядок | rule; regulations; regular order | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A6%8F%E5%89%87-50722) |
| EX-01398 | 規律 | kiritsu | дисциплина; порядок | discipline; order | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A6%8F%E5%BE%8B-480311) |
| EX-01399 | 定規 | jōgi | линейка; мерило | ruler; standard | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AE%9A%E8%A6%8F-531024) |
| EX-01400 | 亀裂 | kiretsu | трещина; раскол | crack; fissure; rift | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BA%80%E8%A3%82-53896) |
| EX-01401 | 亀 | kame | черепаха | turtle; tortoise | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BA%80-466777) |

## Проверки

- `scripts/test_import.py`: все 7 проверок, включая точное сопоставление, неизменность прежних переводов, отложенные чтения и детерминированное восстановление JSON.
- `scripts/test_translations.cjs`: все 24 карточки / 102 примера на RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены ID, японское написание, ромадзи, перевод, пояснения, отсутствие служебных надписей и горизонтального переполнения.
- `scripts/test_cards.cjs`: существующие проверки карточек, навигации, поиска, раскрытия и восстановления после ошибки.
- `scripts/test_on_drill.cjs` и `scripts/test_kun_drill.cjs`: полное прохождение на обоих языках и трёх ширинах; видимые наборы остаются **769 ON и 451 KUN**. Пометки скрытия применяются по ID, соответствующие примеры остаются в карточках.
- `scripts/test_on_source.py` и `scripts/test_kun_source.py`: точное сопоставление 1299 строк диапазона упражнений 1–300 и проверка всех скрытий. В тесте KUN проверка множества переводов ограничена диапазоном источника упражнений, чтобы новые переводы карточек 301+ не считались ошибкой.
- Сравнение Excel: все 10 листов, значения и оформление вне новых ячеек, источники, японские написания/ромадзи и 20 пометок скрытия сохраняются; новый Excel точно соответствует 1399 парам переводов.

Проверка браузера: Google Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция, физический телефон не использовался. Для визуальной проверки установлен локальный Noto Serif CJK JP; файлы шрифтов и оформление сайта не меняются.

Main, README, HTML/CSS/JS карточек, код и наборы ON/KUN, данные видимости, исходный Excel репозитория и опубликованный сайт не изменяются.
