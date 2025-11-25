import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Week 1", value: 15 },
  { name: "Week 2", value: 12 },
  { name: "Week 3", value: 18 },
  { name: "Week 4", value: 11 },
  { name: "Week 5", value: 14 },
  { name: "Week 6", value: 8 },
  { name: "Week 7", value: 12 },
  { name: "Week 8", value: 17 },
  { name: "Week 9", value: 15 },
  { name: "Week 10", value: 19 },
];

export default function MissedChatsChart() {
  return (
    <LineChart width="100%" height={230} data={data}>
      <CartesianGrid stroke="#eee" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />

      <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            return (
              <div
                style={{
                  background: "#000",
                  color: "#fff",
                  borderRadius: "6px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>Chats</div>
                <div>{payload[0].value}</div>
              </div>
            );
          }
          return null;
        }}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#00d907"
        strokeWidth={3}
        dot={{ r: 5, fill: "white", stroke: "black", strokeWidth: 2 }}
      />
    </LineChart>
  );
}
