function markdownTables(arr) {

  arr.splice(1, 0, arr[0].replace(/[^,]/g, '-'));

  arr.forEach((string, i) => {
    arr[i] = `|${string.toString().split(',').join('|')}|`;
  });
  return arr.join('\n');
}

console.log(markdownTables(['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']))
