import styled from 'styled-components';

export const ButtonBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-left: ${p => `${p.theme.spacing(10)}`};
	margin-right: ${p => `${p.theme.spacing(10)}`};
	margin-top: ${p => `${p.theme.spacing(5)}`};
	// background-color: ${p => p.theme.colors.blue};
`;

export const Button = styled.button`
	padding: ${p => `${p.theme.spacing(2)}`};
	margin-right: ${p => `${p.theme.spacing(4)}`};
	:last-child {
    	margin-right: 0;
  	}
	text-align: center;
	font-size: ${p => p.theme.fontSizes.m};
	
`;