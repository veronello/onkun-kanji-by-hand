# Переводы карточек № 397–420

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `3ac70330cc8391b4e792fd609848e69c38b6fedd`.

Добавлены **132 пары переводов RU/EN** для 24 карточек от 狂 до 仰, EX-01725–EX-01856. Все чтения имеют принятый статус СЛОВАРЬ; шаблонов и исключённых записей в партии нет. Всего **1853 переведённых примера** для карточек № 1–420.

## Сохранение данных

Прежние 1721 перевода сохранены полностью, включая пояснения, даты, источники и отметки. SHA-256 нормализованного предыдущего набора: `cf128f82822e8ea47e3fa87fd526527cffdc7c104287cb4ad67029a049d2b829`.

Текущий Excel: `OnKun_Translations_1-396_2026-10-24_hide_readings.xlsx`, SHA-256 `80e8e6cb1978e02c6d8cf3dc8ffa489f56c548d70b66166d16e61ece5f3dac6e`. Локальная копия подтверждена по Library ID и версии 4. Результат: `OnKun_Translations_1-420_2026-10-25_hide_readings.xlsx`.

На обоих листах примеров обновлены только строки **1726–1857**: I/J и V:X основного листа, J/K и W:Y листа `OnKun Examples hide readings `. Ячейки и высоты строк подготовлены Artifact Tool; они перенесены в исходный OOXML-пакет без полной пересборки остальных листов. Сохранены 10 листов, их имена, ширины столбцов, фильтры, таблицы, проверки ввода, формулы, исходные значения и оформление. Все 20 отметок скрытия YES сохранены. Вне разрешённых ячеек сверены **687021 ячейка**. Несвязанные части XLSX сохранены побайтово. Будущие строки остаются без переводов.

Файл репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не меняется: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Переводы хранятся в общем слое `data/translations-12.json`; импорт обновляет блок `data/excel/cards/008.json` и статистику манифеста. Японские написания, ромадзи, классификация и порядок примеров не меняются.

## Проверка значений

RU/EN — редакторские эквиваленты основных значений по связанным словарным статьям, а не полный список всех редких употреблений.

- 脅かす / obiyakasu и 脅かす / odokasu сохранены отдельно по ID. Первое включает угрозу безопасности и положению, второе — испуг или запугивание. Принятые написания и чтения не объединены.
- 在郷 / zaigō означает сельскую местность либо проживание на родине. Военное значение составного 在郷軍人 не перенесено на отдельное слово автоматически. 京浜 — Токио и Иокогама; 京阪 — Киото и Осака.
- 狂言 включает театральное и переносное значения. 勉強 включает учёбу и торговое употребление со значением скидки. 強盗 различает действие и человека; 恐慌 — панику и экономический кризис.
- В парах 挟む／挟まる, 狭める／狭まる и 強める／強まる сохранено различие переходности. 教える — учить или сообщать; 教わる — учиться у другого.
- В 仰ぐ сохранены основные значения взгляда вверх, почитания и обращения за помощью; отдельное употребление с выпиванием залпом отмечено в пояснении. 仰せ — почтительное обозначение слов или распоряжения.
- 教育, 境界 и 影響 уже встречались: сохранены прежние формулировки RU/EN и пояснения, новые ID остаются самостоятельными записями.

