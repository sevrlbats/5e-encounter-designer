# 2d6 Kobolds - Handoff Document

## What This Is

**2d6 Kobolds** is a single-page D&D 5e (2024 SRD 5.2) encounter designer and initiative card printer. It lives at **dragonizer.net/kobolds/** and is a companion app to **Dragonizer** (dragonizer.net/dragonizer/), a homebrew 5e character creator. Both are built by the same user (sevrL_bats / sevrlbats.bsky.social).

The user is a hands-on developer who iterates fast, thinks in features, and gives visual direction via screenshots. They'll often bundle 3-5 requests into a single message. They test in Chrome via localhost:8090 and expect you to verify in-browser when possible.

## Architecture Philosophy

**Single-file, zero-build, zero-dependencies.** The entire app is one HTML file (`kobolds.html`) with embedded CSS and JS. Monster data lives in `monsters.js` as a plain JS array assigned to `window.MONSTER_DATA`. There is no framework, no bundler, no npm. It runs by opening the file in a browser.

This is intentional. The user values simplicity, portability, and the ability to FTP-deploy the whole app as two files.

## Repository Structure

```
C:\5e Encounter Designer\
  kobolds.html          # THE app (~3700 lines: HTML + CSS + JS)
  monsters.js           # 328 SRD monsters (~16k lines, pure data)
  .htaccess             # DirectoryIndex kobolds.html
  .github/workflows/
    deploy.yml          # GitHub Actions: lftp FTP upload to Bluehost
  .gitignore            # Ignores: encounter-designer.html, extract_monsters.py, monsters.json, reference/
  reference/            # SRD PDFs and extracted text files (gitignored)
  encounter-designer.html  # Legacy prototype (gitignored)
```

**Git remote:** `https://github.com/sevrlbats/5e-encounter-designer.git`
**Branch:** `master`
**Deploy:** Push to master triggers GitHub Actions -> lftp upload of `kobolds.html`, `monsters.js`, `.htaccess` to Bluehost at `{SFTP_REMOTE_PATH}/kobolds/`
**Live URL:** https://dragonizer.net/kobolds/

## CSS Variables (the palette)

```css
--parchment: #f4e8c1;      /* Main background, light cream */
--parchment-dark: #e8d5a3;  /* Slightly darker variant */
--ink: #2c1810;             /* Primary text, dark brown */
--ink-light: #5c4033;       /* Secondary text, medium brown */
--accent-red: #8b1a1a;      /* Headers, danger, dark red */
--accent-gold: #b8860b;     /* Buttons, accents, borders */
--accent-green: #2d5a1e;    /* Unused currently but defined */
--border-dark: #3c2415;     /* Panel borders */
--card-bg: #faf6ee;         /* Monster card backgrounds */
--low: #2d6a2d;             /* Low difficulty (green) */
--moderate: #b8860b;        /* Moderate difficulty (gold) */
--high: #8b1a1a;            /* High difficulty (red) */
```

**IMPORTANT:** There is NO `--ink-dark` variable. Previous sessions accidentally used it. All references have been cleaned up to use `--ink` instead. Don't reintroduce it.

## Layout

Three-column CSS Grid: `340px | 1fr | 360px` (with responsive breakpoints at 1200px and 900px).

- **Left panel** (`.party-panel`): Party config (players + level on same row), difficulty selector, XP budget display, encounter list, Clear Encounter button
- **Center panel** (`.monster-panel`): Search + filters + sort, monster card grid, "Add New" button in header
- **Right panel** (`.detail-panel`): Stat block viewer, Clone button (appears when monster selected)

## Header

Six buttons in a flex row: **Homebrew** (orange, leftmost) | Print | Summary | Save Session | Settings | About

Between the title and buttons sits an inline Dragonizer cross-promo link (centered via `flex:1`, muted parchment text with bold gold app name).

The Homebrew button uses a distinct orange style (`#d4700a` background, white text/border) to match Dragonizer's homebrew button. All other header buttons are transparent with gold borders.

## Key Systems

