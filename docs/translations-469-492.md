# Переводы карточек № 469–492

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `a2ae5f0add788437aa461452c601566972a6b676`.

Добавлены **113 пар переводов RU/EN** для 24 карточек от 兄 до 慶: EX-02070–EX-02182. Всего **2178 пар** для карточек № 1–492. В новой партии нет шаблонов с ○; все ранее существовавшие шаблоны сохранены.

## Источники и редакторские решения

Значения сверены по статьям 小学館 プログレッシブ和英中辞典(第4版), デジタル大辞泉 и 精選版 日本国語大辞典 через Kotobank. RU/EN — редакторские эквиваленты основных значений, не полный перевод словарных статей.

- 形 / kata, 形 / katachi и 型 / kata сохранены как самостоятельные записи. 手形 различает отпечаток ладони и вексель.
- 兄事 обозначает почтительное отношение как к старшему брату; 父兄 — родителей/опекунов. 係累 включает тяготящие связи и родственников на попечении.
- 恵贈 — полученный дар с почтением к дарителю; 恵与 включает также дарование. 恵方参り — новогоднее посещение храма в счастливом направлении года.
- 庶務係 сохраняет статус чтения СОСТАВ / ФОРМА; перевод опирается на словарный пример 庶務係 и значения 庶務 и 係. Для お経 использована статья 経 с сохранением почтительного お.
- 軽々と, 手軽だ и 軽やかだ сохраняют полные исходные формы и пробелы. В 軽快 отражено также облегчение симптомов; у 蛍光灯 сохранено разговорное переносное значение.
- 球茎 переведено ботанически как клубнелуковица; 地下茎 — общее название подземного стебля. 雪渓 — высокогорная долина, где снег сохраняется летом.
- 関係 и 計画 повторяют уже подготовленные слова: их прежние формулировки и пояснения сохранены полностью под новыми самостоятельными ID.

49 новых записей имеют внутренний флаг sense-selection: выбор конкретного значения зависит от контекста, а не от неподтверждённого чтения. Всего таких флагов 824. Список: [ручной выбор значения](translations-469-492-review.md).

## Сохранность Excel и карточек

Все 2065 предыдущих записей JSON сохранены полностью. SHA-256 нормализованного предыдущего набора: `ceb05c543ccf89dffabf0902460c476c62ef4eb547315cfc821c6e4930fba241`.

В Excel обновлены только I/J и V:X основного листа и J/K и W:Y листа `OnKun Examples hide readings `, строки 2071–2183; высоты этих строк подобраны под переносы. Ячейки подготовлены Artifact Tool и перенесены в исходный OOXML-пакет с существующим оформлением переведённых ячеек. Вне разрешённой области проверены 687211 ячеек: значения, типы, оформление, ссылки и комментарии совпадают. Все части XLSX, кроме двух листов примеров, побайтно сохранены. В том числе неизменны 10 листов, их имена, 2136 иероглифов, 9555 примеров, японские поля, ромадзи, ID, порядок, служебные листы, формулы, таблицы, фильтры и 20 пометок YES. Строки после новой партии остаются без переводов.

Исходник репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не изменён. Использован прежний импорт из него с отдельным слоем переводов. Изменены только части карточек 009/010 и статистика манифеста; архивы Source/Audit/Review и разделы упражнений не изменены. Main не обновлялся.

## Проверки

