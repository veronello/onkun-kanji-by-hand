# Переводы карточек № 421–444

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `a91f7e6114e52721c84ad232a1b60f9b067bf461`.

Добавлены **114 пар переводов RU/EN** для 24 карточек от 暁 до 銀, EX-01857–EX-01970. Приняты 113 словарных чтений и одна проверенная форма 僅かだ / wazuka da со статусом СОСТАВ / ФОРМА. Шаблонов и исключений в партии нет. Всего **1967 переведённых примеров** для карточек № 1–444.

## Сохранение данных

Прежние 1853 перевода сохранены целиком, включая пояснения, даты, источники и отметки. SHA-256 нормализованного набора до добавления: `1ebb93a10bd8d6a3be973472fe6a0c953453e9a4a6baec832047b87496552d25`.

Исходный Excel: `OnKun_Translations_1-420_2026-10-25_hide_readings.xlsx`, SHA-256 `e9838f8e50451232713b00dbe96fabc5b8a86c103e536dca1e21182ac64253e5`. Локальная копия подтверждена по Library ID и версии 5. Результат: `OnKun_Translations_1-444_2026-10-25_hide_readings.xlsx`.

На обоих листах примеров обновлены только строки **1858–1971**: I/J и V:X основного листа, J/K и W:Y листа `OnKun Examples hide readings `. Ячейки и высоты строк подготовлены Artifact Tool и перенесены в исходный OOXML-пакет. Сохранены 10 листов и все 20 пометок скрытия YES. Вне разрешённых ячеек сверены **687201 ячейка**: значения, типы, стили, ссылки и комментарии. Имена листов, ширины столбцов, таблицы, фильтры, проверки ввода, условное форматирование и не затронутые строки сохранены. Несвязанные части XLSX сохранены побайтово; будущие строки остаются без переводов.

Таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не меняется: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Переводы хранятся в общем слое `data/translations-12.json`; импорт обновляет блоки `008.json`, `009.json` и статистику манифеста. Японские написания, ромадзи, классификация, порядок и все части ответов сохранены, в том числе 筋書 без добавления き, 僅かだ с だ, kin'itsu и kin'en с апострофами.

## Проверка значений

RU/EN — редакторские эквиваленты основных значений связанных словарных статей, не полный перечень редких употреблений.

- 暁天 / gyōten — предрассветное небо или рассвет; не смешивается с 仰天 / gyōten из предыдущей партии. 通暁 включает доскональное знание и действие в течение всей ночи до рассвета.
- 業 / waza — дело, деяние, работа. Кармическое значение относится к другому чтению. 業病 снабжён историческим религиозным пояснением, а не представлен как современное объяснение болезни. 自業自得 передаёт последствия собственных поступков.
- 凝る / koru различает увлечение, напряжение мышц и затейливость. Значения другого чтения kogoru автоматически не подставлены. 曲がる и 曲げる сохраняют различие переходности.
- 極める передаёт достижение предела или высшей степени и окончательное решение. 極め付き — удостоверенная подлинность и общепризнанное качество. Написания 極, 究 и 窮 не подменялись.
- 玉石 / gyokuseki — драгоценности и обычные камни, переносно ценное и никчёмное. Значение округлого камня при tamaishi не перенесено. 玉 / tama включает драгоценный и округлый предмет. 金 / kane — деньги или металл; 金色 / konjiki и 黄金 / ōgon сохраняют свои чтения.
- 金縛り включает сонный паралич и буквальную или переносную полную скованность. 勤行 / gongyō — религиозная служба, а не обычный выход на работу.
- 琴線 — струны и сокровенные чувства; переносный смысл относится к глубокой эмоциональной отзывчивости. 筋, 筋書 и 大筋 переведены с учётом телесного, логического и сюжетного употреблений.
- 僅かだ / wazuka da остаётся полной предикативной формой; だ и пробел в ромадзи сохранены. 謹む передаёт почтительное поведение для данного написания; 謹んで остаётся самостоятельным примером.
- В 緊急 сохранены прежние RU/EN формулировки и пояснения из общего слоя; новый ID остаётся самостоятельной записью.

