import{createClient as de}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var J="https://xtyysubdpapuxjlynapp.supabase.co",G="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",P="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var l=de(J,G,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),M=document.getElementById("app"),V=document.getElementById("overlay"),Q=document.getElementById("tabbar"),L=document.getElementById("toast"),se="0.9",ne="saye.prefs",N={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1};function pe(){try{return{...N,...JSON.parse(localStorage.getItem(ne)||"{}")}}catch{return{...N}}}function R(){try{localStorage.setItem(ne,JSON.stringify(d))}catch{}}var d=pe();["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var p=null,y=[],S={},z=null,X={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},u=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),i=(e,t="")=>`<svg class="${t}"><use href="#${e}"/></svg>`;function r(e,t=2600){L.textContent=e,L.hidden=!1,clearTimeout(r.t),r.t=setTimeout(()=>{L.hidden=!0},t)}function v(e){location.hash=e}function b(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${i("i-back")}</button>
    <h1>${u(e)}</h1>
  </div>`}function F(e){let t=X[e]||X.a_confirmer;return`<span class="rel ${e}">${t.icon?i(t.icon):`<b>${t.mark}</b>`} ${t.label}</span>`}function me(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function I(e){let t=e?.message||String(e);return t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var _=null,D=null;function ie(e=d.sound,t=!1){if(re(),e!=="aucun")try{_=_||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},s=a[e]||a.court,n=()=>{let o=_.currentTime;for(let[h,w]of s){if(h){let $=_.createOscillator(),A=_.createGain();$.type=e==="sirene"?"sawtooth":"sine",$.frequency.value=h,A.gain.setValueAtTime(1e-4,o),A.gain.exponentialRampToValueAtTime(.35,o+.02),A.gain.exponentialRampToValueAtTime(1e-4,o+w),$.connect(A).connect(_.destination),$.start(o),$.stop(o+w)}o+=w}return s.reduce((h,[,w])=>h+w,0)},c=n();t&&(D=setInterval(n,(c+.6)*1e3))}catch{}}function re(){clearInterval(D),D=null}function fe(){d.vibrate&&navigator.vibrate&&navigator.vibrate([400,150,400,150,800])}async function be(){let{data:{session:e}}=await l.auth.getSession();if(e){let{error:t}=await l.auth.getUser();t&&(await l.auth.signOut({scope:"local"}),e=null)}if(!e){let{data:t,error:a}=await l.auth.signInAnonymously();if(a)throw a;e=t.session}p={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},await oe()}async function oe(){let{data:e}=await l.rpc("my_account");e&&Object.assign(p,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function C(){let{data:e,error:t}=await l.rpc("my_alerts");if(t)throw t;return y=e||[],y}var le={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function q(e,t){let{data:a,error:s}=await l.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(s){let n="serveur";try{n=(await s.context.json()).error||n}catch{}throw new Error(le[n]||"Oups, une erreur est survenue. R\xE9essaie.")}return await oe(),a}var Z;function he(e,t){clearTimeout(Z);let a=e.value.trim();if(t){if(!a||a===p.pseudo){t.textContent="";return}Z=setTimeout(async()=>{let{data:s}=await l.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=s?le[s]:"\u2713 Pseudo disponible",t.style.color=s?"var(--red)":"var(--green-dark)")},400)}}var ge=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),f={};f.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&v(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${i("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);f.intro=()=>`
  <div class="brand" style="margin-bottom:24px">${i("i-bell")}</div>
  <h1>Simple et pratique</h1>
  <ol class="steps">
    <li><i>1</i><span>Tu cr\xE9es ton alerte et tu la partages avec tes proches.</span></li>
    <li><i>2</i><span>D\xE8s que l'un de vous rep\xE8re l'\xE9v\xE9nement, un simple clic pr\xE9vient tout le monde en temps r\xE9el.</span></li>
  </ol>
  <h2 style="color:var(--green-dark)">On a tous des \xE9v\xE9nements o\xF9 l'on voudrait \xEAtre pr\xE9venu dans la seconde :</h2>
  <div class="chips">
    <span class="chip">Billetterie ouverte</span><span class="chip">Sortie d'album</span>
    <span class="chip">Drop mode</span><span class="chip">Finale d'e-sport</span>
    <span class="chip">Chaque but du match</span><span class="chip">Derniers km du Tour</span>
  </div>
  <p style="font-size:18px">Tout ce que tu veux : demande \xE0 la communaut\xE9 !</p>
  <div class="grow"></div>
  <button class="btn" data-action="start">Commencer</button>`;f.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${i("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${i("i-share")}</button>
  </div>
  <h1>Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${i("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${i("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${y.length?`<a class="btn outline" href="#/alerts">Mes alertes (${y.length})</a>`:""}`;f.create=()=>`
  ${b("Cr\xE9er une alerte")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Qui pourra la rejoindre ?</p>
  <button class="choice filled stack" data-action="pick-visibility" data-v="public">
    <div class="head">${i("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${i("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Un seul clic d'un membre pr\xE9vient tout le cercle. Je la partage uniquement avec les personnes que j'invite. Elles pourront inviter qui elles veulent : le Cercle VIP.</span>
  </button>
  <div class="note">Une alerte publique r\xE9guli\xE8re (\xE9mission, stream) n'est pas effac\xE9e. SAYE les contr\xF4le et peut les supprimer pour ne pas surcharger le serveur.</div>
  <div class="grow"></div>
  <button class="link-btn" data-back="#/home">Annuler</button>`;f["create-form"]=()=>{if(!S.visibility)return setTimeout(()=>v("#/create")),"";let t=S.visibility==="public"?"quorum":"one";return`
  ${b("Nouvelle alerte","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar"></div>

    ${p.pseudo?`
    <label class="field">Pseudo</label>
    <input type="text" value="${u(p.pseudo)}" readonly>`:`
    <label class="field" for="f-pseudo">Pseudo <small>(facultatif)</small></label>
    <input id="f-pseudo" name="pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="f-pseudo-check">
    <p id="f-pseudo-check" class="hint"></p>
    <label class="field" for="f-pass">Mot de passe <small>(si pseudo)</small></label>
    <input id="f-pass" name="password" type="password" minlength="8" autocomplete="new-password">
    <p class="hint">Sans pseudo, tu restes anonyme. Avec un pseudo, le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>`}

    <label class="field">Qui peut la d\xE9clencher ?</label>
    <label class="radio"><input type="radio" name="trigger_mode" value="one" ${t==="one"?"checked":""}><div><b>Un seul membre suffit</b><small>Conseill\xE9 pour un cercle priv\xE9</small></div></label>
    <label class="radio"><input type="radio" name="trigger_mode" value="quorum" ${t==="quorum"?"checked":""}><div><b>Plusieurs membres (quorum)</b><small>Plusieurs appuis en m\xEAme temps \xB7 conseill\xE9 pour une alerte publique</small></div></label>
    <label class="radio"><input type="radio" name="trigger_mode" value="owner"><div><b>Moi seul</b></div></label>
    <div class="spacer"></div>
    <button class="btn" type="submit">Valider mon alerte</button>
  </form>`};f.share=async({id:e})=>{await C();let t=y.find(o=>o.id===e);if(!t)return`${b("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:o}=await l.rpc("get_invite_code",{p_alert:e});a=o}let s=me(t,a),n=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,c=encodeURIComponent(`${n} ${s}`);return`
  ${b("Invite tes proches","#/alerts")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Plus il y a de monde, plus l'alerte est efficace. Partage-la !</p>
  <div class="pill-title">${i("i-bell-outline")}${u(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-url="${u(s)}">${i("i-link")}Copier le lien</button>
    <a href="sms:?&body=${c}">${i("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${c}" target="_blank" rel="noopener">${i("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-url="${u(s)}">${i("i-chat")}Signal</a>
    <a href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${c}">${i("i-mail")}E-mail</a>
    <button data-action="native-share" data-url="${u(s)}" data-text="${u(n)}">${i("i-dots")}Autres\u2026</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts">${S.justCreated?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};f.alerts=async()=>{await C();let e=ve([...y]);if(!e.length)return`${b("Mes alertes","#/home")}
      <p class="empty">Tu n'as encore aucune alerte.</p>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let t=Date.now();return`
  ${b("Mes alertes","#/home")}
  <div class="banner">Reste sur cette page : tu es en veille</div>
  <div class="grid">
    ${e.map(a=>{let s=a.cooldown_until&&new Date(a.cooldown_until).getTime()>t,n=a.trigger_mode!=="owner"||a.is_owner,c=n?a.trigger_mode==="quorum"?"Appuie quand tu le vois":"Appuie d\xE8s que \xE7a arrive":"Seul le cr\xE9ateur d\xE9clenche",o=a.visibility==="private"?"Priv\xE9e":"Publique";return`<div class="tile">
        <button class="alarm-btn ${s?"cooldown":""}" data-action="press" data-id="${a.id}" ${n?"":"disabled"}>
          ${i("i-bell")}<strong>${u(a.title)}</strong><span>${c}</span>
        </button>
        <div class="tile-actions">
          <button data-action="open-share" data-id="${a.id}" aria-label="Partager">${i("i-share")}</button>
          <button data-action="alert-menu" data-id="${a.id}" aria-label="Plus d'options">${i("i-dots")}</button>
        </div>
        <div class="tile-meta">${o}</div>
        ${F(a.reliability)}
      </div>`}).join("")}
  </div>
  <p class="center" style="font-weight:800;font-size:18px;margin-top:28px">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>
  ${ye()}`};function ve(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var K=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,W=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,E=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),E=e,k.name==="join"&&m(!0)});window.addEventListener("appinstalled",()=>{E=null});function ce(){return W?"":K?`<div class="install">
      <b>Pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e, installe SAYE :</b>
      <ol>
        <li>${i("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari</span></li>
        <li>${i("i-add-square")}<span>Choisis <b>Sur l'\xE9cran d'accueil</b>, puis ouvre SAYE depuis l'ic\xF4ne</span></li>
      </ol>
    </div>`:E?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function ue(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"\u2717 Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"\u2717 Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:g==="ok"?{ok:!0,text:"\u2713 Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:g?{code:"failed",text:"\u2717 Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function ye(){if(K&&!W)return ce();let e=ue();return e.ok||["unsupported","pending"].includes(e.code)?"":`<p class="hint center">${u(e.text)}</p>${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}`}function we(){if(K&&!W)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=ue();return`<p id="notif-status" style="font-weight:800;margin:0 0 8px;color:${e.ok?"var(--green-dark)":e.code==="pending"?"var(--muted)":"var(--red)"}">${u(e.text)}</p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}`}var B={q:""};f.find=async()=>{let{data:e,error:t}=await l.rpc("find_alerts",{p_query:B.q,p_category:null});if(t)throw t;let a=e||[];return`
  ${b("Choisir une alerte","#/home")}
  <div class="search">${i("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" value="${u(B.q)}"></div>
  <div class="list">
    ${a.length?a.map(s=>`
      <button class="card" data-action="open-join" data-id="${s.id}">
        <div class="grow">
          <small>Publique${s.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${u(s.title)}</b>
          <span>par ${u(s.owner_pseudo||"Anonyme")} \xB7 ${s.members_count} membre${s.members_count>1?"s":""}</span>
        </div>
        ${F(s.reliability)}
      </button>`).join(""):'<p class="empty">Aucune alerte publique ne correspond.</p>'}
  </div>
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};f.join=async({id:e,query:t})=>{let a=t.get("c"),{data:s,error:n}=await l.rpc("get_alert_preview",{p_alert:e,p_code:a});return n||!s?`${b("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${b("Rejoindre une alerte","#/home")}
  <div class="pill-title">${i(s.visibility==="private"?"i-lock":"i-globe")}${u(s.title)}</div>
  <p style="font-size:18px">
    ${s.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${u(s.owner_pseudo||"Anonyme")}</b>
  </p>
  ${F(s.reliability)}
  <div class="grow"></div>
  ${ce()}
  ${s.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${s.id}" data-code="${u(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};f.alarm=async({id:e})=>(setTimeout(()=>xe(Number(e))),f.alerts());f.settings=()=>`
  ${b("R\xE9glages","#/home")}
  <label class="field" for="s-sound">Son de l'alerte</label>
  <select id="s-sound" data-pref="sound">
    <option value="court">Alerte courte</option>
    <option value="sirene">Sir\xE8ne</option>
    <option value="carillon">Carillon</option>
    <option value="aucun">Aucun son</option>
  </select>
  <label class="check"><input type="checkbox" data-pref="vibrate" ${d.vibrate?"checked":""}> Vibreur</label>
  <label class="check"><input type="checkbox" data-pref="flash" ${d.flash?"checked":""}> Flash de l'\xE9cran</label>
  <button class="btn outline" data-action="test-alarm">Tester mon alerte</button>

  <label class="field" for="s-sort">Trier mes alertes par</label>
  <select id="s-sort" data-pref="sort">
    <option value="standard">Perso</option>
    <option value="alpha">Ordre alphab\xE9tique</option>
    <option value="membres">Nombre de membres</option>
  </select>

  <label class="field">Notifications</label>
  <div id="notif-zone">${we()}</div>
  <details style="margin-top:6px">
    <summary class="muted" style="font-weight:700;cursor:pointer;font-size:14px">D\xE9tails techniques</summary>
    <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
    <pre id="diag" style="white-space:pre-wrap;font-size:13px;margin:0"></pre>
  </details>

  ${$e()}

  <div class="spacer"></div>
  <div class="note info">${i("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
  <div class="row">
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
  </div>
  <button class="link-btn center" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
  <p class="muted center" style="font-size:13px;font-weight:700">Version ${se}</p>`;function $e(){let e=`
    <details style="margin-top:12px">
      <summary style="font-weight:800;cursor:pointer">J'ai d\xE9j\xE0 un pseudo (autre t\xE9l\xE9phone)</summary>
      <input id="l-pseudo" type="text" maxlength="24" placeholder="Mon pseudo" autocomplete="username" style="margin-top:10px">
      <input id="l-pass" type="password" placeholder="Mot de passe" autocomplete="current-password" style="margin-top:8px">
      <p class="hint">Les alertes rejointes sur ce t\xE9l\xE9phone sans pseudo ne seront pas reprises.</p>
      <button class="btn small" data-action="login-pseudo">Me connecter</button>
    </details>`;if(!p.pseudo)return`
  <label class="field" for="s-pseudo">Mon pseudo</label>
  <p class="muted" style="margin:0 0 8px;font-weight:700">Tu es anonyme. R\xE9serve un pseudo pour \xEAtre reconnu et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="s-pseudo-check">
  <p id="s-pseudo-check" class="hint"></p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" autocomplete="new-password" style="margin-top:8px">
  <p class="hint">Le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>
  <button class="btn small" data-action="claim-pseudo">R\xE9server mon pseudo</button>
  ${e}`;if(!p.hasPassword)return`
  <label class="field">Mon pseudo : ${u(p.pseudo)}</label>
  <p class="hint" style="color:var(--orange)">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" autocomplete="new-password" style="margin-top:8px">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!p.canChangeAt||new Date(p.canChangeAt)<=new Date;return`
  <label class="field">Mon pseudo : ${u(p.pseudo)} \u2713</label>
  <p class="muted" style="margin:0;font-weight:700">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details style="margin-top:10px">
    <summary style="font-weight:800;cursor:pointer">Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" data-live="s-pseudo-check" style="margin-top:10px">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${ge(p.canChangeAt)}.</p>`}
  ${e}`}f.legal=()=>`
  ${b("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function H({trigger:e,alert:t,test:a=!1}){z={triggerId:e?.id,alertId:t?.id,test:a},V.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-live="assertive">
      <div class="kicker">ALERTE !</div>
      ${i("i-bell","big")}
      <h2>${u(t?.title||"Test de ton alerte")}</h2>
      <div class="by">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,ie(d.sound,!0),fe()}function ee(){re(),navigator.vibrate&&navigator.vibrate(0),V.innerHTML="",z=null}function Ee(){V.innerHTML=`
    <div class="full">
      ${i("i-bell","mid")}
      <h1>Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`}async function Se(e){let{data:t,error:a}=await l.rpc("press_alert",{p_alert:e});if(a)return r(I(a));if(t.status==="cooldown")return r("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return r("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(t.status==="triggered"){Ee(),m();return}t.status==="pending"&&r(`Signal enregistr\xE9 : ${t.count} sur ${t.quorum}. L'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,5e3)}var Y={start(){d.onboarded=!0,R(),v("#/home")},"pick-visibility"(e){S={visibility:e.dataset.v},v("#/create-form")},press(e){Se(e.dataset.id)},"open-share"(e){S.justCreated=!1,v(`#/share/${e.dataset.id}`)},"open-join"(e){v(`#/join/${e.dataset.id}`)},async join(e){let t=O(),{error:a}=await l.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return r(I(a));r("Tu seras pr\xE9venu !"),await t,await T(),v("#/alerts")},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${se} \xB7 permission : ${Notification.permission}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let s=await a.pushManager.getSubscription();t(`Abonnement existant : ${s?"oui":"non"}`),s&&(await s.unsubscribe(),t("\u2192 supprim\xE9"));let n=async($,A)=>{try{let x=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:A});return t(`${$} : OK (${new URL(x.endpoint).host})`),x}catch(x){return t(`${$} : \xC9CHEC ${x.name} ${x.message}`),null}};if(await n("Cl\xE9 SAYE",U(P))){await T(),t(`Enregistrement serveur : ${g}`);return}let o=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),h=new Uint8Array(await crypto.subtle.exportKey("raw",o.publicKey)),w=await n("Cl\xE9 de test neuve",h);w&&await w.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(){let e=document.getElementById("notif-zone");e&&(e.innerHTML='<p class="muted" style="font-weight:700">Inscription en cours\u2026</p>'),await O(),await T(),g==="ok"&&r("Notifications activ\xE9es !"),m(!0)},async"install-app"(){if(E?.prompt){E.prompt();try{await E.userChoice}catch{}E=null,m(!0)}},async"alert-menu"(e){let t=y.find(o=>o.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner",s=a?`Supprimer l'alerte \xAB ${t.title} \xBB pour tout le monde ?`:`Quitter l'alerte \xAB ${t.title} \xBB ?${t.is_owner?" Elle restera active pour les autres membres.":""}`;if(!confirm(s))return;let n=a?l.from("alerts").delete().eq("id",t.id):l.from("members").delete().eq("alert_id",t.id).eq("user_id",p.id),{error:c}=await n;if(c)return r(I(c));r(a?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),m()},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),r("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}r("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else Y.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),r("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){ee()},"close-overlay"(){ee(),m()},"test-alarm"(){H({test:!0})},async"claim-pseudo"(e){e.disabled=!0;try{await q(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),r("Pseudo r\xE9serv\xE9 !"),m(!0)}catch(t){r(t.message,4e3),e.disabled=!1}},async"protect-pseudo"(e){e.disabled=!0;try{await q(p.pseudo,document.getElementById("s-pass").value),r("Pseudo prot\xE9g\xE9 !"),m(!0)}catch(t){r(t.message,4e3),e.disabled=!1}},async"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();if(confirm(`Changer ton pseudo en \xAB ${t} \xBB ? Plus de changement possible pendant 30 jours.`)){e.disabled=!0;try{await q(t),r("Pseudo chang\xE9."),m(!0)}catch(a){r(a.message,4e3),e.disabled=!1}}},async"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;if(!t||!a)return r("Indique ton pseudo et ton mot de passe.");e.disabled=!0;let{data:s}=await l.rpc("pseudo_login_id",{p:t}),{error:n}=s?await l.auth.signInWithPassword({email:s,password:a}):{error:!0};if(n)return e.disabled=!1,r("Pseudo ou mot de passe incorrect.",3500);r("Connect\xE9 !"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)},"reset-prefs"(){confirm("Effacer tes pr\xE9f\xE9rences sur cet appareil ?")&&(d={...N,onboarded:!0},R(),m(),r("Pr\xE9f\xE9rences effac\xE9es."))}};document.addEventListener("click",e=>{let t=e.target.closest("[data-back]");if(t){e.preventDefault();let s=t.dataset.back;s==="history"&&history.length>1?history.back():v(s==="history"?"#/home":s);return}let a=e.target.closest("[data-action]");a&&Y[a.dataset.action]&&(a.tagName==="BUTTON"&&e.preventDefault(),Y[a.dataset.action](a,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,R(),t.dataset.pref==="sound"&&ie(t.value))});var te;function Ae(e){clearTimeout(te);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}te=setTimeout(async()=>{let{data:s}=await l.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let n=s||[];t.innerHTML=n.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${n.map(c=>`
        <div class="card">
          <div class="grow">
            <b>${u(c.title)}</b>
            <span>par ${u(c.owner_pseudo||"Anonyme")} \xB7 ${c.members_count} membre${c.members_count>1?"s":""}</span>
          </div>
          ${c.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${c.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var ae;document.addEventListener("input",e=>{e.target.dataset.live&&he(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&Ae(e.target),e.target.id==="find-q"&&(clearTimeout(ae),ae=setTimeout(()=>{B.q=e.target.value.trim(),m(!0)},350))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0;let s=O();try{let n=String(t.get("pseudo")||"").trim();n&&!p.pseudo&&await q(n,String(t.get("password")||""));let{data:c,error:o}=await l.from("alerts").insert({title:String(t.get("title")).trim(),visibility:S.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(o)throw o;S={justCreated:!0},v(`#/share/${c.id}`),s.then(T)}catch(n){r(n instanceof Error&&!n.code?n.message:I(n),4e3),a.disabled=!1}});function _e(){l.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===p.id)return;await C();let t=y.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&Te(t,e),H({trigger:e,alert:t}),k.name==="alerts"&&m(!0))}).subscribe()}async function xe(e){let{data:t}=await l.from("triggers").select("*").eq("id",e).maybeSingle();if(!t||t.cancelled||Date.now()-new Date(t.created_at).getTime()>10*60*1e3)return;await C();let a=y.find(s=>s.id===t.alert_id);a&&H({trigger:t,alert:a})}function U(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var g="";async function T(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return g="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return g="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return g="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return g="Notifications pas encore autoris\xE9es.";let e=t=>{let a=t.toJSON();return l.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:p.id,p256dh:a.keys.p256dh,auth:a.keys.auth})};try{let t=await navigator.serviceWorker.ready,a=await t.pushManager.getSubscription();a||(a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:U(P)}));let{error:s}=await e(a);if(s&&(await a.unsubscribe(),a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:U(P)}),{error:s}=await e(a)),s)throw new Error(`enregistrement : ${s.message}`);return g="ok"}catch(t){return console.warn("push",t),g=`\xC9chec de l'inscription : ${t?.name||""} ${t?.message||t}`.trim()}}function O(){return!("Notification"in window)||Notification.permission!=="default"?Promise.resolve(Notification?.permission):Notification.requestPermission()}async function Te(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),s={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,s):new Notification(`ALERTE ! ${e.title}`,s)}var ke={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},k={name:"splash"},j=0;function Ce(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,s]=e.split("/");return{name:f[a]?a:"home",id:s,query:new URLSearchParams(t||"")}}async function m(e=!1){let t=++j;k=Ce();let a=k,s=!["splash","intro"].includes(a.name);Q.hidden=!s,document.body.classList.toggle("no-tabbar",!s),Q.querySelectorAll("a").forEach(n=>n.classList.toggle("on",n.dataset.tab===ke[a.name]));try{let n=await f[a.name](a);if(t!==j)return;let c=document.activeElement?.id,o=document.activeElement?.selectionStart;if(M.innerHTML=n,c==="find-q"){let h=document.getElementById("find-q");h?.focus(),h&&o!=null&&h.setSelectionRange(o,o)}a.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||window.scrollTo(0,0)}catch(n){console.error(n),t===j&&(M.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>m());async function Pe(){if("serviceWorker"in navigator){let t=!!navigator.serviceWorker.controller,a=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!a&&!z&&(a=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(s=>{s.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s.update().catch(()=>{})})}).catch(()=>{})}let e=location.hash.startsWith("#/join/");!location.hash||location.hash==="#/"?location.hash="#/splash":e&&!d.onboarded&&(d.onboarded=!0,R());try{await be(),l.rpc("touch_my_alerts"),await C().catch(()=>{}),_e(),T().then(()=>{["alerts","settings"].includes(k.name)&&m(!0)})}catch(t){console.error(t),M.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>';return}m()}Pe();
