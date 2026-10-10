
(() => {
 const root=document.getElementById('on-drill');
 const words = [["哀れむ", "awaremu", "жалеть; сострадать", "to pity; to feel compassion"], ["悪い", "warui", "плохой", "bad"], ["お握り", "onigiri", "онигири; рисовый шарик", "onigiri; a rice ball"], ["取り扱う", "toriatsukau", "обращаться с; иметь дело с", "to handle; to deal with"], ["客扱い", "kyakuatsukai", "обращение с гостями", "treatment of guests"], ["宛てる", "ateru", "адресовать, например письмо", "to address, e.g. a letter"], ["宛先", "atesaki", "адрес получателя; адресат", "recipient’s address; addressee"], ["嵐", "arashi", "буря; шторм", "storm; tempest"], ["砂嵐", "sunaarashi", "песчаная буря", "sandstorm"], ["安い", "yasui", "дешёвый; недорогой", "cheap; inexpensive"]];
 const $=id=>root.querySelector('#od-'+id);
 const copy={ru:{title:'Кунные чтения',subtitle:'Примеры из карточек № 1–12',word:'Слово',of:'из',instruction:'Напиши на бумаге',compare:'Сравни со своей записью',show:'Показать ответ',next:'Следующее слово →',finish:'Завершить',back:'← Предыдущее слово',done:'Повторение завершено',doneText:'Все 10 примеров пройдены.',again:'Повторить ещё раз',progress:'Текущее слово'},en:{title:'KUN readings',subtitle:'Examples from cards No. 1–12',word:'Word',of:'of',instruction:'Write it on paper',compare:'Compare with your handwriting',show:'Show answer',next:'Next word →',finish:'Finish',back:'← Previous word',done:'Review complete',doneText:'You have reviewed all 10 examples.',again:'Review again',progress:'Current word'}};
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
