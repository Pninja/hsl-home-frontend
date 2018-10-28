var evtSource = new EventSource ('')

const registerEventListener = (handler) => {
    console.log('trying to open event listener!')
    evtSource.onopen = e => {
        console.log('connected!')
        console.log(e)
    };
    
    evtSource.onmessage = e => {
        console.log ('got message!')
        console.log(e)
        return handler(e)
    };
    
    evtSource.onerror = e => {
        console.log('got error!')
        console.log(e)
    };
};

const unregisterEventListener = () => {
    evtSource.close()
};

export { registerEventListener, unregisterEventListener }
