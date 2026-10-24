# Переводы карточек № 373–396

Дата: 24.10.2026. Ветка: `feature/excel-12-card-preview`. База: `cfce1e9`.

Добавлены **108 пар переводов RU/EN** для 24 карточек от 級 до 叫. Всего **1721 переведённый пример** для карточек № 1–396. В новой партии 109 исходных записей, EX-01616–EX-01724: 108 принятых словарных чтений и один шаблон EX-01658 / 去る○日. Шаблон сохранён без чтения и перевода, с прежней справочной пометкой; в упражнения не включается.

Предыдущие 1613 переводов сохранены целиком: тексты, пояснения, источники, даты и отметки. SHA-256 нормализованного набора до добавления: `16b008cc3c6cec150357dec45fd8b1f395fd31770b271677d938d3f511a7e9bf`.

## Источник и сохранение данных

Рабочий Excel: `OnKun_Translations_1-372_2026-10-24_hide_readings.xlsx`, SHA-256 `59e11d287f7b9517d42233e7e1c57488ad80c40e490523f40a399e5ec778e630`. Сопоставление по стабильным ID, японскому написанию и ромадзи. Обновлены только переводы, ссылки, статус значения и пояснения 108 принятых примеров: I/J и V:X основного листа; J/K и W:Y листа `OnKun Examples hide readings `. Диапазон строк Excel 1617–1725, кроме строки 1659 с шаблоном. Все 20 пометок YES в столбце I сохранены; копии примеров совпадают после учёта этого столбца. Результат: `OnKun_Translations_1-396_2026-10-24_hide_readings.xlsx`.

Ячейки, их оформление и высоты новых строк подготовлены через Artifact Tool на небольшом рабочем листе. В исходный XLSX перенесены только ячейки переводимых примеров, стили и высоты соответствующих строк. Строка шаблона не меняется. Остальные части пакета сохранены побайтово. Сохранены 10 листов, в том числе завершающий пробел в имени листа скрытий. Полная пересборка исходного файла не используется.

Таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не меняется: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Импорт применяет общий слой `data/translations-12.json`; обновляются блоки `007.json`, `008.json` и статистика манифеста. Новых копий переводов в коде нет.

## Проверка значений

RU/EN — редакторские эквиваленты основных значений. Словарные ссылки приведены для каждого ID: 小学館 デジタル大辞泉, プログレッシブ和英中辞典 или 平凡社 普及版 字通. Японские написания, чтения и классификация примеров не менялись.

- 魚 / uo и 魚 / sakana остаются двумя записями с собственными ID. Обе переводятся как «рыба»; чтения не объединены.
- 窮極 сохраняет написание с 窮 и означает крайний предел. 窮める — достижение предела или высшей степени; 窮まる — достижение предела либо безвыходное положение. Эти примеры не подменены 究める из предыдущей партии.
- 宮 / miya включает святилище, дворец и почтительное обозначение императорской особы; 宮様 — принц или принцесса. 宮司 — глава священнослужителей святилища, а 神宮 без уточнения может обозначать Исэ.
- В 去る сохранено saru; отдельный 去る○日 остаётся шаблоном. В 共に сохранены пробелы `tomo ni`, а в 共々 — знак повтора 々.
- В 御礼 сохранено onrei. Перевод благодарности сверён по словарной статье с заголовком orei; чтение с префиксом おん дополнительно подтверждается официальным [音訓索引 文化庁](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/kanji/joyokanjisakuin/index.html), где 御礼 и 御中 стоят в группе おん. Обе ссылки записаны у EX-01705.
- В 球 / tama учитываются шар или мяч и разговорное обозначение лампочки; значения драгоценного камня из другого написания 玉 не перенесены автоматически. 闘牛 различает бои быков между собой и корриду.
- 挙げる — переходный глагол; 挙がる — непереходный, включая упоминание кандидата и обнаружение доказательств. 挙げて сохранено как самостоятельное наречное употребление.
- 階級, 虚偽, 許可 и 叫喚 уже встречались раньше: сохранены установленные RU/EN формулировки, новые стабильные ID остаются самостоятельными записями.

