# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**The runtime complexity of the conversion would be $\theta(|V|^2)$  This is because the maximum number of edges that can exist in a graph is the number of verticies squared. This will also be the dimensions of the adjacency matrix. Since the matrix is |V| x |V|, and each entry has to be checked, the total number of checks will be $|V|^2$, giving the final runtime complexity of $\theta(|V|^2)$**

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

**The runtime complexity of the conversion back to an adjacency matrix would be $\theta(|V|\*(|V| + |E|))$  Each vertex needs to have its connections checked, so that accounts for the outer |V|. Then, in a matrix, there are |V| x |V| 'nodes' to store edges. Since a list only has the ones that do exist, we can't account for the ones that don't exist. So, each row needs to be padded with zeroes, and this takes |V| amount of time (since a matrix is |V| x |V|.) Then, every edge that does exist needs to be inserted into the row, which takes as long as |E|, the number of edges. In the best case, there are no edges on the graph, so |E| = 0. This makes the final runtime complexity come out to $\theta(|V|\*(|V| + 0)) = \theta(|V|^2)$ In the average case, the number of edges would be $|V|^{2}/2$ which is asymptotically the same as $|V|^2$  which is also the same complexity as the worst case (a fully connected graph.) In the worst case, the runtime complexity comes out to be $\theta(|V|*(|V|+|V|^2)) = \theta(|V|^2 + |V|^3) = \theta(|V|^3)$  Thus, in the average case the runtime complexity would end up being $\theta(|V|^3)$**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
