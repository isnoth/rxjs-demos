const  { Observable } = require( 'rxjs');

const obserable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);

    setTimeout(()=> {
        subscriber.next(5);
        subscriber.complete();
    }, 2000)
})

console.log('before subscribe')
obserable.subscribe({
    next(x) {console.log('got', x)},
    error(err) {console.error(error)},
    complete() {console.log('complete')},
})
console.log('after subscribe')
