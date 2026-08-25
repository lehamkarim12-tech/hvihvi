/* =========================================================================
   ONKORA — script.js
   Vanilla JS, aucune dépendance.
   ========================================================================= */
'use strict';

/* -------------------------------------------------------------------------
   ENDPOINT DU FORMULAIRE — À REMPLACER
   Collez ici l'URL de votre endpoint statique (Formspree, Basin, Netlify
   Forms, Getform...). Exemple : 'https://formspree.io/f/xxxxxxxx'
   Tant que la valeur reste vide, l'envoi est simulé localement : la
   validation, les erreurs et l'état de succès fonctionnent normalement,
   mais aucune requête réseau n'est émise.
   ------------------------------------------------------------------------- */
const FORM_ENDPOINT = '';

/* ---------- 1. Contenus (source de vérité unique) ------------------------ */
const translations = {
fr:{
'meta.title':"Onkora — Orchestration omnicanale en oncologie",
'meta.desc':"Onkora orchestre les campagnes HCP en oncologie sur tous les canaux — email, rep-triggered, congrès, web et MSL — depuis un seul plan de séquence, avec piste d'audit complète.",
'skip':"Aller au contenu principal",
'brand.aria':"Onkora — retour en haut de page",
'nav.aria':"Navigation principale",
'nav.problem':"Enjeux",'nav.platform':"Plateforme",'nav.how':"Méthode",'nav.proof':"Résultats",'nav.faq':"FAQ",
'nav.demo':"Demander une démo",
'lang.aria':"Choix de la langue",
'menu.open':"Ouvrir le menu",'menu.close':"Fermer le menu",

'hero.eyebrow':"Orchestration omnicanale — Oncologie",
'hero.h1a':"La bonne information au bon oncologue,",
'hero.h1b':"au bon moment.",
'hero.sub':"Onkora réunit email, rep-triggered, congrès, web et MSL dans un seul plan de séquence piloté — avec la piste d'audit qu'exige un environnement réglementé.",
'hero.cta1':"Demander une démo",'hero.cta2':"Explorer la plateforme",
'hero.meta1':"Hébergement UE",'hero.meta2':"MLR intégré",'hero.meta3':"Piste d'audit complète",

'dia.aria':"Schéma d'orchestration : cinq canaux convergent vers un point de contrôle de validation, puis vers un point de contact oncologue unique.",
'dia.email':"Email",'dia.rep':"Visite terrain",'dia.congress':"Congrès",'dia.web':"Web",'dia.msl':"MSL",
'dia.t1':"J1",'dia.t2':"J8",'dia.t3':"J15",'dia.t4':"J21",
'dia.gate':"Validation",
'dia.caption':"Un cycle de séquence, cinq canaux, un seul point de validation.",

'prob.kicker':"Enjeux",
'prob.title':"Trois frictions coûtent leur portée aux campagnes oncologie.",
'prob.lead':"Les équipes marque et médicales travaillent sur les mêmes oncologues, sans partager ni le plan, ni le calendrier, ni la mesure.",
'prob.1t':"Des canaux silotés",
'prob.1d':"L'email part du marketing, la visite du terrain, le congrès des affaires médicales. Personne ne voit la séquence complète reçue par l'oncologue — ni la répétition qu'elle produit.",
'prob.2t':"Un ciblage approximatif",
'prob.2d':"Les segments reposent sur le potentiel de prescription, rarement sur le comportement réel : sujets consultés, sessions suivies, questions posées au MSL.",
'prob.3t':"Une validation lente",
'prob.3d':"Chaque adaptation locale repasse en revue MLR complète. Le délai de validation dicte le calendrier de campagne, au lieu de l'inverse.",

'feat.kicker':"Plateforme",
'feat.title':"Un plan de séquence unique, du ciblage à la piste d'audit.",
'feat.lead':"Six modules, une seule source de vérité sur ce que chaque oncologue a reçu, sur quel canal, et avec quelle version validée du contenu.",
'feat.1t':"Orchestration multicanale",
'feat.1d':"Un plan unique qui séquence email, rep-triggered, congrès, web et MSL. Les règles de pression et d'exclusion s'appliquent à tous les canaux, pas à chacun séparément.",
'feat.2t':"Segmentation HCP",
'feat.2d':"Des cohortes construites sur le comportement observé — spécialité, ligne de traitement suivie, engagement réel — et non sur le seul décile de prescription.",
'feat.3t':"Next-best-action",
'feat.3d':"Pour chaque oncologue, le canal et le contenu suivants les plus pertinents, restitués au délégué et au MSL dans leur outil, avec la raison de la recommandation.",
'feat.4t':"Bibliothèque validée (MLR)",
'feat.4d':"Modules de contenu pré-approuvés, versionnés, avec date d'expiration et périmètre d'usage. Un asset périmé ne peut pas entrer dans une séquence active.",
'feat.5t':"Analytics de campagne",
'feat.5d':"La lecture se fait par oncologue et par cohorte sur la durée du cycle, pas en taux d'ouverture isolés. Les canaux se comparent sur la même base.",
'feat.6t':"Conformité & traçabilité",
'feat.6d':"Chaque envoi, chaque approbation et chaque modification de règle sont horodatés et attribués. La piste d'audit s'exporte telle quelle pour inspection.",

'how.kicker':"Méthode",'how.title':"Trois étapes, dans cet ordre.",
'how.1t':"Connecter les sources",
'how.1d':"Référentiel HCP, CRM terrain, plateforme email, inscriptions congrès et comptes rendus MSL sont réconciliés sur un identifiant unique par praticien.",
'how.2t':"Séquencer le cycle",
'how.2d':"Vous définissez les cohortes, les règles de pression et les contenus validés autorisés. Onkora produit le plan par canal et signale les conflits avant lancement.",
'how.3t':"Mesurer et ajuster",
'how.3d':"Le cycle suivant part des résultats du précédent : couverture atteinte, canaux saturés, cohortes sans contact. Les arbitrages restent documentés.",

'proof.kicker':"Résultats",'proof.title':"Ce que change un plan de séquence unifié.",
'proof.m1':"Engagement HCP qualifié sur un cycle de 12 semaines",
'proof.m2':"Accélération du délai de validation MLR",
'proof.m3':"Couverture des cibles prioritaires, tous canaux confondus",
'proof.m4':"Gagnés sur la préparation de chaque cycle de campagne",
'proof.quote':"Nous avons cessé d'arbitrer entre le terrain et le digital. Le plan de séquence est devenu la conversation commune entre la marque et les affaires médicales — et la piste d'audit a supprimé la moitié de nos allers-retours de validation.",
'proof.author':"Hélène Vasseur",
'proof.role':"Global Omnichannel Lead, franchise Oncologie",
'proof.disclaimer':"Scénario illustratif. Onkora est un projet de démonstration : la société, les chiffres et le témoignage sont fictifs.",

'comp.title':"Conçu pour un environnement réglementé",
'comp.1':"Conformité RGPD",'comp.2':"Hébergement des données dans l'UE",
'comp.3':"Pistes d'audit exportables",'comp.4':"Revue MLR intégrée au flux",

'faq.kicker':"FAQ",'faq.title':"Questions fréquentes",
'faq.q1':"Onkora remplace-t-il notre CRM ou notre plateforme d'emailing ?",
'faq.a1':"Non. Onkora se place au-dessus des outils existants : il lit leurs données, calcule la séquence et renvoie les actions à exécuter dans chaque système. Le CRM reste le référentiel terrain, la plateforme email reste l'outil d'envoi.",
'faq.q2':"Combien de temps prend le déploiement initial ?",
'faq.a2':"Comptez de six à dix semaines pour une première franchise : réconciliation du référentiel HCP, connexion des sources, puis un cycle pilote sur une cohorte restreinte avant généralisation.",
'faq.q3':"Comment la revue MLR s'articule-t-elle avec l'outil ?",
'faq.a3':"Les contenus sont validés une fois sous forme de modules réutilisables, avec périmètre et date d'expiration. Une séquence ne peut mobiliser que des modules en cours de validité : la vérification est faite au moment de la composition, pas après.",
'faq.q4':"Où sont hébergées les données HCP ?",
'faq.a4':"Dans l'Union européenne, avec chiffrement au repos et en transit, cloisonnement par pays et journalisation des accès. Les durées de conservation sont paramétrables par marché pour suivre vos règles locales.",
'faq.q5':"Les équipes médicales et marketing partagent-elles le même environnement ?",
'faq.a5':"Elles partagent la vue de séquence, mais pas les mêmes droits. Le cloisonnement entre activités promotionnelles et médicales est appliqué par rôle, et toute interaction MSL reste séparée des contenus promotionnels.",

'cta.kicker':"Démo",'cta.title':"Voir Onkora sur votre franchise.",
'cta.lead':"Trente minutes, sur un cas réel de votre portefeuille : nous partons de vos canaux actuels et reconstruisons le plan de séquence devant vous.",
'cta.p1':"Aucune installation préalable",'cta.p2':"Réponse sous un jour ouvré",'cta.p3':"Sous NDA si nécessaire",

'form.name':"Nom et prénom",'form.name.ph':"Camille Rousseau",
'form.email':"E-mail professionnel",'form.email.ph':"camille.rousseau@labo.com",
'form.company':"Société",'form.company.ph':"Nom du laboratoire",
'form.role':"Fonction",'form.role.ph':"Global Brand Manager",
'form.message':"Contexte (facultatif)",'form.message.ph':"Franchise concernée, marchés, canaux déjà en place.",
'form.submit':"Demander une démo",'form.sending':"Envoi en cours…",
'form.note':"Vos coordonnées servent uniquement à organiser la démonstration.",
'form.ok.t':"Demande enregistrée.",
'form.ok.d':"Merci. Nous revenons vers vous sous un jour ouvré pour caler un créneau.",
'form.ko.t':"L'envoi a échoué.",
'form.ko.d':"Vérifiez votre connexion et réessayez dans un instant.",
'err.req':"Ce champ est requis.",
'err.email':"Saisissez une adresse e-mail valide.",

'footer.tag':"Orchestration de campagnes omnicanales en oncologie.",
'footer.navaria':"Navigation de pied de page",'footer.resaria':"Ressources",
'footer.h1':"Plateforme",'footer.h2':"Ressources",
'footer.compliance':"Conformité",'footer.legal':"Mentions légales",
'footer.legal1':"Onkora est un projet de démonstration. La société, la plateforme, les métriques et le témoignage présentés sur cette page sont fictifs et ne décrivent aucun produit commercialisé.",
'footer.legal2':"Aucune donnée personnelle n'est collectée ni transmise depuis cette page tant qu'aucun point de collecte n'y est raccordé.",
'footer.copy':"© 2026 Onkora — projet de démonstration, société fictive.",
'footer.backtop':"Haut de page"
},
en:{
'meta.title':"Onkora — Omnichannel orchestration for oncology",
'meta.desc':"Onkora orchestrates oncology HCP campaigns across every channel — email, rep-triggered, congress, web and MSL — from a single sequence plan, with a complete audit trail.",
'skip':"Skip to main content",
'brand.aria':"Onkora — back to top",
'nav.aria':"Main navigation",
'nav.problem':"Challenges",'nav.platform':"Platform",'nav.how':"How it works",'nav.proof':"Impact",'nav.faq':"FAQ",
'nav.demo':"Request a demo",
'lang.aria':"Language selection",
'menu.open':"Open menu",'menu.close':"Close menu",

'hero.eyebrow':"Omnichannel orchestration — Oncology",
'hero.h1a':"The right evidence to the right oncologist,",
'hero.h1b':"at the right moment.",
'hero.sub':"Onkora brings email, rep-triggered, congress, web and MSL touchpoints into one governed sequence plan — with the audit trail a regulated environment demands.",
'hero.cta1':"Request a demo",'hero.cta2':"Explore the platform",
'hero.meta1':"EU-hosted",'hero.meta2':"Embedded MLR",'hero.meta3':"Full audit trail",

'dia.aria':"Orchestration diagram: five channels converge on a single approval checkpoint, then on one oncologist touchpoint.",
'dia.email':"Email",'dia.rep':"Rep-triggered",'dia.congress':"Congress",'dia.web':"Web",'dia.msl':"MSL",
'dia.t1':"D1",'dia.t2':"D8",'dia.t3':"D15",'dia.t4':"D21",
'dia.gate':"Approval",
'dia.caption':"One sequence cycle, five channels, a single approval checkpoint.",

'prob.kicker':"Challenges",
'prob.title':"Three frictions quietly cap the reach of oncology campaigns.",
'prob.lead':"Brand and medical teams engage the same oncologists without sharing the plan, the calendar or the measurement.",
'prob.1t':"Siloed channels",
'prob.1d':"Email sits with brand, the visit with field, congress with medical affairs. Nobody sees the full sequence the oncologist actually receives — or the repetition it creates.",
'prob.2t':"Imprecise HCP targeting",
'prob.2d':"Segments still lean on prescribing decile rather than observed behaviour: topics consulted, sessions attended, questions raised with the MSL.",
'prob.3t':"Slow MLR review",
'prob.3d':"Every local adaptation goes back through full medical, legal and regulatory review. Approval lead time sets the campaign calendar instead of the other way round.",

'feat.kicker':"Platform",
'feat.title':"One sequence plan, from targeting to audit trail.",
'feat.lead':"Six modules, a single source of truth on what each oncologist received, on which channel, and against which approved version of the content.",
'feat.1t':"Multichannel orchestration",
'feat.1d':"A single plan sequencing email, rep-triggered, congress, web and MSL. Frequency capping and suppression rules apply across all channels, not per channel.",
'feat.2t':"HCP segmentation",
'feat.2d':"Cohorts built on observed behaviour — subspecialty, treatment line followed, genuine engagement — rather than prescribing decile alone.",
'feat.3t':"Next-best-action",
'feat.3d':"For each oncologist, the most relevant next channel and content, surfaced to the rep and the MSL inside their own tools, together with the reason for the recommendation.",
'feat.4t':"MLR-approved content library",
'feat.4d':"Pre-approved, versioned content modules carrying an expiry date and a defined scope of use. An expired asset cannot enter a live sequence.",
'feat.5t':"Campaign analytics",
'feat.5d':"Read per oncologist and per cohort across the full cycle, not as isolated open rates. Channels are compared on a common basis.",
'feat.6t':"Compliance & traceability",
'feat.6d':"Every send, approval and rule change is time-stamped and attributed. The audit trail exports as-is for inspection.",

'how.kicker':"How it works",'how.title':"Three steps, in this order.",
'how.1t':"Connect the sources",
'how.1d':"HCP master data, field CRM, email platform, congress registrations and MSL interaction records are reconciled onto one identifier per practitioner.",
'how.2t':"Sequence the cycle",
'how.2d':"You set the cohorts, the frequency rules and the approved content in scope. Onkora produces the per-channel plan and flags conflicts before launch.",
'how.3t':"Measure and adjust",
'how.3d':"The next cycle starts from the last one: coverage achieved, saturated channels, cohorts left untouched. Every trade-off stays documented.",

'proof.kicker':"Impact",'proof.title':"What a unified sequence plan changes.",
'proof.m1':"Qualified HCP engagement across a 12-week cycle",
'proof.m2':"Faster MLR approval turnaround",
'proof.m3':"Coverage of priority targets, all channels combined",
'proof.m4':"Saved on preparing each campaign cycle",
'proof.quote':"We stopped arbitrating between field and digital. The sequence plan became the shared conversation between brand and medical affairs — and the audit trail removed half of our approval round-trips.",
'proof.author':"Hélène Vasseur",
'proof.role':"Global Omnichannel Lead, Oncology franchise",
'proof.disclaimer':"Illustrative scenario. Onkora is a demonstration project: the company, the figures and the testimonial are fictional.",

'comp.title':"Built for a regulated environment",
'comp.1':"GDPR compliant",'comp.2':"Data hosted in the EU",
'comp.3':"Exportable audit trails",'comp.4':"MLR review inside the workflow",

'faq.kicker':"FAQ",'faq.title':"Frequently asked questions",
'faq.q1':"Does Onkora replace our CRM or our email platform?",
'faq.a1':"No. Onkora sits above your existing stack: it reads their data, computes the sequence and pushes the resulting actions back into each system. The CRM stays the field system of record, the email platform stays the sending tool.",
'faq.q2':"How long does initial deployment take?",
'faq.a2':"Expect six to ten weeks for a first franchise: reconciling HCP master data, connecting the sources, then a pilot cycle on a limited cohort before wider rollout.",
'faq.q3':"How does MLR review fit into the tool?",
'faq.a3':"Content is approved once as reusable modules, each with a defined scope and expiry date. A sequence can only draw on modules that are still in force — the check happens at composition time, not afterwards.",
'faq.q4':"Where is HCP data hosted?",
'faq.a4':"In the European Union, encrypted at rest and in transit, partitioned by country with full access logging. Retention periods are configurable per market to match your local rules.",
'faq.q5':"Do medical and brand teams share the same environment?",
'faq.a5':"They share the sequence view, not the same permissions. Separation between promotional and medical activity is enforced by role, and MSL interactions remain segregated from promotional content.",

'cta.kicker':"Demo",'cta.title':"See Onkora on your own franchise.",
'cta.lead':"Thirty minutes on a live case from your portfolio: we start from your current channels and rebuild the sequence plan in front of you.",
'cta.p1':"No setup required",'cta.p2':"Reply within one business day",'cta.p3':"Under NDA where needed",

'form.name':"Full name",'form.name.ph':"Camille Rousseau",
'form.email':"Work email",'form.email.ph':"camille@company.com",
'form.company':"Company",'form.company.ph':"Company name",
'form.role':"Job title",'form.role.ph':"Global Brand Manager",
'form.message':"Context (optional)",'form.message.ph':"Franchise, markets, channels already in place.",
'form.submit':"Request a demo",'form.sending':"Sending…",
'form.note':"Your details are used only to arrange the demonstration.",
'form.ok.t':"Request received.",
'form.ok.d':"Thank you. We will come back to you within one business day to book a slot.",
'form.ko.t':"Sending failed.",
'form.ko.d':"Check your connection and try again in a moment.",
'err.req':"This field is required.",
'err.email':"Enter a valid email address.",

'footer.tag':"Omnichannel campaign orchestration for oncology.",
'footer.navaria':"Footer navigation",'footer.resaria':"Resources",
'footer.h1':"Platform",'footer.h2':"Resources",
'footer.compliance':"Compliance",'footer.legal':"Legal notice",
'footer.legal1':"Onkora is a demonstration project. The company, the platform, the metrics and the testimonial shown on this page are fictional and describe no commercially available product.",
'footer.legal2':"No personal data is collected or transmitted from this page while no collection endpoint is connected to it.",
'footer.copy':"© 2026 Onkora — demonstration project, fictional company.",
'footer.backtop':"Back to top"
}};

