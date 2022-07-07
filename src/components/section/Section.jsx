import { FeedbackTitle } from './Section.styled';
import propTypes from 'prop-types';

export const Section = (title, children) => {
	return (
		<>
			<FeedbackTitle>{title}</FeedbackTitle>
			<>
				{children.map((child) => <div key={child}>child</div>)}
				</>
		</>
	)
}

Section.propTypes = {
	title: propTypes.string,
};