import { useState } from "react";
import styled, { css } from "styled-components";

const StyledView = styled.div`
    border: 1px solid var(--color-gray-100);
    background-color: var(--color-gray-0);
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
    display: flex;
    gap: 0.4rem;
`;

type ViewButtonProps = {
    active?: any;
}

const ViewButton = styled.button<ViewButtonProps>`
   background-color: var(--color-gray-0);
   border: none;

   ${(props) => props.active && css`
   background-color: var(--color-brand-600);
   color: var(--color-brand-50);
   `}

   border-radius: var(--border-radius-sm);
   font-weight: 500;
   font-size: 1.4rem;

   padding: 0.44rem 0.8rem;
   transition: all 0.3s;

   &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
   }
`;

interface ViewProps {
    viewField: string;
    options: Array<{value: string, label: string}>;
}



function View({viewField, options}:ViewProps) {
  const [view, setView] = useState(viewField);

  function setActiveView(view: string){
    setView(view)
  }

  return (
    <StyledView>
        {options.map((option: any) => (
            <ViewButton
            key={option.value}
            active={view === option.value}
            disabled={view === option.value}
            onClick={() => setActiveView(option)}
            >
                {option.label}
            </ViewButton>
        ))}
        
    </StyledView>
  )
}

export default View