**32** примера отмечены `sense-selection`: точный смысл определяется контекстом при принятом чтении. Исключённых примеров нет. Служебная надпись не выводится в интерфейс. Список и пояснения — в [отдельном отчёте](translations-421-444-review.md).

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01857 | 暁天 | gyōten | предрассветное небо; рассвет | the dawn sky; daybreak | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9A%81%E5%A4%A9-478715) |
| EX-01858 | 今暁 | kongyō | сегодня на рассвете; ранним утром | at dawn today; early this morning | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BB%8A%E6%9A%81-505887) |
| EX-01859 | 通暁 | tsūgyō | глубокое знание; всю ночь до рассвета | thorough knowledge; throughout the night | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%80%9A%E6%9A%81-570466) |
| EX-01860 | 暁 | akatsuki | рассвет; наступление желанного момента | dawn; the time when something is achieved | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9A%81) |
| EX-01861 | 業績 | gyōseki | достижения; результаты деятельности | achievements; performance results | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%AD%E7%B8%BE) |
| EX-01862 | 職業 | shokugyō | профессия; род занятий | an occupation; a profession | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%81%B7%E6%A5%AD) |
| EX-01863 | 卒業 | sotsugyō | окончание учебного заведения; выпуск | graduation; completing one's schooling | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8D%92%E6%A5%AD) |
| EX-01864 | 業病 | gōbyō | тяжёлый недуг, считавшийся кармической расплатой | a severe illness once attributed to bad karma | [小学館 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A5%AD%E7%97%85-497237) |
| EX-01865 | 罪業 | zaigō | греховные деяния; греховная карма | sinful deeds; sinful karma | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%BD%AA%E6%A5%AD) |
| EX-01866 | 自業自得 | jigōjitoku | что посеешь, то и пожнёшь; сам виноват | reaping what one sows; having oneself to blame | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%87%AA%E6%A5%AD%E8%87%AA%E5%BE%97) |
| EX-01867 | 業 | waza | дело; деяние; работа | an act; a deed; a task | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%AD) |
| EX-01868 | 仕業 | shiwaza | чьих-либо рук дело; поступок | someone's doing; a deed | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BB%95%E6%A5%AD) |
| EX-01869 | 早業 | hayawaza | быстрый ловкий приём; молниеносная работа | a quick feat; swift and skilful work | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%97%A9%E6%A5%AD) |
| EX-01870 | 凝固 | gyōko | затвердевание; свёртывание | solidification; coagulation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E5%9B%BA) |
| EX-01871 | 凝結 | gyōketsu | конденсация; сгущение; затвердевание | condensation; coagulation; solidification | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E7%B5%90) |
| EX-01872 | 凝視 | gyōshi | пристальный взгляд; всматривание | a fixed gaze; staring | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E8%A6%96) |
| EX-01873 | 凝る | koru | увлекаться; неметь от напряжения; быть затейливым | to be absorbed in; to become stiff; to be elaborate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E3%82%8B) |
| EX-01874 | 凝り性 | korishō | склонность увлекаться до мелочей; перфекционизм | an obsessive enthusiasm; perfectionism | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E3%82%8A%E6%80%A7) |
| EX-01875 | 凝らす | korasu | сосредоточивать; напрягать; вкладывать выдумку | to concentrate; to strain; to exercise ingenuity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%9D%E3%82%89%E3%81%99) |
| EX-01876 | 曲線 | kyokusen | кривая линия | a curve | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9B%B2%E7%B7%9A) |
| EX-01877 | 曲面 | kyokumen | криволинейная поверхность | a curved surface | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9B%B2%E9%9D%A2) |
| EX-01878 | 名曲 | meikyoku | музыкальный шедевр; знаменитое произведение | a musical masterpiece; a celebrated piece | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%8D%E6%9B%B2) |
| EX-01879 | 曲がる | magaru | сгибаться; искривляться; поворачивать | to bend; to curve; to turn | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9B%B2%E3%81%8C%E3%82%8B) |
| EX-01880 | 曲げる | mageru | сгибать; искривлять; искажать | to bend; to curve; to distort | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9B%B2%E3%81%92%E3%82%8B) |
| EX-01881 | 局部 | kyokubu | отдельная часть; участок тела | a particular part; a local area of the body | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B1%80%E9%83%A8-479506) |
| EX-01882 | 時局 | jikyoku | текущая обстановка; положение дел | the current situation; the state of affairs | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%99%82%E5%B1%80) |
| EX-01883 | 結局 | kekkyoku | в конце концов; в итоге | in the end; after all | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E5%B1%80) |
| EX-01884 | 極限 | kyokugen | предел; крайняя степень | a limit; an extreme | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E9%99%90) |
| EX-01885 | 終極 | shūkyoku | конечная точка; окончательный предел | the ultimate end; the final limit | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%B5%82%E6%A5%B5-526543) |
| EX-01886 | 積極的 | sekkyokuteki | инициативный; деятельный; активный | proactive; active; eager to take action | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%A9%8D%E6%A5%B5%E7%9A%84-548001) |
| EX-01887 | 極上 | gokujō | высший сорт; превосходное качество | the finest quality; top grade | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E4%B8%8A) |
| EX-01888 | 極秘 | gokuhi | строжайшая тайна; совершенно секретно | a top secret; strictly confidential | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E7%A7%98) |
| EX-01889 | 至極 | shigoku | чрезвычайно; в высшей степени | extremely; most | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%87%B3%E6%A5%B5) |
| EX-01890 | 極める | kiwameru | достигать предела; доводить до крайности; окончательно решать | to reach a limit; to carry to an extreme; to settle definitively | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A5%B5%E3%82%81%E3%82%8B-480683) |
| EX-01891 | 極め付き | kiwametsuki | с удостоверенной подлинностью; общепризнанный | certified genuine; acknowledged as outstanding | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E3%82%81%E4%BB%98%E3%81%8D) |
| EX-01892 | 極めて | kiwamete | крайне; чрезвычайно | extremely; exceedingly | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E3%82%81%E3%81%A6) |
| EX-01893 | 極まる | kiwamaru | достигать предела; доходить до крайности | to reach a limit; to become extreme | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E3%81%BE%E3%82%8B) |
| EX-01894 | 極まり | kiwamari | предел; крайняя степень | a limit; an extreme | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A5%B5%E3%81%BE%E3%82%8A-480668) |
| EX-01895 | 極み | kiwami | вершина; высшая степень; предел | the height; the utmost; a limit | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E3%81%BF) |
| EX-01896 | 玉座 | gyokuza | императорский трон | the imperial throne | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8E%89%E5%BA%A7) |
| EX-01897 | 玉石 | gyokuseki | драгоценности и камни; ценное и никчёмное | jewels and stones; the valuable and the worthless | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%8E%89%E7%9F%B3-94266) |
| EX-01898 | 宝玉 | hōgyoku | драгоценный камень; самоцвет | a precious stone; a jewel | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%AE%9D%E7%8E%89-627338) |
| EX-01899 | 玉 | tama | драгоценный камень; бусина; шарик | a jewel; a bead; a ball | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%8E%89-53197) |
| EX-01900 | 目玉 | medama | глазное яблоко; главная приманка | an eyeball; a main attraction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9B%AE%E7%8E%89) |
| EX-01901 | 頭巾 | zukin | капюшон; головной платок | a hood; a head covering | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A0%AD%E5%B7%BE) |
| EX-01902 | 雑巾 | zōkin | тряпка для уборки | a cleaning cloth; a rag | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9B%91%E5%B7%BE) |
| EX-01903 | 斤量 | kinryō | вес; нагрузка на скаковую лошадь | weight; the weight carried by a racehorse | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%96%A4%E9%87%8F-481964) |
| EX-01904 | 均等 | kintō | равенство; равномерность | equality; evenness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9D%87%E7%AD%89) |
| EX-01905 | 均一 | kin'itsu | однородность; единообразие | uniformity; consistency | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9D%87%E4%B8%80) |
| EX-01906 | 平均 | heikin | среднее значение; в среднем; равновесие | an average; on average; balance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B9%B3%E5%9D%87) |
| EX-01907 | 近所 | kinjo | соседство; окрестности | the neighbourhood; the vicinity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%91%E6%89%80) |
| EX-01908 | 近代 | kindai | Новое время; современная эпоха | modern times; the modern era | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%91%E4%BB%A3) |
| EX-01909 | 接近 | sekkin | приближение; сближение | an approach; a rapprochement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%A5%E8%BF%91) |
| EX-01910 | 近い | chikai | близкий; недалёкий; похожий | near; close; similar | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%91%E3%81%84) |
| EX-01911 | 近づく | chikazuku | приближаться; подходить; сближаться | to approach; to draw near; to become closer | [小学館 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%BF%91%E4%BB%98%E3%81%8F-565296) |
| EX-01912 | 近道 | chikamichi | короткий путь; более быстрый способ | a shortcut; a quicker way | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%91%E9%81%93) |
| EX-01913 | 金属 | kinzoku | металл | a metal | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E5%B1%9E) |
| EX-01914 | 金銭 | kinsen | деньги; денежные средства | money; funds | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E9%8A%AD) |
| EX-01915 | 純金 | junkin | чистое золото | pure gold | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B4%94%E9%87%91) |
| EX-01916 | 金色 | konjiki | золотой цвет; золотистый | gold; golden-coloured | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E8%89%B2) |
| EX-01917 | 金剛力 | kongōriki | богатырская сила; огромная мощь | prodigious strength; immense power | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%87%91%E5%89%9B%E5%8A%9B-506046) |
| EX-01918 | 黄金 | ōgon | золото; золотой цвет; богатство | gold; a golden colour; wealth | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%BB%84%E9%87%91) |
| EX-01919 | 金 | kane | деньги; металл | money; metal | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91) |
| EX-01920 | 金持ち | kanemochi | богач; состоятельный человек | a rich person; a wealthy person | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E6%8C%81%E3%81%A1) |
| EX-01921 | 針金 | harigane | проволока | wire | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%9D%E9%87%91) |
| EX-01922 | 金物 | kanamono | металлические изделия; скобяные товары | hardware; metal goods | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E7%89%A9) |
| EX-01923 | 金具 | kanagu | металлическая фурнитура; крепёж | metal fittings; metal fastenings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%91%E5%85%B7) |
| EX-01924 | 金縛り | kanashibari | сонный паралич; полная скованность | sleep paralysis; complete immobilisation | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%87%91%E7%B8%9B%E3%82%8A-465093) |
| EX-01925 | 細菌 | saikin | бактерия; бактерии | a bacterium; bacteria | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B4%B0%E8%8F%8C) |
| EX-01926 | 殺菌 | sakkin | уничтожение микробов; обеззараживание | killing germs; disinfection | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AE%BA%E8%8F%8C) |
| EX-01927 | 保菌者 | hokinsha | бессимптомный носитель инфекции | an asymptomatic carrier | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BF%9D%E8%8F%8C%E8%80%85-132656) |
| EX-01928 | 勤務 | kinmu | работа по найму; служба; дежурство | employment; service; duty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E5%8B%99) |
| EX-01929 | 勤勉 | kinben | трудолюбие; усердие | diligence; industriousness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E5%8B%89) |
| EX-01930 | 出勤 | shukkin | выход на работу; явка на службу | going to work; reporting for duty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%BA%E5%8B%A4) |
| EX-01931 | 勤行 | gongyō | буддийская служба; чтение молитв | a Buddhist service; devotional recitation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E8%A1%8C) |
| EX-01932 | 勤める | tsutomeru | работать; служить | to work; to be employed | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E3%82%81%E3%82%8B) |
| EX-01933 | 勤め | tsutome | работа; служба; религиозная служба | a job; work; religious observances | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E3%82%81) |
| EX-01934 | 勤まる | tsutomaru | справляться с работой; удерживаться на службе | to be able to do a job; to hold down a job | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%A4%E3%81%BE%E3%82%8B) |
| EX-01935 | 琴線 | kinsen | струны кото; сокровенные чувства | koto strings; one's heartstrings | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%90%B4%E7%B7%9A-481387) |
| EX-01936 | 木琴 | mokkin | ксилофон | a xylophone | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%A8%E7%90%B4) |
| EX-01937 | 手風琴 | tefūkin | аккордеон; гармонь | an accordion | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%89%8B%E9%A2%A8%E7%90%B4-576697) |
| EX-01938 | 琴 | koto | кото; японская цитра | a koto; a Japanese zither | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%90%B4) |
| EX-01939 | 筋肉 | kinniku | мышца; мускулатура | a muscle; musculature | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AD%8B%E8%82%89) |
| EX-01940 | 筋骨 | kinkotsu | мышцы и кости; телосложение | muscles and bones; physique | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AD%8B%E9%AA%A8) |
| EX-01941 | 鉄筋 | tekkin | стальная арматура | steel reinforcement; a reinforcing bar | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%89%84%E7%AD%8B) |
| EX-01942 | 筋 | suji | сухожилие; полоса; логика; сюжет | a tendon; a stripe; logic; a plot | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AD%8B) |
| EX-01943 | 筋書 | sujigaki | краткое изложение сюжета; намеченный сценарий | a plot summary; a planned scenario | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%AD%8B%E6%9B%B8-541633) |
| EX-01944 | 大筋 | ōsuji | общие черты; основная линия | the broad outline; the main thread | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A4%A7%E7%AD%8B) |
| EX-01945 | 僅差 | kinsa | небольшой разрыв; минимальное преимущество | a narrow margin; a slight difference | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%83%85%E5%B7%AE) |
| EX-01946 | 僅かだ | wazuka da | незначителен; совсем мал; немногочислен | is slight; is small in amount; is few | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%83%85%E3%81%8B-602241) |
| EX-01947 | 禁止 | kinshi | запрет; запрещение | a ban; prohibition | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A6%81%E6%AD%A2) |
| EX-01948 | 禁煙 | kin'en | запрет курения; отказ от курения | a smoking ban; quitting smoking | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A6%81%E7%85%99) |
| EX-01949 | 厳禁 | genkin | строгий запрет; категорически запрещено | strict prohibition; strictly forbidden | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%B3%E7%A6%81) |
| EX-01950 | 緊張 | kinchō | напряжение; волнение; напряжённость | tension; nervousness; strain | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B7%8A%E5%BC%B5) |
| EX-01951 | 緊密 | kinmitsu | тесный; прочный; тесная связь | close; intimate; close ties | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B7%8A%E5%AF%86) |
| EX-01952 | 緊急 | kinkyū | срочность; неотложный; экстренный | urgency; urgent; emergency | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B7%8A%E6%80%A5) |
| EX-01953 | 錦秋 | kinshū | осень в ярком уборе листвы | autumn resplendent with coloured leaves | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%8C%A6%E7%A7%8B-481251) |
| EX-01954 | 錦絵 | nishikie | цветная гравюра укиё-э | a multicoloured ukiyo-e woodblock print | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8C%A6%E7%B5%B5) |
| EX-01955 | 謹慎 | kinshin | самоограничение; временное отстранение | self-restraint; disciplinary confinement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AC%B9%E6%85%8E) |
| EX-01956 | 謹賀 | kinga | почтительное поздравление | respectful congratulations | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%AC%B9%E8%B3%80-480796) |
| EX-01957 | 謹呈 | kintei | с почтением преподносить; почтительный дар | respectfully presenting; with compliments | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AC%B9%E5%91%88) |
| EX-01958 | 謹む | tsutsushimu | держаться почтительно; выражать почтение | to be respectful; to show reverence | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%85%8E%E3%82%80-571925) |
| EX-01959 | 謹んで | tsutsushinde | почтительно; с глубоким уважением | respectfully; humbly | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AC%B9%E3%82%93%E3%81%A7) |
| EX-01960 | 襟度 | kindo | широта души; великодушие | broad-mindedness; magnanimity | [小学館 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%A5%9F%E5%BA%A6-481600) |
| EX-01961 | 開襟 | kaikin | открытый ворот; откровенность | an open collar; opening one's heart | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%96%8B%E8%A5%9F-457064) |
| EX-01962 | 胸襟 | kyōkin | сокровенные мысли; душа | one's innermost thoughts; one's heart | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E8%A5%9F) |
| EX-01963 | 襟 | eri | воротник; ворот | a collar; a neckline | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%A5%9F-37519) |
| EX-01964 | 襟首 | erikubi | задняя часть шеи; загривок | the nape; the scruff of the neck | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A5%9F%E9%A6%96) |
| EX-01965 | 吟味 | ginmi | тщательное изучение; проверка; отбор | careful examination; testing; selection | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%9F%E5%91%B3) |
| EX-01966 | 詩吟 | shigin | певучая декламация стихов | chanted recitation of poetry | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A9%A9%E5%90%9F) |
| EX-01967 | 苦吟 | kugin | мучительное сочинение стихов; творческие муки | struggling to compose poetry; creative toil | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%8B%A6%E5%90%9F-482867) |
| EX-01968 | 銀貨 | ginka | серебряная монета | a silver coin | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8A%80%E8%B2%A8) |
| EX-01969 | 銀行 | ginkō | банк | a bank | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8A%80%E8%A1%8C) |
| EX-01970 | 水銀 | suigin | ртуть | mercury | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B0%B4%E9%8A%80) |

