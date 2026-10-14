/**
 * LUXURY ISLAMIC NIKAH INVITATION - CLIENT LOGIC
 * Faiz Weds Sheik (A. Faizra & R. Mohamed Sheik Ismail)
 * Thursday, 24 December 2026 • 10:30 AM • Richway Garden, Khadeja Mahal
 * Languages: English (en) | Tamil (ta) | Arabic (ar)
 */

/* ==========================================================================
   TRANSLATION DICTIONARY (English, Tamil, Arabic)
   ========================================================================== */
const i18n = {
  en: {
    music_play: "Play Music",
    music_playing: "Music Playing",
    music_toast_start: "Playing \"Baraka Allahu Lakuma\"",
    music_toast_pause: "Music Paused",
    music_error_toast: "Audio unavailable. Please add baraka-allahu-lakuma.mp3 to public/audio/",
    bismillah_trans: "\"In the Name of Allah, the Most Gracious, the Most Merciful\"",

    hero_proclamation: "Solemnization of Sacred Matrimony",
    hero_title: "Faiz Weds Sheik",
    hero_announcement: "Under the divine benevolence of Allah (Subhanahu Wa Ta'ala) and with heartfelt blessings from our parents and elders, we cordially request the honour of your esteemed presence and dua to witness and celebrate the sacred knot of Nikah.",
    envelope_subtitle: "Royal Islamic Wedding Invitation",
    envelope_date_preview: "Thursday, 24 December 2026 • Richway Garden, Khadeja Mahal",
    envelope_tap_hint: "Click Centre Button to Open Invitation",
    btn_open_invitation: "Open Invitation",
    scratch_instruction: "Scratch to Reveal Our Special Day",
    btn_scratch_action: "Scratch to Reveal",
    scratch_revealed_names: "A. Faizra & R. Mohamed Sheik Ismail",
    scratch_revealed_sub: "Thursday, 24 December 2026 • Richway Garden, Khadeja Mahal",
    scratch_revealed_badge: "Blessed Sacred Union",
    btn_scratch_reveal: "✦ Tap to Instantly Reveal Special Day ✦",
    music_choice_prompt: "Would you like to play “Baraka Allahu Lakuma” while viewing our wedding invitation?",
    btn_play_music: "Play Music",
    btn_no_thanks: "No Thanks",
    couple_tag: "The Blessed Couple & Families",
    couple_title: "Two Souls United by Faith & Love",
    couple_desc: "Embarking on a lifetime journey guided by mercy, mutual affection, and the Sunnah of our beloved Prophet Muhammad ﷺ.",
    bride_role: "The Bride",
    bride_name: "A. Faizra",
    bride_parents_title: "Cherished Daughter of",
    bride_parents: "Janab K.M. Ahamed Ali<br>&amp; A. Hajreen Begum",
    groom_role: "The Groom",
    groom_name: "R. Mohamed Sheik Ismail",
    groom_parents_title: "Cherished Son of",
    groom_parents: "(Late) Mr. M. Rahumathullah<br>&amp; Mrs. R. Barsana Begum",
    family_bride_side: "Bride's Parents",
    family_bride_rel: "Cordially request your warm presence and blessings",
    family_groom_side: "Groom's Parents",
    family_groom_rel: "Cordially invite you to celebrate this blessed covenant",
    family_invitation_msg: "\"Your presence and warm prayers will illuminate our celebration and bring abundant joy to our union.\"",
    event_tag: "Sacred Ceremony",
    event_title: "Nikah Solemnization",
    card_day_date_label: "Day & Date",
    card_day_val: "Thursday",
    card_date_val: "24 December 2026",
    card_time_label: "Nikah Time",
    card_time_val: "10:30 AM",
    card_time_sub: "Morning Ceremony",
    card_venue_label: "Venue",
    venue_name_full: "Richway Garden, Khadeja Mahal",
    venue_sub_location: "Pattukkottai - Adirai Road, Adirampattinam",
    venue_timing_badge: "Thursday, 24 December 2026 • 10:30 AM Onwards",
    btn_gcal: "Add to Google Calendar",
    btn_ics: "Apple / Outlook iCal (.ics)",
    venue_countdown_tag: "Venue & Live Countdown",
    venue_section_title: "The Wedding Venue & Countdown",
    venue_desc: "We eagerly await welcoming you to share in our celebration at this beautiful destination on Thursday, 24 December 2026 at 10:30 AM.",
    count_days: "Days",
    count_hours: "Hours",
    count_minutes: "Minutes",
    count_seconds: "Seconds",
    countdown_status: "Until We Say \"Qubool Hai\" Insha'Allah",
    countdown_today: "Alhamdulillah, Today is the Blessed Day of Nikah!",
    btn_maps: "Get Directions",
    btn_copy_addr: "Copy Address",
    addr_toast: "Venue address copied to clipboard!",
    final_tag: "Blessings & Heartfelt Dua",
    final_title: "A Covenant of Love & Faith",
    quran_translation: "\"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts.\"",
    quran_citation: "— Surah Ar-Rum [30:21] —",
    dua_meaning: "\"May Allah bless you, bestow His blessings upon you, and join you together in goodness and harmony.\"",
    final_quote: "\"As we step forward onto this sacred path of companionship, your presence, warm smiles, and sincere duas are the most precious gifts we could cherish.\"",
    guestbook_title: "Leave Your Dua for the Couple",
    guestbook_sub: "Send a prayer or warm message to Faizra & Mohamed Sheik Ismail",
    input_name_ph: "Your Name / Family Name",
    input_dua_ph: "Write your Dua or blessing for the couple...",
    btn_send_dua: "Send Your Blessed Dua",
    dua_sent_toast: "Jazakallah Khair! Your Dua has been placed in our guestbook.",
    dua_val_error: "Please enter your name and heartfelt Dua.",
    btn_share_wa: "Share Invitation via WhatsApp",
    btn_wa_rsvp: "Send Wishes on WhatsApp",
    footer_copy: "Faiz Weds Sheik • 24 December 2026 • Richway Garden, Khadeja Mahal"
  },
  ta: {
    music_play: "இசை ஒலிக்க",
    music_playing: "இசை ஒலிக்கிறது",
    music_toast_start: "\"பாரக்கல்லாஹு லகுமா\" இசை ஒலிக்கிறது",
    music_toast_pause: "இசை நிறுத்தப்பட்டது",
    music_error_toast: "இசைக்கோப்பு கிடைக்கவில்லை. baraka-allahu-lakuma.mp3 கோப்பை சேர்க்கவும்.",
    bismillah_trans: "\"அளவற்ற அருளாளனும், நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால்\"",
    hero_proclamation: "புனித நிக்காஹ் பெருவிழா",
    hero_title: "ஃபைஸ்ரா - ஷேக் திருமணம்",
    hero_announcement: "எல்லாம் வல்ல அல்லாஹ்வின் (சுபஹானஹு வதஆலா) பேரருளாலும், எங்கள் பெற்றோர்கள் மற்றும் பெரியோர்களின் நல்லாசிகளுடனும், எங்கள் அன்புச் செல்வங்களின் புனித நிக்காஹ் நன்நாளில் தாங்கள் தங்கள் குடும்ப சகிதமாக வருகை தந்து வாழ்த்தி துஆ செய்யுமாறு அன்புடன் அழைக்கின்றோம்.",
    envelope_subtitle: "புனித நிக்காஹ் அழைப்பிதழ்",
    envelope_date_preview: "வியாழக்கிழமை, 24 டிசம்பர் 2026 • ரிச்வே கார்டன், கதீஜா மஹால்",
    envelope_tap_hint: "அழைப்பிதழைத் திறக்க நடுவிலுள்ள பட்டனை அழுத்தவும்",
    btn_open_invitation: "அழைப்பிதழைத் திறக்க",
    scratch_instruction: "எங்கள் இனிய நன்னாளைக் காண உராயவும்",
    btn_scratch_action: "அழைப்பைக் காண உராயவும்",
    scratch_revealed_names: "ஏ. ஃபைஸ்ரா & ஆர். முகமது ஷேக் இஸ்மாயில்",
    scratch_revealed_sub: "வியாழக்கிழமை, 24 டிசம்பர் 2026 • ரிச்வே கார்டன், கதீஜா மஹால்",
    scratch_revealed_badge: "புனித நிக்காஹ் பந்தம்",
    btn_scratch_reveal: "✦ நன்னாளை உடனே திறக்க இங்கு தொடவும் ✦",
    music_choice_prompt: "அழைப்பிதழைப் பார்க்கும்போது \"பாரக்கல்லாஹு லகுமா\" பின்னணி இசையை ஒலிக்கச் செய்ய விரும்புகிறீர்களா?",
    btn_play_music: "இசை ஒலிக்க",
    btn_no_thanks: "வேண்டாம்",
    couple_tag: "மணமக்கள் மற்றும் இருவீட்டார்",
    couple_title: "ஈருடல் ஓருயிராய் இணையும் நன்னாள்",
    couple_desc: "கருணையும் அன்பும் நிறைந்த இல்லறப் பயணத்தில், நபிகள் நாயகம் ﷺ அவர்களின் சுன்னத் வழியில் தொடங்கும் இனிய வாழ்வு.",
    bride_role: "மணமகள்",
    bride_name: "ஏ. ஃபைஸ்ரா",
    bride_parents_title: "அன்பு மகள்",
    bride_parents: "ஜனாப் K.M. அகமது அலி<br>&amp; A. ஹஜ்ரீன் பேகம்",
    groom_role: "மணமகன்",
    groom_name: "ஆர். முகமது ஷேக் இஸ்மாயில்",
    groom_parents_title: "அன்பு மகன்",
    groom_parents: "(மறைந்த) திரு. M. ரஹ்மத்துல்லா<br>&amp; திருமதி. R. பர்சானா பேகம்",
    family_bride_side: "மணமகள் பெற்றோர்",
    family_bride_rel: "தங்களின் வருகையையும் நல்வாழ்த்துகளையும் வேண்டி விரும்பி அழைக்கின்றனர்",
    family_groom_side: "மணமகன் பெற்றோர்",
    family_groom_rel: "இந்த இனிய நிக்காஹ் வைபவத்திற்கு தங்களை அன்புடன் அழைக்கின்றனர்",
    family_invitation_msg: "\"தங்களின் மேலான வருகையும் உளமார்ந்த துஆக்களும் எங்கள் விழாவிற்கு பெருமை சேர்க்கும்.\"",
    event_tag: "புனித வைபவம்",
    event_title: "நிக்காஹ் வைபவ விபரம்",
    card_day_date_label: "நாளும் தேதியும்",
    card_day_val: "வியாழக்கிழமை",
    card_date_val: "24 டிசம்பர் 2026",
    card_time_label: "நிக்காஹ் நேரம்",
    card_time_val: "காலை 10:30 மணி",
    card_time_sub: "காலை சுப முகூர்த்தம்",
    card_venue_label: "இடம்",
    venue_name_full: "ரிச்வே கார்டன், கதீஜா மஹால்",
    venue_sub_location: "பட்டுக்கோட்டை - அதிரை ரோடு, அதிராம்பட்டினம்",
    venue_timing_badge: "வியாழக்கிழமை, 24 டிசம்பர் 2026 • காலை 10:30 மணி முதல்",
    btn_gcal: "கூகுள் காலண்டரில் சேர்க்க",
    btn_ics: "காலண்டர் கோப்பு (.ics)",
    venue_countdown_tag: "திருமண மண்டபம் & நேரக் கணக்கீடு",
    venue_section_title: "திருமண நிகழ்விடம் & நேரக் கணக்கீடு",
    venue_desc: "வியாழக்கிழமை, 24 டிசம்பர் 2026 காலை 10:30 மணியளவில் எங்கள் இல்லத் திருமண விழாவிற்கு தங்களை இன்முகத்துடன் வரவேற்கக் காத்திருக்கின்றோம்.",
    count_days: "நாட்கள்",
    count_hours: "மணி",
    count_minutes: "நிமிடம்",
    count_seconds: "வினாடி",
    countdown_status: "இன்ஷா அல்லாஹ், நிக்காஹ் நன்நாளை எதிர்நோக்கி...",
    countdown_today: "அல்ஹம்துலில்லாஹ், இன்று எங்களின் புனித நிக்காஹ் நன்னாள்!",
    btn_maps: "வழிகாட்டுதல் பெற",
    btn_copy_addr: "முகவரியை நகலெடுக்க",
    addr_toast: "மண்டப முகவரி நகலெடுக்கப்பட்டது!",
    final_tag: "நல்வாழ்த்துகளும் துஆவும்",
    final_title: "அன்பும் நம்பிக்கையும் இணையும் பந்தம்",
    quran_translation: "\"நீங்கள் அமைதி பெற உங்களுக்காக உங்கள் இனத்திலிருந்தே மனைவியரை உண்டாக்கி, உங்களுக்கிடையே அன்பையும் கருணையையும் ஏற்படுத்தியிருப்பது அவனது அத்தாட்சிகளில் உள்ளதாகும்.\"",
    quran_citation: "— திருக்குர்ஆன், சூரா அர்-ரூம் [30:21] —",
    dua_meaning: "\"அல்லாஹ் உங்களுக்கு பரக்கத் செய்யட்டும், உங்கள் மீது தன் அருளைப் பொழியட்டும், உங்கள் இருவரையும் நன்மையில் ஒன்றிணைக்கட்டும்.\"",
    final_quote: "\"புதிய வாழ்க்கைப் பாதையைத் தொடங்கும் இந்நாளில், தங்களின் பொன்னான வருகையும், இனிய புன்னகையும், தூய துஆவுமே எங்களுக்குக் கிடைக்கும் மாபெரும் பரிசாகும்.\"",
    guestbook_title: "மணமக்களுக்கு உங்கள் துஆவை அளியுங்கள்",
    guestbook_sub: "ஃபைஸ்ரா மற்றும் முகமது ஷேக் இஸ்மாயில் தம்பதியருக்கு உங்கள் வாழ்த்தை அனுப்புங்கள்",
    input_name_ph: "உங்கள் பெயர் / குடும்பப் பெயர்",
    input_dua_ph: "மணமக்களுக்கு உங்கள் துஆ அல்லது வாழ்த்தை எழுதுங்கள்...",
    btn_send_dua: "உங்கள் துஆவை சமர்ப்பிக்கவும்",
    dua_sent_toast: "ஜஸாக்கல்லாஹு கைர்! உங்கள் துஆ பதிவு செய்யப்பட்டது.",
    dua_val_error: "தயவுசெய்து உங்கள் பெயரையும் துஆவையும் உள்ளிடவும்.",
    btn_share_wa: "வாட்ஸ்அப் மூலம் பகிரவும்",
    btn_wa_rsvp: "வாட்ஸ்அப்பில் வாழ்த்துக்கள் தெரிவிக்க",
    footer_copy: "ஃபைஸ்ரா - ஷேக் திருமணம் • 24 டிசம்பர் 2026 • ரிச்வே கார்டன், கதீஜா மஹால்"
  },
  ar: {
    music_play: "تشغيل الموسيقى",
    music_playing: "الموسيقى تعمل",
    music_toast_start: "تشغيل أنشودة \"بارك الله لكما\"",
    music_toast_pause: "تم إيقاف الموسيقى",
    music_error_toast: "الملف الصوتي غير متوفر. يرجى إضافة baraka-allahu-lakuma.mp3 إلى public/audio/",
    bismillah_trans: "\"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\"",
    hero_proclamation: "مراسم عقد القران المبارك",
    hero_title: "عقد قران فائزة & شيخ",
    hero_announcement: "بفضل الله تعالى وتوفيقه، وببركة دعاء الوالدين والأهل الكرام، نتشرف بدعوتكم لحضور ومباركة مراسم عقد قران ابنتنا وابننا العزيزين ومشاركتنا فرحتنا.",
    envelope_subtitle: "دعوة زفاف إسلامية ملكية",
    envelope_date_preview: "الخميس، 24 ديسمبر 2026 • ريتشواي جاردن، خديجة محل",
    envelope_tap_hint: "اضغط على الزر في المنتصف لفتح الدعوة",
    btn_open_invitation: "فتح بطاقة الدعوة",
    scratch_instruction: "امسح البطاقة للكشف عن موعدنا المميز",
    btn_scratch_action: "امسح للكشف",
    scratch_revealed_names: "أ. فائزة & ر. محمد شيخ إسماعيل",
    scratch_revealed_sub: "الخميس، 24 ديسمبر 2026 • ريتشواي جاردن، خديجة محل",
    scratch_revealed_badge: "ميثاق غليظ مبارك",
    btn_scratch_reveal: "✦ اضغط للكشف الفوري عن التفاصيل ✦",
    music_choice_prompt: "هل ترغب في الاستماع إلى أنشودة \"بارك الله لكما\" أثناء تصفح الدعوة؟",

    btn_play_music: "تشغيل الموسيقى",
    btn_no_thanks: "لا، شكراً",
    couple_tag: "العروسان المباركان والعائلتان",
    couple_title: "روحان يجمعهما الإيمان والمودة",
    couple_desc: "انطلاقة في رحلة العمر في ظل السكينة والمودة والرحمة وعلى هدي وسنة نبينا محمد ﷺ.",
    bride_role: "العروس",
    bride_name: "أ. فائزة",
    bride_parents_title: "الكريمة المصونة لـ",
    bride_parents: "جناب ك.م. أحمد علي<br>&amp; أ. حجرين بيكم",
    groom_role: "العريس",
    groom_name: "ر. محمد شيخ إسماعيل",
    groom_parents_title: "النجل الكريم لـ",
    groom_parents: "(المرحوم) السيد م. رحمة الله<br>&amp; السيدة ر. برسانة بيكم",
    family_bride_side: "والدا العروس",
    family_bride_rel: "يتشرفان بطلب حضوركم ومباركتكم الكريمة",
    family_groom_side: "والدا العريس",
    family_groom_rel: "يدعوانكم بكل سرور ومحبة لمشاركتنا فرحة هذا الميثاق الغليظ",
    family_invitation_msg: "\"حضوركم الطيب ودعواتكم المباركة يضيئان حفلنا ويملآن قلوبنا سعادة وابتهاجاً.\"",
    event_tag: "الموعد المبارك",
    event_title: "مراسم عقد القران",
    card_day_date_label: "اليوم والتاريخ",
    card_day_val: "الخميس",
    card_date_val: "24 ديسمبر 2026",
    card_time_label: "موعد النكاح",
    card_time_val: "10:30 صباحاً",
    card_time_sub: "مراسم الصباح",
    card_venue_label: "مكان الحفل",
    venue_name_full: "ريتشواي جاردن، خديجة محل",
    venue_sub_location: "طريق باتوكوتاي - أديراي، أديزامباتينام",
    venue_timing_badge: "الخميس، 24 ديسمبر 2026 • ابتداءً من 10:30 صباحاً",
    btn_gcal: "إضافة إلى تقويم Google",
    btn_ics: "تحميل ملف التقويم (.ics)",
    venue_countdown_tag: "موقع الحفل والعد التنازلي",
    venue_section_title: "قاعة الزفاف والعد التنازلي",
    venue_desc: "نتطلع ببالغ الشوق والسرور لاستقبالكم ومشاركتنا أبهج اللحظات في هذه القاعة المباركة يوم الخميس 24 ديسمبر 2026 الساعة 10:30 صباحاً.",
    count_days: "يوم",
    count_hours: "ساعة",
    count_minutes: "دقيقة",
    count_seconds: "ثانية",
    countdown_status: "حتى نقول 'قبلت النكاح' إن شاء الله",
    countdown_today: "الحمد لله، اليوم هو يوم عقد القران المبارك!",
    btn_maps: "الحصول على الاتجاهات",
    btn_copy_addr: "نسخ العنوان",
    addr_toast: "تم نسخ عنوان القاعة بنجاح!",
    final_tag: "البركة والدعاء الصادق",
    final_title: "ميثاق غليظ بالمودة والإيمان",
    quran_translation: "\"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً\"",
    quran_citation: "— سورة الروم [30:21] —",
    dua_meaning: "\"«بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ»\"",
    final_quote: "\"ونحن نخطو معاً أولى خطواتنا في هذا الدرب الطاهر، فإن تشريفكم ودعواتكم الصادقة هي أغلى وأجمل ما نحظى به.\"",
    guestbook_title: "أرسل دعاءك ومباركتك للعروسين",
    guestbook_sub: "شارك فائزة ومحمد شيخ إسماعيل بأطيب الدعوات والتهاني",
    input_name_ph: "اسمك الكريم / العائلة",
    input_dua_ph: "اكتب دعاءك المبارك أو تهنئتك للعروسين...",
    btn_send_dua: "إرسال الدعاء والتهنئة",
    dua_sent_toast: "جزاكم الله خيراً! تم تسجيل دعائكم المبارك.",
    dua_val_error: "يرجى إدخال الاسم والدعاء المبارك.",
    btn_share_wa: "مشاركة الدعوة عبر واتساب",
    btn_wa_rsvp: "إرسال التهاني عبر واتساب",
    footer_copy: "فائزة & شيخ • 24 ديسمبر 2026 • ريتشواي جاردن، خديجة محل"
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
  initScratchCard();
  initAudioSystem();
  initCalendarAndMapActions();
  initWhatsAppButton();
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
      const lang = tab.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  if (!i18n[lang]) lang = 'en';
  currentLanguage = lang;
  localStorage.setItem('wedding_lang', lang);

  const dict = i18n[lang];
  const html = document.documentElement;

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
  const dict = i18n[lang] || i18n.en;
  const gcalBtn = document.getElementById('add-gcal-btn');
  if (gcalBtn) {
    const title = encodeURIComponent(
      lang === 'ar' ? 'عقد قران: فائزة & محمد شيخ إسماعيل' :
      lang === 'ta' ? 'நிக்காஹ் வைபவம்: ஃபைஸ்ரா & முகமது ஷேக் இஸ்மாயில்' :
      'Nikah Ceremony: A. Faizra & R. Mohamed Sheik Ismail (Faiz Weds Sheik)'
    );
    const details = encodeURIComponent(
      `Under the divine benevolence of Allah (SWT), you are warmly invited to the Nikah of A. Faizra & R. Mohamed Sheik Ismail on Thursday, 24 December 2026 at 10:30 AM.\n\nVenue: ${dict.venue_name_full}`
    );
    const location = encodeURIComponent('Richway Garden, Khadeja Mahal, Adirampattinam, Tamil Nadu 614701');
    const dates = '20261224T050000Z/20261224T090000Z';
    gcalBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  }
}

/* ==========================================================================
   ORIGINAL OPENING SCREEN (First Screen -> Click Centre Button -> Invitation Opens)
   ========================================================================== */
function initEnvelopeOpener() {
  const overlay = document.getElementById('envelope-overlay');
  const openBtn = document.getElementById('open-invitation-btn');
  const waxSeal = document.getElementById('wax-seal-btn');

  if (!overlay) return;

  function openEnvelope() {
    if (overlay.classList.contains('opened')) return;
    overlay.classList.add('opened');

    // Trigger celebration sparkles
    if (window.particleSystem && typeof window.particleSystem.burst === 'function') {
      window.particleSystem.burst();
    }

    // Scroll to top of main invitation smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clean up DOM accessibility after transition finishes
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
    }, 950);
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
    waxSeal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
      }
    });
  }
}

