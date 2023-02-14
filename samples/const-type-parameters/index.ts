type HasNames = { readonly names: string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T['names'] {
  return arg.names;
}

// Inferred type: string[]
const names = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] });

const a = ['test', 'a'] as const;
a.push("a");
names.push('test');

console.log(names);