34 новых переводов отмечены `sense-selection`: смысл выбирается по контексту при принятом чтении. Служебная надпись не отображается; полезные языковые пояснения доступны на выбранном языке. Перечень — в [отдельном отчёте](translations-373-396-review.md).

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01616 | 等級 | tōkyū | разряд; категория; звёздная величина | grade; class; astronomical magnitude | [デジタル大辞泉](https://kotobank.jp/word/%E7%AD%89%E7%B4%9A-579891) |
| EX-01617 | 上級 | jōkyū | высокий уровень; старшая ступень | advanced level; higher grade | [デジタル大辞泉](https://kotobank.jp/word/%E4%B8%8A%E7%B4%9A-531078) |
| EX-01618 | 階級 | kaikyū | ранг; общественный класс; весовая категория | a rank; a social class; a weight division | [デジタル大辞泉](https://kotobank.jp/word/%E9%9A%8E%E7%B4%9A-42235) |
| EX-01619 | 糾弾 | kyūdan | обличение; осуждение; привлечение к ответу | denunciation; condemnation; calling to account | [デジタル大辞泉](https://kotobank.jp/word/%E7%B3%BE%E5%BC%BE-477159) |
| EX-01620 | 紛糾 | funkyū | разногласия; осложнение; запутанность спора | discord; complications; a tangled dispute | [デジタル大辞泉](https://kotobank.jp/word/%E7%B4%9B%E7%B3%BE-623058) |
| EX-01621 | 宮殿 | kyūden | дворец; храмовое здание | palace; shrine building | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%AE%E6%AE%BF-52146) |
| EX-01622 | 宮廷 | kyūtei | императорский или королевский двор | imperial or royal court | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%AE%E5%BB%B7-477202) |
| EX-01623 | 離宮 | rikyū | отдельный императорский дворец; загородная резиденция | detached imperial palace; secondary royal residence | [デジタル大辞泉](https://kotobank.jp/word/%E9%9B%A2%E5%AE%AE-148467) |
| EX-01624 | 宮司 | gūji | главный священнослужитель синтоистского святилища | chief priest of a Shinto shrine | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%AE%E5%8F%B8-54875) |
| EX-01625 | 神宮 | jingū | высокочтимое синтоистское святилище; святилище Исэ | high-ranking Shinto shrine; Ise Shrine | [デジタル大辞泉](https://kotobank.jp/word/%E7%A5%9E%E5%AE%AE-81520) |
| EX-01626 | 東宮 | tōgū | наследный принц; дворец наследного принца | crown prince; crown prince's palace | [デジタル大辞泉](https://kotobank.jp/word/%E6%9D%B1%E5%AE%AE-580006) |
| EX-01627 | 宮内庁 | kunaichō | Управление императорского двора Японии | Imperial Household Agency of Japan | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%AE%E5%86%85%E5%BA%81-55676) |
| EX-01628 | 宮 | miya | синтоистское святилище; дворец; особа императорского рода | Shinto shrine; palace; imperial personage | [デジタル大辞泉](https://kotobank.jp/word/%E5%AE%AE-139473) |
| EX-01629 | 宮様 | miyasama | императорский принц или принцесса | imperial prince or princess | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%AE%E6%A7%98) |
| EX-01630 | 救助 | kyūjo | спасение; спасательная помощь | rescue; lifesaving assistance | [デジタル大辞泉](https://kotobank.jp/word/%E6%95%91%E5%8A%A9-476963) |
| EX-01631 | 救援 | kyūen | помощь; поддержка; спасение | aid; relief; assistance | [デジタル大辞泉](https://kotobank.jp/word/%E6%95%91%E6%8F%B4-476624) |
| EX-01632 | 救急 | kyūkyū | экстренная помощь; первая помощь | emergency aid; first aid | [デジタル大辞泉](https://kotobank.jp/word/%E6%95%91%E6%80%A5-476702) |
| EX-01633 | 救う | sukū | спасать; выручать; помогать | save; rescue; help | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%91%E3%81%86) |
| EX-01634 | 救い | sukui | спасение; помощь; утешение | salvation; relief; consolation | [デジタル大辞泉](https://kotobank.jp/word/%E6%95%91%E3%81%84-83596) |
| EX-01635 | 球形 | kyūkei | шарообразная форма; сферический | spherical shape; spherical | [デジタル大辞泉](https://kotobank.jp/word/%E7%90%83%E5%BD%A2-476764) |
| EX-01636 | 球技 | kyūgi | игры с мячом | ball sports; ball games | [デジタル大辞泉](https://kotobank.jp/word/%E7%90%83%E6%8A%80-51967) |
| EX-01637 | 地球 | chikyū | Земля; земной шар | the Earth; the globe | [デジタル大辞泉](https://kotobank.jp/word/%E5%9C%B0%E7%90%83-95930) |
| EX-01638 | 球 | tama | мяч; шар; электрическая лампочка | ball; sphere; light bulb | [デジタル大辞泉](https://kotobank.jp/word/%E7%8E%89-53197) |
| EX-01639 | 給水 | kyūsui | водоснабжение; подача воды | water supply; supplying water | [デジタル大辞泉](https://kotobank.jp/word/%E7%B5%A6%E6%B0%B4-52097) |
| EX-01640 | 配給 | haikyū | распределение; снабжение по норме; кинопрокат | distribution; rationing; film distribution | [デジタル大辞泉](https://kotobank.jp/word/%E9%85%8D%E7%B5%A6-112762) |
| EX-01641 | 月給 | gekkyū | месячная зарплата | monthly salary; monthly pay | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%88%E7%B5%A6) |
| EX-01642 | 嗅覚 | kyūkaku | обоняние | sense of smell; olfaction | [デジタル大辞泉](https://kotobank.jp/word/%E5%97%85%E8%A6%9A-51952) |
| EX-01643 | 嗅ぐ | kagu | нюхать; обонять; принюхиваться | smell; sniff | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%97%85%E3%81%90) |
| EX-01644 | 窮極 | kyūkyoku | крайний предел; конечная точка | ultimate limit; furthest end | [普及版 字通](https://kotobank.jp/word/%E7%AA%AE%E6%A5%B5-2805233) |
| EX-01645 | 窮屈 | kyūkutsu | тесный; стеснённый; скованный; негибкий | cramped; constrained; ill at ease; rigid | [デジタル大辞泉](https://kotobank.jp/word/%E7%AA%AE%E5%B1%88-476753) |
| EX-01646 | 困窮 | konkyū | крайняя нужда; затруднительное положение | destitution; hardship; severe difficulty | [デジタル大辞泉](https://kotobank.jp/word/%E5%9B%B0%E7%AA%AE-505884) |
| EX-01647 | 窮める | kiwameru | доходить до предела; достигать высшей степени | reach the limit; attain the utmost degree | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A5%B5%E3%82%81%E3%82%8B%E3%83%BB%E7%AA%AE%E3%82%81%E3%82%8B) |
| EX-01648 | 窮まる | kiwamaru | достигать предела; оказываться в безвыходном положении | come to a limit; be driven into a corner | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AA%AE%E3%81%BE%E3%82%8B) |
| EX-01649 | 牛馬 | gyūba | крупный рогатый скот и лошади | cattle and horses | [デジタル大辞泉](https://kotobank.jp/word/%E7%89%9B%E9%A6%AC-439530) |
| EX-01650 | 牛乳 | gyūnyū | коровье молоко | cow's milk | [デジタル大辞泉](https://kotobank.jp/word/%E7%89%9B%E4%B9%B3-52166) |
| EX-01651 | 闘牛 | tōgyū | бой быков; коррида; боевой бык | bullfighting; bull-versus-bull fighting; fighting bull | [デジタル大辞泉](https://kotobank.jp/word/%E9%97%98%E7%89%9B-579892) |
| EX-01652 | 牛 | ushi | корова; бык; крупный рогатый скот | cow; ox; cattle | [デジタル大辞泉](https://kotobank.jp/word/%E7%89%9B-34453) |
| EX-01653 | 去年 | kyonen | прошлый год | last year | [デジタル大辞泉](https://kotobank.jp/word/%E5%8E%BB%E5%B9%B4-479869) |
| EX-01654 | 去就 | kyoshū | решение остаться или уйти; дальнейшая позиция | decision to stay or leave; one's future course | [デジタル大辞泉](https://kotobank.jp/word/%E5%8E%BB%E5%B0%B1-479665) |
| EX-01655 | 除去 | jokyo | удаление; устранение | removal; elimination | [デジタル大辞泉](https://kotobank.jp/word/%E9%99%A4%E5%8E%BB-534007) |
| EX-01656 | 過去 | kako | прошлое; прошлое время | past; past tense | [デジタル大辞泉](https://kotobank.jp/word/%E9%81%8E%E5%8E%BB-461339) |
| EX-01657 | 去る | saru | уходить; покидать; проходить | leave; depart; pass | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8E%BB%E3%82%8B) |
| EX-01659 | 巨大 | kyodai | огромный; гигантский | huge; gigantic | [デジタル大辞泉](https://kotobank.jp/word/%E5%B7%A8%E5%A4%A7-479779) |
| EX-01660 | 巨匠 | kyoshō | великий мастер; выдающийся художник | great master; maestro | [デジタル大辞泉](https://kotobank.jp/word/%E5%B7%A8%E5%8C%A0-479683) |
| EX-01661 | 巨万 | kyoman | несметное множество; огромное состояние | immense quantity; vast fortune | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B7%A8%E4%B8%87) |
| EX-01662 | 居住 | kyojū | проживание; проживать | residence; residing | [デジタル大辞泉](https://kotobank.jp/word/%E5%B1%85%E4%BD%8F-479669) |
| EX-01663 | 居室 | kyoshitsu | жилая комната; комната для повседневного пребывания | living room; habitable room | [デジタル大辞泉](https://kotobank.jp/word/%E5%B1%85%E5%AE%A4-479644) |
| EX-01664 | 住居 | jūkyo | жилище; место жительства | dwelling; residence; home | [デジタル大辞泉](https://kotobank.jp/word/%E4%BD%8F%E5%B1%85-76837) |
| EX-01665 | 居る | iru | быть; находиться; жить; оставаться | be; exist; live; stay | [デジタル大辞泉](https://kotobank.jp/word/%E5%B1%85%E3%82%8B-436525) |
| EX-01666 | 芝居 | shibai | театр; спектакль; актёрская игра; притворство | theatre; play; acting; pretence | [デジタル大辞泉](https://kotobank.jp/word/%E8%8A%9D%E5%B1%85-74675) |
| EX-01667 | 拒絶 | kyozetsu | отказ; отклонение; неприятие | refusal; rejection | [デジタル大辞泉](https://kotobank.jp/word/%E6%8B%92%E7%B5%B6-479754) |
| EX-01668 | 拒否 | kyohi | отказ; отклонение требования | refusal; rejection of a demand | [デジタル大辞泉](https://kotobank.jp/word/%E6%8B%92%E5%90%A6-479897) |
| EX-01669 | 拒む | kobamu | отказывать; отвергать; преграждать | refuse; reject; obstruct | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8B%92%E3%82%80) |
| EX-01670 | 拠点 | kyoten | опорный пункт; база деятельности | base; operational centre | [デジタル大辞泉](https://kotobank.jp/word/%E6%8B%A0%E7%82%B9-479844) |
| EX-01671 | 占拠 | senkyo | захват; занятие территории | occupation; taking possession | [デジタル大辞泉](https://kotobank.jp/word/%E5%8D%A0%E6%8B%A0-549575) |
| EX-01672 | 根拠 | konkyo | основание; довод; опорная база | grounds; basis; base | [デジタル大辞泉](https://kotobank.jp/word/%E6%A0%B9%E6%8B%A0-505886) |
| EX-01673 | 証拠 | shōko | доказательство; свидетельство | evidence; proof | [デジタル大辞泉](https://kotobank.jp/word/%E8%A8%BC%E6%8B%A0-79139) |
| EX-01674 | 挙手 | kyoshu | поднятие руки | raising one's hand | [デジタル大辞泉](https://kotobank.jp/word/%E6%8C%99%E6%89%8B-479661) |
| EX-01675 | 挙国 | kyokoku | вся страна; весь народ | the whole nation; the entire country | [デジタル大辞泉](https://kotobank.jp/word/%E6%8C%99%E5%9B%BD-479596) |
| EX-01676 | 壮挙 | sōkyo | великий замысел; выдающийся подвиг | grand undertaking; great feat | [デジタル大辞泉](https://kotobank.jp/word/%E5%A3%AE%E6%8C%99-552032) |
| EX-01677 | 挙げる | ageru | поднимать; приводить пример; выдвигать; добиваться | raise; cite; nominate; achieve | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8C%99%E3%81%92%E3%82%8B) |
| EX-01678 | 挙げて | agete | все вместе; целиком; всеми силами | all together; as a whole; with all one's strength | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8C%99%E3%81%92%E3%81%A6) |
| EX-01679 | 挙がる | agaru | упоминаться; выдвигаться; обнаруживаться; быть арестованным | be mentioned; be nominated; emerge; be arrested | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8C%99%E3%81%8C%E3%82%8B) |
| EX-01680 | 虚無 | kyomu | пустота; небытие; ощущение бессмысленности | nothingness; void; sense of meaninglessness | [デジタル大辞泉](https://kotobank.jp/word/%E8%99%9A%E7%84%A1-53480) |
| EX-01681 | 虚偽 | kyogi | ложь; неправда | falsehood; untruth | [デジタル大辞泉](https://kotobank.jp/word/%E8%99%9A%E5%81%BD-53173) |
| EX-01682 | 空虚 | kūkyo | пустой; бессодержательный; пустота | empty; hollow; emptiness | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E8%99%9A) |
| EX-01683 | 虚空 | kokū | пустое пространство; воздух; небо | empty space; air; sky | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%99%9A%E7%A9%BA) |
| EX-01684 | 虚無僧 | komusō | комусо; странствующий монах школы Фукэ | komuso; itinerant Fuke monk | [デジタル大辞泉](https://kotobank.jp/word/%E8%99%9A%E7%84%A1%E5%83%A7-66225) |
| EX-01685 | 許可 | kyoka | разрешение | permission | [デジタル大辞泉](https://kotobank.jp/word/%E8%A8%B1%E5%8F%AF-53160) |
| EX-01686 | 許諾 | kyodaku | согласие; разрешение | consent; permission | [デジタル大辞泉](https://kotobank.jp/word/%E8%A8%B1%E8%AB%BE-479797) |
| EX-01687 | 特許 | tokkyo | патент; исключительное право | patent; exclusive right | [デジタル大辞泉](https://kotobank.jp/word/%E7%89%B9%E8%A8%B1-23000) |
| EX-01688 | 許す | yurusu | позволять; разрешать; прощать | allow; permit; forgive | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%B1%E3%81%99) |
| EX-01689 | 許し | yurushi | разрешение; прощение | permission; forgiveness | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%B1%E3%81%97) |
| EX-01690 | 距離 | kyori | расстояние; дистанция; отчуждённость | distance; separation; emotional distance | [デジタル大辞泉](https://kotobank.jp/word/%E8%B7%9D%E9%9B%A2-480002) |
| EX-01691 | 魚類 | gyorui | рыбы | fish; fishes | [デジタル大辞泉](https://kotobank.jp/word/%E9%AD%9A%E9%A1%9E-53530) |
| EX-01692 | 金魚 | kingyo | золотая рыбка | goldfish | [デジタル大辞泉](https://kotobank.jp/word/%E9%87%91%E9%AD%9A-480945) |
| EX-01693 | 鮮魚 | sengyo | свежая рыба | fresh fish | [デジタル大辞泉](https://kotobank.jp/word/%E9%AE%AE%E9%AD%9A-549581) |
| EX-01694 | 魚 | uo | рыба | fish | [デジタル大辞泉](https://kotobank.jp/word/%E9%AD%9A-430759) |
| EX-01695 | 魚市場 | uoichiba | рыбный рынок | fish market | [デジタル大辞泉](https://kotobank.jp/word/%E9%AD%9A%E5%B8%82%E5%A0%B4-34092) |
| EX-01696 | 魚 | sakana | рыба | fish | [デジタル大辞泉](https://kotobank.jp/word/%E9%AD%9A-430759) |
| EX-01697 | 魚屋 | sakanaya | рыбная лавка; торговец рыбой | fish shop; fishmonger | [デジタル大辞泉](https://kotobank.jp/word/%E9%AD%9A%E5%B1%8B-509108) |
| EX-01698 | 煮魚 | nizakana | рыба, тушённая в приправленном бульоне | fish simmered in seasoned broth | [デジタル大辞泉](https://kotobank.jp/word/%E7%85%AE%E9%AD%9A-591515) |
| EX-01699 | 御者 | gyosha | кучер; возница | coachman; carriage driver | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BE%A1%E8%80%85) |
| EX-01700 | 制御 | seigyo | управление; контроль; регулирование | control; regulation | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%88%B6%E5%BE%A1) |
| EX-01701 | 御飯 | gohan | варёный рис; еда; приём пищи | cooked rice; meal; food | [デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A1%E9%A3%AF-454420) |
| EX-01702 | 御用 | goyō | дело; поручение; официальная служба; арест | business; errand; official duty; arrest | [デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A1%E7%94%A8-505046) |
| EX-01703 | 御殿 | goten | дворец; роскошный особняк | palace; stately mansion | [デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A1%E6%AE%BF-502810) |
| EX-01704 | 御中 | onchū | уважительное обращение к организации в адресе письма | honorific address suffix for an organisation | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BE%A1%E4%B8%AD) |
| EX-01705 | 御礼 | onrei | благодарность; выражение признательности | thanks; expression of gratitude | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BE%A1%E7%A4%BC); [文化庁 常用漢字表 音訓索引](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/kanji/joyokanjisakuin/index.html) |
| EX-01706 | 漁業 | gyogyō | рыболовство; рыбный промысел | fishery; fishing industry | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BC%81%E6%A5%AD) |
| EX-01707 | 漁船 | gyosen | рыболовное судно; рыбацкая лодка | fishing vessel; fishing boat | [デジタル大辞泉](https://kotobank.jp/word/%E6%BC%81%E8%88%B9-53405) |
| EX-01708 | 漁村 | gyoson | рыбацкая деревня | fishing village | [デジタル大辞泉](https://kotobank.jp/word/%E6%BC%81%E6%9D%91-53408) |
| EX-01709 | 漁師 | ryōshi | рыбак; рыболов | fisher; fisherman | [デジタル大辞泉](https://kotobank.jp/word/%E6%BC%81%E5%B8%AB-659251) |
| EX-01710 | 大漁 | tairyō | богатый улов; удачная рыбалка | large catch; plentiful haul | [デジタル大辞泉](https://kotobank.jp/word/%E5%A4%A7%E6%BC%81-556727) |
| EX-01711 | 不漁 | furyō | плохой улов; неудачная рыбалка | poor catch; unsuccessful fishing | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8D%E6%BC%81) |
| EX-01712 | 凶悪 | kyōaku | злобный; жестокий; злодейский | vicious; brutal; atrocious | [デジタル大辞泉](https://kotobank.jp/word/%E5%87%B6%E6%82%AA-477670) |
| EX-01713 | 凶作 | kyōsaku | неурожай; плохой урожай | crop failure; poor harvest | [デジタル大辞泉](https://kotobank.jp/word/%E5%87%B6%E4%BD%9C-478176) |
| EX-01714 | 吉凶 | kikkyō | удача и неудача; благоприятные и дурные знамения | good and bad fortune; auspicious and inauspicious omens | [デジタル大辞泉](https://kotobank.jp/word/%E5%90%89%E5%87%B6-474674) |
| EX-01715 | 共同 | kyōdō | совместный; сотрудничество; совместное действие | joint; cooperation; joint action | [デジタル大辞泉](https://kotobank.jp/word/%E5%85%B1%E5%90%8C-478743) |
| EX-01716 | 共通 | kyōtsū | общий; одинаково присущий | common; shared | [デジタル大辞泉](https://kotobank.jp/word/%E5%85%B1%E9%80%9A-478679) |
| EX-01717 | 公共 | kōkyō | общественный; публичный; общество в целом | public; the community | [デジタル大辞泉](https://kotobank.jp/word/%E5%85%AC%E5%85%B1-494676) |
| EX-01718 | 共に | tomo ni | вместе; совместно; оба; и то и другое | together; jointly; both; alike | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%B1%E3%81%AB) |
| EX-01719 | 共々 | tomodomo | вместе; все вместе; совместно | together; all together; jointly | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%B1%E5%85%B1) |
| EX-01720 | 共食い | tomogui | поедание особей своего вида; губительная конкуренция | cannibalism; mutually destructive competition | [プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%B1%E9%A3%9F%E3%81%84) |
| EX-01721 | 叫喚 | kyōkan | крики; вопли | shouting; screaming | [デジタル大辞泉](https://kotobank.jp/word/%E5%8F%AB%E5%96%9A-477909) |
| EX-01722 | 絶叫 | zekkyō | истошный крик; крик во весь голос | scream; shouting at the top of one's voice | [デジタル大辞泉](https://kotobank.jp/word/%E7%B5%B6%E5%8F%AB-547982) |
| EX-01723 | 叫ぶ | sakebu | кричать; восклицать; настойчиво требовать | shout; cry out; call strongly for | [デジタル大辞泉](https://kotobank.jp/word/%E5%8F%AB%E3%81%B6-455159) |
| EX-01724 | 叫び | sakebi | крик; вопль; страстный призыв | cry; shout; impassioned appeal | [デジタル大辞泉](https://kotobank.jp/word/%E5%8F%AB%E3%81%B3-509994) |

## Проверки

- `scripts/test_import.py`: 7 проверок, включая ID, японские написания и ромадзи, все прежние переводы, неизменный шаблон и детерминированную пересборку. В допустимые источники добавлен официальный домен 文化庁.
- `scripts/test_translations.cjs`: 24 карточки / 109 исходных записей (108 переводов и один справочный шаблон), RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены порядок, раскрытие, тексты и пояснения каждого ID, отсутствие выдуманного перевода у шаблона, служебных надписей и горизонтального переполнения.
- `scripts/test_cards.cjs`: поиск, навигация, раскрытие и восстановление после ошибки.
- `scripts/test_on_drill.cjs`, `scripts/test_kun_drill.cjs`: оба языка и три ширины; видимые наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py`, `scripts/test_kun_source.py`: сверка 1299 исходных строк упражнений 1–300 и скрытий. Диапазон упражнений не расширялся.
- Excel: 1721 пара переводов соответствует общим данным; сохранены 10 листов, все 20 скрытий, прежние значения и оформление, включая строку нового шаблона. Будущие строки остаются без переводов.

Браузер: Google Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция; физический телефон не использовался. Визуально просмотрены карточки на широком и мобильном экране, а также изменённые диапазоны обоих листов Excel. Локальный Noto Serif CJK JP используется для проверки; файлы шрифтов сайта не меняются.

Main, README, HTML/CSS/JS карточек, код и наборы ON/KUN, данные видимости и опубликованный сайт не изменены.
