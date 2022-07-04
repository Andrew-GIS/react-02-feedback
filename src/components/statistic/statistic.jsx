import {StatisticField, StatisticHeader, StatisticList, StatisticItem} from './statistic.styled'

export const StatisticBox = ({good, neutral, bad, total}) => {
	return (
		<StatisticField>
			<StatisticHeader>Statistic</StatisticHeader>
			<StatisticList>
				<StatisticItem>
					<p>Good</p><span>{good}</span>
				</StatisticItem>
				<StatisticItem>
					<p>Neutral</p><span>{neutral}</span>
				</StatisticItem>
				<StatisticItem>
					<p>Bad</p><span>{bad}</span>
				</StatisticItem>
				<StatisticItem>
					<p>Total</p><span>{total}</span>
				</StatisticItem>
			</StatisticList>
		</StatisticField>)
}