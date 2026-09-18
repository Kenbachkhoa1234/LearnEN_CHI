'use strict';

const COURSES = {
  en: {
    id:'en', name:'English B2–C1', flag:'🇬🇧', icon:'⚡', color:'#5b6ee1',
    desc:'Workplace English, IT & cybersecurity, collocations, paraphrasing and real conversation.',
    units:[
      {
        title:'Workplace Communication', subtitle:'Speak clearly and naturally at work', icon:'💼',
        lessons:[
          {title:'Give an update', tag:'Speaking', phrases:[
            p('Here’s a quick update on where we are.','Đây là cập nhật nhanh về tiến độ hiện tại.','Dùng khi mở đầu phần báo cáo ngắn trong họp.','Let me bring you up to speed.'),
            p('We’re on track to finish by Friday.','Chúng ta vẫn đúng tiến độ để hoàn thành trước thứ Sáu.','Dùng khi xác nhận tiến độ dự án.','Everything is moving according to plan.'),
            p('We’ve run into a minor issue.','Chúng ta vừa gặp một vấn đề nhỏ.','Dùng khi báo cáo sự cố nhưng không muốn làm quá nghiêm trọng.','We’ve hit a small snag.'),
            p('I’ll keep you posted.','Tôi sẽ tiếp tục cập nhật cho bạn.','Dùng khi tình hình chưa kết thúc.','I’ll let you know as soon as anything changes.'),
            p('Could we circle back to this later?','Mình quay lại vấn đề này sau được không?','Dùng để hoãn một chủ đề trong cuộc họp.','Can we revisit this later?')
          ]},
          {title:'Clarify & confirm', tag:'Conversation', phrases:[
            p('Just to make sure I understood correctly…','Để chắc là tôi hiểu đúng…','Dùng trước khi diễn đạt lại ý người khác.','If I understood you correctly…'),
            p('Could you walk me through that?','Bạn có thể giải thích từng bước cho tôi không?','Dùng khi cần người khác giải thích quy trình.','Could you take me through it step by step?'),
            p('What do you mean by that exactly?','Ý chính xác của bạn là gì?','Dùng khi một ý còn mơ hồ.','Could you clarify what you mean?'),
            p('That makes sense.','Nghe hợp lý / Tôi hiểu rồi.','Dùng để xác nhận bạn đã hiểu.','Got it. That clears things up.'),
            p('Are we all on the same page?','Mọi người đã cùng hiểu một ý chưa?','Dùng để kiểm tra sự thống nhất.','Does everyone agree on the next step?')
          ]},
          {title:'Professional disagreement', tag:'B2+', phrases:[
            p('I see your point, but I look at it slightly differently.','Tôi hiểu ý bạn, nhưng tôi nhìn vấn đề hơi khác.','Phản biện lịch sự.','I understand where you’re coming from, but…'),
            p('I’m not entirely convinced that’s the best approach.','Tôi chưa hoàn toàn bị thuyết phục rằng đó là cách tốt nhất.','Dùng khi không đồng ý nhưng muốn giữ giọng chuyên nghiệp.','I have some reservations about that approach.'),
            p('That could work, although we should consider the risks.','Cách đó có thể hiệu quả, nhưng ta nên cân nhắc rủi ro.','Dùng để phản hồi cân bằng.','It’s a valid option, provided we address the risks.'),
            p('Would it make more sense to…?','Liệu có hợp lý hơn nếu…?','Đưa ra phương án khác nhẹ nhàng.','What if we tried… instead?'),
            p('Let’s weigh the pros and cons first.','Hãy cân nhắc ưu nhược điểm trước.','Khi cần tránh quyết định vội.','Let’s look at the trade-offs first.')
          ]}
        ]
      },
      {
        title:'IT & Cybersecurity English', subtitle:'Explain technical work like a professional', icon:'🛡️',
        lessons:[
          {title:'Incident update', tag:'SOC', phrases:[
            p('We detected multiple failed login attempts from the same IP address.','Chúng tôi phát hiện nhiều lần đăng nhập thất bại từ cùng một địa chỉ IP.','Dùng khi mô tả alert hoặc incident.','The same IP generated repeated authentication failures.'),
            p('The activity appears suspicious, but we need more evidence.','Hoạt động có vẻ đáng ngờ nhưng cần thêm bằng chứng.','Dùng để tránh kết luận quá sớm.','It looks suspicious, although further investigation is required.'),
            p('I checked the logs and found no sign of lateral movement.','Tôi đã kiểm tra log và chưa thấy dấu hiệu di chuyển ngang.','Dùng khi báo cáo kết quả điều tra.','The logs show no evidence of lateral movement.'),
            p('We’ve isolated the affected endpoint.','Chúng tôi đã cô lập máy bị ảnh hưởng.','Dùng trong incident response.','The impacted host has been isolated from the network.'),
            p('I’ll escalate this to the Tier 2 analyst.','Tôi sẽ chuyển vụ việc này lên analyst Tier 2.','Dùng khi cần escalation.','I’m escalating this case for further analysis.')
          ]},
          {title:'Explain a technical issue', tag:'IT', phrases:[
            p('The service is up, but it isn’t reachable externally.','Dịch vụ đang chạy nhưng không thể truy cập từ bên ngoài.','Mô tả lỗi network/service.','The application is running, but external access is failing.'),
            p('The issue seems to be related to DNS resolution.','Vấn đề có vẻ liên quan đến phân giải DNS.','Nêu giả thuyết kỹ thuật có dè dặt.','DNS resolution appears to be the likely cause.'),
            p('I was able to reproduce the issue.','Tôi đã tái hiện được lỗi.','Khi xác nhận bug có thể tái tạo.','I managed to reproduce the problem on my end.'),
            p('The workaround is temporary, not a permanent fix.','Giải pháp này chỉ tạm thời, không phải bản sửa lâu dài.','Phân biệt workaround và fix.','This is only a temporary workaround.'),
            p('We should identify the root cause before making changes.','Ta nên xác định nguyên nhân gốc trước khi thay đổi.','Dùng khi troubleshooting.','Let’s find the root cause before we change anything.')
          ]},
          {title:'Present your project', tag:'Presentation', phrases:[
            p('The main objective of this project is to…','Mục tiêu chính của dự án này là…','Mở đầu phần trình bày mục tiêu.','This project aims to…'),
            p('Our approach consists of three main stages.','Phương pháp của nhóm gồm ba giai đoạn chính.','Giới thiệu quy trình.','We divided the process into three main stages.'),
            p('One key challenge we faced was…','Một thách thức chính mà nhóm gặp phải là…','Dùng trong thuyết trình đồ án.','One of the biggest challenges was…'),
            p('The results suggest that…','Kết quả cho thấy rằng…','Trình bày kết quả cẩn trọng.','Based on the results, we can see that…'),
            p('To sum up, the system meets the core requirements.','Tóm lại, hệ thống đáp ứng các yêu cầu cốt lõi.','Kết luận presentation.','Overall, the system satisfies the main requirements.')
          ]}
        ]
      },
      {
        title:'Natural English Upgrade', subtitle:'Move from “correct” English to natural B2–C1 English', icon:'🚀',
        lessons:[
          {title:'Stop translating word by word', tag:'Naturalness', phrases:[
            p('I’m running a bit late.','Tôi đang đến muộn một chút.','Tự nhiên hơn “I will be late a little”.','I’m going to be a few minutes late.'),
            p('It depends on the situation.','Còn tùy tình huống.','Collocation tự nhiên, không dịch sát từng chữ.','That really depends on the context.'),
            p('I haven’t made up my mind yet.','Tôi vẫn chưa quyết định.','Tự nhiên hơn “I haven’t decided my mind”.','I’m still thinking it over.'),
            p('That’s not really my thing.','Cái đó không hợp gu / không phải sở thích của tôi.','Hội thoại thân mật.','I’m not really into that.'),
            p('I’ll take care of it.','Tôi sẽ xử lý việc đó.','Tự nhiên hơn “I will solve it” trong nhiều tình huống công việc.','Leave it with me.')
          ]},
          {title:'Linking ideas', tag:'Fluency', phrases:[
            p('That being said, …','Tuy vậy / nói vậy nhưng…','Dùng để chuyển sang ý đối lập có cân nhắc.','Having said that, …'),
            p('From my perspective, …','Theo góc nhìn của tôi…','Mở đầu quan điểm ở mức B2.','The way I see it, …'),
            p('One reason for this is that…','Một lý do cho điều này là…','Mở rộng câu trả lời.','This is partly because…'),
            p('A good example of this would be…','Một ví dụ điển hình là…','Đưa ví dụ tự nhiên.','Take … as an example.'),
            p('In the long run, …','Về lâu dài…','Nói về tác động dài hạn.','Over the longer term, …')
          ]},
          {title:'Paraphrasing', tag:'C1 Skill', phrases:[
            p('It helps people work faster.','Nó giúp mọi người làm việc nhanh hơn.','Câu gốc đơn giản để luyện nâng cấp.','It can significantly improve productivity.'),
            p('The problem is very important.','Vấn đề này rất quan trọng.','Nâng cấp từ vựng chính xác hơn.','The issue is particularly significant.'),
            p('Many people use AI now.','Hiện nay nhiều người sử dụng AI.','Paraphrase học thuật hơn.','AI adoption has become increasingly widespread.'),
            p('This method has good and bad points.','Phương pháp này có điểm mạnh và điểm yếu.','Tránh “good/bad points”.','This approach has both advantages and limitations.'),
            p('We need to fix this soon.','Ta cần xử lý việc này sớm.','Cách chuyên nghiệp hơn.','This issue should be addressed as soon as possible.')
          ]}
        ]
      }
    ]
  },
  zh: {
    id:'zh', name:'中文 Chinese', flag:'🇨🇳', icon:'汉', color:'#df5147',
    desc:'Practical Mandarin with pinyin, useful chunks and everyday speaking.',
    units:[
      {
        title:'Giao tiếp nền tảng', subtitle:'Câu dùng được ngay thay vì học từ rời', icon:'🗣️',
        lessons:[
          {title:'Chào hỏi tự nhiên', tag:'HSK 1–2', phrases:[
            z('你好！','Nǐ hǎo!','Xin chào!'),
            z('好久不见！','Hǎo jiǔ bú jiàn!','Lâu rồi không gặp!'),
            z('最近怎么样？','Zuìjìn zěnmeyàng?','Dạo này thế nào?'),
            z('还不错。','Hái búcuò.','Cũng khá ổn.'),
            z('认识你很高兴。','Rènshi nǐ hěn gāoxìng.','Rất vui được gặp bạn.')
          ]},
          {title:'Hỏi và làm rõ', tag:'Useful chunks', phrases:[
            z('你是什么意思？','Nǐ shì shénme yìsi?','Ý bạn là gì?'),
            z('你可以再说一遍吗？','Nǐ kěyǐ zài shuō yí biàn ma?','Bạn có thể nói lại lần nữa không?'),
            z('请说慢一点。','Qǐng shuō màn yìdiǎn.','Vui lòng nói chậm một chút.'),
            z('我不太明白。','Wǒ bú tài míngbai.','Tôi chưa hiểu lắm.'),
            z('原来如此。','Yuánlái rúcǐ.','Ra là vậy.')
          ]}
        ]
      },
      {
        title:'Học tập & công việc', subtitle:'Mandarin cho sinh viên và môi trường làm việc', icon:'💻',
        lessons:[
          {title:'Nói về việc học', tag:'HSK 2–3', phrases:[
            z('我正在学习计算机安全。','Wǒ zhèngzài xuéxí jìsuànjī ānquán.','Tôi đang học an ninh máy tính.'),
            z('这个问题有点难。','Zhège wèntí yǒudiǎn nán.','Vấn đề này hơi khó.'),
            z('我需要再练习一下。','Wǒ xūyào zài liànxí yíxià.','Tôi cần luyện thêm một chút.'),
            z('我已经完成了这个项目。','Wǒ yǐjīng wánchéng le zhège xiàngmù.','Tôi đã hoàn thành dự án này.'),
            z('我们一起讨论一下吧。','Wǒmen yìqǐ tǎolùn yíxià ba.','Chúng ta cùng thảo luận nhé.')
          ]},
          {title:'Cập nhật công việc', tag:'Work', phrases:[
            z('目前进展很顺利。','Mùqián jìnzhǎn hěn shùnlì.','Hiện tại tiến độ khá thuận lợi.'),
            z('我们遇到了一个小问题。','Wǒmen yùdào le yí ge xiǎo wèntí.','Chúng tôi gặp một vấn đề nhỏ.'),
            z('我正在检查原因。','Wǒ zhèngzài jiǎnchá yuányīn.','Tôi đang kiểm tra nguyên nhân.'),
            z('我会尽快处理。','Wǒ huì jǐnkuài chǔlǐ.','Tôi sẽ xử lý sớm nhất có thể.'),
            z('有消息我会告诉你。','Yǒu xiāoxi wǒ huì gàosu nǐ.','Có tin mới tôi sẽ báo bạn.')
          ]}
        ]
      }
    ]
  }
};

