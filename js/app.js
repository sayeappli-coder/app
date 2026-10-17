import{createClient as ve}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var te="https://xtyysubdpapuxjlynapp.supabase.co",ae="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",j="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var u=ve(te,ae,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),k=document.getElementById("app"),g=document.getElementById("overlay"),se=document.getElementById("tabbar"),H=document.getElementById("toast"),le="0.10",ce="saye.prefs",V={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1};function ye(){try{return{...V,...JSON.parse(localStorage.getItem(ce)||"{}")}}catch{return{...V}}}function B(){try{localStorage.setItem(ce,JSON.stringify(d))}catch{}}var d=ye();["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var p=null,y=[],A={},Q=null,ne={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},o=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),n=(e,t="")=>`<svg class="${t}"><use href="#${e}"/></svg>`;function l(e,t=2600){H.textContent=e,H.hidden=!1,clearTimeout(l.t),l.t=setTimeout(()=>{H.hidden=!0},t)}function w(e){location.hash=e}function q(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${n("i-back")}</button>
    <h1 tabindex="-1">${o(e)}</h1>
  </div>`}var O=e=>`<h1 tabindex="-1">${o(e)}</h1>`;function G(e){let t=ne[e]||ne.a_confirmer;return`<span class="rel ${e}">${t.icon?n(t.icon):`<b>${t.mark}</b>`} ${t.label}</span>`}function $e(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function Y(e){let t=e?.message||String(e);return t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var T=null,z=null;function ue(e=d.sound,t=!1){if(de(),e!=="aucun")try{T=T||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},s=a[e]||a.court,r=()=>{let c=T.currentTime;for(let[b,h]of s){if(b){let E=T.createOscillator(),_=T.createGain();E.type=e==="sirene"?"sawtooth":"sine",E.frequency.value=b,_.gain.setValueAtTime(1e-4,c),_.gain.exponentialRampToValueAtTime(.35,c+.02),_.gain.exponentialRampToValueAtTime(1e-4,c+h),E.connect(_).connect(T.destination),E.start(c),E.stop(c+h)}c+=h}return s.reduce((b,[,h])=>b+h,0)},i=r();t&&(z=setInterval(r,(i+.6)*1e3))}catch{}}function de(){clearInterval(z),z=null}function we(){d.vibrate&&navigator.vibrate&&navigator.vibrate([400,150,400,150,800])}async function Ee(){let{data:{session:e}}=await u.auth.getSession();if(e){let{error:t}=await u.auth.getUser();t&&(await u.auth.signOut({scope:"local"}),e=null)}if(!e){let{data:t,error:a}=await u.auth.signInAnonymously();if(a)throw a;e=t.session}p={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},await pe()}async function pe(){let{data:e}=await u.rpc("my_account");e&&Object.assign(p,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function I(){let{data:e,error:t}=await u.rpc("my_alerts");if(t)throw t;return y=e||[],y}var me={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function D(e,t){let{data:a,error:s}=await u.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(s){let r="serveur";try{r=(await s.context.json()).error||r}catch{}throw new Error(me[r]||"Oups, une erreur est survenue. R\xE9essaie.")}return await pe(),a}var ie;function Se(e,t){clearTimeout(ie);let a=e.value.trim();if(t){if(!a||a===p.pseudo){t.textContent="";return}ie=setTimeout(async()=>{let{data:s}=await u.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=s?me[s]:"\u2713 Pseudo disponible",t.style.color=s?"var(--red)":"var(--green-dark)")},400)}}var xe=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),f={};f.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&w(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${n("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);f.intro=()=>`
  <div class="brand" style="margin-bottom:24px">${n("i-bell")}</div>
  <h1 tabindex="-1">Simple et pratique</h1>
  <ol class="steps">
    <li><i>1</i><span>Tu cr\xE9es ton alerte et tu la partages avec tes proches.</span></li>
    <li><i>2</i><span>D\xE8s que l'un de vous rep\xE8re l'\xE9v\xE9nement, il maintient le bouton appuy\xE9 : tout le monde est pr\xE9venu en temps r\xE9el.</span></li>
  </ol>
  <h2 style="color:var(--brand-text)">On a tous des \xE9v\xE9nements o\xF9 l'on voudrait \xEAtre pr\xE9venu dans la seconde :</h2>
  <div class="chips">
    <span class="chip">Billetterie ouverte</span><span class="chip">Sortie d'album</span>
    <span class="chip">Drop mode</span><span class="chip">Finale d'e-sport</span>
    <span class="chip">Chaque but du match</span><span class="chip">Derniers km du Tour</span>
  </div>
  <p style="font-size:18px">Tout ce que tu veux : demande \xE0 la communaut\xE9 !</p>
  <div class="grow"></div>
  <button class="btn" data-action="start">Commencer</button>`;f.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${n("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${n("i-share")}</button>
  </div>
  <h1 tabindex="-1">Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${n("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${n("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${y.length?`<a class="btn outline" href="#/alerts">Mes alertes (${y.length})</a>`:""}`;f.create=()=>`
  ${O("Cr\xE9er une alerte")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Qui pourra la rejoindre ?</p>
  <button class="choice stack" data-action="pick-visibility" data-v="public">
    <div class="head">${n("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${n("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Pour mon cercle : je la partage avec qui je veux, et un seul appui pr\xE9vient tout le monde. Mes invit\xE9s peuvent inviter \xE0 leur tour.</span>
  </button>`;f["create-form"]=()=>{if(!A.visibility)return setTimeout(()=>w("#/create")),"";let e=A.visibility==="public",t=e?"quorum":"one";return`
  ${q(e?"Nouvelle alerte publique":"Nouvelle alerte priv\xE9e","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Ex. : Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar" aria-live="polite"></div>

    ${p.pseudo?`
    <label class="field" for="f-me">Pseudo</label>
    <input id="f-me" type="text" value="${o(p.pseudo)}" readonly>`:`
    <label class="field" for="f-pseudo">Pseudo <small>(facultatif)</small></label>
    <input id="f-pseudo" name="pseudo" type="text" maxlength="24" placeholder="Ex. : Fred654" autocomplete="username" data-live="f-pseudo-check">
    <p id="f-pseudo-check" class="hint" aria-live="polite"></p>
    <label class="field" for="f-pass">Mot de passe <small>(si pseudo)</small></label>
    <input id="f-pass" name="password" type="password" minlength="8" autocomplete="new-password">
    <p class="hint">Sans pseudo, tu restes anonyme. Avec un pseudo, le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>`}

    <fieldset style="border:0;padding:0;margin:0">
      <legend class="field" style="font-weight:800;font-size:17px;margin:14px 0 6px">Qui peut la d\xE9clencher ?</legend>
      <label class="radio"><input type="radio" name="trigger_mode" value="one" ${t==="one"?"checked":""}><div><b>Un seul membre suffit</b><small>Conseill\xE9 pour un cercle priv\xE9</small></div></label>
      <label class="radio"><input type="radio" name="trigger_mode" value="quorum" ${t==="quorum"?"checked":""}><div><b>Plusieurs membres (quorum)</b><small>Plusieurs appuis en m\xEAme temps \xB7 conseill\xE9 pour une alerte publique</small></div></label>
      <label class="radio"><input type="radio" name="trigger_mode" value="owner"><div><b>Moi seul</b><small>Je pr\xE9viens ma communaut\xE9 (mairie, club, organisateur\u2026)</small></div></label>
    </fieldset>
    <div class="spacer"></div>
    <button class="btn" type="submit">Valider mon alerte</button>
  </form>`};f.share=async({id:e})=>{await I();let t=y.find(b=>b.id===e);if(!t)return`${q("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:b}=await u.rpc("get_invite_code",{p_alert:e});a=b}let s=$e(t,a),r=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,i=encodeURIComponent(`${r} ${s}`),c=!!A.justCreated;return`
  ${q("Invite tes proches","#/alerts")}
  ${c?`<div class="success" role="status">${n("i-check")}<span>Alerte cr\xE9\xE9e ! Partage-la pour que tes proches soient pr\xE9venus.</span></div>`:""}
  <p style="font-weight:800;font-size:18px;margin-top:0">Plus il y a de monde, plus l'alerte est efficace.</p>
  <div class="pill-title">${n("i-bell-outline")}${o(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-url="${o(s)}">${n("i-link")}Copier le lien</button>
    <a href="sms:?&body=${i}">${n("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${i}" target="_blank" rel="noopener">${n("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-url="${o(s)}">${n("i-chat")}Signal</a>
    <a href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${i}">${n("i-mail")}E-mail</a>
    <button data-action="native-share" data-url="${o(s)}" data-text="${o(r)}">${n("i-dots")}Autres\u2026</button>
    <button class="wide" data-action="show-qr" data-url="${o(s)}" data-title="${o(t.title)}">${n("i-qr")}Afficher le QR code</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts">${c?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};f.alerts=async()=>{await I();let e=Te([...y]),t=`
  <div class="brandbar compact">
    <a class="brand" href="#/home" aria-label="Accueil SAYE">${n("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${n("i-share")}</button>
  </div>
  ${O("Mes alertes")}`;if(!e.length)return`${t}
      <div class="emptystate">${n("i-bell-outline")}<b>Aucune alerte pour l'instant</b>
        <p>Cr\xE9e ton alerte et partage-la, ou rejoins une alerte de la communaut\xE9.</p></div>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let a=Date.now();return`${t}
  ${Ce()}
  <div class="veille"><span class="dot" aria-hidden="true"></span>En veille : tu seras pr\xE9venu \xE0 la seconde</div>
  <div class="grid ${e.length===1?"single":""}">
    ${e.map(s=>_e(s,a)).join("")}
  </div>
  <p class="center muted" style="font-weight:800;margin-top:24px">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>`};var fe=e=>`Envoy\xE9e \xB7 disponible dans ${Math.max(1,Math.ceil(e/1e3))} s`;function Ae(e){return e.trigger_mode==="owner"&&!e.is_owner?"Seul le cr\xE9ateur d\xE9clenche":e.trigger_mode==="quorum"?"Maintiens appuy\xE9 quand tu le vois":"Maintiens appuy\xE9 d\xE8s que \xE7a arrive"}function _e(e,t){let a=e.cooldown_left_s>0?t+e.cooldown_left_s*1e3:0,s=a>t,r=e.trigger_mode!=="owner"||e.is_owner,i=Ae(e),c=r?`${e.title} : maintenir appuy\xE9 pour envoyer l'alerte`:`${e.title} : ${i}`;return`<div class="tile">
    <button class="alarm-btn ${s?"cooldown":""}" data-hold="${e.id}" data-hint="${o(i)}" ${s?`data-until="${a}"`:""} ${r?"":"disabled"} aria-label="${o(c)}">
      ${n("i-bell")}<strong>${o(e.title)}</strong><span class="hold-hint">${o(s?fe(a-t):i)}</span>
    </button>
    <div class="tile-foot">
      <div><div class="tile-meta">${e.visibility==="private"?"Priv\xE9e":"Publique"}</div>${G(e.reliability)}</div>
      <div class="tile-actions">
        <button data-action="open-share" data-id="${e.id}" aria-label="Partager \xAB ${o(e.title)} \xBB">${n("i-share")}</button>
        <button data-action="alert-menu" data-id="${e.id}" aria-label="Options de \xAB ${o(e.title)} \xBB">${n("i-dots")}</button>
      </div>
    </div>
  </div>`}function Te(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var X=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Z=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,x=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),x=e,R.name==="join"&&m(!0)});window.addEventListener("appinstalled",()=>{x=null});function qe(){return Z?"":X?`<div class="install">
      <b>Pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e, installe SAYE :</b>
      <ol>
        <li>${n("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari</span></li>
        <li>${n("i-add-square")}<span>Choisis <b>Sur l'\xE9cran d'accueil</b>, puis ouvre SAYE depuis l'ic\xF4ne</span></li>
      </ol>
    </div>`:x?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function be(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"\u2717 Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"\u2717 Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:$==="ok"?{ok:!0,text:"\u2713 Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:$?{code:"failed",text:"\u2717 Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function Ce(){if(X&&!Z)return`<div class="alertbox">${n("i-bell-off")}<div><b>Installe SAYE pour \xEAtre pr\xE9venu app ferm\xE9e</b>
      Sur iPhone : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB, et ouvre SAYE depuis l'ic\xF4ne.</div></div>`;let e=be(),a={off:["Active les notifications","Sinon, tu ne seras pas pr\xE9venu quand l'app est ferm\xE9e.","Activer"],denied:["Notifications bloqu\xE9es","Autorise-les pour SAYE dans les r\xE9glages de ton navigateur, sinon tu ne seras pas pr\xE9venu app ferm\xE9e.",null],failed:["Notifications \xE0 r\xE9parer","Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.","R\xE9parer"]}[e.code];return a?`<div class="alertbox" role="alert">${n("i-bell-off")}<div><b>${a[0]}</b>${a[1]}
    ${a[2]?`<button class="btn small" data-action="fix-notif">${a[2]}</button>`:""}</div></div>`:""}function ke(){if(X&&!Z)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=be();return`<p id="notif-status" style="font-weight:800;margin:6px 0 8px;color:${e.ok?"var(--brand-text)":e.code==="pending"?"var(--muted)":"var(--red)"}">${o(e.text)}</p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}`}var S={q:"",sort:"populaires"};f.find=async()=>{let{data:e,error:t}=await u.rpc("find_alerts",{p_query:S.q,p_category:null,p_sort:S.sort});if(t)throw t;let a=e||[],s=(i,c)=>`<button data-action="find-sort" data-v="${i}" aria-pressed="${S.sort===i}">${c}</button>`,r=S.q?`<div class="emptystate">${n("i-search")}<b>Aucun r\xE9sultat</b><p>Aucune alerte publique ne correspond \xE0 \xAB ${o(S.q)} \xBB.</p></div>`:`<div class="emptystate">${n("i-globe")}<b>Aucune alerte publique pour l'instant</b><p>Cr\xE9e la premi\xE8re : toute la communaut\xE9 pourra la rejoindre.</p></div>`;return`
  ${O("Choisir une alerte")}
  <div class="search">${n("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" aria-label="Rechercher une alerte" value="${o(S.q)}"></div>
  <div class="segmented" role="group" aria-label="Trier les alertes">${s("populaires","Populaires")}${s("recentes","R\xE9centes")}</div>
  ${a.length?`<div class="list">${a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${o(i.title)}</b>
          <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${G(i.reliability)}
      </button>`).join("")}</div>`:r}
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};f.join=async({id:e,query:t})=>{let a=t.get("c"),{data:s,error:r}=await u.rpc("get_alert_preview",{p_alert:e,p_code:a});return r||!s?`${q("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${q("Rejoindre une alerte","#/home")}
  <div class="pill-title">${n(s.visibility==="private"?"i-lock":"i-globe")}${o(s.title)}</div>
  <p style="font-size:18px">
    ${s.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${o(s.owner_pseudo||"Anonyme")}</b>
  </p>
  ${G(s.reliability)}
  <div class="grow"></div>
  ${qe()}
  ${s.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${s.id}" data-code="${o(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};f.alarm=async({id:e})=>(setTimeout(()=>je(Number(e))),f.alerts());f.settings=()=>`
  ${O("R\xE9glages")}
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
    <div id="notif-zone">${ke()}</div>
    <details>
      <summary class="muted">D\xE9tails techniques</summary>
      <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
      <pre id="diag" style="white-space:pre-wrap;font-size:13px;margin:0"></pre>
    </details>
  </section>

  <section class="group" aria-labelledby="g-pseudo">
    <h2 id="g-pseudo">Mon pseudo</h2>
    ${Le()}
  </section>

  <section class="group" aria-labelledby="g-apropos">
    <h2 id="g-apropos">\xC0 propos</h2>
    <div class="note info">${n("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
    <button class="link-btn" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
    <p class="muted" style="font-size:13px;font-weight:700;margin:0">Version ${le}</p>
  </section>`;function Le(){let e=`
    <details style="margin-top:12px">
      <summary>J'ai d\xE9j\xE0 un pseudo (autre t\xE9l\xE9phone)</summary>
      <input id="l-pseudo" type="text" maxlength="24" placeholder="Mon pseudo" aria-label="Mon pseudo" autocomplete="username" style="margin-top:10px">
      <input id="l-pass" type="password" placeholder="Mot de passe" aria-label="Mot de passe" autocomplete="current-password" style="margin-top:8px">
      <p class="hint">Les alertes rejointes sur ce t\xE9l\xE9phone sans pseudo ne seront pas reprises.</p>
      <button class="btn small" data-action="login-pseudo">Me connecter</button>
    </details>`;if(!p.pseudo)return`
  <label class="sr-only" for="s-pseudo">Pseudo</label>
  <p class="muted" style="margin:6px 0 8px;font-weight:700">Tu es anonyme. R\xE9serve un pseudo pour \xEAtre reconnu et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="s-pseudo-check">
  <p id="s-pseudo-check" class="hint"></p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" style="margin-top:8px">
  <p class="hint">Le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>
  <button class="btn small" data-action="claim-pseudo">R\xE9server mon pseudo</button>
  ${e}`;if(!p.hasPassword)return`
  <p style="font-size:19px;font-weight:900;margin:6px 0 4px">${o(p.pseudo)}</p>
  <p class="hint" style="color:var(--orange)">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" style="margin-top:8px">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!p.canChangeAt||new Date(p.canChangeAt)<=new Date;return`
  <p style="font-size:19px;font-weight:900;margin:6px 0 4px">${o(p.pseudo)} \u2713</p>
  <p class="muted" style="margin:0;font-weight:700">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details style="margin-top:10px">
    <summary>Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" aria-label="Nouveau pseudo" data-live="s-pseudo-check" style="margin-top:10px">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${xe(p.canChangeAt)}.</p>`}
  ${e}`}f.legal=()=>`
  ${q("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function ee({trigger:e,alert:t,test:a=!1}){Q={triggerId:e?.id,alertId:t?.id,test:a},g.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-live="assertive">
      <div class="kicker">ALERTE !</div>
      ${n("i-bell","big")}
      <h2>${o(t?.title||"Test de ton alerte")}</h2>
      <div class="by">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,g.querySelector("[data-action=stop-alarm]")?.focus(),ue(d.sound,!0),we()}function F(){de(),navigator.vibrate&&navigator.vibrate(0),g.innerHTML="",Q=null}function Pe(){g.innerHTML=`
    <div class="full">
      ${n("i-bell","mid")}
      <h1>Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`,g.querySelector("[data-action=close-overlay]")?.focus()}function U(e,t){g.innerHTML=`<div class="sheet" data-action="close-sheet">
    <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="${o(t)}">
      <div class="sheet-grip" aria-hidden="true"></div>${e}
    </div></div>`,g.querySelector(".sheet-panel button, .sheet-panel a")?.focus()}function L(){g.querySelector(".sheet")&&(g.innerHTML="")}async function Re(e){let{data:t,error:a}=await u.rpc("press_alert",{p_alert:e});if(a)return l(Y(a));if(t.status==="cooldown")return l("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return l("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(t.status==="triggered"){Pe(),m(!0);return}t.status==="pending"&&l(`Signal enregistr\xE9 : ${t.count} sur ${t.quorum}. L'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,5e3)}var K={start(){d.onboarded=!0,B(),w("#/home")},"pick-visibility"(e){A={visibility:e.dataset.v},w("#/create-form")},"open-share"(e){L(),A.justCreated=!1,w(`#/share/${e.dataset.id}`)},"open-join"(e){w(`#/join/${e.dataset.id}`)},async join(e){let t=J(),{error:a}=await u.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return l(Y(a));l("Tu seras pr\xE9venu !"),await t,await P(),w("#/alerts")},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${le} \xB7 permission : ${Notification.permission}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let s=await a.pushManager.getSubscription();t(`Abonnement existant : ${s?"oui":"non"}`),s&&(await s.unsubscribe(),t("\u2192 supprim\xE9"));let r=async(E,_)=>{try{let C=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_});return t(`${E} : OK (${new URL(C.endpoint).host})`),C}catch(C){return t(`${E} : \xC9CHEC ${C.name} ${C.message}`),null}};if(await r("Cl\xE9 SAYE",W(j))){await P(),t(`Enregistrement serveur : ${$}`);return}let c=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),b=new Uint8Array(await crypto.subtle.exportKey("raw",c.publicKey)),h=await r("Cl\xE9 de test neuve",b);h&&await h.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(){let e=document.getElementById("notif-zone");e&&(e.innerHTML='<p class="muted" style="font-weight:700">Inscription en cours\u2026</p>'),await J(),await P(),$==="ok"&&l("Notifications activ\xE9es !"),m(!0)},async"install-app"(){if(x?.prompt){x.prompt();try{await x.userChoice}catch{}x=null,m(!0)}},"alert-menu"(e){let t=y.find(s=>s.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner";U(`
      <p class="sheet-title">${o(t.title)}</p>
      <button class="sheet-item" data-action="open-share" data-id="${t.id}">${n("i-share")}Partager l'alerte</button>
      ${a?`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="delete">${n("i-trash")}Supprimer pour tout le monde</button>`:`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="leave">${n("i-leave")}Quitter l'alerte</button>`}
      <button class="sheet-item" data-action="close-sheet">${n("i-close")}Annuler</button>`,`Options de ${t.title}`)},"sheet-confirm"(e){let t=y.find(r=>r.id===e.dataset.id);if(!t)return L();let a=e.dataset.kind==="delete",s=a?"sera supprim\xE9e pour tous ses membres.":t.is_owner?"restera active pour les autres membres.":"ne te pr\xE9viendra plus.";U(`
      <p class="sheet-title">${a?"Supprimer pour tout le monde ?":"Quitter l'alerte ?"}</p>
      <p class="sheet-text">\xAB ${o(t.title)} \xBB ${s}</p>
      <button class="btn danger" data-action="sheet-do" data-id="${t.id}" data-kind="${e.dataset.kind}">${a?"Supprimer":"Quitter"}</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,a?"Confirmer la suppression":"Confirmer")},async"sheet-do"(e){let t=e.dataset.kind==="delete";e.disabled=!0;let a=t?u.from("alerts").delete().eq("id",e.dataset.id):u.from("members").delete().eq("alert_id",e.dataset.id).eq("user_id",p.id),{error:s}=await a;if(L(),s)return l(Y(s));l(t?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),m()},"close-sheet"(e,t){e.classList.contains("sheet")&&t.target.closest(".sheet-panel")||L()},async"show-qr"(e){U(`
      <p class="sheet-title">QR code de l'alerte</p>
      <p class="sheet-text">\xC0 scanner avec l'appareil photo pour rejoindre \xAB ${o(e.dataset.title)} \xBB.</p>
      <div class="qr" id="qr"><div class="spinner" style="margin:40px auto"></div></div>
      <button class="btn outline" data-action="close-sheet">Fermer</button>`,"QR code");try{let t=await import("https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm"),a=await(t.default||t).toString(e.dataset.url,{type:"svg",margin:1,errorCorrectionLevel:"M",color:{dark:"#1a2414",light:"#ffffff"}}),s=document.getElementById("qr");s&&(s.innerHTML=a,s.setAttribute("role","img"),s.setAttribute("aria-label","QR code du lien de l'alerte"))}catch{let t=document.getElementById("qr");t&&(t.innerHTML='<p class="empty" style="color:#5d6658">QR code indisponible (v\xE9rifie ta connexion).</p>')}},"find-sort"(e){S.sort=e.dataset.v,m(!0)},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),l("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}l("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else K.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),l("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){F()},"close-overlay"(){F(),m()},"test-alarm"(){ee({test:!0})},async"claim-pseudo"(e){e.disabled=!0;try{await D(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),l("Pseudo r\xE9serv\xE9 !"),m(!0)}catch(t){l(t.message,4e3),e.disabled=!1}},async"protect-pseudo"(e){e.disabled=!0;try{await D(p.pseudo,document.getElementById("s-pass").value),l("Pseudo prot\xE9g\xE9 !"),m(!0)}catch(t){l(t.message,4e3),e.disabled=!1}},async"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();if(confirm(`Changer ton pseudo en \xAB ${t} \xBB ? Plus de changement possible pendant 30 jours.`)){e.disabled=!0;try{await D(t),l("Pseudo chang\xE9."),m(!0)}catch(a){l(a.message,4e3),e.disabled=!1}}},async"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;if(!t||!a)return l("Indique ton pseudo et ton mot de passe.");e.disabled=!0;let{data:s}=await u.rpc("pseudo_login_id",{p:t}),{error:r}=s?await u.auth.signInWithPassword({email:s,password:a}):{error:!0};if(r)return e.disabled=!1,l("Pseudo ou mot de passe incorrect.",3500);l("Connect\xE9 !"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)},"reset-prefs"(){confirm("Effacer tes pr\xE9f\xE9rences sur cet appareil ?")&&(d={...V,onboarded:!0},B(),m(),l("Pr\xE9f\xE9rences effac\xE9es."))}};document.addEventListener("click",e=>{let t=e.target.closest("[data-back]");if(t){e.preventDefault();let s=t.dataset.back;s==="history"&&history.length>1?history.back():w(s==="history"?"#/home":s);return}let a=e.target.closest("[data-action]");a&&K[a.dataset.action]&&(a.tagName==="BUTTON"&&e.preventDefault(),K[a.dataset.action](a,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,B(),t.dataset.pref==="sound"&&ue(t.value))});var re;function Ie(e){clearTimeout(re);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}re=setTimeout(async()=>{let{data:s}=await u.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let r=s||[];t.innerHTML=r.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${r.map(i=>`
        <div class="card">
          <div class="grow">
            <b>${o(i.title)}</b>
            <span>par ${o(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
          </div>
          ${i.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${i.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var oe;document.addEventListener("input",e=>{e.target.dataset.live&&Se(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&Ie(e.target),e.target.id==="find-q"&&(clearTimeout(oe),oe=setTimeout(()=>{S.q=e.target.value.trim(),m(!0)},350))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0;let s=J();try{let r=String(t.get("pseudo")||"").trim();r&&!p.pseudo&&await D(r,String(t.get("password")||""));let{data:i,error:c}=await u.from("alerts").insert({title:String(t.get("title")).trim(),visibility:A.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(c)throw c;A={justCreated:!0},w(`#/share/${i.id}`),s.then(P)}catch(r){l(r instanceof Error&&!r.code?r.message:Y(r),4e3),a.disabled=!1}});var he=600,v=null;function ge(e){if(e.disabled)return;if(e.classList.contains("cooldown")){l("Alerte d\xE9j\xE0 envoy\xE9e : patiente quelques secondes.");return}M(),e.classList.add("holding"),d.vibrate&&navigator.vibrate&&navigator.vibrate(15);let t=e.dataset.hold;v={btn:e,start:Date.now(),timer:setTimeout(()=>{v=null,e.classList.remove("holding"),d.vibrate&&navigator.vibrate&&navigator.vibrate(60),Re(t)},he)}}function M(e=!1){v&&(clearTimeout(v.timer),v.btn.classList.remove("holding"),e&&Date.now()-v.start<he&&l("Maintiens le bouton appuy\xE9 pour envoyer l'alerte."),v=null)}document.addEventListener("pointerdown",e=>{let t=e.target.closest("[data-hold]");t&&e.button===0&&ge(t)});document.addEventListener("pointerup",()=>M(!0));document.addEventListener("pointercancel",()=>M());document.addEventListener("pointerout",e=>{v&&e.target.closest?.("[data-hold]")===v.btn&&!v.btn.contains(e.relatedTarget)&&M()});document.addEventListener("contextmenu",e=>{e.target.closest?.("[data-hold]")&&e.preventDefault()});document.addEventListener("keydown",e=>{let t=e.target.closest?.("[data-hold]");t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||ge(t)),e.key==="Escape"&&(g.querySelector(".sheet")?L():g.innerHTML&&F())});document.addEventListener("keyup",e=>{v&&(e.key==="Enter"||e.key===" ")&&M(!0)});setInterval(()=>{document.querySelectorAll("[data-until]").forEach(e=>{let t=Number(e.dataset.until)-Date.now(),a=e.querySelector(".hold-hint");t<=0?(e.classList.remove("cooldown"),e.removeAttribute("data-until"),a&&(a.textContent=e.dataset.hint)):a&&(a.textContent=fe(t))})},1e3);function Me(){u.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===p.id)return;await I();let t=y.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&Ne(t,e),ee({trigger:e,alert:t}),R.name==="alerts"&&m(!0))}).subscribe()}async function je(e){let{data:t}=await u.rpc("recent_trigger",{p_trigger:e});if(!t)return;await I();let a=y.find(s=>s.id===t.alert_id);a&&ee({trigger:t,alert:a})}function W(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var $="";async function P(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return $="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return $="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return $="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return $="Notifications pas encore autoris\xE9es.";let e=t=>{let a=t.toJSON();return u.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:p.id,p256dh:a.keys.p256dh,auth:a.keys.auth})};try{let t=await navigator.serviceWorker.ready,a=await t.pushManager.getSubscription();a||(a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:W(j)}));let{error:s}=await e(a);if(s&&(await a.unsubscribe(),a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:W(j)}),{error:s}=await e(a)),s)throw new Error(`enregistrement : ${s.message}`);return $="ok"}catch(t){return console.warn("push",t),$=`\xC9chec de l'inscription : ${t?.name||""} ${t?.message||t}`.trim()}}function J(){return!("Notification"in window)||Notification.permission!=="default"?Promise.resolve(Notification?.permission):Notification.requestPermission()}async function Ne(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),s={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,s):new Notification(`ALERTE ! ${e.title}`,s)}var De={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},R={name:"splash"},N=0;function Be(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,s]=e.split("/");return{name:f[a]?a:"home",id:s,query:new URLSearchParams(t||"")}}async function m(e=!1){let t=++N;R=Be();let a=R,s=!["splash","intro"].includes(a.name);se.hidden=!s,document.body.classList.toggle("no-tabbar",!s),se.querySelectorAll("a").forEach(i=>{let c=i.dataset.tab===De[a.name];i.classList.toggle("on",c),c?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")});let r=e?null:setTimeout(()=>{t===N&&(k.innerHTML='<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span class="sr-only">Chargement\u2026</span></div>')},250);try{let i=await f[a.name](a);if(clearTimeout(r),t!==N)return;let c=document.activeElement?.id,b=document.activeElement?.selectionStart;if(k.innerHTML=i,c==="find-q"){let h=document.getElementById("find-q");h?.focus(),h&&b!=null&&h.setSelectionRange(b,b)}a.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||(window.scrollTo(0,0),g.innerHTML||k.querySelector("h1")?.focus({preventScroll:!0}))}catch(i){clearTimeout(r),console.error(i),t===N&&(k.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>m());async function Ye(){if("serviceWorker"in navigator){let t=!!navigator.serviceWorker.controller,a=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!a&&!Q&&(a=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(s=>{s.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s.update().catch(()=>{})})}).catch(()=>{})}let e=!location.hash||location.hash==="#/"||location.hash==="#/splash";e&&!d.onboarded?location.replace("#/splash"):location.hash.startsWith("#/join/")&&!d.onboarded&&(d.onboarded=!0,B());try{await Ee(),u.rpc("touch_my_alerts"),await I().catch(()=>{}),Me(),P().then(()=>{["alerts","settings"].includes(R.name)&&m(!0)}),e&&d.onboarded&&location.replace(y.length?"#/alerts":"#/home")}catch(t){console.error(t),k.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>';return}m()}Ye();