/* ---------- 2. Utilitaires ----------------------------------------------- */
const $  = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
  get(k){ try { return window.localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v){ try { window.localStorage.setItem(k, v); } catch (e) { /* stockage indisponible : sans effet */ } }
};

/* ---------- 3. Internationalisation -------------------------------------- */
let lang = 'fr';

function t(key){
  const dict = translations[lang] || translations.fr;
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
}

function applyLang(next, animate){
  lang = translations[next] ? next : 'fr';
  document.documentElement.lang = lang;

  const paint = () => {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-content]').forEach(el => { el.setAttribute('content', t(el.getAttribute('data-i18n-content'))); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
    $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });

    document.title = t('meta.title');
    counters.forEach(c => renderCount(c, c.done ? c.target : 0));
    syncBurgerLabel();
    revalidateVisibleErrors();

    $$('.lang-btn').forEach(b => {
      const on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
  };

  // Fondu court sur les textes : aucune bascule de mise en page, aucun rechargement.
  if (animate && !reduceMotion()){
    document.body.classList.add('lang-fade');
    window.setTimeout(() => {
      paint();
      window.requestAnimationFrame(() => document.body.classList.remove('lang-fade'));
    }, 160);
  } else {
    paint();
  }
  store.set('onkora-lang', lang);
}

