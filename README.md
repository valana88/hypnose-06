# Hypnose 06 — Guylaine Demarle

Site vitrine de Guylaine Demarle, infirmière diplômée d'État et maître praticienne en hypnose ericksonienne à Cannes (06).

**Stack** : Next.js 14 (App Router) · TypeScript · Styled Components

---

## 🚀 Étapes pour démarrer (à faire dans le terminal)

### 1. Repartir d'un projet propre, sans Tailwind

Ton projet actuel a Tailwind installé. On le supprime et on en crée un nouveau sans Tailwind :

```bash
# Quitte le serveur dev s'il tourne (Ctrl+C), puis :
cd ~
rm -rf hypnose-06

npx create-next-app@latest hypnose-06 \
  --typescript \
  --no-tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --eslint
```

### 2. Installer Styled Components

```bash
cd hypnose-06
npm install styled-components
npm install --save-dev @types/styled-components
```

### 3. Copier les fichiers de ce dossier

Copie l'intégralité du dossier `hypnose-06/` (généré ici) **par-dessus** ton projet local.
Les fichiers concernés :

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    ← Accueil (designée)
│   ├── page.styles.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── qui-suis-je/page.tsx
│   ├── hypnose/page.tsx
│   ├── indications/page.tsx
│   ├── tarifs/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── mentions-legales/page.tsx
├── components/
│   ├── Header/        (Header.tsx + Header.styles.ts)
│   ├── Footer/        (Footer.tsx + Footer.styles.ts)
│   ├── Hero/          (Hero.tsx + Hero.styles.ts)
│   ├── Button/        (Button.tsx + Button.styles.ts)
│   └── Section/       (Section.tsx + Section.styles.ts)
├── data/
│   └── site.ts                     ← Coordonnées centralisées
├── lib/
│   └── registry.tsx                ← SSR Styled Components
└── styles/
    ├── theme.ts                    ← Palette, typo, espacements
    ├── styled.d.ts                 ← Typage du theme
    └── GlobalStyles.ts             ← Reset CSS + body styles

next.config.ts                      ← Active styled-components SWC
```

⚠ **Supprime** le fichier `src/app/globals.css` créé par défaut, on n'en a plus besoin.

### 4. Lancer le serveur

```bash
npm run dev
```

Ouvre <http://localhost:3000> — tu dois voir la page d'accueil avec le hero zen & nature.

---

## 🌿 Le thème en bref

**Palette** (modifiable dans `src/styles/theme.ts`) :
- `cream` `#FAF7F2` — fond principal
- `sand` `#F5EFE6` — sections alternées
- `sage` `#93A87E` / `sageDark` `#5C6B4F` — couleur d'accent (verts sauge)
- `terracotta` `#C97B5A` — accent chaud
- `text` `#2D3E2C` — texte principal

**Typographie** :
- Titres : *Cormorant Garamond* (serif élégant)
- Texte : *Inter* (sans-serif moderne)
- Chargées via `next/font/google` dans `layout.tsx`

**Convention** : chaque composant a son fichier `.styles.ts` séparé, comme demandé.

---

## 📝 Ce qu'il restera à faire (contenu)

1. **Tarifs réels** — `src/app/tarifs/page.tsx` (placeholders "Sur demande" à remplacer)
2. **Photo de Guylaine** — remplacer le `Portrait` (gradient) et le `Visual` du Hero par de vraies images via `next/image`
3. **Email de contact** — vérifier `contact.email` dans `src/data/site.ts`
4. **Formulaire de contact actif** — connecter à [Resend](https://resend.com) ou Formspree (route API à créer)
5. **Données structurées SEO** — ajouter un JSON-LD `LocalBusiness` dans `layout.tsx` (très important pour Google Maps / "hypnothérapeute Cannes")

---

## 🐙 Hébergement sur GitHub (compte `valana88`)

### Créer le dépôt et pousser le code

```bash
cd hypnose-06

# Si git n'est pas déjà initialisé (create-next-app le fait normalement) :
git add .
git commit -m "feat: initial site vitrine — squelette + accueil"

# Crée un dépôt vide sur https://github.com/new (privé ou public, au choix)
# nom suggéré : hypnose-06

# Puis lie le projet au dépôt distant
git remote add origin https://github.com/valana88/hypnose-06.git
git branch -M main
git push -u origin main
```

### Méthode rapide avec GitHub CLI (`gh`)

Si tu as installé `gh` (`brew install gh`) :

```bash
gh auth login                 # une seule fois
gh repo create valana88/hypnose-06 --public --source=. --remote=origin --push
```

---

## 🌍 Déploiement sur le web (Vercel — gratuit)

GitHub stocke le code, mais ne sert pas un site Next.js dynamique. Le plus simple
pour mettre le site en ligne, c'est **Vercel** (les créateurs de Next.js) :

1. Va sur <https://vercel.com> → connecte-toi avec ton compte GitHub
2. *Add New Project* → choisis le dépôt `valana88/hypnose-06`
3. Vercel détecte Next.js automatiquement → clique *Deploy*
4. En ~1 minute, tu auras une URL `hypnose-06.vercel.app`

**Pour le domaine `hypnose-06-guylaine-demarle.fr`** : dans Vercel → *Settings → Domains*, ajoute le domaine et suis les instructions DNS chez le registrar actuel.

Chaque `git push` redéploie automatiquement le site.

---

## 🔑 Commandes utiles

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement (port 3000) |
| `npm run build` | Compile pour la production |
| `npm run start` | Lance la version compilée |
| `npm run lint` | Vérifie le code avec ESLint |
