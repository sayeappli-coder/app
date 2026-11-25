import{createClient as ht}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var fe="https://xtyysubdpapuxjlynapp.supabase.co",he="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",be="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";async function bt(e,t={}){let a=await fetch(e,t);if(a.status!==401||String(e).includes("/auth/v1/"))return a;let n=await a.clone().text().catch(()=>"");if(!/JWT expired/i.test(n))return a;let{data:s}=await f.auth.refreshSession(),i=s?.session?.access_token;if(!i)return a;let l=new Headers(t.headers||{});return l.set("Authorization",`Bearer ${i}`),fetch(e,{...t,headers:l})}var f=ht(fe,he,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1},global:{fetch:(e,t)=>bt(e,t)}}),P=document.getElementById("app"),v=document.getElementById("overlay"),Ie=document.getElementById("tabbar"),ve=document.getElementById("toast"),Ae="0.26",Ve="saye.prefs",ge={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1,stats:!0};function vt(){try{return{...ge,...JSON.parse(localStorage.getItem(Ve)||"{}")}}catch{return{...ge}}}function B(){try{localStorage.setItem(Ve,JSON.stringify(d))}catch{}}var d=vt(),x=!!window.Capacitor?.isNativePlatform?.(),gt="https://sayeappli-coder.github.io/app/";function j(e,t={}){let a=window.Capacitor?.Plugins?.SayeAlarm;return a?.[e]?a[e](t):window.Capacitor.nativePromise("SayeAlarm",e,t)}var g=null,A="",Q="",b=null,Fe=0,ye=0,je=!1;async function yt(){try{b=await j("diagnose")}catch(e){b={erreur:String(e?.message||e)}}if(!je){je=!0;let e=(/([A-Z][A-Z_]{5,})/.exec(`${b?.token||""} ${Q}`)?.[1]||"inconnu").toLowerCase().slice(0,20);o("fcm_error",e),b?.gmsCode&&o("fcm_error",`gms_${b.gmsCode}`)}return b}async function Me(){try{g=await j("status")}catch{g=null}return g}var Ne=null;async function X(e=0){clearTimeout(Ne),Fe++,ye=Date.now();try{let{token:t}=await j("getToken");await W;let{error:a}=await f.rpc("save_fcm_token",{p_token:t});if(a)throw a;A="ok",Q=""}catch(t){A="echec",Q=String(t?.message||t),b||await yt();let a=[3e3,1e4,3e4,6e4];e<a.length&&(Ne=setTimeout(()=>X(e+1).then(()=>{["alerts","settings"].includes(h.name)&&p(!0)}),a[e]))}return A}var xe=()=>!!g&&g.notifications&&g.fullScreen&&A==="ok",$t=!x&&["localhost","127.0.0.1"].includes(location.hostname)?"dev":Ae;function o(e,t=null){try{if(d.stats===!1||navigator.globalPrivacyControl||navigator.doNotTrack==="1"||!navigator.onLine)return;fetch(`${fe}/rest/v1/rpc/track`,{method:"POST",keepalive:!0,headers:{apikey:he,"Content-Type":"application/json"},body:JSON.stringify({p_name:e,p_detail:t,p_version:$t})}).catch(()=>{})}catch{}}var wt=0;function Le(e,t){console.error(e);try{if(wt++>=5)return;let a=String(e?.name||"erreur").toLowerCase().replace(/[^a-z]/g,"").replace(/(.)error$/,"$1").slice(0,9)||"erreur",n=String(t||h.name||"").toLowerCase().replace(/[^a-z]/g,"").slice(0,10);o("js_error",n?`${a}_${n}`:a)}catch{}}window.addEventListener("error",e=>Le(e.error||{name:"erreur"}));window.addEventListener("unhandledrejection",e=>Le(e.reason));["standard","alpha","membres"].includes(d.sort)||(d.sort="standard");var y=null,_=[],O={},K=null,ie=!1,De="",z=0,$e={},Je,W=new Promise(e=>{Je=e}),Ce="saye.cache";function _t(){try{return JSON.parse(localStorage.getItem(Ce)||"null")}catch{return null}}function St(){try{localStorage.setItem(Ce,JSON.stringify({alerts:_}))}catch{}}var Ye={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},c=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),r=(e,t="")=>`<svg class="${t}" aria-hidden="true" focusable="false"><use href="#${e}"/></svg>`;function u(e,t=2600){ve.textContent=e,ve.hidden=!1,clearTimeout(u.t),u.t=setTimeout(()=>{ve.hidden=!0},t)}function k(e){location.hash=e}function J(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${r("i-back")}</button>
    <h1 tabindex="-1">${c(e)}</h1>
  </div>`}var de=e=>`<h1 tabindex="-1">${c(e)}</h1>`;function qe(e){let t=Ye[e]||Ye.a_confirmer;return`<span class="rel ${e}">${t.icon?r(t.icon):`<b aria-hidden="true">${t.mark}</b>`} ${t.label}</span>`}var Et=()=>x?gt:location.href.split("#")[0],kt="https://saye-8b05d.web.app/j/";function Ke(e,t){return`${kt}${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function re(e){let t=e?.message||String(e);return!navigator.onLine||/Failed to fetch|NetworkError|Load failed/i.test(t)?"Pas de connexion : r\xE9essaie quand le r\xE9seau revient.":t.includes("titre_interdit")?"Ce titre contient un mot interdit pour une alerte publique : reformule-le.":t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var U=null,we=null;function We(e=d.sound,t=!1){if(ze(),e!=="aucun")try{U=U||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},n=a[e]||a.court,s=()=>{let l=U.currentTime;for(let[m,$]of n){if(m){let E=U.createOscillator(),w=U.createGain();E.type=e==="sirene"?"sawtooth":"sine",E.frequency.value=m,w.gain.setValueAtTime(1e-4,l),w.gain.exponentialRampToValueAtTime(.35,l+.02),w.gain.exponentialRampToValueAtTime(1e-4,l+$),E.connect(w).connect(U.destination),E.start(l),E.stop(l+$)}l+=$}return n.reduce((m,[,$])=>m+$,0)},i=s();t&&(we=setInterval(s,(i+.6)*1e3))}catch{}}function ze(){clearInterval(we),we=null}function _e(e){d.vibrate&&navigator.vibrate&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate(e)}function At(){_e([400,150,400,150,800])}async function xt(){let{data:{session:e}}=await f.auth.getSession();if(e&&navigator.onLine){let{error:t}=await f.auth.getUser();t&&(t.code==="user_not_found"||t.status===403&&/does not exist/i.test(t.message||""))&&(await f.auth.signOut({scope:"local"}),e=null)}if(!e){navigator.onLine||await new Promise(n=>window.addEventListener("online",n,{once:!0}));let{data:t,error:a}=await f.auth.signInAnonymously();if(a)throw a;e=t.session}y={id:e.user.id,pseudo:null,hasPassword:!1,canChangeAt:null},Je()}async function Ge(){let{data:e}=await f.rpc("my_account");e&&Object.assign(y,{pseudo:e.pseudo||null,hasPassword:!!e.has_password,canChangeAt:e.can_change_at})}async function q(){await W;let{data:e,error:t}=await f.rpc("my_alerts");if(t)throw t;let a=JSON.stringify((e||[]).map(({cooldown_left_s:s,cooldown_until:i,last_trigger_age_s:l,...m})=>({...m,cool:s>0}))),n=a!==De;return De=a,z=Date.now(),_=(e||[]).map(s=>({...s,_coolUntil:s.cooldown_left_s>0?z+s.cooldown_left_s*1e3:0,_triggerAt:s.last_trigger_age_s!=null?z-s.last_trigger_age_s*1e3:0})),ie=!0,St(),n}var Qe="saye.seen",G=(()=>{try{return JSON.parse(localStorage.getItem(Qe)||"{}")}catch{return{}}})();function oe(e,t){if(!(!e||!t||(G[e]||0)>=t)){G[e]=t;try{localStorage.setItem(Qe,JSON.stringify(G))}catch{}}}var Lt=120;function Te(){if(K||h.name==="alarm")return;let e=null;for(let t of _)!t.last_trigger_id||(G[t.id]||0)>=t.last_trigger_id||(!t.last_trigger_mine&&t.last_trigger_age_s<=Lt&&(!e||t.last_trigger_age_s<e.last_trigger_age_s)&&(e=t),oe(t.id,t.last_trigger_id));e&&(o("alarm_received","rattrapee"),me({trigger:{id:e.last_trigger_id,pseudo:e.last_trigger_pseudo},alert:e,lateS:e.last_trigger_age_s}))}var Xe={longueur:"Le pseudo doit faire de 3 \xE0 24 caract\xE8res.",caracteres:"Pseudo : lettres, chiffres, point, tiret et tiret bas uniquement (pas d'espace).",lettre:"Le pseudo doit contenir au moins une lettre.",reserve:"Ce pseudo est r\xE9serv\xE9 (il ressemble \xE0 un compte officiel).",interdit:"Ce pseudo n'est pas autoris\xE9.",pris:"Ce pseudo est d\xE9j\xE0 pris (majuscules, accents et s\xE9parateurs ne comptent pas).",password:"Choisis un mot de passe d'au moins 8 caract\xE8res.",trop_tot:"Tu as chang\xE9 de pseudo il y a moins de 30 jours.",auth:"Session expir\xE9e, recharge l'application."};async function ae(e,t){let{data:a,error:n}=await f.functions.invoke("pseudo",{body:{pseudo:e,password:t}});if(n){let s="serveur";try{s=(await n.context.json()).error||s}catch{}throw new Error(Xe[s]||"Oups, une erreur est survenue. R\xE9essaie.")}return await Ge(),a}var Be;function Ct(e,t){clearTimeout(Be);let a=e.value.trim();if(t){if(!a||a===y.pseudo){t.textContent="";return}Be=setTimeout(async()=>{let{data:n}=await f.rpc("pseudo_problem",{p:a});e.value.trim()===a&&(t.textContent=n?Xe[n]:"\u2713 Pseudo disponible",t.className=`hint ${n?"err":"ok"}`)},400)}}var qt=e=>new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),S={};S.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&k(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${r("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);S.intro=()=>`
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
  <button class="btn" data-action="start">Commencer</button>`;S.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${r("i-bell")}<b>SAYE</b><span class="beta">B\xEAta</span></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  <h1 tabindex="-1">Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${r("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${r("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${Pe()}
  ${_.length?`<a class="btn outline" href="#/alerts">Mes alertes (${_.length})</a>`:""}`;var Pe=(e="btn outline")=>T?`<button class="${e}" data-action="paste-invite">${r("i-link")}Coller mon lien d'invitation</button>`:"";function Se(e){let t=/(?:#\/join\/|\/j\/)([0-9a-f-]{36})(?:\?c=([0-9a-z%]+))?/i.exec(String(e||""));return t?`#/join/${t[1]}${t[2]?`?c=${t[2]}`:""}`:null}async function Oe(){try{let{url:e}=await j("takeLink"),t=Se(e);if(!t)return;d.onboarded||(d.onboarded=!0,B()),o("invite_paste","lien_app"),k(t)}catch{}}S.create=()=>`
  ${de("Cr\xE9er une alerte")}
  <p class="lead-text">Qui pourra la rejoindre ?</p>
  <button class="choice stack" data-action="pick-visibility" data-v="public">
    <div class="head">${r("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. L'alerte part quand plusieurs membres appuient en m\xEAme temps. 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${r("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Pour mon cercle : je la partage avec qui je veux, et un seul appui pr\xE9vient tout le monde. Mes invit\xE9s peuvent inviter \xE0 leur tour.</span>
  </button>`;S["create-form"]=()=>{if(!O.visibility)return setTimeout(()=>k("#/create")),"";let e=O.visibility==="public",t=e?"quorum":"one";return`
  ${J(e?"Nouvelle alerte publique":"Nouvelle alerte priv\xE9e","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Ex. : Chaque but de France \u2013 Br\xE9sil" autocomplete="off">
    <div id="f-similar" class="similar" aria-live="polite"></div>

    ${y.pseudo?`
    <label class="field" for="f-me">Pseudo</label>
    <input id="f-me" type="text" value="${c(y.pseudo)}" readonly>`:`
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
  </form>`};S.share=async({id:e})=>{await q();let t=_.find(m=>m.id===e);if(!t)return`${J("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:m}=await f.rpc("get_invite_code",{p_alert:e});a=m}let n=Ke(t,a),s=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,i=encodeURIComponent(`${s} ${n}`),l=!!O.justCreated;return`
  ${J("Invite tes proches","#/alerts")}
  ${l?`<div class="success" role="status">${r("i-check")}<span>Alerte cr\xE9\xE9e ! Partage-la pour que tes proches soient pr\xE9venus.</span></div>`:""}
  <p class="lead-text">Plus il y a de monde, plus l'alerte est efficace.</p>
  <div class="pill-title">${r("i-bell-outline")}${c(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-track="share_click:lien" data-url="${c(n)}">${r("i-link")}Copier le lien</button>
    <a href="sms:?&body=${i}" data-track="share_click:sms">${r("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${i}" target="_blank" rel="noopener" data-track="share_click:whatsapp">${r("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-track="share_click:signal" data-url="${c(n)}">${r("i-chat")}Signal</a>
    <a data-track="share_click:email" href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${i}">${r("i-mail")}E-mail</a>
    <button data-action="native-share" data-track="share_click:autres" data-url="${c(n)}" data-text="${c(s)}">${r("i-dots")}Autres\u2026</button>
    <button class="wide" data-action="show-qr" data-track="share_click:qr" data-url="${c(n)}" data-title="${c(t.title)}">${r("i-qr")}Afficher le QR code</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts" ${l?'data-track="share_skip"':""}>${l?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};S.alerts=async()=>{ie?Date.now()-z>15e3&&q().then(n=>{n&&h.name==="alerts"&&p(!0)}).catch(()=>{}):await q();let e=Rt([..._]),t=`
  <div class="brandbar compact">
    <a class="brand" href="#/home" aria-label="Accueil SAYE (version b\xEAta)">${r("i-bell")}<b>SAYE</b><span class="beta" aria-hidden="true">B\xEAta</span></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${r("i-share")}</button>
  </div>
  ${de("Mes alertes")}`;if(!e.length)return`${t}
      <div class="emptystate">${r("i-bell-outline")}<b>Aucune alerte pour l'instant</b>
        <p>Cr\xE9e ton alerte et partage-la, ou rejoins une alerte de la communaut\xE9.</p></div>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>
      ${Pe()}`;let a=Date.now();return`${t}
  ${Mt()}
  ${Ze()}
  <div class="grid ${e.length===1?"single":""}">
    ${e.map(n=>Pt(n,a)).join("")}
  </div>
  <p class="footnote">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>`};var le="connecting";function Ze(){return navigator.onLine?le==="ok"?'<div id="veille" class="veille" role="status"><span class="dot" aria-hidden="true"></span>En veille : tu seras pr\xE9venu \xE0 la seconde</div>':'<div id="veille" class="veille wait" role="status"><span class="dot" aria-hidden="true"></span>Connexion en cours\u2026</div>':`<div id="veille" class="veille off" role="status"><span class="dot" aria-hidden="true"></span>Hors connexion : tu ne seras pas pr\xE9venu tant que le r\xE9seau n'est pas revenu</div>`}function ce(){let e=document.getElementById("veille");e&&(e.outerHTML=Ze())}var et=e=>`Envoy\xE9e \xB7 disponible dans ${Math.max(1,Math.ceil(e/1e3))} s`,tt=(e,t)=>`D\xE9clench\xE9e par ${e} il y a ${Math.max(1,Math.round(t/1e3))} s`,at=(e,t)=>`${e} \xB7 encore ${Math.max(1,Math.ceil(t/1e3))} s`;function Tt(e){return e.trigger_mode==="owner"&&!e.is_owner?"Seul le cr\xE9ateur d\xE9clenche":e.visibility==="public"&&e.trigger_mode!=="owner"?"Tu le vois ? Maintiens appuy\xE9 pour le signaler":"Maintiens appuy\xE9 pour pr\xE9venir tout le monde"}function Pt(e,t){let a=e._coolUntil>t,n=$e[e.id],s=!a&&n&&n.until>t;n&&!s&&delete $e[e.id];let i=a?e._coolUntil:s?n.until:0,l=e.trigger_mode!=="owner"||e.is_owner,m=Tt(e),$=a&&!e.last_trigger_mine&&e._triggerAt>0,E=e.last_trigger_pseudo||"un membre",w=s?`Signal envoy\xE9 \xB7 ${n.count} sur ${n.quorum}`:$?E:"",M=$?tt(E,t-e._triggerAt):a?et(i-t):s?at(w,i-t):m,mt=$?"ago":a?"cool":"pending",ft=l?`${e.title} : maintenir appuy\xE9 pour envoyer l'alerte`:`${e.title} : ${m}`;return`<div class="tile">
    <button class="alarm-btn ${a?"cooldown":s?"pending":""}" data-hold="${e.id}" data-hint="${c(m)}"
      ${i?`data-until="${i}" data-kind="${mt}" data-prefix="${c(w)}"${$?` data-since="${e._triggerAt}"`:""}`:""} ${l?"":"disabled"} aria-label="${c(ft)}">
      ${r("i-bell")}<strong>${c(e.title)}</strong><span class="hold-hint">${c(M)}</span>
    </button>
    <div class="tile-foot">
      <div><div class="tile-meta">${e.visibility==="private"?"Priv\xE9e":"Publique"}</div>${qe(e.reliability)}</div>
      <div class="tile-actions">
        <button data-action="open-share" data-id="${e.id}" aria-label="Partager \xAB ${c(e.title)} \xBB">${r("i-share")}</button>
        <button data-action="alert-menu" data-id="${e.id}" aria-label="Options de \xAB ${c(e.title)} \xBB">${r("i-dots")}</button>
      </div>
    </div>
  </div>`}function Rt(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var Z=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,T=x||matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,It=/Android/i.test(navigator.userAgent),nt=!1;function st(){if(!It||!T||x)return"";let e=new URL(location.href.split("#")[0]);e.search="?ouvrir=reglages";let t=`intent://${e.host}${e.pathname}${e.search}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(e.href)};end`;return`<a class="btn small chrome-link" href="${c(t)}">${r("i-link")}Ouvrir dans Chrome pour r\xE9parer</a>`}var Y=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Y=e,h.name==="join"&&p(!0)});window.addEventListener("appinstalled",()=>{Y=null,o("app_installed")});function jt(){return T?"":Z?`<div class="install">
      <b>Sur iPhone, pour \xEAtre pr\xE9venu m\xEAme quand l'app est ferm\xE9e :</b>
      <ol>
        <li>${r("i-bell-outline")}<span>Touche <b>Je veux \xEAtre pr\xE9venu</b> : ton invitation est copi\xE9e</span></li>
        <li>${r("i-ios-share")}<span>Touche <b>Partager</b> en bas de Safari, puis <b>Sur l'\xE9cran d'accueil</b></span></li>
        <li>${r("i-link")}<span>Ouvre SAYE depuis l'ic\xF4ne et touche <b>Coller mon lien d'invitation</b></span></li>
      </ol>
    </div>`:Y?`<div class="install">
      <b>Installe SAYE pour l'avoir toujours sous la main :</b>
      <button class="btn outline small" data-action="install-app">Installer SAYE</button>
    </div>`:""}function pe(){return!("Notification"in window)||!("PushManager"in window)?{code:"unsupported",text:"Ce navigateur ne peut pas recevoir les alertes quand l'app est ferm\xE9e."}:Notification.permission==="denied"?{code:"denied",text:"Notifications bloqu\xE9es : autorise-les pour SAYE dans les r\xE9glages du navigateur."}:Notification.permission==="default"?{code:"off",text:"Ce t\xE9l\xE9phone ne recevra pas les alertes quand l'app est ferm\xE9e.",action:"fix-notif",label:"Activer les notifications"}:L==="ok"?{ok:!0,text:"Ce t\xE9l\xE9phone recevra les alertes, m\xEAme app ferm\xE9e."}:L?ue?{code:"failed",text:"Google refuse pour l'instant d'inscrire ce t\xE9l\xE9phone aux notifications. Essaie : ouvrir SAYE dans Chrome (pas l'ic\xF4ne) puis R\xE9parer, ou red\xE9marrer le t\xE9l\xE9phone.",action:"fix-notif",label:"R\xE9parer"}:{code:"failed",text:"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.",action:"fix-notif",label:"R\xE9parer"}:{code:"pending",text:"V\xE9rification\u2026"}}function Mt(){if(x)return!g||xe()?"":`<div class="alertbox" role="alert">${r("i-bell-off")}<div><b>R\xE9veil pas encore pr\xEAt</b>
      Quelques r\xE9glages du t\xE9l\xE9phone manquent pour que SAYE sonne m\xEAme verrouill\xE9.
      <a class="btn small" href="#/settings">R\xE9gler le r\xE9veil</a></div></div>`;if(Z&&!T)return`<div class="alertbox">${r("i-bell-off")}<div><b>Installe SAYE pour \xEAtre pr\xE9venu app ferm\xE9e</b>
      Sur iPhone : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB. Ouvre SAYE depuis l'ic\xF4ne et touche \xAB Coller mon lien d'invitation \xBB${nt?" (ton invitation est d\xE9j\xE0 copi\xE9e)":""}.</div></div>`;let e=pe(),a={off:["Active les notifications","Sinon, tu ne seras pas pr\xE9venu quand l'app est ferm\xE9e.","Activer"],denied:["Notifications bloqu\xE9es","Autorise-les pour SAYE dans les r\xE9glages de ton navigateur, sinon tu ne seras pas pr\xE9venu app ferm\xE9e.",null],failed:["Notifications \xE0 r\xE9parer",ue?"Google refuse pour l'instant d'inscrire ce t\xE9l\xE9phone aux notifications. Essaie : ouvrir SAYE dans Chrome (pas l'ic\xF4ne) puis R\xE9parer, ou red\xE9marrer le t\xE9l\xE9phone.":"Ce t\xE9l\xE9phone n'est pas encore inscrit pour recevoir les alertes.","R\xE9parer"]}[e.code];return a?`<div class="alertbox" role="alert">${r("i-bell-off")}<div><b>${a[0]}</b>${a[1]}
    ${a[2]?`<button class="btn small" data-action="fix-notif">${a[2]}</button>`:""}
    ${e.code==="failed"?st():""}</div></div>`:""}function Nt(){if(Z&&!T)return`<p class="hint">Sur iPhone, installe d'abord SAYE sur l'\xE9cran d'accueil (Partager \u2192 Sur l'\xE9cran d'accueil) pour recevoir les alertes.</p>`;let e=pe(),t=e.ok?"ok":e.code==="pending"?"wait":"err",a=e.ok?r("i-check"):e.code==="pending"?"":r("i-bell-off");return`<p id="notif-status" class="status ${t}">${a}<span>${c(e.text)}</span></p>
    ${e.action?`<button class="btn outline small" data-action="${e.action}">${e.label}</button>`:""}
    ${e.code==="failed"?st():""}`}var I={q:"",sort:"populaires"};S.find=async()=>{let{data:e,error:t}=await f.rpc("find_alerts",{p_query:I.q,p_category:null,p_sort:I.sort});if(t)throw t;let a=e||[],n=(i,l)=>`<button data-action="find-sort" data-v="${i}" aria-pressed="${I.sort===i}">${l}</button>`,s=I.q?`<div class="emptystate">${r("i-search")}<b>Aucun r\xE9sultat</b><p>Aucune alerte publique ne correspond \xE0 \xAB ${c(I.q)} \xBB.</p></div>`:`<div class="emptystate">${r("i-globe")}<b>Aucune alerte publique pour l'instant</b><p>Cr\xE9e la premi\xE8re : toute la communaut\xE9 pourra la rejoindre.</p></div>`;return`
  ${de("Choisir une alerte")}
  ${T?`<div class="find-paste"><p class="note-muted m0">Tu as re\xE7u un lien d'invitation ?</p>${Pe("btn outline small mt-8")}</div>`:""}
  <div class="search">${r("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" aria-label="Rechercher une alerte" value="${c(I.q)}"></div>
  <div class="segmented" role="group" aria-label="Trier les alertes">${n("populaires","Populaires")}${n("recentes","R\xE9centes")}</div>
  ${a.length?`<div class="list">${a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${c(i.title)}</b>
          <span>par ${c(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${qe(i.reliability)}
      </button>`).join("")}</div>`:s}
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};S.join=async({id:e,query:t})=>{let a=t.get("c"),{data:n,error:s}=await f.rpc("get_alert_preview",{p_alert:e,p_code:a});return s||!n?`${J("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${J("Rejoindre une alerte","#/home")}
  <div class="pill-title">${r(n.visibility==="private"?"i-lock":"i-globe")}${c(n.title)}</div>
  <p class="body-lg">
    ${n.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${c(n.owner_pseudo||"Anonyme")}</b>
  </p>
  ${qe(n.reliability)}
  <div class="grow"></div>
  ${jt()}
  ${n.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${n.id}" data-code="${c(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};S.alarm=async({id:e})=>(setTimeout(()=>Ut(Number(e))),S.alerts());function Dt(){if(!g)return'<p class="status wait"><span>V\xE9rification du t\xE9l\xE9phone\u2026</span></p>';let e=/xiaomi|redmi|poco/.test(g.maker||""),t=[{ok:A==="ok",done:"Le t\xE9l\xE9phone re\xE7oit les alertes",title:"Connecter le t\xE9l\xE9phone au service d'alertes",why:A===""?"Connexion en cours\u2026":"Le t\xE9l\xE9phone n'arrive pas encore \xE0 joindre le service d'alertes de Google. V\xE9rifie que tu as internet : SAYE r\xE9essaie tout seul, ou touche le bouton.",btn:A===""?"":"R\xE9essayer maintenant",action:"reveil-retry",extra:A==="echec"?`<p class="mt-10">Si \xE7a bloque toujours : dans les r\xE9glages des <b>Services Google Play</b>, mets la batterie sur \xAB Aucune restriction \xBB et active le d\xE9marrage automatique.</p>
        <button class="btn outline small" data-action="reveil-open" data-what="playServicesSettings">R\xE9glages des Services Google Play</button>`:""},{ok:g.notifications,done:"Notifications autoris\xE9es",title:"Autoriser les notifications",why:"Sans elles, SAYE ne peut pas te pr\xE9venir.",btn:"Autoriser",action:"reveil-notif"},{ok:g.fullScreen,done:"L'alerte s'affiche en grand, m\xEAme t\xE9l\xE9phone verrouill\xE9",title:"Afficher l'alerte en grand sur l'\xE9cran verrouill\xE9",why:"Comme un r\xE9veil ou un appel qui arrive.",btn:"Autoriser",action:"reveil-open",what:"fullScreen"},{ok:g.battery,done:"SAYE reste active en arri\xE8re-plan",title:"Laisser SAYE active en arri\xE8re-plan",why:"Sinon, pour \xE9conomiser la batterie, le t\xE9l\xE9phone peut endormir SAYE et l'alerte arrive en retard. Choisis \xAB Autoriser \xBB ou \xAB Aucune restriction \xBB.",btn:"R\xE9gler la batterie",action:"reveil-open",what:"battery"}];b&&b.gmsCode&&t.unshift({ok:!1,title:"Mettre \xE0 jour les Services Google Play",why:"Le t\xE9l\xE9phone a besoin d'une version \xE0 jour des Services Google Play pour recevoir les alertes.",btn:"Ouvrir le Play Store",action:"reveil-open",what:"playServices"});let a=t.filter(s=>!s.ok),n=s=>s.btn?`<button class="btn small" data-action="${s.action}" ${s.what?`data-what="${s.what}"`:""}>${s.btn}</button>`:"";return`
    ${a.length?`<p class="reveil-head">Encore ${a.length===1?"une \xE9tape":`${a.length} \xE9tapes`} pour que SAYE sonne comme un r\xE9veil :</p>
        ${a.map((s,i)=>`<div class="reveil-step"><b>${i+1}. ${s.title}</b><p>${s.why}</p>${n(s)}${s.extra||""}</div>`).join("")}`:`<p class="status ok">${r("i-check")}<span><b>Le r\xE9veil est pr\xEAt.</b></span></p>`}
    ${t.filter(s=>s.ok).map(s=>`<p class="reveil-done">${r("i-check")}<span>${s.done}</span></p>`).join("")}
    ${e?`<div class="reveil-step">
      <b>Sp\xE9cial Xiaomi (\xE0 faire une fois)</b>
      <p>1. <b>D\xE9marrage automatique</b> : active SAYE, pour qu'elle puisse se r\xE9veiller quand une alerte arrive.</p>
      <button class="btn outline small" data-action="reveil-open" data-what="autostart">Ouvrir \xAB D\xE9marrage automatique \xBB</button>
      <p class="mt-10">2. <b>Autorisations</b> : active \xAB Afficher sur l'\xE9cran de verrouillage \xBB et \xAB Ouvrir des fen\xEAtres en arri\xE8re-plan \xBB.</p>
      <button class="btn outline small" data-action="reveil-open" data-what="miuiPermissions">Ouvrir les autorisations</button>
    </div>`:""}
    ${g.dnd?"":`<div class="reveil-step optional">
      <b>Facultatif : sonner m\xEAme en mode \xAB Ne pas d\xE9ranger \xBB</b>
      <p>Utile si tu actives souvent ce mode et veux quand m\xEAme \xEAtre pr\xE9venu.</p>
      <button class="btn outline small" data-action="reveil-open" data-what="dnd">Autoriser</button>
    </div>`}
    ${Q&&A!=="ok"?`<details><summary class="muted">D\xE9tails techniques</summary><pre class="diag">${c([`Essais : ${Fe}${ye?`, dernier \xE0 ${new Date(ye).toLocaleTimeString("fr-FR")}`:""}`,`Erreur : ${Q}`,b?`Services Google Play : ${b.gmsCode===0?"OK":`code ${b.gmsCode}`} (version ${b.gmsVersion||"?"})`:"",b?`Identifiant Firebase : ${b.installation||"?"}`:"",b?`Jeton : ${b.token||"?"}`:"",b?.erreur?`Diagnostic : ${b.erreur}`:"",`Android ${g.android} \xB7 ${g.maker}`].filter(Boolean).join(`
`))}</pre></details>`:""}`}S.settings=()=>`
  ${de("R\xE9glages")}
  ${x?`<section class="group" aria-labelledby="g-reveil">
    <h2 id="g-reveil">R\xE9veil</h2>
    <p class="note-muted m0">SAYE sonne avec la sonnerie d'alarme du t\xE9l\xE9phone, m\xEAme verrouill\xE9 et en mode silencieux, au volume de tes r\xE9veils.</p>
    <div id="reveil-zone">${Dt()}</div>
    <button class="btn small mt-10" data-action="reveil-test">Tester le r\xE9veil (dans 10 s)</button>
  </section>`:`
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
  </section>`}

  <section class="group" aria-labelledby="g-tri">
    <h2 id="g-tri">Mes alertes</h2>
    <label class="field" for="s-sort">Trier par</label>
    <select id="s-sort" data-pref="sort">
      <option value="standard">Perso</option>
      <option value="alpha">Ordre alphab\xE9tique</option>
      <option value="membres">Nombre de membres</option>
    </select>
  </section>

  ${x?"":`<section class="group" aria-labelledby="g-notif">
    <h2 id="g-notif">Notifications</h2>
    <div id="notif-zone">${Nt()}</div>
    <details>
      <summary class="muted">D\xE9tails techniques</summary>
      <button class="link-btn" data-action="diag-notif">Lancer le diagnostic</button>
      <pre id="diag" class="diag" aria-live="polite"></pre>
    </details>
  </section>`}

  <section class="group" aria-labelledby="g-pseudo">
    <h2 id="g-pseudo">Mon pseudo</h2>
    ${Yt()}
  </section>

  <section class="group" aria-labelledby="g-apropos">
    <h2 id="g-apropos">\xC0 propos</h2>
    <label class="setrow"><span>Statistiques anonymes<small>Aide \xE0 am\xE9liorer SAYE : ni cookie, ni identifiant</small></span>
      <input type="checkbox" class="switch" role="switch" data-pref="stats" ${d.stats!==!1?"checked":""}></label>
    <div class="note info">${r("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
    <button class="link-btn" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
    <p class="version">Version ${Ae} \xB7 b\xEAta (version de test)</p>
  </section>`;function Yt(){let e=`
    <details class="mt-10">
      <summary>J'ai d\xE9j\xE0 un pseudo (autre t\xE9l\xE9phone)</summary>
      <input id="l-pseudo" type="text" maxlength="24" placeholder="Mon pseudo" aria-label="Mon pseudo" autocomplete="username" class="mt-10">
      <input id="l-pass" type="password" placeholder="Mot de passe" aria-label="Mot de passe" autocomplete="current-password" class="mt-8">
      <p class="hint">Les alertes rejointes sur ce t\xE9l\xE9phone sans pseudo ne seront pas reprises.</p>
      <button class="btn small" data-action="login-pseudo">Me connecter</button>
    </details>`;if(!y.pseudo)return`
  <label class="sr-only" for="s-pseudo">Pseudo</label>
  <p class="note-muted">Tu es anonyme. R\xE9serve un pseudo pour \xEAtre reconnu et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pseudo" type="text" maxlength="24" placeholder="Fred654" autocomplete="username" data-live="s-pseudo-check">
  <p id="s-pseudo-check" class="hint"></p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <p class="hint">Le mot de passe ne peut pas \xEAtre r\xE9cup\xE9r\xE9 : note-le bien.</p>
  <button class="btn small" data-action="claim-pseudo">R\xE9server mon pseudo</button>
  ${e}`;if(!y.hasPassword)return`
  <p class="pseudo-name">${c(y.pseudo)}</p>
  <p class="hint warn">Ton pseudo n'est pas encore prot\xE9g\xE9. Ajoute un mot de passe pour le garder et le retrouver sur un autre t\xE9l\xE9phone.</p>
  <input id="s-pass" type="password" minlength="8" placeholder="Mot de passe (8 caract\xE8res min.)" aria-label="Mot de passe" autocomplete="new-password" class="mt-8">
  <button class="btn small" data-action="protect-pseudo">Prot\xE9ger mon pseudo</button>`;let t=!y.canChangeAt||new Date(y.canChangeAt)<=new Date;return`
  <p class="pseudo-name">${c(y.pseudo)} \u2713</p>
  <p class="note-muted m0">Prot\xE9g\xE9 par ton mot de passe.</p>
  ${t?`
  <details class="mt-10">
    <summary>Changer de pseudo</summary>
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Nouveau pseudo" aria-label="Nouveau pseudo" data-live="s-pseudo-check" class="mt-10">
    <p id="s-pseudo-check" class="hint"></p>
    <p class="hint">Ensuite, plus de changement possible pendant 30 jours.</p>
    <button class="btn small" data-action="change-pseudo">Changer</button>
  </details>`:`<p class="hint">Prochain changement de pseudo possible le ${qt(y.canChangeAt)}.</p>`}
  ${e}`}S.legal=()=>`
  ${J("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Mesure d'audience</h3><p>Pour s'am\xE9liorer, SAYE compte de fa\xE7on anonyme les \xE9tapes de son utilisation (par exemple \xAB alerte cr\xE9\xE9e \xBB ou \xAB alerte envoy\xE9e \xBB). Aucun cookie, aucun identifiant, aucun pseudo ni aucune adresse ne sont utilis\xE9s : il est impossible de relier ces compteurs \xE0 une personne. Ils sont conserv\xE9s 13 mois au maximum, puis effac\xE9s automatiquement. Tu peux d\xE9sactiver cette mesure \xE0 tout moment dans R\xE9glages \u2192 \xC0 propos \u2192 Statistiques anonymes. Elle est aussi d\xE9sactiv\xE9e si ton navigateur demande \xE0 ne pas \xEAtre suivi.</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function me({trigger:e,alert:t,test:a=!1,lateS:n=null}){if(x&&!a){oe(t?.id,e?.id),j("ring",{triggerId:e?.id!=null?String(e.id):null,title:t?.title||"",by:e?.pseudo||"",late:n||0}).catch(()=>{});return}K={triggerId:e?.id,alertId:t?.id,test:a},oe(t?.id,e?.id);let s=e&&!a?`D\xE9clench\xE9e par ${e.pseudo||"un membre"}${n!=null?` il y a ${n<60?`${Math.max(1,n)} s`:`${Math.round(n/60)} min`}`:""}`:"";v.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-modal="true" aria-labelledby="alarm-title" aria-describedby="alarm-desc">
      <div class="kicker" aria-hidden="true">ALERTE !</div>
      ${r("i-bell","big")}
      <h2 id="alarm-title">Alerte : ${c(t?.title||"Test de ton alerte")}</h2>
      <div class="by" id="alarm-desc">${a?"Voil\xE0 ce que tu verras":"\xC7a y est, c'est le moment !"}${s?`<span class="who">${c(s)}</span>`:""}</div>
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
    </div>`,v.querySelector("[data-action=stop-alarm]")?.focus(),We(d.sound,!0),At()}function V(){ze(),navigator.vibrate&&navigator.userActivation?.hasBeenActive&&navigator.vibrate(0),v.innerHTML="",K=null}function Ee(){if(!(!T||K||v.innerHTML)&&!["splash","intro","alarm"].includes(h.name)){if(x){if(!g||xe()||d.notifLater&&Date.now()-d.notifLater<24*3600*1e3)return;o("notif_step","vu_reveil"),v.innerHTML=`
      <div class="full" role="dialog" aria-modal="true" aria-labelledby="notif-title">
        ${r("i-bell","mid")}
        <h1 id="notif-title">Active le r\xE9veil</h1>
        <p class="lead">Pour que SAYE sonne comme un r\xE9veil, m\xEAme t\xE9l\xE9phone verrouill\xE9 et en mode silencieux.</p>
        <p class="sub">Quelques autorisations du t\xE9l\xE9phone sont n\xE9cessaires : SAYE te guide.</p>
        <button class="btn" data-action="reveil-step-on">Activer le r\xE9veil</button>
        <button class="btn outline" data-action="notif-step-later">Plus tard</button>
      </div>`,v.querySelector("[data-action=reveil-step-on]")?.focus();return}pe().code==="off"&&(d.notifLater&&Date.now()-d.notifLater<24*3600*1e3||(o("notif_step","vu"),v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="notif-title">
      ${r("i-bell","mid")}
      <h1 id="notif-title">Active les notifications</h1>
      <p class="lead">Pour \xEAtre pr\xE9venu \xE0 la seconde, m\xEAme quand SAYE est ferm\xE9e ou l'\xE9cran \xE9teint.</p>
      <p class="sub">Sans elles, l'alerte n'arrive que si SAYE est ouverte \xE0 l'\xE9cran.</p>
      <button class="btn" data-action="notif-step-on">Activer les notifications</button>
      <button class="btn outline" data-action="notif-step-later">Plus tard</button>
    </div>`,v.querySelector("[data-action=notif-step-on]")?.focus()))}}function Bt(){v.innerHTML=`
    <div class="full" role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      ${r("i-bell","mid")}
      <h1 id="thanks-title">Merci !</h1>
      <p class="lead">Alerte envoy\xE9e : les autres membres sont pr\xE9venus.</p>
      <p class="sub">Les appuis suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
    </div>`,v.querySelector("[data-action=close-overlay]")?.focus()}var F=null;function it(e){if(!e||e===document.body)return null;let t=e.dataset?.hold?`[data-hold="${e.dataset.hold}"]`:e.dataset?.action&&e.dataset?.id?`[data-action="${e.dataset.action}"][data-id="${e.dataset.id}"]`:null;return{el:e,sel:t}}function N(e,t,a=document.activeElement){v.querySelector(".sheet")||(F=it(a)),v.innerHTML=`<div class="sheet" data-action="close-sheet">
    <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="${c(t)}">
      <div class="sheet-grip" aria-hidden="true"></div>${e}
    </div></div>`,v.querySelector(".sheet-panel button, .sheet-panel a")?.focus()}function R(){if(!v.querySelector(".sheet"))return;v.innerHTML="",(F?.el?.isConnected?F.el:F?.sel&&document.querySelector(F.sel))?.focus(),F=null}function rt(e,t){let a=_.find(n=>n.id===e);if(a){if(a.trigger_mode==="owner"&&!a.is_owner)return u("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");N(`
    <p class="sheet-title">Envoyer l'alerte ?</p>
    <p class="sheet-text">\xAB ${c(a.title)} \xBB : ${a.trigger_mode==="quorum"?"ton signal sera compt\xE9.":"tous les membres seront pr\xE9venus."}</p>
    <button class="btn" data-action="send-now" data-id="${a.id}">Envoyer maintenant</button>
    <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer l'envoi",t)}}async function H(e,t){if(!(!e||e.disabled)){e.disabled=!0,e.classList.add("busy"),e.setAttribute("aria-busy","true");try{return await t()}finally{e.isConnected&&(e.disabled=!1,e.classList.remove("busy"),e.removeAttribute("aria-busy"))}}}async function ot(e){if(!navigator.onLine)return u("Pas de connexion : l'alerte n'a pas \xE9t\xE9 envoy\xE9e.",4e3);await W;let{data:t,error:a}=await f.rpc("press_alert",{p_alert:e});if(a)return o("send_error","erreur"),u(re(a));if(t.status==="cooldown")return o("send_error","pause"),u("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(t.status==="forbidden")return o("send_error","interdit"),u("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(o("send_ok",t.status==="triggered"?"envoyee":"quorum_en_attente"),t.status==="triggered"){Bt(),p(!0);return}t.status==="pending"&&($e[e]={count:t.count,quorum:t.quorum,until:Date.now()+t.window_s*1e3},u(`Signal enregistr\xE9 : l'alerte part si ${t.quorum} membres appuient en ${t.window_s} s.`,4500),p(!0))}var ke={start(){d.onboarded=!0,B(),o("onboarding_done"),k("#/home"),setTimeout(Ee,400)},"pick-visibility"(e){O={visibility:e.dataset.v},o("create_start",e.dataset.v==="public"?"publique":"privee"),k("#/create-form")},"open-share"(e){R(),O.justCreated=!1,k(`#/share/${e.dataset.id}`)},"open-join"(e){k(`#/join/${e.dataset.id}`)},join(e){Z&&!T&&navigator.clipboard?.writeText&&navigator.clipboard.writeText(Ke({id:e.dataset.id},e.dataset.code)).then(()=>{nt=!0},()=>{});let t=se();return H(e,async()=>{await W;let{error:a}=await f.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return u(re(a));o("join_done",e.closest(".similar")?"suggestion":"lien"),await q().catch(()=>{}),u(Z&&!T?"C'est not\xE9 ! Installe SAYE pour \xEAtre pr\xE9venu m\xEAme app ferm\xE9e.":"Tu seras pr\xE9venu !",4e3),k("#/alerts"),t.then(D).then(()=>{h.name==="alerts"&&p(!0)})})},async"paste-invite"(e){let t="";try{t=await navigator.clipboard.readText()}catch{}let a=Se(t);if(a){o("invite_paste","auto"),k(a);return}N(`
      <p class="sheet-title">Coller mon lien d'invitation</p>
      <p class="sheet-text">Colle ici le lien re\xE7u par SMS, WhatsApp ou e-mail.</p>
      <input id="invite-url" type="url" inputmode="url" placeholder="https://\u2026" aria-label="Lien d'invitation" autocomplete="off">
      <button class="btn mt-10" data-action="invite-go">Continuer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Coller mon lien d'invitation",e),document.getElementById("invite-url")?.focus()},"invite-go"(){let e=Se(document.getElementById("invite-url")?.value);if(!e)return o("invite_paste","invalide"),u("Ce n'est pas un lien d'invitation SAYE.",3500);o("invite_paste","manuel"),R(),k(e)},async"notif-step-on"(e){e.classList.add("busy"),e.disabled=!0,o("notif_step","activer"),await se(),await D(),V(),u(L==="ok"?"Notifications activ\xE9es !":Notification.permission==="denied"?"Notifications refus\xE9es : autorise-les dans les r\xE9glages du t\xE9l\xE9phone pour \xEAtre pr\xE9venu app ferm\xE9e.":"Inscription impossible pour l'instant : r\xE9essaie dans R\xE9glages.",4500),p(!0)},async"reveil-step-on"(){o("notif_step","activer_reveil");try{g=await j("requestNotifications")}catch{}V(),k("#/settings")},async"reveil-notif"(){try{g=await j("requestNotifications")}catch{}p(!0)},async"reveil-open"(e){await j("openSettings",{what:e.dataset.what})},async"reveil-retry"(e){e.classList.add("busy"),e.disabled=!0,u("Nouvel essai de connexion\u2026",2e3),b=null,await X();let t=new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});u(A==="ok"?"Connect\xE9 ! Le t\xE9l\xE9phone re\xE7oit les alertes.":`Toujours impossible (${t}). Essaie les r\xE9glages des Services Google Play ci-dessous.`,5e3),p(!0)},async"reveil-test"(){if(A!=="ok"&&await X(),A!=="ok")return p(!0),u("Le t\xE9l\xE9phone n'est pas encore connect\xE9 au service d'alertes : v\xE9rifie internet, puis r\xE9essaie.",5e3);o("alarm_test","reveil"),u("Verrouille ton \xE9cran maintenant : le r\xE9veil sonne dans 10 s.",7e3);let{data:e,error:t}=await f.functions.invoke("send-push",{body:{kind:"test"}});(t||!e?.sent)&&u("Le test n'a pas pu partir. R\xE9essaie dans un instant.",5e3)},"notif-step-later"(){d.notifLater=Date.now(),B(),o("notif_step","plus_tard"),V(),p(!0)},"confirm-send"(e){rt(e.dataset.id)},"send-now"(e){let t=e.dataset.id;R(),o("send_confirm"),ot(t)},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${Ae} \xB7 permission : ${"Notification"in window?Notification.permission:"indisponible"}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let n=await a.pushManager.getSubscription();if(t(`Abonnement existant : ${n?"oui":"non"}`),n){await D(),t(`Enregistrement serveur : ${L}`);return}let s=async(E,w)=>{try{let M=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:w});return t(`${E} : OK (${new URL(M.endpoint).host})`),M}catch(M){return t(`${E} : \xC9CHEC ${M.name} ${M.message}`),null}};if(await s("Cl\xE9 SAYE",dt(be))){await D(),t(`Enregistrement serveur : ${L}`);return}let l=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),m=new Uint8Array(await crypto.subtle.exportKey("raw",l.publicKey)),$=await s("Cl\xE9 de test neuve",m);$&&await $.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(e){e?.classList.add("busy");let t=document.getElementById("notif-zone");t&&(t.innerHTML='<p class="status wait" role="status">Inscription en cours\u2026</p>'),await se(),await D(),L==="ok"&&u("Notifications activ\xE9es !"),p(!0)},async"install-app"(){if(Y?.prompt){Y.prompt(),o("install_click");try{await Y.userChoice}catch{}Y=null,p(!0)}},"alert-menu"(e){let t=_.find(n=>n.id===e.dataset.id);if(!t)return;let a=t.is_owner&&t.trigger_mode==="owner";N(`
      <p class="sheet-title">${c(t.title)}</p>
      ${t.trigger_mode!=="owner"||t.is_owner?`<button class="sheet-item" data-action="confirm-send" data-id="${t.id}">${r("i-bell-outline")}Envoyer l'alerte maintenant</button>`:""}
      <button class="sheet-item" data-action="open-share" data-id="${t.id}">${r("i-share")}Partager l'alerte</button>
      ${a?`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="delete">${r("i-trash")}Supprimer pour tout le monde</button>`:`<button class="sheet-item danger" data-action="sheet-confirm" data-id="${t.id}" data-kind="leave">${r("i-leave")}Quitter l'alerte</button>`}
      <button class="sheet-item" data-action="close-sheet">${r("i-close")}Annuler</button>`,`Options de ${t.title}`,e)},"sheet-confirm"(e){let t=_.find(s=>s.id===e.dataset.id);if(!t)return R();let a=e.dataset.kind==="delete",n=a?"sera supprim\xE9e pour tous ses membres.":t.is_owner?"restera active pour les autres membres.":"ne te pr\xE9viendra plus.";N(`
      <p class="sheet-title">${a?"Supprimer pour tout le monde ?":"Quitter l'alerte ?"}</p>
      <p class="sheet-text">\xAB ${c(t.title)} \xBB ${n}</p>
      <button class="btn danger" data-action="sheet-do" data-id="${t.id}" data-kind="${e.dataset.kind}">${a?"Supprimer":"Quitter"}</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,a?"Confirmer la suppression":"Confirmer")},"sheet-do"(e){let t=e.dataset.kind==="delete";return H(e,async()=>{let a=t?f.from("alerts").delete().eq("id",e.dataset.id):f.from("members").delete().eq("alert_id",e.dataset.id).eq("user_id",y.id),{error:n}=await a;if(R(),n)return u(re(n));u(t?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),o(t?"alert_delete":"alert_leave"),await q().catch(()=>{}),p()})},"close-sheet"(e,t){e.classList.contains("sheet")&&t.target.closest(".sheet-panel")||R()},async"show-qr"(e){N(`
      <p class="sheet-title">QR code de l'alerte</p>
      <p class="sheet-text">\xC0 scanner avec l'appareil photo pour rejoindre \xAB ${c(e.dataset.title)} \xBB.</p>
      <div class="qr" id="qr"><div class="spinner" role="status" aria-label="Cr\xE9ation du QR code"></div></div>
      <button class="btn outline" data-action="close-sheet">Fermer</button>`,"QR code");try{let t=await import("https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm"),a=await(t.default||t).toString(e.dataset.url,{type:"svg",margin:1,errorCorrectionLevel:"M",color:{dark:"#1a2414",light:"#ffffff"}}),n=document.getElementById("qr");n&&(n.innerHTML=a,n.setAttribute("role","img"),n.setAttribute("aria-label","QR code du lien de l'alerte"))}catch{let t=document.getElementById("qr");t&&(t.innerHTML='<p class="qr-msg">QR code indisponible (v\xE9rifie ta connexion).</p>')}},"find-sort"(e){I.sort=e.dataset.v,p(!0)},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),u("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}u("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else ke.copy(e)},async"share-app"(){let e=Et();if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),u("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){K?.test||o("alarm_stop"),V()},"close-overlay"(){V(),p()},"test-alarm"(){o("alarm_test"),me({test:!0})},"claim-pseudo"(e){return H(e,async()=>{try{await ae(document.getElementById("s-pseudo").value.trim(),document.getElementById("s-pass").value),u("Pseudo r\xE9serv\xE9 !"),o("pseudo_claim"),p(!0)}catch(t){u(t.message,4e3)}})},"protect-pseudo"(e){return H(e,async()=>{try{await ae(y.pseudo,document.getElementById("s-pass").value),u("Pseudo prot\xE9g\xE9 !"),p(!0)}catch(t){u(t.message,4e3)}})},"change-pseudo"(e){let t=document.getElementById("s-pseudo").value.trim();N(`
      <p class="sheet-title">Changer de pseudo ?</p>
      <p class="sheet-text">Ton pseudo deviendra \xAB ${c(t)} \xBB. Plus de changement possible pendant 30 jours.</p>
      <button class="btn" data-action="change-pseudo-ok" data-v="${c(t)}">Changer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer le changement de pseudo")},"change-pseudo-ok"(e){return H(e,async()=>{try{await ae(e.dataset.v),R(),u("Pseudo chang\xE9."),p(!0)}catch(t){u(t.message,4e3)}})},"login-pseudo"(e){let t=document.getElementById("l-pseudo").value.trim(),a=document.getElementById("l-pass").value;return!t||!a?u("Indique ton pseudo et ton mot de passe."):H(e,async()=>{let{data:n}=await f.rpc("pseudo_login_id",{p:t}),{error:s}=n?await f.auth.signInWithPassword({email:n,password:a}):{error:!0};if(s)return u("Pseudo ou mot de passe incorrect.",3500);try{localStorage.removeItem(Ce)}catch{}u("Connect\xE9 !"),o("pseudo_login"),setTimeout(()=>{location.hash="#/alerts",location.reload()},600)})},"reset-prefs"(){N(`
      <p class="sheet-title">Effacer tes pr\xE9f\xE9rences ?</p>
      <p class="sheet-text">Son, vibreur, flash et tri reviennent aux r\xE9glages d'origine sur ce t\xE9l\xE9phone. Tes alertes ne sont pas touch\xE9es.</p>
      <button class="btn danger" data-action="reset-prefs-ok">Effacer</button>
      <button class="btn outline" data-action="close-sheet">Annuler</button>`,"Confirmer")},"reset-prefs-ok"(){d={...ge,onboarded:!0},B(),R(),p(!0),u("Pr\xE9f\xE9rences effac\xE9es.")}},lt=0;document.addEventListener("click",e=>{let t=e.target.closest("[data-track]");if(t){let[i,l]=t.dataset.track.split(":");o(i,l||null)}let a=e.target.closest("[data-hold]");if(a){e.preventDefault(),!a.disabled&&Date.now()-lt>1e3&&rt(a.dataset.hold,a);return}let n=e.target.closest("[data-back]");if(n){e.preventDefault();let i=n.dataset.back;i==="history"&&history.length>1?history.back():k(i==="history"?"#/home":i);return}let s=e.target.closest("[data-action]");if(s&&ke[s.dataset.action]){s.tagName==="BUTTON"&&e.preventDefault();let i=s.dataset.action,l=m=>{Le(m,i),u("Oups, une erreur est survenue. R\xE9essaie.")};try{let m=ke[i](s,e);m&&typeof m.catch=="function"&&m.catch(l)}catch(m){l(m)}}});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,B(),t.dataset.pref==="sound"&&We(t.value))});var Ue;function Ot(e){clearTimeout(Ue);let t=document.getElementById("f-similar"),a=e.value.trim();if(t){if(a.length<3){t.innerHTML="";return}Ue=setTimeout(async()=>{let{data:n}=await f.rpc("similar_alerts",{p_title:a});if(e.value.trim()!==a)return;let s=n||[];t.innerHTML=s.length?`
      <p class="hint">Elle existe peut-\xEAtre d\xE9j\xE0 : rejoins-la plut\xF4t que d'en cr\xE9er une nouvelle.</p>
      <div class="list">${s.map(i=>`
        <div class="card">
          <div class="grow">
            <b>${c(i.title)}</b>
            <span>par ${c(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
          </div>
          ${i.is_member?'<span class="rel fiable">D\xE9j\xE0 membre</span>':`<button class="btn small" data-action="join" data-id="${i.id}">Rejoindre</button>`}
        </div>`).join("")}</div>`:""},400)}}var He;document.addEventListener("input",e=>{e.target.dataset.live&&Ct(e.target,document.getElementById(e.target.dataset.live)),e.target.id==="f-title"&&Ot(e.target),e.target.id==="find-q"&&(clearTimeout(He),He=setTimeout(()=>{I.q=e.target.value.trim(),I.q&&o("find_search"),p(!0)},700))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0,a.classList.add("busy");let n=se();try{let s=String(t.get("pseudo")||"").trim();s&&!y.pseudo&&await ae(s,String(t.get("password")||""));let{data:i,error:l}=await f.from("alerts").insert({title:String(t.get("title")).trim(),visibility:O.visibility,trigger_mode:t.get("trigger_mode")}).select("id").single();if(l)throw l;O={justCreated:!0},o("create_done",{one:"un_clic",quorum:"quorum",owner:"moi_seul"}[t.get("trigger_mode")]),k(`#/share/${i.id}`),n.then(D)}catch(s){u(s instanceof Error&&!s.code?s.message:re(s),4e3),a.disabled=!1,a.classList.remove("busy")}});var ct=600,C=null;function ut(e){if(e.disabled)return;if(e.classList.contains("cooldown")){u("Alerte d\xE9j\xE0 envoy\xE9e : patiente quelques secondes.");return}if(e.classList.contains("pending")){u("Ton signal est d\xE9j\xE0 compt\xE9 : d'autres membres doivent appuyer aussi.");return}ee(),e.classList.add("holding"),_e(15);let t=e.dataset.hold;C={btn:e,start:Date.now(),timer:setTimeout(()=>{C=null,e.classList.remove("holding"),_e(60),o("hold_done"),ot(t)},ct)}}function ee(e=!1){C&&(clearTimeout(C.timer),C.btn.classList.remove("holding"),e&&Date.now()-C.start<ct&&(u("Maintiens le bouton appuy\xE9 pour envoyer l'alerte."),o("hold_short")),C=null)}document.addEventListener("pointerdown",e=>{let t=e.target.closest("[data-hold]");t&&e.button===0&&(lt=Date.now(),ut(t))});document.addEventListener("pointerup",()=>ee(!0));document.addEventListener("pointercancel",()=>ee());document.addEventListener("pointerout",e=>{C&&e.target.closest?.("[data-hold]")===C.btn&&!C.btn.contains(e.relatedTarget)&&ee()});document.addEventListener("contextmenu",e=>{e.target.closest?.("[data-hold]")&&e.preventDefault()});document.addEventListener("keydown",e=>{let t=e.target.closest?.("[data-hold]");if(t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.repeat||ut(t)),e.key==="Escape"&&(v.querySelector(".sheet")?R():v.innerHTML&&V()),e.key==="Tab"){let a=v.querySelector(".sheet-panel, .full");if(!a)return;let n=[...a.querySelectorAll('button, a[href], input, select, [tabindex]:not([tabindex="-1"])')].filter(l=>!l.disabled);if(!n.length)return;let s=n[0],i=n[n.length-1];a.contains(document.activeElement)?e.shiftKey&&document.activeElement===s?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),s.focus()):(e.preventDefault(),s.focus())}});document.addEventListener("keyup",e=>{e.target.closest?.("[data-hold]")&&(e.key==="Enter"||e.key===" ")&&e.preventDefault(),C&&(e.key==="Enter"||e.key===" ")&&ee(!0)});setInterval(()=>{document.querySelectorAll("[data-until]").forEach(e=>{let t=Number(e.dataset.until)-Date.now(),a=e.querySelector(".hold-hint");if(t<=0)e.classList.remove("cooldown","pending"),e.removeAttribute("data-until"),a&&(a.textContent=e.dataset.hint);else if(a){let n=e.dataset.kind;a.textContent=n==="pending"?at(e.dataset.prefix,t):n==="ago"?tt(e.dataset.prefix,Date.now()-Number(e.dataset.since)):et(t)}})},1e3);var ne=null;function Re(){ne&&f.removeChannel(ne),le="connecting",ce(),ne=f.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===y.id)return;oe(e.alert_id,e.id),await q();let t=_.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&Ht(t,e),o("alarm_received","app_ouverte"),me({trigger:e,alert:t}),h.name==="alerts"&&p(!0))}).subscribe(e=>{le=e==="SUBSCRIBED"?"ok":"connecting",ce()})}window.addEventListener("offline",ce);window.addEventListener("online",()=>{ce(),y&&(Re(),q().then(()=>{Te(),h.name==="alerts"&&p(!0)}).catch(()=>{}))});document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||!y||((le!=="ok"||ne?.state!=="joined")&&Re(),q().then(e=>{Te(),e&&h.name==="alerts"&&p(!0)}).catch(()=>{}))});async function Ut(e){location.hash.startsWith("#/alarm/")&&(history.replaceState(null,"","#/alerts"),h=pt());let{data:t}=await f.rpc("recent_trigger",{p_trigger:e});if(!t||(G[t.alert_id]||0)>=t.id)return;await q();let a=_.find(n=>n.id===t.alert_id);a&&(o("alarm_received","notification"),me({trigger:t,alert:a}))}function dt(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var L="",ue=!1;async function D(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return L="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return L="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return L="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return L="Notifications pas encore autoris\xE9es.";let e=n=>{let s=n.toJSON();return f.rpc("save_push_subscription",{p_endpoint:s.endpoint,p_p256dh:s.keys.p256dh,p_auth:s.keys.auth})},t=dt(be),a=async n=>{try{return await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})}catch(s){if(s?.name==="AbortError")return await new Promise(i=>setTimeout(i,2e3)),n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t});throw s}};try{await W;let n=await navigator.serviceWorker.ready,s=await n.pushManager.getSubscription();s||(s=await a(n));let{error:i}=await e(s);if(i)throw new Error(`enregistrement : ${i.message}`);return ue=!1,L="ok"}catch(n){return console.warn("push",n),ue=n?.name==="AbortError"&&/push service/i.test(n?.message||""),L=`\xC9chec de l'inscription : ${n?.name||""} ${n?.message||n}`.trim()}}function se(){return"Notification"in window?Notification.permission!=="default"?Promise.resolve(Notification.permission):(o("notif_prompt"),Notification.requestPermission().then(e=>(o(e==="granted"?"notif_granted":"notif_denied"),e))):Promise.resolve("unsupported")}async function Ht(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),n={body:"\xC7a y est, c'est le moment !",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,n):new Notification(`ALERTE ! ${e.title}`,n)}var Vt={alarm:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},h={name:"splash"},te=0;function pt(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,n]=e.split("/");return{name:S[a]?a:"home",id:n,query:new URLSearchParams(t||"")}}async function p(e=!1){let t=++te,a=h.name;h=pt(),h.name!==a&&(h.name==="join"&&o("join_view"),h.name==="find"&&o("find_view"));let n=h,s=!["splash","intro"].includes(n.name);Ie.hidden=!s,document.body.classList.toggle("no-tabbar",!s),Ie.querySelectorAll("a").forEach(l=>{let m=l.dataset.tab===Vt[n.name];l.classList.toggle("on",m),m?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")});let i=e?null:setTimeout(()=>{t===te&&(P.innerHTML='<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span class="sr-only">Chargement\u2026</span></div>')},250);try{["splash","intro","home","alerts","legal"].includes(n.name)||await W;let l=await S[n.name](n);if(clearTimeout(i),t!==te)return;let m=document.activeElement?.id,$=document.activeElement?.selectionStart,E=e&&P.contains(document.activeElement)?it(document.activeElement):null;if(P.innerHTML=l,E?.sel&&document.querySelector(E.sel)?.focus({preventScroll:!0}),e||(P.classList.remove("enter"),P.offsetWidth,P.classList.add("enter")),m==="find-q"){let w=document.getElementById("find-q");w?.focus(),w&&$!=null&&w.setSelectionRange($,$)}if(n.name==="settings"){let w=document.getElementById("s-sound");w&&(w.value=d.sound),document.getElementById("s-sort").value=d.sort}e||(window.scrollTo(0,0),v.innerHTML||P.querySelector("h1")?.focus({preventScroll:!0}))}catch(l){clearTimeout(i),console.error(l),o("load_error",n.name.replace(/[^a-z]/g,"").slice(0,20)||null),t===te&&(P.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>p());async function Ft(){if("serviceWorker"in navigator&&!x){let a=!!navigator.serviceWorker.controller,n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a&&!n&&!K&&(n=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(s=>{s.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s.update().catch(()=>{})})}).catch(()=>{})}new URLSearchParams(location.search).get("ouvrir")==="reglages"&&(history.replaceState(null,"",`${location.pathname}#/settings`),d.onboarded||(d.onboarded=!0,B()));let e=!location.hash||location.hash==="#/"||location.hash==="#/splash";e&&!d.onboarded?location.replace("#/splash"):location.hash.startsWith("#/join/")&&!d.onboarded&&(d.onboarded=!0,B()),o("app_open",x?"apk":T?"installee":"navigateur"),x&&Oe();let t=_t();Array.isArray(t?.alerts)&&(_=t.alerts,ie=!0,z=Date.now()),e&&d.onboarded&&ie?location.replace(_.length?"#/alerts":"#/home"):e&&d.onboarded||p();try{await xt(),f.rpc("touch_my_alerts");let[,a]=await Promise.all([Ge(),q().catch(()=>!1)]);Re(),Te(),x?(Promise.all([X(),Me()]).then(()=>{o("push_state",xe()?"reveil_ok":"reveil_incomplet"),["alerts","settings"].includes(h.name)&&p(!0),Ee()}),document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="visible")return;Oe();let n=A==="ok"?Promise.resolve():X();Promise.all([Me(),n]).then(()=>{["alerts","settings"].includes(h.name)&&p(!0)})})):D().then(()=>{let n=pe();o("push_state",n.ok?"ok":{off:"non_demande",denied:"bloque",failed:"echec",unsupported:"non_supporte"}[n.code]||null),["alerts","settings"].includes(h.name)&&p(!0),Ee()}),e&&d.onboarded&&!t?location.replace(_.length?"#/alerts":"#/home"):a&&["alerts","home"].includes(h.name)&&p(!0)}catch(a){console.error(a),P.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>'}}Ft();
