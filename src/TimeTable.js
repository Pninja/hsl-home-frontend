import React from 'react';
import { Table, Icon } from 'semantic-ui-react'

const TimeTable = ({time}) => (
    <Table inverted padded='very' color='blue'>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell colSpan='2'><Icon name="clock outline" />{time}</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row active>
            <Table.Cell><h1><Icon name="bus"/> Next</h1></Table.Cell>
            <Table.Cell><h1>min</h1></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><Icon name="bus"/>Bus1</Table.Cell>
            <Table.Cell>min</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><Icon name="bus"/>Bus2</Table.Cell>
            <Table.Cell>min</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><Icon name="bus"/>Bus3</Table.Cell>
            <Table.Cell>min</Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table>
);

export default TimeTable;