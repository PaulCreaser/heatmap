var heatmap = require('./heatmap.js');

heatmap.init(10,10,1,10)

var list = new Array();

var item = new Object();
item.x = 5;
item.y = 5;
item.v = 10;

list.push(item);

var item = new Object();
item.x = 1;
item.y = 1;
item.v = 10;
list.push(item);

heatmap.heatmap( list);


