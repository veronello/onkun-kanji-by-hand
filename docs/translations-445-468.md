# Переводы карточек № 445–468

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `1d8ce4885eef082d8c857c2b8905858d5ca27e67`.

Добавлены **98 пар переводов RU/EN** для 24 карточек от 区 до 群. В партии 99 исходных записей EX-01971–EX-02069: 97 словарных чтений, одна принятая форма 愚かだ / oroka da и один шаблон EX-02061 / ○○郡. Шаблон сохранён без чтения и перевода. Всего **2065 переведённых примеров** для карточек № 1–468.

## Сохранение данных

Предыдущие 1967 переводов сохранены полностью: тексты, пояснения, даты, источники и отметки. SHA-256 нормализованного предыдущего набора: `2d213566a74a7074dedd9777faebb6b18aaf376d2a87a59bc11c3c9f3d33ec89`.

Источник: `OnKun_Translations_1-444_2026-10-25_hide_readings.xlsx`, SHA-256 `5f0b45553bf0197f9cf512960d64b70ec29ee9e2ef6f185aaf4227e9eb209cf4`. Локальная копия соответствует текущей версии 6. Результат: `OnKun_Translations_1-468_2026-10-25_hide_readings.xlsx`.

На обоих листах примеров обновлены только строки **1972–2070**, кроме строки **2062** с шаблоном: I/J и V:X основного листа, J/K и W:Y листа `OnKun Examples hide readings `. Ячейки, стили и высоты строк подготовлены Artifact Tool и перенесены в исходный OOXML-пакет. Сохранены все 10 листов, их имена, ширины столбцов, таблицы, фильтры, проверки ввода и все 20 пометок скрытия YES. Строка шаблона не меняется. Проверены **687361 ячейка** вне разрешённой области, включая значения, типы, оформление, ссылки и комментарии. Несвязанные части XLSX сохранены побайтово. Будущие строки остаются без переводов.

Таблица репозитория `sources/OnKun_Romaji_Reviewed.xlsx` не меняется: SHA-256 `0a52d6f9725ecb00a532a9fad6dacfec8622cb6bcbe7ef863da5d7140d894db3`. Общий слой переводов — `data/translations-12.json`; импорт обновляет `data/excel/cards/009.json` и статистику манифеста. Стабильные ID, японские написания, ромадзи, классификация и порядок сохранены, в том числе 区々, 苦々しい, 群すずめ и полная форма 愚かだ.

## Проверка значений

RU/EN — редакторские эквиваленты основных значений по связанным словарным статьям. Редкие исторические значения не перечисляются исчерпывающе.

- 区々 / kuku: разнородный, незначительный или мелочный. Сохранён знак повтора 々; чтение machimachi автоматически не подставлено.
- 苦しがる обозначает проявление страдания в словах или поведении. 苦しむ и 苦しめる сохраняют различие между испытываемым и причиняемым страданием. 苦虫 — воображаемая горькая букашка; пояснение связывает слово с выражением о недовольном лице, не превращая его в название конкретного вида.
- 空 / sora и 空 / kara остаются разными записями по ID. 空く / aku не подменено другим чтением; 空ける сохраняет переходность и полную окуригану.
- 空手 / karate включает отсутствие ноши или оружия и боевое искусство; оба значения подтверждены в одной статье. 空手形 различает необеспеченный вексель и переносное пустое обещание.
- 愚かだ / oroka da остаётся полной принятой предикативной формой со статусом СОСТАВ / ФОРМА. Пробел и da сохранены.
- 君 / kimi различает знакомое обращение и историческое почтительное обозначение правителя; 母君 — уважительное обозначение матери. 音訓 переведено как онные и кунные чтения.
- 薫る и 薫り сохраняют исходное написание и передают приятный аромат. 薫陶 — воспитание и формирующее влияние наставника. 郡部 — территории уездов, а не уездное учреждение.
- 群すずめ сохраняет смешанное написание; это стая воробьёв. 群千鳥 включает стаю ржанок и традиционный узор с птицами. ○○郡 остаётся шаблоном без чтения и перевода.
- 暗愚 и 教訓 уже встречались: сохранены прежние RU/EN формулировки и пояснения; новые ID остаются самостоятельными записями.

