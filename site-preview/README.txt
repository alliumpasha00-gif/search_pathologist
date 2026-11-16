STATIC PREVIEW of the M. Ali Ashfaq website
===========================================

HOW TO VIEW IN VS CODE
1. Unzip this folder, then in VS Code:  File > Open Folder... > choose "site-preview".
2. Open index.html.
3. Easiest: install the "Live Server" extension (Ritwick Dey), right-click index.html > "Open with Live Server".
   (Or just double-click index.html to open it in any browser — it also works from the file system.)

WHAT THIS IS
- A snapshot of the real website's pages, saved as plain HTML + one CSS file, so you can check the design.
- Pages: index.html (home), about/, contact/, seo-web-dev/, agri-blog/, search/, sample-page/, 404/,
  plus one sample article and one sample project.
- The articles/project/page are clearly-labelled PLACEHOLDERS ("Sample ... replace me in the admin").
  Your real content is written in the admin panel of the real project.
- The text inside is the real site's text; contact details shown come from the site's editable defaults.

WHAT DOES NOT WORK HERE (needs the real running site)
- Contact form, search, /admin, database content, uploads, sitemap.xml, robots.txt.
- Links to pages that are not part of this preview do nothing.
- Fonts load from Google Fonts, so you need internet for the exact typography.

TO EDIT THE DESIGN FOR REAL
Change app/globals.css and the components in the main project (m-ali-ashfaq-website-final.zip) and run `npm run dev`.
Editing the HTML here only changes this snapshot.
