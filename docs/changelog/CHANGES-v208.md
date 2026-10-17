# v208: hero fix
- BUG: the hero was a `<header>` element, so the global `header { background-color: ink !important }` rule in institutional.css turned every light hero dark while its type stayed dark (invisible titles, ghost button on Brand Guidelines and ~4 of 5 pages). Hero is now a `<section aria-label>`.
- Heroes: four compositions are picked per page (title on photo; photo left + info card; info card left + photo; tall photo + info card with related photos). The two that put the photo under a floating title (hv3, hv5) are no longer picked.
- FIX: section pages (/capabilities, /infrastructure, /intelligence, /industries, /expertise, /overview, /opportunities) rendered a blank page (PageSystem got the nav entry instead of its data). SectionPage now passes nav={data}.