**33** примера отмечены `sense-selection` при принятом чтении: точный смысл определяется контекстом. Список — в [отчёте по значениям](translations-397-420-review.md). Служебная отметка не выводится в интерфейс, полезные пояснения доступны на выбранном языке.

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01725 | 狂気 | kyōki | безумие; сумасшествие | madness; insanity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%82%E6%B0%97) |
| EX-01726 | 狂言 | kyōgen | кёгэн; театральная пьеса; инсценировка | kyōgen; a play; a sham | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%82%E8%A8%80) |
| EX-01727 | 熱狂 | nekkyō | исступлённый восторг; бурное увлечение | wild excitement; intense enthusiasm | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%86%B1%E7%8B%82) |
| EX-01728 | 狂う | kurū | сходить с ума; сбиваться; выходить из строя | to go mad; to go awry; to malfunction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%82%E3%81%86) |
| EX-01729 | 狂おしい | kuruoshii | исступлённый; мучительно страстный | frenzied; intensely passionate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%82%E3%81%8A%E3%81%97%E3%81%84) |
| EX-01730 | 京風 | kyōfū | киотский стиль; изысканность | Kyoto style; elegance | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BA%AC%E9%A2%A8-478926) |
| EX-01731 | 上京 | jōkyō | поездка в Токио; переезд в столицу | going to Tokyo; moving to the capital | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8A%E4%BA%AC) |
| EX-01732 | 帰京 | kikyō | возвращение в Токио | returning to Tokyo | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B8%B0%E4%BA%AC) |
| EX-01733 | 京浜 | keihin | Токио и Иокогама; район Кэйхин | Tokyo and Yokohama; the Keihin area | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BA%AC%E6%B5%9C-489207) |
| EX-01734 | 京阪 | keihan | Киото и Осака; район Кэйхан | Kyoto and Osaka; the Keihan area | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BA%AC%E9%98%AA-489173) |
| EX-01735 | 享有 | kyōyū | обладание; пользование правами или благами | possession; enjoyment of rights or benefits | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%AB%E6%9C%89) |
| EX-01736 | 享受 | kyōju | получение благ; пользование; наслаждение | enjoyment; receiving benefits | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%AB%E5%8F%97) |
| EX-01737 | 享楽 | kyōraku | наслаждение; удовольствие | pleasure; enjoyment | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%AB%E6%A5%BD) |
| EX-01738 | 供給 | kyōkyū | снабжение; поставка | supply; provision | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BE%9B%E7%B5%A6) |
| EX-01739 | 提供 | teikyō | предоставление; предложение; спонсорство | provision; an offer; sponsorship | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8F%90%E4%BE%9B) |
| EX-01740 | 自供 | jikyō | признание на допросе | a confession during questioning | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%87%AA%E4%BE%9B) |
| EX-01741 | 供物 | kumotsu | подношение божеству или усопшему | a religious offering | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BE%9B%E7%89%A9-56101) |
| EX-01742 | 供養 | kuyō | поминовение; заупокойная служба | commemoration of the dead; a memorial service | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BE%9B%E9%A4%8A) |
| EX-01743 | 供える | sonaeru | приносить в дар; делать подношение | to offer; to place as a religious offering | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BE%9B%E3%81%88%E3%82%8B) |
| EX-01744 | お供え | osonae | подношение; поминальный дар | a religious offering; a memorial offering | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%BE%A1%E4%BE%9B%E3%81%88-452711) |
| EX-01745 | 供 | tomo | сопровождающий; свита | an attendant; a retinue | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BE%9B) |
| EX-01746 | 子供 | kodomo | ребёнок; дети | a child; children | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AD%90%E4%BE%9B) |
| EX-01747 | 協力 | kyōryoku | сотрудничество; содействие | cooperation; assistance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8D%94%E5%8A%9B) |
| EX-01748 | 協会 | kyōkai | ассоциация; общество | an association; a society | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8D%94%E4%BC%9A) |
| EX-01749 | 妥協 | dakyō | компромисс; взаимные уступки | a compromise; mutual concessions | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A6%A5%E5%8D%94) |
| EX-01750 | 状況 | jōkyō | обстановка; положение дел | a situation; circumstances | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E7%8A%B6%E6%B3%81-79012) |
| EX-01751 | 実況 | jikkyō | реальное положение дел; репортаж с места событий | actual conditions; live commentary | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%9F%E6%B3%81) |
| EX-01752 | 概況 | gaikyō | общая обстановка; общий обзор положения | general conditions; an overview of the situation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A6%82%E6%B3%81) |
| EX-01753 | 峡谷 | kyōkoku | ущелье; каньон | a gorge; a canyon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B3%A1%E8%B0%B7) |
| EX-01754 | 地峡 | chikyō | перешеек | an isthmus | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9C%B0%E5%B3%A1) |
| EX-01755 | 海峡 | kaikyō | пролив | a strait; a channel | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B5%B7%E5%B3%A1) |
| EX-01756 | 挟撃 | kyōgeki | атака с двух сторон; охват с флангов | an attack from both sides; a pincer attack | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8C%9F%E6%92%83) |
| EX-01757 | 挟む | hasamu | зажимать; помещать между; вставлять | to hold between; to sandwich; to insert | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%8C%9F%E3%82%80-510543) |
| EX-01758 | 挟まる | hasamaru | застревать между; оказываться зажатым | to get caught between; to be wedged in | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8C%9F%E3%81%BE%E3%82%8B) |
| EX-01759 | 狭量 | kyōryō | узость взглядов; ограниченность | narrow-mindedness; intolerance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%AD%E9%87%8F) |
| EX-01760 | 広狭 | kōkyō | ширина; степень широты или узости | width; breadth or narrowness | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%BA%83%E7%8B%AD-494677) |
| EX-01761 | 偏狭 | henkyō | ограниченность; узость взглядов | narrow-mindedness; intolerance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%8F%E7%8B%AD) |
| EX-01762 | 狭い | semai | узкий; тесный; ограниченный | narrow; cramped; limited | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%AD%E3%81%84) |
| EX-01763 | 狭苦しい | semakurushii | тесный; неудобно маленький | cramped; uncomfortably small | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%AD%E8%8B%A6%E3%81%97%E3%81%84) |
| EX-01764 | 狭める | sebameru | сужать; сокращать | to narrow; to reduce | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%AD%E3%82%81%E3%82%8B) |
| EX-01765 | 狭まる | sebamaru | сужаться; сокращаться | to become narrower; to shrink | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8B%AD%E3%81%BE%E3%82%8B) |
| EX-01766 | 恐怖 | kyōfu | страх; ужас | fear; terror | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%90%E6%80%96) |
| EX-01767 | 恐縮 | kyōshuku | смущённая благодарность; чувство неловкости | humble gratitude; feeling apologetic | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%90%E7%B8%AE) |
| EX-01768 | 恐慌 | kyōkō | паника; экономический кризис | panic; an economic depression | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%90%E6%85%8C) |
| EX-01769 | 恐れる | osoreru | бояться; опасаться | to fear; to be afraid of | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%90%E3%82%8C%E3%82%8B-452757) |
| EX-01770 | 恐れ | osore | страх; опасение; риск | fear; apprehension; a risk | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%90%E3%82%8C-40475) |
| EX-01771 | 恐らく | osoraku | вероятно; скорее всего | probably; most likely | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%90%E3%82%89%E3%81%8F) |
| EX-01772 | 恐ろしい | osoroshii | страшный; ужасный; чрезвычайный | frightening; dreadful; tremendous | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%90%E3%82%8D%E3%81%97%E3%81%84) |
| EX-01773 | 恭賀 | kyōga | почтительное поздравление | respectful congratulations | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%81%AD%E8%B3%80-477813) |
| EX-01774 | 恭順 | kyōjun | покорность; выражение преданности | submission; allegiance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%AD%E9%A0%86) |
| EX-01775 | 恭しい | uyauyashii | почтительный; исполненный уважения | respectful; reverential | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%81%AD%E3%81%97%E3%81%84) |
| EX-01776 | 胸囲 | kyōi | обхват груди | chest circumference; bust measurement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E5%9B%B2) |
| EX-01777 | 胸中 | kyōchū | сокровенные мысли; чувства | one's innermost thoughts; feelings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E4%B8%AD) |
| EX-01778 | 度胸 | dokyō | смелость; самообладание | courage; nerve | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BA%A6%E8%83%B8) |
| EX-01779 | 胸 | mune | грудь; сердце; душа | the chest; one's heart; feelings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8) |
| EX-01780 | 胸板 | munaita | грудная клетка; передняя часть груди | the chest; the front of the chest | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E6%9D%BF) |
| EX-01781 | 胸毛 | munage | волосы на груди | chest hair | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E6%AF%9B) |
| EX-01782 | 胸騒ぎ | munasawagi | тревожное предчувствие; беспокойство | a foreboding; uneasiness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%83%B8%E9%A8%92%E3%81%8E) |
| EX-01783 | 脅迫 | kyōhaku | угроза; запугивание | a threat; intimidation | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E8%BF%AB-478889) |
| EX-01784 | 脅威 | kyōi | угроза; опасность | a threat; a menace | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%84%85%E5%A8%81) |
| EX-01785 | 脅かす | obiyakasu | угрожать; подвергать опасности | to threaten; to endanger | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E3%81%8B%E3%81%99-453270) |
| EX-01786 | 脅す | odosu | угрожать; запугивать | to threaten; to intimidate | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E3%81%99-453455) |
| EX-01787 | 脅し | odoshi | угроза; запугивание | a threat; intimidation | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E3%81%97-453411) |
| EX-01788 | 脅し文句 | odoshimonku | угрожающие слова; словесная угроза | threatening words; a verbal threat | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E3%81%97%E6%96%87%E5%8F%A5-453446) |
| EX-01789 | 脅かす | odokasu | пугать; запугивать; устрашать | to frighten; to intimidate; to startle | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%84%85%E3%81%8B%E3%81%99-453270) |
| EX-01790 | 強弱 | kyōjaku | сила и слабость; степень силы | strength and weakness; intensity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E5%BC%B1) |
| EX-01791 | 強要 | kyōyō | принуждение; настоятельное требование | coercion; an insistent demand | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E8%A6%81) |
| EX-01792 | 勉強 | benkyō | учёба; изучение; скидка | study; learning; a price reduction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%89%E5%BC%B7) |
| EX-01793 | 強引 | gōin | насильственный; бесцеремонный; напористый | forcible; high-handed; pushy | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E5%BC%95) |
| EX-01794 | 強情 | gōjō | упрямство; несговорчивость | stubbornness; obstinacy | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E6%83%85) |
| EX-01795 | 強盗 | gōtō | разбой; грабитель | robbery; a robber | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E7%9B%97) |
| EX-01796 | 強い | tsuyoi | сильный; крепкий; устойчивый | strong; powerful; resistant | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E3%81%84) |
| EX-01797 | 強がる | tsuyogaru | храбриться; напускать на себя смелость | to put on a brave front; to act tough | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E3%81%8C%E3%82%8B) |
| EX-01798 | 強まる | tsuyomaru | усиливаться; крепнуть | to grow stronger; to intensify | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E3%81%BE%E3%82%8B) |
| EX-01799 | 強める | tsuyomeru | усиливать; укреплять | to strengthen; to intensify | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E3%82%81%E3%82%8B) |
| EX-01800 | 強いる | shiiru | принуждать; навязывать | to compel; to impose | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BC%B7%E3%81%84%E3%82%8B) |
| EX-01801 | 無理強い | murijii | принуждение; навязывание против воли | coercion; forcing something on someone | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%84%A1%E7%90%86%E5%BC%B7%E3%81%84-642539) |
| EX-01802 | 教育 | kyōiku | образование; воспитание | education; training | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E8%82%B2) |
| EX-01803 | 教訓 | kyōkun | поучение; урок; мораль | a lesson; a moral | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E8%A8%93) |
| EX-01804 | 宗教 | shūkyō | религия; вероисповедание | religion; a faith | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AE%97%E6%95%99) |
| EX-01805 | 教える | oshieru | учить; преподавать; сообщать | to teach; to instruct; to tell | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E3%81%88%E3%82%8B) |
| EX-01806 | 教え | oshie | учение; наставление; урок | teaching; a precept; a lesson | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E3%81%88) |
| EX-01807 | 教わる | osowaru | учиться у кого-либо; получать наставления | to learn from someone; to be taught | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E3%82%8F%E3%82%8B) |
| EX-01808 | 郷里 | kyōri | родные места; родной город | one's hometown; one's native place | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%83%B7%E9%87%8C) |
| EX-01809 | 郷土 | kyōdo | родной край; родная земля | one's native region; one's home district | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%83%B7%E5%9C%9F) |
| EX-01810 | 異郷 | ikyō | чужбина; чужие края | a foreign land; an unfamiliar place away from home | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%95%B0%E9%83%B7-431343) |
| EX-01811 | 郷士 | gōshi | сельский самурай | a rural samurai | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%83%B7%E5%A3%AB) |
| EX-01812 | 近郷 | kingō | близлежащие деревни; окрестные сёла | nearby villages; surrounding rural communities | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%BF%91%E9%83%B7-481079) |
| EX-01813 | 在郷 | zaigō | сельская местность; проживание в родных местах | the countryside; residing in one's hometown | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E5%9C%A8%E9%83%B7-507329) |
| EX-01814 | 境界 | kyōkai | граница; рубеж | a boundary; a border | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%83%E7%95%8C) |
| EX-01815 | 境地 | kyōchi | состояние духа; достигнутая ступень | a state of mind; an attained stage | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%83%E5%9C%B0) |
| EX-01816 | 逆境 | gyakkyō | невзгоды; неблагоприятные обстоятельства | adversity; adverse circumstances | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%80%86%E5%A2%83) |
| EX-01817 | 境内 | keidai | территория храма или святилища | the grounds of a temple or shrine | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%83%E5%86%85) |
| EX-01818 | 境 | sakai | граница; рубеж; раздел | a boundary; a border; a dividing point | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%A2%83-52359) |
| EX-01819 | 境目 | sakaime | граница; место раздела; переломный момент | a boundary; a dividing line; a turning point | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%A2%83%E7%9B%AE-508907) |
| EX-01820 | 橋脚 | kyōkyaku | мостовая опора; бык моста | a bridge pier | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A9%8B%E8%84%9A) |
| EX-01821 | 鉄橋 | tekkyō | железный мост; железнодорожный мост | an iron bridge; a railway bridge | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%89%84%E6%A9%8B) |
| EX-01822 | 歩道橋 | hodōkyō | надземный пешеходный переход | a pedestrian overpass; a footbridge | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%AD%A9%E9%81%93%E6%A9%8B-630961) |
| EX-01823 | 橋 | hashi | мост | a bridge | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A9%8B-114120) |
| EX-01824 | 丸木橋 | marukibashi | мост из брёвен; мостик из бревна | a log bridge | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%B8%B8%E6%9C%A8%E6%A9%8B-636108) |
| EX-01825 | 矯正 | kyōsei | исправление; коррекция | correction; reform | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9F%AF%E6%AD%A3) |
| EX-01826 | 奇矯 | kikyō | эксцентричность; причудливость | eccentricity; oddness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A5%87%E7%9F%AF) |
| EX-01827 | 矯める | tameru | выправлять; придавать форму; исправлять | to straighten; to shape; to correct | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%9F%AF%E3%82%81%E3%82%8B) |
| EX-01828 | 矯め直す | tamenaosu | выправлять заново; исправлять | to straighten again; to set right | [小学館 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%9F%AF%E3%82%81%E7%9B%B4%E3%81%99-3138163) |
| EX-01829 | 鏡台 | kyōdai | туалетный столик с зеркалом | a dressing table; a vanity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8F%A1%E5%8F%B0) |
| EX-01830 | 望遠鏡 | bōenkyō | телескоп; подзорная труба | a telescope | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%9B%E9%81%A0%E9%8F%A1) |
| EX-01831 | 反射鏡 | hanshakyō | отражающее зеркало; рефлектор | a reflecting mirror; a reflector | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8F%8D%E5%B0%84%E9%8F%A1-606499) |
| EX-01832 | 鏡 | kagami | зеркало | a mirror | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%8F%A1) |
| EX-01833 | 競争 | kyōsō | соревнование; конкуренция | competition; rivalry | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E4%BA%89) |
| EX-01834 | 競技 | kyōgi | спортивное состязание; вид соревнований | an athletic contest; an event | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E6%8A%80) |
| EX-01835 | 競泳 | kyōei | соревнования по плаванию | competitive swimming; a swimming race | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E6%B3%B3) |
| EX-01836 | 競馬 | keiba | скачки; конные бега | horse racing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E9%A6%AC) |
| EX-01837 | 競輪 | keirin | велогонки кэйрин | keirin; cycle racing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E8%BC%AA) |
| EX-01838 | 競う | kisou | состязаться; соперничать | to compete; to vie | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E3%81%86) |
| EX-01839 | 競る | seru | соперничать; торговаться на аукционе | to compete closely; to bid at auction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E3%82%8B) |
| EX-01840 | 競り合う | seriau | соперничать; вести упорную борьбу | to compete closely; to vie with one another | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%AB%B6%E3%82%8A%E5%90%88%E3%81%86) |
| EX-01841 | 音響 | onkyō | звук; звучание | sound; acoustics | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9F%B3%E9%9F%BF) |
| EX-01842 | 影響 | eikyō | влияние; воздействие | influence; effect | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BD%B1%E9%9F%BF) |
| EX-01843 | 交響楽 | kōkyōgaku | симфоническая музыка | symphonic music | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%A4%E9%9F%BF%E6%A5%BD) |
| EX-01844 | 響く | hibiku | звучать; раздаваться; сказываться | to resound; to echo; to have an effect | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9F%BF%E3%81%8F) |
| EX-01845 | 響き | hibiki | звук; отзвук; звучание | a sound; an echo; resonance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9F%BF%E3%81%8D) |
| EX-01846 | 驚異 | kyōi | чудо; нечто поразительное | a wonder; a marvel | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A9%9A%E7%95%B0) |
| EX-01847 | 驚嘆 | kyōtan | изумление; восхищение | amazement; admiration | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A9%9A%E5%98%86) |
| EX-01848 | 驚く | odoroku | удивляться; изумляться; пугаться | to be surprised; to be amazed; to be startled | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A9%9A%E3%81%8F) |
| EX-01849 | 驚き | odoroki | удивление; изумление | surprise; amazement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A9%9A%E3%81%8D) |
| EX-01850 | 驚かす | odorokasu | удивлять; поражать; пугать | to surprise; to amaze; to startle | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A9%9A%E3%81%8B%E3%81%99) |
| EX-01851 | 仰視 | gyōshi | взгляд вверх; созерцание снизу | looking up; gazing upwards | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BB%B0%E8%A6%96-478230) |
| EX-01852 | 仰天 | gyōten | потрясение; крайнее изумление | astonishment; amazement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BB%B0%E5%A4%A9) |
| EX-01853 | 仰角 | gyōkaku | угол возвышения | an angle of elevation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BB%B0%E8%A7%92) |
| EX-01854 | 信仰 | shinkō | религиозная вера; вероисповедание | religious faith; belief | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BF%A1%E4%BB%B0) |
| EX-01855 | 仰ぐ | aogu | смотреть вверх; почитать; обращаться за помощью | to look up; to revere; to seek help | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E4%BB%B0%E3%81%90-422233) |
| EX-01856 | 仰せ | ōse | слова; повеление; указание | words; a command; an instruction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BB%B0%E3%81%9B) |