## Проверки

- `scripts/test_import.py`: 7 тестов; сохранение прежнего набора, соответствие ID/написаний/ромадзи, полная форма 僅かだ, переводы и детерминированная пересборка.
- `scripts/test_translations.cjs`: 24 карточки / 114 примеров, RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены все тексты по ID, порядок, раскрытие, пояснения, отсутствие служебной надписи и горизонтального переполнения.
- `scripts/test_cards.cjs`: поиск, навигация, раскрытие и восстановление после ошибки.
- `scripts/test_on_drill.cjs` и `scripts/test_kun_drill.cjs`: оба языка и три ширины; видимые наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py` и `scripts/test_kun_source.py`: сверка по неизменному источнику упражнений `OnKun_Translations_1-300_2026-10-23 upd hide readings(2).xlsx`. Сохранены 1299 исходных строк, 1297 переводов и 20 отметок скрытия диапазона 1–300; новые примеры в упражнения не добавлялись.
- Excel: 114 новых переводов на обоих листах точно совпадают с общими данными; 10 листов, прежние значения, оформление и все скрытия сохранены. Исходный файл не изменён.

Браузер: Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция; физический телефон не использовался. Визуально просмотрены широкое и мобильное отображения карточек, сетка и обновлённые диапазоны обоих листов. Noto Serif CJK JP используется локально только для проверки, файлы шрифтов сайта не меняются.

По договорённости работа касается карточек. Main, README, опубликованный сайт, HTML/CSS/JS карточек, код, наборы и пометки видимости упражнений ON/KUN не изменены.
