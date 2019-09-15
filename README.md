# dy2sc
UserScript for Scrapbox which converts [Dynalist](https://dynalist.io)'s format to [Scrapbox](https://scrapbox.io/)'s syntax.

Only those exported in plain text format can be converted.
Language of the code is JavaScript.
日本語による詳しい説明は[こちら](http://ich.hatenadiary.com/entry/dynalist-to-scrapbox-userscript)。

## Convertible formats and converted syntaxes
- Heperlink(`[link_text](URL)` --> `[link_text URL]`)
- Image(`![title_of_image](URL)` --> [title_of_image URL])*2
- Bold(`**hoge**` --> `[* hoge]`)
- Italic(`__hoge__` --> `[/ hoge]`)
- Strikethrough(`~~hoge~~` --> `[- hoge]`)
- Date
  - `!(2019-09-08)` --> `2019-09-08)`
  - `!(2019-09-08 10:00)` --> `2019-09-08 10:00)`
- `@` for hashtag(`@hoge` --> `#hoge`)
- Formula(`$$E=mc^2$$` --> `[$ E=mc^2]`)
- Too many indents(Each four indents are converted to one indent.)

## How to setup
1. Open your Scrapbox's `Edit Profile`, [enable User Script](https://gyazo.com/90542aaebf2def0f50e8e461899a5c8e).
2. Open your [Profile page](https://scrapbox.io/help/Profile_page) of specific Scrapbox project, and write `code:script.js` there. Then, paste the copied code [under it](https://gyazo.com/6fdea7a7f5f0c618fe471884a38e3154).

## How to use
1. Export Dynalist's contents in plain text format.
2. Paste it a Scrapbox page.
3. [Select the texts](https://gyazo.com/b0d0096ba69dc295b2898117a59ee43b) on the page.
4. Click "Dynalist" button in [popup menu](https://gyazo.com/f8868340428acf217a870cc50e9f514b). They will be converted.
