import styled from "styled-components";

export const Pagination =  styled.ul`
    display:-ms-flexbox;
    display:flex;
    padding-left:0;
    list-style:none;
    border-radius:.25rem;
`;

export const PageLink = styled.a`
    position:relative;
    display:block;
    padding:.5rem .75rem;
    margin-left:-1px;
    line-height:1.25;
    color:#007bff;
    border-radius: 5px;
    background-color:#fff;
    border:1px solid #dee2e6;

    :hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6;cursor:pointer}
    :focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}
`;