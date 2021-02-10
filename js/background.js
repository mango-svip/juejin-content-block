
chrome.contextMenus.create({
    type: 'normal',
    title: '内容屏蔽',
    id: 'menuDemo',
    documentUrlPatterns: ['https://juejin.cn/*'],
    contexts: ['all']
}, function () {
    
});

chrome.contextMenus.create({
    type: 'normal',
    title: '不喜欢作者',
    id: 'user',
    contexts: ['all'],
    parentId: 'menuDemo',
    documentUrlPatterns: ['https://juejin.cn/*'],
    onclick: blockUser
}, function () {
});

chrome.contextMenus.create({
    type: 'normal',
    title: '不喜欢这篇文章',
    id: 'article',
    contexts: ['all'],
    parentId: 'menuDemo',
    documentUrlPatterns: ['https://juejin.cn/*'],
    onclick: blockArticle
}, function () {
    
});
function blockUser(info, tab ) {
    chrome.tabs.sendMessage(tab.id, { type: "user" });
}
function blockArticle(info, tab) {
    chrome.tabs.sendMessage(tab.id, { type: "article" });
}
