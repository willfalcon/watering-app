import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Total({heading, data}) {
  const total = data.reduce((cur, acc) =>  cur + acc.total, 0); 
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs text-muted-foreground">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{total} inches</p>
      </CardContent>
    </Card>
  );
}