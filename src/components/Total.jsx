import classNames from 'classnames';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Total({ className, heading, data }) {
  const total = data.reduce((cur, acc) => cur + acc.rain, 0);
  return (
    <Card className={classNames(className, '')}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs text-muted-foreground">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{Math.round(total * 1000) / 1000} inches</p>
      </CardContent>
    </Card>
  );
}
