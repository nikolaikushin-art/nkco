# v679
- Top navigation on large screens (27" iMac / Studio Display 2560x1440, 4K) was too big: v674 scaled the header 1:1 with the hero (bar 106px, menu 19px at 2560x1440).
- Header scale --nk-hs is now damped (35% of the hero scale, capped at 1.2): 1440 = unchanged, 1920x1080 ~ unchanged, 2560x1440 -> bar ~84px / menu ~15px, 4K -> bar ~86px / menu ~15.6px.
- Menus and panels (--nk-header-h) follow the same unit, so there is no gap or overlap under the smaller bar.
- Files: src/styles/large-screen-v674.css only.
