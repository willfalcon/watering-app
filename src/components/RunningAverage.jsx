import classNames from 'classnames';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function RunningAverage({ className, heading, data }) {
  console.log(data);
  const adjustedValues = [data[0].rain, ...data.slice(1, 6).map(({ rain }) => rain), data[7].rain];
  const average = adjustedValues.reduce((acc, cur) => acc + cur, 0) / 8;

  return (
    <Card className={classNames(className, '')}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs text-muted-foreground">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{Math.round(average * 1000) / 1000} inches</p>
      </CardContent>
    </Card>
  );
}
