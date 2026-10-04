/**
 * LUXURY ISLAMIC NIKAH INVITATION - CLIENT LOGIC
 * Faizra & Mohamed Sheik Ismail
 * 24 December 2026 • 10:30 AM • Richway Garden, Katheeja
 * Languages: English (en) | Tamil (ta) | Arabic (ar)
 */

/* ==========================================================================
   TRANSLATION DICTIONARY (English, Tamil, Arabic)
   ========================================================================== */
const i18n = {
  en: {
    music_play: "Play Music",
    music_playing: "Music Playing",
    music_toast_start: "Serene Ambient Harmony Started",
    music_toast_pause: "Music Paused",
    envelope_subtitle: "Royal Islamic Wedding Invitation",
    bride_name: "A. Faizra",
    groom_name: "R. Mohamed Sheik Ismail",
    envelope_date_preview: "Thursday, 24 December 2026 • Katheeja",
    envelope_tap_hint: "Tap Gold Seal to Open Invitation",
    bismillah_trans: "\"In the Name of Allah, the Most Gracious, the Most Merciful\"",
    hero_proclamation: "Solemnization of Sacred Matrimony",
    hero_title: "The Nikah Ceremony",
    hero_announcement: "Under the divine benevolence of <strong>Allah (Subhanahu Wa Ta'ala)</strong> and with heartfelt blessings from our parents and elders, we joyfully invite you to grace the blessed Nikah of our beloved children.",
    couple_tag: "The Blessed Couple",
    couple_title: "Two Souls United by Faith & Love",
    couple_desc: "Embarking on a lifetime journey guided by mercy, mutual affection, and the Sunnah of our beloved Prophet Muhammad ﷺ.",
    bride_role: "The Bride",
    bride_parents_title: "Cherished Daughter of",
    bride_parents: "Janab K.M. Ahamed Ali<br>&amp; A. Hajreen Begum",
    groom_role: "The Groom",
    groom_parents_title: "Cherished Son of",
    groom_parents: "(Late) Mr. M. Rahumathullah<br>&amp; Mrs. R. Barsana Begum",
    event_tag: "Auspicious Occasion",
    event_title: "Nikah Solemnization",
    event_desc: "We cordially request the honour of your esteemed presence and dua to witness and celebrate the knot of Nikah.",
    card_day_date_label: "Day & Date",
    card_day_val: "Thursday",
    card_date_val: "24 December 2026",
    card_time_label: "Nikah Time",
    card_time_val: "10:30 AM",
    card_time_sub: "Morning Ceremony",
    card_venue_label: "Destination",
    venue_name: "Richway Garden",
    venue_location: "Katheeja",
    venue_timing_badge: "Thursday, 24 December 2026 • 10:30 AM Onwards",
    btn_gcal: "Add to Google Calendar",
    btn_ics: "Apple / Outlook iCal (.ics)",
    countdown_tag: "Count Every Moment",
    countdown_title: "Counting Down to the Blessed Hour",
    countdown_desc: "With hearts filled with excitement and anticipation for Thursday, 24 December 2026 at 10:30 AM.",
    count_days: "Days",
    count_hours: "Hours",
    count_minutes: "Minutes",
    count_seconds: "Seconds",
    countdown_status: "Until We Say \"Qubool Hai\" Insha'Allah",
    countdown_today: "Alhamdulillah, Today is the Blessed Day of Nikah!",
    venue_tag: "Ceremony Location",
    venue_section_title: "The Wedding Venue",
    venue_desc: "We eagerly await welcoming you to share in our celebration at this beautiful destination.",
    btn_maps: "Open in Google Maps",
    btn_copy_addr: "Copy Address",
    addr_toast: "Venue address copied to clipboard!",
    quote_tag: "Divine Guidance & Wisdom",
    quote_title: "Words of Tranquility",
    quran_translation: "\"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts.\"",
    quran_citation: "— Surah Ar-Rum [30:21] —",
    dua_meaning: "\"May Allah bless you, bestow His blessings upon you, and join you together in goodness and harmony.\"",
    family_tag: "With the Blessings of Our Elders",
    family_title: "The Respected Families",
    family_desc: "With prayers in our hearts and gratitude to the Almighty, our families cordially welcome your gracious presence.",
    family_bride_side: "Bride's Parents",
    family_bride_rel: "Cordially request your warm presence and blessings",
    family_groom_side: "Groom's Parents",
    family_groom_rel: "Cordially invite you to celebrate this blessed covenant",
    family_invitation_msg: "\"Your presence and warm prayers will illuminate our celebration and bring abundant joy to our union.\"",
    final_tag: "Heartfelt Welcome",
    final_title: "A Covenant of Love & Faith",
    final_quote: "\"As we step forward onto this sacred path of companionship, your presence, warm smiles, and sincere duas are the most precious gifts we could cherish.\"",
    guestbook_title: "Leave Your Dua for the Couple",
    guestbook_sub: "Send a prayer or warm message to Faizra & Mohamed Sheik Ismail",
    input_name_ph: "Your Name / Family Name",
    input_dua_ph: "Write your Dua or blessing for the couple...",
    btn_send_dua: "Send Your Blessed Dua",
    dua_sent_toast: "Jazakallah Khair! Your Dua has been placed in our guestbook.",
    dua_val_error: "Please enter your name and heartfelt Dua.",
    btn_share_wa: "Share Invitation via WhatsApp",
    btn_view_venue: "View Venue Directions",
    footer_copy: "Faizra & Mohamed Sheik Ismail • 24 December 2026 • Richway Garden, Katheeja"
  },
  ta: {
    music_play: "இசை ஒலிக்க",
    music_playing: "இசை ஒலிக்கிறது",
    music_toast_start: "மெல்லிய பின்னணி இசை தொடங்கியது",
    music_toast_pause: "இசை நிறுத்தப்பட்டது",
    envelope_subtitle: "திருமண அழைப்பிதழ்",
    bride_name: "ஏ. ஃபைஸ்ரா",
    groom_name: "ஆர். முகமது ஷேக் இஸ்மாயில்",
    envelope_date_preview: "வியாழக்கிழமை, 24 டிசம்பர் 2026 • கதீஜா",
    envelope_tap_hint: "அழைப்பிதழைத் திறக்க பொன் முத்திரையைத் தொடவும்",
    bismillah_trans: "\"அளவற்ற அருளாளனும், நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால்\"",
    hero_proclamation: "புனித நிக்காஹ் பெருவிழா",
    hero_title: "நிக்காஹ் அழைப்பிதழ்",
    hero_announcement: "எல்லாம் வல்ல <strong>அல்லாஹ்வின் (சுபஹானஹு வதஆலா)</strong> பேரருளாலும், எங்கள் பெற்றோர்கள் மற்றும் பெரியோர்களின் நல்லாசிகளுடனும், எங்கள் அன்புச் செல்வங்களின் நிக்காஹ் நன்நாளில் தாங்கள் தங்கள் குடும்ப சகிதமாக வருகை தந்து வாழ்த்தி துஆ செய்யுமாறு அன்புடன் அழைக்கின்றோம்.",
    couple_tag: "மணமக்கள்",
    couple_title: "ஈருடல் ஓருயிராய் இணையும் நன்னாள்",
    couple_desc: "கருணையும் அன்பும் நிறைந்த இல்லறப் பயணத்தில், நபிகள் நாயகம் ﷺ அவர்களின் சுன்னத் வழியில் தொடங்கும் இனிய வாழ்வு.",
    bride_role: "மணமகள்",
    bride_parents_title: "அன்பு மகள்",
    bride_parents: "ஜனாப் K.M. அகமது அலி<br>&amp; A. ஹஜ்ரீன் பேகம்",
    groom_role: "மணமகன்",
    groom_parents_title: "அன்பு மகன்",
    groom_parents: "(மறைந்த) திரு. M. ரஹ்மத்துல்லா<br>&amp; திருமதி. R. பர்சானா பேகம்",
    event_tag: "சுப முகூர்த்தம்",
    event_title: "நிக்காஹ் வைபவ விபரம்",
    event_desc: "இறைவனின் திருப்பெயரால் நிகழும் இந்த புனித நிக்காஹ் நிகழ்வில் கலந்து கொண்டு சிறப்பிக்க வேண்டுகிறோம்.",
    card_day_date_label: "நாளும் தேதியும்",
    card_day_val: "வியாழக்கிழமை",
    card_date_val: "24 டிசம்பர் 2026",
    card_time_label: "நிக்காஹ் நேரம்",
    card_time_val: "காலை 10:30 மணி",
    card_time_sub: "காலை சுப முகூர்த்தம்",
    card_venue_label: "இடம்",
    venue_name: "ரிச்வே கார்டன்",
    venue_location: "கதீஜா",
    venue_timing_badge: "வியாழக்கிழமை, 24 டிசம்பர் 2026 • காலை 10:30 மணி முதல்",
    btn_gcal: "கூகுள் காலண்டரில் சேர்க்க",
    btn_ics: "காலண்டர் கோப்பு (.ics)",
    countdown_tag: "நேரக் கணக்கீடு",
    countdown_title: "இனிய நன்னாளிற்கான காத்திருப்பு",
    countdown_desc: "வியாழக்கிழமை, 24 டிசம்பர் 2026 காலை 10:30 மணியை நோக்கி நெஞ்சார்ந்த ஆவலுடன்...",
    count_days: "நாட்கள்",
    count_hours: "மணி",
    count_minutes: "நிமிடம்",
    count_seconds: "வினாடி",
    countdown_status: "இன்ஷா அல்லாஹ், நிக்காஹ் நன்நாளை எதிர்நோக்கி...",
    countdown_today: "அல்ஹம்துலில்லாஹ், இன்று எங்களின் புனித நிக்காஹ் நன்னாள்!",
    venue_tag: "திருமண மண்டபம்",
    venue_section_title: "திருமண நிகழ்விடம்",
    venue_desc: "எங்கள் இல்லத் திருமண விழாவிற்கு தங்களை இன்முகத்துடன் வரவேற்கக் காத்திருக்கின்றோம்.",
    btn_maps: "கூகுள் வரைபடத்தில் பார்க்க",
    btn_copy_addr: "முகவரியை நகலெடுக்க",
    addr_toast: "மண்டப முகவரி நகலெடுக்கப்பட்டது!",
    quote_tag: "திருக்குர்ஆன் வழிகாட்டல்",
    quote_title: "சாந்தியும் அன்பும் தரும் அருள்வாக்கு",
    quran_translation: "\"நீங்கள் அமைதி பெற உங்களுக்காக உங்கள் இனத்திலிருந்தே மனைவியரை உண்டாக்கி, உங்களுக்கிடையே அன்பையும் கருணையையும் ஏற்படுத்தியிருப்பது அவனது அத்தாட்சிகளில் உள்ளதாகும்.\"",
    quran_citation: "— திருக்குர்ஆன், சூரா அர்-ரூம் [30:21] —",
    dua_meaning: "\"அல்லாஹ் உங்களுக்கு பரக்கத் செய்யட்டும், உங்கள் மீது தன் அருளைப் பொழியட்டும், உங்கள் இருவரையும் நன்மையில் ஒன்றிணைக்கட்டும்.\"",
    family_tag: "பெரியோர்களின் நல்லாசியுடன்",
    family_title: "இருவீட்டார் அழைப்பு",
    family_desc: "அல்லாஹ்வின் பேரருளுக்கு நன்றி செலுத்தி, எங்கள் இரு குடும்பத்தாரும் தங்களை மனதார வரவேற்கின்றோம்.",
    family_bride_side: "மணமகள் பெற்றோர்",
    family_bride_rel: "தங்களின் வருகையையும் நல்வாழ்த்துகளையும் வேண்டி விரும்பி அழைக்கின்றனர்",
    family_groom_side: "மணமகன் பெற்றோர்",
    family_groom_rel: "இந்த இனிய நிக்காஹ் வைபவத்திற்கு தங்களை அன்புடன் அழைக்கின்றனர்",
    family_invitation_msg: "\"தங்களின் மேலான வருகையும் உளமார்ந்த துஆக்களும் எங்கள் விழாவிற்கு பெருமை சேர்க்கும்.\"",
    final_tag: "இதயம் கனிந்த வரவேற்பு",
    final_title: "அன்பும் நம்பிக்கையும் இணையும் பந்தம்",
    final_quote: "\"புதிய வாழ்க்கைப் பாதையைத் தொடங்கும் இந்நாளில், தங்களின் பொன்னான வருகையும், இனிய புன்னகையும், தூய துஆவுமே எங்களுக்குக் கிடைக்கும் மாபெரும் பரிசாகும்.\"",
    guestbook_title: "மணமக்களுக்கு உங்கள் துஆவை அளியுங்கள்",
    guestbook_sub: "ஃபைஸ்ரா மற்றும் முகமது ஷேக் இஸ்மாயில் தம்பதியருக்கு உங்கள் வாழ்த்தை அனுப்புங்கள்",
    input_name_ph: "உங்கள் பெயர் / குடும்பப் பெயர்",
    input_dua_ph: "மணமக்களுக்கு உங்கள் துஆ அல்லது வாழ்த்தை எழுதுங்கள்...",
    btn_send_dua: "உங்கள் துஆவை சமர்ப்பிக்கவும்",
    dua_sent_toast: "ஜஸாக்கல்லாஹு கைர்! உங்கள் துஆ பதிவு செய்யப்பட்டது.",
    dua_val_error: "தயவுசெய்து உங்கள் பெயரையும் துஆவையும் உள்ளிடவும்.",
    btn_share_wa: "வாட்ஸ்அப் மூலம் பகிரவும்",
    btn_view_venue: "மண்டப வழியைக் காண",
    footer_copy: "ஃபைஸ்ரா & முகமது ஷேக் இஸ்மாயில் • 24 டிசம்பர் 2026 • ரிச்வே கார்டன், கதீஜா"
  },
  ar: {
    music_play: "تشغيل الموسيقى",
    music_playing: "الموسيقى تعمل",
    music_toast_start: "بدأت النغمات الهادئة",
    music_toast_pause: "تم إيقاف الموسيقى",
    envelope_subtitle: "دعوة زفاف إسلامية ملكية",
    bride_name: "أ. فائزة",
    groom_name: "ر. محمد شيخ إسماعيل",
    envelope_date_preview: "الخميس، 24 ديسمبر 2026 • خديجة",
    envelope_tap_hint: "اضغط على الختم الذهبي لفتح الدعوة",
    bismillah_trans: "\"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\"",
    hero_proclamation: "مراسم عقد القران المبارك",
    hero_title: "حفل عقد النكاح",
    hero_announcement: "بفضل <strong>الله تعالى</strong> وتوفيقه، وببركة دعاء الوالدين والأهل، يسرنا ويشرفنا دعوتكم لحضور ومباركة عقد قران ابنتنا وابننا العزيزين.",
    couple_tag: "العروسان المباركان",
    couple_title: "روحان يجمعهما الإيمان والمودة",
    couple_desc: "انطلاقة في رحلة العمر في ظل السكينة والمودة والرحمة وعلى هدي وسنة نبينا محمد ﷺ.",
    bride_role: "العروس",
    bride_parents_title: "الكريمة المصونة لـ",
    bride_parents: "جناب ك.م. أحمد علي<br>&amp; أ. حجرين بيكم",
    groom_role: "العريس",
    groom_parents_title: "النجل الكريم لـ",
    groom_parents: "(المرحوم) السيد م. رحمة الله<br>&amp; السيدة ر. برسانة بيكم",
    event_tag: "الموعد المبارك",
    event_title: "تفاصيل عقد القران",
    event_desc: "نتشرف بوجودكم ودعواتكم الصادقة لتشاركونا فرحتنا في هذه المناسبة الميمونة.",
    card_day_date_label: "اليوم والتاريخ",
    card_day_val: "الخميس",
    card_date_val: "24 ديسمبر 2026",
    card_time_label: "موعد النكاح",
    card_time_val: "10:30 صباحاً",
    card_time_sub: "مراسم الصباح",
    card_venue_label: "مكان الحفل",
    venue_name: "ريتشواي جاردن",
    venue_location: "خديجة",
    venue_timing_badge: "الخميس، 24 ديسمبر 2026 • ابتداءً من 10:30 صباحاً",
    btn_gcal: "إضافة إلى تقويم Google",
    btn_ics: "تحميل ملف التقويم (.ics)",
    countdown_tag: "العد التنازلي",
    countdown_title: "نعد اللحظات حتى اليوم المبارك",
    countdown_desc: "بقلوب يملؤها الشوق لموعدنا يوم الخميس 24 ديسمبر 2026 الساعة 10:30 صباحاً.",
    count_days: "يوم",
    count_hours: "ساعة",
    count_minutes: "دقيقة",
    count_seconds: "ثانية",
    countdown_status: "حتى نقول 'قبلت النكاح' إن شاء الله",
    countdown_today: "الحمد لله، اليوم هو يوم عقد القران المبارك!",
    venue_tag: "موقع الحفل",
    venue_section_title: "قاعة الزفاف",
    venue_desc: "نتطلع ببالغ الشوق والسرور لاستقبالكم ومشاركتنا أبهج اللحظات في هذه القاعة المباركة.",
    btn_maps: "فتح في خرائط Google",
    btn_copy_addr: "نسخ العنوان",
    addr_toast: "تم نسخ عنوان القاعة بنجاح!",
    quote_tag: "الهدي القرآني",
    quote_title: "آيات السكينة والمودة",
    quran_translation: "\"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً\"",
    quran_citation: "— سورة الروم [30:21] —",
    dua_meaning: "\"«بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ»\"",
    family_tag: "ببركة أهالينا الكرام",
    family_title: "العائلتان الكريمتان",
    family_desc: "بقلوب تلهج بالشكر لله تعالى، ترحب عائلاتنا الكريمة بحضوركم المبارك ومشاركتنا الفرحة.",
    family_bride_side: "والدا العروس",
    family_bride_rel: "يتشرفان بطلب حضوركم ومباركتكم الكريمة",
    family_groom_side: "والدا العريس",
    family_groom_rel: "يدعوانكم بكل سرور ومحبة لمشاركتنا فرحة هذا الميثاق الغليظ",
    family_invitation_msg: "\"حضوركم الطيب ودعواتكم المباركة يضيئان حفلنا ويملآن قلوبنا سعادة وابتهاجاً.\"",
    final_tag: "أهلاً وسهلاً بكم",
    final_title: "ميثاق غليظ بالمودة والإيمان",
    final_quote: "\"ونحن نخطو معاً أولى خطواتنا في هذا الدرب الطاهر، فإن تشريفكم ودعواتكم الصادقة هي أغلى وأجمل ما نحظى به.\"",
    guestbook_title: "أرسل دعاءك ومباركتك للعروسين",
    guestbook_sub: "شارك فائزة ومحمد شيخ إسماعيل بأطيب الدعوات والتهاني",
    input_name_ph: "اسمك الكريم / العائلة",
    input_dua_ph: "اكتب دعاءك المبارك أو تهنئتك للعروسين...",
    btn_send_dua: "إرسال الدعاء والتهنئة",
    dua_sent_toast: "جزاكم الله خيراً! تم تسجيل دعائكم المبارك.",
    dua_val_error: "يرجى إدخال الاسم والدعاء المبارك.",
    btn_share_wa: "مشاركة الدعوة عبر واتساب",
    btn_view_venue: "عرض اتجاهات القاعة",
    footer_copy: "فائزة & محمد شيخ إسماعيل • 24 ديسمبر 2026 • ريتشواي جاردن، خديجة"
  }
};

