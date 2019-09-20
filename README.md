# dy2sc
## Overview
UserScript for Scrapbox which converts [Dynalist](https://dynalist.io)'s [format](https://help.dynalist.io/article/90-formatting-reference) to [Scrapbox](https://scrapbox.io/)'s [format](https://scrapbox.io/help/Syntax).

Only those exported in [plain text format](https://gyazo.com/acb6e51ab40187b88fc5d57e884cb318) from Dynalist can be converted.

日本語による詳しい説明は[こちら](http://ich.hatenadiary.com/entry/dynalist-to-scrapbox-userscript)です。

## Before and after conversion
Only these twelve conversions are avaiable.
- Heperlink
  - `[link_text](URL)` --> `[link_text URL]`
  - `[](URL)` --> `[URL]`
- Image link
  - `![link_text](URL)` --> `[link_text URL]`
  - `![](URL)` --> `[URL]`
- Bold(`**hoge**` --> `[* hoge]`)
- Italic(`__hoge__` --> `[/ hoge]`)
- Line-through(`~~hoge~~` --> `[- hoge]`)
- Date
  - `!(2019-09-08)` --> `2019-09-08`
  - `!(2019-09-08 10:00)` --> `2019-09-08 10:00`
- `@` for hashtag(`@hoge` --> `#hoge`)
- LaTeX(`$$E=mc^2$$` --> `[$ E=mc^2]`)
- Each four indents on a item(=a line) is converted to one indent.

## How to setup
1. Open your Scrapbox's `Edit Profile`, [enable User Script](https://gyazo.com/90542aaebf2def0f50e8e461899a5c8e).
2. Copy the code of [dy2sc.js](https://github.com/kojp/dy2sc/blob/master/dy2sc.js).
3. Open your [Profile page](https://scrapbox.io/help/Profile_page) of a Scrapbox project, and write `code:script.js` there. Then, paste the copied code [under it](https://gyazo.com/6fdea7a7f5f0c618fe471884a38e3154).
4. Reload the profile page and click [the "Load new UserScript" button](https://gyazo.com/af3f98aa015516f595294ae9f78e3a22).

## How to use
1. Export Dynalist's contents in [plain text format](https://gyazo.com/acb6e51ab40187b88fc5d57e884cb318). Select "Spaces" as Indentation style.
2. Paste it a Scrapbox page.
3. [Select the texts](https://gyazo.com/b0d0096ba69dc295b2898117a59ee43b), then click "Dynalist" button in popup menu.
4. They will be [converted](https://gyazo.com/f8868340428acf217a870cc50e9f514b).
