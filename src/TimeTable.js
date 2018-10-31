import React from 'react';
import { Table, Icon } from 'semantic-ui-react'
// import data from './mockData'

const getTime = (serviceDay, realtimeDeparture) => {
    var now = new Date()
    const departureTime = (serviceDay + realtimeDeparture) * 1000
    const departureDateObject = new Date(departureTime)
    const minutesToBus = Math.floor((departureDateObject - now) / 60000)
    return minutesToBus
}

const getBusNumber = (headsign) => ( headsign === 'Kalasatama(M)' ? '56' : '55' )

const getRealTimeIcon = (arrival) => ( arrival.realtime ? <Icon name="rss"/> : '' )

const TableRows = ({data}) => {
    if (data) {
        return data.arrivalList.map((arrival, index) => {
            const nextDeparture = getTime(arrival.serviceDay, arrival.realtimeDeparture)
            const busNumber = getBusNumber(arrival.headsign)
            const icon = getRealTimeIcon(arrival)
            if (index === 0) {
                return (
                    <Table.Row active key={arrival.realtimeArrival}>
                        <Table.Cell><h1><Icon name="bus"/>{ busNumber }</h1></Table.Cell>
                        <Table.Cell><h1>{ nextDeparture } min { icon }</h1> </Table.Cell>
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
    }
    return (
        <Table.Row>
            <Table.Cell> No data! </Table.Cell>
            <Table.Cell> No data! </Table.Cell>
        </Table.Row>
    )
}

const TimeTable = ({time, arrivals}) => {
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
};

export default TimeTable;