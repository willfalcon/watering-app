import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { format, fromUnixTime } from 'date-fns';
import classNames from 'classnames';

export default function RainChart({ className, heading, data }) {
  return (
    <Card className={classNames(className, '')}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        {data && (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={true}
                angle={60}
                includeHidden
                tickFormatter={value => {
                  return format(fromUnixTime(value), 'MMM d');
                }}
              />
              <YAxis stroke="#888888" fontSize={12} tickLine={true} axisLine={true} tickFormatter={value => `${value} in`} />
              {/* <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" /> */}
              <Line type="monotone" dataKey="rain" stroke="rgb(34 197 94)" />
              <Line type="monotone" dataKey="water" stroke="rgb(2 132 199)" />
              <Tooltip
                contentStyle={{ textTransform: 'capitalize' }}
                formatter={value => `${value} in`}
                labelFormatter={value => format(fromUnixTime(value), 'MMMM d')}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
