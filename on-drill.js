
(() => {
 const root=document.getElementById('on-drill');
 const words = [["亜鉛","aen","цинк","zinc"],["亜麻","ama","лён","flax"],["亜流","aryū","последователь; подражатель; подражание","follower; imitator; imitation"],["亜熱帯","anettai","субтропики","subtropics"],["亜寒帯","akantai","субарктический пояс","subarctic zone"],["亜米利加","amerika","Америка; США","America; the United States","старое написание, атэдзи","historical spelling, ateji"],["露西亜","roshia","Россия","Russia","традиционное написание, атэдзи","traditional spelling, ateji"],["東亜","tōa","Восточная Азия","East Asia"],["哀愁","aishū","грусть; меланхолия","sadness; melancholy"],["哀話","aiwa","печальная история","a sad story"],["哀憐","airen","жалость; сострадание","pity; compassion"],["哀願","aigan","мольба; горячая просьба","pleading; an earnest appeal"],["可哀想","kawaisō","бедный; несчастный","pitiful; unfortunate","особое чтение слова","irregular word reading"],["悲哀","hiai","горе; печаль","sorrow; grief"],["哀れむ","awaremu","жалеть; сострадать","to pity; to feel compassion"],["挨拶","aisatsu","приветствие","greeting"],["愛情","aijō","любовь; нежность","love; affection"],["愛読","aidoku","чтение с удовольствием","reading with pleasure"],["恋愛","ren’ai","романтическая любовь","romantic love"],["愛媛県","ehime-ken","префектура Эхимэ","Ehime Prefecture","особое чтение названия 愛媛","irregular reading of 愛媛"],["曖昧","aimai","неясный; двусмысленный","vague; ambiguous"],["悪事","akuji","злодеяние; дурной поступок","wrongdoing; an evil deed"],["悪い","warui","плохой","bad"],["悪寒","okan","озноб","chills"],["握手","akushu","рукопожатие","handshake"],["把握","haaku","понимание; схватывание сути","grasp; understanding"],["握力","akuryoku","сила хвата","grip strength"],["掌握","shōaku","овладение; контроль","command; control"],["お握り","onigiri","онигири; рисовый шарик","onigiri; a rice ball"],["圧力","atsuryoku","давление","pressure"],["圧迫","appaku","сдавливание; давление","compression; pressure"],["気圧","kiatsu","атмосферное давление","atmospheric pressure"],["血圧","ketsuatsu","кровяное давление","blood pressure"],["圧倒的","attōteki","подавляющий; ошеломляющий","overwhelming"],["取り扱う","toriatsukau","обращаться с; иметь дело с","to handle; to deal with"],["客扱い","kyakuatsukai","обращение с гостями","treatment of guests"],["宛てる","ateru","адресовать, например письмо","to address, e.g. a letter"],["宛先","atesaki","адрес получателя; адресат","recipient’s address; addressee"],["嵐","arashi","буря; шторм","storm; tempest"],["砂嵐","sunaarashi","песчаная буря","sandstorm"],["安全","anzen","безопасность; безопасный","safety; safe"],["安価","anka","недорогой; низкая цена","inexpensive; a low price"],["不安","fuan","тревога; беспокойство","anxiety; unease"],["安い","yasui","дешёвый; недорогой","cheap; inexpensive"]];
 const $=id=>root.querySelector('#od-'+id);
 const copy={ru:{title:'Онные чтения',subtitle:'Примеры из карточек № 1–12',word:'Слово',of:'из',instruction:'Напиши на бумаге',compare:'Сравни со своей записью',show:'Показать ответ',next:'Следующее слово →',finish:'Завершить',back:'← Предыдущее слово',done:'Повторение завершено',doneText:'Все 44 примера пройдены.',again:'Повторить ещё раз',progress:'Текущее слово'},en:{title:'ON readings',subtitle:'Examples from cards No. 1–12',word:'Word',of:'of',instruction:'Write it on paper',compare:'Compare with your handwriting',show:'Show answer',next:'Next word →',finish:'Finish',back:'← Previous word',done:'Review complete',doneText:'You have reviewed all 44 examples.',again:'Review again',progress:'Current word'}};
 let language=document.documentElement.lang==='ru'?'ru':'en', index=0, revealed=false, finished=false;
 function render(){
  const t=copy[language],w=words[index];root.lang=language;
  $('title').textContent=t.title;$('subtitle').textContent=t.subtitle;
  $('counter').textContent=finished?t.done:`${t.word} ${index+1} ${t.of} ${words.length}`;
  $('progress').value=index+1;$('progress').setAttribute('aria-label',t.progress);
  $('question').hidden=finished;$('finished').hidden=!finished;
  $('instruction').textContent=t.instruction;$('reading').textContent=w[1];$('meaning').textContent=w[language==='ru'?2:3];
  $('answer').hidden=!revealed;$('answer-label').textContent=t.compare;
  $('kanji').textContent=revealed?w[0]:'';$('note').textContent=revealed?(w[language==='ru'?4:5]||''):'';
  $('action').textContent=finished?t.again:!revealed?t.show:index===words.length-1?t.finish:t.next;
  $('action').setAttribute('aria-expanded',String(revealed));
  $('back').textContent=t.back;$('back').disabled=index===0;$('back').hidden=finished;
  $('finish-title').textContent=t.done;$('finish-text').textContent=t.doneText;
  root.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
  $('live').textContent=finished?t.done:revealed?w[0]:`${t.word} ${index+1}: ${w[1]}`;
 }
 $('action').addEventListener('click',()=>{
  if(finished){index=0;finished=false;revealed=false;}
  else if(!revealed){revealed=true;}
  else if(index===words.length-1){finished=true;}
  else{index++;revealed=false;}
  render();
 });
 $('back').addEventListener('click',()=>{if(index>0){index--;revealed=false;render();}});
 root.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.lang;render();}));
 document.addEventListener('onkun-language-change',event=>{language=event.detail;render();});
 render();
})();
