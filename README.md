# trimeddit  
Trims end of Reddit comments  

## Why  

I was sick of this new trend of having multiple blank lines at the ends of comments.  After looking at the source, it appears the lines are a combination of `<br>`, `&nbsp;`, and `\u200B` (aka the [Zero Width Space](https://www.fileformat.info/info/unicode/char/200b/index.htm) unicode character).  

So, this extension was built to trim comments that are identified as having one or more of those useless characters at the end.  

## How  

Javascript provides a regular expression format to the `replace()` function, so you can replace all occurrences of a character (or group of characters) within a string.  

We know the three characters/groups we want to replace are `<br>`, `&nbsp;`, and `\u200B`.  The following regular expression will do so:  

`var new_html = found_element.innerHTML.replace(/(\&nbsp;|\u200B|\<br*\>)/g, '');`  

Reddit comments are part of a set of `div` elements identified by having "usertext-body" within their classname.  Iterating through those elements provides us the full set of comments within the currently-viewed page.  

`const divs = document.getElementsByClassName("usertext-body");`  

Then within the comment's HTML there can be one or more `<p>` elements.  Since we want to trim just the end of the comment, we start at the last child of the parent element (which corresponds to the last `<p>` element in the comment's body) and remove each child element until we find non-matching text.  That way, any combination of the characters/groups we want to remove will get removed.  
