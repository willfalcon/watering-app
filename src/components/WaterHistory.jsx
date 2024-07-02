import { addDays, format, fromUnixTime, isAfter } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useDispatch, useSelector } from 'react-redux';
import { BadgeMinus } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Button } from './ui/button';
import { deleteWater } from '../slices/waterSlice';
import classNames from 'classnames';

export default function WaterHistory({ className }) {
  const dispatch = useDispatch();

  const waterHistory = useSelector(state =>
    state.water
      .filter(item => {
        const startRange = addDays(new Date(), -7);
        return isAfter(fromUnixTime(item.date), startRange);
      })
      .sort((a, b) => a.date - b.date)
  );

  return (
    <Card className={classNames(className, '')}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs text-muted-foreground">Water History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Water</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {waterHistory.map(data => (
              <TableRow key={data.id} id={data.id}>
                <TableCell className="font-medium">{format(fromUnixTime(data.date), 'MMM d')}</TableCell>
                <TableCell>{data.amount} in</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <BadgeMinus />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div className="space-y-4">
                        <h3 className="font-medium">Are you sure?</h3>
                        <Button
                          variant="destructive"
                          onClick={() => {
                            dispatch(deleteWater(data.id));
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
