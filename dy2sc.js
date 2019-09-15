scrapbox.PopupMenu.addButton({
	title: 'Dynalist',  //"Dynalist" is the name of popup button.
	onClick: text =>{
		////Hyperlink and Image link
		//e.g. [](https://www.google.com) or ![](https://www.google.com/google.png)
		text=text.split(/\n/).map(line => line.replace(/!?\[\]\((https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)\)/g,'[$1]')).join('\n') 
		//e.g. [Google](https://www.google.com) or ![Google logo](https://www.google.com/google.png)
		text=text.split(/\n/).map(line => line.replace(/!?\[([^\]]+)\]\((https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)\)/g,'[$1 $2]')).join('\n')   
		////Markdown
		//Bold
		text=text.split(/\n/).map(line => line.replace(/\*\*([^*]+)\*\*/g,'[* $1]')).join('\n')
		//Italic
		text=text.split(/\n/).map(line => line.replace(/\_\_(\_+|[^_]+)\_\_/g,'[/ $1]')).join('\n')
		//Line strikethrough
		text=text.split(/\n/).map(line => line.replace(/\~\~(\~+|[^~]+)\~\~/g,'[- $1]')).join('\n')
		////Date e.g. !(2019-09-11) or !(2019-09-11 10:00)
		text=text.split(/\n/).map(line => line.replace(/\!\(([0-9]{4}\-[0-9]{2}\-[0-9]{2}( [0-9]{2}:[0-9]{2})*)\)/g,'$1')).join('\n')
		////@ for hashtag
		//@ at the begging of a line
		text=text.split(/\n/).map(line => line.replace(/^(\s*)@/g,'$1#')).join('\n')
		//@ at after a space
		text=text.split(/\n/).map(line => line.replace(/([ 　])@/g,'$1#')).join('\n')
		////Latex e.g. $$E=mc^2$$
		text=text.split(/\n/).map(line => line.replace(/\$\$([^$$]+)\$\$/g,'[\$ $1]')).join('\n')
		////Each four indents in a item(=a line)
		text=text.split(/\n/).map(line => line.replace(/\s{4}/g,' ')).join('\n')         
		return text;
	}
})
