# DCIT 324 — Task Manager Screen (Expo / React Native)

Rebuild of the reference Figma task manager home screen, extended with
5 extra categories (7 total) and 5 extra ongoing tasks (8 total).

## Run

```bash
cd Task-Manager-324-assignment
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `a` / `i` / `w`.

## Structure

- `App.js` — screen composition (vertical `ScrollView`, horizontal categories row)
- `src/theme.js` — colours, radii, spacing tokens
- `src/components/` — `Header`, `SearchBar`, `SectionHeader`, `CategoryCard`, `TaskCard`
- `src/data/` — `categories.js` (7), `tasks.js` (8)

Icons come from `@expo/vector-icons` (Ionicons). No navigation library is used —
this is a single screen.