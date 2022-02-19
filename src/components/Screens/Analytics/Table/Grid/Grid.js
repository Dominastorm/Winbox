import Row from "./Row";

const details = [
  {
    date: "January 1, 2022",
    interactions: 1,
    replypercent: 30,
    progress: 30,
    sent: 1,
  },
  {
    date: "January 1, 2022",
    interactions: 1,
    replypercent: 30,
    progress: 30,
    sent: 1,
  },
  {
    date: "January 1, 2022",
    interactions: 1,
    replypercent: 30,
    progress: 30,
    sent: 1,
  },
  {
    date: "January 1, 2022",
    interactions: 1,
    replypercent: 30,
    progress: 30,
    sent: 1,
  },
];
const Grid = () => {
  const List = details.map((meal) => (
    <Row
      date={meal.date}
      interactions={meal.interactions}
      replypercent={meal.replypercent}
      progress={meal.progress}
      sent={meal.sent}
    />
  ));

  return <>{List}</>;
};

export default Grid;