function p(text,vi,when,alt){ return {text,vi,when,alt}; }
function z(text,pinyin,vi){ return {text,pinyin,vi,when:'Luyện như một cụm hoàn chỉnh.',alt:''}; }

const AI_MODES = [
  {id:'scenario',icon:'💼',title:'Tình huống công việc',desc:'10 câu thực tế + nghĩa + khi dùng + biến thể + lỗi hay gặp.'},
  {id:'natural',icon:'✨',title:'Sửa câu Việt hóa',desc:'Biến câu đúng ngữ pháp thành cách nói tự nhiên hơn.'},
  {id:'chat',icon:'💬',title:'Hội thoại 2 chiều',desc:'AI nói chuyện, sửa câu rồi tiếp tục hỏi để ép phản xạ.'},
  {id:'phrases',icon:'🧩',title:'Học theo phrases',desc:'Học cụm từ và collocations thay vì từ đơn lẻ.'},
  {id:'immersion',icon:'🌍',title:'English only',desc:'Môi trường 100% English ở mức B2–C1.'},
  {id:'reading',icon:'📚',title:'Biến nội dung thành bài học',desc:'Đọc chủ đề yêu thích rồi trả lời câu hỏi bằng English.'}
];

const STORAGE='learn_en_chi_v4';
const DEFAULT={xp:0,streak:0,lastDate:null,completed:[],theme:'light',course:'en'};
let progress=load();
let view={page:'home',course:progress.course||'en',unit:0,lesson:0,mode:null};

