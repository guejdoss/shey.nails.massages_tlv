(function () {
  var T = {
    he: {
      "nav.massages": "עיסויים", "nav.nails": "ציפורניים", "nav.prices": "מחירון",
      "cta.book": "לקביעת תור", "cta.book_long": "לקביעת תור", "cta.prices": "למחירון",
      "hero.eyebrow": "ציפורניים · עיסויים · תל אביב",
      "hero.title": "עיסוי לימפטי וציפורניים, ברחוב קינג ג'ורג'",
      "hero.script": "מגיע לך לפנק את עצמך",
      "hero.lead": "סטודיו אינטימי וחם שבו אני מקדישה לך את הזמן: עיסוי ניקוז לימפטי, טיפול פנים Miracle Face, מניקור ופדיקור ג'ל בעדינות.",
      "m.eyebrow": "עיסוי לימפטי",
      "m.title": "קלילה, פחות נפוחה, רגועה",
      "m.p1": "ניקוז לימפטי הוא עיסוי עדין, איטי וקצבי. הוא מעודד את זרימת הלימפה, הנוזל שעוזר לגוף להיפטר מעודפי נוזלים ורעלים. זה לא עיסוי בלחץ חזק: התנועות עוטפות ועוקבות אחרי כיוון הזרימה הטבעי.",
      "m.p2": "אצלי הטיפול נעשה עם שמן תינוקות, בחדר שקט: 45 דקות לגוף, 30 לפנים.",
      "m.b1t": "רגליים קלות", "m.b1": "מושלם אחרי יום ארוך על הרגליים או בחום של תל אביב.",
      "m.b2t": "פחות אצירת נוזלים", "m.b2": "הגוף נראה פחות נפוח והבטן שטוחה יותר.",
      "m.b3t": "עור חלק יותר", "m.b3": "העור מתמצק והגזרה מתעדנת מטיפול לטיפול.",
      "m.b4t": "הפסקה אמיתית", "m.b4": "עיסוי מרגיע מאוד שעוזר גם לישון טוב יותר.",
      "m.c1t": "עיסוי ניקוז לימפטי לכל הגוף",
      "m.c1": "מכפות הרגליים ועד החזה, עם שמן תינוקות, כדי לעודד את זרימת הלימפה, להפחית אצירת נוזלים ולהעניק תחושת קלילות.",
      "m.c2": "מהחזה ועד הקרקפת, עם שמן תינוקות, לניקוז לימפטי, ניקוי העור מרעלים ומראה רענן וזוהר.",
      "m.c3t": "חבילה: גוף מלא + Miracle Face",
      "m.c3": "טיפול שלם מכף רגל ועד ראש: גזרה מעודנת, פנים רגועות ורגע אמיתי של פינוק לעצמך.",
      "m.faq_q": "כמה טיפים לפני ואחרי",
      "m.faq_a": "מומלץ לשתות הרבה מים אחרי הטיפול. התוצאות בולטות יותר בטיפולים צפופים (פעם-פעמיים בשבוע בהתחלה). בהריון, בבעיות לב, פקקת ורידים, זיהום או כל ספק רפואי, יש להתייעץ עם רופא לפני קביעת תור.",
      "n.eyebrow": "ציפורניים",
      "n.title": "ידיים מטופחות עד קצות האצבעות",
      "n.intro": "ורוד חלבי, פרנץ', ניוד או אדום עמוק: אני עובדת עם ג'ל ומבנה אנטומי שמחזק את הציפורן הטבעית ומחזיק כמה שבועות. כל התמונות הן עבודות שלי.",
      "n.more": "עוד עבודות באינסטגרם",
      "p.eyebrow": "מחירון", "p.title": "התפריט",
      "p.massages": "עיסויים לימפטיים", "p.full": "גוף מלא · 45 דק'", "p.face": "Miracle Face \u200F· 30 דק'", "p.duo": "חבילה: גוף מלא + Miracle Face · שעה ורבע",
      "p.mani": "מניקור",
      "p.m1": "מניקור אקספרס · 30 דק'", "p.m1d": "דחיפה עדינה של הקוטיקולה, שיוף הציפורן ולק ג'ל או לק רגיל, בלי לחתוך את העור. מהיר ויעיל.",
      "p.m2": "מניקור קוסמטי · 45 דק'", "p.m2d": "מניקור מלא: דחיפה וחיתוך של הקוטיקולה, טיפול במשטח הציפורן ואז לק ג'ל או לק רגיל.",
      "p.m3": "מניקור הארכות · שעה ורבע", "p.m3d": "מניקור, הדבקת טיפסים Gel X על בסיס Koyo ולסיום לק ג'ל.",
      "p.m4": "מניקור מבנה אנטומי · שעה ורבע", "p.m4d": "ביסוס בג'ל ליצירת ציפורן מעוגלת וחזקה יותר, שמוגנת מפני המכות של היומיום.",
      "p.pedi": "פדיקור",
      "p.p1": "פדיקור אקספרס · 30 דק'", "p.p1d": "דחיפה קלה של הקוטיקולה, שיוף ולק ג'ל או לק רגיל, בלי לחתוך את העור.",
      "p.p2": "פדיקור קוסמטי · 45 דק'", "p.p2d": "טיפול בקוטיקולה, הכנת משטח הציפורן ואז לק ג'ל או לק רגיל.",
      "p.p3": "פדיקור מלא · שעה", "p.p3d": "אמבט רגליים חם, פילינג במלח ים המלח וטיפול מקלף, ולסיום טיפול בציפורניים ולק ג'ל או לק רגיל.",
      "b.eyebrow": "הזמנת תור", "b.title": "בחרי את הזמן שלך",
      "b.intro": "בחרי טיפול ואז שעה פנויה. אישור יישלח אלייך מיד במייל.",
      "b.fallback": "הזמנת תורים אונליין תעלה בקרוב. בינתיים אפשר לכתוב לי באינסטגרם ואציע לך מועד.",
      "b.dm": "לכתוב לי באינסטגרם",
      "f.where": "איפה", "f.address": "רחוב קינג ג'ורג', תל אביב. הכתובת המדויקת נשלחת עם אישור התור."
    },
    en: {
      "nav.massages": "Massages", "nav.nails": "Nails", "nav.prices": "Prices",
      "cta.book": "Book", "cta.book_long": "Book an appointment", "cta.prices": "See prices",
      "hero.eyebrow": "Nails · Massages · Tel Aviv",
      "hero.title": "Lymphatic massage & nails, on King George",
      "hero.script": "Take care of you",
      "hero.lead": "A warm, intimate studio where I take my time with you: lymphatic drainage, Miracle Face facial massage, gentle gel manicures and pedicures.",
      "m.eyebrow": "Lymphatic massage",
      "m.title": "Light, de-puffed, calm",
      "m.p1": "Lymphatic drainage is a slow, gentle, rhythmic massage. It supports the flow of lymph, the fluid that helps your body clear excess water and toxins. It isn't a deep-pressure massage: the movements are soft and follow the body's natural circulation.",
      "m.p2": "Sessions use baby oil, in a quiet room: 45 minutes for the body, 30 for the face.",
      "m.b1t": "Lighter legs", "m.b1": "Perfect after a long day on your feet or in the Tel Aviv heat.",
      "m.b2t": "Less water retention", "m.b2": "Your body feels less puffy and your belly flatter.",
      "m.b3t": "Smoother skin", "m.b3": "Skin feels firmer and your silhouette more defined over the sessions.",
      "m.b4t": "A real break", "m.b4": "Deeply relaxing, and it helps you sleep better too.",
      "m.c1t": "Full Body drainage massage",
      "m.c1": "From toes to chest, with baby oil, to boost lymphatic flow, reduce water retention and leave you feeling light.",
      "m.c2": "From chest to scalp, with baby oil, to support lymphatic drainage, detox the skin and reveal a fresher, brighter complexion.",
      "m.c3t": "Full Body & Miracle Face package",
      "m.c3": "A complete treatment from toes to scalp: a sleeker silhouette, a rested face and a real moment just for you.",
      "m.faq_q": "A few tips before and after",
      "m.faq_a": "Drink plenty of water after your session. Results show more with sessions close together (once or twice a week at first). If you are pregnant, have a heart condition, phlebitis, an infection or any medical concern, please ask your doctor before booking.",
      "n.eyebrow": "Nails",
      "n.title": "Beautiful hands, down to the fingertips",
      "n.intro": "Milky pink, French, nude or deep red: I work with gel and an anatomical structure that strengthens your natural nail and lasts for weeks. Every photo here is my own work.",
      "n.more": "More of my work on Instagram",
      "p.eyebrow": "Prices", "p.title": "The menu",
      "p.massages": "Lymphatic massages", "p.full": "Full Body · 45 min", "p.duo": "Full Body & Miracle Face package · 1h15",
      "p.mani": "Manicures",
      "p.m1": "Express manicure · 30 min", "p.m1d": "Cuticles gently pushed back, nails filed, then gel or regular polish, without cutting the skin. Quick and efficient.",
      "p.m2": "Cosmetic manicure · 45 min", "p.m2d": "A full manicure: cuticles pushed back and trimmed, nail plate prepared, then gel or regular polish.",
      "p.m3": "Extensions manicure · 1h15", "p.m3d": "Manicure, Gel X tips applied on a Koyo base, then gel polish.",
      "p.m4": "Mivné Anatomy manicure · 1h15", "p.m4d": "Gel structuring for a more curved, stronger nail that stands up to everyday knocks.",
      "p.pedi": "Pedicures",
      "p.p1": "Express pedicure · 30 min", "p.p1d": "Cuticles lightly pushed back, nails filed, then gel or regular polish, without cutting the skin.",
      "p.p2": "Cosmetic pedicure · 45 min", "p.p2d": "Cuticles treated, nail plate prepared, then gel or regular polish.",
      "p.p3": "Full pedicure · 1 h", "p.p3d": "Warm foot bath, Dead Sea salt scrub and exfoliating care, then nail care and gel or regular polish.",
      "b.eyebrow": "Booking", "b.title": "Choose your moment",
      "b.intro": "Pick your treatment, then a free slot. You get an email confirmation right away.",
      "b.fallback": "Online booking is coming very soon. In the meantime, message me on Instagram and I'll suggest a time.",
      "b.dm": "Message me on Instagram",
      "f.where": "Where", "f.address": "King George Street, Tel Aviv. The exact address is sent with your booking."
    }
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var fr = {};
  nodes.forEach(function (el) { fr[el.getAttribute("data-i18n")] = el.textContent; });
  T.fr = fr;

  function setLang(lang) {
    if (!T[lang]) lang = "fr";
    var dict = T[lang];
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.textContent = dict[k] || fr[k];
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("shey-lang", lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("shey-lang"); } catch (e) {}
  var nav = (navigator.language || "fr").slice(0, 2);
  var initial = saved || (nav === "he" || nav === "iw" ? "he" : nav === "en" ? "en" : "fr");
  setLang(initial);

  // Réservation : calendrier Cal.com si configuré, sinon bouton Instagram.
  var cfg = window.SHEY || {};
  if (!cfg.calUsername) {
    document.getElementById("booking-fallback").hidden = false;
    return;
  }
  (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", { origin: "https://cal.com" });
  Cal("inline", { elementOrSelector: "#booking", calLink: cfg.calUsername, layout: "month_view" });
  setTimeout(function () {
    if (!document.querySelector("#booking iframe")) document.getElementById("booking-fallback").hidden = false;
  }, 10000);
  Cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#4a2e1f" } }, hideEventTypeDetails: false, layout: "month_view" });
})();
