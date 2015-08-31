// Experimenting with D3 trees before creating alogirithms

d3.select('body').style("background-color", "blue")

var treeData = [
  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }
];

var margin = {top: 20, right: 120, bottom: 20, left: 120}
var width = 960 - margin.right - margin.left
var height = 500 - margin.top - margin.bottom
 
var i = 0;

var tree = d3.layout.tree()
 .size([height, width]); 

var diagonal = d3.svg.diagonal()
.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
 .attr("width", width + margin.right + margin.left)
 .attr("height", height + margin.top + margin.bottom)
  .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
update(root);

function update(root) {
  var nodes = tree.nodes(root),
  var links = tree.links(nodes);
  nodes.forEach(function(d) { d.y = d.depth * 180; })
}

 var node = svg.selectAll("g.node")
   .data(nodes, function(d) { return d.id || (d.id = ++i); });
  var nodeEnter = node.enter().append("g")
   .attr("class", "node")
   .attr("transform", function(d) { 
    return "translate(" + d.y + "," + d.x + ")"; });