let currentLanguage = 'en';

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initEnvelopeOpener();
  initParticleCanvas();
  initCountdownTimer();
  initAudioSystem();
  initCalendarAndMapActions();
  initDuaGuestbook();
  initScrollAnimations();
});

/* ==========================================================================
   LANGUAGE SWITCHER (English | தமிழ் | العربية)
   ========================================================================== */
function initLanguageSwitcher() {
  const tabs = document.querySelectorAll('.lang-tab');
  const savedLang = localStorage.getItem('wedding_lang') || 'en';

  setLanguage(savedLang);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.getAttribute('data-lang');
      if (selected && selected !== currentLanguage) {
        setLanguage(selected);
      }
    });
  });
}

function setLanguage(lang) {
  if (!i18n[lang]) lang = 'en';
  currentLanguage = lang;
  localStorage.setItem('wedding_lang', lang);

  const html = document.documentElement;
  const dict = i18n[lang];

  // Set RTL or LTR
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    document.body.classList.add('rtl-mode');
    document.body.classList.remove('tamil-mode');
  } else if (lang === 'ta') {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'ta');
    document.body.classList.add('tamil-mode');
    document.body.classList.remove('rtl-mode');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    document.body.classList.remove('rtl-mode');
    document.body.classList.remove('tamil-mode');
  }

  // Update switcher tabs state
  document.querySelectorAll('.lang-tab').forEach((tab) => {
    const isCurrent = tab.getAttribute('data-lang') === lang;
    tab.classList.toggle('active', isCurrent);
    tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
  });

  // Brief smooth transition
  document.body.classList.add('lang-switching');

  // Replace textContent
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Replace innerHTML for formatted strings
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update input placeholders
  const nameInput = document.getElementById('guest-name');
  const duaInput = document.getElementById('guest-dua');
  if (nameInput && dict.input_name_ph) nameInput.placeholder = dict.input_name_ph;
  if (duaInput && dict.input_dua_ph) duaInput.placeholder = dict.input_dua_ph;

  // Refresh calendar links and share buttons for active language
  updateDynamicLinks(lang);

  setTimeout(() => {
    document.body.classList.remove('lang-switching');
  }, 180);
}

