# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- There is no need to use semicolons at the end of every line, so I removed them.
- To reduce code lines, if there is only one line inside the condition, there is no need for curly braces.
- There is no need for parentheses if the arrow function has only a single parameter.
- I have created a function for redundant code to make it reusable.
- To Refactor the 1st nesting "if else" condition, I have used the nullish coalescing operator ( ?? ) with a single "if" condition.
- To Refactor the 2nd nesting "if else" condition, I have used AND operator with the ternary operator.