function initialLang(){
  const saved = store.get('onkora-lang');
  if (saved && translations[saved]) return saved;
  const nav = (navigator.language || 'fr').toLowerCase();
  return nav.indexOf('en') === 0 ? 'en' : 'fr';
}

$$('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = btn.getAttribute('data-lang');
    if (next !== lang) applyLang(next, true);
  });
});

/* ---------- 4. Header : compactage au scroll ----------------------------- */
const header = $('[data-header]');
let ticking = false;

function onScroll(){
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    header.classList.toggle('is-compact', window.scrollY > 12);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- 5. Menu mobile : ouverture, piège à focus, Échap ------------- */
const burger = $('#burger');
const panel  = $('#nav-panel');
const scrim  = $('#nav-scrim');
const FOCUSABLE = 'a[href],button:not([disabled]),input,textarea,[tabindex]:not([tabindex="-1"])';
let navOpen = false;

function syncBurgerLabel(){
  burger.setAttribute('aria-label', t(navOpen ? 'menu.close' : 'menu.open'));
  burger.setAttribute('data-i18n-aria', navOpen ? 'menu.close' : 'menu.open');
}

function setNav(open){
  navOpen = open;
  burger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
  syncBurgerLabel();

  if (open){
    // Monter le panneau d'abord, puis déclencher la translation à la frame
    // suivante pour que la transition ait bien un état de départ.
    panel.classList.add('is-mounted');
    scrim.hidden = false;
    window.requestAnimationFrame(() => {
      scrim.classList.add('is-on');
      panel.classList.add('is-open');
    });
    const first = $(FOCUSABLE, panel);
    if (first) first.focus();
  } else {
    panel.classList.remove('is-open');
    scrim.classList.remove('is-on');
    window.setTimeout(() => {
      if (navOpen) return;
      scrim.hidden = true;
      panel.classList.remove('is-mounted');   // démonté : plus de débordement
    }, 320);
  }
}

burger.addEventListener('click', () => setNav(!navOpen));
scrim.addEventListener('click', () => { setNav(false); burger.focus(); });

document.addEventListener('keydown', e => {
  if (!navOpen) return;

  if (e.key === 'Escape'){
    setNav(false);
    burger.focus();
    return;
  }
  if (e.key !== 'Tab') return;

  // Piège à focus : le clavier reste dans le panneau tant qu'il est ouvert.
  const items = $$(FOCUSABLE, panel).filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last  = items[items.length - 1];

  if (e.shiftKey && document.activeElement === first){
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last){
    e.preventDefault(); first.focus();
  }
});

// Le panneau mobile n'existe qu'en dessous du point de rupture : on referme
// proprement si la fenêtre repasse en desktop pendant qu'il est ouvert.
window.addEventListener('resize', () => {
  if (window.innerWidth > 820){
    if (navOpen) setNav(false);
    panel.classList.remove('is-mounted', 'is-open');
  }
});

/* ---------- 6. Défilement fluide vers les ancres ------------------------- */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    if (navOpen) setNav(false);

    const behavior = reduceMotion() ? 'auto' : 'smooth';
    if (id === 'top'){
      window.scrollTo({ top: 0, behavior: behavior });
    } else {
      // Le décalage du header sticky est porté par `scroll-margin-top` en CSS.
      target.scrollIntoView({ behavior: behavior, block: 'start' });
    }

    // L'ancre doit rester un vrai point d'entrée clavier.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

/* ---------- 7. Reveals au scroll ----------------------------------------- */
const revealables = $$('.reveal');

if (reduceMotion() || !('IntersectionObserver' in window)){
  revealables.forEach(el => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);           // déclenchement unique
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  revealables.forEach(el => io.observe(el));
}

/* ---------- 8. Compteurs animés ------------------------------------------ */
const counters = $$('.counter').map(el => ({
  el: el,
  target: parseFloat(el.getAttribute('data-count')),
  decimals: parseInt(el.getAttribute('data-decimals') || '0', 10),
  prefix: el.getAttribute('data-prefix') || '',
  done: false
}));

function renderCount(c, value){
  const suffix = (lang === 'en' && c.el.getAttribute('data-suffix-en'))
    ? c.el.getAttribute('data-suffix-en')
    : (c.el.getAttribute('data-suffix') || '');
  let n = value.toFixed(c.decimals);
  if (lang === 'fr') n = n.replace('.', ',');   // séparateur décimal localisé
  c.el.textContent = c.prefix + n + suffix;
}

function runCount(c){
  if (c.done) return;
  c.done = true;

  if (reduceMotion()){ renderCount(c, c.target); return; }

  const DURATION = 1500;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - p, 3);      // easing out cubic
    renderCount(c, c.target * eased);
    if (p < 1) window.requestAnimationFrame(step);
    else renderCount(c, c.target);
  };
  window.requestAnimationFrame(step);
}

