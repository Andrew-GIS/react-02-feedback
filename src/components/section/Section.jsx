import { FeedbackTitle } from './Section.styled';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
	return (
		<>
			<FeedbackTitle>{title}</FeedbackTitle>
			{children}
		</>
	)
}

Section.propTypes = {
	title: propTypes.string,
	children: propTypes.element,
};