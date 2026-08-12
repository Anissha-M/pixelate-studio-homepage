# Pixelate Studio – Design Agency Homepage

This is my submission for the ReactJS/Next.js Developer Internship task at Weboin Technologies. I built a homepage for a made-up design agency called Pixelate Studio, since the task didn't give an actual client.

## How to run it

npm install
npm run dev

Then open localhost:3000

## What I used

- Next.js 14 (App Router)
- Tailwind CSS for styling
- next/image for the portfolio images

## What's in it

- Hero section with the agency name, a tagline, and two buttons
- Services section — 4 cards for UI/UX, Web Dev, Branding, Digital Marketing
- Portfolio section — 6 project thumbnails in a grid, they zoom in slightly and show the project name when you hover
- Contact form — name, email, message. It checks that all fields are filled and that the email has an @ in it, then shows a success message. It's not actually connected to anything yet, so it doesn't really send an email.

## A few notes

- The images are placeholders from Unsplash, not real project work.
- I kept every section as its own component in the components folder so it's easy to find and edit things.
- Didn't add dark mode since it was listed as optional and I wanted to focus on getting the main sections solid first.

