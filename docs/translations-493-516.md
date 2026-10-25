# Переводы карточек № 493–516

Дата: 25.10.2026. Ветка: `feature/excel-12-card-preview`. База: `36c21ca0bcfe1c33c65fba11cf9eb018f318a585`.

Добавлены **99 пар RU/EN** для 24 карточек от 憬 до 見: EX-02183–EX-02281. Всего **2277 переведённых примеров** для карточек № 1–516. Новых шаблонов с ○ и неподтверждённых чтений нет.

## Словари и редакторские решения

Использованы 小学館 プログレッシブ和英中辞典(第4版), デジタル大辞泉 и 精選版 日本国語大辞典 через Kotobank. RU/EN — редакторские эквиваленты основных значений, не исчерпывающий перевод словарных статей.

- 憧憬 / shōkei сохранено: 大辞泉 прямо подтверждает しょうけい наряду с привычным どうけい. Автоматической замены чтения нет.
- 激しさ / hageshisa остаётся самостоятельной номинальной формой с исходным статусом СОСТАВ / ФОРМА; сама форма и её значения явно перечислены в статье 激しい.
- 墓穴 / boketsu, 鼻血 / hanaji и 元結 / motoyui сохранены без изменения чтений. 元結 — традиционный шнур для волос.
- 劇薬 передаёт сильнодействующее лекарственное средство и переносную радикальную меру. 隙間 включает физическую щель и переносную лазейку. 早撃ち различает быстрый выстрел и ранний удар в бейсболе.
- 欠ける и 欠く, 決める и 決まる сохраняют различие форм. У 結び оставлены узел, завершение и рисовый шарик; 見える различает видимость, впечатление и почтительное обозначение прихода.
- 10 повторяющихся слов сохраняют прежние тексты и пояснения: 滑稽, 休憩, 警戒, 歓迎, 血液, 決意, 解決, 九月, 意見, 下見. Каждая новая строка имеет собственный ID.

49 новых записей имеют внутреннюю пометку sense-selection; всего таких пометок 873. Это выбор значения по контексту при принятом чтении. [Список](translations-493-516-review.md).

## Сохранность

Все 2178 предыдущих записей JSON сохранены полностью. SHA-256 нормализованного предыдущего набора: `122bd19ecf6ef21f4a9b59b9716f5dba314decf5f42dc7e74b29bbc71794fdcb`.

В Excel обновлены только I/J и V:X основного листа, J/K и W:Y листа `OnKun Examples hide readings `, строки 2184–2282, и высоты этих строк. Ячейки подготовлены Artifact Tool и перенесены в исходный OOXML-пакет с существующим оформлением переведённых ячеек. Все прочие части XLSX побайтно сохранены. Проверены значения, типы, стили, комментарии и ссылки всех 687351 ячейки вне разрешённой области. Сохранены 10 листов, 2136 иероглифов, 9555 примеров, японские данные, ромадзи, ID, порядок, формулы, таблицы, фильтры и 20 пометок YES. Новые общие поля на обоих листах согласованы.

Импорт использует прежний исходник репозитория `sources/OnKun_Romaji_Reviewed.xlsx` и отдельный слой переводов. Из данных карточек изменена только часть 010 и статистика манифеста. Разделы упражнений, интерфейс и main не изменялись.

## Проверки

- `python scripts/test_import.py`: все 7 тестов пройдены, включая сохранность прежних переводов и детерминированность импорта.
- `node --check cards.js` и `git diff --check`: пройдены.
- Excel: 2277 пар сверены с данными карточек; оба листа примеров согласованы; нет перезаписи прежних значений. Подготовленные области RU/EN обоих листов просмотрены визуально.
- Ограничение: Chromium в среде отсутствует; браузерный тест One card/Grid на трёх размерах экрана не выполнен. В предыдущей партии загрузка браузера не удалась, повторная загрузка здесь не запускалась. Физические устройства и Excel непосредственно не запускались.

