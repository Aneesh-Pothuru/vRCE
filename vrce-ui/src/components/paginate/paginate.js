import React from 'react';
import { Pagination, PageLink } from "./paginate.styles"

export const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <Pagination>
                {pageNumbers.map(i => (
                    <li key={i}>
                        <PageLink onClick={() => paginate(i)} >
                            {i}
                        </PageLink>
                    </li>
                ))}
            </Pagination>
        </div>
    )
}