counters.forEach(c => renderCount(c, 0));

if (reduceMotion() || !('IntersectionObserver' in window)){
  counters.forEach(runCount);
} else {
  const co = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const c = counters.filter(x => x.el === entry.target)[0];
      if (c) runCount(c);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => co.observe(c.el));
}

/* ---------- 9. Accordéon FAQ --------------------------------------------- */
$$('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    item.classList.toggle('is-open', !open);
  });
});

/* ---------- 10. Formulaire de demande de démo ---------------------------- */
const form   = $('#demo-form');
const status = $('#form-status');
const submit = $('#submit-btn');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function fieldOf(input){ return input.closest('.field'); }

function setError(input, msgKey){
  const wrap = fieldOf(input);
  const slot = $('.field-error', wrap);
  wrap.classList.add('has-error');
  input.setAttribute('aria-invalid', 'true');
  slot.setAttribute('data-errkey', msgKey);
  slot.textContent = t(msgKey);
}

function clearError(input){
  const wrap = fieldOf(input);
  const slot = $('.field-error', wrap);
  wrap.classList.remove('has-error');
  input.removeAttribute('aria-invalid');
  slot.removeAttribute('data-errkey');
  slot.textContent = '';
}

// Au changement de langue, les messages déjà affichés suivent la langue.
function revalidateVisibleErrors(){
  $$('.field-error[data-errkey]').forEach(slot => {
    slot.textContent = t(slot.getAttribute('data-errkey'));
  });
  if (status.getAttribute('data-statekey')){
    paintStatus(status.getAttribute('data-statekey'), status.classList.contains('is-ok'));
  }
}

