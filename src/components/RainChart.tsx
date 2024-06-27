import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// const data = [
//   {
//     name: 'Jan',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Feb',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Mar',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Apr',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'May',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Jun',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Jul',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Aug',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Sep',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Oct',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Nov',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: 'Dec',
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
// ];
export default function RainChart({heading, data}) {
  return (
    <Card className="col-span-4 row-span-3">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        {data && (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={true} angle={60} includeHidden />
              <YAxis stroke="#888888" fontSize={12} tickLine={true} axisLine={true} tickFormatter={value => `${value} in`} />
              {/* <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" /> */}
              <Line type="monotone" dataKey="total" />
              <Tooltip contentStyle={{textTransform: 'capitalize'}} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}