/* ==========================================================================
   1. INTERACTIVE SCRATCH CARD WITH TOUCH, MOUSE & CENTRE BUTTON SCRATCH
   ========================================================================== */
function initScratchCard() {
  const canvas = document.getElementById('scratch-canvas');
  const container = document.getElementById('scratch-card-box');
  const fallbackBtn = document.getElementById('scratch-reveal-btn');
  const centerAction = document.getElementById('scratch-center-action');
  const centerScratchBtn = document.getElementById('scratch-center-btn');
  const musicChoiceCard = document.getElementById('music-choice-container');

  if (!canvas || !container) return;
  const ctx = canvas.getContext('2d');

  let isDrawing = false;
  let isRevealed = false;
  let isAutomatedScratching = false;

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    drawScratchCover();
  }

  function drawScratchCover() {
    if (isRevealed) return;
    const w = canvas.width;
    const h = canvas.height;

    // Deep Royal Sapphire Blue Base
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#0a214d');
    gradient.addColorStop(0.5, '#071736');
    gradient.addColorStop(1, '#020814');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Elegant Islamic Gold Pattern & Geometric Diamond Motifs
    ctx.save();
    ctx.strokeStyle = 'rgba(223, 183, 108, 0.22)';
    ctx.lineWidth = 1.2;
    const step = 32;
    for (let x = 0; x < w + step; x += step) {
      for (let y = 0; y < h + step; y += step) {
        ctx.beginPath();
        ctx.moveTo(x, y - 10);
        ctx.lineTo(x + 10, y);
        ctx.lineTo(x, y + 10);
        ctx.lineTo(x - 10, y);
        ctx.closePath();
        ctx.stroke();
      }
    }

    // Gold Border Frame
    ctx.strokeStyle = '#dfb76c';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, w - 12, h - 12);

    ctx.strokeStyle = 'rgba(247, 232, 189, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, w - 24, h - 24);

    // Scratch Cover Center Proclamation
    ctx.fillStyle = '#dfb76c';
    ctx.font = 'bold 22px "Cinzel Decorative", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Faiz Weds Sheik', w / 2, h / 2 - 20);

    ctx.fillStyle = '#f7e8bd';
    ctx.font = '13px "Plus Jakarta Sans", Montserrat, sans-serif';
    ctx.fillText('✦ Royal Islamic Nikah Invitation ✦', w / 2, h / 2 + 18);
    ctx.restore();
  }

  resizeCanvas();
  window.addEventListener('resize', () => {
    if (!isRevealed) {
      resizeCanvas();
    }
  });

  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function scratch(pos, radius = 28) {
    if (isRevealed) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fill();

    // If manual scratch starts, hide the centre button overlay smoothly
    if (centerAction && !isAutomatedScratching) {
      centerAction.style.opacity = '0';
      centerAction.style.pointerEvents = 'none';
    }

    checkProgressDebounced();
  }

  let progressCheckTimer = null;
  function checkProgressDebounced() {
    if (progressCheckTimer) return;
    progressCheckTimer = setTimeout(() => {
      progressCheckTimer = null;
      checkRevealProgress();
    }, 150);
  }

  function checkRevealProgress() {
    if (isRevealed) return;
    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparentCount = 0;
      const stride = 16; // Sample every 16th pixel for high performance

      for (let i = 3; i < data.length; i += 4 * stride) {
        if (data[i] === 0) {
          transparentCount++;
        }
      }

      const ratio = transparentCount / (data.length / (4 * stride));
      if (ratio > 0.38) {
        completeReveal();
      }
    } catch (e) {
      // In case of any canvas security error, reveal smoothly
      completeReveal();
    }
  }

  function completeReveal() {
    if (isRevealed) return;
    isRevealed = true;
    canvas.classList.add('fade-out');

    if (centerAction) {
      centerAction.style.opacity = '0';
      centerAction.style.pointerEvents = 'none';
      setTimeout(() => {
        centerAction.style.display = 'none';
      }, 500);
    }

    if (fallbackBtn) {
      fallbackBtn.style.display = 'none';
    }

    triggerGoldSparkleBurst();

    if (musicChoiceCard) {
      musicChoiceCard.classList.add('visible');
    }
  }

  /**
   * Automated Scratch Animation triggered when clicking "Scratch to Reveal" button
   * Smoothly scratches circular radial patches across the card over ~1.2s before dissolving completely
   */
  function startAutomatedScratchAnimation() {
    if (isRevealed || isAutomatedScratching) return;
    isAutomatedScratching = true;

    if (centerAction) {
      centerAction.style.pointerEvents = 'none';
      centerAction.style.transition = 'opacity 0.4s ease';
      centerAction.style.opacity = '0';
    }

    const w = canvas.width;
    const h = canvas.height;
    const totalSteps = 30;
    let step = 0;

    // Generate distributed scratch points across the canvas
    const scratchPoints = [];
    // Start from center outwards in an organic spiral
    for (let i = 0; i < totalSteps; i++) {
      const angle = i * 0.75;
      const radius = (i / totalSteps) * Math.min(w, h) * 0.55;
      const px = w / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 40;
      const py = h / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 30;
      scratchPoints.push({ x: Math.max(10, Math.min(w - 10, px)), y: Math.max(10, Math.min(h - 10, py)) });
    }

    const interval = setInterval(() => {
      if (step >= scratchPoints.length || isRevealed) {
        clearInterval(interval);
        completeReveal();
        return;
      }

      const p = scratchPoints[step];
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 38 + Math.random() * 15, 0, Math.PI * 2);
      ctx.fill();

      // Mini sparkles during automatic scratch
      if (step % 4 === 0 && window.particleSystem && typeof window.particleSystem.burst === 'function') {
        window.particleSystem.burst();
      }

      step++;
    }, 38);
  }

  // Connect Centre Action Button: "Scratch to Reveal"
  if (centerScratchBtn) {
    centerScratchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      startAutomatedScratchAnimation();
    });
  }

  // Manual Pointer & Touch Events
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    scratch(getPointerPos(e));
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    scratch(getPointerPos(e));
  });

  window.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    scratch(getPointerPos(e));
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    scratch(getPointerPos(e));
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDrawing = false;
  });

  // Accessible Fallback Reveal Button
  if (fallbackBtn) {
    fallbackBtn.addEventListener('click', completeReveal);
  }

  // Music Choice Buttons (Play Music vs No Thanks)
  const playMusicBtn = document.getElementById('choice-play-music');
  const noThanksBtn = document.getElementById('choice-no-thanks');

  if (playMusicBtn) {
    playMusicBtn.addEventListener('click', () => {
      window.startWeddingMusic();
      musicChoiceCard.classList.remove('visible');
      setTimeout(() => {
        musicChoiceCard.style.display = 'none';
      }, 600);
    });
  }

  if (noThanksBtn) {
    noThanksBtn.addEventListener('click', () => {
      const dict = i18n[currentLanguage] || i18n.en;
      showToast(dict.music_toast_pause || 'Enjoy the wedding invitation!');
      musicChoiceCard.classList.remove('visible');
      setTimeout(() => {
        musicChoiceCard.style.display = 'none';
      }, 600);
    });
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

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#f7e8bd';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      if (this.glow) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#dfb76c';
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  window.particleSystem = {
    burst() {
      for (let i = 0; i < 40; i++) {
        const p = new Particle();
        p.x = width / 2 + (Math.random() - 0.5) * 200;
        p.y = height / 3 + (Math.random() - 0.5) * 200;
        p.speedY = (Math.random() - 0.5) * 3;
        p.speedX = (Math.random() - 0.5) * 3;
        p.size = Math.random() * 3 + 1.5;
        p.opacity = 1;
        particles.push(p);
      }
    }
  };

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function triggerGoldSparkleBurst() {
  if (window.particleSystem) {
    window.particleSystem.burst();
  }
}

/* ==========================================================================
   3. LIVE COUNTDOWN TO THURSDAY, 24 DECEMBER 2026, 10:30 AM
   ========================================================================== */
function initCountdownTimer() {
  // Thursday, 24 December 2026 at 10:30 AM (Asia/Kolkata +05:30)
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
   4. BACKGROUND MUSIC SYSTEM — "BARAKA ALLAHU LAKUMA"
   ========================================================================== */
function initAudioSystem() {
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicBtnText = document.getElementById('music-btn-text');
  const muteToggleBtn = document.getElementById('mute-toggle-btn');
  const speakerIconPath = document.getElementById('speaker-icon-path');
  const audioElement = document.getElementById('wedding-audio');

  let isPlaying = false;
  let isMuted = false;
  let audioCtx = null;
  let synthInterval = null;
  let masterGain = null;
  let isUsingAudioFile = false;

  // Speaker icons for Mute / Unmute
  const UNMUTED_SVG = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
  const MUTED_SVG = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";

  // Mute / Unmute Toggle Button Handler
  if (muteToggleBtn) {
    muteToggleBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (audioElement) {
        audioElement.muted = isMuted;
        audioElement.volume = 1.0;
      }
      if (masterGain && audioCtx) {
        masterGain.gain.setValueAtTime(isMuted ? 0 : 0.75, audioCtx.currentTime);
      }
      muteToggleBtn.classList.toggle('muted', isMuted);
      if (speakerIconPath) {
        speakerIconPath.setAttribute('d', isMuted ? MUTED_SVG : UNMUTED_SVG);
      }
      showToast(isMuted ? "Audio Muted" : "Audio Unmuted");
    });
  }

  // Harmonious pentatonic Oud / Harp melody representing Baraka Allahu Lakuma
  function playNote(freq, time, duration = 3.5) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    noteGain.gain.setValueAtTime(0, time);
    noteGain.gain.linearRampToValueAtTime(0.28, time + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  function startSynthHarmony() {
    isUsingAudioFile = false;
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.75, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    let step = 0;
    const sequence = [
      [146.83, 293.66, 440.00], // D3, D4, A4
      [220.00, 369.99],         // A3, F#4
      [146.83, 329.63, 493.88], // D3, E4, B4
      [293.66, 587.33],         // D4, D5
      [220.00, 369.99, 440.00]  // A3, F#4, A4
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
    if (synthInterval) clearInterval(synthInterval);
    synthInterval = setInterval(schedulePhrase, 3600);
  }

  function stopAtmosphere() {
    if (audioElement && !audioElement.paused) {
      audioElement.pause();
    }
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    if (audioCtx && masterGain) {
      masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
    }
  }

  function setPlayingState(playing) {
    isPlaying = playing;
    const dict = i18n[currentLanguage] || i18n.en;
    if (musicToggleBtn) {
      musicToggleBtn.classList.toggle('music-playing', playing);
    }
    if (musicBtnText) {
      musicBtnText.textContent = playing ? dict.music_playing : dict.music_play;
    }
  }

  // Handle native audio element events
  if (audioElement) {
    audioElement.addEventListener('playing', () => {
      isUsingAudioFile = true;
      setPlayingState(true);
    });

    audioElement.addEventListener('pause', () => {
      if (isUsingAudioFile) {
        setPlayingState(false);
      }
    });

    audioElement.addEventListener('error', () => {
      console.warn("Expected MP3 'public/audio/baraka-allahu-lakuma.mp3' not found on server.");
      if (isPlaying && isUsingAudioFile) {
        startSynthHarmony();
      }
    });
  }

  window.startWeddingMusic = function() {
    if (isPlaying) return;
    const dict = i18n[currentLanguage] || i18n.en;

    // Immediately create / resume AudioContext during user click gesture
    if (!audioCtx) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(isMuted ? 0 : 0.75, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
      } catch (e) {
        console.warn('AudioContext creation:', e);
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (audioElement) {
      audioElement.loop = true;
      audioElement.muted = isMuted;
      audioElement.volume = 1.0;

      // Crucial: Call play() synchronously inside the user interaction handler
      const playPromise = audioElement.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          isUsingAudioFile = true;
          setPlayingState(true);
          showToast(dict.music_toast_start);
        }).catch((err) => {
          console.warn('Audio file play prevented (' + err.message + ') — switching to serene harmony.');
          isUsingAudioFile = false;
          setPlayingState(true);
          startSynthHarmony();
          showToast(dict.music_toast_start);
        });
      } else {
        isUsingAudioFile = true;
        setPlayingState(true);
        showToast(dict.music_toast_start);
      }
    } else {
      isUsingAudioFile = false;
      setPlayingState(true);
      startSynthHarmony();
      showToast(dict.music_toast_start);
    }
  };

  window.stopWeddingMusic = function() {
    if (!isPlaying) return;
    stopAtmosphere();
    setPlayingState(false);
    const dict = i18n[currentLanguage] || i18n.en;
    showToast(dict.music_toast_pause);
  };

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        window.stopWeddingMusic();
      } else {
        window.startWeddingMusic();
      }
    });
  }
}


