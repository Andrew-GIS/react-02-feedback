import styled from 'styled-components';

export const Message = styled.h2`
text-align: center;
padding: ${p => `${p.theme.spacing(4)}`};
font-size: ${p => `${p.theme.fontSizes.l}`};
`;