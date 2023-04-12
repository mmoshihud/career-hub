import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 50 },
  { name: "Assignment 3", value: 44 },
  { name: "Assignment 4", value: 55 },
  { name: "Assignment 5", value: 48 },
  { name: "Assignment 6", value: 60 },
  { name: "Assignment 7", value: 50 },
  { name: "Assignment 8", value: 60 },
];

const COLORS = [
  "#2ECC71",
  "#3498DB",
  "#9B59B6",
  "#F1C40F",
  "#E67E22",
  "#E74C3C",
  "#8B5C7E",
  "#2874A6",
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const maxVal = 60;
  const value = data[index].value;
  const displayValue =
    value === maxVal ? 100 : Math.round((value / maxVal) * 100);
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${displayValue}%`}
    </text>
  );
};

export default function Chart() {
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={300}
        cy={300}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={data} />
      <Legend />
    </PieChart>
  );
}