**23** примера отмечены `sense-selection` при принятом чтении: конкретное значение выбирается по контексту. Служебная надпись не выводится в интерфейс; полезные пояснения доступны на выбранном языке. Список — в [отчёте по значениям](translations-445-468-review.md).

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-01971 | 区別 | kubetsu | различие; разграничение | a distinction; differentiation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8C%BA%E5%88%A5) |
| EX-01972 | 区々 | kuku | разнородный; незначительный; мелочный | diverse; insignificant; petty | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8C%BA%E5%8C%BA-482872) |
| EX-01973 | 地区 | chiku | район; зона; участок | an area; a district; a zone | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%9C%B0%E5%8C%BA) |
| EX-01974 | 句集 | kushū | сборник хайку | a collection of haiku | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%A5%E9%9B%86) |
| EX-01975 | 字句 | jiku | слова и выражения; формулировка | words and phrases; wording | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%AD%97%E5%8F%A5) |
| EX-01976 | 節句 | sekku | традиционный сезонный праздник | a traditional seasonal festival | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%AF%80%E5%8F%A5-548011) |
| EX-01977 | 苦心 | kushin | кропотливые усилия; старание | painstaking effort; hard work | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E5%BF%83) |
| EX-01978 | 苦労 | kurō | трудности; тяготы; заботы | hardship; trouble; worry | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E5%8A%B4) |
| EX-01979 | 辛苦 | shinku | невзгоды; лишения; тяжёлый труд | hardship; suffering; toil | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BE%9B%E8%8B%A6) |
| EX-01980 | 苦しい | kurushii | мучительный; тяжёлый; затруднительный | painful; distressing; difficult | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%8B%A6%E3%81%97%E3%81%84-486450) |
| EX-01981 | 苦しがる | kurushigaru | выказывать страдание; жаловаться на мучения | to show signs of suffering; to complain of distress | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%8B%A6%E3%81%97%E3%81%8C%E3%82%8B-2032866) |
| EX-01982 | 見苦しい | migurushii | неприглядный; постыдный; некрасивый | unsightly; disgraceful; ugly | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E8%8B%A6%E3%81%97%E3%81%84) |
| EX-01983 | 苦しむ | kurushimu | страдать; мучиться; испытывать трудности | to suffer; to be distressed; to struggle | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E3%81%97%E3%82%80) |
| EX-01984 | 苦しみ | kurushimi | страдание; мучение; тяготы | suffering; pain; hardship | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E3%81%97%E3%81%BF) |
| EX-01985 | 苦しめる | kurushimeru | мучить; причинять страдание; донимать | to torment; to cause suffering; to trouble | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E3%81%97%E3%82%81%E3%82%8B) |
| EX-01986 | 苦い | nigai | горький; мучительный; неприятный | bitter; painful; unpleasant | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E3%81%84) |
| EX-01987 | 苦虫 | nigamushi | воображаемая горькая букашка | an imagined bitter-tasting insect | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%8B%A6%E8%99%AB-591126) |
| EX-01988 | 苦々しい | niganigashii | крайне неприятный; вызывающий досаду | disgusting; deeply displeasing | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%8B%A6%E8%8B%A6%E3%81%97%E3%81%84-591117) |
| EX-01989 | 苦り切る | nigarikiru | быть крайне недовольным; морщиться от досады | to be utterly disgusted; to look deeply displeased | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8B%A6%E3%82%8A%E5%88%87%E3%82%8B) |
| EX-01990 | 駆使 | kushi | умелое использование; полное владение | skilful use; full command | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A7%86%E4%BD%BF) |
| EX-01991 | 駆逐 | kuchiku | изгнание; вытеснение | expulsion; driving out | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A7%86%E9%80%90) |
| EX-01992 | 先駆 | senku | предшественник; первопроходец; авангард | a precursor; a pioneer; a vanguard | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%88%E9%A7%86) |
| EX-01993 | 駆ける | kakeru | бежать; мчаться; скакать | to run; to dash; to gallop | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A7%86%E3%81%91%E3%82%8B) |
| EX-01994 | 抜け駆け | nukegake | тайное опережение соперников; обход договорённости | stealing a march on others; getting ahead by acting secretly | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8A%9C%E3%81%91%E9%A7%86%E3%81%91) |
| EX-01995 | 駆る | karu | гнать; погонять; побуждать | to drive; to spur on; to impel | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A7%86%E3%82%8B) |
| EX-01996 | 駆り立てる | karitateru | подгонять; побуждать; принуждать | to drive on; to urge; to impel | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A7%86%E3%82%8A%E7%AB%8B%E3%81%A6%E3%82%8B) |
| EX-01997 | 具体的 | gutaiteki | конкретный; определённый | concrete; specific | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%85%B7%E4%BD%93%E7%9A%84-483792) |
| EX-01998 | 具備 | gubi | наличие необходимых качеств; обладание | possession of the required qualities; being equipped with | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%85%B7%E5%82%99) |
| EX-01999 | 道具 | dōgu | инструмент; принадлежности; средство | a tool; equipment; a means | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%81%93%E5%85%B7) |
| EX-02000 | 危惧 | kigu | опасение; тревога | apprehension; misgivings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8D%B1%E6%83%A7) |
| EX-02001 | 愚問 | gumon | глупый вопрос | a foolish question | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%84%9A%E5%95%8F) |
| EX-02002 | 愚鈍 | gudon | тупость; несообразительность | stupidity; dull-wittedness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%84%9A%E9%88%8D) |
| EX-02003 | 暗愚 | angu | невежественность и глупость; неразумный | ignorance and folly; foolish | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9A%97%E6%84%9A) |
| EX-02004 | 愚かだ | oroka da | глуп; неразумен; нелеп | is foolish; is unwise; is absurd | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%84%9A%E3%81%8B-455551) |
| EX-02005 | 愚かしい | orokashii | глупый; нелепый; неразумный | foolish; absurd; unwise | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%84%9A%E3%81%8B%E3%81%97%E3%81%84-455552) |
| EX-02006 | 空想 | kūsō | воображение; фантазия; мечтание | imagination; fantasy; daydreaming | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E6%83%B3) |
| EX-02007 | 空港 | kūkō | аэропорт | an airport | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E6%B8%AF) |
| EX-02008 | 上空 | jōkū | воздушное пространство над чем-либо | the airspace above; the sky overhead | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8A%E7%A9%BA) |
| EX-02009 | 空 | sora | небо; воздушное пространство | the sky; the air | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA) |
| EX-02010 | 空色 | sorairo | небесно-голубой цвет | sky blue | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E8%89%B2) |
| EX-02011 | 青空 | aozora | голубое небо; ясное небо | a blue sky; a clear sky | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9D%92%E7%A9%BA) |
| EX-02012 | 空く | aku | освобождаться; становиться пустым; быть свободным | to become vacant; to empty; to become free | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E3%81%8F) |
| EX-02013 | 空き巣 | akisu | кража из пустого дома; домушник | burglary of an unoccupied house; a burglar | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E3%81%8D%E5%B7%A3) |
| EX-02014 | 空ける | akeru | освобождать; опустошать; оставлять свободным | to make room; to empty; to leave free | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E3%81%91%E3%82%8B) |
| EX-02015 | 空 | kara | пустота; пустой | emptiness; empty | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA) |
| EX-02016 | 空手 | karate | с пустыми руками; безоружность; карате | empty hands; being unarmed; karate | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%A9%BA%E6%89%8B-47195) |
| EX-02017 | 空手形 | karategata | необеспеченный вексель; пустое обещание | a worthless bill of exchange; an empty promise | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E6%89%8B%E5%BD%A2) |
| EX-02018 | 偶然 | gūzen | случайность; совпадение; случайно | chance; coincidence; by chance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%B6%E7%84%B6) |
| EX-02019 | 偶数 | gūsū | чётное число | an even number | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%81%B6%E6%95%B0) |
| EX-02020 | 配偶者 | haigūsha | супруг; супруга | a spouse | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%85%8D%E5%81%B6%E8%80%85) |
| EX-02021 | 境遇 | kyōgū | жизненные обстоятельства; положение | one's circumstances; one's situation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%83%E9%81%87) |
| EX-02022 | 待遇 | taigū | обращение; условия труда; приём | treatment; working conditions; reception | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%BE%85%E9%81%87) |
| EX-02023 | 遇する | gūsuru | обращаться с кем-либо; принимать | to treat; to receive | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%81%87%E3%81%99%E3%82%8B) |
| EX-02024 | 一隅 | ichigū | один угол; уголок | a corner; a nook | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%80%E9%9A%85) |
| EX-02025 | 隅 | sumi | угол; укромное место | a corner; a nook | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9A%85) |
| EX-02026 | 片隅 | katasumi | уголок; укромный угол | a corner; an out-of-the-way nook | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%89%87%E9%9A%85) |
| EX-02027 | 串刺し | kushizashi | нанизывание на вертел; пронзание насквозь | skewering; impalement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%B2%E5%88%BA%E3%81%97) |
| EX-02028 | 串焼き | kushiyaki | блюдо, жаренное на шпажке | food grilled on a skewer | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%B2%E7%84%BC%E3%81%8D) |
| EX-02029 | 屈辱 | kutsujoku | унижение; оскорбление | humiliation; disgrace | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B1%88%E8%BE%B1) |
| EX-02030 | 屈伸 | kusshin | сгибание и разгибание | bending and stretching | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B1%88%E4%BC%B8) |
| EX-02031 | 不屈 | fukutsu | стойкость; несгибаемость | fortitude; an indomitable spirit | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%8D%E5%B1%88) |
| EX-02032 | 理屈 | rikutsu | логика; довод; отговорка | logic; an argument; an excuse | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%90%86%E5%B1%88) |
| EX-02033 | 掘削 | kussaku | выемка грунта; рытьё; бурение | excavation; digging; drilling | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%98%E5%89%8A) |
| EX-02034 | 発掘 | hakkutsu | раскопки; обнаружение скрытого | excavation; discovery | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%99%BA%E6%8E%98) |
| EX-02035 | 採掘 | saikutsu | добыча полезных ископаемых | mining; extraction | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%A1%E6%8E%98) |
| EX-02036 | 掘る | horu | копать; выкапывать; рыть | to dig; to dig up; to excavate | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8E%98%E3%82%8B) |
| EX-02037 | 巣窟 | sōkutsu | логово; притон; рассадник | a den; a haunt; a hotbed | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%B7%A3%E7%AA%9F) |
| EX-02038 | 洞窟 | dōkutsu | пещера | a cave; a cavern | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B4%9E%E7%AA%9F) |
| EX-02039 | 熊 | kuma | медведь | a bear | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%86%8A) |
| EX-02040 | 繰る | kuru | наматывать; перебирать; перелистывать | to reel; to work through in order; to turn pages | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B9%B0%E3%82%8B) |
| EX-02041 | 繰り返す | kurikaesu | повторять; делать снова | to repeat; to do again | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%99) |
| EX-02042 | 君主 | kunshu | монарх; государь | a monarch; a sovereign | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%9B%E4%B8%BB) |
| EX-02043 | 君臨 | kunrin | царствование; господство | reigning; dominance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%9B%E8%87%A8) |
| EX-02044 | 諸君 | shokun | господа; друзья; вы все | ladies and gentlemen; you all | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AB%B8%E5%90%9B) |
| EX-02045 | 君 | kimi | ты; государь; господин | you; a lord; a sovereign | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%90%9B) |
| EX-02046 | 母君 | hahagimi | матушка; мать (почтительно) | mother (respectful) | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%AF%8D%E5%90%9B-604061) |
| EX-02047 | 訓練 | kunren | тренировка; обучение; выучка | training; drill | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A8%93%E7%B7%B4) |
| EX-02048 | 教訓 | kyōkun | поучение; урок; мораль | a lesson; a moral | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%95%99%E8%A8%93) |
| EX-02049 | 音訓 | onkun | онные и кунные чтения | on and kun readings | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%9F%B3%E8%A8%93) |
| EX-02050 | 勲功 | kunkō | выдающиеся заслуги; подвиг | distinguished service; a meritorious deed | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%B2%E5%8A%9F) |
| EX-02051 | 勲章 | kunshō | орден; награда | a decoration; an order | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8B%B2%E7%AB%A0) |
| EX-02052 | 殊勲 | shukun | особые заслуги; выдающееся достижение | distinguished service; an outstanding achievement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AE%8A%E5%8B%B2) |
| EX-02053 | 薫風 | kunpū | благоуханный ветерок раннего лета | a balmy early-summer breeze | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%96%AB%E9%A2%A8) |
| EX-02054 | 薫陶 | kuntō | воспитание; благотворное наставничество | education; formative guidance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%96%AB%E9%99%B6) |
| EX-02055 | 薫る | kaoru | благоухать; источать аромат | to be fragrant; to give off a pleasant scent | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%96%AB%E3%82%8B-2020160) |
| EX-02056 | 薫り | kaori | аромат; благоухание | a fragrance; a pleasant scent | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E8%96%AB%E3%82%8A-3137097) |
| EX-02057 | 軍隊 | guntai | вооружённые силы; войско | armed forces; troops | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%8D%E9%9A%8A) |
| EX-02058 | 軍備 | gunbi | вооружение; военная готовность | armaments; military preparedness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BB%8D%E5%82%99) |
| EX-02059 | 空軍 | kūgun | военно-воздушные силы | an air force | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%BA%E8%BB%8D) |
| EX-02060 | 郡部 | gunbu | территории уездов; сельские районы | county areas; rural districts | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%83%A1%E9%83%A8-487892) |
| EX-02062 | 群居 | gunkyo | обитание группами; жизнь стаями | gregarious living; living in groups | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%BE%A4%E5%B1%85) |
| EX-02063 | 大群 | taigun | большая стая; стадо; скопление | a large flock; a herd; a swarm | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A4%A7%E7%BE%A4) |
| EX-02064 | 抜群 | batsugun | выдающийся; непревзойдённый | outstanding; unrivalled | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8A%9C%E7%BE%A4) |
| EX-02065 | 群れる | mureru | собираться группами; держаться стаей | to gather in groups; to flock together | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%BE%A4%E3%82%8C%E3%82%8B-642595) |
| EX-02066 | 群れ | mure | стая; стадо; группа; толпа | a flock; a herd; a group; a crowd | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%BE%A4%E3%82%8C) |
| EX-02067 | 群すずめ | murasuzume | стайка воробьёв | a flock of sparrows | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%BE%A4%E9%9B%80-642462) |
| EX-02068 | 群千鳥 | murachidori | стая ржанок; узор из летящих птиц | a flock of plovers; a pattern of flying plovers | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%BE%A4%E5%8D%83%E9%B3%A5-642480) |
| EX-02069 | 群がる | muragaru | толпиться; собираться стаей; роиться | to crowd; to flock; to swarm | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E7%BE%A4%E3%81%8C%E3%82%8B-642393) |