function load(){
  try { return {...DEFAULT,...JSON.parse(localStorage.getItem(STORAGE)||'{}')}; }
  catch { return {...DEFAULT}; }
}
function save(){ localStorage.setItem(STORAGE,JSON.stringify(progress)); }
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function key(c,u,l){return c+'-'+u+'-'+l;}
function isDone(c,u,l){return progress.completed.includes(key(c,u,l));}
function course(){return COURSES[view.course];}
function applyTheme(){document.documentElement.dataset.theme=progress.theme;}
function speak(text,lang){
  if(!('speechSynthesis' in window)) return toast('Trình duyệt chưa hỗ trợ phát âm.');
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.88;speechSynthesis.speak(u);
}
function setPage(page){view.page=page;render();scrollTo({top:0,behavior:'smooth'});}

function topbar(){
 return `<header class="topbar">
   <button class="brand" data-home><span class="brand-mark">🧭</span><span>LearnEN_CHI</span></button>
   <nav class="nav">
     <button data-home class="${view.page==='home'?'active':''}">Trang chủ</button>
     <button data-coach class="${view.page==='coach'?'active':''}">AI Coach</button>
   </nav>
   <div class="top-actions"><span class="pill">🔥 ${progress.streak}</span><span class="pill">⭐ ${progress.xp} XP</span><button class="icon-btn" data-theme>${progress.theme==='dark'?'☀️':'🌙'}</button></div>
 </header>`;
}

