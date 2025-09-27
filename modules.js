//Export(module.js)
export const greetings = ()=> "Welcome";

//Import (main.js)
import{greetings} from './module.js';
console.log(greetings());
