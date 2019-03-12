/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// timestamp
//    wrap the value with the timestamp at which is was emitted

const { Observable } = require('rxjs');
const { timestamp, delay } = require('rxjs/operators');

const source = Observable.create(observer => {
    observer.next('A');
    setTimeout(() => observer.next('B'), 100);
    setTimeout(() => observer.next('C'), 300);
    setTimeout(() => observer.complete(), 600);
});
console.log('# wrap every value with the timestamp');
source.pipe(timestamp()).subscribe(d => {
    console.log('');
    console.log(`${d.value} at ${new Date(d.timestamp)}`);
    console.log(d);
});