## Проверки

- `scripts/test_import.py`: 7 тестов, включая полное сохранение прежних 1967 переводов, ID/написания/ромадзи, отдельные sora/kara, принятую форму 愚かだ, неизменный шаблон и детерминированную пересборку.
- `scripts/test_translations.cjs`: 24 карточки / 99 записей, RU и EN, Grid и Single, ширины 1440, 390 и 320 px. Проверены все 98 переводов, пояснения, порядок, раскрытие, отсутствие выдуманного чтения/перевода у шаблона и горизонтального переполнения.
- `scripts/test_cards.cjs`: поиск, навигация, раскрытие и восстановление после ошибки.
- `scripts/test_on_drill.cjs` и `scripts/test_kun_drill.cjs`: оба языка и три ширины; видимые наборы остаются **769 ON и 451 KUN**.
- `scripts/test_on_source.py` и `scripts/test_kun_source.py`: сверка по неизменному источнику `OnKun_Translations_1-300_2026-10-23 upd hide readings(2).xlsx`; сохранены 1299 исходных строк, 1297 переводов и 20 скрытий диапазона 1–300. Упражнения не расширялись.
- Excel: точное совпадение 98 новых переводов на каждом листе с общими данными; 10 листов, все скрытия, прежние данные и оформление, полная строка шаблона сохранены. Исходный файл не изменён.

Браузер: Chrome for Testing 151.0.7922.34 через Playwright. Мобильные размеры — эмуляция; физический телефон не использовался. Визуально просмотрены карточки на широком и мобильном экране, сетка и изменённые диапазоны обоих листов Excel. Noto Serif CJK JP используется локально только для проверки, файлы шрифтов сайта не меняются.

Main, README, опубликованный сайт, HTML/CSS/JS карточек, код, наборы и пометки видимости упражнений ON/KUN не изменены.
