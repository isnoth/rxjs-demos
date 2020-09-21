const { interval } = require('rxjs');
const { map } = require('rxjs/operators');
const { pipe } = require('rxjs/Rx')


const source = interval(1000).pipe(map( i=>`no.${i}`))
const source1 = pipe(interval(1000)).map( i=>`no.${i}`)

source.subscribe(val => console.log(val));
source1.subscribe(val => console.log(val));