function updateDynamicLinks(lang) {
  const dict = i18n[lang];
  const gcalBtn = document.getElementById('add-gcal-btn');
  if (gcalBtn) {
    const title = encodeURIComponent(
      lang === 'ar' ? 'عقد قران: فائزة & محمد شيخ إسماعيل' :
      lang === 'ta' ? 'நிக்காஹ் வைபவம்: ஃபைஸ்ரா & முகமது ஷேக் இஸ்மாயில்' :
      'Nikah Ceremony: Faizra & Mohamed Sheik Ismail'
    );
    const details = encodeURIComponent(
      `${dict.hero_announcement.replace(/<[^>]*>?/gm, '')}\n\nVenue: ${dict.venue_name}, ${dict.venue_location}`
    );
    const location = encodeURIComponent(`${dict.venue_name}, ${dict.venue_location}`);
    const dates = '20261224T050000Z/20261224T090000Z';
    gcalBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  }
}

/* ==========================================================================
   1. ENVELOPE / WAX SEAL OPENING
   ========================================================================== */
function initEnvelopeOpener() {
  const envelopeOverlay = document.getElementById('envelope-overlay');
  const waxSealBtn = document.getElementById('wax-seal-btn');

  if (!envelopeOverlay || !waxSealBtn) return;

  function openEnvelope() {
    envelopeOverlay.classList.add('opened');
    triggerGoldSparkleBurst();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  waxSealBtn.addEventListener('click', openEnvelope);
  waxSealBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });
}

