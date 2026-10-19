import{createClient as tt}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var re="https://xtyysubdpapuxjlynapp.supabase.co",oe="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",le="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";async function at(e,t={}){let a=await fetch(e,t);if(a.status!==401||String(e).includes("/auth/v1/"))return a;let n=await a.clone().text().catch(()=>"");if(!/JWT expired/i.test(n))return a;let{data:s}=await m.auth.refreshSession(),i=s?.session?.access_token;if(!i)return a;let o=new Headers(t.headers||{});return o.set("Authorization",`Bearer ${i}`),fetch(e,{...t,headers:o})}var m=tt(re,oe,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1},global:{fetch:(e,t)=>at(e,t)}}),T=document.getElementById("app"),v=document.getElementById("overlay"),Se=document.getElementById("tabbar"),ce=document.getElementById("toast"),he="0.21",Le="saye.prefs",ue={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1,stats:!0};function nt(){try{return{...ue,...JSON.parse(localStorage.getItem(Le)||"{}")}}catch{return{...ue}}}function B(){try{localStorage.setItem(Le,JSON.stringify(d))}catch{}}var d=nt(),st=["localhost","127.0.0.1"].includes(location.hostname)?"dev":he;function c(e,t=null){try{if(d.stats===!1||navigator.globalPrivacyControl||navigator.doNotTrack==="1"||!navigator.onLine)return;fetch(`${re}/rest/v1/rpc/track`,{method:"POST",keepalive:!0,headers:{apikey:oe,"Content-Type":"application/json"},body:JSON.stringify({p_name:e,p_detail:t,p_version:st})}).catch(()=>{})}catch{}}var it=0;function be(e,t){console.error(e);try{if(it++>=5)return;let a=String(e?.name||"erreur").toLowerCase().replace(/[^a-z]/g,"").replace(/(.)error$/,"$1").slice(0,9)||"erreur",n=String(t||b.name||"").toLowerCase().replace(/[^a-z]/g,"").slice(0,10);c("js_error",n?`${a}_${n}`:a)}catch{}}window.addEventListener("error",e=>be(e.error||{name:"erreur"}));window.addEventListener("unhandledrejection",e=>be(e.reason));["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var h=null,y=[],M={},O=null,X=!1,Ee="",U=0,de={},qe,W=new Promise(e=>{qe=e}),ge="saye.cache";function rt(){try{return JSON.parse(localStorage.getItem(ge)||"null")}catch{return null}}function ot(){try{localStorage.setItem(ge,JSON.stringify({alerts:y}))}catch{}}var ke={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),r=(e,t="")=>`<svg class="${t}" aria-hidden="true" focusable="false"><use href="#${e}"/></svg>`;function u(e,t=2600){ce.textContent=e,ce.hidden=!1,clearTimeout(u.t),u.t=setTimeout(()=>{ce.hidden=!0},t)}function E(e){location.hash=e}function Y(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${r("i-back")}</button>
    <h1 tabindex="-1">${l(e)}</h1>
  </div>`}var ne=e=>`<h1 tabindex="-1">${l(e)}</h1>`;function ve(e){let t=ke[e]||ke.a_confirmer;return`<span class="rel ${e}">${t.icon?r(t.icon):`<b aria-hidden="true">${t.mark}</b>`} ${t.label}</span>`}function Pe(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function Z(e){let t=e?.message||String(e);return!navigator.onLine||/Failed to fetch|NetworkError|Load failed/i.test(t)?"Pas de connexion : r\xE9essaie quand le r\xE9seau revient.":t.includes("titre_interdit")?"Ce titre contient un mot interdit pour une alerte publique : reformule-le.":t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var j=null,pe=null;function Re(e=d.sound,t=!1){if(Ie(),e!=="aucun")try{j=j||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},n=a[e]||a.court,s=()=>{let o=j.currentTime;for(let[p,g]of n){if(p){let w=j.createOscillator(),_=j.createGain();w.type=e==="sirene"?"sawtooth":"sine",w.frequency.value=p,_.gain.setValueAtTime(1e-4,o),_.gain.exponentialRampToValueAtTime(.35,o+.02),_.gain.exponentialRampToValueAtTime(1e-4,o+g),w.connect(_).connect(j.destination),w.start(o),w.stop(o+g)}o+=g}return n.reduce((p,[,g])=>p+g,0)},i=s();t&&(pe=setInterval(s,(i+.6)*1e3))}catch{}}function Ie(){clearInterval(pe),pe=null}function me(e){d.vibrate&&navigator.vibrate&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate(e)}function lt(){me([400,150,400,150,800])}async function ct(){let{data:{session:e}}=await m.auth.getSession();if(e&&navigator.onLine){let{error:t}=await m.auth.getUser();t&&(t.code==="user_not_found"||t.status===403&&/does not exist/i.test(t.message||""))&&(await m.auth.signOut({scope:"local"}),e=null)}if(!e){navigator.onLine||await new Promise(n=>window.addEventListener("online",n,{once:!0}));let{data:t,error:a}=await m.auth.signInAnonymously();if(a)throw a;e=t.session}h={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},qe()}async function Me(){let{data:e}=await m.rpc("my_account");e&&Object.assign(h,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function A(){await W;let{data:e,error:t}=await m.rpc("my_alerts");if(t)throw t;let a=JSON.stringify((e||[]).map(({cooldown_left_s:s,cooldown_until:i,last_trigger_age_s:o,...p})=>({...p,cool:s>0}))),n=a!==Ee;return Ee=a,U=Date.now(),y=(e||[]).map(s=>({...s,_coolUntil:s.cooldown_left_s>0?U+s.cooldown_left_s*1e3:0,_triggerAt:s.last_trigger_age_s!=null?U-s.last_trigger_age_s*1e3:0})),X=!0,ot(),n}var je="saye.seen",V=(()=>{try{return JSON.parse(localStorage.getItem(je)||"{}")}catch{return{}}})();function ye(e,t){if(!(!e||!t||(V[e]||0)>=t)){V[e]=t;try{localStorage.setItem(je,JSON.stringify(V))}catch{}}}var ut=120;function $e(){if(O||b.name==="alarm")return;let e=null;for(let t of y)!t.last_trigger_id||(V[t.id]||0)>=t.last_trigger_id||(!t.last_trigger_mine&&t.last_trigger_age_s<=ut&&(!e||t.last_trigger_age_s<e.last_trigger_age_s)&&(e=t),ye(t.id,t.last_trigger_id));e&&(c("alarm_received","rattrapee"),ie({trigger:{id:e.last_trigger_id,pseudo:e.last_trigger_pseudo},alert:e,lateS:e.last_trigger_age_s}))}var Ne={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function z(e,t){let{data:a,error:n}=await m.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(n){let s="serveur";try{s=(await n.context.json()).error||s}catch{}throw new Error(Ne[s]||"Oups, une erreur est survenue. R\xE9essaie.")}return await Me(),a}var Ae;function dt(e,t){clearTimeout(Ae);let a=e.value.trim();if(t){if(!a||a===h.pseudo){t.textContent="";return}Ae=setTimeout(async()=>{let{data:n}=await m.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=n?Ne[n]:"\u2713 Pseudo disponible",t.className=`hint ${n?"err":"ok"}`)},400)}}var pt=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),$={};$.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&E(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${r("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);$.intro=()=>`
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
  <button class="btn" data-action="start">Commencer</button>`;$.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${r("i-bell")}<b>SAYE</b><span class="beta">B\xEAta</span></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  <h1 tabindex="-1">Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${r("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${r("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${we()}
  ${y.length?`<a class="btn outline" href="#/alerts">Mes alertes (${y.length})</a>`:""}`;var we=(e="btn outline")=>x?`<button class="${e}" data-action="paste-invite">${r("i-link")}Coller mon lien d'invitation</button>`:"";function xe(e){let t=/#\/join\/([0-9a-f-]{36})(?:\?c=([0-9a-z%]+))?/i.exec(String(e||""));return t?`#/join/${t[1]}${t[2]?`?c=${t[2]}`:""}`:null}$.create=()=>`
  ${ne("Cr\xE9er une alerte")}
  <p class="lead-text">Qui pourra la rejoindre ?</p>
  <button class="choice stack" data-action="pick-visibility" data-v="public">
    <div class="head">${r("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${r("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Pour mon cercle : je la partage avec qui je veux, et un seul appui pr\xE9vient tout le monde. Mes invit\xE9s peuvent inviter \xE0 leur tour.</span>
  </button>`;$["create-form"]=()=>{if(!M.visibility)return setTimeout(()=>E("#/create")),"";let e=M.visibility==="public",t=e?"quorum":"one";return`
  ${Y(e?"Nouvelle alerte publique":"Nouvelle alerte priv\xE9e","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Ex. : Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar" aria-live="polite"></div>

    ${h.pseudo?`
    <label class="field" for="f-me">Pseudo</label>
    <input id="f-me" type="text" value="${l(h.pseudo)}" readonly>`:`
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
  </form>`};$.share=async({id:e})=>{await A();let t=y.find(p=>p.id===e);if(!t)return`${Y("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:p}=await m.rpc("get_invite_code",{p_alert:e});a=p}let n=Pe(t,a),s=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,i=encodeURIComponent(`${s} ${n}`),o=!!M.justCreated;return`
  ${Y("Invite tes proches","#/alerts")}
  ${o?`<div class="success" role="status">${r("i-check")}<span>Alerte cr\xE9\xE9e ! Partage-la pour que tes proches soient pr\xE9venus.</span></div>`:""}
  <p class="lead-text">Plus il y a de monde, plus l'alerte est efficace.</p>
  <div class="pill-title">${r("i-bell-outline")}${l(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-track="share_click:lien" data-url="${l(n)}">${r("i-link")}Copier le lien</button>
    <a href="sms:?&body=${i}" data-track="share_click:sms">${r("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${i}" target="_blank" rel="noopener" data-track="share_click:whatsapp">${r("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-track="share_click:signal" data-url="${l(n)}">${r("i-chat")}Signal</a>
    <a data-track="share_click:email" href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${i}">${r("i-mail")}E-mail</a>
    <button data-action="native-share" data-track="share_click:autres" data-url="${l(n)}" data-text="${l(s)}">${r("i-dots")}Autres\u2026</button>
    <button class="wide" data-action="show-qr" data-track="share_click:qr" data-url="${l(n)}" data-title="${l(t.title)}">${r("i-qr")}Afficher le QR code</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts" ${o?'data-track="share_skip"':""}>${o?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};$.alerts=async()=>{X?Date.now()-U>15e3&&A().then(n=>{n&&b.name==="alerts"&&f(!0)}).catch(()=>{}):await A();let e=ht([...y]),t=`
  <div class="brandbar compact">
    <a class="brand" href="#/home" aria-label="Accueil SAYE (version b\xEAta)">${r("i-bell")}<b>SAYE</b><span class="beta" aria-hidden="true">B\xEAta</span></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  ${ne("Mes alertes")}`;if(!e.length)return`${t}
      <div class="emptystate">${r("i-bell-outline")}<b>Aucune alerte pour l'instant</b>
        <p>Cr\xE9e ton alerte et partage-la, ou rejoins une alerte de la communaut\xE9.</p></div>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>
      ${we()}`;let a=Date.now();return`${t}
  ${vt()}
  ${De()}
  <div class="grid ${e.length===1?"single":""}">
    ${e.map(n=>ft(n,a)).join("")}
  </div>
  <p class="footnote">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>`};var ee="connecting";function De(){return navigator.onLine?ee==="ok"?'<div id="veille" class="veille" role="status"><span class="dot" aria-hidden="true"></span>En veille : tu seras pr\xE9venu \xE0 la seconde</div>':'<div id="veille" class="veille wait" role="status"><span class="dot" aria-hidden="true"></span>Connexion en cours\u2026</div>':`<div id="veille" class="veille off" role="status"><span class="dot" aria-hidden="true"></span>Hors connexion : tu ne seras pas pr\xE9venu tant que le r\xE9seau n'est pas revenu</div>`}function te(){let e=document.getElementById("veille");e&&(e.outerHTML=De())}var Be=e=>`Envoy\xE9e \xB7 disponible dans ${Math.max(1,Math.ceil(e/1e3))} s`,Ye=(e,t)=>`D\xE9clench\xE9e par ${e} il y a ${Math.max(1,Math.round(t/1e3))} s`,Oe=(e,t)=>`${e} \xB7 encore ${Math.max(1,Math.ceil(t/1e3))} s`;function mt(e){return e.trigger_mode==="owner"&&!e.is_owner?"Seul le cr\xE9ateur d\xE9clenche":e.visibility==="public"&&e.trigger_mode!=="owner"?"Tu le vois ? Maintiens appuy\xE9 pour le signaler":"Maintiens appuy\xE9 pour pr\xE9venir tout le monde"}function ft(e,t){let a=e._coolUntil>t,n=de[e.id],s=!a&&n&&n.until>t;n&&!s&&delete de[e.id];let i=a?e._coolUntil:s?n.until:0,o=e.trigger_mode!=="owner"||e.is_owner,p=mt(e),g=a&&!e.last_trigger_mine&&e._triggerAt>0,w=e.last_trigger_pseudo||"un membre",_=s?`Signal envoy\xE9 \xB7 ${n.count} sur ${n.quorum}`:g?w:"",q=g?Ye(w,t-e._triggerAt):a?Be(i-t):s?Oe(_,i-t):p,Ze=g?"ago":a?"cool":"pending",et=o?`${e.title} : maintenir appuy\xE9 pour envoyer l'alerte`:`${e.title} : ${p}`;return`<div class="tile">
    <button class="alarm-btn ${a?"cooldown":s?"pending":""}" data-hold="${e.id}" data-hint="${l(p)}"
      ${i?`data-until="${i}" data-kind="${Ze}" data-prefix="${l(_)}"${g?` data-since="${e._triggerAt}"`:""}`:""} ${o?"":"disabled"} aria-label="${l(et)}">
      ${r("i-bell")}<strong>${l(e.title)}</strong><span class="hold-hint">${l(q)}</span>
    </button>
    <div class="tile-foot">
      <div><div class="tile-meta">${e.visibility==="private"?"Priv\xE9e":"Publique"}</div>${ve(e.reliability)}</div>
      <div class="tile-actions">
        <button data-action="open-share" data-id="${e.id}" aria-label="Partager \xAB ${l(e.title)} \xBB">${r("i-share")}</button>
        <button data-action="alert-menu" data-id="${e.id}" aria-label="Options de \xAB ${l(e.title)} \xBB">${r("i-dots")}</button>
      </div>
    </div>
  </div>`}function ht(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var J=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,x=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,bt=/Android/i.test(navigator.userAgent),He=!1;function Ue(){if(!bt||!x)return"";let e=new URL(location.href.split("#")[0]);e.search="?ouvrir=reglages";let t=`intent://${e.host}${e.pathname}${e.search}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(e.href)};end`;return`<a class="btn small chrome-link" href="${l(t)}">${r("i-link")}Ouvrir dans Chrome pour r\xE9parer</a>`}var I=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),I=e,b.name==="join"&&f(!0)});window.addEventListener("appinstalled",()=>{I=null,c("app_installed")});function gt(){return x?"":J?`<div class="install">
      <b>Sur iPhone, pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e :</b>
      <ol>
        <li>${r("i-bell-outline")}<span>Touche <b>Je veux \xEAtre pr\xE9venu</b> : ton invitation est copi\xE9e</span></li>
        <li>${r("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari, puis <b>Sur l'\xE9cran d'accueil</b></span></li>
        <li>${r("i-link")}<span>Ouvre SAYE depuis l'ic\xF4ne et touche <b>Coller mon lien d'invitation</b></span></li>
      </ol>
    </div>`:I?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function se(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:S==="ok"?{ok:!0,text:"Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:S?ae?{code:"failed",text:"Google refuse pour l'instant d'inscrire ce t\xE9l\xE9phone aux notifications. Essaie : ouvrir SAYE dans Chrome (pas l'ic\xF4ne) puis R\xE9parer, ou red\xE9marrer le t\xE9l\xE9phone.",action:"fix-notif",label:"R\xE9parer"}:{code:"failed",text:"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function vt(){if(J&&!x)return`<div class="alertbox">${r("i-bell-off")}<div><b>Installe SAYE pour \xEAtre pr\xE9venu app ferm\xE9e</b>
      Sur iPhone : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB. Ouvre SAYE depuis l'ic\xF4ne et touche \xAB Coller mon lien d'invitation \xBB${He?" (ton invitation est d\xE9j\xE0 copi\xE9e)":""}.</div></div>`;let e=se(),a={off:["Active les notifications","Sinon, tu ne seras pas pr\xE9venu quand l'app est ferm\xE9e.","Activer"],denied:["Notifications bloqu\xE9es","Autorise-les pour SAYE dans les r\xE9glages de ton navigateur, sinon tu ne seras pas pr\xE9venu app ferm\xE9e.",null],failed:["Notifications \xE0 r\xE9parer",ae?"Google refuse pour l'instant d'inscrire ce t\xE9l\xE9phone aux notifications. Essaie : ouvrir SAYE dans Chrome (pas l'ic\xF4ne) puis R\xE9parer, ou red\xE9marrer le t\xE9l\xE9phone.":"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.","R\xE9parer"]}[e.code];return a?`<div class="alertbox" role="alert">${r("i-bell-off")}<div><b>${a[0]}</b>${a[1]}
    ${a[2]?`<button class="btn small" data-action="fix-notif">${a[2]}</button>`:""}
    ${e.code==="failed"?Ue():""}</div></div>`:""}function yt(){if(J&&!x)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=se(),t=e.ok?"ok":e.code==="pending"?"wait":"err",a=e.ok?r("i-check"):e.code==="pending"?"":r("i-bell-off");return`<p id="notif-status" class="status ${t}">${a}<span>${l(e.text)}</span></p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}
    ${e.code==="failed"?Ue():""}`}var L={q:"",sort:"populaires"};$.find=async()=>{let{data:e,error:t}=await m.rpc("find_alerts",{p_query:L.q,p_category:null,p_sort:L.sort});if(t)throw t;let a=e||[],n=(i,o)=>`<button data-action="find-sort" data-v="${i}" aria-pressed="${L.sort===i}">${o}</button>`,s=L.q?`<div class="emptystate">${r("i-search")}<b>Aucun r\xE9sultat</b><p>Aucune alerte publique ne correspond \xE0 \xAB ${l(L.q)} \xBB.</p></div>`:`<div class="emptystate">${r("i-globe")}<b>Aucune alerte publique pour l'instant</b><p>Cr\xE9e la premi\xE8re : toute la communaut\xE9 pourra la rejoindre.</p></div>`;return`
  ${ne("Choisir une alerte")}
  ${x?`<div class="find-paste"><p class="note-muted m0">Tu as re\xE7u un lien d'invitation ?</p>${we("btn outline small mt-8")}</div>`:""}
  <div class="search">${r("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" aria-label="Rechercher une alerte" value="${l(L.q)}"></div>
  <div class="segmented" role="group" aria-label="Trier les alertes">${n("populaires","Populaires")}${n("recentes","R\xE9centes")}</div>
  ${a.length?`<div class="list">${a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${l(i.title)}</b>
          <span>par ${l(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${ve(i.reliability)}
      </button>`).join("")}</div>`:s}
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};$.join=async({id:e,query:t})=>{let a=t.get("c"),{data:n,error:s}=await m.rpc("get_alert_preview",{p_alert:e,p_code:a});return s||!n?`${Y("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${Y("Rejoindre une alerte","#/home")}
  <div class="pill-title">${r(n.visibility==="private"?"i-lock":"i-globe")}${l(n.title)}</div>
  <p class="body-lg">
    ${n.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${l(n.owner_pseudo||"Anonyme")}</b>
  </p>
  ${ve(n.reliability)}
  <div class="grow"></div>
  ${gt()}
  ${n.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${n.id}" data-code="${l(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};$.alarm=async({id:e})=>(setTimeout(()=>St(Number(e))),$.alerts());$.settings=()=>`
  ${ne("R\xE9glages")}
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
    <div id="notif-zone">${yt()}</div>
    <details>
      <summary class="muted">D\xE9tails techniques</summary>
      <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
      <pre id="diag" class="diag" aria-live="polite"></pre>
    </details>
  </section>

  <section class="group" aria-labelledby="g-pseudo">
    <h2 id="g-pseudo">Mon pseudo</h2>
    ${$t()}
  </section>

  <section class="group" aria-labelledby="g-apropos">
    <h2 id="g-apropos">\xC0 propos</h2>
    <label class="setrow"><span>Statistiques anonymes<small>Aide \xE0 am\xE9liorer SAYE : ni cookie, ni identifiant</small></span>
      <input type="checkbox" class="switch" role="switch" data-pref="stats" ${d.stats!==!1?"checked":""}></label>
    <div class="note info">${r("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
    <button class="link-btn" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
    <p class="version">Version ${he} \xB7 b\xEAta (version de test)</p>
  </section>`;function $t(){let e=`
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
  <p class="pseudo-name">${l(h.pseudo)}</p>
  <p class="hint warn">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!h.canChangeAt||new Date(h.canChangeAt)<=new Date;return`
  <p class="pseudo-name">${l(h.pseudo)} \u2713</p>
  <p class="note-muted m0">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details class="mt-10">
    <summary>Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" aria-label="Nouveau pseudo" data-live="s-pseudo-check" class="mt-10">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${pt(h.canChangeAt)}.</p>`}
  ${e}`}$.legal=()=>`
  ${Y("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Mesure d'audience</h3><p>Pour s'am\xE9liorer, SAYE compte de fa\xE7on anonyme les \xE9tapes de son utilisation (par exemple \xAB alerte cr\xE9\xE9e \xBB ou \xAB alerte envoy\xE9e \xBB). Aucun cookie, aucun identifiant, aucun pseudo ni aucune adresse ne sont utilis\xE9s : il est impossible de relier ces compteurs \xE0 une personne. Ils sont conserv\xE9s 13 mois au maximum, puis effac\xE9s automatiquement. Tu peux d\xE9sactiver cette mesure \xE0 tout moment dans R\xE9glages \u2192 \xC0 propos \u2192 Statistiques anonymes. Elle est aussi d\xE9sactiv\xE9e si ton navigateur demande \xE0 ne pas \xEAtre suivi.</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function ie({trigger:e,alert:t,test:a=!1,lateS:n=null}){O={triggerId:e?.id,alertId:t?.id,test:a},ye(t?.id,e?.id);let s=e&&!a?`D\xE9clench\xE9e par ${e.pseudo||"un membre"}${n!=null?` il y a ${n<60?`${Math.max(1,n)} s`:`${Math.round(n/60)} min`}`:""}`:"";v.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-modal="true" aria-labelledby="alarm-title" aria-describedby="alarm-desc">
      <div class="kicker" aria-hidden="true">ALERTE !</div>
      ${r("i-bell","big")}
      <h2 id="alarm-title">Alerte : ${l(t?.title||"Test de ton alerte")}</h2>
      <div class="by" id="alarm-desc">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}${s?`<span class="who">${l(s)}</span>`:""}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,v.querySelector("[data-action=stop-alarm]")?.focus(),Re(d.sound,!0),lt()}function H(){Ie(),navigator.vibrate&&navigator.userActivation?.hasBeenActive&&navigator.vibrate(0),v.innerHTML="",O=null}function Ve(){!x||O||v.innerHTML||["splash","intro","alarm"].includes(b.name)||se().code==="off"&&(d.notifLater&&Date.now()-d.notifLater<24*3600*1e3||(c("notif_step","vu"),v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="notif-title">
      ${r("i-bell","mid")}
      <h1 id="notif-title">Active les notifications</h1>
      <p class="lead">Pour \xEAtre pr\xE9venu \xE0 la seconde, m\xEAme quand SAYE est ferm\xE9e ou l'\xE9cran \xE9teint.</p>
      <p class="sub">Sans elles, l'alerte n'arrive que si SAYE est ouverte \xE0 l'\xE9cran.</p>
      <button class="btn" data-action="notif-step-on">Activer les notifications</button>
      <button class="btn outline" data-action="notif-step-later">Plus tard</button>
    </div>`,v.querySelector("[data-action=notif-step-on]")?.focus()))}function wt(){v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      ${r("i-bell","mid")}
      <h1 id="thanks-title">Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`,v.querySelector("[data-action=close-overlay]")?.focus()}var D=null;function Je(e){if(!e||e===document.body)return null;let t=e.dataset?.hold?`[data-hold="${e.dataset.hold}"]`:e.dataset?.action&&e.dataset?.id?`[data-action="${e.dataset.action}"][data-id="${e.dataset.id}"]`:null;return{el:e,sel:t}}function P(e,t,a=document.activeElement){v.querySelector(".sheet")||(D=Je(a)),v.innerHTML=`<div class="sheet" data-action="close-sheet">
    <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="${l(t)}">
      <div class="sheet-grip" aria-hidden="true"></div>${e}
    </div></div>`,v.querySelector(".sheet-panel button, .sheet-panel a")?.focus()}function C(){if(!v.querySelector(".sheet"))return;v.innerHTML="",(D?.el?.isConnected?D.el:D?.sel&&document.querySelector(D.sel))?.focus(),D=null}function We(e,t){let a=y.find(n=>n.id===e);if(a){if(a.trigger_mode==="owner"&&!a.is_owner)return u("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");P(`
    <p class="sheet-title">Envoyer l'alerte ?</p>
    <p class="sheet-text">\xAB ${l(a.title)} \xBB : ${a.trigger_mode==="quorum"?"ton signal sera compt\xE9.":"tous les membres seront pr\xE9venus."}</p>
    <button class="btn" data-action="send-now" data-id="${a.id}">Envoyer maintenant</button>
    <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer l'envoi",t)}}async function N(e,t){if(!(!e||e.disabled)){e.disabled=!0,e.classList.add("busy"),e.setAttribute("aria-busy","true");try{return await t()}finally{e.isConnected&&(e.disabled=!1,e.classList.remove("busy"),e.removeAttribute("aria-busy"))}}}async function Fe(e){if(!navigator.onLine)return u("Pas de connexion : l'alerte n'a pas \xE9t\xE9 envoy\xE9e.",4e3);await W;let{data:t,error:a}=await m.rpc("press_alert",{p_alert:e});if(a)return c("send_error","erreur"),u(Z(a));if(t.status==="cooldown")return c("send_error","pause"),u("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return c("send_error","interdit"),u("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(c("send_ok",t.status==="triggered"?"envoyee":"quorum_en_attente"),t.status==="triggered"){wt(),f(!0);return}t.status==="pending"&&(de[e]={count:t.count,quorum:t.quorum,until:Date.now()+t.window_s*1e3},u(`Signal enregistr\xE9 : l'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,4500),f(!0))}var fe={start(){d.onboarded=!0,B(),c("onboarding_done"),E("#/home"),setTimeout(Ve,400)},"pick-visibility"(e){M={visibility:e.dataset.v},c("create_start",e.dataset.v==="public"?"publique":"privee"),E("#/create-form")},"open-share"(e){C(),M.justCreated=!1,E(`#/share/${e.dataset.id}`)},"open-join"(e){E(`#/join/${e.dataset.id}`)},join(e){J&&!x&&navigator.clipboard?.writeText&&navigator.clipboard.writeText(Pe({id:e.dataset.id},e.dataset.code)).then(()=>{He=!0},()=>{});let t=G();return N(e,async()=>{await W;let{error:a}=await m.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return u(Z(a));c("join_done",e.closest(".similar")?"suggestion":"lien"),await A().catch(()=>{}),u(J&&!x?"C'est not\xE9 ! Installe SAYE pour \xEAtre pr\xE9venu m\xEAme app ferm\xE9e.":"Tu seras pr\xE9venu !",4e3),E("#/alerts"),t.then(R).then(()=>{b.name==="alerts"&&f(!0)})})},async"paste-invite"(e){let t="";try{t=await navigator.clipboard.readText()}catch{}let a=xe(t);if(a){c("invite_paste","auto"),E(a);return}P(`
      <p class="sheet-title">Coller mon lien d'invitation</p>
      <p class="sheet-text">Colle ici le lien re\xE7u par SMS, WhatsApp ou e-mail.</p>
      <input id="invite-url" type="url" inputmode="url" placeholder="https://\u2026" aria-label="Lien d'invitation" autocomplete="off">
      <button class="btn mt-10" data-action="invite-go">Continuer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Coller mon lien d'invitation",e),document.getElementById("invite-url")?.focus()},"invite-go"(){let e=xe(document.getElementById("invite-url")?.value);if(!e)return c("invite_paste","invalide"),u("Ce n'est pas un lien d'invitation SAYE.",3500);c("invite_paste","manuel"),C(),E(e)},async"notif-step-on"(e){e.classList.add("busy"),e.disabled=!0,c("notif_step","activer"),await G(),await R(),H(),u(S==="ok"?"Notifications activ\xE9es !":Notification.permission==="denied"?"Notifications refus\xE9es : autorise-les dans les r\xE9glages du t\xE9l\xE9phone pour \xEAtre pr\xE9venu app ferm\xE9e.":"Inscription impossible pour l'instant : r\xE9essaie dans R\xE9glages.",4500),f(!0)},"notif-step-later"(){d.notifLater=Date.now(),B(),c("notif_step","plus_tard"),H(),f(!0)},"confirm-send"(e){We(e.dataset.id)},"send-now"(e){let t=e.dataset.id;C(),c("send_confirm"),Fe(t)},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${he} \xB7 permission : ${"Notification"in window?Notification.permission:"indisponible"}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let n=await a.pushManager.getSubscription();if(t(`Abonnement existant : ${n?"oui":"non"}`),n){await R(),t(`Enregistrement serveur : ${S}`);return}let s=async(w,_)=>{try{let q=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_});return t(`${w} : OK (${new URL(q.endpoint).host})`),q}catch(q){return t(`${w} : \xC9CHEC ${q.name} ${q.message}`),null}};if(await s("Cl\xE9 SAYE",Ge(le))){await R(),t(`Enregistrement serveur : ${S}`);return}let o=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),p=new Uint8Array(await crypto.subtle.exportKey("raw",o.publicKey)),g=await s("Cl\xE9 de test neuve",p);g&&await g.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(e){e?.classList.add("busy");let t=document.getElementById("notif-zone");t&&(t.innerHTML='<p class="status wait" role="status">Inscription en cours\u2026</p>'),await G(),await R(),S==="ok"&&u("Notifications activ\xE9es !"),f(!0)},async"install-app"(){if(I?.prompt){I.prompt(),c("install_click");try{await I.userChoice}catch{}I=null,f(!0)}},"alert-menu"(e){let t=y.find(n=>n.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner";P(`
      <p class="sheet-title">${l(t.title)}</p>
      ${t.trigger_mode!=="owner"||t.is_owner?`<button class="sheet-item" data-action="confirm-send" data-id="${t.id}">${r("i-bell-outline")}Envoyer l'alerte maintenant</button>`:""}
      <button class="sheet-item" data-action="open-share" data-id="${t.id}">${r("i-share")}Partager l'alerte</button>
      ${a?`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="delete">${r("i-trash")}Supprimer pour tout le monde</button>`:`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="leave">${r("i-leave")}Quitter l'alerte</button>`}
      <button class="sheet-item" data-action="close-sheet">${r("i-close")}Annuler</button>`,`Options de ${t.title}`,e)},"sheet-confirm"(e){let t=y.find(s=>s.id===e.dataset.id);if(!t)return C();let a=e.dataset.kind==="delete",n=a?"sera supprim\xE9e pour tous ses membres.":t.is_owner?"restera active pour les autres membres.":"ne te pr\xE9viendra plus.";P(`
      <p class="sheet-title">${a?"Supprimer pour tout le monde ?":"Quitter l'alerte ?"}</p>
      <p class="sheet-text">\xAB ${l(t.title)} \xBB ${n}</p>
      <button class="btn danger" data-action="sheet-do" data-id="${t.id}" data-kind="${e.dataset.kind}">${a?"Supprimer":"Quitter"}</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,a?"Confirmer la suppression":"Confirmer")},"sheet-do"(e){let t=e.dataset.kind==="delete";return N(e,async()=>{let a=t?m.from("alerts").delete().eq("id",e.dataset.id):m.from("members").delete().eq("alert_id",e.dataset.id).eq("user_id",h.id),{error:n}=await a;if(C(),n)return u(Z(n));u(t?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),c(t?"alert_delete":"alert_leave"),await A().catch(()=>{}),f()})},"close-sheet"(e,t){e.classList.contains("sheet")&&t.target.closest(".sheet-panel")||C()},async"show-qr"(e){P(`
      <p class="sheet-title">QR code de l'alerte</p>
      <p class="sheet-text">\xC0 scanner avec l'appareil photo pour rejoindre \xAB ${l(e.dataset.title)} \xBB.</p>
      <div class="qr" id="qr"><div class="spinner" role="status" aria-label="Cr\xE9ation du QR code"></div></div>
      <button class="btn outline" data-action="close-sheet">Fermer</button>`,"QR code");try{let t=await import("https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm"),a=await(t.default||t).toString(e.dataset.url,{type:"svg",margin:1,errorCorrectionLevel:"M",color:{dark:"#1a2414",light:"#ffffff"}}),n=document.getElementById("qr");n&&(n.innerHTML=a,n.setAttribute("role","img"),n.setAttribute("aria-label","QR code du lien de l'alerte"))}catch{let t=document.getElementById("qr");t&&(t.innerHTML='<p class="qr-msg">QR code indisponible (v\xE9rifie ta connexion).</p>')}},"find-sort"(e){L.sort=e.dataset.v,f(!0)},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),u("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}u("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else fe.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),u("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){O?.test||c("alarm_stop"),H()},"close-overlay"(){H(),f()},"test-alarm"(){c("alarm_test"),ie({test:!0})},"claim-pseudo"(e){return N(e,async()=>{try{await z(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),u("Pseudo r\xE9serv\xE9 !"),c("pseudo_claim"),f(!0)}catch(t){u(t.message,4e3)}})},"protect-pseudo"(e){return N(e,async()=>{try{await z(h.pseudo,document.getElementById("s-pass").value),u("Pseudo prot\xE9g\xE9 !"),f(!0)}catch(t){u(t.message,4e3)}})},"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();P(`
      <p class="sheet-title">Changer de pseudo ?</p>
      <p class="sheet-text">Ton pseudo deviendra \xAB ${l(t)} \xBB. Plus de changement possible pendant 30 jours.</p>
      <button class="btn" data-action="change-pseudo-ok" data-v="${l(t)}">Changer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer le changement de pseudo")},"change-pseudo-ok"(e){return N(e,async()=>{try{await z(e.dataset.v),C(),u("Pseudo chang\xE9."),f(!0)}catch(t){u(t.message,4e3)}})},"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;return!t||!a?u("Indique ton pseudo et ton mot de passe."):N(e,async()=>{let{data:n}=await m.rpc("pseudo_login_id",{p:t}),{error:s}=n?await m.auth.signInWithPassword({email:n,password:a}):{error:!0};if(s)return u("Pseudo ou mot de passe incorrect.",3500);try{localStorage.removeItem(ge)}catch{}u("Connect\xE9 !"),c("pseudo_login"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)})},"reset-prefs"(){P(`
      <p class="sheet-title">Effacer tes pr\xE9f\xE9rences ?</p>
      <p class="sheet-text">Son, vibreur, flash et tri reviennent aux r\xE9glages d'origine sur ce t\xE9l\xE9phone. Tes alertes ne sont pas touch\xE9es.</p>
      <button class="btn danger" data-action="reset-prefs-ok">Effacer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer")},"reset-prefs-ok"(){d={...ue,onboarded:!0},B(),C(),f(!0),u("Pr\xE9f\xE9rences effac\xE9es.")}},Ke=0;document.addEventListener("click",e=>{let t=e.target.closest("[data-track]");if(t){let[i,o]=t.dataset.track.split(":");c(i,o||null)}let a=e.target.closest("[data-hold]");if(a){e.preventDefault(),!a.disabled&&Date.now()-Ke>1e3&&We(a.dataset.hold,a);return}let n=e.target.closest("[data-back]");if(n){e.preventDefault();let i=n.dataset.back;i==="history"&&history.length>1?history.back():E(i==="history"?"#/home":i);return}let s=e.target.closest("[data-action]");if(s&&fe[s.dataset.action]){s.tagName==="BUTTON"&&e.preventDefault();let i=s.dataset.action,o=p=>{be(p,i),u("Oups, une erreur est survenue. R\xE9essaie.")};try{let p=fe[i](s,e);p&&typeof p.catch=="function"&&p.catch(o)}catch(p){o(p)}}});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,B(),t.dataset.pref==="sound"&&Re(t.value))});var Te;function _t(e){clearTimeout(Te);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}Te=setTimeout(async()=>{let{data:n}=await m.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let s=n||[];t.innerHTML=s.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${s.map(i=>`
        <div class="card">
          <div class="grow">
            <b>${l(i.title)}</b>
            <span>par ${l(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
          </div>
          ${i.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${i.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var Ce;document.addEventListener("input",e=>{e.target.dataset.live&&dt(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&_t(e.target),e.target.id==="find-q"&&(clearTimeout(Ce),Ce=setTimeout(()=>{L.q=e.target.value.trim(),L.q&&c("find_search"),f(!0)},700))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0,a.classList.add("busy");let n=G();try{let s=String(t.get("pseudo")||"").trim();s&&!h.pseudo&&await z(s,String(t.get("password")||""));let{data:i,error:o}=await m.from("alerts").insert({title:String(t.get("title")).trim(),visibility:M.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(o)throw o;M={justCreated:!0},c("create_done",{one:"un_clic",quorum:"quorum",owner:"moi_seul"}[t.get("trigger_mode")]),E(`#/share/${i.id}`),n.then(R)}catch(s){u(s instanceof Error&&!s.code?s.message:Z(s),4e3),a.disabled=!1,a.classList.remove("busy")}});var ze=600,k=null;function Qe(e){if(e.disabled)return;if(e.classList.contains("cooldown")){u("Alerte d\xE9j\xE0 envoy\xE9e : patiente quelques secondes.");return}if(e.classList.contains("pending")){u("Ton signal est d\xE9j\xE0 compt\xE9 : d'autres membres doivent appuyer aussi.");return}F(),e.classList.add("holding"),me(15);let t=e.dataset.hold;k={btn:e,start:Date.now(),timer:setTimeout(()=>{k=null,e.classList.remove("holding"),me(60),c("hold_done"),Fe(t)},ze)}}function F(e=!1){k&&(clearTimeout(k.timer),k.btn.classList.remove("holding"),e&&Date.now()-k.start<ze&&(u("Maintiens le bouton appuy\xE9 pour envoyer l'alerte."),c("hold_short")),k=null)}document.addEventListener("pointerdown",e=>{let t=e.target.closest("[data-hold]");t&&e.button===0&&(Ke=Date.now(),Qe(t))});document.addEventListener("pointerup",()=>F(!0));document.addEventListener("pointercancel",()=>F());document.addEventListener("pointerout",e=>{k&&e.target.closest?.("[data-hold]")===k.btn&&!k.btn.contains(e.relatedTarget)&&F()});document.addEventListener("contextmenu",e=>{e.target.closest?.("[data-hold]")&&e.preventDefault()});document.addEventListener("keydown",e=>{let t=e.target.closest?.("[data-hold]");if(t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||Qe(t)),e.key==="Escape"&&(v.querySelector(".sheet")?C():v.innerHTML&&H()),e.key==="Tab"){let a=v.querySelector(".sheet-panel, .full");if(!a)return;let n=[...a.querySelectorAll('button, a[href], input, select, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.disabled);if(!n.length)return;let s=n[0],i=n[n.length-1];a.contains(document.activeElement)?e.shiftKey&&document.activeElement===s?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),s.focus()):(e.preventDefault(),s.focus())}});document.addEventListener("keyup",e=>{e.target.closest?.("[data-hold]")&&(e.key==="Enter"||e.key===" ")&&e.preventDefault(),k&&(e.key==="Enter"||e.key===" ")&&F(!0)});setInterval(()=>{document.querySelectorAll("[data-until]").forEach(e=>{let t=Number(e.dataset.until)-Date.now(),a=e.querySelector(".hold-hint");if(t<=0)e.classList.remove("cooldown","pending"),e.removeAttribute("data-until"),a&&(a.textContent=e.dataset.hint);else if(a){let n=e.dataset.kind;a.textContent=n==="pending"?Oe(e.dataset.prefix,t):n==="ago"?Ye(e.dataset.prefix,Date.now()-Number(e.dataset.since)):Be(t)}})},1e3);var Q=null;function _e(){Q&&m.removeChannel(Q),ee="connecting",te(),Q=m.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===h.id)return;ye(e.alert_id,e.id),await A();let t=y.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&Et(t,e),c("alarm_received","app_ouverte"),ie({trigger:e,alert:t}),b.name==="alerts"&&f(!0))}).subscribe(e=>{ee=e==="SUBSCRIBED"?"ok":"connecting",te()})}window.addEventListener("offline",te);window.addEventListener("online",()=>{te(),h&&(_e(),A().then(()=>{$e(),b.name==="alerts"&&f(!0)}).catch(()=>{}))});document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||!h||((ee!=="ok"||Q?.state!=="joined")&&_e(),A().then(e=>{$e(),e&&b.name==="alerts"&&f(!0)}).catch(()=>{}))});async function St(e){location.hash.startsWith("#/alarm/")&&(history.replaceState(null,"","#/alerts"),b=Xe());let{data:t}=await m.rpc("recent_trigger",{p_trigger:e});if(!t||(V[t.alert_id]||0)>=t.id)return;await A();let a=y.find(n=>n.id===t.alert_id);a&&(c("alarm_received","notification"),ie({trigger:t,alert:a}))}function Ge(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var S="",ae=!1;async function R(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return S="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return S="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return S="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return S="Notifications pas encore autoris\xE9es.";let e=n=>{let s=n.toJSON();return m.rpc("save_push_subscription",{p_endpoint:s.endpoint,p_p256dh:s.keys.p256dh,p_auth:s.keys.auth})},t=Ge(le),a=async n=>{try{return await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})}catch(s){if(s?.name==="AbortError")return await new Promise(i=>setTimeout(i,2e3)),n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t});throw s}};try{await W;let n=await navigator.serviceWorker.ready,s=await n.pushManager.getSubscription();s||(s=await a(n));let{error:i}=await e(s);if(i)throw new Error(`enregistrement : ${i.message}`);return ae=!1,S="ok"}catch(n){return console.warn("push",n),ae=n?.name==="AbortError"&&/push service/i.test(n?.message||""),S=`\xC9chec de l'inscription : ${n?.name||""} ${n?.message||n}`.trim()}}function G(){return"Notification"in window?Notification.permission!=="default"?Promise.resolve(Notification.permission):(c("notif_prompt"),Notification.requestPermission().then(e=>(c(e==="granted"?"notif_granted":"notif_denied"),e))):Promise.resolve("unsupported")}async function Et(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),n={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,n):new Notification(`ALERTE ! ${e.title}`,n)}var kt={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},b={name:"splash"},K=0;function Xe(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,n]=e.split("/");return{name:$[a]?a:"home",id:n,query:new URLSearchParams(t||"")}}async function f(e=!1){let t=++K,a=b.name;b=Xe(),b.name!==a&&(b.name==="join"&&c("join_view"),b.name==="find"&&c("find_view"));let n=b,s=!["splash","intro"].includes(n.name);Se.hidden=!s,document.body.classList.toggle("no-tabbar",!s),Se.querySelectorAll("a").forEach(o=>{let p=o.dataset.tab===kt[n.name];o.classList.toggle("on",p),p?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")});let i=e?null:setTimeout(()=>{t===K&&(T.innerHTML='<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span class="sr-only">Chargement\u2026</span></div>')},250);try{["splash","intro","home","alerts","legal"].includes(n.name)||await W;let o=await $[n.name](n);if(clearTimeout(i),t!==K)return;let p=document.activeElement?.id,g=document.activeElement?.selectionStart,w=e&&T.contains(document.activeElement)?Je(document.activeElement):null;if(T.innerHTML=o,w?.sel&&document.querySelector(w.sel)?.focus({preventScroll:!0}),e||(T.classList.remove("enter"),T.offsetWidth,T.classList.add("enter")),p==="find-q"){let _=document.getElementById("find-q");_?.focus(),_&&g!=null&&_.setSelectionRange(g,g)}n.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||(window.scrollTo(0,0),v.innerHTML||T.querySelector("h1")?.focus({preventScroll:!0}))}catch(o){clearTimeout(i),console.error(o),c("load_error",n.name.replace(/[^a-z]/g,"").slice(0,20)||null),t===K&&(T.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>f());async function At(){if("serviceWorker"in navigator){let a=!!navigator.serviceWorker.controller,n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a&&!n&&!O&&(n=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(s=>{s.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s.update().catch(()=>{})})}).catch(()=>{})}new URLSearchParams(location.search).get("ouvrir")==="reglages"&&(history.replaceState(null,"",`${location.pathname}#/settings`),d.onboarded||(d.onboarded=!0,B()));let e=!location.hash||location.hash==="#/"||location.hash==="#/splash";e&&!d.onboarded?location.replace("#/splash"):location.hash.startsWith("#/join/")&&!d.onboarded&&(d.onboarded=!0,B()),c("app_open",x?"installee":"navigateur");let t=rt();Array.isArray(t?.alerts)&&(y=t.alerts,X=!0,U=Date.now()),e&&d.onboarded&&X?location.replace(y.length?"#/alerts":"#/home"):e&&d.onboarded||f();try{await ct(),m.rpc("touch_my_alerts");let[,a]=await Promise.all([Me(),A().catch(()=>!1)]);_e(),$e(),R().then(()=>{let n=se();c("push_state",n.ok?"ok":{off:"non_demande",denied:"bloque",failed:"echec",unsupported:"non_supporte"}[n.code]||null),["alerts","settings"].includes(b.name)&&f(!0),Ve()}),e&&d.onboarded&&!t?location.replace(y.length?"#/alerts":"#/home"):a&&["alerts","home"].includes(b.name)&&f(!0)}catch(a){console.error(a),T.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>'}}At();
