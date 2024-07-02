import { addDays } from 'date-fns';

export default function getDateArray() {
  return [
    {
      date: addDays(new Date(), -7),
      watering: 0,
    },
    {
      date: addDays(new Date(), -6),
      watering: 0,
    },
    {
      date: addDays(new Date(), -5),
      watering: 0,
    },
    {
      date: addDays(new Date(), -4),
      watering: 1,
    },
    {
      date: addDays(new Date(), -3),
      watering: 0,
    },
    {
      date: addDays(new Date(), -2),
      watering: 0,
    },
    {
      date: addDays(new Date(), -1),
      watering: 0,
    },
    {
      date: new Date(),
      watering: 0,
    },
    {
      date: addDays(new Date(), 1),
      watering: 0,
    },
    {
      date: addDays(new Date(), 2),
      watering: 0,
    },
    {
      date: addDays(new Date(), 3),
      watering: 1,
    },
    {
      date: addDays(new Date(), 4),
      watering: 0,
    },
    {
      date: addDays(new Date(), 5),
      watering: 0,
    },
    {
      date: addDays(new Date(), 6),
      watering: 0,
    },
  ];
}
