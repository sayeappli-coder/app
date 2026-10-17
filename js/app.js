import{createClient as Ne}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var me="https://xtyysubdpapuxjlynapp.supabase.co",fe="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",B="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var u=Ne(me,fe,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),S=document.getElementById("app"),v=document.getElementById("overlay"),he=document.getElementById("tabbar"),G=document.getElementById("toast"),we="0.11",Ee="saye.prefs",X={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1};function Be(){try{return{...X,...JSON.parse(localStorage.getItem(Ee)||"{}")}}catch{return{...X}}}function U(){try{localStorage.setItem(Ee,JSON.stringify(d))}catch{}}var d=Be();["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var m=null,y=[],C={},re=null,V=!1,be="",F=0,Z={},Se,Q=new Promise(e=>{Se=e}),oe="saye.cache";function Ye(){try{return JSON.parse(localStorage.getItem(oe)||"null")}catch{return null}}function Oe(){try{localStorage.setItem(oe,JSON.stringify({alerts:y}))}catch{}}var ge={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},o=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),r=(e,t="")=>`<svg class="${t}" aria-hidden="true" focusable="false"><use href="#${e}"/></svg>`;function l(e,t=2600){G.textContent=e,G.hidden=!1,clearTimeout(l.t),l.t=setTimeout(()=>{G.hidden=!0},t)}function A(e){location.hash=e}function M(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${r("i-back")}</button>
    <h1 tabindex="-1">${o(e)}</h1>
  </div>`}var z=e=>`<h1 tabindex="-1">${o(e)}</h1>`;function le(e){let t=ge[e]||ge.a_confirmer;return`<span class="rel ${e}">${t.icon?r(t.icon):`<b aria-hidden="true">${t.mark}</b>`} ${t.label}</span>`}function He(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function K(e){let t=e?.message||String(e);return!navigator.onLine||/Failed to fetch|NetworkError|Load failed/i.test(t)?"Pas de connexion : r\xE9essaie quand le r\xE9seau revient.":t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var L=null,ee=null;function Ae(e=d.sound,t=!1){if(_e(),e!=="aucun")try{L=L||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},s=a[e]||a.court,n=()=>{let c=L.currentTime;for(let[f,b]of s){if(f){let g=L.createOscillator(),x=L.createGain();g.type=e==="sirene"?"sawtooth":"sine",g.frequency.value=f,x.gain.setValueAtTime(1e-4,c),x.gain.exponentialRampToValueAtTime(.35,c+.02),x.gain.exponentialRampToValueAtTime(1e-4,c+b),g.connect(x).connect(L.destination),g.start(c),g.stop(c+b)}c+=b}return s.reduce((f,[,b])=>f+b,0)},i=n();t&&(ee=setInterval(n,(i+.6)*1e3))}catch{}}function _e(){clearInterval(ee),ee=null}function te(e){d.vibrate&&navigator.vibrate&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate(e)}function Ue(){te([400,150,400,150,800])}async function Ve(){let{data:{session:e}}=await u.auth.getSession();if(e){let{error:t}=await u.auth.getUser();t&&(await u.auth.signOut({scope:"local"}),e=null)}if(!e){let{data:t,error:a}=await u.auth.signInAnonymously();if(a)throw a;e=t.session}m={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},Se()}async function xe(){let{data:e}=await u.rpc("my_account");e&&Object.assign(m,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function E(){await Q;let{data:e,error:t}=await u.rpc("my_alerts");if(t)throw t;let a=JSON.stringify((e||[]).map(({cooldown_left_s:n,cooldown_until:i,...c})=>({...c,cool:n>0}))),s=a!==be;return be=a,F=Date.now(),y=(e||[]).map(n=>({...n,_coolUntil:n.cooldown_left_s>0?F+n.cooldown_left_s*1e3:0})),V=!0,Oe(),s}var ke={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function O(e,t){let{data:a,error:s}=await u.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(s){let n="serveur";try{n=(await s.context.json()).error||n}catch{}throw new Error(ke[n]||"Oups, une erreur est survenue. R\xE9essaie.")}return await xe(),a}var ve;function Fe(e,t){clearTimeout(ve);let a=e.value.trim();if(t){if(!a||a===m.pseudo){t.textContent="";return}ve=setTimeout(async()=>{let{data:s}=await u.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=s?ke[s]:"\u2713 Pseudo disponible",t.className=`hint ${s?"err":"ok"}`)},400)}}var Ke=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),h={};h.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&A(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${r("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);h.intro=()=>`
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
  <button class="btn" data-action="start">Commencer</button>`;h.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${r("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  <h1 tabindex="-1">Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${r("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${r("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${y.length?`<a class="btn outline" href="#/alerts">Mes alertes (${y.length})</a>`:""}`;h.create=()=>`
  ${z("Cr\xE9er une alerte")}
  <p class="lead-text">Qui pourra la rejoindre ?</p>
  <button class="choice stack" data-action="pick-visibility" data-v="public">
    <div class="head">${r("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${r("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Pour mon cercle : je la partage avec qui je veux, et un seul appui pr\xE9vient tout le monde. Mes invit\xE9s peuvent inviter \xE0 leur tour.</span>
  </button>`;h["create-form"]=()=>{if(!C.visibility)return setTimeout(()=>A("#/create")),"";let e=C.visibility==="public",t=e?"quorum":"one";return`
  ${M(e?"Nouvelle alerte publique":"Nouvelle alerte priv\xE9e","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Ex. : Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar" aria-live="polite"></div>

    ${m.pseudo?`
    <label class="field" for="f-me">Pseudo</label>
    <input id="f-me" type="text" value="${o(m.pseudo)}" readonly>`:`
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
  </form>`};h.share=async({id:e})=>{await E();let t=y.find(f=>f.id===e);if(!t)return`${M("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:f}=await u.rpc("get_invite_code",{p_alert:e});a=f}let s=He(t,a),n=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,i=encodeURIComponent(`${n} ${s}`),c=!!C.justCreated;return`
  ${M("Invite tes proches","#/alerts")}
  ${c?`<div class="success" role="status">${r("i-check")}<span>Alerte cr\xE9\xE9e ! Partage-la pour que tes proches soient pr\xE9venus.</span></div>`:""}
  <p class="lead-text">Plus il y a de monde, plus l'alerte est efficace.</p>
  <div class="pill-title">${r("i-bell-outline")}${o(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-url="${o(s)}">${r("i-link")}Copier le lien</button>
    <a href="sms:?&body=${i}">${r("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${i}" target="_blank" rel="noopener">${r("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-url="${o(s)}">${r("i-chat")}Signal</a>
    <a href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${i}">${r("i-mail")}E-mail</a>
    <button data-action="native-share" data-url="${o(s)}" data-text="${o(n)}">${r("i-dots")}Autres\u2026</button>
    <button class="wide" data-action="show-qr" data-url="${o(s)}" data-title="${o(t.title)}">${r("i-qr")}Afficher le QR code</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts">${c?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};h.alerts=async()=>{V?Date.now()-F>15e3&&E().then(s=>{s&&_.name==="alerts"&&p(!0)}).catch(()=>{}):await E();let e=Qe([...y]),t=`
  <div class="brandbar compact">
    <a class="brand" href="#/home" aria-label="Accueil SAYE">${r("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  ${z("Mes alertes")}`;if(!e.length)return`${t}
      <div class="emptystate">${r("i-bell-outline")}<b>Aucune alerte pour l'instant</b>
        <p>Cr\xE9e ton alerte et partage-la, ou rejoins une alerte de la communaut\xE9.</p></div>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let a=Date.now();return`${t}
  ${Ge()}
  ${qe()}
  <div class="grid ${e.length===1?"single":""}">
    ${e.map(s=>We(s,a)).join("")}
  </div>
  <p class="footnote">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>`};var J="connecting";function qe(){return navigator.onLine?J==="ok"?'<div id="veille" class="veille" role="status"><span class="dot" aria-hidden="true"></span>En veille : tu seras pr\xE9venu \xE0 la seconde</div>':'<div id="veille" class="veille wait" role="status"><span class="dot" aria-hidden="true"></span>Connexion en cours\u2026</div>':`<div id="veille" class="veille off" role="status"><span class="dot" aria-hidden="true"></span>Hors connexion : tu ne seras pas pr\xE9venu tant que le r\xE9seau n'est pas revenu</div>`}function W(){let e=document.getElementById("veille");e&&(e.outerHTML=qe())}var Te=e=>`Envoy\xE9e \xB7 disponible dans ${Math.max(1,Math.ceil(e/1e3))} s`,Ce=(e,t)=>`${e} \xB7 encore ${Math.max(1,Math.ceil(t/1e3))} s`;function Je(e){return e.trigger_mode==="owner"&&!e.is_owner?"Seul le cr\xE9ateur d\xE9clenche":e.trigger_mode==="quorum"?"Maintiens appuy\xE9 quand tu le vois":"Maintiens appuy\xE9 d\xE8s que \xE7a arrive"}function We(e,t){let a=e._coolUntil>t,s=Z[e.id],n=!a&&s&&s.until>t;s&&!n&&delete Z[e.id];let i=a?e._coolUntil:n?s.until:0,c=e.trigger_mode!=="owner"||e.is_owner,f=Je(e),b=n?`Signal envoy\xE9 \xB7 ${s.count} sur ${s.quorum}`:"",g=a?Te(i-t):n?Ce(b,i-t):f,x=c?`${e.title} : maintenir appuy\xE9 pour envoyer l'alerte`:`${e.title} : ${f}`;return`<div class="tile">
    <button class="alarm-btn ${a?"cooldown":n?"pending":""}" data-hold="${e.id}" data-hint="${o(f)}"
      ${i?`data-until="${i}" data-kind="${a?"cool":"pending"}" data-prefix="${o(b)}"`:""} ${c?"":"disabled"} aria-label="${o(x)}">
      ${r("i-bell")}<strong>${o(e.title)}</strong><span class="hold-hint">${o(g)}</span>
    </button>
    <div class="tile-foot">
      <div><div class="tile-meta">${e.visibility==="private"?"Priv\xE9e":"Publique"}</div>${le(e.reliability)}</div>
      <div class="tile-actions">
        <button data-action="open-share" data-id="${e.id}" aria-label="Partager \xAB ${o(e.title)} \xBB">${r("i-share")}</button>
        <button data-action="alert-menu" data-id="${e.id}" aria-label="Options de \xAB ${o(e.title)} \xBB">${r("i-dots")}</button>
      </div>
    </div>
  </div>`}function Qe(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var ce=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ue=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,T=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),T=e,_.name==="join"&&p(!0)});window.addEventListener("appinstalled",()=>{T=null});function ze(){return ue?"":ce?`<div class="install">
      <b>Pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e, installe SAYE :</b>
      <ol>
        <li>${r("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari</span></li>
        <li>${r("i-add-square")}<span>Choisis <b>Sur l'\xE9cran d'accueil</b>, puis ouvre SAYE depuis l'ic\xF4ne</span></li>
      </ol>
    </div>`:T?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function Le(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:w==="ok"?{ok:!0,text:"Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:w?{code:"failed",text:"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function Ge(){if(ce&&!ue)return`<div class="alertbox">${r("i-bell-off")}<div><b>Installe SAYE pour \xEAtre pr\xE9venu app ferm\xE9e</b>
      Sur iPhone : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB, et ouvre SAYE depuis l'ic\xF4ne.</div></div>`;let e=Le(),a={off:["Active les notifications","Sinon, tu ne seras pas pr\xE9venu quand l'app est ferm\xE9e.","Activer"],denied:["Notifications bloqu\xE9es","Autorise-les pour SAYE dans les r\xE9glages de ton navigateur, sinon tu ne seras pas pr\xE9venu app ferm\xE9e.",null],failed:["Notifications \xE0 r\xE9parer","Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.","R\xE9parer"]}[e.code];return a?`<div class="alertbox" role="alert">${r("i-bell-off")}<div><b>${a[0]}</b>${a[1]}
    ${a[2]?`<button class="btn small" data-action="fix-notif">${a[2]}</button>`:""}</div></div>`:""}function Xe(){if(ce&&!ue)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=Le(),t=e.ok?"ok":e.code==="pending"?"wait":"err",a=e.ok?r("i-check"):e.code==="pending"?"":r("i-bell-off");return`<p id="notif-status" class="status ${t}">${a}<span>${o(e.text)}</span></p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}`}var q={q:"",sort:"populaires"};h.find=async()=>{let{data:e,error:t}=await u.rpc("find_alerts",{p_query:q.q,p_category:null,p_sort:q.sort});if(t)throw t;let a=e||[],s=(i,c)=>`<button data-action="find-sort" data-v="${i}" aria-pressed="${q.sort===i}">${c}</button>`,n=q.q?`<div class="emptystate">${r("i-search")}<b>Aucun r\xE9sultat</b><p>Aucune alerte publique ne correspond \xE0 \xAB ${o(q.q)} \xBB.</p></div>`:`<div class="emptystate">${r("i-globe")}<b>Aucune alerte publique pour l'instant</b><p>Cr\xE9e la premi\xE8re : toute la communaut\xE9 pourra la rejoindre.</p></div>`;return`
  ${z("Choisir une alerte")}
  <div class="search">${r("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" aria-label="Rechercher une alerte" value="${o(q.q)}"></div>
  <div class="segmented" role="group" aria-label="Trier les alertes">${s("populaires","Populaires")}${s("recentes","R\xE9centes")}</div>
  ${a.length?`<div class="list">${a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${o(i.title)}</b>
          <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${le(i.reliability)}
      </button>`).join("")}</div>`:n}
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};h.join=async({id:e,query:t})=>{let a=t.get("c"),{data:s,error:n}=await u.rpc("get_alert_preview",{p_alert:e,p_code:a});return n||!s?`${M("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${M("Rejoindre une alerte","#/home")}
  <div class="pill-title">${r(s.visibility==="private"?"i-lock":"i-globe")}${o(s.title)}</div>
  <p class="body-lg">
    ${s.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${o(s.owner_pseudo||"Anonyme")}</b>
  </p>
  ${le(s.reliability)}
  <div class="grow"></div>
  ${ze()}
  ${s.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${s.id}" data-code="${o(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};h.alarm=async({id:e})=>(setTimeout(()=>at(Number(e))),h.alerts());h.settings=()=>`
  ${z("R\xE9glages")}
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
    <div id="notif-zone">${Xe()}</div>
    <details>
      <summary class="muted">D\xE9tails techniques</summary>
      <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
      <pre id="diag" class="diag" aria-live="polite"></pre>
    </details>
  </section>

  <section class="group" aria-labelledby="g-pseudo">
    <h2 id="g-pseudo">Mon pseudo</h2>
    ${Ze()}
  </section>

  <section class="group" aria-labelledby="g-apropos">
    <h2 id="g-apropos">\xC0 propos</h2>
    <div class="note info">${r("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
    <button class="link-btn" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
    <p class="version">Version ${we}</p>
  </section>`;function Ze(){let e=`
    <details class="mt-10">
      <summary>J'ai d\xE9j\xE0 un pseudo (autre t\xE9l\xE9phone)</summary>
      <input id="l-pseudo" type="text" maxlength="24" placeholder="Mon pseudo" aria-label="Mon pseudo" autocomplete="username" class="mt-10">
      <input id="l-pass" type="password" placeholder="Mot de passe" aria-label="Mot de passe" autocomplete="current-password" class="mt-8">
      <p class="hint">Les alertes rejointes sur ce t\xE9l\xE9phone sans pseudo ne seront pas reprises.</p>
      <button class="btn small" data-action="login-pseudo">Me connecter</button>
    </details>`;if(!m.pseudo)return`
  <label class="sr-only" for="s-pseudo">Pseudo</label>
  <p class="note-muted">Tu es anonyme. R\xE9serve un pseudo pour \xEAtre reconnu et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="s-pseudo-check">
  <p id="s-pseudo-check" class="hint"></p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <p class="hint">Le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>
  <button class="btn small" data-action="claim-pseudo">R\xE9server mon pseudo</button>
  ${e}`;if(!m.hasPassword)return`
  <p class="pseudo-name">${o(m.pseudo)}</p>
  <p class="hint warn">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!m.canChangeAt||new Date(m.canChangeAt)<=new Date;return`
  <p class="pseudo-name">${o(m.pseudo)} \u2713</p>
  <p class="note-muted m0">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details class="mt-10">
    <summary>Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" aria-label="Nouveau pseudo" data-live="s-pseudo-check" class="mt-10">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${Ke(m.canChangeAt)}.</p>`}
  ${e}`}h.legal=()=>`
  ${M("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function de({trigger:e,alert:t,test:a=!1}){re={triggerId:e?.id,alertId:t?.id,test:a},v.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-modal="true" aria-labelledby="alarm-title" aria-describedby="alarm-desc">
      <div class="kicker" aria-hidden="true">ALERTE !</div>
      ${r("i-bell","big")}
      <h2 id="alarm-title">Alerte : ${o(t?.title||"Test de ton alerte")}</h2>
      <div class="by" id="alarm-desc">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,v.querySelector("[data-action=stop-alarm]")?.focus(),Ae(d.sound,!0),Ue()}function ae(){_e(),navigator.vibrate&&navigator.userActivation?.hasBeenActive&&navigator.vibrate(0),v.innerHTML="",re=null}function et(){v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      ${r("i-bell","mid")}
      <h1 id="thanks-title">Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`,v.querySelector("[data-action=close-overlay]")?.focus()}var R=null;function Pe(e){if(!e||e===document.body)return null;let t=e.dataset?.hold?`[data-hold="${e.dataset.hold}"]`:e.dataset?.action&&e.dataset?.id?`[data-action="${e.dataset.action}"][data-id="${e.dataset.id}"]`:null;return{el:e,sel:t}}function I(e,t,a=document.activeElement){v.querySelector(".sheet")||(R=Pe(a)),v.innerHTML=`<div class="sheet" data-action="close-sheet">
    <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="${o(t)}">
      <div class="sheet-grip" aria-hidden="true"></div>${e}
    </div></div>`,v.querySelector(".sheet-panel button, .sheet-panel a")?.focus()}function k(){if(!v.querySelector(".sheet"))return;v.innerHTML="",(R?.el?.isConnected?R.el:R?.sel&&document.querySelector(R.sel))?.focus(),R=null}function Re(e,t){let a=y.find(s=>s.id===e);if(a){if(a.trigger_mode==="owner"&&!a.is_owner)return l("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");I(`
    <p class="sheet-title">Envoyer l'alerte ?</p>
    <p class="sheet-text">\xAB ${o(a.title)} \xBB : ${a.trigger_mode==="quorum"?"ton signal sera compt\xE9.":"tous les membres seront pr\xE9venus."}</p>
    <button class="btn" data-action="send-now" data-id="${a.id}">Envoyer maintenant</button>
    <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer l'envoi",t)}}async function P(e,t){if(!(!e||e.disabled)){e.disabled=!0,e.classList.add("busy"),e.setAttribute("aria-busy","true");try{return await t()}finally{e.isConnected&&(e.disabled=!1,e.classList.remove("busy"),e.removeAttribute("aria-busy"))}}}async function Ie(e){if(!navigator.onLine)return l("Pas de connexion : l'alerte n'a pas \xE9t\xE9 envoy\xE9e.",4e3);await Q;let{data:t,error:a}=await u.rpc("press_alert",{p_alert:e});if(a)return l(K(a));if(t.status==="cooldown")return l("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return l("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(t.status==="triggered"){et(),p(!0);return}t.status==="pending"&&(Z[e]={count:t.count,quorum:t.quorum,until:Date.now()+t.window_s*1e3},l(`Signal enregistr\xE9 : l'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,4500),p(!0))}var se={start(){d.onboarded=!0,U(),A("#/home")},"pick-visibility"(e){C={visibility:e.dataset.v},A("#/create-form")},"open-share"(e){k(),C.justCreated=!1,A(`#/share/${e.dataset.id}`)},"open-join"(e){A(`#/join/${e.dataset.id}`)},join(e){let t=ie();return P(e,async()=>{await Q;let{error:a}=await u.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return l(K(a));l("Tu seras pr\xE9venu !"),await E().catch(()=>{}),await t,await D(),A("#/alerts")})},"confirm-send"(e){Re(e.dataset.id)},"send-now"(e){let t=e.dataset.id;k(),Ie(t)},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${we} \xB7 permission : ${Notification.permission}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let s=await a.pushManager.getSubscription();t(`Abonnement existant : ${s?"oui":"non"}`),s&&(await s.unsubscribe(),t("\u2192 supprim\xE9"));let n=async(g,x)=>{try{let j=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:x});return t(`${g} : OK (${new URL(j.endpoint).host})`),j}catch(j){return t(`${g} : \xC9CHEC ${j.name} ${j.message}`),null}};if(await n("Cl\xE9 SAYE",ne(B))){await D(),t(`Enregistrement serveur : ${w}`);return}let c=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),f=new Uint8Array(await crypto.subtle.exportKey("raw",c.publicKey)),b=await n("Cl\xE9 de test neuve",f);b&&await b.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(e){e?.classList.add("busy");let t=document.getElementById("notif-zone");t&&(t.innerHTML='<p class="status wait" role="status">Inscription en cours\u2026</p>'),await ie(),await D(),w==="ok"&&l("Notifications activ\xE9es !"),p(!0)},async"install-app"(){if(T?.prompt){T.prompt();try{await T.userChoice}catch{}T=null,p(!0)}},"alert-menu"(e){let t=y.find(s=>s.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner";I(`
      <p class="sheet-title">${o(t.title)}</p>
      ${t.trigger_mode!=="owner"||t.is_owner?`<button class="sheet-item" data-action="confirm-send" data-id="${t.id}">${r("i-bell-outline")}Envoyer l'alerte maintenant</button>`:""}
      <button class="sheet-item" data-action="open-share" data-id="${t.id}">${r("i-share")}Partager l'alerte</button>
      ${a?`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="delete">${r("i-trash")}Supprimer pour tout le monde</button>`:`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="leave">${r("i-leave")}Quitter l'alerte</button>`}
      <button class="sheet-item" data-action="close-sheet">${r("i-close")}Annuler</button>`,`Options de ${t.title}`,e)},"sheet-confirm"(e){let t=y.find(n=>n.id===e.dataset.id);if(!t)return k();let a=e.dataset.kind==="delete",s=a?"sera supprim\xE9e pour tous ses membres.":t.is_owner?"restera active pour les autres membres.":"ne te pr\xE9viendra plus.";I(`
      <p class="sheet-title">${a?"Supprimer pour tout le monde ?":"Quitter l'alerte ?"}</p>
      <p class="sheet-text">\xAB ${o(t.title)} \xBB ${s}</p>
      <button class="btn danger" data-action="sheet-do" data-id="${t.id}" data-kind="${e.dataset.kind}">${a?"Supprimer":"Quitter"}</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,a?"Confirmer la suppression":"Confirmer")},"sheet-do"(e){let t=e.dataset.kind==="delete";return P(e,async()=>{let a=t?u.from("alerts").delete().eq("id",e.dataset.id):u.from("members").delete().eq("alert_id",e.dataset.id).eq("user_id",m.id),{error:s}=await a;if(k(),s)return l(K(s));l(t?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),await E().catch(()=>{}),p()})},"close-sheet"(e,t){e.classList.contains("sheet")&&t.target.closest(".sheet-panel")||k()},async"show-qr"(e){I(`
      <p class="sheet-title">QR code de l'alerte</p>
      <p class="sheet-text">\xC0 scanner avec l'appareil photo pour rejoindre \xAB ${o(e.dataset.title)} \xBB.</p>
      <div class="qr" id="qr"><div class="spinner" role="status" aria-label="Cr\xE9ation du QR code"></div></div>
      <button class="btn outline" data-action="close-sheet">Fermer</button>`,"QR code");try{let t=await import("https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm"),a=await(t.default||t).toString(e.dataset.url,{type:"svg",margin:1,errorCorrectionLevel:"M",color:{dark:"#1a2414",light:"#ffffff"}}),s=document.getElementById("qr");s&&(s.innerHTML=a,s.setAttribute("role","img"),s.setAttribute("aria-label","QR code du lien de l'alerte"))}catch{let t=document.getElementById("qr");t&&(t.innerHTML='<p class="qr-msg">QR code indisponible (v\xE9rifie ta connexion).</p>')}},"find-sort"(e){q.sort=e.dataset.v,p(!0)},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),l("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}l("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else se.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),l("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){ae()},"close-overlay"(){ae(),p()},"test-alarm"(){de({test:!0})},"claim-pseudo"(e){return P(e,async()=>{try{await O(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),l("Pseudo r\xE9serv\xE9 !"),p(!0)}catch(t){l(t.message,4e3)}})},"protect-pseudo"(e){return P(e,async()=>{try{await O(m.pseudo,document.getElementById("s-pass").value),l("Pseudo prot\xE9g\xE9 !"),p(!0)}catch(t){l(t.message,4e3)}})},"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();I(`
      <p class="sheet-title">Changer de pseudo ?</p>
      <p class="sheet-text">Ton pseudo deviendra \xAB ${o(t)} \xBB. Plus de changement possible pendant 30 jours.</p>
      <button class="btn" data-action="change-pseudo-ok" data-v="${o(t)}">Changer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer le changement de pseudo")},"change-pseudo-ok"(e){return P(e,async()=>{try{await O(e.dataset.v),k(),l("Pseudo chang\xE9."),p(!0)}catch(t){l(t.message,4e3)}})},"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;return!t||!a?l("Indique ton pseudo et ton mot de passe."):P(e,async()=>{let{data:s}=await u.rpc("pseudo_login_id",{p:t}),{error:n}=s?await u.auth.signInWithPassword({email:s,password:a}):{error:!0};if(n)return l("Pseudo ou mot de passe incorrect.",3500);try{localStorage.removeItem(oe)}catch{}l("Connect\xE9 !"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)})},"reset-prefs"(){I(`
      <p class="sheet-title">Effacer tes pr\xE9f\xE9rences ?</p>
      <p class="sheet-text">Son, vibreur, flash et tri reviennent aux r\xE9glages d'origine sur ce t\xE9l\xE9phone. Tes alertes ne sont pas touch\xE9es.</p>
      <button class="btn danger" data-action="reset-prefs-ok">Effacer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer")},"reset-prefs-ok"(){d={...X,onboarded:!0},U(),k(),p(!0),l("Pr\xE9f\xE9rences effac\xE9es.")}},Me=0;document.addEventListener("click",e=>{let t=e.target.closest("[data-hold]");if(t){e.preventDefault(),!t.disabled&&Date.now()-Me>1e3&&Re(t.dataset.hold,t);return}let a=e.target.closest("[data-back]");if(a){e.preventDefault();let n=a.dataset.back;n==="history"&&history.length>1?history.back():A(n==="history"?"#/home":n);return}let s=e.target.closest("[data-action]");s&&se[s.dataset.action]&&(s.tagName==="BUTTON"&&e.preventDefault(),se[s.dataset.action](s,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,U(),t.dataset.pref==="sound"&&Ae(t.value))});var ye;function tt(e){clearTimeout(ye);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}ye=setTimeout(async()=>{let{data:s}=await u.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let n=s||[];t.innerHTML=n.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${n.map(i=>`
        <div class="card">
          <div class="grow">
            <b>${o(i.title)}</b>
            <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
          </div>
          ${i.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${i.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var $e;document.addEventListener("input",e=>{e.target.dataset.live&&Fe(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&tt(e.target),e.target.id==="find-q"&&(clearTimeout($e),$e=setTimeout(()=>{q.q=e.target.value.trim(),p(!0)},350))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0,a.classList.add("busy");let s=ie();try{let n=String(t.get("pseudo")||"").trim();n&&!m.pseudo&&await O(n,String(t.get("password")||""));let{data:i,error:c}=await u.from("alerts").insert({title:String(t.get("title")).trim(),visibility:C.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(c)throw c;C={justCreated:!0},A(`#/share/${i.id}`),s.then(D)}catch(n){l(n instanceof Error&&!n.code?n.message:K(n),4e3),a.disabled=!1,a.classList.remove("busy")}});var je=600,$=null;function De(e){if(e.disabled)return;if(e.classList.contains("cooldown")){l("Alerte d\xE9j\xE0 envoy\xE9e : patiente quelques secondes.");return}if(e.classList.contains("pending")){l("Ton signal est d\xE9j\xE0 compt\xE9 : d'autres membres doivent appuyer aussi.");return}N(),e.classList.add("holding"),te(15);let t=e.dataset.hold;$={btn:e,start:Date.now(),timer:setTimeout(()=>{$=null,e.classList.remove("holding"),te(60),Ie(t)},je)}}function N(e=!1){$&&(clearTimeout($.timer),$.btn.classList.remove("holding"),e&&Date.now()-$.start<je&&l("Maintiens le bouton appuy\xE9 pour envoyer l'alerte."),$=null)}document.addEventListener("pointerdown",e=>{let t=e.target.closest("[data-hold]");t&&e.button===0&&(Me=Date.now(),De(t))});document.addEventListener("pointerup",()=>N(!0));document.addEventListener("pointercancel",()=>N());document.addEventListener("pointerout",e=>{$&&e.target.closest?.("[data-hold]")===$.btn&&!$.btn.contains(e.relatedTarget)&&N()});document.addEventListener("contextmenu",e=>{e.target.closest?.("[data-hold]")&&e.preventDefault()});document.addEventListener("keydown",e=>{let t=e.target.closest?.("[data-hold]");if(t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||De(t)),e.key==="Escape"&&(v.querySelector(".sheet")?k():v.innerHTML&&ae()),e.key==="Tab"){let a=v.querySelector(".sheet-panel, .full");if(!a)return;let s=[...a.querySelectorAll('button, a[href], input, select, [tabindex]:not([tabindex="-1"])')].filter(c=>!c.disabled);if(!s.length)return;let n=s[0],i=s[s.length-1];a.contains(document.activeElement)?e.shiftKey&&document.activeElement===n?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),n.focus()):(e.preventDefault(),n.focus())}});document.addEventListener("keyup",e=>{e.target.closest?.("[data-hold]")&&(e.key==="Enter"||e.key===" ")&&e.preventDefault(),$&&(e.key==="Enter"||e.key===" ")&&N(!0)});setInterval(()=>{document.querySelectorAll("[data-until]").forEach(e=>{let t=Number(e.dataset.until)-Date.now(),a=e.querySelector(".hold-hint");t<=0?(e.classList.remove("cooldown","pending"),e.removeAttribute("data-until"),a&&(a.textContent=e.dataset.hint)):a&&(a.textContent=e.dataset.kind==="pending"?Ce(e.dataset.prefix,t):Te(t))})},1e3);var H=null;function pe(){H&&u.removeChannel(H),J="connecting",W(),H=u.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===m.id)return;await E();let t=y.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&st(t,e),de({trigger:e,alert:t}),_.name==="alerts"&&p(!0))}).subscribe(e=>{J=e==="SUBSCRIBED"?"ok":"connecting",W()})}window.addEventListener("offline",W);window.addEventListener("online",()=>{W(),m&&(pe(),E().then(()=>{_.name==="alerts"&&p(!0)}).catch(()=>{}))});document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||!m||((J!=="ok"||H?.state!=="joined")&&pe(),E().then(e=>{e&&_.name==="alerts"&&p(!0)}).catch(()=>{}))});async function at(e){let{data:t}=await u.rpc("recent_trigger",{p_trigger:e});if(!t)return;await E();let a=y.find(s=>s.id===t.alert_id);a&&de({trigger:t,alert:a})}function ne(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var w="";async function D(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return w="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return w="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return w="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return w="Notifications pas encore autoris\xE9es.";let e=t=>{let a=t.toJSON();return u.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:m.id,p256dh:a.keys.p256dh,auth:a.keys.auth})};try{let t=await navigator.serviceWorker.ready,a=await t.pushManager.getSubscription();a||(a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ne(B)}));let{error:s}=await e(a);if(s&&(await a.unsubscribe(),a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ne(B)}),{error:s}=await e(a)),s)throw new Error(`enregistrement : ${s.message}`);return w="ok"}catch(t){return console.warn("push",t),w=`\xC9chec de l'inscription : ${t?.name||""} ${t?.message||t}`.trim()}}function ie(){return!("Notification"in window)||Notification.permission!=="default"?Promise.resolve(Notification?.permission):Notification.requestPermission()}async function st(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),s={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,s):new Notification(`ALERTE ! ${e.title}`,s)}var nt={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},_={name:"splash"},Y=0;function it(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,s]=e.split("/");return{name:h[a]?a:"home",id:s,query:new URLSearchParams(t||"")}}async function p(e=!1){let t=++Y;_=it();let a=_,s=!["splash","intro"].includes(a.name);he.hidden=!s,document.body.classList.toggle("no-tabbar",!s),he.querySelectorAll("a").forEach(i=>{let c=i.dataset.tab===nt[a.name];i.classList.toggle("on",c),c?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")});let n=e?null:setTimeout(()=>{t===Y&&(S.innerHTML='<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span class="sr-only">Chargement\u2026</span></div>')},250);try{["splash","intro","home","alerts","legal"].includes(a.name)||await Q;let i=await h[a.name](a);if(clearTimeout(n),t!==Y)return;let c=document.activeElement?.id,f=document.activeElement?.selectionStart,b=e&&S.contains(document.activeElement)?Pe(document.activeElement):null;if(S.innerHTML=i,b?.sel&&document.querySelector(b.sel)?.focus({preventScroll:!0}),e||(S.classList.remove("enter"),S.offsetWidth,S.classList.add("enter")),c==="find-q"){let g=document.getElementById("find-q");g?.focus(),g&&f!=null&&g.setSelectionRange(f,f)}a.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||(window.scrollTo(0,0),v.innerHTML||S.querySelector("h1")?.focus({preventScroll:!0}))}catch(i){clearTimeout(n),console.error(i),t===Y&&(S.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>p());async function rt(){if("serviceWorker"in navigator){let a=!!navigator.serviceWorker.controller,s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a&&!s&&!re&&(s=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(n=>{n.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&n.update().catch(()=>{})})}).catch(()=>{})}let e=!location.hash||location.hash==="#/"||location.hash==="#/splash";e&&!d.onboarded?location.replace("#/splash"):location.hash.startsWith("#/join/")&&!d.onboarded&&(d.onboarded=!0,U());let t=Ye();Array.isArray(t?.alerts)&&(y=t.alerts,V=!0,F=Date.now()),e&&d.onboarded&&V?location.replace(y.length?"#/alerts":"#/home"):e&&d.onboarded||p();try{await Ve(),u.rpc("touch_my_alerts");let[,a]=await Promise.all([xe(),E().catch(()=>!1)]);pe(),D().then(()=>{["alerts","settings"].includes(_.name)&&p(!0)}),e&&d.onboarded&&!t?location.replace(y.length?"#/alerts":"#/home"):a&&["alerts","home"].includes(_.name)&&p(!0)}catch(a){console.error(a),S.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>'}}rt();
