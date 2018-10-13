import React from 'react';
import { Table, Icon } from 'semantic-ui-react'

const TimeTable = () => (
    <Table inverted>

        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Linja</Table.HeaderCell>
            <Table.HeaderCell>Saapuu</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
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