### Monster Data Flow
1. `monsters.js` defines `window.MONSTER_DATA` (array of 328 SRD monsters)
2. `loadMonsters()` copies into `allMonsters[]`, then calls `mergeHomebrewIntoAllMonsters()` to add user homebrew
3. `filterMonsters()` applies search/type/CR/size/source/sort to produce `filteredMonsters[]`
4. `renderMonsterGrid()` renders cards from `filteredMonsters[]`
5. Clicking a card calls `selectMonster()` -> `renderStatBlock()` in the right panel

### Encounter Building
- `encounter[]` is an array of `{monster, count}` objects
- Add via `+` button on cards or the encounter list buttons (`-`, `+`, edit, remove)
- `recalcBudget()` recalculates everything after any change
- XP budgets come from `XP_BUDGET_TABLE` (SRD 5.2 encounter building rules)

### Encounter Persistence
- **Auto-save:** Every mutation calls `saveEncounterToStorage()` -> localStorage key `2d6kobolds_encounter`
- Serialized as `[{name, count, isHomebrew}]` (not full monster objects, since references break across reloads)
- `loadEncounterFromStorage()` looks up monsters by name + isHomebrew flag in `allMonsters[]`
- Only cleared by explicit "Clear Encounter" button (calls `clearEncounterStorage()`)

### Session Manager
- localStorage key: `2d6kobolds_sessions`
- Data: `{sessions: [{id, name, encounters: [{id, name, monsters: [{name,count,isHomebrew}], partySize, partyLevel, difficulty}]}]}`
- Accordion UI: click session header to expand, see saved encounters with Load/Delete buttons
- On save: modal closes, toast notification appears center-screen, encounter optionally clears (controlled by `clearOnSave` setting)

### Homebrew System
- localStorage key: `2d6kobolds_homebrew_monsters`
- Monsters stored as full objects with `isHomebrew: true` flag
- `mergeHomebrewIntoAllMonsters()` rebuilds `allMonsters[]` = SRD + homebrew (removes old homebrew first, then re-adds)
- Homebrew Manager modal: header button opens list of all homebrew with edit/delete, plus Create/Export/Import buttons
- Homebrew Editor modal: full form for all monster fields (name, stats, abilities, actions, traits, legendary actions)
- Import/Export via JSON files