## Проверки

- `scripts/test_import.py`: 7 тестов, включая полное сохранение предыдущего набора, соответствие ID/написаний/ромадзи, два чтения 脅かす, точные переводы и детерминированную пересборку.
- `scripts/test_translations.cjs`: 24 карточки / 132 примера; RU и EN; Grid и Single; ширины 1440, 390 и 320 px. Проверены все тексты по ID, порядок, раскрытие примеров, пояснения, отсутствие служебной надписи и горизонтального переполнения.
- `scripts/test_cards.cjs`: поиск, навигация, раскрытие и восстановление после ошибки.
- `scripts/test_on_drill.cjs` и `scripts/test_kun_drill.cjs`: оба языка и три ширины; наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py` и `scripts/test_kun_source.py`: сверка с исходным файлом упражнений `OnKun_Translations_1-300_2026-10-23 upd hide readings(2).xlsx` по его неизменному SHA-256. Новая версия Excel не подставляется вместо источника утверждённых упражнений. Сохранены все 1299 исходных строк диапазона 1–300 и 20 отметок скрытия.
- Excel: 132 новых перевода на каждом из двух листов совпадают с общими данными; сохранены 10 листов, прежние значения и оформление, все скрытия. Файл-источник не изменён.

Браузер: Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция, физический телефон не использовался. Визуально просмотрены широкое и мобильное отображения карточек, сетка и обновлённые диапазоны обоих листов. Локальный Noto Serif CJK JP использован только для проверки; файлы и шрифты сайта не меняются.

Main, README, HTML/CSS/JS карточек, код и наборы упражнений, данные видимости и опубликованный сайт не изменены.
