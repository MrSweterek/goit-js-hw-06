const items = document.querySelectorAll('.item');
const h2 = document.querySelectorAll('h2');
console.log("Number of categories: " + items.length);
for (let i = 0; i < items.length; i++)
{ 
console.log("Category: " + h2[i].textContent)
console.log("Elements: " + items[i].lastElementChild.children.length)
}