function paintStatus(key, ok){
  status.setAttribute('data-statekey', key);
  status.className = 'form-status ' + (ok ? 'is-ok' : 'is-ko');
  status.innerHTML = '';
  const title = document.createElement('strong');
  title.textContent = t(key + '.t');
  const body = document.createElement('span');
  body.textContent = t(key + '.d');
  status.appendChild(title);
  status.appendChild(body);
}

function validate(){
  let firstBad = null;

  $$('input[required], textarea[required]', form).forEach(input => {
    const value = input.value.trim();
    let bad = null;

    if (!value) bad = 'err.req';
    else if (input.type === 'email' && !EMAIL_RE.test(value)) bad = 'err.email';

    if (bad){
      setError(input, bad);
      if (!firstBad) firstBad = input;
    } else {
      clearError(input);
    }
  });

  return firstBad;
}

// Retour immédiat une fois le champ corrigé.
$$('input, textarea', form).forEach(input => {
  input.addEventListener('input', () => {
    if (fieldOf(input).classList.contains('has-error')) {
      const value = input.value.trim();
      if (value && (input.type !== 'email' || EMAIL_RE.test(value))) clearError(input);
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstBad = validate();
  if (firstBad){
    status.className = 'form-status';
    status.removeAttribute('data-statekey');
    firstBad.focus();
    return;
  }

  submit.disabled = true;
  submit.textContent = t('form.sending');

  const done = ok => {
    submit.disabled = false;
    submit.textContent = t('form.submit');
    paintStatus(ok ? 'form.ok' : 'form.ko', ok);
    if (ok) form.reset();
  };

  // Sans endpoint configuré, le parcours complet est simulé localement.
  if (!FORM_ENDPOINT){
    window.setTimeout(() => done(true), 700);
    return;
  }

  const payload = {};
  new FormData(form).forEach((v, k) => { payload[k] = v; });

  fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => done(res.ok))
    .catch(() => done(false));
});

/* ---------- 11. Démarrage ------------------------------------------------ */
applyLang(initialLang(), false);
