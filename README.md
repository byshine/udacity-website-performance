
## Website Performance Optimization portfolio project

#  main.js

1. Move document.querySelector("#movingPizzas1") outside of for loop to prevent multiple DOM queries.

2. Move document.body.scrollTop outside of for loop to separate Read & Write on DOM

3. Move document.querySelectorAll(".randomPizzaContainer") outside of for loop to prevent multiple DOM Queries

4. Query randomPizzaContainer length from the cached variable

5. Store newWidth in an array and loop this array instead

# index.html

1. Incline CSS - Pagespeed kept complaining about this.

2. Optimize images - Had to reduce quality by alot, pagespeed wouldn't give me over 90.

3. Async JavaScript that does not touch the dom.

4. Move inline JavaScript to the very bottom to load after everything else has loaded



