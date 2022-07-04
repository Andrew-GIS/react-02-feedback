import styled from 'styled-components';

export const StatisticField = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: ${p => `${p.theme.spacing(10)}`};
	margin-right: ${p => `${p.theme.spacing(10)}`};
	background-color: ${p => p.theme.colors.blue};`;

export const StatisticHeader = styled.h2`
	font-size: ${p => `${p.theme.fontSizes.l}`};
	margin-bottom: ${p => `${p.theme.spacing(4)}`};
	margin-top: ${p => `${p.theme.spacing(1)}`};
`;

export const StatisticList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	// align-items: center;
	padding: 0px;
	width: 70%;
	list-style-type: none;
	`;

export const StatisticItem = styled.li`
width: 100%;
hight: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;