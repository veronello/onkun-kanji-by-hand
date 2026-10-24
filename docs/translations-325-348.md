# Переводы карточек № 325–348

Дата: 24.10.2026. Ветка: `feature/excel-12-card-preview`. База: `43c5eaa`.

Добавлены **96 пар переводов RU/EN** для 24 карточек от 喜 до 犠. Всего **1495 переведённых примеров** для карточек № 1–348. Диапазон ID — EX-01402–EX-01497. Все новые чтения имеют принятый словарный статус; шаблонов или отложенных чтений в партии нет.

Предыдущие 1399 записей сохранены целиком, включая переводы, заметки, источники и даты. SHA-256 нормализованного набора до добавления: `87fb0d763cc5bb266feaaab980392b35fef5fafdbb254ce97269ceb001820133`.

## Источник и сохранение данных

Рабочий Excel: `OnKun_Translations_1-324_2026-10-24_hide_readings.xlsx`, SHA-256 `4dc9719c2e713ac822de365209d6a3646585e598480e16fe69709c51791b4e95`. Сопоставление по стабильным ID, японскому написанию и ромадзи. Обновлены только переводы, словарные ссылки, статус выбора значения и пояснения 96 новых строк: I/J и V:X основного листа; J/K и W:Y листа `OnKun Examples hide readings `. Строки Excel 1403–1498. Все 20 пометок YES в столбце I сохранены; копии примеров совпадают после учёта этого столбца. Результат: `OnKun_Translations_1-348_2026-10-24_hide_readings.xlsx`.

Новые ячейки, их оформление и высоты строк подготовлены через Artifact Tool на небольшом рабочем листе. В исходный пакет XLSX перенесены только эти ячейки, стили и высоты соответствующих строк. Остальные части пакета сохранены побайтово. Сохранены все 10 листов, включая завершающий пробел в имени листа скрытий. Полная пересборка исходного файла не используется.

