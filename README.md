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

**The runtime complexity of the conversion back to an adjacency matrix would be $\theta(|V|\*(|V| + |E|))$  This is because each node needs to be looped through, and then making the temporary array has to happen in every iteration to put the zeroes in the right spots, and that requires a loop equally as long as the number of nodes/verticies. Then, since an adjacency list will contain only the edges that actually exist, rather than all possible edges, the length of that loop will only be the number of edges |E|, rather than $|V|^2$  The outer loop is the number of verticies |V|, and there are two inner loops that are of lengths |V| and |E| respectively. Thus, combining all of them would result in a runtime complexity of $\theta(|V|\*(|V| + |E|))$**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