## Переводы и источники

| ID | Пример | Ромадзи | RU | EN | Источник |
| --- | --- | --- | --- | --- | --- |
| EX-02183 | 憧憬 | shōkei | восхищённое стремление; мечта о чём-либо | longing; aspiration; admiration | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%86%A7%E6%86%AC-531258) |
| EX-02184 | 稽古 | keiko | занятия; тренировка; репетиция | practice; training; rehearsal | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A8%BD%E5%8F%A4) |
| EX-02185 | 滑稽 | kokkei | смешной; комичный; нелепый | funny; comical; ridiculous | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%BB%91%E7%A8%BD-65263) |
| EX-02186 | 休憩 | kyūkei | перерыв; отдых | rest; break | [デジタル大辞泉](https://kotobank.jp/word/%E4%BC%91%E6%86%A9-476761) |
| EX-02187 | 憩い | ikoi | отдых; покой | rest; relaxation | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%86%A9%E3%81%84) |
| EX-02188 | 憩う | ikou | отдыхать; передыхать | to rest; to take a break | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%86%A9%E3%81%86) |
| EX-02189 | 警告 | keikoku | предупреждение; предостережение | a warning; a caution | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AD%A6%E5%91%8A) |
| EX-02190 | 警戒 | keikai | бдительность; настороженность | vigilance; being on guard | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%AD%A6%E6%88%92-488209) |
| EX-02191 | 警察 | keisatsu | полиция; полицейский участок | the police; a police station | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%AD%A6%E5%AF%9F) |
| EX-02192 | 鶏卵 | keiran | куриное яйцо | a hen's egg | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%B6%8F%E5%8D%B5) |
| EX-02193 | 鶏舎 | keisha | курятник | a henhouse; a chicken coop | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%B6%8F%E8%88%8E) |
| EX-02194 | 養鶏 | yōkei | разведение кур | chicken farming; poultry keeping | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A4%8A%E9%B6%8F) |
| EX-02195 | 鶏 | niwatori | курица; петух | a chicken; a domestic fowl | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%B6%8F) |
| EX-02196 | 芸術 | geijutsu | искусство | art; the arts | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8A%B8%E8%A1%93) |
| EX-02197 | 芸能 | geinō | исполнительские искусства; индустрия развлечений | performing arts; entertainment | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%8A%B8%E8%83%BD) |
| EX-02198 | 文芸 | bungei | литература и искусство; литература | literature and the arts; literature | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%96%87%E8%8A%B8) |
| EX-02199 | 迎合 | geigō | угодничество; подлаживание под чужие вкусы | pandering; catering to others' wishes | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%8E%E5%90%88) |
| EX-02200 | 歓迎 | kangei | радушный приём; приветствие | welcome; warm reception | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E6%AD%93%E8%BF%8E-469598) |
| EX-02201 | 送迎 | sōgei | встреча и проводы; доставка туда и обратно | meeting and seeing off; transport to and from | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%80%81%E8%BF%8E) |
| EX-02202 | 迎える | mukaeru | встречать; принимать; доживать до | to meet; to welcome; to reach a time or age | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%BF%8E%E3%81%88%E3%82%8B) |
| EX-02203 | 出迎え | demukae | встреча прибывшего; выход навстречу | going to meet an arrival; a welcome | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%87%BA%E8%BF%8E%E3%81%88) |
| EX-02204 | 鯨油 | geiyu | китовый жир | whale oil | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%AF%A8%E6%B2%B9) |
| EX-02205 | 捕鯨 | hogei | китобойный промысел | whaling; whale hunting | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%8D%95%E9%AF%A8) |
| EX-02206 | 鯨 | kujira | кит | a whale | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%AF%A8) |
| EX-02207 | 間隙 | kangeki | зазор; разлад; уязвимое место | a gap; a rift; an unguarded opening | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%96%93%E9%9A%99) |
| EX-02208 | 隙間 | sukima | щель; промежуток; лазейка | a narrow gap; an interval; a loophole | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E9%9A%99%E9%96%93-541099) |
| EX-02209 | 劇薬 | gekiyaku | сильнодействующее средство; радикальная мера | a potent drug; a drastic measure | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%8A%87%E8%96%AC-59320) |
| EX-02210 | 劇場 | gekijō | театр; театральное здание | a theatre; a playhouse | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8A%87%E5%A0%B4) |
| EX-02211 | 演劇 | engeki | театральное искусство; пьеса | drama; theatre; a play | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BC%94%E5%8A%87) |
| EX-02212 | 撃退 | gekitai | отражение атаки; отпор | repelling; driving off; rejection | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%92%83%E9%80%80) |
| EX-02213 | 攻撃 | kōgeki | нападение; атака; резкая критика | an attack; an offensive; criticism | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%94%BB%E6%92%83) |
| EX-02214 | 打撃 | dageki | удар; ущерб; игра битой | a blow; damage; batting | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%89%93%E6%92%83) |
| EX-02215 | 撃つ | utsu | стрелять; атаковать | to shoot; to fire; to attack | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%92%83%E3%81%A4) |
| EX-02216 | 早撃ち | hayauchi | быстрая стрельба; ранний удар в бейсболе | a quick shot; hitting early in the count | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%97%A9%E6%92%83%E3%81%A1) |
| EX-02217 | 激動 | gekidō | сильное потрясение; бурные перемены | a violent shock; upheaval; turbulence | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BF%80%E5%8B%95) |
| EX-02218 | 感激 | kangeki | глубокое волнение; сильное впечатление | deep emotion; being deeply moved | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%84%9F%E6%BF%80) |
| EX-02219 | 激する | gekisuru | возбуждаться; приходить в ярость; ударяться с силой | to become excited; to be enraged; to dash against | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BF%80%E3%81%99%E3%82%8B) |
| EX-02220 | 激しい | hageshii | сильный; бурный; интенсивный | violent; severe; intense | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BF%80%E3%81%97%E3%81%84) |
| EX-02221 | 激しさ | hageshisa | интенсивность; сила; неистовство | intensity; severity; violence | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BF%80%E3%81%97%E3%81%84) |
| EX-02222 | 桁違い | ketachigai | разница на порядок; несопоставимое различие | a difference in digits; an enormous difference | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%A1%81%E9%81%95%E3%81%84) |
| EX-02223 | 橋桁 | hashigeta | балка моста | a bridge girder | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%A9%8B%E6%A1%81-601009) |
| EX-02224 | 欠乏 | ketsubō | нехватка; недостаток | shortage; deficiency | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AC%A0%E4%B9%8F) |
| EX-02225 | 欠席 | kesseki | отсутствие; неявка | absence; non-attendance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AC%A0%E5%B8%AD) |
| EX-02226 | 補欠 | hoketsu | восполнение вакансии; запасной участник | filling a vacancy; a substitute | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A3%9C%E6%AC%A0) |
| EX-02227 | 欠ける | kakeru | откалываться; недоставать; убывать | to chip; to be missing; to wane | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AC%A0%E3%81%91%E3%82%8B) |
| EX-02228 | 欠く | kaku | испытывать недостаток; откалывать | to lack; to chip | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AC%A0%E3%81%8F) |
| EX-02229 | 穴居 | kekkyo | жизнь в пещере; пещерное жильё | cave dwelling; living in a cave | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%B4%E5%B1%85) |
| EX-02230 | 墓穴 | boketsu | могильная яма | a grave; a burial pit | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%A2%93%E7%A9%B4) |
| EX-02231 | 穴 | ana | дыра; яма; пробел; уязвимость | a hole; a pit; a gap; a weakness | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%A9%B4) |
| EX-02232 | 血液 | ketsueki | кровь | blood | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A1%80%E6%B6%B2-59518) |
| EX-02233 | 血統 | kettō | родословная; происхождение | lineage; descent; a bloodline | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A1%80%E7%B5%B1) |
| EX-02234 | 鮮血 | senketsu | свежая кровь | fresh blood | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%AE%AE%E8%A1%80) |
| EX-02235 | 血 | chi | кровь; кровное родство | blood; blood relationship | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A1%80) |
| EX-02236 | 鼻血 | hanaji | носовое кровотечение | a nosebleed | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%BC%BB%E8%A1%80) |
| EX-02237 | 決裂 | ketsuretsu | разрыв; срыв переговоров | a breakdown; a rupture | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B1%BA%E8%A3%82) |
| EX-02238 | 決意 | ketsui | решимость; твёрдое решение | determination; resolve | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%B1%BA%E6%84%8F-490307) |
| EX-02239 | 解決 | kaiketsu | решение; разрешение проблемы | a solution; resolution of a problem | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E8%A7%A3%E6%B1%BA-457135) |
| EX-02240 | 決める | kimeru | решать; устанавливать; определять | to decide; to settle; to fix | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B1%BA%E3%82%81%E3%82%8B) |
| EX-02241 | 取り決め | torikime | договорённость; соглашение | an arrangement; an agreement | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%8F%96%E3%82%8A%E6%B1%BA%E3%82%81) |
| EX-02242 | 決まる | kimaru | решаться; определяться; удаваться | to be decided; to be fixed; to come off successfully | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B1%BA%E3%81%BE%E3%82%8B) |
| EX-02243 | 決まり | kimari | правило; решение; привычный порядок | a rule; a settlement; a custom | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B1%BA%E3%81%BE%E3%82%8A) |
| EX-02244 | 結論 | ketsuron | вывод; заключение | a conclusion | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E8%AB%96) |
| EX-02245 | 結婚 | kekkon | брак; вступление в брак | marriage; getting married | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E5%A9%9A) |
| EX-02246 | 連結 | renketsu | соединение; сцепление | connection; coupling | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%80%A3%E7%B5%90) |
| EX-02247 | 結ぶ | musubu | завязывать; соединять; заключать | to tie; to connect; to conclude | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E3%81%B6) |
| EX-02248 | 結び | musubi | узел; завершение; рисовый шарик | a knot; a conclusion; a rice ball | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E3%81%B3) |
| EX-02249 | 結う | yū | завязывать; укладывать волосы | to tie; to dress the hair | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E3%81%86) |
| EX-02250 | 元結 | motoyui | шнур для перевязывания волос | a cord for tying up the hair | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E5%85%83%E7%B5%90-60407) |
| EX-02251 | 結わえる | yuwaeru | связывать; привязывать; закреплять | to bind; to tie; to fasten | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B5%90%E3%82%8F%E3%81%88%E3%82%8B) |
| EX-02252 | 傑物 | ketsubutsu | выдающийся человек | a distinguished person | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%91%E7%89%A9) |
| EX-02253 | 傑作 | kessaku | шедевр; нечто комичное | a masterpiece; something hilarious | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E5%82%91%E4%BD%9C) |
| EX-02254 | 豪傑 | gōketsu | герой; смельчак | a hero; a daring person | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%B1%AA%E5%82%91) |
| EX-02255 | 潔白 | keppaku | невиновность; незапятнанность | innocence; integrity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BD%94%E7%99%BD) |
| EX-02256 | 清潔 | seiketsu | чистота; порядочность | cleanliness; integrity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%B8%85%E6%BD%94) |
| EX-02257 | 純潔 | junketsu | чистота; целомудрие | purity; chastity | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%B4%94%E6%BD%94) |
| EX-02258 | 潔い | isagiyoi | честный; благородный; достойный | frank; honourable; gracious | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%BD%94%E3%81%84) |
| EX-02259 | 月曜 | getsuyō | понедельник | Monday | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%9C%88%E6%9B%9C-490773) |
| EX-02260 | 明月 | meigetsu | ясная, яркая луна | a bright, clear moon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%98%8E%E6%9C%88) |
| EX-02261 | 歳月 | saigetsu | годы и месяцы; время | years and months; time | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AD%B3%E6%9C%88) |
| EX-02262 | 正月 | shōgatsu | Новый год; новогодние дни; январь | the New Year; the New Year season; January | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%AD%A3%E6%9C%88) |
| EX-02263 | 九月 | kugatsu | сентябрь | September | [デジタル大辞泉](https://kotobank.jp/word/%E4%B9%9D%E6%9C%88-482778) |
| EX-02264 | 月 | tsuki | луна; месяц | the moon; a month | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%88) |
| EX-02265 | 月見 | tsukimi | любование луной | moon viewing | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9C%88%E8%A6%8B) |
| EX-02266 | 三日月 | mikazuki | серп луны; молодая луна | a crescent moon; a young moon | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%B8%89%E6%97%A5%E6%9C%88) |
| EX-02267 | 犬歯 | kenshi | клык | a canine tooth | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8A%AC%E6%AD%AF) |
| EX-02268 | 愛犬 | aiken | любимая собака | one's pet dog | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%84%9B%E7%8A%AC) |
| EX-02269 | 野犬 | yaken | бродячая собака | a stray dog | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%87%8E%E7%8A%AC) |
| EX-02270 | 犬 | inu | собака; шпион (перен.) | a dog; a spy (figurative) | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E7%8A%AC) |
| EX-02271 | 件数 | kensū | число случаев; количество дел | the number of cases; an item count | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BB%B6%E6%95%B0) |
| EX-02272 | 事件 | jiken | событие; происшествие; дело | an event; an incident; a case | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E4%BA%8B%E4%BB%B6) |
| EX-02273 | 条件 | jōken | условие; требование; условия соглашения | a condition; a requirement; terms | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E6%9D%A1%E4%BB%B6) |
| EX-02274 | 見学 | kengaku | учебное посещение; наблюдение без участия | a study visit; observing without taking part | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E5%AD%A6) |
| EX-02275 | 見地 | kenchi | точка зрения; позиция | a viewpoint; a standpoint | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E5%9C%B0) |
| EX-02276 | 意見 | iken | мнение; увещевание | opinion; admonition | [小学館 デジタル大辞泉 / 精選版 日本国語大辞典](https://kotobank.jp/word/%E6%84%8F%E8%A6%8B-30325) |
| EX-02277 | 見る | miru | смотреть; видеть; рассматривать | to look; to see; to examine | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E3%82%8B) |
| EX-02278 | 下見 | shitami | предварительный осмотр; предварительное чтение; обшивка внахлёст | a preliminary inspection; a preliminary reading; weatherboarding | [小学館 デジタル大辞泉](https://kotobank.jp/word/%E4%B8%8B%E8%A6%8B-520620) |
| EX-02279 | 見える | mieru | быть видимым; казаться; приходить (почт.) | to be visible; to seem; to come (honorific) | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E3%81%88%E3%82%8B) |
| EX-02280 | 見せる | miseru | показывать; выставлять; давать осмотреть | to show; to display; to have examined | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E8%A6%8B%E3%81%9B%E3%82%8B) |
| EX-02281 | 顔見せ | kaomise | первое появление; представление публике | a debut; a public appearance | [小学館 プログレッシブ和英中辞典(第4版)](https://kotobank.jp/jeword/%E9%A1%94%E8%A6%8B%E3%81%9B) |

## Файлы

Исходный Excel: `OnKun_Translations_1-492_2026-10-25_hide_readings.xlsx`, SHA-256 `4b3249f5ba1e29a47dbb9231d3104a81059c528e0140b2eb189031831b7e6860`.

Результат: `OnKun_Translations_1-516_2026-10-25_hide_readings.xlsx`, SHA-256 `0b5c21995f84828369741e192df12d34d05fa4eaf1ed74afa2f000e90fe0c44a`.