/* ==========================================================================
   5. CALENDAR & VENUE ACTIONS
   ========================================================================== */
function initCalendarAndMapActions() {
  // Copy Venue Address
  const copyAddressBtn = document.getElementById('copy-address-btn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const address = 'Richway Garden, Khadeja Mahal, Pattukkottai - Adirai Road, Adirampattinam, Tamil Nadu 614701';
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

  // WhatsApp Share Invitation Link
  const shareWaBtn = document.getElementById('share-whatsapp-btn');
  if (shareWaBtn) {
    shareWaBtn.addEventListener('click', () => {
      const canonicalUrl = (window.location && window.location.origin && window.location.origin !== 'null') 
        ? (window.location.origin + window.location.pathname) 
        : 'https://faizsheikinvitation.vercel.app/';

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
          '📍 المكان: ريتشواي جاردن، خديجة محل\n\n' +
          'حضوركم ودعواتكم الصادقة تشرفنا وتسعدنا!\n\n' +
          'رابط بطاقة الدعوة الملكية: ' + canonicalUrl
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
          '📍 இடம்: ரிச்வே கார்டன், கதீஜா மஹால்\n\n' +
          'தங்களின் வருகையும் நல்லாசிகளும் எங்கள் இல்லத்திற்கு பெருமை சேர்க்கும்!\n\n' +
          'அழைப்பிதழைக் காண: ' + canonicalUrl
        );
      } else {
        text = encodeURIComponent(
          '✨ In the Name of Allah, the Most Gracious, the Most Merciful ✨\n\n' +
          'You are warmly invited to the sacred Nikah Ceremony of:\n\n' +
          '👰 A. Faizra (B.Sc., MCA)\n' +
          'D/o Janab K.M. Ahamed Ali & A. Hajreen Begum\n\n' +
          '🤵 R. Mohamed Sheik Ismail (B.E.)\n' +
          'S/o (Late) Mr. M. Rahumathullah & Mrs. R. Barsana Begum\n\n' +
          '📅 Date: Thursday, 24 December 2026\n' +
          '⏰ Time: 10:30 AM\n' +
          '📍 Venue: Richway Garden, Khadeja Mahal\n\n' +
          'Your presence and prayers will be our greatest blessing!\n\n' +
          'View the Royal Wedding Card: ' + canonicalUrl
        );
      }

      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}

/* ==========================================================================
   WHATSAPP DIRECT BUTTON HANDLER
   ========================================================================== */
function initWhatsAppButton() {
  const directBtn = document.getElementById('direct-whatsapp-btn');
  if (!directBtn) return;

  // Placeholder phone number configuration (without spaces or plus sign)
  // If the user hasn't provided a specific phone number, clicking prompts them or opens general WhatsApp compose
  const configuredPhoneNumber = ""; // Empty string indicates waiting for user configuration

  directBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const wishText = encodeURIComponent("Assalamu Alaikum! Hearty congratulations on the upcoming Nikah of Faizra & Mohamed Sheik Ismail!");

    if (configuredPhoneNumber && configuredPhoneNumber.trim().length > 5) {
      const cleanPhone = configuredPhoneNumber.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanPhone}?text=${wishText}`, '_blank');
    } else {
      // Open general WhatsApp compose with pre-filled message
      window.open(`https://api.whatsapp.com/send?text=${wishText}`, '_blank');
    }
  });
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
    'SUMMARY:Nikah Ceremony: Faiz Weds Sheik (A. Faizra & R. Mohamed Sheik Ismail)',
    'DESCRIPTION:Solemnization of the Nikah of A. Faizra (B.Sc., MCA) and R. Mohamed Sheik Ismail (B.E.). With prayers from Janab K.M. Ahamed Ali & A. Hajreen Begum and (Late) Mr. M. Rahumathullah & Mrs. R. Barsana Begum.',
    'LOCATION:Richway Garden, Khadeja Mahal',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Nikah_Faiz_Weds_Sheik_24Dec2026.ics';
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
      text: 'Hearty congratulations to Faizra and Mohamed Sheik Ismail! Counting down the days to celebrate your Nikah at Richway Garden, Khadeja Mahal!'
    }
  ];

  let storedDuas = [];
  try {
    const raw = localStorage.getItem('faiz_sheik_duas_v4');
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
      localStorage.setItem('faiz_sheik_duas_v4', JSON.stringify(storedDuas));
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
