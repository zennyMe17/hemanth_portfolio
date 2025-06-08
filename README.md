# Hemanth's Portfolio

A beautiful, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.  
Showcases your projects, education, certifications, skills, and more in a single-page, modern layout.

## Features

- **Modern Design:** Clean, animated, and visually appealing user interface.
- **Responsive:** Works perfectly on desktop, tablet, and mobile devices.
- **Easy Customization:** All portfolio information is managed in a single data file.
- **Social Links:** Integrated with LinkedIn, GitHub, LeetCode, and GeeksforGeeks.
- **Sectioned Layout:** About Me, Education, Projects, Skills, Certifications, Extracurricular, and Contact.
- **Dark/Light Friendly:** Designed with accessible color choices and contrast.

## Demo

[Portfolio Link](https://hemanth-ashy.vercel.app/p)

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/zennyMe17/hemanth_portfolio.git
cd hemanth_portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
app/
  page.tsx            # Main portfolio page (edit layout/UI here)
  favicon.ico
  ...
data/
  portfolioData.ts    # Edit your name, skills, projects, etc. here!
public/
  leetcode.png        # Social logos
  gfg.png
  ...
tailwind.config.js    # Tailwind CSS config
postcss.config.js
tsconfig.json         # TypeScript config
...
```

## Customization

- **Edit your portfolio data:**  
  Open `data/portfolioData.ts` and update all your details.  
  - Name, contact info, education, skills, projects, certifications, and more.
- **Add or update images:**  
  Place your images (e.g., `leetcode.png`, `gfg.png`, etc.) in the `public/` directory.

- **Change theme/colors:**  
  Modify Tailwind CSS classes in `app/page.tsx` for custom color schemes.

## Deployment

Deploy to [Vercel](https://vercel.com/) for best results (zero-config for Next.js):

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repo.
3. Deploy!

Or, deploy anywhere that supports Next.js.

## Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Inspired by modern developer portfolios.

---

Feel free to fork, use, and customize!  
Give a ⭐ if you like it.
