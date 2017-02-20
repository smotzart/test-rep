"use strict";

var tabView = require("ui/tab-view");
var thisTab;
var thisContent;
var THIS_TAB_IDX = 3;

function onTabLoaded(args) {
  thisTab = args.object;
  thisTab.parent.on(tabView.TabView.selectedIndexChangedEvent, onTabChange);
  thisContent = thisTab.page.bindingContext;
  thisTab.bindingContext = thisContent;
}
exports.onTabLoaded = onTabLoaded;

function onTabUnloaded(args) {
  thisTab.parent.off(tabView.TabView.selectedIndexChangedEvent, onTabChange);
  thisTab = null;
}
exports.onTabUnloaded = onTabUnloaded;

function onTabChange(args) {
  if (args.newIndex === THIS_TAB_IDX) {
    loadEvents();
  }
}

function loadEvents() {
  thisContent.selectedCat = THIS_TAB_IDX;
  thisContent.refresh();
}