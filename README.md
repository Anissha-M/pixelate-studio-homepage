# Pixelate Studio

This is my submission for the ReactJS/Next.js Developer Intern task at Weboin Technologies. The brief asked for a design agency homepage with a hero, services, portfolio, and contact section, so I built one for a made-up studio called Pixelate Studio since there wasn't an actual client to design for.

**Live site:** pixelate-studio-homepage.vercel.app

## Why I built it this way

I went with a purple accent color and a lot of whitespace instead of cramming things together, wanted it to feel like an actual small studio's site rather than a generic template. The services and portfolio sections both use .map() over an array instead of hardcoding each card, so adding a 5th service or 7th project later is just adding one object to a list, not writing a new block of JSX.

The contact form validates on the client (checks all fields are filled and the email has an @) and shows a success message, but it's not wired to a real backend, so it doesn't actually send anywhere yet. If I had more time I'd hook it up to something like Formspree.

I also added a dark mode toggle even though it was listed as optional, mainly because I wanted the practice of using localStorage and Tailwind's dark: variants properly.

## Stack

- Next.js 14, App Router
- Tailwind CSS
- next/image for the portfolio thumbnails
- Plain useState/useEffect for the form, mobile menu, and theme toggle, no extra state libraries since the app doesn't need them

## Running it locally

npm install
npm run dev

Then open localhost:3000

## Structure

app/            layout + page + global styles
components/     one file per section (Hero, Services, Portfolio, Contact, Navbar, Footer, ThemeToggle)

## What I'd add with more time

- Actually connect the contact form to send real emails
- A dedicated page per portfolio project instead of just a thumbnail
- Maybe swap the placeholder Unsplash images for something more on-brand

## A few notes

- The images are placeholders from Unsplash, not real project work.
- I kept every section as its own component in the components folder so it's easy to find and edit things.
- Didn't add dark mode since it was listed as optional and I wanted to focus on getting the main sections solid first.

