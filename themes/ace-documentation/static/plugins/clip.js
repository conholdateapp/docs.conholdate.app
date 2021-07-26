/* IMplemented based on this post https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo */ if(navigator&&navigator.clipboard)addCopyButtons(navigator.clipboard);else{var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js",script.integrity="sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=",script.crossOrigin="anonymous",script.onload=function(){addCopyButtons(clipboard)},document.body.appendChild(script)}function addCopyButtons(t){document.querySelectorAll("pre > code").forEach(function(e){var n=document.createElement("button");n.className="btn btn-dark float-right",n.style="font-size: 1em !important;",n.type="button",n.innerText="Copy",n.addEventListener("click",function(){t.writeText(e.innerText).then(function(){n.blur(),n.innerText="Copied!",setTimeout(function(){n.innerText="Copy"},2e3)},function(t){n.innerText="Error"})}),e.parentNode.prepend(n)})}