(function(){let text="";if(window.getSelection()!=''){text=window.getSelection().toString().replace(/(\r\n|\n|\r)/gm,"\r")}
let formatted="__"+text.split("\r").join("__\r__")+"__";prompt("Press CTRL+C or CMD+C, then escape and paste into Roam.",formatted+" — via ["+document.title+"]("+location.href+") [[+Roam]]")})()
