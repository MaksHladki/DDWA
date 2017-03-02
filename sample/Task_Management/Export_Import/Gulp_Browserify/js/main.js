import * as moduleA from './moduleA';
import * as moduleB from './moduleB';

function main(){
    moduleA.testA();
    moduleB.testB();
    
    console.log(`PI = ${moduleA.PI}`);
}

//global export
export {main};