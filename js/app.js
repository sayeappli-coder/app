import{createClient as oe}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var J="https://xtyysubdpapuxjlynapp.supabase.co",W="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",P="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var c=oe(J,W,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),B=document.getElementById("app"),D=document.getElementById("overlay"),H=document.getElementById("tabbar"),j=document.getElementById("toast"),X="0.6",Z="saye.prefs",U={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1};function le(){try{return{...U,...JSON.parse(localStorage.getItem(Z)||"{}")}}catch{return{...U}}}function L(){try{localStorage.setItem(Z,JSON.stringify(d))}catch{}}var d=le(),f=null,w=[],A={},q=null,Y={},ee={sport:"Sport",loisirs:"Loisirs",tv:"TV & Radio",commerce:"Commerce",divers:"Divers"},Q={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),s=(e,t="")=>`<svg class="${t}"><use href="#${e}"/></svg>`;function o(e,t=2600){j.textContent=e,j.hidden=!1,clearTimeout(o.t),o.t=setTimeout(()=>{j.hidden=!0},t)}function S(e){location.hash=e}function y(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${s("i-back")}</button>
    <h1>${l(e)}</h1>
  </div>`}function F(e){let t=Q[e]||Q.a_confirmer;return`<span class="rel ${e}">${t.icon?s(t.icon):`<b>${t.mark}</b>`} ${t.label}</span>`}function ce(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function I(e){let t=e?.message||String(e);return t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var T=null,O=null;function te(e=d.sound,t=!1){if(ae(),e!=="aucun")try{T=T||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},i=a[e]||a.court,n=()=>{let r=T.currentTime;for(let[v,b]of i){if(v){let $=T.createOscillator(),_=T.createGain();$.type=e==="sirene"?"sawtooth":"sine",$.frequency.value=v,_.gain.setValueAtTime(1e-4,r),_.gain.exponentialRampToValueAtTime(.35,r+.02),_.gain.exponentialRampToValueAtTime(1e-4,r+b),$.connect(_).connect(T.destination),$.start(r),$.stop(r+b)}r+=b}return i.reduce((v,[,b])=>v+b,0)},u=n();t&&(O=setInterval(n,(u+.6)*1e3))}catch{}}function ae(){clearInterval(O),O=null}function ie(){d.vibrate&&navigator.vibrate&&navigator.vibrate([400,150,400,150,800])}async function ue(){let{data:{session:e}}=await c.auth.getSession();if(e){let{error:a}=await c.auth.getUser();a&&(await c.auth.signOut({scope:"local"}),e=null)}if(!e){let{data:a,error:i}=await c.auth.signInAnonymously();if(i)throw i;e=a.session}let{data:t}=await c.from("profiles").select("pseudo").eq("id",e.user.id).maybeSingle();f={id:e.user.id,pseudo:t?.pseudo||null}}async function C(){let{data:e,error:t}=await c.rpc("my_alerts");if(t)throw t;return w=e||[],w}async function ne(e){if(!e||e===f.pseudo)return;let{error:t}=await c.from("profiles").upsert({id:f.id,pseudo:e});if(t)throw t;f.pseudo=e}var p={};p.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&S(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
    ${s("i-bell")}
    <div class="word">SAYE</div>
    <h2>\xAB \xC7a y est \xBB, c'est maintenant !</h2>
    <p>L'application communautaire qui te pr\xE9vient pile au bon moment, pour chaque \xE9v\xE9nement important pour toi ou ta communaut\xE9.</p>
  </div>`);p.intro=()=>`
  <div class="brand" style="margin-bottom:24px">${s("i-bell")}</div>
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
  <button class="btn" data-action="start">Commencer</button>`;p.home=()=>`
  <div class="brandbar">
    <a class="brand" href="#/home">${s("i-bell")}<b>SAYE</b></a>
    <button class="icon-btn" data-action="share-app" aria-label="Partager l'application">${s("i-share")}</button>
  </div>
  <h1>Je souhaite\u2026</h1>
  <a class="choice filled" href="#/create">${s("i-plus")}<div><strong>Cr\xE9er une nouvelle alerte</strong><span>Je la lance, puis je la partage</span></div></a>
  <a class="choice" href="#/find">${s("i-search")}<div><strong>Choisir une alerte existante</strong><span>Je rejoins celles de la communaut\xE9</span></div></a>
  ${w.length?`<a class="btn outline" href="#/alerts">Mes alertes (${w.length})</a>`:""}`;p.create=()=>`
  ${y("Cr\xE9er une alerte")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Qui pourra la rejoindre ?</p>
  <button class="choice filled stack" data-action="pick-visibility" data-v="public">
    <div class="head">${s("i-globe")}<strong>Alerte publique</strong></div>
    <span>Visible par tout le monde. Plusieurs membres doivent confirmer (quorum). 100 % communautaire !</span>
  </button>
  <button class="choice stack" data-action="pick-visibility" data-v="private">
    <div class="head">${s("i-lock")}<strong>Alerte priv\xE9e</strong></div>
    <span>Un seul clic d'un membre pr\xE9vient tout le cercle. Je la partage uniquement avec les personnes que j'invite. Elles pourront inviter qui elles veulent : le Cercle VIP.</span>
  </button>
  <div class="note">Une alerte publique r\xE9guli\xE8re (\xE9mission, stream) n'est pas effac\xE9e. SAYE les contr\xF4le et peut les supprimer pour ne pas surcharger le serveur.</div>
  <div class="grow"></div>
  <button class="link-btn" data-back="#/home">Annuler</button>`;p["create-form"]=()=>{if(!A.visibility)return setTimeout(()=>S("#/create")),"";let t=A.visibility==="public"?"quorum":"one";return`
  ${y("Nouvelle alerte","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Chaque but de France \u2013 Br\xE9sil">

    <label class="field" for="f-cat">Cat\xE9gorie</label>
    <select id="f-cat" name="category">
      ${Object.entries(ee).map(([a,i])=>`<option value="${a}">${i}</option>`).join("")}
    </select>

    <label class="field" for="f-pseudo">Pseudo <small>(facultatif)</small></label>
    <input id="f-pseudo" name="pseudo" type="text" maxlength="24" pattern="[A-Za-z0-9_\\-\\.]{2,24}" placeholder="Fred654" value="${l(f.pseudo||"")}" ${f.pseudo?"readonly":""}>
    <p class="hint">Sans pseudo, tu restes anonyme.${f.pseudo?"":" Lettres, chiffres, point, tiret, 2 \xE0 24 caract\xE8res."}</p>

    <label class="field">Qui peut la d\xE9clencher ?</label>
    <label class="radio"><input type="radio" name="trigger_mode" value="one" ${t==="one"?"checked":""}><div><b>Un seul membre suffit</b><small>Conseill\xE9 pour un cercle priv\xE9</small></div></label>
    <label class="radio"><input type="radio" name="trigger_mode" value="quorum" ${t==="quorum"?"checked":""}><div><b>Plusieurs membres (quorum)</b><small>Conseill\xE9 pour une alerte publique</small></div></label>
    <label class="radio"><input type="radio" name="trigger_mode" value="owner"><div><b>Moi seul</b></div></label>

    <label class="field" for="f-invite">Qui peut inviter du monde ?</label>
    <select id="f-invite" name="invite_mode">
      <option value="members">Mes invit\xE9s peuvent inviter</option>
      <option value="owner">Moi seul</option>
    </select>
    <div class="spacer"></div>
    <button class="btn" type="submit">Valider mon alerte</button>
  </form>`};p.share=async({id:e})=>{await C();let t=w.find(r=>r.id===e);if(!t)return`${y("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:r}=await c.rpc("get_invite_code",{p_alert:e});if(a=r,!a)return`${y("Invite tes proches","#/alerts")}<p class="empty">Seul le cr\xE9ateur peut inviter sur cette alerte.</p>`}let i=ce(t,a),n=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,u=encodeURIComponent(`${n} ${i}`);return`
  ${y("Invite tes proches","#/alerts")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Plus il y a de monde, plus l'alerte est efficace. Partage-la !</p>
  <div class="pill-title">${s("i-bell-outline")}${l(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-url="${l(i)}">${s("i-link")}Copier le lien</button>
    <a href="sms:?&body=${u}">${s("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${u}" target="_blank" rel="noopener">${s("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-url="${l(i)}">${s("i-chat")}Signal</a>
    <a href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${u}">${s("i-mail")}E-mail</a>
    <button data-action="native-share" data-url="${l(i)}" data-text="${l(n)}">${s("i-dots")}Autres\u2026</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts">${A.justCreated?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};p.alerts=async()=>{await C();let e=de([...w]);if(!e.length)return`${y("Mes alertes","#/home")}
      <p class="empty">Tu n'as encore aucune alerte.</p>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let t=Date.now();return`
  ${y("Mes alertes","#/home")}
  <div class="banner">Reste sur cette page : tu es en veille</div>
  <div class="grid">
    ${e.map(a=>{let i=a.cooldown_until&&new Date(a.cooldown_until).getTime()>t,n=a.trigger_mode!=="owner"||a.is_owner,u=n?a.trigger_mode==="quorum"?"Appuie quand tu le vois":"Appuie d\xE8s que \xE7a arrive":"Seul le cr\xE9ateur d\xE9clenche",r=a.visibility==="private"?`Priv\xE9e \xB7 ${a.trigger_mode==="quorum"?"quorum requis":a.trigger_mode==="owner"?"cr\xE9ateur seul":"1 clic suffit"}`:`Publique \xB7 ${a.trigger_mode==="quorum"?"quorum requis":a.trigger_mode==="owner"?"cr\xE9ateur seul":"1 clic suffit"}`;return`<div class="tile">
        <button class="alarm-btn ${i?"cooldown":""}" data-action="press" data-id="${a.id}" ${n?"":"disabled"}>
          ${s("i-bell")}<strong>${l(a.title)}</strong><span>${u}</span>
        </button>
        <div class="tile-actions">
          ${a.can_invite?`<button data-action="open-share" data-id="${a.id}" aria-label="Partager">${s("i-share")}</button>`:""}
          <button data-action="alert-menu" data-id="${a.id}" aria-label="Plus d'options">${s("i-dots")}</button>
        </div>
        <div class="tile-meta">${r} \xB7 ${a.members_count} membre${a.members_count>1?"s":""}</div>
        ${F(a.reliability)}
      </div>`}).join("")}
  </div>
  <p class="center" style="font-weight:800;font-size:18px;margin-top:28px">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>
  ${fe()}`};function de(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="recent"?e.sort((t,a)=>new Date(a.last_trigger_at||0)-new Date(t.last_trigger_at||0)):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var pe=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,me=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;function fe(){return pe&&!me?`<div class="note info">${s("i-info")}<span>Sur iPhone, pour \xEAtre pr\xE9venu quand l'app est ferm\xE9e : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB, et ouvre SAYE depuis l'ic\xF4ne.</span></div>`:"Notification"in window?Notification.permission==="granted"?!m||m==="ok"?"":`<p class="hint center">${l(m)}</p><button class="btn outline small" data-action="fix-notif">R\xE9parer les notifications</button>`:Notification.permission==="denied"?'<p class="hint center">Les notifications sont bloqu\xE9es pour SAYE dans ton navigateur.</p>':'<button class="btn outline small" data-action="ask-notif">Activer les notifications</button>':""}var x={q:"",cat:""};p.find=async()=>{let{data:e,error:t}=await c.rpc("find_alerts",{p_query:x.q,p_category:x.cat||null});if(t)throw t;let a=e||[];return`
  ${y("Choisir une alerte","#/home")}
  <div class="search">${s("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" value="${l(x.q)}"></div>
  <div class="row">
    <select id="find-cat"><option value="">Cat\xE9gorie : toutes</option>
      ${Object.entries(ee).map(([i,n])=>`<option value="${i}" ${x.cat===i?"selected":""}>${n}</option>`).join("")}
    </select>
  </div>
  <div class="list">
    ${a.length?a.map(i=>`
      <button class="card" data-action="open-join" data-id="${i.id}">
        <div class="grow">
          <small>Publique${i.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${l(i.title)}</b>
          <span>par ${l(i.owner_pseudo||"Anonyme")} \xB7 ${i.members_count} membre${i.members_count>1?"s":""}</span>
        </div>
        ${F(i.reliability)}
      </button>`).join(""):'<p class="empty">Aucune alerte publique ne correspond.</p>'}
  </div>
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};p.join=async({id:e,query:t})=>{let a=t.get("c"),{data:i,error:n}=await c.rpc("get_alert_preview",{p_alert:e,p_code:a});return n||!i?`${y("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${y("Rejoindre une alerte","#/home")}
  <div class="pill-title">${s(i.visibility==="private"?"i-lock":"i-globe")}${l(i.title)}</div>
  <p style="font-size:18px">
    ${i.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${l(i.owner_pseudo||"Anonyme")}</b> \xB7 ${i.members_count} membre${i.members_count>1?"s":""}
  </p>
  ${F(i.reliability)}
  <div class="grow"></div>
  ${i.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${i.id}" data-code="${l(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};p.alarm=async({id:e})=>(setTimeout(()=>ge(Number(e))),p.alerts());p.quorum=async({id:e})=>(setTimeout(()=>re(e)),p.alerts());p.settings=()=>`
  ${y("R\xE9glages","#/home")}
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
    <option value="standard">Standard</option>
    <option value="recent">Dernier d\xE9clenchement</option>
    <option value="alpha">Ordre alphab\xE9tique</option>
    <option value="membres">Nombre de membres</option>
  </select>

  <label class="field">Notifications sur cet appareil</label>
  <p id="notif-status" class="muted" style="font-weight:700;margin:0 0 10px">${m==="ok"?"Notifications actives sur cet appareil \u2713":l(m||"V\xE9rification\u2026")}</p>
  <button class="btn outline small" data-action="fix-notif">Activer / r\xE9parer les notifications</button>
  <button class="link-btn" data-action="diag-notif">Diagnostic des notifications</button>
  <pre id="diag" style="white-space:pre-wrap;font-size:13px;margin:0"></pre>

  <label class="field" for="s-pseudo">Mon pseudo</label>
  <div class="row">
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Anonyme" value="${l(f.pseudo||"")}">
    <button class="btn small" style="flex:0 0 auto;width:auto" data-action="save-pseudo">OK</button>
  </div>

  <div class="spacer"></div>
  <div class="note info">${s("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
  <p class="muted" style="font-weight:700">Une alerte est supprim\xE9e si personne ne s'y est connect\xE9 depuis plus de 24 heures.</p>
  <div class="row">
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
  </div>
  <button class="link-btn center" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>
  <p class="muted center" style="font-size:13px;font-weight:700">Version ${X}</p>`;p.legal=()=>`
  ${y("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function K({trigger:e,alert:t,test:a=!1}){q={triggerId:e?.id,alertId:t?.id,test:a};let i=t?`${t.visibility==="private"?"Cercle priv\xE9":"Alerte publique"} \xB7 ${t.members_count} membre${t.members_count>1?"s":""}`:"";D.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-live="assertive">
      <div class="kicker">ALERTE !</div>
      ${s("i-bell","big")}
      <h2>${l(t?.title||"Test de ton alerte")}</h2>
      <div class="by">${a?"Voil\xE0 ce que tu verras":`d\xE9clench\xE9e par ${l(e?.pseudo||"un membre")}`}</div>
      <p style="font-weight:800">${l(i)}</p>
      ${e?.comment?`<p style="font-size:19px">\xAB ${l(e.comment)} \xBB</p>`:""}
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
      ${a?"":'<button class="link-btn" data-action="report">Fausse alerte ? Signaler</button>'}
    </div>`,te(d.sound,!0),ie()}function h(){ae(),navigator.vibrate&&navigator.vibrate(0),D.innerHTML="",q=null,clearInterval(h.timer)}function be(e,t){let a=5;D.innerHTML=`
    <div class="full">
      ${s("i-bell","mid")}
      <h1>Merci !</h1>
      <p class="lead">La communaut\xE9 SAYE te remercie pour ta participation.</p>
      <p class="sub">Alerte envoy\xE9e \xE0 ${e.members} membre${e.members>1?"s":""}. Les clics suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
      <button class="btn outline small" data-action="cancel-trigger" data-id="${e.trigger_id}" id="undo">Clic par erreur ? Annuler (${a} s)</button>
    </div>`,h.timer=setInterval(()=>{a-=1;let i=document.getElementById("undo");if(!i)return clearInterval(h.timer);a<=0?(i.remove(),clearInterval(h.timer)):i.textContent=`Clic par erreur ? Annuler (${a} s)`},1e3)}async function se(e,{count:t,quorum:a,window_s:i,firstPseudo:n,since:u}){let r=Y[e.id]&&Date.now()-Y[e.id]<i*1e3,v=(u?new Date(u).getTime():Date.now())+i*1e3,b=Math.max(0,t-1);D.innerHTML=`
    <div class="full">
      ${s("i-bell","mid")}
      <h1 style="font-size:32px">${r?"Signal envoy\xE9":"Des membres ont signal\xE9"}</h1>
      <p class="lead">${l(e.title)}</p>
      <p style="font-size:19px;font-weight:700">${r?"On attend la confirmation des autres membres.":`${l(n||"Un membre")}${b?` et ${b} autre${b>1?"s":""} membre${b>1?"s":""} ont appuy\xE9`:" a appuy\xE9"}. Tu le vois aussi ?`}</p>
      <div class="progress"><div style="width:${Math.min(100,t/a*100)}%"></div></div>
      <p class="sub">${t} confirmation${t>1?"s":""} sur ${a} n\xE9cessaire${a>1?"s":""}</p>
      <p class="muted" style="font-weight:700" id="q-left"></p>
      <div style="height:40px"></div>
      ${r?"":`<button class="btn" data-action="press" data-id="${e.id}">Je confirme</button>`}
      <button class="btn outline" data-action="close-overlay">${r?"Fermer":"Pas encore"}</button>
      <p class="muted" style="font-weight:700">\xC0 ${a} confirmations, l'alerte sonne pour tout le monde.</p>
    </div>`,clearInterval(h.timer);let $=()=>{let _=Math.ceil((v-Date.now())/1e3),E=document.getElementById("q-left");if(!E)return clearInterval(h.timer);if(_<=0){h();return}E.textContent=`Encore ${_} seconde${_>1?"s":""} pour confirmer`};$(),h.timer=setInterval($,500)}async function he(e){let t=w.find(n=>n.id===e),{data:a,error:i}=await c.rpc("press_alert",{p_alert:e});if(i)return o(I(i));if(a.status==="cooldown")return o("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(a.status==="forbidden")return o("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(a.status==="triggered"){be(a,t),g();return}a.status==="pending"&&(Y[e]=Date.now(),se(t,{count:a.count,quorum:a.quorum,window_s:a.window_s,firstPseudo:f.pseudo}))}var V={start(){d.onboarded=!0,L(),S("#/home")},"pick-visibility"(e){A={visibility:e.dataset.v},S("#/create-form")},press(e){he(e.dataset.id)},"open-share"(e){A.justCreated=!1,S(`#/share/${e.dataset.id}`)},"open-join"(e){S(`#/join/${e.dataset.id}`)},async join(e){let t=N(),{error:a}=await c.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(a)return o(I(a));o("Tu seras pr\xE9venu !"),await t,await k(),S("#/alerts")},async"diag-notif"(){let e=document.getElementById("diag"),t=a=>{e.textContent+=`${a}
`};e.textContent="";try{t(`Version ${X} \xB7 permission : ${Notification.permission}`);let a=await navigator.serviceWorker.ready;t(`Service worker : ${a.active?"actif":"inactif"} \xB7 port\xE9e ${new URL(a.scope).pathname}`);let i=await a.pushManager.getSubscription();t(`Abonnement existant : ${i?"oui":"non"}`),i&&(await i.unsubscribe(),t("\u2192 supprim\xE9"));let n=async($,_)=>{try{let E=await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_});return t(`${$} : OK (${new URL(E.endpoint).host})`),E}catch(E){return t(`${$} : \xC9CHEC ${E.name} ${E.message}`),null}};if(await n("Cl\xE9 SAYE",z(P))){await k(),t(`Enregistrement serveur : ${m}`);return}let r=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),v=new Uint8Array(await crypto.subtle.exportKey("raw",r.publicKey)),b=await n("Cl\xE9 de test neuve",v);b&&await b.unsubscribe()}catch(a){t(`Erreur : ${a.name} ${a.message}`)}},async"fix-notif"(){let e=document.getElementById("notif-status");e&&(e.textContent="Inscription en cours\u2026"),await N(),await k(),e&&(e.textContent=m==="ok"?"Notifications actives sur cet appareil \u2713":m),m==="ok"&&o("Notifications activ\xE9es !")},async"alert-menu"(e){let t=w.find(u=>u.id===e.dataset.id);if(!t)return;let a=t.is_owner?`Supprimer l'alerte \xAB ${t.title} \xBB pour tout le monde ?`:`Quitter l'alerte \xAB ${t.title} \xBB ?`;if(!confirm(a))return;let i=t.is_owner?c.from("alerts").delete().eq("id",t.id):c.from("members").delete().eq("alert_id",t.id).eq("user_id",f.id),{error:n}=await i;if(n)return o(I(n));o(t.is_owner?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),g()},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),o("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}o("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else V.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),o("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){h()},"close-overlay"(){h(),g()},async"cancel-trigger"(e){let{data:t}=await c.rpc("cancel_trigger",{p_trigger:Number(e.dataset.id)});h(),o(t?"Alerte annul\xE9e.":"Trop tard pour annuler."),g()},async report(){q?.triggerId&&await c.rpc("report_trigger",{p_trigger:q.triggerId}),h(),o("Merci, signalement enregistr\xE9.")},"test-alarm"(){K({test:!0})},async"save-pseudo"(){let e=document.getElementById("s-pseudo").value.trim();if(!/^[A-Za-z0-9_.-]{2,24}$/.test(e))return o("Pseudo : 2 \xE0 24 lettres, chiffres, point ou tiret.");try{await ne(e),o("Pseudo enregistr\xE9.")}catch(t){o(I(t))}},"reset-prefs"(){confirm("Effacer tes pr\xE9f\xE9rences sur cet appareil ?")&&(d={...U,onboarded:!0},L(),g(),o("Pr\xE9f\xE9rences effac\xE9es."))},"ask-notif"(){$e()}};document.addEventListener("click",e=>{let t=e.target.closest("[data-back]");if(t){e.preventDefault();let i=t.dataset.back;i==="history"&&history.length>1?history.back():S(i==="history"?"#/home":i);return}let a=e.target.closest("[data-action]");a&&V[a.dataset.action]&&(a.tagName==="BUTTON"&&e.preventDefault(),V[a.dataset.action](a,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,L(),t.dataset.pref==="sound"&&te(t.value)),t.id==="find-cat"&&(x.cat=t.value,g())});var G;document.addEventListener("input",e=>{e.target.id==="find-q"&&(clearTimeout(G),G=setTimeout(()=>{x.q=e.target.value.trim(),g(!0)},350))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0;let i=N();try{let n=String(t.get("pseudo")||"").trim();n&&n!==f.pseudo&&await ne(n);let{data:u,error:r}=await c.from("alerts").insert({title:String(t.get("title")).trim(),category:t.get("category"),visibility:A.visibility,trigger_mode:t.get("trigger_mode"),invite_mode:t.get("invite_mode"),owner_pseudo:f.pseudo}).select("id").single();if(r)throw r;A={justCreated:!0},S(`#/share/${u.id}`),i.then(k)}catch(n){o(I(n)),a.disabled=!1}});function ve(){c.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===f.id)return;await C();let t=w.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&ye(t,e),K({trigger:e,alert:t}),R.name==="alerts"&&g(!0))}).on("postgres_changes",{event:"UPDATE",schema:"public",table:"triggers"},({new:e})=>{e.cancelled&&q?.triggerId===e.id&&(h(),o("L'alerte a \xE9t\xE9 annul\xE9e par son auteur."))}).on("postgres_changes",{event:"INSERT",schema:"public",table:"presses"},({new:e})=>{e.user_id===f.id||q||re(e.alert_id).then(ie)}).subscribe()}async function re(e){await C();let t=w.find(u=>u.id===e);if(!t)return;let{data:a}=await c.from("presses").select("pseudo, created_at").eq("alert_id",e).order("created_at"),i=(a||[]).filter(u=>Date.now()-new Date(u.created_at).getTime()<3e4);if(!i.length)return o("Ce signalement est termin\xE9.");let n=Math.min(t.quorum,Math.max(t.members_count,1));se(t,{count:i.length,quorum:n,window_s:30,firstPseudo:i[0].pseudo,since:i[0].created_at})}async function ge(e){let{data:t}=await c.from("triggers").select("*").eq("id",e).maybeSingle();if(!t)return;if(t.cancelled)return o("Cette alerte a \xE9t\xE9 annul\xE9e par son auteur.");if(Date.now()-new Date(t.created_at).getTime()>10*60*1e3)return;await C();let a=w.find(i=>i.id===t.alert_id);a&&K({trigger:t,alert:a})}function z(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}var m="";async function k(){if(!("serviceWorker"in navigator)||!("PushManager"in window))return m="Ce navigateur ne g\xE8re pas les notifications push.";if(!("Notification"in window))return m="Notifications indisponibles sur ce navigateur.";if(Notification.permission==="denied")return m="Notifications bloqu\xE9es dans le navigateur.";if(Notification.permission!=="granted")return m="Notifications pas encore autoris\xE9es.";let e=t=>{let a=t.toJSON();return c.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:f.id,p256dh:a.keys.p256dh,auth:a.keys.auth})};try{let t=await navigator.serviceWorker.ready,a=await t.pushManager.getSubscription();a||(a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:z(P)}));let{error:i}=await e(a);if(i&&(await a.unsubscribe(),a=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:z(P)}),{error:i}=await e(a)),i)throw new Error(`enregistrement : ${i.message}`);return m="ok"}catch(t){return console.warn("push",t),m=`\xC9chec de l'inscription : ${t?.name||""} ${t?.message||t}`.trim()}}function N(){return!("Notification"in window)||Notification.permission!=="default"?Promise.resolve(Notification?.permission):Notification.requestPermission()}async function ye(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),i={body:`D\xE9clench\xE9e par ${t.pseudo||"un membre"}`,icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,i):new Notification(`ALERTE ! ${e.title}`,i)}async function $e(){await N(),await k(),R.name==="alerts"&&g(!0)}var we={alarm:"alerts",quorum:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},R={name:"splash"},M=0;function _e(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,i]=e.split("/");return{name:p[a]?a:"home",id:i,query:new URLSearchParams(t||"")}}async function g(e=!1){let t=++M;R=_e();let a=R,i=!["splash","intro"].includes(a.name);H.hidden=!i,document.body.classList.toggle("no-tabbar",!i),H.querySelectorAll("a").forEach(n=>n.classList.toggle("on",n.dataset.tab===we[a.name]));try{let n=await p[a.name](a);if(t!==M)return;let u=document.activeElement?.id,r=document.activeElement?.selectionStart;if(B.innerHTML=n,u==="find-q"){let v=document.getElementById("find-q");v?.focus(),v&&r!=null&&v.setSelectionRange(r,r)}a.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||window.scrollTo(0,0)}catch(n){console.error(n),t===M&&(B.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>g());async function Se(){if("serviceWorker"in navigator){let t=!!navigator.serviceWorker.controller,a=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!a&&!q&&(a=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(i=>{i.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&i.update().catch(()=>{})})}).catch(()=>{})}let e=location.hash.startsWith("#/join/");!location.hash||location.hash==="#/"?location.hash="#/splash":e&&!d.onboarded&&(d.onboarded=!0,L());try{await ue(),c.rpc("touch_my_alerts"),await C().catch(()=>{}),ve(),k().then(()=>{["alerts","settings"].includes(R.name)&&g(!0)})}catch(t){console.error(t),B.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>';return}g()}Se();
