import{createClient as se}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";var V="https://xtyysubdpapuxjlynapp.supabase.co",z="sb_publishable_EbYMxgSwQ4tL_JgBMhTTcg_jzjJruSq",P="BNl2SDYs--jYR3gFzPF-EArKvDthykX5F3CmWiSJLzadOsjrVYDd85peAe7vYoYHlnXAYcWj_zeRhTWWJszfiKs";var o=se(V,z,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),j=document.getElementById("app"),C=document.getElementById("overlay"),J=document.getElementById("tabbar"),R=document.getElementById("toast"),Q="saye.prefs",D={sound:"court",vibrate:!0,flash:!0,sort:"standard",onboarded:!1};function re(){try{return{...D,...JSON.parse(localStorage.getItem(Q)||"{}")}}catch{return{...D}}}function I(){try{localStorage.setItem(Q,JSON.stringify(d))}catch{}}var d=re(),m=null,v=[],S={},T=null,M={},G={sport:"Sport",loisirs:"Loisirs",tv:"TV & Radio",commerce:"Commerce",divers:"Divers"},W={fiable:{label:"Fiable",icon:"i-check"},a_confirmer:{label:"\xC0 confirmer",icon:null,mark:"!"},peu_fiable:{label:"Peu fiable",icon:null,mark:"\xD7"}},u=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),s=(e,t="")=>`<svg class="${t}"><use href="#${e}"/></svg>`;function l(e,t=2600){R.textContent=e,R.hidden=!1,clearTimeout(l.t),l.t=setTimeout(()=>{R.hidden=!0},t)}function $(e){location.hash=e}function b(e,t="history"){return`<div class="topbar">
    <button class="back" data-back="${t}" aria-label="Retour">${s("i-back")}</button>
    <h1>${u(e)}</h1>
  </div>`}function U(e){let t=W[e]||W.a_confirmer;return`<span class="rel ${e}">${t.icon?s(t.icon):`<b>${t.mark}</b>`} ${t.label}</span>`}function oe(e,t){return`${location.href.split("#")[0]}#/join/${e.id}${t?`?c=${encodeURIComponent(t)}`:""}`}function k(e){let t=e?.message||String(e);return t.includes("bad_code")?"Ce lien d'invitation n'est pas valide.":t.includes("not_found")?"Cette alerte n'existe plus.":t.includes("not_member")?"Tu n'es pas membre de cette alerte.":t.includes("duplicate key")&&t.includes("pseudo")?"Ce pseudo est d\xE9j\xE0 pris.":"Oups, une erreur est survenue. R\xE9essaie."}var A=null,N=null;function X(e=d.sound,t=!1){if(Z(),e!=="aucun")try{A=A||new(window.AudioContext||window.webkitAudioContext);let a={court:[[880,.12],[0,.06],[880,.12],[0,.06],[1175,.3]],sirene:[[660,.35],[880,.35],[660,.35],[880,.35]],carillon:[[1047,.25],[784,.25],[659,.25],[523,.5]]},n=a[e]||a.court,i=()=>{let c=A.currentTime;for(let[g,y]of n){if(g){let w=A.createOscillator(),_=A.createGain();w.type=e==="sirene"?"sawtooth":"sine",w.frequency.value=g,_.gain.setValueAtTime(1e-4,c),_.gain.exponentialRampToValueAtTime(.35,c+.02),_.gain.exponentialRampToValueAtTime(1e-4,c+y),w.connect(_).connect(A.destination),w.start(c),w.stop(c+y)}c+=y}return n.reduce((g,[,y])=>g+y,0)},r=i();t&&(N=setInterval(i,(r+.6)*1e3))}catch{}}function Z(){clearInterval(N),N=null}function ee(){d.vibrate&&navigator.vibrate&&navigator.vibrate([400,150,400,150,800])}async function le(){let{data:{session:e}}=await o.auth.getSession();if(e){let{error:a}=await o.auth.getUser();a&&(await o.auth.signOut({scope:"local"}),e=null)}if(!e){let{data:a,error:n}=await o.auth.signInAnonymously();if(n)throw n;e=a.session}let{data:t}=await o.from("profiles").select("pseudo").eq("id",e.user.id).maybeSingle();m={id:e.user.id,pseudo:t?.pseudo||null}}async function q(){let{data:e,error:t}=await o.rpc("my_alerts");if(t)throw t;return v=e||[],v}async function te(e){if(!e||e===m.pseudo)return;let{error:t}=await o.from("profiles").upsert({id:m.id,pseudo:e});if(t)throw t;m.pseudo=e}var p={};p.splash=()=>(setTimeout(()=>{(location.hash==="#/splash"||location.hash==="")&&$(d.onboarded?"#/home":"#/intro")},1800),`<div class="splash">
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
  ${v.length?`<a class="btn outline" href="#/alerts">Mes alertes (${v.length})</a>`:""}`;p.create=()=>`
  ${b("Cr\xE9er une alerte")}
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
  <button class="link-btn" data-back="#/home">Annuler</button>`;p["create-form"]=()=>{if(!S.visibility)return setTimeout(()=>$("#/create")),"";let t=S.visibility==="public"?"quorum":"one";return`
  ${b("Nouvelle alerte","#/create")}
  <form id="create-form">
    <label class="field" for="f-title">Nom de l'alerte <small>(obligatoire)</small></label>
    <input id="f-title" name="title" type="text" required minlength="3" maxlength="80" placeholder="Chaque but de France \u2013 Br\xE9sil">

    <label class="field" for="f-cat">Cat\xE9gorie</label>
    <select id="f-cat" name="category">
      ${Object.entries(G).map(([a,n])=>`<option value="${a}">${n}</option>`).join("")}
    </select>

    <label class="field" for="f-pseudo">Pseudo <small>(facultatif)</small></label>
    <input id="f-pseudo" name="pseudo" type="text" maxlength="24" pattern="[A-Za-z0-9_\\-\\.]{2,24}" placeholder="Fred654" value="${u(m.pseudo||"")}" ${m.pseudo?"readonly":""}>
    <p class="hint">Sans pseudo, tu restes anonyme.${m.pseudo?"":" Lettres, chiffres, point, tiret, 2 \xE0 24 caract\xE8res."}</p>

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
  </form>`};p.share=async({id:e})=>{await q();let t=v.find(c=>c.id===e);if(!t)return`${b("Invite tes proches","#/alerts")}<p class="empty">Alerte introuvable.</p>`;let a=null;if(t.visibility==="private"){let{data:c}=await o.rpc("get_invite_code",{p_alert:e});if(a=c,!a)return`${b("Invite tes proches","#/alerts")}<p class="empty">Seul le cr\xE9ateur peut inviter sur cette alerte.</p>`}let n=oe(t,a),i=`SAYE : rejoins l'alerte \xAB ${t.title} \xBB pour \xEAtre pr\xE9venu pile au bon moment !`,r=encodeURIComponent(`${i} ${n}`);return`
  ${b("Invite tes proches","#/alerts")}
  <p style="font-weight:800;font-size:18px;margin-top:0">Plus il y a de monde, plus l'alerte est efficace. Partage-la !</p>
  <div class="pill-title">${s("i-bell-outline")}${u(t.title)}</div>
  <div class="share-grid">
    <button data-action="copy" data-url="${u(n)}">${s("i-link")}Copier le lien</button>
    <a href="sms:?&body=${r}">${s("i-chat")}SMS</a>
    <a href="https://wa.me/?text=${r}" target="_blank" rel="noopener">${s("i-chat")}WhatsApp</a>
    <a href="https://signal.me/#p" data-action="copy-signal" data-url="${u(n)}">${s("i-chat")}Signal</a>
    <a href="mailto:?subject=${encodeURIComponent("Alerte SAYE : "+t.title)}&body=${r}">${s("i-mail")}E-mail</a>
    <button data-action="native-share" data-url="${u(n)}" data-text="${u(i)}">${s("i-dots")}Autres\u2026</button>
  </div>
  <div class="grow"></div>
  <a class="btn outline" href="#/alerts">${S.justCreated?"Passer cette \xE9tape":"Retour \xE0 mes alertes"}</a>`};p.alerts=async()=>{await q();let e=ce([...v]);if(!e.length)return`${b("Mes alertes","#/home")}
      <p class="empty">Tu n'as encore aucune alerte.</p>
      <a class="btn" href="#/create">Cr\xE9er une alerte</a>
      <a class="btn outline" href="#/find">Trouver une alerte</a>`;let t=Date.now();return`
  ${b("Mes alertes","#/home")}
  <div class="banner">Reste sur cette page : tu es en veille</div>
  <div class="grid">
    ${e.map(a=>{let n=a.cooldown_until&&new Date(a.cooldown_until).getTime()>t,i=a.trigger_mode!=="owner"||a.is_owner,r=i?a.trigger_mode==="quorum"?"Appuie quand tu le vois":"Appuie d\xE8s que \xE7a arrive":"Seul le cr\xE9ateur d\xE9clenche",c=a.visibility==="private"?`Priv\xE9e \xB7 ${a.trigger_mode==="quorum"?"quorum requis":a.trigger_mode==="owner"?"cr\xE9ateur seul":"1 clic suffit"}`:`Publique \xB7 ${a.trigger_mode==="quorum"?"quorum requis":a.trigger_mode==="owner"?"cr\xE9ateur seul":"1 clic suffit"}`;return`<div class="tile">
        <button class="alarm-btn ${n?"cooldown":""}" data-action="press" data-id="${a.id}" ${i?"":"disabled"}>
          ${s("i-bell")}<strong>${u(a.title)}</strong><span>${r}</span>
        </button>
        <div class="tile-actions">
          ${a.can_invite?`<button data-action="open-share" data-id="${a.id}" aria-label="Partager">${s("i-share")}</button>`:""}
          <button data-action="alert-menu" data-id="${a.id}" aria-label="Plus d'options">${s("i-dots")}</button>
        </div>
        <div class="tile-meta">${c} \xB7 ${a.members_count} membre${a.members_count>1?"s":""}</div>
        ${U(a.reliability)}
      </div>`}).join("")}
  </div>
  <p class="center" style="font-weight:800;font-size:18px;margin-top:28px">Absent ? La communaut\xE9 SAYE te pr\xE9viendra par notification.</p>
  ${pe()}`};function ce(e){return d.sort==="alpha"?e.sort((t,a)=>t.title.localeCompare(a.title,"fr")):d.sort==="recent"?e.sort((t,a)=>new Date(a.last_trigger_at||0)-new Date(t.last_trigger_at||0)):d.sort==="membres"&&e.sort((t,a)=>a.members_count-t.members_count),e}var ue=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,de=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;function pe(){return ue&&!de?`<div class="note info">${s("i-info")}<span>Sur iPhone, pour \xEAtre pr\xE9venu quand l'app est ferm\xE9e : touche Partager, puis \xAB Sur l'\xE9cran d'accueil \xBB, et ouvre SAYE depuis l'ic\xF4ne.</span></div>`:!("Notification"in window)||Notification.permission==="granted"?"":Notification.permission==="denied"?'<p class="hint center">Les notifications sont bloqu\xE9es pour SAYE dans ton navigateur.</p>':'<button class="btn outline small" data-action="ask-notif">Activer les notifications</button>'}var E={q:"",cat:""};p.find=async()=>{let{data:e,error:t}=await o.rpc("find_alerts",{p_query:E.q,p_category:E.cat||null});if(t)throw t;let a=e||[];return`
  ${b("Choisir une alerte","#/home")}
  <div class="search">${s("i-search")}<input id="find-q" type="search" placeholder="Nom ou auteur de l'alerte" value="${u(E.q)}"></div>
  <div class="row">
    <select id="find-cat"><option value="">Cat\xE9gorie : toutes</option>
      ${Object.entries(G).map(([n,i])=>`<option value="${n}" ${E.cat===n?"selected":""}>${i}</option>`).join("")}
    </select>
  </div>
  <div class="list">
    ${a.length?a.map(n=>`
      <button class="card" data-action="open-join" data-id="${n.id}">
        <div class="grow">
          <small>Publique${n.is_member?" \xB7 d\xE9j\xE0 membre":""}</small>
          <b>${u(n.title)}</b>
          <span>par ${u(n.owner_pseudo||"Anonyme")} \xB7 ${n.members_count} membre${n.members_count>1?"s":""}</span>
        </div>
        ${U(n.reliability)}
      </button>`).join(""):'<p class="empty">Aucune alerte publique ne correspond.</p>'}
  </div>
  <a class="btn" href="#/create">Cr\xE9er une alerte</a>`};p.join=async({id:e,query:t})=>{let a=t.get("c"),{data:n,error:i}=await o.rpc("get_alert_preview",{p_alert:e,p_code:a});return i||!n?`${b("Rejoindre","#/home")}<p class="empty">Ce lien n'est pas valide ou l'alerte n'existe plus.</p>`:`
  ${b("Rejoindre une alerte","#/home")}
  <div class="pill-title">${s(n.visibility==="private"?"i-lock":"i-globe")}${u(n.title)}</div>
  <p style="font-size:18px">
    ${n.visibility==="private"?"Alerte priv\xE9e, sur invitation":"Alerte publique"} \xB7
    cr\xE9\xE9e par <b>${u(n.owner_pseudo||"Anonyme")}</b> \xB7 ${n.members_count} membre${n.members_count>1?"s":""}
  </p>
  ${U(n.reliability)}
  <div class="grow"></div>
  ${n.is_member?'<a class="btn" href="#/alerts">D\xE9j\xE0 membre : voir mes alertes</a>':`<button class="btn" data-action="join" data-id="${n.id}" data-code="${u(a||"")}">Je veux \xEAtre pr\xE9venu</button>`}`};p.alarm=async({id:e})=>(setTimeout(()=>he(Number(e))),p.alerts());p.quorum=async({id:e})=>(setTimeout(()=>ne(e)),p.alerts());p.settings=()=>`
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
    <option value="standard">Standard</option>
    <option value="recent">Dernier d\xE9clenchement</option>
    <option value="alpha">Ordre alphab\xE9tique</option>
    <option value="membres">Nombre de membres</option>
  </select>

  <label class="field" for="s-pseudo">Mon pseudo</label>
  <div class="row">
    <input id="s-pseudo" type="text" maxlength="24" placeholder="Anonyme" value="${u(m.pseudo||"")}">
    <button class="btn small" style="flex:0 0 auto;width:auto" data-action="save-pseudo">OK</button>
  </div>

  <div class="spacer"></div>
  <div class="note info">${s("i-info")}<span>Conseil : appuie seulement \xE0 la reprise du programme, pas pour une bande-annonce, la m\xE9t\xE9o ou le tirage du loto.</span></div>
  <p class="muted" style="font-weight:700">Une alerte est supprim\xE9e si personne ne s'y est connect\xE9 depuis plus de 24 heures.</p>
  <div class="row">
    <button class="btn small" data-action="share-app">Partager l'application</button>
    <a class="btn small outline" href="#/legal">Mentions l\xE9gales</a>
  </div>
  <button class="link-btn center" data-action="reset-prefs">Effacer mes pr\xE9f\xE9rences</button>`;p.legal=()=>`
  ${b("Mentions l\xE9gales","#/settings")}
  <div class="legal">
    <section><h3>\xC9diteur</h3><p>[NOM ET PR\xC9NOM], [SIRET], [E-MAIL DE CONTACT]</p></section>
    <section><h3>H\xE9bergeur</h3><p>[NOM ET ADRESSE DE L'H\xC9BERGEUR]</p></section>
    <section><h3>Donn\xE9es personnelles</h3><p>[\xC0 R\xC9DIGER : donn\xE9es collect\xE9es (jeton de notification, pseudo), finalit\xE9s, dur\xE9e, droits d'acc\xE8s et de suppression]</p></section>
    <section><h3>Propri\xE9t\xE9 intellectuelle</h3><p>Le nom SAYE est d\xE9pos\xE9. [V\xC9RIFIER L'ENREGISTREMENT \xC0 L'INPI]</p></section>
    <section><h3>Conditions g\xE9n\xE9rales (CGU)</h3><p>[\xC0 R\xC9DIGER : r\xE8gles d'usage, mod\xE9ration des alertes publiques]</p></section>
    <section><h3>S\xE9curit\xE9</h3><p>SAYE ne remplace ni FR-Alert ni le 112 et ne doit pas servir \xE0 des alertes de s\xE9curit\xE9.</p></section>
  </div>`;function O({trigger:e,alert:t,test:a=!1}){T={triggerId:e?.id,alertId:t?.id,test:a};let n=t?`${t.visibility==="private"?"Cercle priv\xE9":"Alerte publique"} \xB7 ${t.members_count} membre${t.members_count>1?"s":""}`:"";C.innerHTML=`
    <div class="full alarm ${d.flash?"flash":""}" role="alertdialog" aria-live="assertive">
      <div class="kicker">ALERTE !</div>
      ${s("i-bell","big")}
      <h2>${u(t?.title||"Test de ton alerte")}</h2>
      <div class="by">${a?"Voil\xE0 ce que tu verras":`d\xE9clench\xE9e par ${u(e?.pseudo||"un membre")}`}</div>
      <p style="font-weight:800">${u(n)}</p>
      ${e?.comment?`<p style="font-size:19px">\xAB ${u(e.comment)} \xBB</p>`:""}
      <button class="btn" data-action="stop-alarm">Arr\xEAter l'alerte</button>
      ${a?"":'<button class="link-btn" data-action="report">Fausse alerte ? Signaler</button>'}
    </div>`,X(d.sound,!0),ee()}function f(){Z(),navigator.vibrate&&navigator.vibrate(0),C.innerHTML="",T=null,clearInterval(f.timer)}function me(e,t){let a=5;C.innerHTML=`
    <div class="full">
      ${s("i-bell","mid")}
      <h1>Merci !</h1>
      <p class="lead">La communaut\xE9 SAYE te remercie pour ta participation.</p>
      <p class="sub">Alerte envoy\xE9e \xE0 ${e.members} membre${e.members>1?"s":""}. Les clics suivants sont ignor\xE9s pendant 60 s.</p>
      <button class="btn" data-action="close-overlay">Retour \xE0 mes alertes</button>
      <button class="btn outline small" data-action="cancel-trigger" data-id="${e.trigger_id}" id="undo">Clic par erreur ? Annuler (${a} s)</button>
    </div>`,f.timer=setInterval(()=>{a-=1;let n=document.getElementById("undo");if(!n)return clearInterval(f.timer);a<=0?(n.remove(),clearInterval(f.timer)):n.textContent=`Clic par erreur ? Annuler (${a} s)`},1e3)}async function ae(e,{count:t,quorum:a,window_s:n,firstPseudo:i,since:r}){let c=M[e.id]&&Date.now()-M[e.id]<n*1e3,g=(r?new Date(r).getTime():Date.now())+n*1e3,y=Math.max(0,t-1);C.innerHTML=`
    <div class="full">
      ${s("i-bell","mid")}
      <h1 style="font-size:32px">${c?"Signal envoy\xE9":"Des membres ont signal\xE9"}</h1>
      <p class="lead">${u(e.title)}</p>
      <p style="font-size:19px;font-weight:700">${c?"On attend la confirmation des autres membres.":`${u(i||"Un membre")}${y?` et ${y} autre${y>1?"s":""} membre${y>1?"s":""} ont appuy\xE9`:" a appuy\xE9"}. Tu le vois aussi ?`}</p>
      <div class="progress"><div style="width:${Math.min(100,t/a*100)}%"></div></div>
      <p class="sub">${t} confirmation${t>1?"s":""} sur ${a} n\xE9cessaire${a>1?"s":""}</p>
      <p class="muted" style="font-weight:700" id="q-left"></p>
      <div style="height:40px"></div>
      ${c?"":`<button class="btn" data-action="press" data-id="${e.id}">Je confirme</button>`}
      <button class="btn outline" data-action="close-overlay">${c?"Fermer":"Pas encore"}</button>
      <p class="muted" style="font-weight:700">\xC0 ${a} confirmations, l'alerte sonne pour tout le monde.</p>
    </div>`,clearInterval(f.timer);let w=()=>{let _=Math.ceil((g-Date.now())/1e3),F=document.getElementById("q-left");if(!F)return clearInterval(f.timer);if(_<=0){f();return}F.textContent=`Encore ${_} seconde${_>1?"s":""} pour confirmer`};w(),f.timer=setInterval(w,500)}async function fe(e){let t=v.find(i=>i.id===e),{data:a,error:n}=await o.rpc("press_alert",{p_alert:e});if(n)return l(k(n));if(a.status==="cooldown")return l("D\xE9j\xE0 d\xE9clench\xE9e il y a moins de 60 s.");if(a.status==="forbidden")return l("Seul le cr\xE9ateur peut d\xE9clencher cette alerte.");if(a.status==="triggered"){me(a,t),h();return}a.status==="pending"&&(M[e]=Date.now(),ae(t,{count:a.count,quorum:a.quorum,window_s:a.window_s,firstPseudo:m.pseudo}))}var Y={start(){d.onboarded=!0,I(),$("#/home")},"pick-visibility"(e){S={visibility:e.dataset.v},$("#/create-form")},press(e){fe(e.dataset.id)},"open-share"(e){S.justCreated=!1,$(`#/share/${e.dataset.id}`)},"open-join"(e){$(`#/join/${e.dataset.id}`)},async join(e){let{error:t}=await o.rpc("join_alert",{p_alert:e.dataset.id,p_code:e.dataset.code||null});if(t)return l(k(t));l("Tu seras pr\xE9venu !"),$("#/alerts"),B()},async"alert-menu"(e){let t=v.find(r=>r.id===e.dataset.id);if(!t)return;let a=t.is_owner?`Supprimer l'alerte \xAB ${t.title} \xBB pour tout le monde ?`:`Quitter l'alerte \xAB ${t.title} \xBB ?`;if(!confirm(a))return;let n=t.is_owner?o.from("alerts").delete().eq("id",t.id):o.from("members").delete().eq("alert_id",t.id).eq("user_id",m.id),{error:i}=await n;if(i)return l(k(i));l(t.is_owner?"Alerte supprim\xE9e.":"Tu as quitt\xE9 cette alerte."),h()},async copy(e){try{await navigator.clipboard.writeText(e.dataset.url),l("Lien copi\xE9 !")}catch{prompt("Copie ce lien :",e.dataset.url)}},async"copy-signal"(e,t){t.preventDefault();try{await navigator.clipboard.writeText(e.dataset.url)}catch{}l("Lien copi\xE9 : colle-le dans Signal.")},async"native-share"(e){if(navigator.share)try{await navigator.share({title:"SAYE",text:e.dataset.text,url:e.dataset.url})}catch{}else Y.copy(e)},async"share-app"(){let e=location.href.split("#")[0];if(navigator.share)try{await navigator.share({title:"SAYE",text:"SAYE : \xAB \xC7a y est \xBB, c'est maintenant !",url:e})}catch{}else try{await navigator.clipboard.writeText(e),l("Lien de l'application copi\xE9 !")}catch{prompt("Lien :",e)}},"stop-alarm"(){f()},"close-overlay"(){f(),h()},async"cancel-trigger"(e){let{data:t}=await o.rpc("cancel_trigger",{p_trigger:Number(e.dataset.id)});f(),l(t?"Alerte annul\xE9e.":"Trop tard pour annuler."),h()},async report(){T?.triggerId&&await o.rpc("report_trigger",{p_trigger:T.triggerId}),f(),l("Merci, signalement enregistr\xE9.")},"test-alarm"(){O({test:!0})},async"save-pseudo"(){let e=document.getElementById("s-pseudo").value.trim();if(!/^[A-Za-z0-9_.-]{2,24}$/.test(e))return l("Pseudo : 2 \xE0 24 lettres, chiffres, point ou tiret.");try{await te(e),l("Pseudo enregistr\xE9.")}catch(t){l(k(t))}},"reset-prefs"(){confirm("Effacer tes pr\xE9f\xE9rences sur cet appareil ?")&&(d={...D,onboarded:!0},I(),h(),l("Pr\xE9f\xE9rences effac\xE9es."))},"ask-notif"(){B(!0)}};document.addEventListener("click",e=>{let t=e.target.closest("[data-back]");if(t){e.preventDefault();let n=t.dataset.back;n==="history"&&history.length>1?history.back():$(n==="history"?"#/home":n);return}let a=e.target.closest("[data-action]");a&&Y[a.dataset.action]&&(a.tagName==="BUTTON"&&e.preventDefault(),Y[a.dataset.action](a,e))});document.addEventListener("change",e=>{let t=e.target;t.dataset.pref&&(d[t.dataset.pref]=t.type==="checkbox"?t.checked:t.value,I(),t.dataset.pref==="sound"&&X(t.value)),t.id==="find-cat"&&(E.cat=t.value,h())});var H;document.addEventListener("input",e=>{e.target.id==="find-q"&&(clearTimeout(H),H=setTimeout(()=>{E.q=e.target.value.trim(),h(!0)},350))});document.addEventListener("submit",async e=>{if(e.target.id!=="create-form")return;e.preventDefault();let t=new FormData(e.target),a=e.target.querySelector("button[type=submit]");a.disabled=!0;try{let n=String(t.get("pseudo")||"").trim();n&&n!==m.pseudo&&await te(n);let{data:i,error:r}=await o.from("alerts").insert({title:String(t.get("title")).trim(),category:t.get("category"),visibility:S.visibility,trigger_mode:t.get("trigger_mode"),invite_mode:t.get("invite_mode"),owner_pseudo:m.pseudo}).select("id").single();if(r)throw r;S={justCreated:!0},$(`#/share/${i.id}`),B()}catch(n){l(k(n)),a.disabled=!1}});function be(){o.channel("saye").on("postgres_changes",{event:"INSERT",schema:"public",table:"triggers"},async({new:e})=>{if(e.cancelled||e.triggered_by===m.id)return;await q();let t=v.find(a=>a.id===e.alert_id);t&&(document.visibilityState==="hidden"&&ve(t,e),O({trigger:e,alert:t}),x.name==="alerts"&&h(!0))}).on("postgres_changes",{event:"UPDATE",schema:"public",table:"triggers"},({new:e})=>{e.cancelled&&T?.triggerId===e.id&&(f(),l("L'alerte a \xE9t\xE9 annul\xE9e par son auteur."))}).on("postgres_changes",{event:"INSERT",schema:"public",table:"presses"},({new:e})=>{e.user_id===m.id||T||ne(e.alert_id).then(ee)}).subscribe()}async function ne(e){await q();let t=v.find(r=>r.id===e);if(!t)return;let{data:a}=await o.from("presses").select("pseudo, created_at").eq("alert_id",e).order("created_at"),n=(a||[]).filter(r=>Date.now()-new Date(r.created_at).getTime()<3e4);if(!n.length)return l("Ce signalement est termin\xE9.");let i=Math.min(t.quorum,Math.max(t.members_count,1));ae(t,{count:n.length,quorum:i,window_s:30,firstPseudo:n[0].pseudo,since:n[0].created_at})}async function he(e){let{data:t}=await o.from("triggers").select("*").eq("id",e).maybeSingle();if(!t)return;if(t.cancelled)return l("Cette alerte a \xE9t\xE9 annul\xE9e par son auteur.");if(Date.now()-new Date(t.created_at).getTime()>10*60*1e3)return;await q();let a=v.find(n=>n.id===t.alert_id);a&&O({trigger:t,alert:a})}function K(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}async function ie(){if(!(!("serviceWorker"in navigator)||!("PushManager"in window))&&!(!("Notification"in window)||Notification.permission!=="granted"))try{let e=await navigator.serviceWorker.ready,t=await e.pushManager.getSubscription();t||(t=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:K(P)}));let a=t.toJSON(),{error:n}=await o.from("push_subscriptions").upsert({endpoint:a.endpoint,user_id:m.id,p256dh:a.keys.p256dh,auth:a.keys.auth});if(n){await t.unsubscribe();let r=(await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:K(P)})).toJSON();await o.from("push_subscriptions").upsert({endpoint:r.endpoint,user_id:m.id,p256dh:r.keys.p256dh,auth:r.keys.auth})}}catch(e){console.warn("push",e)}}async function ve(e,t){if(!("Notification"in window)||Notification.permission!=="granted")return;let a=await navigator.serviceWorker?.getRegistration(),n={body:`D\xE9clench\xE9e par ${t.pseudo||"un membre"}`,icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:`saye-${t.id}`,renotify:!0,vibrate:[400,150,400],data:{url:"#/alerts"}};a?a.showNotification(`ALERTE ! ${e.title}`,n):new Notification(`ALERTE ! ${e.title}`,n)}async function B(e=!1){if(!(!("Notification"in window)||Notification.permission!=="default")&&!(!e&&sessionStorage.getItem("saye.askedNotif"))){try{sessionStorage.setItem("saye.askedNotif","1")}catch{}await Notification.requestPermission(),await ie(),x.name==="alerts"&&h(!0)}}var ge={alarm:"alerts",quorum:"alerts",alerts:"alerts",find:"find",create:"create","create-form":"create",settings:"settings",legal:"settings",home:null,share:"alerts",join:"find"},x={name:"splash"},L=0;function ye(){let[e,t]=(location.hash.replace(/^#\/?/,"")||"splash").split("?"),[a,n]=e.split("/");return{name:p[a]?a:"home",id:n,query:new URLSearchParams(t||"")}}async function h(e=!1){let t=++L;x=ye();let a=x,n=!["splash","intro"].includes(a.name);J.hidden=!n,document.body.classList.toggle("no-tabbar",!n),J.querySelectorAll("a").forEach(i=>i.classList.toggle("on",i.dataset.tab===ge[a.name]));try{let i=await p[a.name](a);if(t!==L)return;let r=document.activeElement?.id,c=document.activeElement?.selectionStart;if(j.innerHTML=i,r==="find-q"){let g=document.getElementById("find-q");g?.focus(),g&&c!=null&&g.setSelectionRange(c,c)}a.name==="settings"&&(document.getElementById("s-sound").value=d.sound,document.getElementById("s-sort").value=d.sort),e||window.scrollTo(0,0)}catch(i){console.error(i),t===L&&(j.innerHTML='<p class="empty">Impossible de charger cet \xE9cran. V\xE9rifie ta connexion.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>')}}window.addEventListener("hashchange",()=>h());async function $e(){"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").catch(()=>{});let e=location.hash.startsWith("#/join/");!location.hash||location.hash==="#/"?location.hash="#/splash":e&&!d.onboarded&&(d.onboarded=!0,I());try{await le(),o.rpc("touch_my_alerts"),await q().catch(()=>{}),be(),ie()}catch(t){console.error(t),j.innerHTML='<p class="empty">Connexion impossible au service SAYE. R\xE9essaie dans un instant.</p><button class="btn" onclick="location.reload()">R\xE9essayer</button>';return}h()}$e();
