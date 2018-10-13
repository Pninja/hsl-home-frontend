var evtSource = new EventSource ('')

evtSource.onopen = e => {
    console.log('connected!')
    console.log(e)
};

evtSource.onmessage = e => {
    console.log ('got message!')
    console.log(e)
};

evtSource.onerror = e => {
    console.log('got error!')
    console.log(e)
}
