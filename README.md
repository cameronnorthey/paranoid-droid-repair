# Paranoid Droid Repair

A hand-coded website for a fictional phone, laptop and console repair shop with a privacy-first angle: "we're paranoid about your data so you don't have to be."

**Live site:** [paranoiddroid.com](https://paranoiddroid.com)

Built by [Cameron Northey](https://blueninja.net) (BlueNinja.net) as a self-initiated concept project. The business is fictional.

## Highlights

- **"Terminal" design concept.** Retro CRT phosphor-green monospace type, a terminal window bar, a scanline overlay and bracket-tagged navigation (`[Home]`). It was chosen from three mockup directions.
- **Custom SVG illustrations.** Five line-art "nervous droid" characters (`assets/droid-*.svg`) used across the site. They're plain SVG, so they scale cleanly with no image dependencies.
- **No frameworks or build step.** Static HTML, one stylesheet and one small script.
- **Responsive navigation.** A hamburger menu below 600px that slides in from the right and closes on outside click, link click or a second tap.
- **Complete page set.** Home, Services, About, Contact and a "message received" confirmation page.

## Structure

```
index.html              Home
services.html           Repair services and pricing
about.html              Shop story and privacy approach
contact.html            Contact form
message-received.html   Form confirmation page
style.css               All styles
script.js               Mobile navigation
assets/                 SVG droid illustrations
robots.txt              Keeps the demo out of search engines
```

## Run it locally

Open `index.html` in a browser. There's nothing to install.

## Notes

- The contact form isn't connected to a mail handler.
- The site is intentionally kept out of search engines (`robots.txt` plus `noindex` meta tags) because it isn't a real business.
