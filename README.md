# Drupal core new administration navigation
This repo contains the initial work for the reworking of the core administration toolbar in Drupal core.

## PostCSS setup 
In your terminal, run `npm run watch` to compile CSS changes.

## CHANGELOG

06/14/23 - Initial commit of the HTML/CSS mockup
- HTML structure is modeled on the output provided by the core `toolbar` module when it is in vertical mode and has been cleaned up some.
- CSS structure has been ported over from the CSS files contained in the `toolbar` module, with all of the unneeded styling (such as for the horizontal version of the toolbar) removed. Some of the code found in `toolbar.module.css` has been merged into other files as it made more sense in other files, so that file has been excluded. When this is turned into an actual module, we can add another .css file (if needed) for any of the module specific coding.
- CSS from `toolbar` has been reworked to use CSS logical properties and any `[dir=rtl]` references have been removed.
- JS is needed to make the toolbar functionality actually work, but HTML contains levels up to 4 deep (hidden by default) for testing when the JS is changed to display the output.
- TODO: Update the proper path to core icons found in the menu. For now they are simply included here in a folder structure that mimics core.
- TODO: Add the JS needed to make it work. This is just pretty static to start with and doesn't do anything!