function shell(content){return `<main class="app-shell">${topbar()}${content}</main>`;}

function home(){
 const en=COURSES.en, zh=COURSES.zh;
 return shell(`
 <section class="hero">
   <div>
     <div class="eyebrow">B2 → C1 REAL-WORLD LANGUAGE TRAINING</div>
     <h1>Học để <span>nói được</span>,<br>không chỉ để nhớ.</h1>
     <p>English cho công việc, IT/cybersecurity, thuyết trình và phản xạ. Chinese học theo cụm dùng được ngay.</p>
     <div class="hero-actions"><button class="btn primary" data-course="en">Bắt đầu English B2–C1 →</button><button class="btn glass" data-coach>🤖 Luyện với AI Coach</button></div>
   </div>
   <div class="hero-visual"><div>Talk</div><strong>B2+</strong><small>Think • Explain • Paraphrase</small></div>
 </section>

 <section class="method-strip">
   <div><b>01</b><span>Real situations</span></div><div><b>02</b><span>Natural English</span></div>
   <div><b>03</b><span>Collocations</span></div><div><b>04</b><span>Paraphrasing</span></div>
 </section>

 <div class="section-head"><div><div class="eyebrow dark">LEARNING PATHS</div><h2>Chọn lộ trình</h2></div><p>Bỏ học lan man. Mỗi bài tập trung vào ngôn ngữ bạn thật sự có thể dùng.</p></div>
 <section class="course-grid">
   ${courseCard(en)}${courseCard(zh)}
 </section>

 <div class="section-head"><div><div class="eyebrow dark">B2–C1 TRAINING</div><h2>6 cách luyện với AI</h2></div><button class="link-btn" data-coach>Xem AI Coach →</button></div>
 <section class="mode-grid">${AI_MODES.map(m=>`<button class="mode-card" data-mode="${m.id}"><span>${m.icon}</span><h3>${m.title}</h3><p>${m.desc}</p></button>`).join('')}</section>
 `);
}
function courseCard(c){
 const done=progress.completed.filter(x=>x.startsWith(c.id+'-')).length;
 const total=c.units.reduce((n,u)=>n+u.lessons.length,0);
 const pct=Math.round(done/total*100);
 return `<button class="course-card" style="--course:${c.color}" data-course="${c.id}">
   <div class="course-icon">${c.icon}</div><div class="course-kicker">${c.flag} ${c.id==='en'?'ADVANCED TRACK':'PRACTICAL TRACK'}</div>
   <h3>${c.name}</h3><p>${c.desc}</p>
   <div class="progress"><i style="width:${pct}%"></i></div><div class="meta"><span>${done}/${total} bài</span><span>${pct}%</span></div>
 </button>`;
}

