import styled from 'styled-components';
import { Table, Typography } from '@material-ui/core';

export const Box = styled.div`
    padding: 50px;
    padding-left: 100px;
    padding-right: 100px;
    margin: auto;
    text-align: center;
`;

export const TablePage = styled(Table)`
    min-width: 650;
`;

export const ChartContainer = styled.div`
    padding: 20px;
`;

export const Line = styled.div`
    padding: 20px;
    overflow: hidden;
`;

export const Category = styled(Typography)`
    float: left;
`;

export const Description = styled(Typography)`
    float: right;
`;

export const Headers = styled(Typography)`
    padding-top: 20px;
`;