function triggerGoldSparkleBurst() {
  const canvas = document.getElementById('gold-dust-canvas');
  if (!canvas) return;
  if (window.particleSystem) {
    window.particleSystem.burst();
  }
}

/* ==========================================================================
   2. GOLD DUST CANVAS PARTICLES
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('gold-dust-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 768 ? 45 : 85;
  const particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 0.45 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.opacity = Math.random() * 0.65 + 0.2;
      this.fadeSpeed = Math.random() * 0.006 + 0.002;
      this.fadeIn = Math.random() > 0.5;
      this.glow = Math.random() > 0.6;
    }

    update() {
      this.y -= this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.25 + this.speedX;

      if (this.fadeIn) {
        this.opacity += this.fadeSpeed;
        if (this.opacity >= 0.8) this.fadeIn = false;
      } else {
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0.15) this.fadeIn = true;
      }

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      if (this.glow) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(235, 216, 159, 0.85)';
      }

      ctx.fillStyle = `rgba(235, 216, 159, ${this.opacity})`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  window.particleSystem = {
    burst: () => {
      for (let i = 0; i < 30; i++) {
        const p = new Particle();
        p.x = width / 2 + (Math.random() - 0.5) * 200;
        p.y = height / 2 + (Math.random() - 0.5) * 200;
        p.speedY = (Math.random() - 0.5) * 3;
        p.speedX = (Math.random() - 0.5) * 3;
        particles.push(p);
      }
    }
  };

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    if (particles.length > particleCount + 5) {
      particles.shift();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. LIVE COUNTDOWN TO 24 DECEMBER 2026, 10:30 AM
   ========================================================================== */
