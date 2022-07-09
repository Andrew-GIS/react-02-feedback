import {Button , ButtonBox , ButtonReset} from "./FeedbackOptions.styled";
import propTypes from 'prop-types';

const FeedbackButtons = ({options, onLeaveFeedback, category}) => {
	return (
		<ButtonBox>
			<Button type="button"
				key={options[0]}
				id={options[0]}
					onClick={onLeaveFeedback}
				category="good">Good</Button>
			<Button type="button"
				key={options[1]}
				id={options[1]}
					onClick={onLeaveFeedback}
				category="neutral">Neutral</Button>
			<Button type="button"
				key={options[2]}
				id={options[2]}
					onClick={onLeaveFeedback}
				category="bad">Bad</Button>
			< ButtonReset type="button"
				key={options[3]}
				id={options[3]}
				onClick={onLeaveFeedback}>Reset</ButtonReset>
		</ButtonBox>
	)
}

export default FeedbackButtons;

FeedbackButtons.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};