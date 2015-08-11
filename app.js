d3.select('body').style("background-color", "blue")

// function Tree(storage, parent, depth) {  

//   var newTree = {
//     parent  : parent || null,
//     children: [],
//     storage : storage,
//     current : this,
//     depth   : depth
//   }

//   newTree.addChild = function(child) {
//     this.current = child;
//     this.children.push(child);
//   }

//   newTree.goBack = function() {
//     this.current = this.parent
//   }

//   return newTree
// }

// var tree1 = Tree([1,2,3,4,5], null, 1)

// var tree2 = Tree([2,3,4,5,6], tree2, 2)

// var tree3 = Tree([3,4,5,6,7], tree3, 3)



// tree1.addChild(tree2)
// tree1.current.addChild(tree3)

// console.log(tree1)

// var myTree = d3.layout.tree({})
// d3.select("body").append(myTree)
svg.selectAll("path")
    .data(tree.links(nodes))
  .enter().append("path")
    .attr("d", d3.svg.diagonal());