function initCountdownTimer() {
  const targetDate = new Date('2026-12-24T10:30:00+05:30').getTime();

  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');
  const messageEl = document.getElementById('countdown-status-text');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const dict = i18n[currentLanguage] || i18n.en;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      if (messageEl) {
        messageEl.textContent = dict.countdown_today;
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   4. ROYAL AMBIENT MUSIC SYSTEM (Non-autoplay, Gentle Acoustic/Oud Harmony)
   ========================================================================== */
function initAudioSystem() {
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicBtnText = document.getElementById('music-btn-text');
  if (!musicToggleBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let synthInterval = null;
  let masterGain = null;

  // Pentatonic Oud & Harp ambient scale (D, E, F#, A, B)
  const notes = [
    146.83, // D3
    220.00, // A3
    293.66, // D4
    329.63, // E4
    369.99, // F#4
    440.00, // A4
    493.88, // B4
    587.33  // D5
  ];

  function playNote(freq, time, duration = 3.5) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    noteGain.gain.setValueAtTime(0, time);
    noteGain.gain.linearRampToValueAtTime(0.08, time + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  function startAtmosphere() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    let step = 0;
    const sequence = [
      [146.83, 293.66, 440.00],
      [220.00, 369.99],
      [146.83, 329.63, 493.88],
      [293.66, 587.33],
      [220.00, 369.99, 440.00]
    ];

    function schedulePhrase() {
      if (!isPlaying || !audioCtx) return;
      const now = audioCtx.currentTime;
      const currentChord = sequence[step % sequence.length];
      currentChord.forEach((f, i) => {
        playNote(f, now + i * 0.35, 4.0);
      });
      step++;
    }

    schedulePhrase();
    synthInterval = setInterval(schedulePhrase, 3600);
  }

  function stopAtmosphere() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    if (audioCtx && masterGain) {
      masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
    }
  }

  musicToggleBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    const dict = i18n[currentLanguage] || i18n.en;

    if (isPlaying) {
      startAtmosphere();
      musicToggleBtn.classList.add('music-playing');
      musicBtnText.textContent = dict.music_playing;
      showToast(dict.music_toast_start);
    } else {
      stopAtmosphere();
      musicToggleBtn.classList.remove('music-playing');
      musicBtnText.textContent = dict.music_play;
      showToast(dict.music_toast_pause);
    }
  });
}

