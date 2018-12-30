import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from './SearchActions';
import { Button } from './styles';
import { SearchForm } from './SearchForm';

const Container = styled.div`
    width: 50%;
    padding: 2rem;
    background-color: #222;
`;

const Content = styled.div`
    border: 1px solid darkgray;
    border-radius: 1rem;
    padding: 2rem;
    background-color: lightgrey;
`;

const PageInfo = styled.span`
    margin: 1rem;
`;

const SearchText = styled.div`
    color: white;
`;

export function Filters({ page, totalPages, next, previous, setFilter}){
    return (
        <Container>
            <SearchText>Search for entries containing specified text</SearchText>
            <Content>
                <SearchForm setFilter={setFilter}/>
                <Button width={10} disabled={page === 1} onClick={previous}>
                &lt;
                </Button>
                <PageInfo>Page {page} of {totalPages}</PageInfo>
                <Button width={10} disabled={page === totalPages} onClick={next}>
                &gt;
                </Button>
            </Content>
        </Container>
    );
}

export default connect(state => state, actions)(Filters);
