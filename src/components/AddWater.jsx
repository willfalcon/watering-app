import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { format, getUnixTime } from 'date-fns';

import { useDispatch } from 'react-redux';
import { addWater } from '../slices/waterSlice';
import classNames from 'classnames';

export default function AddWater({ className }) {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      date: format(new Date(), 'yyyy-MM-dd'),
      amount: 0,
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(values) {
    const date = new Date(`${values.date}T00:00:00`);

    dispatch(
      addWater({
        date: getUnixTime(date),
        amount: parseFloat(values.amount),
      })
    );
  }

  return (
    <Card className={classNames(className, '')}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs text-muted-foreground">Add Water</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              name="date"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  {/* <FormControl> */}
                  <Input {...field} type="date" />
                  {/* </FormControl> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="amount"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="amount">Amount</FormLabel>
                  {/* <FormControl> */}
                  <Input {...field} type="number" />
                  {/* </FormControl> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Add</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
