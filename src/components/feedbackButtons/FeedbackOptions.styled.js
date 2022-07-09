import styled from 'styled-components';

export const FeedbackTitle = styled.h1`
display: flex;
justify-content: center;
aling-items: center;
`;

export const ButtonBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-left: ${p => `${p.theme.spacing(10)}`};
	margin-right: ${p => `${p.theme.spacing(10)}`};
	margin-top: ${p => `${p.theme.spacing(5)}`};
	margin-bottom: ${p => `${p.theme.spacing(5)}`};
`;

export const Button = styled.button`
	padding: ${p => `${p.theme.spacing(2)}`};
	margin-right: ${p => `${p.theme.spacing(4)}`};
	:last-child {
    	margin-right: 0;
  	}
	text-align: center;
	font-size: ${p => p.theme.fontSizes.m};
	&:hover{
		background-color: ${props => {
			switch (props.category) {
			case "good": {
				return `green`;
			}
			case "neutral": {
				return "orange";
			}
			case "bad": {
				return "red";
			}
			default: return "white";
			}
		}};
		color: ${p => p.theme.colors.white};
	}
`;

export const ButtonReset = styled.button`
	padding: ${p => `${p.theme.spacing(1)}`};
	border-radius: 50%;
	border-width: 0.5px;
	width: 50px;
	height: 50px;
	&:hover{
		background-color: ${p => p.theme.colors.red};
		color: ${p => p.theme.colors.white};
	}
`;