### Edit Encounter Monster
- Pencil button (&#9998;) on each encounter monster entry
- Sets `replacingEncounterIndex` to the encounter array index
- Opens homebrew editor pre-filled with a clone of the monster
- On save: the new homebrew monster replaces the encounter entry at `replacingEncounterIndex`
- **Critical bug fix applied:** `replacingEncounterIndex` must be captured BEFORE `closeHomebrewEditor()` is called, because close resets it to -1

### Settings
- localStorage key: `2d6kobolds_settings`
- Loaded with `Object.assign(appSettings, saved)` pattern to preserve new defaults when loading old saved data
- Four toggles: B&W Print, Preroll Initiative, Print Summary Sheet, Clear Encounter on Save
- Defaults: `{bwPrint: true, prerollInitiative: false, printSummarySheet: true, clearOnSave: true}`

### Print System
- Print Preview: gray background (#e0e0e0) with white paper container (`.print-paper`), box shadow for document feel
- Two buttons: "Print" and "Save as PDF" (both call `window.print()`, user selects destination)
- Initiative cards: one per monster instance, includes stats, actions (abbreviated), HP tracking boxes
- Preroll Initiative: when enabled, cards show a pre-rolled d20 + initiative modifier
- Summary Sheet: encounter overview table printed before the cards
- B&W mode: `body.bw-print` class strips colors for clean black & white printing
- `@media print` rules hide the preview chrome and show only the cards

### Toast Notification
- Fixed position center-screen (`top:50%; left:50%; transform:translate(-50%,-50%)`)
- Scale-in animation with opacity transition
- 2500ms default duration
- Used for session save confirmations

## Keyboard Handler

Single `keydown` listener for Escape key. Closes modals in priority order:
1. Homebrew Editor (highest priority - it's on top)
2. Homebrew Manager
3. Session Manager
4. Settings
5. About
6. Print Preview (lowest)

## Monster Object Shape

```javascript
{
  name: "Aboleth",
  size: "Large",
  type: "Aberration",
  alignment: "Lawful Evil",
  ac: 17,
  hp: 150,
  hpDice: "20d10 + 40",
  speed: "10 ft., Swim 40 ft.",
  str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18,
  cr: "10",
  xp: 5900,
  initiative: 7,
  senses: "Darkvision 120 ft.; Passive Perception 20",
  languages: "Deep Speech; telepathy 120 ft.",
  skills: "History +12, Perception +10",
  resistances: "",
  immunities: "",
  vulnerabilities: "",
  traits: [{name: "Amphibious", description: "..."}],
  actions: [{name: "Multiattack", description: "..."}],
  bonusActions: [],
  reactions: [],
  legendaryActions: [{name: "Lash", description: "..."}],
  isHomebrew: false  // true for user-created monsters
}
```

## CSS Class Conventions

- **Panels:** `.panel`, `.party-panel`, `.monster-panel`, `.detail-panel`
- **Headers:** `.panel-header` (red underline, small-caps), `.panel-header-row` (flex row with header + buttons)
- **Modals:** `.small-modal-overlay` + `.small-modal` for small dialogs, `.hb-modal-overlay` + `.hb-modal` for the big homebrew editor, `.session-modal` for session manager
- **Buttons:** `.header-btn` (header bar), `.stat-block-btn` (stat block area), `.hb-btn` (homebrew controls), `.diff-btn` (difficulty selector)
- **Monster cards:** `.monster-card`, `.homebrew-card` (dashed gold border for homebrew)
- **Encounter list:** `.encounter-item`, `.encounter-monster-info` (clickable), `.edit-encounter-monster` (pencil button)
- **State classes:** `.active` (on modal overlays), `.visible` (on clone button, toast), `.bw-print` (on body)

## Common Patterns

- **Settings load safety:** Always use `Object.assign(appSettings, JSON.parse(saved))` so new defaults survive old localStorage data
- **Homebrew merge:** `mergeHomebrewIntoAllMonsters()` strips old homebrew from `allMonsters`, then re-adds current homebrew. Always call after any homebrew mutation.
- **Encounter serialization:** Store `{name, count, isHomebrew}` not full objects. Resolve on load by looking up in `allMonsters`.
- **Modal open/close:** Add/remove `.active` class on overlay elements. Overlay click-to-close uses `if(event.target===this)` guard.
- **Dynamic form entries:** Traits/actions/reactions in homebrew editor use `addDynamicEntry(listId)` / `getDynamicEntries(listId)` pattern.

## Dragonizer Relationship

The user maintains both apps. Cross-promo links exist in both headers. When styling things to "match Dragonizer," reference these specific color values:
- **Dragonizer Homebrew button:** `bg: #d4700a`, `color: white`, `border: white`
- **Dragonizer Add New button:** `bg: #8b0000` (accent-red), `color: #d4700a`, `border: #d4700a`
- **Dragonizer "New" button:** transparent bg, gold text/border (same as existing header buttons)
- **Cross-promo style:** Centered flex text, muted opacity, product name in bold gold

## What the User Cares About

- **Visual consistency** with Dragonizer (colors, button styles, layout feel)
- **Print output quality** - this gets used at actual D&D tables
- **Fast iteration** - they'll give 3-5 features at once, expect them all done
- **Browser testing** - they run on localhost:8090, test in Chrome, and often provide screenshots with annotations
- **Git discipline** - commit after each batch, push to trigger deploy, descriptive commit messages
- **The left panel scroll** - they've mentioned wanting to fix scrolling on the left panel, this may come up as a future request

## Testing Checklist

When making changes, verify:
1. Page loads without console errors
2. Encounter persistence survives refresh
3. Homebrew monsters appear with HB badge and dashed border
4. Print preview shows cards correctly (try B&W mode too)
5. Session save/load round-trips correctly
6. Settings persist across reload (especially new settings added to defaults)
7. Escape key closes the topmost modal
8. Edit encounter monster actually replaces the entry (not just creates a new one)
