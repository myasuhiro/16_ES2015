// - What is the difference between ***var*** and ***let***?
// You can reassign and redeclare with var, but you can not redeclare with let.
// You can access a hoisted variable with var since var creates function scope, but let creates block scope.

// - What is the difference between **var** and ***const***?
// You can reassign and redeclare with var, but you can not reassign and redeclare with const.
// You can access a hoisted variable with var since var creates function scope, but const creates block scope.

// - What is the difference between **let** and **const**?
// let can be reassigned, but const can not be reassigned and redeclared.


// - What is hoisting?
// It's the way that we explain how the JS complier works. Variables are liftind or "hoisted" to the top of the scope thay are declared in. When using var, you can access the variable name and it's undefined value before it is used later on. Function declarations are also hoisted and van be invoked "before" they are defined in a codebase.

// JSコンパイラがどのように機能するかを説明する方法。変数は、宣言されたスコープの一番上に持ち上げられたり、「吊り上げられたり」します。varを使うと、後で使われる前に変数名とその未定義値にアクセスできます。
// 関数宣言もホイストされ、コードベースで定義される「前に」呼び出すことができる。