function path(){
 const c=course();
 return shell(`
 <section class="path-head" style="--course:${c.color}">
  <button class="round" data-home>←</button>
  <div><div class="eyebrow dark">${c.flag} LEARNING PATH</div><h1>${c.name}</h1><p>${c.desc}</p></div>
  <div class="level-badge">${c.id==='en'?'B2–C1':'实用中文'}</div>
 </section>
 <div class="course-switch"><button data-course="en" class="${view.course==='en'?'active':''}">🇬🇧 English B2–C1</button><button data-course="zh" class="${view.course==='zh'?'active':''}">🇨🇳 中文 Chinese</button></div>
 <section class="path-layout">
   <div class="units">${c.units.map((u,ui)=>unitCard(u,ui)).join('')}</div>
   <aside class="side-panel">
     <div class="side-icon">🎯</div><h3>${c.id==='en'?'B2+ rule':'学习方法'}</h3>
     <p>${c.id==='en'?'Đừng chỉ trả lời đúng. Hãy giải thích lý do, đưa ví dụ, so sánh và paraphrase cùng một ý theo cách khác.':'Học cả cụm câu, nghe pinyin, đọc thành tiếng và lặp lại trong ngữ cảnh.'}</p>
     <button class="btn primary wide" data-coach>🤖 Mở AI Coach</button>
   </aside>
 </section>`);
}
function unitCard(u,ui){
 return `<article class="unit-card">
   <div class="unit-title"><span>${u.icon}</span><div><div class="eyebrow dark">UNIT ${String(ui+1).padStart(2,'0')}</div><h2>${u.title}</h2><p>${u.subtitle}</p></div></div>
   <div class="lesson-grid">${u.lessons.map((l,li)=>`<button class="lesson-card ${isDone(view.course,ui,li)?'done':''}" data-lesson="${ui}-${li}">
     <div><span class="tag">${l.tag}</span><h3>${l.title}</h3><p>${l.phrases.length} useful phrases</p></div><b>${isDone(view.course,ui,li)?'✓':'→'}</b>
   </button>`).join('')}</div>
 </article>`;
}