/* ==========================================================================
   5. CALENDAR & VENUE ACTIONS
   ========================================================================== */
function initCalendarAndMapActions() {
  // Copy Venue Address
  const copyAddressBtn = document.getElementById('copy-address-btn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const address = 'Richway Garden, Katheeja';
      const dict = i18n[currentLanguage] || i18n.en;
      navigator.clipboard.writeText(address).then(() => {
        showToast(dict.addr_toast);
      }).catch(() => {
        showToast(address);
      });
    });
  }

  // Apple / Outlook .ics File Download
  const icsBtn = document.getElementById('download-ics-btn');
  if (icsBtn) {
    icsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadIcsCalendarFile();
    });
  }

  // WhatsApp Share Button
  const shareWaBtn = document.getElementById('share-whatsapp-btn');
  if (shareWaBtn) {
    shareWaBtn.addEventListener('click', () => {
      const dict = i18n[currentLanguage] || i18n.en;
      let text = '';

      if (currentLanguage === 'ar') {
        text = encodeURIComponent(
          '✨ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ✨\n\n' +
          'يسرنا ويشرفنا دعوتكم لحضور حفل عقد قران:\n\n' +
          '👰 أ. فائزة (B.Sc., MCA)\n' +
          'كريمة: جناب ك.م. أحمد علي & أ. حجرين بيكم\n\n' +
          '🤵 ر. محمد شيخ إسماعيل (B.E.)\n' +
          'نجل: (المرحوم) السيد م. رحمة الله & السيدة ر. برسانة بيكم\n\n' +
          '📅 التاريخ: الخميس، 24 ديسمبر 2026\n' +
          '⏰ الوقت: 10:30 صباحاً\n' +
          '📍 المكان: ريتشواي جاردن، خديجة\n\n' +
          'حضوركم ودعواتكم الصادقة تشرفنا وتسعدنا!\n\n' +
          'رابط بطاقة الدعوة الملكية: ' + window.location.href
        );
      } else if (currentLanguage === 'ta') {
        text = encodeURIComponent(
          '✨ அளவற்ற அருளாளனும் நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால் ✨\n\n' +
          'எங்கள் இல்ல நிக்காஹ் பெருவிழாவிற்கு தங்களை அன்புடன் அழைக்கின்றோம்:\n\n' +
          '👰 மணமகள்: ஏ. ஃபைஸ்ரா (B.Sc., MCA)\n' +
          'செல்வமகள்: ஜனாப் K.M. அகமது அலி & A. ஹஜ்ரீன் பேகம்\n\n' +
          '🤵 மணமகன்: ஆர். முகமது ஷேக் இஸ்மாயில் (B.E.)\n' +
          'செல்வமகன்: (மறைந்த) திரு. M. ரஹ்மத்துல்லா & திருமதி. R. பர்சானா பேகம்\n\n' +
          '📅 நாள்: வியாழக்கிழமை, 24 டிசம்பர் 2026\n' +
          '⏰ நேரம்: காலை 10:30 மணி\n' +
          '📍 இடம்: ரிச்வே கார்டன், கதீஜா\n\n' +
          'தங்களின் வருகையும் நல்லாசிகளும் எங்கள் இல்லத்திற்கு பெருமை சேர்க்கும்!\n\n' +
          'அழைப்பிதழைக் காண: ' + window.location.href
        );
      } else {
        text = encodeURIComponent(
          '✨ In the Name of Allah, the Most Gracious, the Most Merciful ✨\n\n' +
          'We cordially invite you to the sacred Nikah Ceremony of:\n\n' +
          '👰 A. Faizra (B.Sc., MCA)\n' +
          'D/o Janab K.M. Ahamed Ali & A. Hajreen Begum\n\n' +
          '🤵 R. Mohamed Sheik Ismail (B.E.)\n' +
          'S/o (Late) Mr. M. Rahumathullah & Mrs. R. Barsana Begum\n\n' +
          '📅 Date: Thursday, 24 December 2026\n' +
          '⏰ Time: 10:30 AM\n' +
          '📍 Venue: Richway Garden, Katheeja\n\n' +
          'Your presence and prayers will be our greatest blessing!\n\n' +
          'View the Royal Wedding Card: ' + window.location.href
        );
      }

      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}

function downloadIcsCalendarFile() {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Faizra and Ismail//Nikah Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:nikah-faizra-ismail-20261224@wedding',
    'DTSTAMP:20260928T120000Z',
    'DTSTART:20261224T050000Z',
    'DTEND:20261224T090000Z',
    'SUMMARY:Nikah Ceremony: Faizra & Mohamed Sheik Ismail',
    'DESCRIPTION:Solemnization of the Nikah of A. Faizra (B.Sc., MCA) and R. Mohamed Sheik Ismail (B.E.). With prayers from Janab K.M. Ahamed Ali & A. Hajreen Begum and (Late) Mr. M. Rahumathullah & Mrs. R. Barsana Begum.',
    'LOCATION:Richway Garden, Katheeja',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Nikah_Faizra_and_Ismail_24Dec2026.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Calendar event file (.ics) downloaded!');
}

/* ==========================================================================
   6. DUA & BLESSINGS GUESTBOOK
   ========================================================================== */
function initDuaGuestbook() {
  const form = document.getElementById('blessing-form');
  const feed = document.getElementById('blessings-feed');
  if (!form || !feed) return;

  const defaultDuas = [
    {
      name: 'Family Elders',
      time: 'Blessing',
      text: 'Barakallahu laka wa baraka alayka wa jama\'a baynakuma fee khayr. May Allah bless this sacred union with endless love, peace, and prosperity.'
    },
    {
      name: 'Well Wishers',
      time: 'Prayer',
      text: 'May Allah (SWT) grant Faizra and Ismail a home filled with mawaddah, rahmah, and piety. Congratulations to both noble families!'
    },
    {
      name: 'Dear Relatives',
      time: 'Heartfelt Wish',
      text: 'Hearty congratulations to Faizra and Mohamed Sheik Ismail! Counting down the days to celebrate your Nikah at Richway Garden, Katheeja!'
    }
  ];

  let storedDuas = [];
  try {
    const raw = localStorage.getItem('faizra_ismail_duas_v3');
    storedDuas = raw ? JSON.parse(raw) : defaultDuas;
  } catch (e) {
    storedDuas = defaultDuas;
  }

  function renderDuas() {
    feed.innerHTML = '';
    storedDuas.slice(0, 10).forEach((item) => {
      const card = document.createElement('div');
      card.className = 'blessing-item';
      card.innerHTML = `
        <div class="blessing-author">
          <span>${escapeHTML(item.name)}</span>
          <span class="blessing-time">${escapeHTML(item.time)}</span>
        </div>
        <div class="blessing-text">"${escapeHTML(item.text)}"</div>
      `;
      feed.appendChild(card);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  renderDuas();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('guest-name');
    const msgInput = document.getElementById('guest-dua');
    const dict = i18n[currentLanguage] || i18n.en;

    const name = nameInput.value.trim();
    const msg = msgInput.value.trim();

    if (!name || !msg) {
      showToast(dict.dua_val_error);
      return;
    }

    const newDua = {
      name: name,
      time: currentLanguage === 'ar' ? 'الآن' : currentLanguage === 'ta' ? 'சற்றுமுன்' : 'Just now',
      text: msg
    };

    storedDuas.unshift(newDua);
    try {
      localStorage.setItem('faizra_ismail_duas_v3', JSON.stringify(storedDuas));
    } catch (err) {}

    renderDuas();
    nameInput.value = '';
    msgInput.value = '';
    showToast(dict.dua_sent_toast);
  });
}

/* ==========================================================================
   7. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-item');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
