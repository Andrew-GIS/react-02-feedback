import {Button , ButtonBox , ButtonReset} from "./FeedbackOptions.styled";
import propTypes from 'prop-types';

const FeedbackButtons = ({options, onLeaveFeedback, onReset}) => {
	return (
		<ButtonBox>
			
			{options.map(option => (
				<Button type="button"
					key={option}
					id={option}
					onClick={() => onLeaveFeedback(option)}
					category={option}>{option[0].toUpperCase() + option.slice(1)}</Button>
			))}
			< ButtonReset type="button"
				key={options[3]}
				id={options[3]}
				onClick={onReset}>Reset</ButtonReset>
		</ButtonBox>
	)
}

export default FeedbackButtons;

FeedbackButtons.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};