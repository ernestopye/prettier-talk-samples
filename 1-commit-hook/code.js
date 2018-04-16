const sayHello = name => {
  if (!name) {
    console.log('Hello!');
  } else {
    console.log(`Hello, ${name}!`);
  }
};

sayHello('NWCJS');
