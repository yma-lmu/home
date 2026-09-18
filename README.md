# Yanping Ma's website

A complete academic website with 13 pages. Open `index.html` to preview it locally, or publish the files with GitHub Pages.

## Publish for free

1. Create a public GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload all files in this folder, including the `assets` folder. Keep `index.html` at the top level. Upload the contents, not the ZIP archive.
3. In **Settings → Pages**, select **Deploy from a branch**, **main**, and **/(root)**, then save.
4. Wait for publication and select **Visit site** from the Pages settings.

Your address will be `https://YOUR-USERNAME.github.io/`. Replace YOUR-USERNAME with your account's actual username. No paid hosting plan or custom domain is needed for a public repository.

## Update

The text lives in the individual HTML files. Shared styles are in `assets/site.css`. Ask for help editing any page, then upload the replacement files to the same paths.

Every page includes a last-updated date and time in Pacific time. It changes when the page content or shared design is revised, rather than when someone visits. When editing the static HTML directly, update its footer's `<time>` text and `datetime` value too.

The visitor counter reuses the FreeVisitorCounters embed from the original Google Site. It loads on the published website; local previews show “Shown after publishing” so test browsing does not inflate counts. It depends on the external provider, and its totals should be verified after first publication. Counts are not claimed to be unique people.

The empty `.nojekyll` file tells GitHub to serve this static site without Jekyll processing. The site has no external font dependencies.

Official publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
