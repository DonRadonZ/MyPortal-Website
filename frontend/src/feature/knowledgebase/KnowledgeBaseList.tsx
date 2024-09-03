import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
    background-color: var(--color-gray-0);
    border-radius: var(--border-radius-sm);
    padding: 2.4rem 2.4rem;
    min-height: 750px;
`;

function KnowledgeBaseList() {
  return (
    <Box>
    <ul>
        <li>
            <h3>Test</h3>
        </li>
    </ul>
</Box>
  )
}

export default KnowledgeBaseList