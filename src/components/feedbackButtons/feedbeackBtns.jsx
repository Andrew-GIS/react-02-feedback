import { Button , ButtonBox } from "./feedbackBtns.styled";
import propTypes from 'prop-types';

export const FeedbackButtons = ({options, onLeaveFeedback}) => {
	return (
		<ButtonBox>
			
			<Button type="button"
				key={options[0]}
				id={options[0]}
				onClick={onLeaveFeedback}>Good</Button>
			<Button type="button"
				key={options[1]}
				id={options[1]}
				onClick={onLeaveFeedback}>Neutral</Button>
			<Button type="button"
				key={options[2]}
				id={options[2]}
				onClick={onLeaveFeedback}>Bad</Button>
			<Button type="button"
				key={options[3]}
				id={options[3]}
				onClick={onLeaveFeedback}>Reset</Button>
		</ButtonBox>
	)
}

FeedbackButtons.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};