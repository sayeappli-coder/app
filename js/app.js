import{createClient as Ye}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var te="https://xtyysubdpapuxjlynapp.supabase.co",ae="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",Y="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var p=Ye(te,ae,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),A=document.getElementById("app"),v=document.getElementById("overlay"),ye=document.getElementById("tabbar"),se=document.getElementById("toast"),pe="0.13",ke="saye.prefs",ne={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1,stats:!0};function Oe(){try{return{...ne,...JSON.parse(localStorage.getItem(ke)||"{}")}}catch{return{...ne}}}function V(){try{localStorage.setItem(ke,JSON.stringify(d))}catch{}}var d=Oe(),He=["localhost","127.0.0.1"].includes(location.hostname)?"dev":pe;function u(e,t=null){try{if(d.stats===!1||navigator.globalPrivacyControl||navigator.doNotTrack==="1"||!navigator.onLine)return;fetch(`${te}/rest/v1/rpc/track`,{method:"POST",keepalive:!0,headers:{apikey:ae,"Content-Type":"application/json"},body:JSON.stringify({p_name:e,p_detail:t,p_version:He})}).catch(()=>{})}catch{}}["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var h=null,y=[],L={},G=null,F=!1,we="",K=0,ie={},Ae,X=new Promise(e=>{Ae=e}),me="saye.cache";function Ue(){try{return JSON.parse(localStorage.getItem(me)||"null")}catch{return null}}function Ve(){try{localStorage.setItem(me,JSON.stringify({alerts:y}))}catch{}}var $e={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},o=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),r=(e,t="")=>`<svg class="${t}" aria-hidden="true" focusable="false"><use href="#${e}"/></svg>`;function c(e,t=2600){se.textContent=e,se.hidden=!1,clearTimeout(c.t),c.t=setTimeout(()=>{se.hidden=!0},t)}function x(e){location.hash=e}function N(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${r("i-back")}</button>
    <h1 tabindex="-1">${o(e)}</h1>
  </div>`}var Z=e=>`<h1 tabindex="-1">${o(e)}</h1>`;function fe(e){let t=$e[e]||$e.a_confirmer;return`<span class="rel ${e}">${t.icon?r(t.icon):`<b aria-hidden="true">${t.mark}</b>`} ${t.label}</span>`}function Fe(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function W(e){let t=e?.message||String(e);return!navigator.onLine||/Failed to fetch|NetworkError|Load failed/i.test(t)?"Pas de connexion : r\xE9essaie quand le r\xE9seau revient.":t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var P=null,re=null;function qe(e=d.sound,t=!1){if(xe(),e!=="aucun")try{P=P||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},s=a[e]||a.court,n=()=>{let l=P.currentTime;for(let[f,b]of s){if(f){let w=P.createOscillator(),_=P.createGain();w.type=e==="sirene"?"sawtooth":"sine",w.frequency.value=f,_.gain.setValueAtTime(1e-4,l),_.gain.exponentialRampToValueAtTime(.35,l+.02),_.gain.exponentialRampToValueAtTime(1e-4,l+b),w.connect(_).connect(P.destination),w.start(l),w.stop(l+b)}l+=b}return s.reduce((f,[,b])=>f+b,0)},i=n();t&&(re=setInterval(n,(i+.6)*1e3))}catch{}}function xe(){clearInterval(re),re=null}function oe(e){d.vibrate&&navigator.vibrate&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate(e)}function Ke(){oe([400,150,400,150,800])}async function We(){let{data:{session:e}}=await p.auth.getSession();if(e&&navigator.onLine){let{error:t}=await p.auth.getUser();t&&(t.code==="user_not_found"||t.status===403&&/does not exist/i.test(t.message||""))&&(await p.auth.signOut({scope:"local"}),e=null)}if(!e){navigator.onLine||await new Promise(s=>window.addEventListener("online",s,{once:!0}));let{data:t,error:a}=await p.auth.signInAnonymously();if(a)throw a;e=t.session}h={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},Ae()}async function Te(){let{data:e}=await p.rpc("my_account");e&&Object.assign(h,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function k(){await X;let{data:e,error:t}=await p.rpc("my_alerts");if(t)throw t;let a=JSON.stringify((e||[]).map(({cooldown_left_s:n,cooldown_until:i,...l})=>({...l,cool:n>0}))),s=a!==we;return we=a,K=Date.now(),y=(e||[]).map(n=>({...n,_coolUntil:n.cooldown_left_s>0?K+n.cooldown_left_s*1e3:0})),F=!0,Ve(),s}var Ce={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function H(e,t){let{data:a,error:s}=await p.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(s){let n="serveur";try{n=(await s.context.json()).error||n}catch{}throw new Error(Ce[n]||"Oups, une erreur est survenue. R\xE9essaie.")}return await Te(),a}var _e;function Je(e,t){clearTimeout(_e);let a=e.value.trim();if(t){if(!a||a===h.pseudo){t.textContent="";return}_e=setTimeout(async()=>{let{data:s}=await p.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=s?Ce[s]:"\u2713 Pseudo disponible",t.className=`hint ${s?"err":"ok"}`)},400)}}var Qe=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),g={};g.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&x(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${r("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);g.intro=()=>`
  <div class="brand intro-logo">${r("i-bell")}</div>
  <h1 tabindex="-1">Simple et pratique</h1>
  <ol class="steps">
    <li><i>1</i><span>Tu cr\xE9es ton alerte et tu la partages avec tes proches.</span></li>
    <li><i>2</i><span>D\xE8s que l'un de vous rep\xE8re l'\xE9v\xE9nement, il maintient le bouton appuy\xE9 : tout le monde est pr\xE9venu en temps r\xE9el.</span></li>
  </ol>
  <h2 class="accent">On a tous des \xE9v\xE9nements o\xF9 l'on voudrait \xEAtre pr\xE9venu dans la seconde :</h2>
  <div class="chips">
    <span class="chip">Billetterie ouverte</span><span class="chip">Sortie d'album</span>
    <span class="chip">Drop mode</span><span class="chip">Finale d'e-sport</span>
    <span class="chip">Chaque but du match</span><span class="chip">Derniers km du Tour</span>
  </div>
  <p class="body-lg">Tout ce que tu veux : demande \xE0 la communaut\xE9 !</p>
  <div class="grow"></div>
  <button class="btn" data-action="start">Commencer</button>`;g.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${r("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  <h1 tabindex="-1">Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${r("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${r("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${y.length?`<a class="btn outline" href="#/alerts">Mes alertes (${y.length})</a>`:""}`;g.create=()=>`
  ${Z("Cr\xE9er une alerte")}
  <p class="lead-text">Qui pourra la rejoindre ?</p>
  <button class="choice stack" data-action="pick-visibility" data-v="public">
    <div class="head">${r("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${r("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Pour mon cercle : je la partage avec qui je veux, et un seul appui pr\xE9vient tout le monde. Mes invit\xE9s peuvent inviter \xE0 leur tour.</span>
  </button>`;g["create-form"]=()=>{if(!L.visibility)return setTimeout(()=>x("#/create")),"";let e=L.visibility==="public",t=e?"quorum":"one";return`
  ${N(e?"Nouvelle alerte publique":"Nouvelle alerte priv\xE9e","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Ex. : Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar" aria-live="polite"></div>

    ${h.pseudo?`
    <label class="field" for="f-me">Pseudo</label>
    <input id="f-me" type="text" value="${o(h.pseudo)}" readonly>`:`
    <label class="field" for="f-pseudo">Pseudo <small>(facultatif)</small></label>
    <input id="f-pseudo" name="pseudo" type="text" maxlength="24" placeholder="Ex. : Fred654" autocomplete="username" data-live="f-pseudo-check">
    <p id="f-pseudo-check" class="hint" aria-live="polite"></p>
    <label class="field" for="f-pass">Mot de passe <small>(si pseudo)</small></label>
    <input id="f-pass" name="password" type="password" minlength="8" autocomplete="new-password">
    <p class="hint">Sans pseudo, tu restes anonyme. Avec un pseudo, le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>`}

    <fieldset class="plain">
      <legend class="legend">Qui peut la d\xE9clencher ?</legend>
      <label class="radio"><input type="radio" name="trigger_mode" value="one" ${t==="one"?"checked":""}><div><b>Un seul membre suffit</b><small>Conseill\xE9 pour un cercle priv\xE9</small></div></label>
      <label class="radio"><input type="radio" name="trigger_mode" value="quorum" ${t==="quorum"?"checked":""}><div><b>Plusieurs membres (quorum)</b><small>Plusieurs appuis en m\xEAme temps \xB7 conseill\xE9 pour une alerte publique</small></div></label>
      <label class="radio"><input type="radio" name="trigger_mode" value="owner"><div><b>Moi seul</b><small>Je pr\xE9viens ma communaut\xE9 (mairie, club, organisateur\u2026)</small></div></label>
    </fieldset>
    <div class="spacer"></div>
    <button class="btn" type="submit">Valider mon alerte</button>
  </form>`};g.share=async({id:e})=>{await k();let t=y.find(f=>f.id===e);if(!t)return`${N("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:f}=await p.rpc("get_invite_code",{p_alert:e});a=f}let s=Fe(t,a),n=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,i=encodeURIComponent(`${n} ${s}`),l=!!L.justCreated;return`
  ${N("Invite tes proches","#/alerts")}
  ${l?`<div class="success" role="status">${r("i-check")}<span>Alerte cr\xE9\xE9e ! Partage-la pour que tes proches soient pr\xE9venus.</span></div>`:""}
  <p class="lead-text">Plus il y a de monde, plus l'alerte est efficace.</p>
  <div class="pill-title">${r("i-bell-outline")}${o(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-track="share_click:lien" data-url="${o(s)}">${r("i-link")}Copier le lien</button>
    <a href="sms:?&body=${i}" data-track="share_click:sms">${r("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${i}" target="_blank" rel="noopener" data-track="share_click:whatsapp">${r("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-track="share_click:signal" data-url="${o(s)}">${r("i-chat")}Signal</a>
    <a data-track="share_click:email" href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${i}">${r("i-mail")}E-mail</a>
    <button data-action="native-share" data-track="share_click:autres" data-url="${o(s)}" data-text="${o(n)}">${r("i-dots")}Autres\u2026</button>
    <button class="wide" data-action="show-qr" data-track="share_click:qr" data-url="${o(s)}" data-title="${o(t.title)}">${r("i-qr")}Afficher le QR code</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts" ${l?'data-track="share_skip"':""}>${l?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};g.alerts=async()=>{F?Date.now()-K>15e3&&k().then(s=>{s&&$.name==="alerts"&&m(!0)}).catch(()=>{}):await k();let e=Xe([...y]),t=`
  <div class="brandbar compact">
    <a class="brand" href="#/home" aria-label="Accueil SAYE">${r("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  ${Z("Mes alertes")}`;if(!e.length)return`${t}
      <div class="emptystate">${r("i-bell-outline")}<b>Aucune alerte pour l'instant</b>
        <p>Cr\xE9e ton alerte et partage-la, ou rejoins une alerte de la communaut\xE9.</p></div>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let a=Date.now();return`${t}
  ${et()}
  ${Le()}
  <div class="grid ${e.length===1?"single":""}">
    ${e.map(s=>Ge(s,a)).join("")}
  </div>
  <p class="footnote">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>`};var J="connecting";function Le(){return navigator.onLine?J==="ok"?'<div id="veille" class="veille" role="status"><span class="dot" aria-hidden="true"></span>En veille : tu seras pr\xE9venu \xE0 la seconde</div>':'<div id="veille" class="veille wait" role="status"><span class="dot" aria-hidden="true"></span>Connexion en cours\u2026</div>':`<div id="veille" class="veille off" role="status"><span class="dot" aria-hidden="true"></span>Hors connexion : tu ne seras pas pr\xE9venu tant que le r\xE9seau n'est pas revenu</div>`}function Q(){let e=document.getElementById("veille");e&&(e.outerHTML=Le())}var Pe=e=>`Envoy\xE9e \xB7 disponible dans ${Math.max(1,Math.ceil(e/1e3))} s`,Re=(e,t)=>`${e} \xB7 encore ${Math.max(1,Math.ceil(t/1e3))} s`;function ze(e){return e.trigger_mode==="owner"&&!e.is_owner?"Seul le cr\xE9ateur d\xE9clenche":e.trigger_mode==="quorum"?"Maintiens appuy\xE9 quand tu le vois":"Maintiens appuy\xE9 d\xE8s que \xE7a arrive"}function Ge(e,t){let a=e._coolUntil>t,s=ie[e.id],n=!a&&s&&s.until>t;s&&!n&&delete ie[e.id];let i=a?e._coolUntil:n?s.until:0,l=e.trigger_mode!=="owner"||e.is_owner,f=ze(e),b=n?`Signal envoy\xE9 \xB7 ${s.count} sur ${s.quorum}`:"",w=a?Pe(i-t):n?Re(b,i-t):f,_=l?`${e.title} : maintenir appuy\xE9 pour envoyer l'alerte`:`${e.title} : ${f}`;return`<div class="tile">
    <button class="alarm-btn ${a?"cooldown":n?"pending":""}" data-hold="${e.id}" data-hint="${o(f)}"
      ${i?`data-until="${i}" data-kind="${a?"cool":"pending"}" data-prefix="${o(b)}"`:""} ${l?"":"disabled"} aria-label="${o(_)}">
      ${r("i-bell")}<strong>${o(e.title)}</strong><span class="hold-hint">${o(w)}</span>
    </button>
    <div class="tile-foot">
      <div><div class="tile-meta">${e.visibility==="private"?"Priv\xE9e":"Publique"}</div>${fe(e.reliability)}</div>
      <div class="tile-actions">
        <button data-action="open-share" data-id="${e.id}" aria-label="Partager \xAB ${o(e.title)} \xBB">${r("i-share")}</button>
        <button data-action="alert-menu" data-id="${e.id}" aria-label="Options de \xAB ${o(e.title)} \xBB">${r("i-dots")}</button>
      </div>
    </div>
  </div>`}function Xe(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var he=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ee=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,C=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),C=e,$.name==="join"&&m(!0)});window.addEventListener("appinstalled",()=>{C=null,u("app_installed")});function Ze(){return ee?"":he?`<div class="install">
      <b>Pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e, installe SAYE :</b>
      <ol>
        <li>${r("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari</span></li>
        <li>${r("i-add-square")}<span>Choisis <b>Sur l'\xE9cran d'accueil</b>, puis ouvre SAYE depuis l'ic\xF4ne</span></li>
      </ol>
    </div>`:C?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function be(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:S==="ok"?{ok:!0,text:"Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:S?z?{code:"failed",text:"Le service de notifications de Google ne r\xE9pond pas depuis ce r\xE9seau. Coupe le Wi-Fi (passe en 4G), puis touche R\xE9parer.",action:"fix-notif",label:"R\xE9parer"}:{code:"failed",text:"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function et(){if(he&&!ee)return`<div class="alertbox">${r("i-bell-off")}<div><b>Installe SAYE pour \xEAtre pr\xE9venu app ferm\xE9e</b>
      Sur iPhone : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB, et ouvre SAYE depuis l'ic\xF4ne.</div></div>`;let e=be(),a={off:["Active les notifications","Sinon, tu ne seras pas pr\xE9venu quand l'app est ferm\xE9e.","Activer"],denied:["Notifications bloqu\xE9es","Autorise-les pour SAYE dans les r\xE9glages de ton navigateur, sinon tu ne seras pas pr\xE9venu app ferm\xE9e.",null],failed:["Notifications \xE0 r\xE9parer",z?"Le service de notifications de Google ne r\xE9pond pas depuis ce r\xE9seau. Coupe le Wi-Fi (passe en 4G), puis touche R\xE9parer.":"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.","R\xE9parer"]}[e.code];return a?`<div class="alertbox" role="alert">${r("i-bell-off")}<div><b>${a[0]}</b>${a[1]}
    ${a[2]?`<button class="btn small" data-action="fix-notif">${a[2]}</button>`:""}</div></div>`:""}function tt(){if(he&&!ee)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=be(),t=e.ok?"ok":e.code==="pending"?"wait":"err",a=e.ok?r("i-check"):e.code==="pending"?"":r("i-bell-off");return`<p id="notif-status" class="status ${t}">${a}<span>${o(e.text)}</span></p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}`}var q={q:"",sort:"populaires"};g.find=async()=>{let{data:e,error:t}=await p.rpc("find_alerts",{p_query:q.q,p_category:null,p_sort:q.sort});if(t)throw t;let a=e||[],s=(i,l)=>`<button data-action="find-sort" data-v="${i}" aria-pressed="${q.sort===i}">${l}</button>`,n=q.q?`<div class="emptystate">${r("i-search")}<b>Aucun r\xE9sultat</b><p>Aucune alerte publique ne correspond \xE0 \xAB ${o(q.q)} \xBB.</p></div>`:`<div class="emptystate">${r("i-globe")}<b>Aucune alerte publique pour l'instant</b><p>Cr\xE9e la premi\xE8re : toute la communaut\xE9 pourra la rejoindre.</p></div>`;return`
  ${Z("Choisir une alerte")}
  <div class="search">${r("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" aria-label="Rechercher une alerte" value="${o(q.q)}"></div>
  <div class="segmented" role="group" aria-label="Trier les alertes">${s("populaires","Populaires")}${s("recentes","R\xE9centes")}</div>
  ${a.length?`<div class="list">${a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${o(i.title)}</b>
          <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${fe(i.reliability)}
      </button>`).join("")}</div>`:n}
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};g.join=async({id:e,query:t})=>{let a=t.get("c"),{data:s,error:n}=await p.rpc("get_alert_preview",{p_alert:e,p_code:a});return n||!s?`${N("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${N("Rejoindre une alerte","#/home")}
  <div class="pill-title">${r(s.visibility==="private"?"i-lock":"i-globe")}${o(s.title)}</div>
  <p class="body-lg">
    ${s.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${o(s.owner_pseudo||"Anonyme")}</b>
  </p>
  ${fe(s.reliability)}
  <div class="grow"></div>
  ${Ze()}
  ${s.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${s.id}" data-code="${o(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};g.alarm=async({id:e})=>(setTimeout(()=>it(Number(e))),g.alerts());g.settings=()=>`
  ${Z("R\xE9glages")}
  <section class="group" aria-labelledby="g-alerte">
    <h2 id="g-alerte">Mon alerte</h2>
    <label class="field" for="s-sound">Son</label>
    <select id="s-sound" data-pref="sound">
      <option value="court">Alerte courte</option>
      <option value="sirene">Sir\xE8ne</option>
      <option value="carillon">Carillon</option>
      <option value="aucun">Aucun son</option>
    </select>
    <label class="setrow"><span>Vibreur</span><input type="checkbox" class="switch" role="switch" data-pref="vibrate" ${d.vibrate?"checked":""}></label>
    <label class="setrow"><span>Flash de l'\xE9cran</span><input type="checkbox" class="switch" role="switch" data-pref="flash" ${d.flash?"checked":""}></label>
    <button class="btn outline small" data-action="test-alarm">Tester mon alerte</button>
  </section>

  <section class="group" aria-labelledby="g-tri">
    <h2 id="g-tri">Mes alertes</h2>
    <label class="field" for="s-sort">Trier par</label>
    <select id="s-sort" data-pref="sort">
      <option value="standard">Perso</option>
      <option value="alpha">Ordre alphab\xE9tique</option>
      <option value="membres">Nombre de membres</option>
    </select>
  </section>

  <section class="group" aria-labelledby="g-notif">
    <h2 id="g-notif">Notifications</h2>
    <div id="notif-zone">${tt()}</div>
    <details>
      <summary class="muted">D\xE9tails techniques</summary>
      <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
      <pre id="diag" class="diag" aria-live="polite"></pre>
    </details>
  </section>

  <section class="group" aria-labelledby="g-pseudo">
    <h2 id="g-pseudo">Mon pseudo</h2>
    ${at()}
  </section>

  <section class="group" aria-labelledby="g-apropos">
    <h2 id="g-apropos">\xC0 propos</h2>
    <label class="setrow"><span>Statistiques anonymes<small>Aide \xE0 am\xE9liorer SAYE : ni cookie, ni identifiant</small></span>
      <input type="checkbox" class="switch" role="switch" data-pref="stats" ${d.stats!==!1?"checked":""}></label>
    <div class="note info">${r("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
    <button class="link-btn" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
    <p class="version">Version ${pe}</p>
  </section>`;function at(){let e=`
    <details class="mt-10">
      <summary>J'ai d\xE9j\xE0 un pseudo (autre t\xE9l\xE9phone)</summary>
      <input id="l-pseudo" type="text" maxlength="24" placeholder="Mon pseudo" aria-label="Mon pseudo" autocomplete="username" class="mt-10">
      <input id="l-pass" type="password" placeholder="Mot de passe" aria-label="Mot de passe" autocomplete="current-password" class="mt-8">
      <p class="hint">Les alertes rejointes sur ce t\xE9l\xE9phone sans pseudo ne seront pas reprises.</p>
      <button class="btn small" data-action="login-pseudo">Me connecter</button>
    </details>`;if(!h.pseudo)return`
  <label class="sr-only" for="s-pseudo">Pseudo</label>
  <p class="note-muted">Tu es anonyme. R\xE9serve un pseudo pour \xEAtre reconnu et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="s-pseudo-check">
  <p id="s-pseudo-check" class="hint"></p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <p class="hint">Le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>
  <button class="btn small" data-action="claim-pseudo">R\xE9server mon pseudo</button>
  ${e}`;if(!h.hasPassword)return`
  <p class="pseudo-name">${o(h.pseudo)}</p>
  <p class="hint warn">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!h.canChangeAt||new Date(h.canChangeAt)<=new Date;return`
  <p class="pseudo-name">${o(h.pseudo)} \u2713</p>
  <p class="note-muted m0">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details class="mt-10">
    <summary>Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" aria-label="Nouveau pseudo" data-live="s-pseudo-check" class="mt-10">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${Qe(h.canChangeAt)}.</p>`}
  ${e}`}g.legal=()=>`
  ${N("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Mesure d'audience</h3><p>Pour s'am\xE9liorer, SAYE compte de fa\xE7on anonyme les \xE9tapes de son utilisation (par exemple \xAB alerte cr\xE9\xE9e \xBB ou \xAB alerte envoy\xE9e \xBB). Aucun cookie, aucun identifiant, aucun pseudo ni aucune adresse ne sont utilis\xE9s : il est impossible de relier ces compteurs \xE0 une personne. Ils sont conserv\xE9s 13 mois au maximum, puis effac\xE9s automatiquement. Tu peux d\xE9sactiver cette mesure \xE0 tout moment dans R\xE9glages \u2192 \xC0 propos \u2192 Statistiques anonymes. Elle est aussi d\xE9sactiv\xE9e si ton navigateur demande \xE0 ne pas \xEAtre suivi.</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function ge({trigger:e,alert:t,test:a=!1}){G={triggerId:e?.id,alertId:t?.id,test:a},v.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-modal="true" aria-labelledby="alarm-title" aria-describedby="alarm-desc">
      <div class="kicker" aria-hidden="true">ALERTE !</div>
      ${r("i-bell","big")}
      <h2 id="alarm-title">Alerte : ${o(t?.title||"Test de ton alerte")}</h2>
      <div class="by" id="alarm-desc">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,v.querySelector("[data-action=stop-alarm]")?.focus(),qe(d.sound,!0),Ke()}function le(){xe(),navigator.vibrate&&navigator.userActivation?.hasBeenActive&&navigator.vibrate(0),v.innerHTML="",G=null}function st(){v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      ${r("i-bell","mid")}
      <h1 id="thanks-title">Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`,v.querySelector("[data-action=close-overlay]")?.focus()}var I=null;function Ie(e){if(!e||e===document.body)return null;let t=e.dataset?.hold?`[data-hold="${e.dataset.hold}"]`:e.dataset?.action&&e.dataset?.id?`[data-action="${e.dataset.action}"][data-id="${e.dataset.id}"]`:null;return{el:e,sel:t}}function j(e,t,a=document.activeElement){v.querySelector(".sheet")||(I=Ie(a)),v.innerHTML=`<div class="sheet" data-action="close-sheet">
    <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="${o(t)}">
      <div class="sheet-grip" aria-hidden="true"></div>${e}
    </div></div>`,v.querySelector(".sheet-panel button, .sheet-panel a")?.focus()}function T(){if(!v.querySelector(".sheet"))return;v.innerHTML="",(I?.el?.isConnected?I.el:I?.sel&&document.querySelector(I.sel))?.focus(),I=null}function je(e,t){let a=y.find(s=>s.id===e);if(a){if(a.trigger_mode==="owner"&&!a.is_owner)return c("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");j(`
    <p class="sheet-title">Envoyer l'alerte ?</p>
    <p class="sheet-text">\xAB ${o(a.title)} \xBB : ${a.trigger_mode==="quorum"?"ton signal sera compt\xE9.":"tous les membres seront pr\xE9venus."}</p>
    <button class="btn" data-action="send-now" data-id="${a.id}">Envoyer maintenant</button>
    <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer l'envoi",t)}}async function R(e,t){if(!(!e||e.disabled)){e.disabled=!0,e.classList.add("busy"),e.setAttribute("aria-busy","true");try{return await t()}finally{e.isConnected&&(e.disabled=!1,e.classList.remove("busy"),e.removeAttribute("aria-busy"))}}}async function Me(e){if(!navigator.onLine)return c("Pas de connexion : l'alerte n'a pas \xE9t\xE9 envoy\xE9e.",4e3);await X;let{data:t,error:a}=await p.rpc("press_alert",{p_alert:e});if(a)return u("send_error","erreur"),c(W(a));if(t.status==="cooldown")return u("send_error","pause"),c("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return u("send_error","interdit"),c("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(u("send_ok",t.status==="triggered"?"envoyee":"quorum_en_attente"),t.status==="triggered"){st(),m(!0);return}t.status==="pending"&&(ie[e]={count:t.count,quorum:t.quorum,until:Date.now()+t.window_s*1e3},c(`Signal enregistr\xE9 : l'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,4500),m(!0))}var ce={start(){d.onboarded=!0,V(),u("onboarding_done"),x("#/home")},"pick-visibility"(e){L={visibility:e.dataset.v},u("create_start",e.dataset.v==="public"?"publique":"privee"),x("#/create-form")},"open-share"(e){T(),L.justCreated=!1,x(`#/share/${e.dataset.id}`)},"open-join"(e){x(`#/join/${e.dataset.id}`)},join(e){let t=de();return R(e,async()=>{await X;let{error:a}=await p.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return c(W(a));c("Tu seras pr\xE9venu !"),u("join_done",e.closest(".similar")?"suggestion":"lien"),await k().catch(()=>{}),await t,await M(),x("#/alerts")})},"confirm-send"(e){je(e.dataset.id)},"send-now"(e){let t=e.dataset.id;T(),u("send_confirm"),Me(t)},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${pe} \xB7 permission : ${Notification.permission}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let s=await a.pushManager.getSubscription();if(t(`Abonnement existant : ${s?"oui":"non"}`),s){await M(),t(`Enregistrement serveur : ${S}`);return}let n=async(w,_)=>{try{let D=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_});return t(`${w} : OK (${new URL(D.endpoint).host})`),D}catch(D){return t(`${w} : \xC9CHEC ${D.name} ${D.message}`),null}};if(await n("Cl\xE9 SAYE",ue(Y))){await M(),t(`Enregistrement serveur : ${S}`);return}let l=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),f=new Uint8Array(await crypto.subtle.exportKey("raw",l.publicKey)),b=await n("Cl\xE9 de test neuve",f);b&&await b.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(e){e?.classList.add("busy");let t=document.getElementById("notif-zone");t&&(t.innerHTML='<p class="status wait" role="status">Inscription en cours\u2026</p>'),await de(),await M(),S==="ok"&&c("Notifications activ\xE9es !"),m(!0)},async"install-app"(){if(C?.prompt){C.prompt(),u("install_click");try{await C.userChoice}catch{}C=null,m(!0)}},"alert-menu"(e){let t=y.find(s=>s.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner";j(`
      <p class="sheet-title">${o(t.title)}</p>
      ${t.trigger_mode!=="owner"||t.is_owner?`<button class="sheet-item" data-action="confirm-send" data-id="${t.id}">${r("i-bell-outline")}Envoyer l'alerte maintenant</button>`:""}
      <button class="sheet-item" data-action="open-share" data-id="${t.id}">${r("i-share")}Partager l'alerte</button>
      ${a?`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="delete">${r("i-trash")}Supprimer pour tout le monde</button>`:`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="leave">${r("i-leave")}Quitter l'alerte</button>`}
      <button class="sheet-item" data-action="close-sheet">${r("i-close")}Annuler</button>`,`Options de ${t.title}`,e)},"sheet-confirm"(e){let t=y.find(n=>n.id===e.dataset.id);if(!t)return T();let a=e.dataset.kind==="delete",s=a?"sera supprim\xE9e pour tous ses membres.":t.is_owner?"restera active pour les autres membres.":"ne te pr\xE9viendra plus.";j(`
      <p class="sheet-title">${a?"Supprimer pour tout le monde ?":"Quitter l'alerte ?"}</p>
      <p class="sheet-text">\xAB ${o(t.title)} \xBB ${s}</p>
      <button class="btn danger" data-action="sheet-do" data-id="${t.id}" data-kind="${e.dataset.kind}">${a?"Supprimer":"Quitter"}</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,a?"Confirmer la suppression":"Confirmer")},"sheet-do"(e){let t=e.dataset.kind==="delete";return R(e,async()=>{let a=t?p.from("alerts").delete().eq("id",e.dataset.id):p.from("members").delete().eq("alert_id",e.dataset.id).eq("user_id",h.id),{error:s}=await a;if(T(),s)return c(W(s));c(t?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),u(t?"alert_delete":"alert_leave"),await k().catch(()=>{}),m()})},"close-sheet"(e,t){e.classList.contains("sheet")&&t.target.closest(".sheet-panel")||T()},async"show-qr"(e){j(`
      <p class="sheet-title">QR code de l'alerte</p>
      <p class="sheet-text">\xC0 scanner avec l'appareil photo pour rejoindre \xAB ${o(e.dataset.title)} \xBB.</p>
      <div class="qr" id="qr"><div class="spinner" role="status" aria-label="Cr\xE9ation du QR code"></div></div>
      <button class="btn outline" data-action="close-sheet">Fermer</button>`,"QR code");try{let t=await import("https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm"),a=await(t.default||t).toString(e.dataset.url,{type:"svg",margin:1,errorCorrectionLevel:"M",color:{dark:"#1a2414",light:"#ffffff"}}),s=document.getElementById("qr");s&&(s.innerHTML=a,s.setAttribute("role","img"),s.setAttribute("aria-label","QR code du lien de l'alerte"))}catch{let t=document.getElementById("qr");t&&(t.innerHTML='<p class="qr-msg">QR code indisponible (v\xE9rifie ta connexion).</p>')}},"find-sort"(e){q.sort=e.dataset.v,m(!0)},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),c("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}c("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else ce.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),c("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){G?.test||u("alarm_stop"),le()},"close-overlay"(){le(),m()},"test-alarm"(){u("alarm_test"),ge({test:!0})},"claim-pseudo"(e){return R(e,async()=>{try{await H(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),c("Pseudo r\xE9serv\xE9 !"),u("pseudo_claim"),m(!0)}catch(t){c(t.message,4e3)}})},"protect-pseudo"(e){return R(e,async()=>{try{await H(h.pseudo,document.getElementById("s-pass").value),c("Pseudo prot\xE9g\xE9 !"),m(!0)}catch(t){c(t.message,4e3)}})},"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();j(`
      <p class="sheet-title">Changer de pseudo ?</p>
      <p class="sheet-text">Ton pseudo deviendra \xAB ${o(t)} \xBB. Plus de changement possible pendant 30 jours.</p>
      <button class="btn" data-action="change-pseudo-ok" data-v="${o(t)}">Changer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer le changement de pseudo")},"change-pseudo-ok"(e){return R(e,async()=>{try{await H(e.dataset.v),T(),c("Pseudo chang\xE9."),m(!0)}catch(t){c(t.message,4e3)}})},"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;return!t||!a?c("Indique ton pseudo et ton mot de passe."):R(e,async()=>{let{data:s}=await p.rpc("pseudo_login_id",{p:t}),{error:n}=s?await p.auth.signInWithPassword({email:s,password:a}):{error:!0};if(n)return c("Pseudo ou mot de passe incorrect.",3500);try{localStorage.removeItem(me)}catch{}c("Connect\xE9 !"),u("pseudo_login"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)})},"reset-prefs"(){j(`
      <p class="sheet-title">Effacer tes pr\xE9f\xE9rences ?</p>
      <p class="sheet-text">Son, vibreur, flash et tri reviennent aux r\xE9glages d'origine sur ce t\xE9l\xE9phone. Tes alertes ne sont pas touch\xE9es.</p>
      <button class="btn danger" data-action="reset-prefs-ok">Effacer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer")},"reset-prefs-ok"(){d={...ne,onboarded:!0},V(),T(),m(!0),c("Pr\xE9f\xE9rences effac\xE9es.")}},Ne=0;document.addEventListener("click",e=>{let t=e.target.closest("[data-track]");if(t){let[i,l]=t.dataset.track.split(":");u(i,l||null)}let a=e.target.closest("[data-hold]");if(a){e.preventDefault(),!a.disabled&&Date.now()-Ne>1e3&&je(a.dataset.hold,a);return}let s=e.target.closest("[data-back]");if(s){e.preventDefault();let i=s.dataset.back;i==="history"&&history.length>1?history.back():x(i==="history"?"#/home":i);return}let n=e.target.closest("[data-action]");n&&ce[n.dataset.action]&&(n.tagName==="BUTTON"&&e.preventDefault(),ce[n.dataset.action](n,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,V(),t.dataset.pref==="sound"&&qe(t.value))});var Se;function nt(e){clearTimeout(Se);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}Se=setTimeout(async()=>{let{data:s}=await p.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let n=s||[];t.innerHTML=n.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${n.map(i=>`
        <div class="card">
          <div class="grow">
            <b>${o(i.title)}</b>
            <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
          </div>
          ${i.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${i.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var Ee;document.addEventListener("input",e=>{e.target.dataset.live&&Je(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&nt(e.target),e.target.id==="find-q"&&(clearTimeout(Ee),Ee=setTimeout(()=>{q.q=e.target.value.trim(),q.q&&u("find_search"),m(!0)},700))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0,a.classList.add("busy");let s=de();try{let n=String(t.get("pseudo")||"").trim();n&&!h.pseudo&&await H(n,String(t.get("password")||""));let{data:i,error:l}=await p.from("alerts").insert({title:String(t.get("title")).trim(),visibility:L.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(l)throw l;L={justCreated:!0},u("create_done",{one:"un_clic",quorum:"quorum",owner:"moi_seul"}[t.get("trigger_mode")]),x(`#/share/${i.id}`),s.then(M)}catch(n){c(n instanceof Error&&!n.code?n.message:W(n),4e3),a.disabled=!1,a.classList.remove("busy")}});var De=600,E=null;function Be(e){if(e.disabled)return;if(e.classList.contains("cooldown")){c("Alerte d\xE9j\xE0 envoy\xE9e : patiente quelques secondes.");return}if(e.classList.contains("pending")){c("Ton signal est d\xE9j\xE0 compt\xE9 : d'autres membres doivent appuyer aussi.");return}B(),e.classList.add("holding"),oe(15);let t=e.dataset.hold;E={btn:e,start:Date.now(),timer:setTimeout(()=>{E=null,e.classList.remove("holding"),oe(60),u("hold_done"),Me(t)},De)}}function B(e=!1){E&&(clearTimeout(E.timer),E.btn.classList.remove("holding"),e&&Date.now()-E.start<De&&(c("Maintiens le bouton appuy\xE9 pour envoyer l'alerte."),u("hold_short")),E=null)}document.addEventListener("pointerdown",e=>{let t=e.target.closest("[data-hold]");t&&e.button===0&&(Ne=Date.now(),Be(t))});document.addEventListener("pointerup",()=>B(!0));document.addEventListener("pointercancel",()=>B());document.addEventListener("pointerout",e=>{E&&e.target.closest?.("[data-hold]")===E.btn&&!E.btn.contains(e.relatedTarget)&&B()});document.addEventListener("contextmenu",e=>{e.target.closest?.("[data-hold]")&&e.preventDefault()});document.addEventListener("keydown",e=>{let t=e.target.closest?.("[data-hold]");if(t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||Be(t)),e.key==="Escape"&&(v.querySelector(".sheet")?T():v.innerHTML&&le()),e.key==="Tab"){let a=v.querySelector(".sheet-panel, .full");if(!a)return;let s=[...a.querySelectorAll('button, a[href], input, select, [tabindex]:not([tabindex="-1"])')].filter(l=>!l.disabled);if(!s.length)return;let n=s[0],i=s[s.length-1];a.contains(document.activeElement)?e.shiftKey&&document.activeElement===n?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),n.focus()):(e.preventDefault(),n.focus())}});document.addEventListener("keyup",e=>{e.target.closest?.("[data-hold]")&&(e.key==="Enter"||e.key===" ")&&e.preventDefault(),E&&(e.key==="Enter"||e.key===" ")&&B(!0)});setInterval(()=>{document.querySelectorAll("[data-until]").forEach(e=>{let t=Number(e.dataset.until)-Date.now(),a=e.querySelector(".hold-hint");t<=0?(e.classList.remove("cooldown","pending"),e.removeAttribute("data-until"),a&&(a.textContent=e.dataset.hint)):a&&(a.textContent=e.dataset.kind==="pending"?Re(e.dataset.prefix,t):Pe(t))})},1e3);var U=null;function ve(){U&&p.removeChannel(U),J="connecting",Q(),U=p.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===h.id)return;await k();let t=y.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&rt(t,e),u("alarm_received","app_ouverte"),ge({trigger:e,alert:t}),$.name==="alerts"&&m(!0))}).subscribe(e=>{J=e==="SUBSCRIBED"?"ok":"connecting",Q()})}window.addEventListener("offline",Q);window.addEventListener("online",()=>{Q(),h&&(ve(),k().then(()=>{$.name==="alerts"&&m(!0)}).catch(()=>{}))});document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||!h||((J!=="ok"||U?.state!=="joined")&&ve(),k().then(e=>{e&&$.name==="alerts"&&m(!0)}).catch(()=>{}))});async function it(e){let{data:t}=await p.rpc("recent_trigger",{p_trigger:e});if(!t)return;await k();let a=y.find(s=>s.id===t.alert_id);a&&(u("alarm_received","notification"),ge({trigger:t,alert:a}))}function ue(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var S="",z=!1;async function M(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return S="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return S="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return S="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return S="Notifications pas encore autoris\xE9es.";let e=t=>{let a=t.toJSON();return p.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:h.id,p256dh:a.keys.p256dh,auth:a.keys.auth})};try{let t=await navigator.serviceWorker.ready,a=await t.pushManager.getSubscription();a||(a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ue(Y)}));let{error:s}=await e(a);if(s&&(await a.unsubscribe(),a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ue(Y)}),{error:s}=await e(a)),s)throw new Error(`enregistrement : ${s.message}`);return z=!1,S="ok"}catch(t){return console.warn("push",t),z=t?.name==="AbortError"&&/push service/i.test(t?.message||""),S=`\xC9chec de l'inscription : ${t?.name||""} ${t?.message||t}`.trim()}}function de(){return!("Notification"in window)||Notification.permission!=="default"?Promise.resolve(Notification?.permission):(u("notif_prompt"),Notification.requestPermission().then(e=>(u(e==="granted"?"notif_granted":"notif_denied"),e)))}async function rt(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),s={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,s):new Notification(`ALERTE ! ${e.title}`,s)}var ot={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},$={name:"splash"},O=0;function lt(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,s]=e.split("/");return{name:g[a]?a:"home",id:s,query:new URLSearchParams(t||"")}}async function m(e=!1){let t=++O,a=$.name;$=lt(),$.name!==a&&($.name==="join"&&u("join_view"),$.name==="find"&&u("find_view"));let s=$,n=!["splash","intro"].includes(s.name);ye.hidden=!n,document.body.classList.toggle("no-tabbar",!n),ye.querySelectorAll("a").forEach(l=>{let f=l.dataset.tab===ot[s.name];l.classList.toggle("on",f),f?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")});let i=e?null:setTimeout(()=>{t===O&&(A.innerHTML='<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span class="sr-only">Chargement\u2026</span></div>')},250);try{["splash","intro","home","alerts","legal"].includes(s.name)||await X;let l=await g[s.name](s);if(clearTimeout(i),t!==O)return;let f=document.activeElement?.id,b=document.activeElement?.selectionStart,w=e&&A.contains(document.activeElement)?Ie(document.activeElement):null;if(A.innerHTML=l,w?.sel&&document.querySelector(w.sel)?.focus({preventScroll:!0}),e||(A.classList.remove("enter"),A.offsetWidth,A.classList.add("enter")),f==="find-q"){let _=document.getElementById("find-q");_?.focus(),_&&b!=null&&_.setSelectionRange(b,b)}s.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||(window.scrollTo(0,0),v.innerHTML||A.querySelector("h1")?.focus({preventScroll:!0}))}catch(l){clearTimeout(i),console.error(l),u("load_error",s.name.replace(/[^a-z]/g,"").slice(0,20)||null),t===O&&(A.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>m());async function ct(){if("serviceWorker"in navigator){let a=!!navigator.serviceWorker.controller,s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a&&!s&&!G&&(s=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(n=>{n.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&n.update().catch(()=>{})})}).catch(()=>{})}let e=!location.hash||location.hash==="#/"||location.hash==="#/splash";e&&!d.onboarded?location.replace("#/splash"):location.hash.startsWith("#/join/")&&!d.onboarded&&(d.onboarded=!0,V()),u("app_open",ee?"installee":"navigateur");let t=Ue();Array.isArray(t?.alerts)&&(y=t.alerts,F=!0,K=Date.now()),e&&d.onboarded&&F?location.replace(y.length?"#/alerts":"#/home"):e&&d.onboarded||m();try{await We(),p.rpc("touch_my_alerts");let[,a]=await Promise.all([Te(),k().catch(()=>!1)]);ve(),M().then(()=>{let s=be();u("push_state",s.ok?"ok":{off:"non_demande",denied:"bloque",failed:"echec",unsupported:"non_supporte"}[s.code]||null),["alerts","settings"].includes($.name)&&m(!0)}),e&&d.onboarded&&!t?location.replace(y.length?"#/alerts":"#/home"):a&&["alerts","home"].includes($.name)&&m(!0)}catch(a){console.error(a),A.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>'}}ct();
