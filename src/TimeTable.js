import React from 'react';
import { Table, Icon, Dimmer, Loader } from 'semantic-ui-react'

const getTime = (serviceDay, realtimeDeparture) => {
    var now = new Date()
    const departureTime = (serviceDay + realtimeDeparture) * 1000
    const departureDateObject = new Date(departureTime)
    const minutesToBus = Math.floor((departureDateObject - now) / 60000)
    return minutesToBus
}

const getBusNumber = (headsign) => ( headsign === 'Kalasatama(M)' ? '56' : '55' )

const getRealTimeIcon = (arrival) => ( arrival.realtime ? <Icon name="rss"/> : '' )

const getColor = (nextDeparture) => (
    nextDeparture < 3 ? 'red' 
    : nextDeparture >= 3 && nextDeparture < 5 ? 'yellow'
    : 'green'
)

const TableRows = ({ data }) => ( data.arrivalList.slice(0,4).map((arrival, index) => {
        const nextDeparture = getTime(arrival.serviceDay, arrival.realtimeDeparture)
        const busNumber = getBusNumber(arrival.headsign)
        const icon = getRealTimeIcon(arrival)
        const style = {color : getColor(nextDeparture)}
        
        if (index === 0) {
            return (
                <Table.Row active key={arrival.realtimeArrival}>
                    <Table.Cell><h1><Icon name="bus"/>{ busNumber }</h1></Table.Cell>
                    <Table.Cell><h1 style={style}>{ nextDeparture } min { icon }</h1> </Table.Cell>
                </Table.Row>
            )
        } 
        return (
            <Table.Row key={arrival.realtimeArrival}>
                <Table.Cell><Icon name="bus"/>{ busNumber }</Table.Cell>
                <Table.Cell>{ nextDeparture } min { icon }</Table.Cell>
            </Table.Row>
        )
    })
)

const TimeTable = ({time, arrivals}) => {
    if (arrivals) {
        console.log(arrivals)
        return (
            <Table inverted padded='very' color='blue'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='2'><Icon name="clock outline" />{time}</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    <TableRows data={arrivals} />
                </Table.Body>
            </Table>
        )
    }
    return (
        <Dimmer active>
            <Loader indeterminate> Fetching data! </Loader>
        </Dimmer>
    )
};

export default TimeTable;