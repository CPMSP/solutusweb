# Solutus LLC — single-page rebuild

A responsive rebuild of https://www.solutusllc.com, using only HTML and CSS. The services, clients, about, and contact pages are consolidated into one page. No JavaScript, frameworks, package installation, or build step is required.

## Run
Open `dist/index.html` in a web browser, or upload the contents of `dist/` to any static web host. Keep `index.html`, `styles.css`, and the `assets/` directory together.

## Edit
- Content, navigation, portfolio links, and contact details: `dist/index.html`.
- Layout, colors, typography, and mobile breakpoints: `dist/styles.css`.
- Images and the locally hosted heading font: `dist/assets/`.

Contact buttons open the visitor’s email application; the phone link opens their calling application. There is no contact form or backend. Existing portfolio URLs are preserved from the reference; their external availability may change.

## Reference
Copy is condensed from the original site's services, clients, about, and contact pages. Portfolio descriptions reflect the reference and should be reviewed for currency before public launch. Original logo, client images, and Earth photograph are preserved. Earth photograph source: https://images.unsplash.com/photo-1451187580459-43490279c0fa . Rock Salt font is distributed under Apache License 2.0; license is included in assets.

The service and about sections also describe personalized service, direct collaboration, and development and deployment planning.

The compact portfolio carousel uses native horizontal scrolling, CSS scroll snapping, and dot navigation links. It supports touch swiping and keyboard navigation without JavaScript.
