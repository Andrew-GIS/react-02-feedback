import { StatisticField, StatisticHeader, StatisticList, StatisticItem } from './Statistic.styled';
import propTypes from 'prop-types';

const StatisticBox = ({good, neutral, bad, total, positiveFeedbacks}) => {
	return (
		<StatisticField>
			<StatisticHeader>Statistic</StatisticHeader>
			<StatisticList>
				<StatisticItem category="good">
					<p>Good</p><span>{good}</span>
				</StatisticItem>
				<StatisticItem category="neutral">
					<p>Neutral</p><span>{neutral}</span>
				</StatisticItem>
				<StatisticItem category="bad">
					<p>Bad</p><span>{bad}</span>
				</StatisticItem>
				<StatisticItem>
					<p>Total</p><span>{total}</span>
				</StatisticItem>
				<StatisticItem>
					<p>Positive Persent</p><span>{positiveFeedbacks}%</span>
				</StatisticItem>
			</StatisticList>
		</StatisticField>)
}

StatisticBox.prototype = {
	good: propTypes.string.isRequired,
	neutral: propTypes.string.isRequired,
	bad: propTypes.string.isRequired,
	total: propTypes.number.isRequired,
	positiveFeedbacks: propTypes.number.isRequired,
	category: propTypes.string,
}

export default StatisticBox;