Неизменяемая таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` остаётся прежней: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Импорт читает её и применяет общий слой `data/translations-12.json`; изменяются блоки карточек `006.json`, `007.json` и статистика манифеста. Дополнительных копий переводов в коде нет.

## Словарная проверка

RU/EN — редакторские эквиваленты основных значений, а не полный перевод статей. Для каждого ID записана ссылка на 小学館 デジタル大辞泉, 精選版 日本国語大辞典 либо 小学館 プログレッシブ和英中辞典.

- 貴い / tattoi и tōtoi, 貴ぶ / tattobu и tōtobu остаются четырьмя отдельными записями. Словарь подтверждает оба варианта; они не объединены и не заменены написанием с 尊.
- 幾日 сохраняет ikunichi. В この期に及んで сохранены полное японское выражение, частицы и ромадзи `kono go ni oyonde`.
- 機 / hata — ткацкий станок или тканое полотно. Это не значение возможности, относящееся к другому чтению. 機織り включает ткачество и ткача.
- 貴下 — уважительное письменное обращение; в заметке уточнён традиционный регистр. 毀誉 — и порицание, и похвала, а также общественная оценка.
- 偽 / nise, 偽物 и 偽札 переведены с учётом заданных чтений. Для nisesatsu выбрано значение поддельной банкноты, а не другого слова с чтением gisatsu.
- 義理 включает общественный долг и некровное родство; 器量 — способности и внешность; 欺く — обман и образное сравнение. Выбор смысла требует контекста.
- 犠打 — жертвенный бейсбольный удар: бьющий выбывает, помогая бегущему продвинуться или принести очко. 犠牲 также употребляется о жертве происшествия или войны.

48 новых примеров отмечены `sense-selection` в редакторских данных. Это выбор контекстного значения при принятом чтении. Служебная надпись скрыта в карточках; полезные пояснения показаны на выбранном языке. Перечень — в [отдельном отчёте](translations-325-348-review.md).

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01402 | 喜劇 | kigeki | комедия; комичная история | comedy; farce | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%96%9C%E5%8A%87) |
| EX-01403 | 悲喜 | hiki | печаль и радость | sorrow and joy | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%82%B2%E5%96%9C-608926) |
| EX-01404 | 歓喜 | kanki | ликование; восторг | jubilation; delight | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%AD%93%E5%96%9C-48550) |
| EX-01405 | 喜ぶ | yorokobu | радоваться; быть довольным; приветствовать | rejoice; be pleased; welcome | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%96%9C%E3%81%B6-655266) |
| EX-01406 | 喜び | yorokobi | радость; радостное событие | joy; delight; happy occasion | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%96%9C%E3%81%B3-146559) |
| EX-01407 | 喜ばしい | yorokobashii | радостный; отрадный | joyful; gratifying; welcome | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%96%9C%E3%81%B0%E3%81%97%E3%81%84-655259) |
| EX-01408 | 幾何学 | kikagaku | геометрия | geometry | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B9%BE%E4%BD%95%E5%AD%A6-50007) |
| EX-01409 | 幾つ | ikutsu | сколько; какого возраста | how many; how old | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B9%BE%E3%81%A4) |
| EX-01410 | 幾ら | ikura | сколько; почём; сколько бы ни | how much; however much | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%B9%BE%E3%82%89) |
| EX-01411 | 幾日 | ikunichi | сколько дней; какого числа | how many days; what date | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B9%BE%E6%97%A5-431412) |
| EX-01412 | 揮発油 | kihatsuyu | летучая нефтяная фракция; бензин | volatile petroleum fraction; gasoline | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8F%AE%E7%99%BA%E6%B2%B9-51400) |
| EX-01413 | 指揮 | shiki | руководство; командование; дирижирование | direction; command; conducting | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8C%87%E6%8F%AE-72538) |
| EX-01414 | 発揮 | hakki | проявление способностей; реализация потенциала | demonstration of ability; full use of one's potential | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%99%BA%E6%8F%AE-602330) |
| EX-01415 | 期間 | kikan | период; срок; промежуток времени | period; duration; interval | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9C%9F%E9%96%93-50046) |
| EX-01416 | 期待 | kitai | ожидание; надежда | expectation; hope | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%9C%9F%E5%BE%85) |
| EX-01417 | 予期 | yoki | предвидение; ожидание | anticipation; expectation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%BA%88%E6%9C%9F-653623) |
| EX-01418 | 最期 | saigo | последние мгновения жизни; кончина | one's last moments; death | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%9C%80%E6%9C%9F-507494) |
| EX-01419 | この期に及んで | kono go ni oyonde | теперь, когда дело зашло так далеко; на столь позднем этапе | at this late stage; now that things have come to this | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%AD%A4%E3%81%AE%E6%9C%9F) |
| EX-01420 | 棋士 | kishi | профессиональный игрок в го или сёги | professional go or shogi player | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A3%8B%E5%A3%AB-473443) |
| EX-01421 | 棋譜 | kifu | запись партии в го или сёги | record of a go or shogi game | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A3%8B%E8%AD%9C-475457) |
| EX-01422 | 将棋 | shōgi | сёги; японские шахматы | shogi; Japanese chess | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%B0%86%E6%A3%8B-78976) |
| EX-01423 | 貴重 | kichō | ценный; драгоценный | valuable; precious | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%B2%B4%E9%87%8D-474603) |
| EX-01424 | 貴下 | kika | Вы; уважительное письменное обращение | you; respectful written address | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%B2%B4%E4%B8%8B-472365) |
| EX-01425 | 騰貴 | tōki | повышение цен; рост рыночной стоимости | rise in prices; appreciation in market value | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A8%B0%E8%B2%B4-579824) |
| EX-01426 | 貴い | tattoi | ценный; драгоценный; благородный | precious; valuable; noble | [デジタル大辞泉](https://kotobank.jp/word/%E5%B0%8A%E3%81%84-561386) |
| EX-01427 | 貴い | tōtoi | ценный; драгоценный; благородный | precious; valuable; noble | [デジタル大辞泉](https://kotobank.jp/word/%E5%B0%8A%E3%81%84-561386) |
| EX-01428 | 貴ぶ | tattobu | ценить; почитать | value; esteem; revere | [デジタル大辞泉](https://kotobank.jp/word/%E5%B0%8A%E3%81%B6-561391) |
| EX-01429 | 貴ぶ | tōtobu | ценить; почитать | value; esteem; revere | [デジタル大辞泉](https://kotobank.jp/word/%E5%B0%8A%E3%81%B6-561391) |
| EX-01430 | 棄権 | kiken | отказ от участия; воздержание при голосовании | withdrawal; abstention | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A3%84%E6%A8%A9-50241) |
| EX-01431 | 放棄 | hōki | отказ; оставление; отречение | abandonment; renunciation; relinquishment | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%94%BE%E6%A3%84-627281) |
| EX-01432 | 遺棄 | iki | оставление; бросание на произвол судьбы | abandonment; desertion | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%81%BA%E6%A3%84-431133) |
| EX-01433 | 毀損 | kison | повреждение; причинение ущерба | damage; impairment | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%AF%80%E6%90%8D-474249) |
| EX-01434 | 毀誉 | kiyo | порицание и похвала; общественная оценка | blame and praise; public estimation | [精選版 日本国語大辞典](https://kotobank.jp/word/%E6%AF%80%E8%AA%89-477541) |
| EX-01435 | 旗手 | kishu | знаменосец; ведущий представитель | standard-bearer; leading figure | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%97%E6%89%8B-473628) |
| EX-01436 | 旗艦 | kikan | флагманский корабль; флагман | flagship | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%97%E8%89%A6-50047) |
| EX-01437 | 国旗 | kokki | государственный флаг | national flag | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9B%BD%E6%97%97-65236) |
| EX-01438 | 旗 | hata | флаг; знамя | flag; banner | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%97-49803) |
| EX-01439 | 旗色 | hatairo | положение дел; шансы; позиция | state of affairs; prospects; stance | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%97%97%E8%89%B2-473809) |
| EX-01440 | 手旗 | tebata | ручной флажок; сигнальный флажок | hand-held flag; semaphore flag | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%89%8B%E6%97%97) |
| EX-01441 | 器量 | kiryō | способности; личные достоинства; внешность | ability; personal calibre; looks | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%99%A8%E9%87%8F-480452) |
| EX-01442 | 器用 | kiyō | умелый; ловкий; разносторонний | dexterous; skilful; versatile | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%99%A8%E7%94%A8-477648) |
| EX-01443 | 陶器 | tōki | керамика; гончарные изделия | pottery; earthenware | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%99%B6%E5%99%A8-103268) |
| EX-01444 | 器 | utsuwa | сосуд; ёмкость; масштаб личности | vessel; container; personal calibre | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%99%A8) |
| EX-01445 | 畿内 | kinai | Кинай; земли вокруг императорской столицы | Kinai; lands around the imperial capital | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%95%BF%E5%86%85-51203) |
| EX-01446 | 近畿 | kinki | регион Кинки в Японии | Kinki region of Japan | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%BF%91%E7%95%BF-480892) |
| EX-01447 | 輝石 | kiseki | пироксен | pyroxene | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%BC%9D%E7%9F%B3-50631) |
| EX-01448 | 光輝 | kōki | сияние; блеск; слава | brilliance; radiance; glory | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%85%89%E8%BC%9D) |
| EX-01449 | 輝く | kagayaku | сиять; сверкать; блистать | shine; sparkle; be distinguished | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%BC%9D%E3%81%8F-459430) |
| EX-01450 | 輝き | kagayaki | сияние; блеск; лучистость | radiance; brilliance; glow | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%BC%9D%E3%81%8D) |
| EX-01451 | 輝かしい | kagayakashii | блестящий; славный; многообещающий | brilliant; glorious; promising | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E8%BC%9D%E3%81%8B%E3%81%97%E3%81%84) |
| EX-01452 | 機械 | kikai | машина; механизм; машинное оборудование | machine; machinery | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A9%9F%E6%A2%B0-49964) |
| EX-01453 | 機会 | kikai | возможность; удобный случай | opportunity; chance | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A9%9F%E4%BC%9A-472381) |
| EX-01454 | 危機 | kiki | кризис; опасное положение | crisis; critical situation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%8D%B1%E6%A9%9F-50085) |
| EX-01455 | 機 | hata | ткацкий станок; тканое полотно | loom; woven cloth | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A9%9F-114591) |
| EX-01456 | 機織り | hataori | ткачество; ткач | weaving; weaver | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A9%9F%E7%B9%94-473810) |
| EX-01457 | 騎士 | kishi | рыцарь; конный воин | knight; mounted warrior | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A8%8E%E5%A3%AB-50332) |
| EX-01458 | 騎馬 | kiba | верховая езда; всадник | horseriding; mounted rider | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%A8%8E%E9%A6%AC-475316) |
| EX-01459 | 一騎当千 | ikkitōsen | один стоит тысячи; исключительная сила и доблесть | a match for a thousand; exceptional prowess | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%B8%80%E9%A8%8E%E5%BD%93%E5%8D%83-434001) |
| EX-01460 | 技術 | gijutsu | технология; техника; мастерство | technology; technique; skill | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8A%80%E8%A1%93-50443) |
| EX-01461 | 技師 | gishi | инженер; технический специалист | engineer; technical specialist | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8A%80%E5%B8%AB-473467) |
| EX-01462 | 特技 | tokugi | особое умение; сильная сторона | special skill; forte | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%89%B9%E6%8A%80) |
| EX-01463 | 技 | waza | умение; мастерство; приём | skill; technique; move | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8A%80-472037) |
| EX-01464 | 適宜 | tekigi | по необходимости; по усмотрению; подходящий | as appropriate; at one's discretion; suitable | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E9%81%A9%E5%AE%9C) |
| EX-01465 | 便宜 | bengi | удобство; содействие; практическая целесообразность | convenience; accommodation; expediency | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E4%BE%BF%E5%AE%9C) |
| EX-01466 | 偽名 | gimei | вымышленное имя; ложное имя | false name; assumed name | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%81%BD%E5%90%8D-475832) |
| EX-01467 | 真偽 | shingi | истинность или ложность; подлинность | truth or falsehood; authenticity | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%9C%9F%E5%81%BD) |
| EX-01468 | 虚偽 | kyogi | ложь; неправда | falsehood; untruth | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%99%9A%E5%81%BD-53173) |
| EX-01469 | 偽る | itsuwaru | лгать; искажать; притворяться | lie; misrepresent; pretend | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%81%BD%E3%82%8B) |
| EX-01470 | 偽り | itsuwari | ложь; обман | falsehood; deceit | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E5%81%BD%E3%82%8A) |
| EX-01471 | 偽 | nise | подделка; имитация | fake; imitation | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%81%BD-2558) |
| EX-01472 | 偽物 | nisemono | подделка; фальшивка | fake; counterfeit | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%81%BD%E7%89%A9-475509) |
| EX-01473 | 偽札 | nisesatsu | фальшивая банкнота | counterfeit banknote | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%81%BD%E6%9C%AD-591926) |
| EX-01474 | 詐欺 | sagi | мошенничество; афера | fraud; swindle | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A9%90%E6%AC%BA-68611) |
| EX-01475 | 欺く | azamuku | обманывать; не уступать; затмевать | deceive; rival; outshine | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%AC%BA%E3%81%8F) |
| EX-01476 | 義理 | giri | общественный долг; обязательство по приличию; некровное родство | social duty; obligation; relationship by marriage or adoption | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%BE%A9%E7%90%86-53569) |
| EX-01477 | 意義 | igi | смысл; значение; значимость | meaning; significance | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%84%8F%E7%BE%A9-431146) |
| EX-01478 | 正義 | seigi | справедливость; праведность | justice; righteousness | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%AD%A3%E7%BE%A9-85645) |
| EX-01479 | 疑念 | ginen | сомнение; подозрение | doubt; misgiving; suspicion | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%96%91%E5%BF%B5-475181) |
| EX-01480 | 疑問 | gimon | вопрос; сомнение | question; doubt | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%96%91%E5%95%8F-475920) |
| EX-01481 | 容疑 | yōgi | подозрение в совершении преступления | suspicion of a crime | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%AE%B9%E7%96%91-652843) |
| EX-01482 | 疑う | utagau | сомневаться; подозревать | doubt; suspect | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%96%91%E3%81%86-440110) |
| EX-01483 | 疑い | utagai | сомнение; подозрение | doubt; suspicion | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%96%91%E3%81%84-440106) |
| EX-01484 | 疑わしい | utagawashii | сомнительный; подозрительный; маловероятный | doubtful; suspicious; uncertain | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%96%91%E3%82%8F%E3%81%97%E3%81%84-440129) |
| EX-01485 | 儀式 | gishiki | церемония; обряд | ceremony; ritual | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%84%80%E5%BC%8F-473492) |
| EX-01486 | 威儀 | igi | достойная осанка; величавая манера держаться | dignified bearing; solemn deportment | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%A8%81%E5%84%80-431141) |
| EX-01487 | 地球儀 | chikyūgi | глобус | globe; terrestrial globe | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9C%B0%E7%90%83%E5%84%80-95934) |
| EX-01488 | 戯曲 | gikyoku | пьеса; драматическое произведение | play; dramatic work | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%88%AF%E6%9B%B2-50150) |
| EX-01489 | 遊戯 | yūgi | игра; развлечение; игровые танцы | play; amusement; organised games and dances | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E9%81%8A%E6%88%AF-144624) |
| EX-01490 | 児戯 | jigi | детская игра; ребячество | child's play; childishness | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%85%90%E6%88%AF-517581) |
| EX-01491 | 戯れる | tawamureru | играть; резвиться; шутить; флиртовать | play; frolic; jest; flirt | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%88%AF%E3%82%8C%E3%82%8B) |
| EX-01492 | 戯れ | tawamure | игра; шутка; флирт | play; joke; flirtation | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%88%AF%E3%82%8C) |
| EX-01493 | 擬音 | gion | имитация звука; звуковой эффект | imitation of sound; sound effect | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E6%93%AC%E9%9F%B3) |
| EX-01494 | 擬人法 | gijinhō | олицетворение; персонификация | personification | [精選版 日本国語大辞典](https://kotobank.jp/word/%E6%93%AC%E4%BA%BA%E6%B3%95-50551) |
| EX-01495 | 模擬 | mogi | имитация; моделирование; учебное воспроизведение | imitation; simulation; mock exercise | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%A8%A1%E6%93%AC-645239) |
| EX-01496 | 犠牲 | gisei | жертва; жертвоприношение; самопожертвование | sacrifice; victim; self-sacrifice | [小学館 プログレッシブ和英中辞典](https://kotobank.jp/jeword/%E7%8A%A0%E7%89%B2) |
| EX-01497 | 犠打 | gida | жертвенный удар в бейсболе | sacrifice hit in baseball | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%8A%A0%E6%89%93-474267) |

## Проверки

- `scripts/test_import.py`: 7 проверок, включая точные ID, японские написания, ромадзи, все предыдущие переводы, отложенные чтения и детерминированную пересборку.
- `scripts/test_translations.cjs`: 24 карточки / 96 примеров, RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены порядок, раскрытие примеров, перевод и пояснения каждого ID, отсутствие служебных надписей и горизонтального переполнения.
- `scripts/test_cards.cjs`: навигация, поиск, раскрытие примеров и восстановление после ошибки.
- `scripts/test_on_drill.cjs`, `scripts/test_kun_drill.cjs`: оба языка и три ширины; видимые наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py`, `scripts/test_kun_source.py`: сверка 1299 исходных строк диапазона упражнений 1–300 и скрытий. Диапазон упражнений не расширялся.
- Excel: точное соответствие 1495 пар переводов общим данным, сохранение 10 листов, 20 скрытий, прежних значений и оформления. Будущие строки остаются без переводов.

Браузер: Google Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция; физический телефон не использовался. Дополнительно просмотрены снимки карточек на компьютере и мобильном размере. Локальный Noto Serif CJK JP используется для проверки; файлы сайта не меняются.

Main, README, HTML/CSS/JS карточек, код и наборы ON/KUN, данные видимости и опубликованный сайт не изменены.
