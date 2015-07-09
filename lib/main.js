var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton(
    {
        id: "mozilla-link",
        label: "Go to Mozilla",
        icon: {
            "16": "./icon-16.png",
            "32": "./icon-32.png",
            "64": "./icon-64.png"
        },

        onClick: handleClick
    }
);

function handleClick(state) {
    tabs.open({
        url: "https://www.mozilla.org/",
        onReady: runScript
    });
}

function runScript(tab) {
    tab.attach({
            contentScript: "document.body.style.border = '5px solid red';"
        }
    ));
}