- `python scripts/test_import.py`: 7 тестов пройдены, включая повторяемость импорта и сохранность прежних переводов.
- `node --check cards.js` и `git diff --check`: пройдены.
- Excel: 2178 пар совпадают с данными карточек; оба листа примеров согласованы; 20 пометок скрытия сохранены; нет перезаписи прежних значений. Визуально просмотрены подготовленные области переводов RU/EN на обоих листах.
- **Ограничение:** браузерный тест `CARDS_TRANSLATION_START=469 CARDS_TRANSLATION_COUNT=24 node scripts/test_translations.cjs` не запустился: Chromium отсутствует, его загрузка не удалась. Проверка One card/Grid на трёх размерах экрана в этой партии не подтверждена. Интерфейс и его код не менялись. Физические устройства и Excel непосредственно не запускались.

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-02070 | 兄事 | keiji | почитать как старшего брата | to honour and serve as an elder brother | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%85%84%E4%BA%8B-488610) |
| EX-02071 | 父兄 | fukei | родители; опекуны | parents; guardians | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%88%B6%E5%85%84) |
| EX-02072 | 義兄 | gikei | старший брат супруга; муж старшей сестры | an elder brother-in-law | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%BE%A9%E5%85%84) |
| EX-02073 | 兄弟 | kyōdai | братья; братья и сёстры | brothers; siblings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%84%E5%BC%9F) |
| EX-02074 | 兄 | ani | старший брат | an elder brother | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%84) |
| EX-02075 | 刑罰 | keibatsu | уголовное наказание | criminal punishment; a penalty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%91%E7%BD%B0) |
| EX-02076 | 刑法 | keihō | уголовное право; уголовный кодекс | criminal law; a penal code | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%91%E6%B3%95) |
| EX-02077 | 処刑 | shokei | казнь; приведение смертного приговора в исполнение | execution; carrying out a death sentence | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%A6%E5%88%91) |
| EX-02078 | 形態 | keitai | форма; внешний облик | form; shape; appearance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%A2%E6%85%8B) |
| EX-02079 | 形成 | keisei | формирование; образование | formation; development | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%A2%E6%88%90) |
| EX-02080 | 図形 | zukei | геометрическая фигура; схема | a geometric figure; a diagram | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9B%B3%E5%BD%A2) |
| EX-02081 | 形相 | gyōsō | выражение лица; облик | a facial expression; a look | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%A2%E7%9B%B8) |
| EX-02082 | 人形 | ningyō | кукла; марионетка | a doll; a puppet | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%BA%E5%BD%A2) |
| EX-02083 | 形 | kata | форма; след; залог | form; a trace; collateral | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%BD%A2-463191) |
| EX-02084 | 形見 | katami | памятная вещь; вещь в память об умершем | a keepsake; a memento of the deceased | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%A2%E8%A6%8B) |
| EX-02085 | 手形 | tegata | отпечаток ладони; вексель | a handprint; a bill of exchange | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%89%8B%E5%BD%A2) |
| EX-02086 | 形 | katachi | форма; очертания; внешний вид | shape; form; appearance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%A2) |
| EX-02087 | 系統 | keitō | система; линия происхождения; направление | a system; lineage; a school | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B3%BB%E7%B5%B1) |
| EX-02088 | 系列 | keiretsu | ряд; серия; объединение связанных организаций | a series; a chain; an affiliated group | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B3%BB%E5%88%97) |
| EX-02089 | 体系 | taikei | система; целостная структура | a system; an organised whole | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BD%93%E7%B3%BB) |
| EX-02090 | 直径 | chokkei | диаметр | a diameter | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9B%B4%E5%BE%84) |
| EX-02091 | 直情径行 | chokujōkeikō | прямое следование своим чувствам | acting directly on one's feelings | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%9B%B4%E6%83%85%E5%BE%84%E8%A1%8C-569292) |
| EX-02092 | 球茎 | kyūkei | клубнелуковица | a corm | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%90%83%E8%8C%8E) |
| EX-02093 | 地下茎 | chikakei | подземный стебель | an underground stem | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%9C%B0%E4%B8%8B%E8%8C%8E-95878) |
| EX-02094 | 茎 | kuki | стебель | a stem; a stalk | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8C%8E) |
| EX-02095 | 歯茎 | haguki | десна | the gums | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AD%AF%E8%8C%8E) |
| EX-02096 | 係累 | keirui | обременительные связи; родственники на попечении | encumbrances; dependent relatives | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BF%82%E7%B4%AF-489393) |
| EX-02097 | 係争 | keisō | спор; судебная тяжба | a dispute; litigation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%82%E4%BA%89) |
| EX-02098 | 関係 | kankei | связь; отношение; взаимоотношения | connection; relation; relationship | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%96%A2%E4%BF%82-2501) |
| EX-02099 | 係る | kakaru | касаться; относиться; зависеть грамматически | to concern; to relate to; to modify grammatically | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%82%E3%82%8B) |
| EX-02100 | 係 | kakari | ответственный; ведение дела; отдел | a person in charge; responsibility; a section | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%82) |
| EX-02101 | 係員 | kakariin | ответственный сотрудник; служащий | a staff member in charge; an attendant | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%82) |
| EX-02102 | 庶務係 | shomugakari | сотрудник или отдел общих административных вопросов | a general affairs clerk or section | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%BA%B6%E5%8B%99-535165); [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%82) |
| EX-02103 | 原型 | genkei | прототип; исходный образец | a prototype; an original model | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%9F%E5%9E%8B) |
| EX-02104 | 模型 | mokei | модель; макет | a model; a scale model | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A8%A1%E5%9E%8B) |
| EX-02105 | 典型 | tenkei | типичный пример; образец | a representative example; a model | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%B8%E5%9E%8B) |
| EX-02106 | 型 | kata | форма для изготовления; шаблон; тип | a mould; a pattern; a type | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9E%8B) |
| EX-02107 | 型紙 | katagami | бумажная выкройка | a paper pattern | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9E%8B%E7%B4%99) |
| EX-02108 | 血液型 | ketsuekigata | группа крови | a blood group; a blood type | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%A1%80%E6%B6%B2%E5%9E%8B-59520) |
| EX-02109 | 契約 | keiyaku | договор; контракт | a contract; an agreement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A5%91%E7%B4%84) |
| EX-02110 | 契機 | keiki | повод; толчок; возможность | an occasion; an impetus; an opportunity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A5%91%E6%A9%9F) |
| EX-02111 | 黙契 | mokkei | молчаливое соглашение; негласная договорённость | a tacit agreement; an unspoken understanding | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%BB%99%E5%A5%91-645841) |
| EX-02112 | 契る | chigiru | клясться; обещать; вступать в близкие отношения | to pledge; to promise; to become intimate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A5%91%E3%82%8B) |
| EX-02113 | 契り | chigiri | клятва; обещание; близкие узы | a vow; a promise; an intimate bond | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A5%91%E3%82%8A) |
| EX-02114 | 計算 | keisan | вычисление; расчёт | calculation; reckoning | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%88%E7%AE%97) |
| EX-02115 | 計画 | keikaku | план; планирование | a plan; planning | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A8%88%E7%94%BB-58597) |
| EX-02116 | 寒暖計 | kandankei | термометр | a thermometer | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AF%92%E6%9A%96%E8%A8%88) |
| EX-02117 | 計る | hakaru | отсчитывать; измерять время; оценивать | to count; to time; to estimate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%88%E3%82%8B) |
| EX-02118 | 計らう | hakarau | устраивать; принимать меры; распоряжаться | to arrange; to see to; to use one's discretion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%88%E3%82%89%E3%81%86) |
| EX-02119 | 計らい | hakarai | распоряжение; содействие; усмотрение | an arrangement; kind assistance; discretion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%88%E3%82%89%E3%81%84) |
| EX-02120 | 恵贈 | keizō | полученный дар (почтительно о дарителе) | a received gift (honorific towards the giver) | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%B5%E8%B4%88-488956) |
| EX-02121 | 恵与 | keiyo | дарование; получение дара (почтительно) | bestowal; receipt of a gift (honorific) | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%B5%E4%B8%8E-489321) |
| EX-02122 | 恩恵 | onkei | благодеяние; благо; польза | a favour; a blessing; a benefit | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%A9%E6%81%B5) |
| EX-02123 | 恵方参り | ehōmairi | новогоднее посещение храма в счастливом направлении | a New Year shrine or temple visit in the auspicious direction | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%B5%E6%96%B9%E5%8F%82%E3%82%8A-446378) |
| EX-02124 | 知恵 | chie | мудрость; ум; находчивость | wisdom; intelligence; resourcefulness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9F%A5%E6%81%B5) |
| EX-02125 | 恵む | megumu | оказывать милость; подавать милостыню | to show mercy; to give alms | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%B5%E3%82%80) |
| EX-02126 | 恵み | megumi | милость; благодеяние; благословение | mercy; charity; a blessing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%B5%E3%81%BF) |
| EX-02127 | 啓発 | keihatsu | просвещение; развитие понимания | enlightenment; education | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%95%93%E7%99%BA) |
| EX-02128 | 啓示 | keiji | откровение; божественное указание | revelation; divine guidance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%95%93%E7%A4%BA) |
| EX-02129 | 拝啓 | haikei | уважаемый… (в начале письма) | Dear… (opening a letter) | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8B%9D%E5%95%93) |
| EX-02130 | 掲示 | keiji | объявление; вывешивание объявления | a notice; posting a notice | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%B2%E7%A4%BA) |
| EX-02131 | 掲載 | keisai | публикация; размещение материала | publication; insertion in a publication | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%B2%E8%BC%89) |
| EX-02132 | 前掲 | zenkei | упомянутое выше; приведённое ранее | previously cited; mentioned above | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%89%8D%E6%8E%B2) |
| EX-02133 | 掲げる | kakageru | поднимать; вывешивать; провозглашать | to raise; to display; to proclaim | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%B2%E3%81%92%E3%82%8B) |
| EX-02134 | 渓谷 | keikoku | горное ущелье | a ravine; a gorge | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%93%E8%B0%B7) |
| EX-02135 | 渓流 | keiryū | горный ручей | a mountain stream | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%93%E6%B5%81) |
| EX-02136 | 雪渓 | sekkei | высокогорная долина с нетающим летом снегом | a mountain valley with lingering summer snow | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%9B%AA%E6%B8%93-87224) |
| EX-02137 | 経費 | keihi | расходы; затраты | expenses; expenditure | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C%E8%B2%BB) |
| EX-02138 | 経済 | keizai | экономика; хозяйство; бережливость | the economy; economic activity; thrift | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%B5%8C%E6%B8%88-488478) |
| EX-02139 | 経験 | keiken | опыт; пережитое | experience; an experience | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C%E9%A8%93) |
| EX-02140 | 経文 | kyōmon | текст сутры; буддийское писание | the text of a sutra; Buddhist scripture | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C%E6%96%87) |
| EX-02141 | お経 | okyō | сутра; чтение сутр | a sutra; sutra chanting | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C) |
| EX-02142 | 写経 | shakyō | переписывание сутр; рукописная копия сутры | hand-copying sutras; a hand-copied sutra | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%86%99%E7%B5%8C) |
| EX-02143 | 経る | heru | проходить; миновать; переживать | to pass; to go through; to experience | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%8C%E3%82%8B) |
| EX-02144 | 蛍光灯 | keikōtō | люминесцентная лампа; тугодум (разг.) | a fluorescent lamp; a slow-witted person (colloquial) | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%9B%8D%E5%85%89%E7%81%AF-178036) |
| EX-02145 | 蛍光塗料 | keikōtoryō | флуоресцентная краска | fluorescent paint | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%9B%8D%E5%85%89%E5%A1%97%E6%96%99-488428) |
| EX-02146 | 蛍 | hotaru | светлячок | a firefly | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%9B%8D) |
| EX-02147 | 敬意 | keii | уважение; почтение | respect; reverence | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%AC%E6%84%8F) |
| EX-02148 | 敬服 | keifuku | восхищение; глубокое уважение | admiration; high regard | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%AC%E6%9C%8D) |
| EX-02149 | 尊敬 | sonkei | уважение; почитание | respect; esteem | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B0%8A%E6%95%AC) |
| EX-02150 | 敬う | uyamau | уважать; почитать | to respect; to revere | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%AC%E3%81%86) |
| EX-02151 | 景気 | keiki | экономическая конъюнктура; деловая активность | business conditions; economic activity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%99%AF%E6%B0%97) |
| EX-02152 | 風景 | fūkei | пейзаж; вид; картина | scenery; a landscape; a scene | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A2%A8%E6%99%AF) |
| EX-02153 | 光景 | kōkei | зрелище; картина; вид | a sight; a scene; a spectacle | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%89%E6%99%AF) |
| EX-02154 | 軽快 | keikai | лёгкость; подвижность; облегчение симптомов | lightness; nimbleness; improvement in symptoms | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%BB%BD%E5%BF%AB-488210) |
| EX-02155 | 軽薄 | keihaku | легкомыслие; поверхностность | frivolity; superficiality | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%BD%E8%96%84) |
| EX-02156 | 軽率 | keisotsu | опрометчивость; неосторожность | rashness; carelessness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%BD%E7%8E%87) |
| EX-02157 | 軽い | karui | лёгкий; незначительный; несерьёзный | light; slight; frivolous | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%BD%E3%81%84) |
| EX-02158 | 軽々と | karugaru to | легко; без усилий | lightly; effortlessly | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%BB%BD%E8%BB%BD-468124) |
| EX-02159 | 手軽だ | tegaru da | простой; удобный; доступный | simple; convenient; affordable | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%89%8B%E8%BB%BD) |
| EX-02160 | 軽やかだ | karoyaka da | лёгкий; изящный; непринуждённый | light; graceful; buoyant | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%BD%E3%82%84%E3%81%8B) |
| EX-02161 | 傾斜 | keisha | наклон; склон | an inclination; a slope | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E6%96%9C) |
| EX-02162 | 傾倒 | keitō | увлечённость; преклонение | devotion; ardent admiration | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E5%80%92) |
| EX-02163 | 傾向 | keikō | тенденция; склонность | a trend; a tendency | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E5%90%91) |
| EX-02164 | 傾く | katamuku | наклоняться; склоняться; приходить в упадок | to tilt; to lean towards; to decline | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E3%81%8F) |
| EX-02165 | 傾き | katamuki | наклон; уклон; склонность | a slope; a tilt; an inclination | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E3%81%8D) |
| EX-02166 | 傾ける | katamukeru | наклонять; направлять силы; разорять | to tilt; to devote; to ruin | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%BE%E3%81%91%E3%82%8B) |
| EX-02167 | 携帯 | keitai | ношение с собой; мобильный телефон | carrying with one; a mobile phone | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%90%BA%E5%B8%AF) |
| EX-02168 | 必携 | hikkei | необходимая вещь при себе; справочник | an essential item to carry; a handbook | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BF%85%E6%90%BA) |
| EX-02169 | 提携 | teikei | сотрудничество; партнёрство | cooperation; a partnership | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8F%90%E6%90%BA) |
| EX-02170 | 携える | tazusaeru | нести с собой; брать с собой; идти рука об руку | to carry; to take along; to join hands | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%90%BA%E3%81%88%E3%82%8B) |
| EX-02171 | 携わる | tazusawaru | участвовать; заниматься деятельностью | to take part; to be engaged in | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%90%BA%E3%82%8F%E3%82%8B) |
| EX-02172 | 継続 | keizoku | продолжение; возобновление | continuation; renewal | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B6%99%E7%B6%9A) |
| EX-02173 | 継承 | keishō | наследование; преемственность | succession; inheritance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B6%99%E6%89%BF) |
| EX-02174 | 中継 | chūkei | ретрансляция; передача через посредника | a relay broadcast; relaying | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%AD%E7%B6%99) |
| EX-02175 | 継ぐ | tsugu | наследовать; продолжать; чинить | to inherit; to continue; to mend | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B6%99%E3%81%90) |
| EX-02176 | 継ぎ | tsugi | заплата | a patch | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B6%99%E3%81%8E) |
| EX-02177 | 参詣 | sankei | посещение храма для поклонения | a devotional visit to a shrine or temple | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%82%E8%A9%A3) |
| EX-02178 | 詣でる | mōderu | посещать храм или могилу; являться почтительно | to visit a shrine or grave; to pay one's respects | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%A9%A3%E3%81%A7%E3%82%8B-645017) |
| EX-02179 | 初詣 | hatsumōde | первое посещение храма в новом году | the first shrine or temple visit of the New Year | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%88%9D%E8%A9%A3%E3%81%A7-115264) |
| EX-02180 | 慶弔 | keichō | радостные и печальные события; поздравления и соболезнования | joyous and sorrowful occasions; congratulations and condolences | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%85%B6%E5%BC%94-489049) |
| EX-02181 | 慶祝 | keishuku | празднование; поздравление | celebration; congratulations | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%85%B6%E7%A5%9D) |
| EX-02182 | 慶賀 | keiga | поздравление; выражение радости | congratulations; rejoicing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%85%B6%E8%B3%80) |

## Файлы

Исходный Excel SHA-256: `2844dc9c039fff8e45428d3b750794b4001bbfcb2aadd6d419453cabb4ec153b`.

Результат: `OnKun_Translations_1-492_2026-10-25_hide_readings.xlsx`, SHA-256 `4b3249f5ba1e29a47dbb9231d3104a81059c528e0140b2eb189031831b7e6860`.
