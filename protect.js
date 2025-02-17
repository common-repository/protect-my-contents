// Author Michel Butera (michel.butera@gmail.com)


function protContent() {
    var body_element = document.getElementsByTagName("body")[0];
    var breaks = "";
    var site_name = Array();
    params = protect;
    for (i = 0; i < params.breaks; i++) breaks = breaks + "<br />";
    if (params.usetitle) site_name.push(params.pagetitle);
    if (params.addsitename) site_name.push(params.sitename);
    if (params.addlinktosite) site_url = params.siteurl;
    else site_url = document.URL;
    if (site_name.length == 0) site_name.push(site_url);
    var pagelink = breaks + " " + params.readmore + " " + "<a href='" + site_url + "' ";
    if (params.target) pagelink +=
        " target = '_blank'";
    pagelink += ">";
    if (!params.addlinktosite && params.usesitenameaslink && !params.frontpage) {
        site_name.push(params.sitename);
        pagelink += site_name[0] + "</a> | <a href='" + params.siteurl + "'";
        if (params.target) pagelink += " target = '_blank'";
        pagelink += " >" + site_name[1] + "</a>"
    } else pagelink += site_name.join(" | ") + "</a>";
    var selection = "";
    if (window.getSelection) selection = window.getSelection();
    else selection = document.selection;
    selection1 = selection;
    if (params.cleartext || params.replaced_text.length) {
        selection1 =
        "";
        if (window.getSelection) selection.removeAllRanges();
        else window.clipboardData.clearData();
        if (params.cleartext) return
            }
    if (params.replaced_text.length) selection1 = params.replaced_text;
    var copytext = selection1 + pagelink;
    var appendeddiv = document.createElement("div");
    appendeddiv.style.position = "absolute";
    appendeddiv.style.left = "-99999px";
    body_element.appendChild(appendeddiv);
    appendeddiv.innerHTML = copytext;
    d = function() {
        var r = document.body.createTextRange();
        r.moveToElementText(appendeddiv);
        r.select()
    };
    if (!params.cleartext &&
        params.replaced_text.length == 0)
        if (window.getSelection) selection.selectAllChildren(appendeddiv);
        else d();
        else if (window.getSelection) selection.selectAllChildren(appendeddiv);
        else d();
    window.setTimeout(function() {
                      body_element.removeChild(appendeddiv)
                      }, 0)
}
if (document.addEventListener) document.addEventListener("copy", protContent, true);
else if (document.attachEvent) document.documentElement.attachEvent("oncopy", protContent);
else document.oncopy = protContent;