function lesson(){
 const c=course(), l=c.units[view.unit].lessons[view.lesson];
 return shell(`
 <section class="lesson-head" style="--course:${c.color}">
   <button class="round" data-back-path>←</button>
   <div><div class="eyebrow dark">${c.units[view.unit].title} • ${l.tag}</div><h1>${l.title}</h1><p>Học cả cụm, hiểu ngữ cảnh, rồi nói lại thành tiếng.</p></div>
   <button class="btn primary" data-complete>${isDone(view.course,view.unit,view.lesson)?'✓ Đã hoàn thành':'Hoàn thành +30 XP'}</button>
 </section>
 <section class="phrase-list">
  ${l.phrases.map((x,i)=>phraseCard(x,i,c.id)).join('')}
 </section>
 <section class="challenge">
   <div><div class="eyebrow dark">ACTIVE RECALL</div><h2>Đừng chỉ đọc — hãy tự nói lại</h2><p>${c.id==='en'?'Chọn 2 câu phía trên. Nói lại cùng ý bằng từ của bạn, sau đó mở AI Coach để được sửa grammar, vocabulary, naturalness và clarity.':'Chọn 2 câu phía trên, đọc thành tiếng rồi thử thay đổi chủ ngữ hoặc tình huống.'}</p></div>
   <button class="btn primary" data-coach>Practice with AI →</button>
 </section>`);
}
function phraseCard(x,i,cid){
 return `<article class="phrase-card">
   <div class="phrase-no">${String(i+1).padStart(2,'0')}</div>
   <div class="phrase-main">
     <div class="phrase-top"><h2>${esc(x.text)}</h2><button class="speaker" data-speak="${esc(x.text)}">🔊</button></div>
     ${x.pinyin?`<div class="pinyin">${esc(x.pinyin)}</div>`:''}
     <div class="translation">${esc(x.vi)}</div>
     ${cid==='en'?`<div class="phrase-info"><div><b>Khi nào dùng</b><p>${esc(x.when)}</p></div><div><b>Biến thể tự nhiên</b><p>${esc(x.alt)}</p></div></div>`:''}
   </div>
 </article>`;
}

