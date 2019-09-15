# dy2sc
UserScript for Scrapbox which converts [Dynalist](https://dynalist.io)'s format to [Scrapbox](https://scrapbox.io/)'s syntax.

Only those exported in plain text format can be converted.

Language of the code is JavaScript.

## Convertible formats and converted syntaxes
- Heperlink(`[link_text](URL)` --> `[link_text URL]`)
- Image(![title_of_image](URL) --> [title_of_image URL])*2
- Bold(`**hoge**` --> `[* hoge]`)
- Italic(`__hoge__` --> `[/ hoge]`)
- Strikethrough(`~~hoge~~` --> `[- hoge]`)
- Date
  - `!(2019-09-08)` --> `2019-09-08)`
  - `!(2019-09-08 10:00)` --> `2019-09-08 10:00)`
- `@` for hashtag(`@hoge` --> `#hoge`)
- Formula(`$$E=mc^2$$` --> `[$ E=mc^2]`)
- Too many indents(Each four indents are converted to one indent.)
