# Faiz Weds Sheik — Luxury Multilingual Islamic Nikah Invitation Website

A bespoke, royal digital wedding card website designed for the solemnization of the Nikah of:

* **Bride:** A. Faizra (B.Sc., MCA) — *D/o Janab K.M. Ahamed Ali & A. Hajreen Begum*
* **Groom:** R. Mohamed Sheik Ismail (B.E.) — *S/o (Late) Mr. M. Rahumathullah & Mrs. R. Barsana Begum*
* **Date:** Thursday, 24 December 2026
* **Time:** 10:30 AM
* **Venue:** Richway Garden, Khadeja Mahal, Pattukkottai - Adirai Road, Adirampattinam, Tamil Nadu 614701
* **Theme:** Royal Sapphire Blue, Midnight Lapis, Champagne Gold, and Ivory
* **Website URL:** [https://faizwedssheik.vercel.app](https://faizwedssheik.vercel.app) (Fallback: [https://faizsheikinvitation.vercel.app](https://faizsheikinvitation.vercel.app))

---

### Five Core Website Sections

1. **Section 1 — Welcome & Scratch Card:**
   * Traditional Arabic calligraphy: *"Bismillahir Rahmanir Raheem"*.
   * Proclamation: *"Faiz Weds Sheik"*.
   * Interactive scratch card (`#scratch-canvas`) with mouse and touch support.
   * Reveals initials `F & M`, names: *A. Faizra & R. Mohamed Sheik Ismail*, date & venue, with a gold shimmer sparkle effect.
   * Accessible tap-to-reveal button for screen readers and keyboard users.
   * Post-reveal choice prompt with **"Play Music"** and **"No Thanks"** options (strictly non-autoplay).
2. **Section 2 — The Couple & Their Families:**
   * Side-by-side balanced cards for bride and groom with academic degrees, monograms, and parents' names.
   * Respected elders and family pillars for both bride and groom.
3. **Section 3 — Nikah Invitation:**
   * Respectful Islamic invitation phrasing.
   * Thursday, 24 December 2026 at 10:30 AM.
   * Add to Google Calendar & Apple/Outlook `.ics` download.
4. **Section 4 — Venue & Live Countdown:**
   * Full venue title: **Richway Garden, Khadeja Mahal**.
   * Real-time countdown timer to 24 December 2026 at 10:30 AM (Days, Hours, Minutes, Seconds).
   * Verified Google Maps directions button & instant clipboard address copy.
5. **Section 5 — Final Invitation & Dua:**
   * Surah Ar-Rum [30:21] Quranic verse.
   * Prophetic blessing Dua (*"Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fee khayr"*).
   * Interactive guest dua / blessings guestbook.
   * WhatsApp invitation sharing & direct WhatsApp button.

---

### Multilingual Features (English | தமிழ் | العربية)

* **Instant Language Switcher:** Segmented tabs **[ English ] [ தமிழ் ] [ العربية ]** with zero page reload.
* **Automatic Layout & Typography Adaptation:**
  * **العربية (Arabic):** Right-to-Left (RTL) layout, Amiri typography, and native Arabic phrasing.
  * **தமிழ் (Tamil):** Google Fonts Noto Serif Tamil Unicode typography.
  * **English:** Luxury serif and royal gold typography.

---

### Audio Integration

* The site uses an ambient pentatonic synthesizer harmony with gentle oud/harp tones via WebAudio API.
* An optional custom MP3 file can be placed at `assets/ambient_melody.mp3`.
* Music only plays after explicit visitor choice (**Play Music**).

---

### How to View Locally

Open `index.html` directly in any web browser or serve with any static server:
```bash
npx serve .
# or
python -m http.server 8080
```