function coach(){
 const selected=AI_MODES.find(x=>x.id===view.mode)||AI_MODES[0];
 return shell(`
 <section class="coach-hero">
   <div><div class="eyebrow">AI SPEAKING COACH • B2–C1</div><h1>Biến AI thành gia sư<br>khó tính vừa đủ.</h1><p>Chọn kiểu luyện, chủ đề bạn muốn và copy prompt hoàn chỉnh sang ChatGPT.</p></div>
   <div class="coach-score"><strong>B2+</strong><span>Grammar</span><span>Vocabulary</span><span>Naturalness</span><span>Clarity</span></div>
 </section>
 <section class="coach-layout">
   <div class="coach-modes">${AI_MODES.map(m=>`<button class="${selected.id===m.id?'active':''}" data-mode="${m.id}"><span>${m.icon}</span><div><b>${m.title}</b><small>${m.desc}</small></div></button>`).join('')}</div>
   <div class="prompt-panel">
      <div class="prompt-head"><div><div class="eyebrow dark">CUSTOM PROMPT</div><h2>${selected.icon} ${selected.title}</h2></div></div>
      <label>Chủ đề muốn luyện<input id="topic" value="${selected.id==='scenario'?'SOC analyst incident update':'Technology and cybersecurity'}" placeholder="VD: job interview, SOC, AI, university project"></label>
      <label>Câu của bạn / tình huống cụ thể<textarea id="inputText" placeholder="Có thể để trống hoặc nhập câu tiếng Anh bạn muốn sửa."></textarea></label>
      <div class="prompt-box" id="promptBox">${esc(buildPrompt(selected.id,'Technology and cybersecurity',''))}</div>
      <div class="prompt-actions"><button class="btn secondary" data-generate>Tạo lại prompt</button><button class="btn primary" data-copy>📋 Copy prompt</button></div>
      <div class="coach-tip"><b>💡 Mẹo B2–C1:</b> Sau mỗi câu trả lời, bắt AI yêu cầu bạn paraphrase lại một lần. Đây là phần giúp tăng phản xạ và vốn diễn đạt nhanh nhất.</div>
   </div>
 </section>`);
}

function buildPrompt(mode,topic,input){
 const base=`Bạn là gia sư tiếng Anh B2–C1 cho tôi. Chủ đề: ${topic||'Technology and workplace communication'}.

Mục tiêu: giao tiếp tự nhiên, dùng collocations tốt, giải thích ý rõ ràng và paraphrase được cùng một ý theo nhiều cách.
Khi tôi trả lời, hãy đánh giá ngắn gọn 4 mục: Grammar, Vocabulary, Naturalness, Clarity. Sửa lỗi, cho phiên bản tự nhiên hơn ở mức B2–C1, rồi yêu cầu tôi nói/viết lại trước khi tiếp tục. Nếu tôi bí từ, hãy gợi ý bằng English trước, chỉ dùng tiếng Việt khi cần.`;
 const extra={
 scenario:`Tạo 10 câu người bản xứ thường dùng trong tình huống này. Với mỗi câu: nghĩa tiếng Việt tự nhiên, khi nào dùng, một biến thể khác, và lỗi người Việt thường mắc. Sau đó chọn 3 câu để bắt đầu role-play.`,
 natural:`Tôi sẽ đưa các câu tiếng Anh tôi thường nói. Hãy chỉ ra phần “đậm mùi dịch từ tiếng Việt”, sửa thành cách tự nhiên hơn và giải thích collocation/cách diễn đạt. Câu cần sửa: ${input||'[tôi sẽ gửi sau]'}`,
 chat:`Đóng vai người bản xứ và bắt đầu hội thoại 2 chiều. Mỗi lượt chỉ hỏi 1 câu. Sau câu trả lời của tôi: sửa lỗi, nâng cấp cách nói, bắt tôi paraphrase rồi mới tiếp tục.`,
 phrases:`Tạo 20 phrases/collocations thông dụng về chủ đề này. Không dạy từ đơn lẻ. Với mỗi cụm: nghĩa, ví dụ thực tế và hoàn cảnh sử dụng. Sau mỗi 5 cụm hãy cho một mini challenge.`,
 immersion:`Từ bây giờ chỉ nói với tôi bằng English ở mức B2–C1. Nếu tôi sai, sửa ngay nhưng ngắn gọn. Nếu câu đúng nhưng quá cơ bản, hãy nâng cấp bằng collocation, phrasal verb hoặc từ chính xác hơn. Không dịch sang tiếng Việt trừ khi tôi yêu cầu.`,
 reading:`Viết một đoạn English 180–250 từ về chủ đề này ở mức B2–C1. Sau đó giải thích 8 phrases/collocations quan trọng và đặt 5 câu hỏi từ dễ đến khó để tôi trả lời bằng English. Sau mỗi câu trả lời hãy sửa và yêu cầu paraphrase.`
 };
 return base+'\n'+extra[mode];
}

