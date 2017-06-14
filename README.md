[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Prototypes

## Prerequisites

-   [ga-wdi-boston/js-objects-constructors](https://git.generalassemb.ly/ga-wdi-boston/js-objects-constructors)

## Objectives

-   Define methods on custom objects by attaching them to the prototype

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Change to the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch, `training`

## Prototypes

In the previous lesson, we saw how to use constructors to de-duplicate effort
in creating new objects that share attributes. We learned that we should never
define a method inside a constructor function. So how should we get behavior in
 our custom objects?

Remember `wonderWoman`?

```js
const wonderWoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',

  usePower: function() {
    return 'Deflects bullets with bracelets'
  }
}
```

We made a nice `Hero` constructor to take care of the attributes .

```js
const Hero = function(name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
}
```

## Code along:  add methods to prototypes

1.  Create `usePower` and attach it to the constructor function's prototype.
1.  Create a method to say the hero's name and alias. Attach it to the
    prototype.
1.  Create `batman` and `wonderWoman`. Call the method just attached.
1.  Observe that this method isn't part of objects created using the constructor
 function.

## Lab: Add Methods to Prototypes

Change the run tracker code you made in the [previous
lesson](https://git.generalassemb.ly/ga-wdi-boston/js-objects-constructors) to use
prototypes.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