function completeLesson(){
 const k=key(view.course,view.unit,view.lesson);
 if(progress.completed.includes(k)) return toast('Bài này đã được tính XP rồi.');
 progress.completed.push(k);progress.xp+=30;
 const today=new Date().toDateString();
 if(progress.lastDate!==today){
   const y=new Date(Date.now()-86400000).toDateString();
   progress.streak=progress.lastDate===y?progress.streak+1:1;
   progress.lastDate=today;
 }
 save();render();toast('+30 XP • Nice work!');
}

function toast(msg){const old=document.querySelector('.toast');if(old)old.remove();const e=document.createElement('div');e.className='toast';e.textContent=msg;document.body.appendChild(e);setTimeout(()=>e.remove(),2200);}

function bind(){
 document.querySelectorAll('[data-home]').forEach(b=>b.onclick=()=>{view.page='home';render();});
 document.querySelectorAll('[data-course]').forEach(b=>b.onclick=()=>{view.course=b.dataset.course;progress.course=view.course;save();view.page='path';render();scrollTo(0,0);});
 document.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>{[view.unit,view.lesson]=b.dataset.lesson.split('-').map(Number);view.page='lesson';render();scrollTo(0,0);});
 document.querySelectorAll('[data-back-path]').forEach(b=>b.onclick=()=>setPage('path'));
 document.querySelectorAll('[data-coach]').forEach(b=>b.onclick=()=>{view.page='coach';render();scrollTo(0,0);});
 document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{view.mode=b.dataset.mode;view.page='coach';render();scrollTo(0,0);});
 document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak,view.course==='zh'?'zh-CN':'en-US'));
 document.querySelector('[data-complete]')?.addEventListener('click',completeLesson);
 document.querySelector('[data-theme]')?.addEventListener('click',()=>{progress.theme=progress.theme==='dark'?'light':'dark';save();applyTheme();render();});
 document.querySelector('[data-generate]')?.addEventListener('click',()=>{
   const m=view.mode||'scenario', t=document.querySelector('#topic').value, i=document.querySelector('#inputText').value;
   document.querySelector('#promptBox').textContent=buildPrompt(m,t,i);
 });
 document.querySelector('[data-copy]')?.addEventListener('click',async()=>{
   const t=document.querySelector('#promptBox').textContent;
   try{await navigator.clipboard.writeText(t);toast('Đã copy prompt!');}
   catch{toast('Không copy tự động được — hãy chọn và copy thủ công.');}
 });
}

function render(){
 applyTheme();
 const app=document.querySelector('#app');
 if(view.page==='home')app.innerHTML=home();
 else if(view.page==='path')app.innerHTML=path();
 else if(view.page==='lesson')app.innerHTML=lesson();
 else app.innerHTML=coach();
 bind();
}
applyTheme();render();
